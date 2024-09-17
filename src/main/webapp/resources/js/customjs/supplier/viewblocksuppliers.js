console.log("Outside")

$(document).ready(function() {
	viewblockCategoryTable = undefined;
	tbl_viewBlock_supplier = undefined;
	
	console.log("Inside");
	tbl_viewBlock_supplier = $('#tbl_viewBlock_supplier').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/supplier/view-block-suppliers",
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		    	 	{ "data": "index", className: "text-right"},
		            { "data": "supName" },
					{ "data": "companyType"},
		            { "data": "RegNo", className: "text-right"},
		            { "data": "supPhone1"},
					{ "data": "district"},
					{ "data": "city"},
					{ "data": "status",
		            	 orderable: false,
		            	 render: function(data,type,row,meta) {
			
						if(row.status == "Y"){
									return '<span class="badge badge-success">Approved</span>';
								}else if(row.status == "B"){
									return '<span class="label bg-purple">Blocked</span>';
								}else if(row.status == "P"){
									return '<span class="badge badge-warning">Pending</span>';
								}
						  },	
					},
					{ "data": "subCompanyID",
		            	 orderable: false,
		            	 render: function(data,type,row,meta) {
						 return '<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="unblockModle('+data+', '+row.supplierID+' ,\''+row.supName+'\')" class="btn btn-primary" style="margin-right: 10px">Unblock</button>';
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
	});
});	



$('#tbl_viewBlock_supplier tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = tbl_viewBlock_supplier.row( tr );

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
			'<td>Created Date & Time</td>'+           
            '<td>Province</td>'+            
            '<td>Address Line 1</td>'+
            '<td>Address Line 2</td>'+
            '<td>Address Line 3</td>'+
            '<td>Two-Years Fee (LKR)</td>'+
			'<td>Paid Amount (LKR)</td>'+
            '<td>Payment (LKR)</td>'+
		'</tr>'+
			
        '<tr>'+
			'<td>'+d.createdDateTime+'</td>'+
			'<td>'+d.province+'</td>'+
            '<td>'+d.address1+'</td>'+            
            '<td>'+d.address2+'</td>'+
            '<td>'+d.address3+'</td>'+
            '<td style="text-align: right;">'+d.onetimeFee+'</td>'+
			'<td style="text-align: right;">'+d.amount+'</td>'+
            '<td style="text-align: center;">'+d.isPaid+'</td>'+          
        '</tr>'+       

		'</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+

			'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
			'<tr class="text-yellow">'+  
				'<td>Admin E-mail</td>'+
				'<td>Bank</td>'+
			    '<td>Branch</td>'+
			    '<td>Account No</td>'+
			    '<td>Bank Code</td>'+
				'<td>Block Supplier Reson</td>'+
				'<td>Company Logo</td>'+
				'<td>Category Details</td>'+				
			'</tr>'+
			
        '<tr>'+	
				'<td>'+d.supMailAdmin+'</td>'+ 
				'<td>'+d.bank+'</td>'+ 
			    '<td>'+d.branch+'</td>'+
			    '<td>'+d.accountNo+'</td>'+
			    '<td>'+d.bankCode+'</td>'+
				'<td>'+d.blockReason+'</td>'+
				'<td><Button type="button" onclick="viewBlockImage(\'CLimg\','+d.supplierID+',\''+d.supName+'\')" class="btn btn-success">View</Button></td>'+

				'<td><button type="button" class="btn btn-success" onclick = "viewSupplierBlockCategories(\''+d.subCompanyID+'\')">View Categories</button></td>'+
		'</tr>'+

     '</table>';
}	
	
	
	
function viewBlockImage(buttonID, supplierID, name){
	console.log(buttonID+" "+ supplierID+" "+name);
	
	 if(buttonID=="CLimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/viewblocksupplier/'+supplierID+'/cl');
		 $('#mdl_ar_com_name').text("Company Logo");
		 $('#mdl_ii_contract_no').text(name);
	}
	$('#mdl_view_block_sup').modal('toggle');
}	



var grandTOT = 0;
function viewSupplierBlockCategories(supplierID) {
	console.log("viewblockCategoryTable "+supplierID);
	$('#view_block_Modal').modal('toggle');
	if (viewblockCategoryTable == undefined) {
		console.log("Inside Category Suppliers "+supplierID)
		
		viewblockCategoryTable = $('#view_block_category_sup').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
				url:globalUrl+"/supplier/view-supplier-block-category/"+supplierID,
				type:'GET',
				headers: { 'Authorization': 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
				{"data": "index", className: "text-right"},
				{"data":"supplierName"},
				{"data":"eligibleSubCategoryName"},
				{"data":"eligibleCategortName"}, 
        ],
		});
		
	}else {
		viewblockCategoryTable.ajax.url(globalUrl+"/supplier/view-supplier-block-category/"+supplierID).load();
	}
	
	viewblockCategoryTable.on( 'xhr', function () {
    var json = viewblockCategoryTable.ajax.json();
//  alert( json.data.length +' row(s) were loaded' );
//  alert( json.prices.grandTotal +' Prices Loaded' );
    $('#onetime_fee').text("Grand Total (LKR): "+doCurrencyFormat(json.prices.grandTotal));
    $('#category_fee').text("Cargory Fee (LKR): "+doCurrencyFormat(json.prices.categoryTotal));
    $('#subCargory_total').text("Sub Category Fee (LKR): "+doCurrencyFormat(json.prices.subCategoryTotal));
   });
}


function viewCat(supplierID) {
			getAsyncData("/supplier/"+supplierID+"/view-supplier-block-category", function(req) {
		})
}


function Unblock(data) {
	console.log(data.selectSupplierID);
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, Block!'
		}).then((result) => {
		  if (result.value) {
			console.log(data);
			  
				var responseCode = getAsyncDataPUT("/supplier/unblock-supplier",data, function(res) {
				console.log(res);
				console.log(res.responseJSON);
		
				  if(res.responseJSON.code == "01"){
						Swal.fire(
						'Requested!',
						'New supplier has been Request to Unblock.',
						'success'
					)
					tbl_viewBlock_supplier.ajax.url(globalUrl + "/supplier/view-block-suppliers").load();
					}else{
						Swal.fire(
						'Failed!',
						'New supplier has been Request to Unblock Failed.',
						'error'
						)
					}
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



var selectSupplierID;
var supplierID;
var supplierName;
function unblockModle(data, d1, d2){
	$("#ml_supplierUnblock_Modal").modal();
	$("#mdl_ii_supplierName").text(d2);
	console.log(data+" "+d1+" "+d2+" ");
	selectSupplierID = data;
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


$('#unblock_reason').on('focusout', function() {
	changeClass('#unblock_reason');	
});



$('#unblock_button').on('click', function() {
	let status = 0;
	if ($('#reason_unblocksupplier').val().length==0) {
		status+=1;
		$('#reason_unblocksupplier').parent().parent().addClass('has-error')
	}		
	var dataObj = {
		"selectSupplierID" : selectSupplierID,
		"unblockReason" : $('#reason_unblocksupplier').val(),
	};
	console.log(dataObj);
	Unblock(dataObj);
	
	if(status != 0){
            Swal.fire(
				  'Missing',
				  'Please check the required fields!',
				  'warning'
				);
            return false;
        }		
});





