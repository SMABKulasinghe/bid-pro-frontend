$('#procurementVoteCol').hide()
rfpId2 = undefined;
$(document).ready(function() {
	procVoteTable = undefined;
	tenderSbumissionsViewTable = undefined;
	cappexTable = undefined;
	oppexTable = undefined;
	tenderSbumissionsForFileViewTable = undefined;
	mit_table = undefined;
	
	
	  $('#reg_date').datepicker({
	      autoclose: true
	    });

$('#procVote').select2({
		placeholder: 'Select a Tender No'
	});

 getAsyncData('/procurement/tenderid', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		  $('#procVote').append(new Option('Select a tender no', ''))
		  for (let item of res.responseJSON) {
			  $('#procVote').append(new Option(item.bidno+" - "+ item.tendername, item.trnderid))
		}
	});
});


var $tenderId;
$("body").on('change', '#procVote', function(e){
	
	
	//loadMyTable($("#tenderIddd").val());
	
	$tenderId= $(this).val();
	
	
	if(procVoteTable == undefined){
		console.log("5");
		procVoteTable = $('#procurementVote').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			
			
			ajax: {
			   	url:globalUrl+"/procurement/voting-details-and-voting/"+$tenderId,
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 
			    	 {"data":"index",},					 
					 {"data":"supplierName"},
					/* {"data":"comment",
				orderable: false,
					render: function(data,type,row,meta) {
				return'<input id="commentinput" class="form-control" name="comment" autocomplete="off" placeholder="Reason" type="text"/>'
				},
				},
				*/
				/*
				{"data": "procComId",
					"'orderable": false,
					render: function(data, type, row, meta) {
						console.log(row.isSubmited);
						if(!row.isSubmited == true){
							return '<input type="text" class="form-control" id="' + row.voteID + '"  placeholder ="Comment" autocomplete="off" />';
						}else{
							return 'Already Submited';
						}
					},
					
					"className": 'text-center'
				},
				*/
				
				/*{"data":"procComId",
					orderable: false,
					render: function(data,type,row,meta) {
						//return'<button type="button" class="btn btn-primary" style="margin : 5px" onclick="Approve('+data+')">Authorize</button>&emsp;<strong></strong>'+
							//'<button type="button" class="btn btn-danger" style="margin : 5px" onclick="Reject('+data+')">Reject</button> &nbsp; &nbsp;'
							
							 return '<button type="button"  class="btn btn-primary" style="margin-right: 10px" onclick="viewMoodle('+data+','+row.tenderId+','+row.supplierId+')" class="btn btn-primary" style="margin-right: 10px">Vote to supplier</button>';
					},
					"className": 'text-center'
					},*/
					{"data":"procComId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.voteStatus == 19){
								return '<button type="button"  class="btn btn-success" style="margin-right: 10px" onclick="viewMoodle('+data+','+row.tenderId+','+row.supplierId+')">Vote to supplier</button>'
							}else if(row.voteStatus == 18){
								
								return '<span class="badge badge-primary">Voted</span>'
							}else if(row.voteStatus == 20){
								
								return '<span class="badge badge-danger">Rejected vote</span>'
							}
							  
							  
						  },"className": 'text-center'	
					},
					/*
					 {"data":"procComId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.voteStatus == 19){
								return '<button type="button"  class="btn btn-success" style="margin-right: 10px" onclick="voteToSupplier('+data+','+row.tenderId+','+row.supplierId+')">Vote to supplier</button>'
							}else if(row.voteStatus == 18){
								
								return '<span class="badge badge-primary">Voted</span>'
							}else if(row.voteStatus == 20){
								
								return '<span class="badge badge-danger">Rejected vote</span>'
							}
							  
							  
						  },	
					},
					*/
					{
			           "className":      'details-control',
			           "orderable":      false,
			           "data":           null,
			           "defaultContent": ''
			         },
					
			     ],
			order: [[1, 'asc']],
			//pageLength : 5,
			
    		
		})
		
		}else{
			console.log("Else part");
			
			procVoteTable.ajax.url(globalUrl+"/procurement/voting-details-and-voting/"+$tenderId).load();
			
		}
		
		
		//tender more details
		$("#rfpDetailsDiv button").remove();
		$("#btnMore").remove();
		getAsyncData("/tender/get-tender-details-for-view/"+$tenderId, function(res) {
			console.log(res);
			console.log(res.responseJSON.tendername);
			
			rfpId2 = res.responseJSON.RfpID
			console.log(res.responseJSON.RfpID);
			
			
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
				$("#rfpDetailsDiv button").remove();
				$("#btnMore").remove();
				
				$("#rfpDetailsDiv").append('<button type="button" id="btnMore"  class="btn btn-success" style="margin-right: 10px" onclick="getMore('+rfpId2+')">View</button>');
				
				$("#procurementReqDiv button").remove();
				$("#procurement_req").remove();
				$("#procurementReqDiv").append('<button type="button" id="procurement_req"  class="btn btn-success" style="margin-right: 10px" onclick="getMoreProcurementReq('+rfpId2+')">View</button>');
				
				$("#mitDiv button").remove();
				//$("#procurement_req").remove();
				$("#mitDiv").append('<button type="button" id="getMoreMit"  class="btn btn-success" style="margin-right: 10px" onclick="getMoreMit('+$tenderId+')">View</button>');
				
			$('#procurementVoteCol').show()	
			$('#userTableDiv').show()
			}
			
			 
			
		});
		
});

//var selectedProcComId;
//console.log("Selected -- "+data);
//console.log($(this).val())
var tenderid;
var supplierId;

function viewMoodle(data,tenderid,supplierID){
	$("#voteModal").modal();
	$("#supplierName").text(supplierID);
	console.log(data+" "+tenderid+" "+supplierID+" ");
	selectedProcComId = data;
	console.log("Selected -- "+data);
supplierId = supplierID;
tenderid = tenderid;
console.log("tenderId -- "+tenderid);
	console.log("supplierId -- "+supplierId);
}

$('#reject_button').on('click', function() {
	var dataObj = {
		"selectedProcComId" : selectedProcComId,
		"comment" : $('#comment_vote').val(),
		"isVoted" : false,
		"tenderid" :$tenderId,
	};
	Reject(dataObj);
});


$('#vote_button').on('click', function() {
	var dataObj = {
		"selectedProcComId" : selectedProcComId,
		"comment" : $('#comment_vote').val(),
		"isVoted" : true,
		"tenderid" :$tenderId,
	};
	Vote(dataObj);
});


function Vote(data){	
	
	Swal.fire({
	  title: 'You can only vote to one supplier',
	  text: "Are you sure?",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, Accept!'
		}).then((result) => {
		  if (result.value) {
			
			  getAsyncDataPUT("/procurement/vote-to-supplier/vote/"+supplierId,data,function(res) {
					//	 getAsyncData("/procurement/vote-to-supplier/"+data+"/voted/"+tenderid+"/"+supplierId, function(res) {
			  procVoteTable.ajax.url(globalUrl+"/procurement/voting-details-and-voting/"+$tenderId).load();
			 	})
		  
		  }
		});
}



function Reject(data){	
	
	Swal.fire({
	  title: 'Do you want to reject?',
	  text: "Are you sure?",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, Accept!'
		}).then((result) => {
		  if (result.value) {
			
			getAsyncDataPUT("/procurement/vote-to-supplier/vote/"+supplierId,data,function(res) {
				 //getAsyncData("/procurement/vote-to-supplier/"+data+"/voted/"+tenderid+"/"+supplierId, function(res) {
			  procVoteTable.ajax.url(globalUrl+"/procurement/voting-details-and-voting/"+$tenderId).load();
			  
			 	})
		  
		  }
		})
}
//getAsyncData("/tender/validated/tenderId/" + tender_ID + "/venderID/" + vender_ID, function(res) {


function formclear() {
	console.log("formclear");
	$('#proc_tenderid').val('').trigger("change");
}

function getMore(data){
	
	
	if(data== undefined){
		getAsyncData("/rfp/rfpdetail/"+rfpId2, function(res) {
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
	}else{
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
	}
	
	
	$('#mdl_issue_invoice').modal('toggle');
}

function getMoreProcurementReq(data){
	
	if(data== undefined){
		
		getAsyncData("/procurement/get-rfp-details-for-view/"+rfpId2, function(res) {
			console.log(res);
			
				
				$('#pro_department').val(res.responseJSON.department);
				$('#pro_requester').val(res.responseJSON.requester);
				$('#pro_approval').val(res.responseJSON.hod);
				$('#pro_name').val(res.responseJSON.name);
				$('#pro_date').val(res.responseJSON.date);
				$('#pro_designation').val(res.responseJSON.designation);
				
				$('#pro_projectCost').val(res.responseJSON.estimatedProj);
				$('#pro_supplier').val(res.responseJSON.exisitingSupllier);
				$('#pro_prices').val(res.responseJSON.exsitingPrice);
				$('#purchase_date').val(res.responseJSON.lastPcApprovedDate);
				$('#bidding_period').val(res.responseJSON.biddingPeriod);
				$('#pro_clarifications').val(res.responseJSON.staffContactDetails);
				$('#payment_terms').val(res.responseJSON.paymentTerm);
				$('#quotation').val(res.responseJSON.quotationValidPeriod);
				$('#delivery_period').val(res.responseJSON.expectedDelPeriod);
				$('#warranty_period').val(res.responseJSON.warrentyPeriod);
				$('#market_contact').val(res.responseJSON.RecommendedVendor);
				$('#important_noted').val(res.responseJSON.note);
				
				$('#budgeted').val(res.responseJSON.budgeted);
				$('#expenditure').val(res.responseJSON.expenditure);
				$('#type').val(res.responseJSON.type);
				$('#samplerequirement').val(res.responseJSON.sampleRequirment);
				$('#meetingReq').val(res.responseJSON.preBidMeetingReq);
				$('#goodAndServiceCat').val(res.responseJSON.goodAndService);
				
				$("#rfpDetailsDiv button").remove();
				$("#btnMore").remove();
				$("#rfpDetailsDiv").append('<button type="button" id="btnMore"  class="btn btn-success" style="margin-right: 10px" onclick="getMore('+res.responseJSON.RfpID+')">View</button>');
				
				$("#procurementReqDiv button").remove();
				$("#procurement_req").remove();
				$("#procurementReqDiv").append('<button type="button" id="procurement_req"  class="btn btn-success" style="margin-right: 10px" onclick="getMoreProcurementReq('+res.responseJSON.RfpID+')">View</button>');
				
			$('#procurementVoteCol').show()	
			$('#userTableDiv').show()
			$('#mdl_procurement_req').modal('toggle');
			
			
			 
			
		});
		
	}else{
		
		getAsyncData("/procurement/get-rfp-details-for-view/"+data, function(res) {
			console.log(res);
			
				
				$('#pro_department').val(res.responseJSON.department);
				$('#pro_requester').val(res.responseJSON.requester);
				$('#pro_approval').val(res.responseJSON.hod);
				$('#pro_name').val(res.responseJSON.name);
				$('#pro_date').val(res.responseJSON.date);
				$('#pro_designation').val(res.responseJSON.designation);
				
				$('#pro_projectCost').val(res.responseJSON.estimatedProj);
				$('#pro_supplier').val(res.responseJSON.exisitingSupllier);
				$('#pro_prices').val(res.responseJSON.exsitingPrice);
				$('#purchase_date').val(res.responseJSON.lastPcApprovedDate);
				$('#bidding_period').val(res.responseJSON.biddingPeriod);
				$('#pro_clarifications').val(res.responseJSON.staffContactDetails);
				$('#payment_terms').val(res.responseJSON.paymentTerm);
				$('#quotation').val(res.responseJSON.quotationValidPeriod);
				$('#delivery_period').val(res.responseJSON.expectedDelPeriod);
				$('#warranty_period').val(res.responseJSON.warrentyPeriod);
				$('#market_contact').val(res.responseJSON.RecommendedVendor);
				$('#important_noted').val(res.responseJSON.note);
				
				$('#budgeted').val(res.responseJSON.budgeted);
				$('#expenditure').val(res.responseJSON.expenditure);
				$('#type').val(res.responseJSON.type);
				$('#samplerequirement').val(res.responseJSON.sampleRequirment);
				$('#meetingReq').val(res.responseJSON.preBidMeetingReq);
				$('#goodAndServiceCat').val(res.responseJSON.goodAndService);
				
				$("#rfpDetailsDiv button").remove();
				$("#btnMore").remove();
				$("#rfpDetailsDiv").append('<button type="button" id="btnMore"  class="btn btn-success" style="margin-right: 10px" onclick="getMore('+res.responseJSON.RfpID+')">View</button>');
				
				$("#procurementReqDiv button").remove();
				$("#procurement_req").remove();
				$("#procurementReqDiv").append('<button type="button" id="procurement_req"  class="btn btn-success" style="margin-right: 10px" onclick="getMoreProcurementReq('+res.responseJSON.RfpID+')">View</button>');
				
			$('#procurementVoteCol').show()	
			$('#userTableDiv').show()
			$('#mdl_procurement_req').modal('toggle');
			
			
			 
			
		});
		
	}
	
}

function getMoreMit(tenderId){
	
	if (mit_table == undefined) {
		mit_table = undefined;
		console.log("Inside");
		mit_table = $('#mit_table').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/evaluation/view-mit-details/mitID/" + tenderId,
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		    	 		{"data": "index", className: "text-right"},
		            	{"data": "viewPicture",
							orderable: false,
		            		render: function(data,type,row,meta) {
							   return '<button type="button" class="btn btn-success" style="margin-right: 10px" onclick="viewImage(\'MITimg\', \''+row.mitID +'\' ,\''+row.tendername+'\')">View</button>'
						 	},	
						},
					
						{"data": "viewFile",
						 	 orderable: false,
		            		 render: function(data,type,row,meta) {
						 	   return '<button type="file" id="download_fileformats_btn" class="btn btn-success" onclick="downloadMit(\''+row.uploadFile+'\')">View</button>'
							},	

						},
					
		            	{"data": "description"},
		        	 ],

				'select': {
			             'style': 'multi',
			             'selector': 'td:first-child'
			          },
			          'order': [[3, 'desc']]  
		});
	} else {
		
		mit_table.ajax.url(globalUrl+"/evaluation/view-mit-details/mitID/" + tenderId).load();
		
	}
	$('#mdl_mit').modal('toggle');
}

function downloadMit(fileName){
	console.log(fileName);
	let filePath = fileName;
	const myArray = filePath.split("/");
	var fileId = myArray[5]
	var fileName5 = myArray[6]
	const fileNameSplit = fileName5.split(".");
	var fileNameSplitForUrl = fileNameSplit[0]
	var fileNameForUrl = fileId +"/"+fileNameSplitForUrl;
	console.log(fileId);
	console.log(fileNameSplitForUrl);
	console.log(fileNameForUrl);
	//let urlHeader = "/tender/download-bidded-tender-files/"+fileNameForUrl;
	//console.log(urlHeader);
	
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink)
	window.open(globlelink+"/evaluation/download-MITdetails-view-files/"+fileNameForUrl);
}


$('#procurementVote tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = procVoteTable.row( tr );

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

function viewImage(buttonID, mitID, name){
	console.log(buttonID+" "+ mitID+" "+name);
	
	 if(buttonID=="MITimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/viewmitpicture/'+mitID+'/mit');
		 $('#mdl_com_name').text("View Picture");
		 $('#mdl_ii_sup_no').text(name);
	}
	$('#mdl_view_Picture').modal('toggle');
}

function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
        '<tr class="text-yellow">'+           
           /* '<td>Remaining Days to Upload</td>'+*/ 
			'<th>Financial Details</th>'+ 
			'<th>Company Profile</th>'+
			'<th>RFP File</th>'+        
            '<td>Support Doc 1</td>'+
			'<td>Support Doc 2</td>'+
			'<td>Support Doc 3</td>'+
              
        '</tr>'+

        '<tr>'+
           /* '<td>'+d.displayRemainingTimetoUpload+'</td>'+TenderId/SupplierId*/
			'<td><button type="button"  class="btn btn-primary" style="margin-right: 10px" onclick="financialFileView(\''+d.tenderId+'\',\''+d.supplierId+'\')">View</button></td>'+
			'<td><button type="button"  class="btn btn-primary" style="margin-right: 10px" onclick="download(\''+d.CompanyProfile+'\')">View</button></td>'+
			'<td><button type="button"  class="btn btn-primary" style="margin-right: 10px" onclick="downloadRfpFile(\''+d.RfpFile+'\')">View</button></td>'+
			'<td><button type="button" id="response_cat" onclick = "download(\''+d.SupportDoc1+'\')" class="btn btn-primary" >View</button></td>'+
			'<td><button type="file" id="download_fileformats_btn" onclick = "download(\''+d.SupportDoc2+'\')" class="btn btn-info pull-left">View</button></td>'+
		    '<td><button type="button" class="btn btn-primary" onclick = "download(\''+d.SupportDoc3+'\')">View</button></td>'+

      '</tr>'+   
		'</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+
		
    '</table>';
}
/*function notvoteToSupplier(data,tenderid,supplierId){
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, Reject!'
		}).then((result) => {
		  if (result.value) {
			
			  getAsyncData("/procurement/vote-to-supplier/"+data+"/notvoted/"+tenderid+"/"+supplierId, function(res) {
			  procVoteTable.ajax.url(globalUrl+"/procurement/voting-details-and-voting/"+tenderid).load();
			 	})
		  
		  }
		})
}*/
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