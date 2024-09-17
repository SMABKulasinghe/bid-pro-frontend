$("#oldset").hide();
$("#oldset2").hide();
$("#userTableDiv").hide();

var paymentArray = {};
var paymentItem;

var selectedValueOnSelect2;


$(document).ready(function(){
	outPaymentTable = undefined;
	tbl_invoices_details = undefined;
	
	
	$('#outstandingPaymentTbl tbody').on( 'click', 'tr', function () {
	    $(this).toggleClass('selected');
	} );

	
	
	$('#reg_date1').datepicker({
		autoclose: true
	});
	
});



$('#outstandingPaymentTbl tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = outPaymentTable.row( tr );

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
	
	$('#reg_date').datepicker({
	      autoclose: true
	    });
	
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
        '<tr>'+           
            '<td>Net Amount</td>'+            
            '<td>Location Code</td>'+
            '<td>Location Name</td>'+
            '<td>Line Discount</td>'+
            '<td>Total Tax</td>'+          
            '<td>Status</td>'+
            '<td>No of Lines</td>'+
            '<td>Sign</td>'+
           
            
        '</tr>'+
        '<tr>'+
          //  '<td>'+new Date(d.expiryDate).toLocaleString()+'</td>'+
          //  '<td>'+getDateFormat(d.expirationDate)+'</td>'+
        	'<td>'+currencyFormat(d.NetAmount)+'</td>'+
            '<td>'+d.LocationCode+'</td>'+            
            '<td>'+d.LocationName+'</td>'+           
            '<td>'+currencyFormat(d.LineDiscount)+'</td>'+           
            '<td>'+currencyFormat(d.TotalTax)+'</td>'+           
            '<td>'+d.Status+'</td>'+ 
            '<td>'+d.NumberofLines+'</td>'+ 
            '<td><i class="fa fa-check-circle" aria-hidden="true"></i></td>'+ 
           
           
        '</tr>'+       
        
    '</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+
    
    
    
    '<tr>'+
    '<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'CONimg\','+d.ContractID+','+d.ContractNo+')">View Contract Image</Button></td>'+
    '<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'BAimg\','+d.ContractID+','+d.ContractNo+')">View Board Approval Image</Button></td>'+
    '<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'POimg\','+d.ContractID+','+d.ContractNo+')">View PO Image</Button></td>'+
    '<td><Button type="button" class="btn btn-success" onclick="viewMoreInvoiceDetails('+d.supplierID+')">View more Invoice Details</Button></td>'+
    '<td><Button type="button" class="btn btn-warning" onclick="enterPaymentDetails('+d.supplierID+', '+d.TotalAmount+', '+d.InvoiceDate+')">Enter Payment Details</Button></td>'+
    '</tr>'+
    
    '</table>'/*+       
        
    '</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+
    '<tr>'+
    '<td>Approval Level 1</td>'+
    '<td>Approval Level 2</td>'+
    '<td>Approval Level 3</td>'+
    
    
    '<tr>'+
    '<td><h3><i class="fa fa-check-circle" aria-hidden="true"></h3></i>  '+d.boardpaperDate+'</td>'+
    '<td><i class="fa fa-check-circle" aria-hidden="true">  '+d.boardpaperDate+'</td>'+
    '<td><i class="fa fa-check-circle" aria-hidden="true">  '+d.boardpaperDate+'</td>'+
    
    
    '</table>'*/;
}

function viewImage(buttonID, ContractID, ContractNo){
	console.log(buttonID+" "+ ContractID+" "+ContractNo);
	//$("#imgLocation").attr("src", path);
	
	if(buttonID=="CONimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/contract/'+ContractID+'/con');
		 $('#mdl_ar_com_name').text("Contract Image");
		 $('#mdl_ii_contract_no').text(ContractNo);
	}else if(buttonID=="BAimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/contract/'+ContractID+'/ba');
		 $('#mdl_ar_com_name').text("Board Approval Image");
		 $('#mdl_ii_contract_no').text(ContractNo);
	}else if(buttonID=="POimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/contract/'+ContractID+'/po');
		 $('#mdl_ar_com_name').text("Purchase Order Image");
		 $('#mdl_ii_contract_no').text(ContractNo);
	}
	
	$('#mdl_issue_invoice').modal('toggle');
	
}


function viewMoreInvoiceDetails(invoiceHeaderID){
	
	console.log(invoiceHeaderID)
	console.log(invoiceHeaderID)
	if (tbl_invoices_details == undefined) {
		// TEMP test use only-- create the proper one
		tbl_invoices_details = $('#tbl_view_invoice_details').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/payment/approved/invoice/"+invoiceHeaderID+"/details",
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		    	 	{ "data": "itemCode" },
		            { "data": "unitPrice" },
		            { "data": "qty"},
		            { "data": "amount" },
		            { "data": "serviceCharge",
		            	orderable: false,
		            	className: "text-right",
		            	 render: function(data,type,row,meta) {
							  return currencyFormat(data);
						  },	
		            },
		            { "data": "discount",
		            	className: "text-right",
		            	 render: function(data,type,row,meta) {
							  return currencyFormat(data);
						  },	
		            },
		            { "data": "value",
		            	className: "text-right",
		            	render: function(data,type,row,meta) {
		            		return currencyFormat(data);
		            	},	
		            }
		        ],
		        dom:"<'row'<'col-sm-12'B>>" +  
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
	         ]
	 
	});
	}else{
		tbl_invoices_details.ajax.url(globalUrl+"/payment/approved/invoice/"+invoiceHeaderID+"/details" ).load();
	}
	
	
	
	
	$('#mdl_invoice_details').modal('toggle');
}

function enterPaymentDetails(id,amount,date){
	
	$('#myPaymentModal').modal('toggle');
	//console.log(id+" "+amount+" "+date);
	$("#ChequeNo").val("");
	$("#bankName").val("");
	$("#amountPaid").val("");
	$("#reg_date1").val("");
	
	paymentItem = {
			"id" : id,
			"amount" : amount,
			"invoicedate" : date			
	}
	
}



$('#proceedToPayButton').on('click', function(event) {
	event.preventDefault();
	//console.log(paymentItem.id+" "+paymentItem.amount+" "+paymentItem.date);
	
	
	
	var ChequeNo = $("#ChequeNo").val();
	var bankName = $("#bankName").val();
	var amountPaid = $("#amountPaid").val();
	var reg_date1 = $("#reg_date1").val();
	
	if(ChequeNo === "" || bankName === "" || amountPaid=="" || reg_date1 == ""){
		console.log("Empty Field(s)");
		
		Swal.fire(
			      'Please provide required info!',
			      'Fill all fields',
			      'warning'
			    );
		
	}else{
		paymentItem['ChequeNo']=ChequeNo;
		paymentItem['bankName']=bankName;
		paymentItem['amountPaid']=amountPaid;
		paymentItem['reg_date1']=reg_date1;
		
		console.log(paymentItem.ChequeNo+" "+paymentItem.bankName+" "+paymentItem.amountPaid+" "+paymentItem.id+" "+paymentItem.amount+" "+paymentItem.date+" "+paymentItem.reg_date1);
		
		if(paymentItem.amountPaid > paymentItem.amount){
			console.log("Payment Amount should be less than Invoice Amount");
			Swal.fire(
				      'Payment amount should be less than or equal to invoice amount!',
				      'Invalid Payment Amount',
				      'warning'
				    );
			
		}else{
			
			if(paymentItem.id!="" && paymentItem.id>0 && paymentItem.amountPaid>0){
				

				Swal.fire({
					  title: 'Are you sure?',
					  text: "Do you want to proceed?",
					  type: 'warning',
					  showCancelButton: true,
					  confirmButtonColor: '#3085d6',
					  cancelButtonColor: '#d33',
					  confirmButtonText: 'Yes, process it!'
					}).then((result) => {
					  if (result.value) {
						  console.log("F "+paymentItem)
						var responseCode =  getAsyncDataPOST("/payment/add", paymentItem, confirmedCallBack);	
							$(this).prop("disabled",true);
							


					  }
					});
				
				
			}
			
		}
		
		
		
	}
	
	
});


function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#AuthorizeButton").prop("disabled",false);

	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   Swal.fire(
				      'Accepted!',
				      'Payment actions has been proceed successfully.',
				      'success'
				    )
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Payment action failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	//   outPaymentTable.ajax.reload();
	   $('#myPaymentModal').modal('toggle');
	   loadPaymentDatatable(selectedValueOnSelect2);    
	   getNotification();

	}



	// Select2-- Start
	
	$("#suppliers_payment").select2({
		  ajax: {
		    url: globalUrl+'/supplier/getsuppliersforpayment',
		    headers : {
				'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken"),
				'Content-Type' : 'application/json'
			},
		    dataType: 'json',
		    delay: 250,
		    data: function (params) {
		      return {
		        search: params.term, // search term
		        page: params.page
		      };
		    },
		    processResults: function (data, params) {
		      // parse the results into the format expected by Select2
		      // since we are using custom formatting functions we do not need to
		      // alter the remote JSON data, except to indicate that infinite
		      // scrolling can be used
		      params.page = params.page || 1;

		      return {
		        results: data.items,
		        pagination: {
		          more: (params.page * 30) < data.total_count
		        }
		      };
		    },
		    cache: true
		  },
		  placeholder: 'Search for a company',
		  minimumInputLength: 1,
		  templateResult: function(repo) {
			  if (repo.loading) {
				    return repo.text;
				  }

				  var $container = $(
				    "<div class='select2-result-repository clearfix'>" +
				      "<div class='select2-result-repository__meta'>" +
				        "<div class='select2-result-repository__title'></div>" +
				      "</div>" +
				    "</div>"
				  );

				  $container.find(".select2-result-repository__title").text(repo.name);

				  return $container;
		},
		  templateSelection: function(repo) {
			  return repo.name || repo.text;
		}
		});
	
	// Select2-- End
	
	
	function loadPaymentDatatable(para){
		


		var times = [
			"Accept", 
			"Reject", 
			"Hold"
		];

		$("#userTableDiv").show();
//		console.log(outPaymentTable);
		if(outPaymentTable == undefined){
		//	console.log("Inside");
			outPaymentTable = $('#outstandingPaymentTbl').DataTable({
				
				processing: true,
				 serverSide: true,
				

			     ajax: {
			    	 url:globalUrl+"/payment/"+para,
			         type: 'GET',
			         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			     },
			     columns: [
			            { "data": "supplierID"}, 	            	 			            	 
			            { "data": "supplierName" },
			            { "data": "ContractNo" },
			           // { "data": "InvoiceDate" },
			            { "data": "InvoiceDate",
			            	className: "text-right dt-body-nowrap",
			            	 render: function(data,type,row,meta) {
			            		 return data;
			            },	
			            },
			            { "data": "InvoiceNumber"},
			           // { "data": "TotalAmount" },
			            { "data": "TotalAmount",				            	
			            	className: "text-right",
			            	 render: function(data,type,row,meta) {
			            		 return currencyFormat(data);
			            },	
			            },
			            {"data": "BatchNumber"},
			            {"data": "LocationName"},
			            { "data": "TotalTax"},		     
			            {
		                     "className":      'details-control',
		                     "orderable":      false,
		                     "data":           null,
		                     "defaultContent": ''
		                 }
			            
			        ],
				
			//	dom: 'Bfrtip',
			    dom:"<'row'<'col-sm-12'B>>" +  
		        	"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
		        "<'row'<'col-sm-12'tr>>" +
		        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
				
				buttons: [
					'copy', 'csv', 'excel', 'pdf', 'print'
				],
				'columnDefs': [
		            
		            { "width": "50%", "targets": 7 },
		            { "width": "50%", "targets": 8 }
		            
		         ],
		         "language": {
		             "emptyTable": "No payments available for this company"
		           },
		         'select': {
		             'style': 'multi',
		             'selector': 'td:first-child'
		          },
		          'order': [[1, 'asc']]
			
			});
			
			$('#userTableDiv').addClass("fadeInDownBig");
			$('#userTableDiv').removeClass("fadeOutUpBig");

			
		}else{
			$("#userTableDiv").show();
			console.log("Inside Else");
			
			outPaymentTable.ajax.url( globalUrl+"/payment/"+para ).load();
		
			
		}
		
		
	}
	
	
	$('#suppliers_payment').on('select2:select', function (e) {
		selectData = e.params.data;
	  
		console.log(selectData.id);    	
		selectedValueOnSelect2 = selectData.id;
		
		loadPaymentDatatable(selectData.id);    
		$("#userTableDiv").show();
	   
	});
	
	
	
