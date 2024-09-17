
$('#userTableDiv').hide()
$(document).ready(function() {
	tenderSbumissionsViewTable = undefined;
	cappexTable = undefined;
	oppexTable = undefined;
	tenderSbumissionsForFileViewTable = undefined;

	$('#tenderId').select2({
    placeholder: 'Select a Tender'
	});

	getAsyncData('/tender/get-tender-ids', function(res) {
	    console.log(res);
	    console.log(res.responseJSON.data);
	    
	      $('#tenderId').append(new Option('Select a tender no', ''))
	      for (let tender of res.responseJSON.data) {
	         // $('#tenderId').append(new Option(tender.tenderNo+" - "+ item.tendername, item.trnderid))
				$('#tenderId').append(new Option(tender.tBidNumber+"-"+tender.tenderName,tender.tenderId))
	    }
	});
	
	
});

$("#searchUserIDButton").click(function(){
	
	
	$("#btnMore").remove();
	var $tenderId= $('#getTenderIdVal').find('select').val();
	if($('#getTenderIdVal').find('select').val() == null){
		
		Swal.fire({
			type : 'error',
			title : 'Please use a different Tender number*',
			text : 'Tender number is already taken !',
			
		});
		
	}else{
			getAsyncData("/tender/get-tender-details-for-view/"+$('#getTenderIdVal').find('select').val(), function(res) {
			console.log(res);
			console.log(res.responseJSON.tendername);
			if(res.responseJSON.reponseText == "Already_Exists"){
				Swal.fire({
					type : 'error',
					title : 'This is opened Tender*',
					text : 'Tender number is already opened !',
					
				});
			}else{
				$('#tenderName').val(res.responseJSON.TenderName);
				$('#bidNo').val(res.responseJSON.BidNo);
				$('#createdBy').val(res.responseJSON.CreatedBy);
				$('#categories').val(res.responseJSON.Categories);
				$('#closing_date').val(res.responseJSON.ClosingDate +" "+ res.responseJSON.ClosingTime);
				$('#comment').val(res.responseJSON.Description);
				
				$('#cordinate_name').val(res.responseJSON.CordinatorName1);
				$('#cordinate_destination').val(res.responseJSON.CordinatorDesignation1);
				$('#cordinate_email').val(res.responseJSON.CordinatorEmail1);
				$('#cordinate_phon').val(res.responseJSON.CordinatorTP1);
				
				$('#cordinate2_name').val(res.responseJSON.CordinatorName2);
				$('#cordinate2_destination').val(res.responseJSON.CordinatorDesignation2);
				$('#cordinate2_email').val(res.responseJSON.CordinatorEmail2);
				$('#cordinate2_phon').val(res.responseJSON.CordinatorTP2);
				
				$("#rfpDetailsDiv").append('<button type="button" id="btnMore"  class="btn btn-success" style="margin-right: 10px" onclick="getMore('+res.responseJSON.RfpID+')">View</button>');
				
			$('#userTableDiv').show()
			}
			
			 
			
		});
	}
	
	
	
	
});

//var tenderSbumissionsViewTable;

$("#searchUserIDButton").click(function(){
	
	if($('#getTenderIdVal').find('select').val() == ""){
		Swal.fire({
			type : 'error',
			title : 'Please select Tender number*',
			text : 'You have not selected the tender number !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
	}else{
		
		if(tenderSbumissionsViewTable == undefined){
		tenderSbumissionsViewTable = $('#tenderSubmissionsTable').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
			   	url:globalUrl+"/tender/get-tender-details-for-view-table/"+$('#getTenderIdVal').find('select').val(),
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 /*{"data":"CompanyCode"},*/
					 {"data":"Index"},
			    	 {"data":"UserName"},
					 {"data":"TpNumber"},
					 {"data":"Email"},
					 /*{"data":"LogedUser"},*/
					 
					 
					 
					/* {"data":"FinancialFile",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="download('+data+')">Download</button>'
							  
						  },	
						},
					{"data":"CompanyProfile",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="download('+data+')">Download</button>'
							  
						  },	
						},
					{"data":"RfpFile",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="downloadRfpFile('+data+')">Download</button>'
							  
						  },	
						},
						*/
					{
			                     "className":      'details-control',
			                     "orderable":      false,
			                     "data":           null,
			                     "defaultContent": ''
			         },
						
					/*{"data":"SupportDoc1",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="downloadRfpFile('+data+')">Download</button>'
							  
						  },	
						},*/
						
					/*{"data":"SupportDoc2",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="downloadRfpFile('+data+')">Download</button>'
							  
						  },	
						},*/
						
					/*{"data":"SupportDoc3",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="downloadRfpFile('+data+')">Download</button>'
							  
						  },	
						},*/
						
					
					
			   
			    	 
			     ],
			order: [[1, 'asc']],
		})
		
		}else{
			tenderSbumissionsViewTable.ajax.url(globalUrl+"/tender/get-tender-details-for-view-table/"+$('#getTenderIdVal').find('select').val()).load();
		}
	}
	//$('#userTableDiv').show()


	if(tenderSbumissionsForFileViewTable == undefined){
		tenderSbumissionsForFileViewTable = $('#fileViewTable').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
			   	url:globalUrl+"/tender/get-financial_doc-for-view/"+$('#getTenderIdVal').find('select').val(),
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					
					 {"data":"Index"},
			    	 {"data":"UserName"},
					 {"data":"financialDoc",
					 	orderable: false,
						render: function(data,type,row,meta) {
						console.log(data);
						console.log(data.financial_doc);
							 return '<Button type="button" data-financial_doc = "'+row.financialDoc+'" class="btn btn-primary" onclick="upload(event)">View Document</Button>' ;
							 
						},
					
					},
			    	 
			     ],
			order: [[1, 'asc']],
		})
		
		}
		
});

$('#tenderSubmissionsTable tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = tenderSbumissionsViewTable.row( tr );

    if ( row.child.isShown() ) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
    }
    else {
        // Open this row
        row.child( format(row.data()) ).show();
        tr.addClass('shown');
    }
} );


function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
        '<tr class="text-yellow">'+           
           /* '<td>Remaining Days to Upload</td>'+*/ 
//			'<th>Financial Details</th>'+ 
			'<th>Company Profile</th>'+
			'<th>RFP File</th>'+        
            '<td>Support Doc 1</td>'+
			'<td>Support Doc 2</td>'+
			'<td>Support Doc 3</td>'+
              
        '</tr>'+

        '<tr>'+
           /* '<td>'+d.displayRemainingTimetoUpload+'</td>'+TenderId/SupplierId*/
//			'<td><button type="button"  class="btn btn-primary" style="margin-right: 10px" onclick="financialFileView(\''+d.TenderId+'\',\''+d.SupplierId+'\')">View</button></td>'+
			'<td><button type="button"  class="btn btn-primary" style="margin-right: 10px" onclick="download(\''+d.CompanyProfile+'\')">View</button></td>'+
			'<td><button type="button"  class="btn btn-primary" style="margin-right: 10px" onclick="downloadRfpFile(\''+d.RfpFile+'\')">View</button></td>'+
			'<td><button type="button" id="response_cat" onclick = "download(\''+d.SupportDoc1+'\')" class="btn btn-primary" >View</button></td>'+
			'<td><button type="file" id="download_fileformats_btn" onclick = "download(\''+d.SupportDoc2+'\')" class="btn btn-info pull-left">View</button></td>'+
		    '<td><button type="button" class="btn btn-primary" onclick = "download(\''+d.SupportDoc3+'\')">View</button></td>'+

      '</tr>'+   
		'</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+
		
    '</table>';
}



function getMore(data){
	
	getAsyncData("/rfp/rfpdetail/"+data, function(res) {
				let row = "";
				let table = "";
				$("#rfpDetailsResponses td").remove();
				var n = 1;
				for(var i in res.responseJSON.data){
					
					
					row = `<tr>
								<td>${[n]}</td>
								<td>${res.responseJSON.data[i].rfpHeaderName } </td>
								<td>${res.responseJSON.data[i].rfpDetailsName } </td>
								
							</tr>`
					table = $('#rfpDetailsResponses').find('tbody')
					table.append(row);
					
					n++;
				}
				
				str = JSON.stringify(res);
				console.log("Approve response- "+str);
				//console.log("Approve response 111- "+res);
				console.table(res.responseJSON.data);
		
	});
	
	$('#mdl_issue_invoice').modal('toggle');
}

function financialFileView(TenderId,SupplierId){
	console.log(TenderId)
	console.log(SupplierId)
	
		if(cappexTable == undefined){
		cappexTable = $('#CappexTable').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
			   	url:globalUrl+"/tender/get-financial-detail-for-cappex/"+TenderId+"/"+SupplierId,
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 {"data":"CurrencyType"},
			    	 {"data":"Amount"},
					 {"data":"Comments"},
					 {"data":"FinacialCodeDes"},
			   
			     ],
			
		})
		
		}else{
			cappexTable.ajax.url(globalUrl+"/tender/get-financial-detail-for-cappex/"+TenderId+"/"+SupplierId).load();
		}
		
		if(oppexTable == undefined){
		oppexTable = $('#oppexTable').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
			   	url:globalUrl+"/tender/get-financial-detail-for-oppex/"+TenderId+"/"+SupplierId,
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 {"data":"CurrencyType"},
			    	 {"data":"Amount"},
					 {"data":"Comments"},
					 {"data":"FinacialCodeDes"},
			   
			     ],
			
		})
		
		}else{
			cappexTable.ajax.url(globalUrl+"/tender/get-financial-detail-for-oppex/"+TenderId+"/"+SupplierId).load();
		}
		
		
		getAsyncData('/tender/get-financial-detail-for-cappex-opexx/'+TenderId+'/'+SupplierId, function(res) {
	    	console.log(res.responseJSON.Amountlkr);
			var lkr = res.responseJSON.Amountlkr;
			var usd = res.responseJSON.AmountUsd;
			if(lkr == null){
				$("#amountUSDOfallDiv p").remove();
				$('#amountLKROfallDiv').append(`<p id="add1" class="pull-right" style="font-size: 12px">Amount of LKR - 0.00 </p>`);
			}else{
				$("#amountLKROfallDiv p").remove();
				$('#amountLKROfallDiv').append(`<p id="add1" class="pull-right" style="font-size: 12px">Amount of LKR - ${res.responseJSON.Amountlkr}</p>`);
			}
			
			if(usd == null){
				$("#amountUSDOfallDiv p").remove();
				$('#amountUSDOfallDiv').append(`<p id="add1" class="pull-right" style="font-size: 12px">Amount of USD - 0.00 </p>`);
			}else{
				$("#amountUSDOfallDiv p").remove();
				$('#amountUSDOfallDiv').append(`<p id="add1" class="pull-right" style="font-size: 12px">Amount of USD - ${res.responseJSON.AmountUsd}</p>`);
			}
			
			
		});
	
	
	$('#mdl_supplier_registration').modal('toggle');
}
	
function upload(event){
	console.log(event.target.getAttribute('data-financial_doc'));
	
	let filePath = event.target.getAttribute('data-financial_doc');
	const myArray = filePath.split("/");
	var fileId = myArray[6]
	console.log("fileId "+fileId);
	var fileName = myArray[7]
	console.log("fileName "+fileName);
	const fileNameSplit = fileName.split(".");
	var fileNameSplitForUrl = fileNameSplit[0]
	var fileNameForUrl = fileId +"/"+fileNameSplitForUrl;
	
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink)
	window.open(globlelink+"/tender/financial-response-file-upload-view/"+fileNameForUrl);
	
}

function download(fileName){
	console.log(fileName);
	let filePath = fileName;
	const myArray = filePath.split("/");
	var fileId = myArray[6]
	var fileName6 = myArray[7]
	const fileNameSplit = fileName6.split(".");
	var fileNameSplitForUrl = fileNameSplit[0]
	var fileNameForUrl = fileId +"/"+fileNameSplitForUrl;
	console.log(fileId);
	console.log(fileNameSplitForUrl);
	//let urlHeader = "/tender/download-bidded-tender-files/"+fileNameForUrl;
	//console.log(urlHeader);
	
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink)
	window.open(globlelink+"/tender/download-bidded-tender-files/"+fileNameForUrl);	
}

function downloadRfpFile(data){
	console.log(data);
	let filePath = data;
	const myArray = filePath.split("/");
	var fileId = myArray[6]
	var fileName = myArray[7]
	const fileNameSplit = fileName.split(".");
	var fileNameSplitForUrl = fileNameSplit[0]
	var fileNameForUrl = fileId +"/"+fileNameSplitForUrl;
	
	getAsyncData("/tender/download-bidded-tender-rfp-files/"+fileNameForUrl, function(res) {
		console.log(res);
		var blob = new Blob([res.responseText], { type: "text/csv" });
 
                    //Check the Browser type and download the File.
                    var isIE = false || !!document.documentMode;
                    if (isIE) {
                        window.navigator.msSaveBlob(blob, fileName);
                    } else {
                        var url = window.URL || window.webkitURL;
                        link = url.createObjectURL(blob);
                        var a = $("<a />");
                        a.attr("download", fileName);
                        a.attr("href", link);
                        $("body").append(a);
                        a[0].click();
                        $("body").remove(a);
                    }
	});
	
}



/*
function fiancialresponsedoc() {
if(tenderSbumissionsForFileViewTable == undefined){
		tenderSbumissionsForFileViewTable = $('#fileViewTable').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
			   	url:globalUrl+"/tender/get-financial_doc-for-view/"+$('#getTenderIdVal').find('select').val(),
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					
					 {"data":"Index"},
			    	 {"data":"UserName"},
					 {"data":"financial_doc"},
			    	 
			     ],
			order: [[1, 'asc']],
		})
		
		}
		*/