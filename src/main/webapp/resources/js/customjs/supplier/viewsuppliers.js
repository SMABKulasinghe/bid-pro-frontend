console.log("Outside")

$(document).ready(function() {
	viewCategoryTable = undefined;
	tbl_supplier_view = undefined;
	
	console.log("Inside");
	tbl_supplier_view = $('#tbl_supplier_view').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/supplier/viewsuppliers",
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		    	 	{ "data": "index", className: "text-right"},
		            { "data": "supName" },
					{ "data": "companyType"},
		            { "data": "RegNo", className: "text-right"},
					{ "data": "createdDateTime" },
		            { "data": "supPhone1"},
					{ "data": "district"},
					{ "data": "city"},
					{ "data": "status",
		            	 orderable: false,
		            	 render: function(data,type,row,meta) {
			
						if(row.status == "Y"){
									return '<span class="badge badge-success">Approved</span>';
								}else if(row.status == "P"){
									return '<span class="badge badge-warning">Pending</span>';
								}else if(row.status == "R"){
									return '<span class="badge badge-danger">Rejected</span>';
								}else if(row.status == "B"){
									return '<span class="label bg-purple">Blocked</span>';
								}else if(row.status == "RW"){
									return '<span class="badge badge-secondary">Request to Whitelist</span>';
								}
					
						  },	
					},
					
					{
			                     "className":      'details-control',
			                     "orderable":      false,
			                     "data":           null,
			                     "defaultContent": ''
			         }
		        ],
				'select': {
			             'style': 'multi',
			             'selector': 'td:first-child'
			          },
			          'order': [[4, 'desc']]
	});
});


$('#tbl_supplier_view tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = tbl_supplier_view.row( tr );

    if ( row.child.isShown() ) {
        row.child.hide();
        tr.removeClass('shown');
    }
    else {
        row.child( format(row.data()) ).show();
        tr.addClass('shown');
    }
} );



function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
        '<tr class="text-yellow">'+
			'<td>City</td>'+           
            '<td>Province</td>'+            
            '<td>Address Line 1</td>'+
            '<td>Address Line 2</td>'+
            '<td>Address Line 3</td>'+
            '<td>Two-Years Fee (LKR)</td>'+
		'</tr>'+
			
        '<tr>'+
          //  '<td>'+new Date(d.expiryDate).toLocaleString()+'</td>'+
			'<td>'+d.city+'</td>'+
			'<td>'+d.province+'</td>'+
            '<td>'+d.address1+'</td>'+            
            '<td>'+d.address2+'</td>'+
            '<td>'+d.address3+'</td>'+
            '<td>'+d.onetimeFee+'</td>'+
        '</tr>'+       

		'</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+

			'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
			'<tr class="text-yellow">'+  
//				'<td>Total Payment Due</td>'+
				'<td>Admin E-mail</td>'+
				'<td>Bank</td>'+
			    '<td>Branch</td>'+
			    '<td>Account No</td>'+
			    '<td>Bank Code</td>'+
				'<td>Category Details</td>'+
			'</tr>'+
			
        '<tr>'+	
//              '<td>'+d.totalPayment+'</td>'+ 
				'<td>'+d.supMailAdmin+'</td>'+ 
				'<td>'+d.bank+'</td>'+ 
			    '<td>'+d.branch+'</td>'+
			    '<td>'+d.accountNo+'</td>'+
			    '<td>'+d.bankCode+'</td>'+
				'<td><button type="button" class="btn btn-success" onclick = "viewCategories(\''+d.subCompanyID+'\')">View Categories</button></td>'+
		'</tr>'+
		
		
		'</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+

			'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
			'<tr class="text-yellow">'+  
				'<td>Name</td>'+
				'<td>Designation</td>'+
			    '<td>Contact No</td>'+
			    '<td>E-mail</td>'+
				'<td>Block Supplier Reson</td>'+
				'<td>Unblock Supplier Reson</td>'+
			'</tr>'+
			
        '<tr>'+	
				'<td>'+d.name+'</td>'+ 
				'<td>'+d.designation+'</td>'+ 
			    '<td>'+d.contactNo+'</td>'+
			    '<td>'+d.email+'</td>'+
				'<td>'+d.blockSupReason+'</td>'+
				'<td>'+d.unblockSupReason+'</td>'+
		'</tr>'+


    '</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+
    '<tr class="text-yellow">'+
	'<td>BR Form</td>'+
    '<td>KYC Form</td>'+
	'<td>BCI Form</td>'+
	'<td>Last Year Audited Reports</td>'+
	'<td>Director Details (with NIC details)</td>'+
	'<td>Company Profile</td>'+
	'<td>Company Logo</td>'+
	'<td>Main Application</td>'+
	'<td>NDB Supplier Code of Conduct</td>'+
	'<td>Supplier ES Questions</td>'+

	'<tr>'+
    '<td><Button type="file" id="download_fileformats_btn" onclick="download(\''+d.brForm+'\')" class="btn btn-success">View</Button></td>'+
	'<td><Button type="file" id="download_fileformats_btn" onclick="download(\''+d.kycForm+'\')" class="btn btn-success">View</Button></td>'+
 	'<td><Button type="file" id="download_fileformats_btn" onclick="download(\''+d.bciForm+'\')" class="btn btn-success">View</Button></td>'+
 	'<td><Button type="file" id="download_fileformats_btn" onclick="download(\''+d.auditedReports+'\')" class="btn btn-success">View</Button></td>'+
 	'<td><Button type="file" id="download_fileformats_btn" onclick="download(\''+d.directorDetails+'\')" class="btn btn-success">View</Button></td>'+
	'<td><Button type="file" id="download_fileformats_btn" onclick="download(\''+d.CompanyProfile+'\')" class="btn btn-success">View</Button></td>'+
	'<td><Button type="button" onclick="viewImage(\'CLimg\','+d.supplierID+',\''+d.supName+'\')" class="btn btn-success">View</Button></td>'+
	'<td><Button type="file" id="download_fileformats_btn" onclick="download(\''+d.mainApplication+'\')" class="btn btn-success">View</Button></td>'+
	'<td><Button type="file" id="download_fileformats_btn" onclick="download(\''+d.supCodeofConduct+'\')" class="btn btn-success">View</Button></td>'+
	'<td><Button type="file" id="download_fileformats_btn" onclick="download(\''+d.supEsQuestions+'\')" class="btn btn-success">View</Button></td>'+

     '</table>';
}



function viewImage(buttonID, supplierID, name){
	console.log(buttonID+" "+ supplierID+" "+name);
	
	 if(buttonID=="CLimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/viewsupplier/'+supplierID+'/cl');
		 $('#mdl_ar_com_name').text("Company Logo");
		 $('#mdl_ii_contract_no').text(name);
	}
	$('#mdl_view_sup').modal('toggle');
}


//PDF Download
function download(fileName){
		if(fileName == "null"){
		console.log(fileName);
		
		Swal.fire({
		  type: 'warning',
		  title: 'Not Uploaded',
		  text: 'This file is not uploaded by Supplier',
	//	  footer: '<a href="">Why do I have this issue?</a>'
		})
		
	}else{
	console.log(fileName);
	let filePath = fileName;
	const myArray = filePath.split("/");
	var fileId = myArray[6]
	var fileName = myArray[7]
	const fileNameSplit = fileName.split(".");
	var fileNameSplitForUrl = fileNameSplit[0]
	var fileNameForUrl = fileId +"/"+fileNameSplitForUrl;
	console.log(fileId);
	console.log(fileNameSplitForUrl);
	console.log(fileNameForUrl);
	//let urlHeader = "/tender/download-bidded-tender-files/"+fileNameForUrl;
	//console.log(urlHeader);
	
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink)
	window.open(globlelink+"/supplier/download-additional-view-supplier-files/"+fileNameForUrl);
	}
}


var grandTOT = 0;
function viewCategories(supplierID) {
	console.log("viewCategoryTable "+supplierID);
	$('#my_Modal').modal('toggle');
	if (viewCategoryTable == undefined) {
		console.log("Inside Category Suppliers "+supplierID)
		
		viewCategoryTable = $('#view_category_sup').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
				url:globalUrl+"/supplier/viewcategory/"+supplierID,
				type:'GET',
				headers: { 'Authorization': 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
				{"data": "index", className: "text-right"},
				{"data":"supplierName"},
				{"data":"eligibleSubCategoryName"}, 
				{"data":"eligibleCategortName"}, 
			],
			columnDefs: [
				
        ],
	});
		
	}else {
		viewCategoryTable.ajax.url(globalUrl+"/supplier/viewcategory/"+supplierID).load();
	}
	
	viewCategoryTable.on( 'xhr', function () {
    var json = viewCategoryTable.ajax.json();
//  alert( json.data.length +' row(s) were loaded' );
//  alert( json.prices.grandTotal +' Prices Loaded' );
    $('#onetime_fee').text("Grand Total (LKR): "+doCurrencyFormat(json.prices.grandTotal));
    $('#category_fee').text("Cargory Fee (LKR): "+doCurrencyFormat(json.prices.categoryTotal));
    $('#subCargory_total').text("Sub Category Fee (LKR): "+doCurrencyFormat(json.prices.subCategoryTotal));
   });
}


function viewCat(supplierID) {
			getAsyncData("/supplier/"+supplierID+"/viewcategory", function(req) {
		})
}



