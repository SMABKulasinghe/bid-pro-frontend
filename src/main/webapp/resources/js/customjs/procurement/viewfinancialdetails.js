$('#viewFinanceTable').hide();

$(document).ready(function() {
	table_view_finance = undefined;
	cappexTable = undefined;
	oppexTable = undefined;

$('#finan_tenderid').select2({
		placeholder: 'Select a Tender No'
	});

 getAsyncData('/tender/get-tender-Ids', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		  $('#finan_tenderid').append(new Option('Select a tender no', ''))
		  for (let item of res.responseJSON) {
			  $('#finan_tenderid').append(new Option(item.bidno+" - "+ item.tendername, item.trnderid))
		}
	});
});



var selectedTendderIdfor;
$("body").on('change', '#finan_tenderid', function(e) {
	
	let tender_ID = $('#finan_tenderid').val();
	console.log(tender_ID);
	loadTable(tender_ID)
	selectedTendderIdfor = tender_ID;
});



function loadTable(tender_ID) {
	$('#viewFinanceTable').show();
	if (table_view_finance == undefined) {
		table_view_finance = undefined;
		console.log("Inside");
	table_view_finance = $('#table_view_finance').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/tender/get-financial-view/tendrID/"+tender_ID,
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		    	 	{ "data": "index", className: "text-right"},
		            { "data": "supName" },
		            { "data": "phoneNumber"},
					{ "data": "email"}, 
					
					{
			                     "className":      'details-control',
			                     "orderable":      false,
			                     "data":           null,
			                     "defaultContent": ''
			         },
		        ],
			          'order': [[1, 'desc']]
	});
	}else{
		console.log("Else me");
		console.log("tender_ID "+tender_ID);		
		if(!(tender_ID =="")){
			table_view_finance.ajax.url(globalUrl + "/tender/get-financial-view/tendrID/"+tender_ID).load();
		}
	}
}



$('#table_view_finance tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = table_view_finance.row( tr );

    if ( row.child.isShown() ) {
        row.child.hide();
        tr.removeClass('shown');
    }
    else {
        row.child( format(row.data()) ).show();
        tr.addClass('shown');
    }
});



function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+

        '<tr class="text-yellow">'+           
			'<th>Financial Details</th>'+ 
			'<th>Financial Document</th>'+
        '</tr>'+

        '<tr>'+
			'<td><button type="button"  class="btn btn-success" style="margin-right: 10px" onclick="financialFileView(\''+d.TenderId+'\',\''+d.SupplierId+'\')">View</button></td>'+
			'<td><button type="file" id="download_fileformats_btn" onclick = "download(\''+d.FinancialFile+'\')" class="btn btn-success">View Document</button></td>'+
      '</tr>'+   
		'</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+
		
    '</table>';
}



function download(fileName){
	if(fileName == "null"){
		console.log(fileName);
		
		Swal.fire({
		  type: 'warning',
		  title: 'Not Submitted',
		  text: 'This file is not submitted by Tender',
	//	  footer: '<a href="">Why do I have this issue?</a>'
		})
		
	}else{
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
	console.log(fileNameForUrl);
	
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink)
	window.open(globlelink+"/tender/download-financial-response-file/"+fileNameForUrl);	
	}	
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
			   	url:globalUrl+"/tender/get-view-financial-detail-for-cappex/"+TenderId+"/"+SupplierId,
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
			cappexTable.ajax.url(globalUrl+"/tender/get-view-financial-detail-for-cappex/"+TenderId+"/"+SupplierId).load();
		}
		if(oppexTable == undefined){
		oppexTable = $('#oppexTable').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
			   	url:globalUrl+"/tender/get-view-financial-detail-for-oppex/"+TenderId+"/"+SupplierId,
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
			cappexTable.ajax.url(globalUrl+"/tender/get-view-financial-detail-for-oppex/"+TenderId+"/"+SupplierId).load();
		}
		
		getAsyncData('/tender/get-view-financial-detail-for-cappex-opexx/'+TenderId+'/'+SupplierId, function(res) {
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
	$('#mdl_financial_details').modal('toggle');
}




