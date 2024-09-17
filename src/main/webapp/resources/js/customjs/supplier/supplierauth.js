console.log("Outside")

$(document).ready(function() {
	CategorySupTable = undefined;
	tbl_supplier_auth = undefined;
	
	console.log("Inside");
	tbl_supplier_auth = $('#tbl_supplier_auth').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/supplier/auth",
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
					{ "data": "status",
		            	 orderable: false,
		            	 render: function(data,type,row,meta) {
			
						if(row.status == "Y"){
									return '<span class="badge badge-success">Approved</span>';
								}else if(row.status == "P"){
									return '<span class="badge badge-warning">Pending</span>';
								}else if(row.status == "R"){
									return '<span class="badge badge-danger">Rejected</span>';
								}else if(row.status == "RW"){
									return '<span class="badge badge-secondary">Request to Whitelist</span>';
								}
					
						  },	
					},
		            { "data": "subCompanyID",
		            	 orderable: false,
		            	 render: function(data,type,row,meta) {
					
						 return '<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="viewModle('+data+', '+row.supplierID+' ,\''+row.supName+'\', \''+row.supMailAdmin+'\')" class="btn btn-primary" style="margin-right: 10px">Go to Authorization</button>';
						  },	
								className:'text-center'
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
				//	  'order': [[3, 'asc']]	  
	});
});


$('#tbl_supplier_auth tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = tbl_supplier_auth.row( tr );

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
			'<td>City</td>'+           
            '<td>Province</td>'+            
            '<td>Address Line 1</td>'+
            '<td>Address Line 2</td>'+
            '<td>Address Line 3</td>'+
		'</tr>'+
			
        '<tr>'+
          //  '<td>'+new Date(d.expiryDate).toLocaleString()+'</td>'+
			'<td>'+d.city+'</td>'+
			'<td>'+d.province+'</td>'+
            '<td>'+d.address1+'</td>'+            
            '<td>'+d.address2+'</td>'+
            '<td>'+d.address3+'</td>'+
        '</tr>'+       

		'</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+

			'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
			'<tr class="text-yellow">'+  
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
				'<td>'+d.blockSupplierReason+'</td>'+
				'<td>'+d.unblockSupplierReason+'</td>'+
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
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/cl');
		 $('#mdl_ar_com_name').text("Company Logo");
		 $('#mdl_ii_contract_no').text(name);
	}
	$('#mdl_issue_invoice').modal('toggle');
}



/*function viewImage(buttonID, supplierID, name){
	console.log(buttonID+" "+ supplierID+" "+name);
	
	//$("#imgLocation").attr("src", path);
	
	if(buttonID=="GPimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/gp');
		 $('#mdl_ar_com_name').text("Green Policy Image");
		 $('#mdl_ii_contract_no').text(name);
	}else if(buttonID=="ICTADimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/ictad');
		 $('#mdl_ar_com_name').text("ICTAD Registration Image");
		 $('#mdl_ii_contract_no').text(name);
	}else if(buttonID=="KYCFimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/kycf');
		 $('#mdl_ar_com_name').text("KYC Form Image");
		 $('#mdl_ii_contract_no').text(name);
	}else if(buttonID=="LOSimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/los');
		 $('#mdl_ar_com_name').text("List of Services Image");
		 $('#mdl_ii_contract_no').text(name);
	}else if(buttonID=="CPimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/cp');
		 $('#mdl_ar_com_name').text("Company Profile Image");
		 $('#mdl_ii_contract_no').text(name);
	}else if(buttonID=="CALSimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/cals');
		 $('#mdl_ar_com_name').text("Current Account Last 06 months Image");
		 $('#mdl_ii_contract_no').text(name);
	}else if(buttonID=="LOTCimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/lotc');
		 $('#mdl_ar_com_name').text("List of Top15 Clients Image");
		 $('#mdl_ii_contract_no').text(name);
	}else if(buttonID=="COICimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/cot');
		 $('#mdl_ar_com_name').text("Certificate of Incorporation Image");
		 $('#mdl_ii_contract_no').text(name);
	}else if(buttonID=="CLDimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/cld');
		 $('#mdl_ar_com_name').text("Certified List of Directors Image");
		 $('#mdl_ii_contract_no').text(name);
	}else if(buttonID=="AOAimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/aoa');
		 $('#mdl_ar_com_name').text("Articles of Association Image");
		 $('#mdl_ii_contract_no').text(name);
	}else if(buttonID=="LAFAimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/lafa');
		 $('#mdl_ar_com_name').text("Latest Audited Financial Accounts Image");
		 $('#mdl_ii_contract_no').text(name);
	
    }else if(buttonID=="CLimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/cl');
		 $('#mdl_ar_com_name').text("Company Logo Image");
		 $('#mdl_ii_contract_no').text(name);
	}else if(buttonID=="RFimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/rf');
		 $('#mdl_ar_com_name').text("Registration Form Image");
		 $('#mdl_ii_contract_no').text(name);
	}else if(buttonID=="APimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/ap');
		 $('#mdl_ar_com_name').text("Address Proof Image");
		 $('#mdl_ii_contract_no').text(name);
	
	}
	$('#mdl_issue_invoice').modal('toggle');
}*/



//PDF Download
/*function download(fileName){
	console.log(fileName);
	let filePath = fileName;
	const myArray = filePath.split("/");
	var fileId = myArray[5]
	let fileName6 = myArray[6]
	const fileNameSplit = fileName6.split(".");
	var fileNameSplitForUrl = fileNameSplit[0]
	var fileNameForUrl = fileId +"/"+fileNameSplitForUrl;
	
	//let urlHeader = "/tender/download-bidded-tender-files/"+fileNameForUrl;
	//console.log(urlHeader);

	window.open("http://localhost:9222/supplier/download-additional-supplier-files/"+fileNameForUrl);	
}*/



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
		window.open(globlelink+"/supplier/download-additional-supplier-files/"+fileNameForUrl);
	}
}



var grandTOT = 0;
function viewCategories(supplierID) {
	console.log("CategorySupTable "+supplierID);
	$('#my_Modal').modal('toggle');
	if (CategorySupTable == undefined) {
		console.log("Inside Category Suppliers "+supplierID)
		
		CategorySupTable = $('#category_sup').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
				url:globalUrl+"/supplier/category/"+supplierID,
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
		CategorySupTable.ajax.url(globalUrl+"/supplier/category/"+supplierID).load();
	}
	
	CategorySupTable.on( 'xhr', function () {
    var json = CategorySupTable.ajax.json();
  //  alert( json.data.length +' row(s) were loaded' );
   // alert( json.prices.grandTotal +' Prices Loaded' );
    $('#onetime_fee').text("Grand Total (LKR): "+doCurrencyFormat(json.prices.grandTotal));
    $('#category_fee').text("Cargory Fee (LKR): "+doCurrencyFormat(json.prices.categoryTotal));
    $('#subCargory_total').text("Sub Category Fee (LKR): "+doCurrencyFormat(json.prices.subCategoryTotal));
	});
}




function viewCat(supplierID) {
			getAsyncData("/supplier/"+supplierID+"/category", function(req) {
		})
}


function Approve(data) {
	console.log(data.selectedSupplierID);
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, Approve!'
		}).then((result) => {
		  if (result.value) {
			console.log(data);
			  
		//	  getAsyncData("/supplier/"+data+"/approve", function(res) {
				var responseCode = getAsyncDataPUT("/supplier/add-supplier-comment/approve",data, function(res) {
				console.log(res);
				console.log(res.responseJSON);
		
				  if(res.responseJSON.code == "01"){
						Swal.fire(
						'Approved!',
						'New supplier has been Authorized.',
						'success'
					)
					tbl_supplier_auth.ajax.url(globalUrl + "/supplier/auth").load();
					}else{
						Swal.fire(
						'Failed!',
						'New supplier has been Failed.',
						'error'
						)
					}
			//		tbl_supplier_auth.ajax.url(globalUrl+"/supplier/auth").load();
				})
				
				if(responseCode == undefined){
							Swal.fire({
							  title: 'Sending...',
							  html: 'Please wait...',
							  allowEscapeKey: true,
							  allowOutsideClick: false,
							  imageUrl: 'http://cdn.home-designing.com/wp-content/uploads/2018/03/loading.gif',
  							  imageHeight: 120,
							  imageWidth: 120,
							  //hideOnOverlayClick: false,
							  //hideOnContentClick: false,
							  showConfirmButton: false,
							 
							});
				      }
		  }
	});
}


function Reject(data) {
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
			  
			     var responseCode = getAsyncDataPUT("/supplier/add-supplier-comment/reject",data, function(res) {
				  console.log(res);
				  console.log(res.responseJSON);
		
				  if (res.responseJSON.code == "01") {
				  Swal.fire(
					      'Removed!',
					      'New supplier has been Removed.',
					      'success'
					    )
					tbl_supplier_auth.ajax.url(globalUrl + "/supplier/auth").load();
				 	}else{
						Swal.fire(
						'Failed!',
						'New supplier has been Failed.',
						'error'
						)
					}
					$('#auth_Modal').modal('toggle');
			//		tbl_supplier_auth.ajax.url(globalUrl+"/supplier/auth").load();
				})
				
				if(responseCode == undefined){
							Swal.fire({
							  title: 'Sending...',
							  html: 'Please wait...',
							  allowEscapeKey: true,
							  allowOutsideClick: false,
							  imageUrl: 'http://cdn.home-designing.com/wp-content/uploads/2018/03/loading.gif',
  							  imageHeight: 120,
							  imageWidth: 120,
							  //hideOnOverlayClick: false,
							  //hideOnContentClick: false,
							  showConfirmButton: false,
							 
							});
				      }
		  }
	});
} 

parameter = Approve;
parameter = Reject;

var action = Approve;
var action = Reject;


var selectedSupplierID;
var supplierID;
var supplierName;
var selectedSupplierAdminEmail;
function viewModle(data, d1, d2, selectedSupplierAdminE){
	$("#auth_Modal").modal();
	$("#mdl_ii_supplierName").text(d2);
	console.log(data+" "+d1+" "+d2+" "+selectedSupplierAdminE);
	selectedSupplierID = data;
	selectedSupplierAdminEmail = selectedSupplierAdminE;
	supplierID = d1;
	supplierName = d2;
}


function changeClass(hashtag) {
	if ($(hashtag).val().length > 0) {
		$(hashtag).parent().parent().addClass('has-success')
		$(hashtag).parent().parent().removeClass('has-error')
	}else{
		$(hashtag).parent().parent().addClass('has-error')
		$(hashtag).parent().parent().removeClass('has-success')
	}
}


$('#amount').on('focusout', function() {
	changeClass('#amount');	
}); 


$('#authorize_button').on('click', function() {
	let status = 0;
	var checkedValue11 = $("input[name='payment']:checked").val()
	console.log(checkedValue11);
	if ($('#comment_supauth').val().length==0) {
		status+=1;
		$('#comment_supauth').parent().parent().addClass('has-error')
	}
	
	if ($('#amount').val().length==0) {
		status+=1;
		$('#amount').parent().parent().addClass('has-error')
	}
	
	if (checkedValue11 === undefined) {
		status+=1;
		$('#checkedValue11').parent().parent().addClass('has-error')
	}
	var checkedValue = $("input[name='payment']:checked").val()
	console.log(checkedValue);
		
	var dataObj = {
		"selectedSupplierID" : selectedSupplierID,
		"selectedSupplierAdminEmail" : selectedSupplierAdminEmail,
		"comment" : $('#comment_supauth').val(),
		"amount" : $('#amount').val(),
		"payment" : checkedValue,
	};
	console.log(dataObj);
	Approve(dataObj);
	
	if(status != 0){
            Swal.fire(
				  'Missing',
				  'Please check the required fields!',
				  'warning'
				);
            return false;
        }		
});



$('#reject_button').on('click', function() {
	let status = 0;
	var checkedValue11 = $("input[name='payment']:checked").val()
	console.log(checkedValue11);
	if ($('#comment_supauth').val().length==0) {
		status+=1;
		$('#comment_supauth').parent().parent().addClass('has-error')
	}
	
	if ($('#amount').val().length==0) {
		status+=1;
		$('#amount').parent().parent().addClass('has-error')
	}
	
	if (checkedValue11 === undefined) {
		status+=1;
		$('#checkedValue11').parent().parent().addClass('has-error')
	}
	var checkedValue = $("input[name='payment']:checked").val()
	console.log(checkedValue);
	var dataObj = {
		"selectedSupplierID" : selectedSupplierID,
		"selectedSupplierAdminEmail" : selectedSupplierAdminEmail,
		"comment" : $('#comment_supauth').val(),
		"amount" : $('#amount').val(),
		"payment" : checkedValue,
	};
	Reject(dataObj);
});



function formclear() {
	$('#comment_supauth').val('');
	$('#amount').val('');
	$('#with_pay').val('');
	$('#without_pay').val('');
}	
	
	
	


