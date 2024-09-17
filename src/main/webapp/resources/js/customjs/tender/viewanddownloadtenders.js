$('#adtionalDataDiv').hide()
$(document).ready(function() {
	aditionalDetails = undefined;
	$('#tender_id_for_aditional_details_2').select2({
		placeholder: 'Select a Tender No'
	});
	
	getAsyncData('/rfp/tendeid-for-rfp-change-id', function(res) {
		console.log(res);
		console.log(res.responseJSON);

		$('#tender_id_for_aditional_details_2').append(new Option('Select a tender no', ''))
		for (let item of res.responseJSON) {
			$('#tender_id_for_aditional_details_2').append(new Option(item.bidno + " - " + item.tendername, item.trnderid))
		}
	});		

	console.log("Inside");
	tbl_view_auth = $('#tbl_view_auth').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/tender/tenderview",
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
					{ "data": "index", className: "text-right" },
					{ "data": "bidno", className: "text-right" },
		    	 	{ "data": "tendername" },
		            { "data": "tenderdesc" },
					{ "data": "closingDateandTime" },
					{ "data": "displayRemainingTimetoUpload", className: "text-right"},
		            { "data": "status"},
					{
			                     "className":      'details-control',
			                     "orderable":      false,
			                     "data":           null,
			                     "defaultContent": ''
			         }
		        ],
		/*        dom:"<'row'<'col-sm-12'B>>" +  
		        	"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
		        "<'row'<'col-sm-12'tr>>" +
		        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
              buttons: [
                  { extend: 'copy'},
                  {extend: 'csv'},
                  {extend: 'excel', title: ''},
                  {extend: 'pdf', title: ''},
                  {extend: 'print',
                   customize: function (win){
                          $(win.document.body).addClass('white-bg');
                          $(win.document.body).css('font-size', '10px');

                          $(win.document.body).find('table')
                                  .addClass('compact')
                                  .css('font-size', 'inherit');
                  }
                  }
              ],*/
					'select': {
			             'style': 'multi',
			             'selector': 'td:first-child'
			          },
			          	 'order': [[0, 'desc']]
	});
});


var selectedTenderID;

$('#tbl_view_auth tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = tbl_view_auth.row( tr );

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


function getDateFormat(date){
	let current_datetime = new Date(date)
	let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
	console.log(formatted_date)
	return formatted_date;
}


function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
		'<tr class="text-yellow">'+           
            '<td>Coordinator 1 Name</td>'+            
            '<td>Coordinator Designation</td>'+
            '<td>Coordinator Email</td>'+
            '<td>Coordinator Contact Number</td>'+
			'</tr>'+
			
        '<tr>'+
          //  '<td>'+new Date(d.expiryDate).toLocaleString()+'</td>'+
			'<td>'+d.coordinator1Name+'</td>'+
            '<td>'+d.designation1+'</td>'+            
            '<td>'+d.email1+'</td>'+
            '<td>'+d.contactNumber1+'</td>'+           
        '</tr>'+       

		'<tr class="text-yellow">'+           
            '<td>Coordinator 2 Name</td>'+            
            '<td>Coordinator Designation</td>'+
            '<td>Coordinator Email</td>'+
            '<td>Coordinator Contact Number</td>'+
			'</tr>'+
			
        '<tr>'+
          //  '<td>'+new Date(d.expiryDate).toLocaleString()+'</td>'+
			'<td>'+d.coordinator2Name+'</td>'+
            '<td>'+d.designation2+'</td>'+            
            '<td>'+d.email2+'</td>'+
            '<td>'+d.contactNumber2+'</td>'+           
        '</tr>'+       



        '<tr class="text-yellow">'+           
           /* '<td>Remaining Days to Upload</td>'+*/            
            '<td>Enter Response</td>'+
			'<td>Support Doc 1</td>'+
			'<td>Support Doc 2</td>'+
			'<td>Download RFP</td>'+
//			'<td>Action</td>'+              
        '</tr>'+

        '<tr>'+
           /* '<td>'+d.displayRemainingTimetoUpload+'</td>'+*/
			'<td><button type="button" id="response_cat" onclick = "Response(\''+d.trnderid+'\')" class="btn btn-primary" style="margin-right: 10px" data-toggle="modal" data-target="#mdl_issue_invoice"">Click to Response</button></td>'+
			'<td><button type="file" id="download_fileformats_btn" onclick = "download(\''+d.supportDoc1+'\')" class="btn btn-success" pull-left">Download</button></td>'+
			'<td><button type="file" id="download_fileformats_btn" onclick = "download(\''+d.supportDoc2+'\')" class="btn btn-success" pull-left">Download</button></td>'+
			'<td><button type="file" id="download_fileformats_btn" onclick = "downloadRfpFile(\''+d.rfpId+'\')" class="btn btn-success" pull-left">Download</button></td>'+
//		    '<td><button type="button" class="btn btn-primary" onclick = "Confirm(\''+d.bidno+'\')">Confirm</button></td>'+

      '</tr>'+   
	  '</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+		
      '</table>';
}



$('#send_button').on('click', function() {
 console.log(selectedTenderID);
var selectedValueN = $('#response_cat_select').val();
console.log(selectedValueN);

	var view = {
			"tenderID" : selectedTenderID,
			"responseCat" : selectedValueN,
			"tenderAction" : "Yes",
			"tenderResponse" : $('#response_cat').val(),
	};
	console.log(JSON.stringify(view));


	getAsyncDataPOST("/tender/"+selectedTenderID+"/response",view ,function(res) {
		console.log(res);
		console.log(res.responseJSON);

		if (res.responseJSON.code == "00") {
			Swal.fire(
				'Accepted!',
				'Your response has been recorded',
				'success'
			)
	//		$('#mdl_issue_invoice').modal('hide');
		} else if(res.responseJSON.code == "02"){
			Swal.fire(
				'Updated!',
				'Your response has been updated',
				'success'
			)
		}else{
			Swal.fire(
				'info!',
				'So Such Record Found',
				'error'
			)
		}
		$('#mdl_issue_invoice').modal('toggle');
	//	tbl_view_auth.ajax.url(globalUrl + "/tender/tenderview").load();
	})
});	


	function Response(trnderid) {
		selectedTenderID = trnderid;
	}



 /* Download File formats ZIP file*/ 
/*function downloadRFP(trnderid){
	console.log("download rfp button clicked "+trnderid);
	var urlHeader = "/tender/downloadtenfileformats";
//	var urlHeader = "/tender/downloadref/"+bidNo;
	downloadFile(urlHeader);
}*/



function download(fileName){
	console.log(fileName);
	let filePath = fileName;
	const myArray = filePath.split("/");
	var fileId = myArray[5]
	var fileName = myArray[6]
//	const fileNameSplit = fileName.split(".");
//	var fileNameSplitForUrl = fileNameSplit[0]
	var fileNameForUrl = fileId +"/"+fileName;
	
	//let urlHeader = "/tender/download-bidded-tender-files/"+fileNameForUrl;
	//console.log(urlHeader);
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink)
	window.open(globlelink+"/tender/download-rfp-tender-files/"+fileNameForUrl);
}


function downloadRfpFile(data){
getAsyncData("/rfp/download-rfp/"+data, function(res) {
		let str = res.responseJSON.data;
		var urlHeader = "/rfp/download-rfp-csv/"+str;
		downloadFile(urlHeader);
		
		
		console.log("Approve response- "+str);
		
		//downloadFile(str);
		deleteFile(str)		
	});
}


console.log("confirm button");
function Confirm(tenderId) {
		Swal.fire({
			title: 'Did you receive the tender?',
			text: "",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, I do'
		}).then((result) => {
			if (result.value) {
				console.log(tenderId);
				
				let myObj = {
					"tenderID" : tenderId,
				//	"supplierID" : supplierId,
					"tenderAction" : "Yes",
				//	"userID" : userId,
					"vendorID" : vendorId,
					"tenderResponse" : $('#response_cat').val(),					
				};

				getAsyncDataPUT("/tender/"+tenderId+"/confirm",myObj, function(res) {
					console.log(res);
					console.log(res.responseJSON.code);
					if(res.responseJSON.code == "01"){
						Swal.fire(
						'Confirm',
						'Tender has been Success.',
						'success'
					)
					}else if(res.responseJSON.code == "02"){
						Swal.fire(
						'Failed',
						'Tender has been Failed.',
						'success'
					)
					}else{
						Swal.fire(
						'Confirm',
						'Tender has been Already Updated.',
						'success'
						)
					}
					//tbl_view_auth.ajax.url(globalUrl+"/tender/tenderview").load();					
				})
			}
	});
}

$("#searchUserIDButton").click(function(){
	if(aditionalDetails == undefined){
		
		aditionalDetails = $('#aditionalFileParamTble').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			
			ajax: {
			   	url:globalUrl+"/tender/aditional-details-for-view-tble/"+$('#tender_id_for_aditional_details_2').val(),
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			
			columns: [
					 {"data":"index"},
					 {"data":"fileName"},
			    	 {"data":"id",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							
								return '<button type="button"  class="btn btn-success" style="margin-right: 10px" onclick="fileView('+data+')">View File</button>'
							
						  },	
						},
					
						
								   			    	 
			     ],
			
			order: [[1, 'asc']],
			
		});
		console.log("Programe");
	}else{
		aditionalDetails.ajax.url(globalUrl+"/tender/aditional-details-for-edit/"+$('#tender_id_for_aditional_details_2').val()).load();
	}
	
	$('#adtionalDataDiv').show()
});

function fileView(id){
	//alert("url "+$('#tender_id_for_aditional_details_2').val()+"-"+id)
	var globlelink = sessionStorage.getItem("GlobleUrl");
	window.open(globlelink+"/tender/aditional-files-view/"+$('#tender_id_for_aditional_details_2').val()+"/"+id);	
}
