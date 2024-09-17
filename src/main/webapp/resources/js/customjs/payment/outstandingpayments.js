console.log("AuthContract");
$("#contractTableDiv").hide();

if (typeof selectData !== 'undefined') {
	
}

if (typeof selectData !== 'undefined') {
	let selectData1;
	let selectData;
	 var rows_selected;
	 var contractIDArray;
	 var statusOfContract;
	 var statusReason;
	 var contractNoforSA;
	 var contractIDArray;
	 var statusOfContract;
	 var statusReason;
	 var contractNoforSA;
	 let d;
	 var row;
	 var data;
	 var tr;
	 let current_datetime;
	let formatted_date;
	var contractArray;
		
	 
//	let tbl_companies
}

//var outPaymentTable;
var isCompany;

var contractArray = {};

$(document).ready(function(){
	
	var user = JSON.parse(sessionStorage.getItem('User'));
	console.log(user.companyCode);
	
	
	
	getAsyncData("/users/statusCheckForCS/"+user.companyCode, confirmedCallBack);
	 
	 function confirmedCallBack(responseCode){
			console.log(responseCode);
			if(responseCode.responseJSON != null && !responseCode.responseJSON.subCompanyBool){
				console.log(responseCode.responseJSON.subCompanyBool);
				isCompany = responseCode.responseJSON.subCompanyBool;
				userCompanyType = responseCode.responseJSON.subCompanyBool;
//				$("#sup_Name").hide();
//				$("#com_Name").text("Company Name");
				loadPaymentDatatable("outstandingSupplierView");
				
				
				
			}else{
//				$("#com_Name").hide();
//				$("#sup_Name").text("Supplier Name");
				loadPaymentDatatable("outstanding");
				
			}
			
			
			
	 }
	
	 outPaymentTable = undefined;
		console.log("RR");
		
	
	
	
	$('#outstandingPaymentTbl tbody').on( 'click', 'tr', function () {
	    $(this).toggleClass('selected');
	} );
	
	
	// Select2-- Start
	
	$("#suppliers_payment").select2({
		  ajax: {
		    url: globalUrl+'/supplier/supplier',
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


});



$('#outstandingPaymentTbl').on( 'draw.dt', function (e) {
	 outPaymentTable.rows().eq(0).each( function ( index ) {
       var row = outPaymentTable.row( index );
    
       var data = row.data();
       // ... do something with data(), or row.node(), etc
       console.log(data);
       
       if(contractArray.hasOwnProperty(data.supplierID)){
    	   console.log(data.supplierID);
    	  let d = contractArray[data.supplierID]
    	  console.log(d);
    	   $('#'+data.supplierID).prop('checked', true);
    	   $('#'+data.supplierID).parent().parent().children().eq(8).children().eq(0).val(contractArray[data.supplierID].statusOfContract);
    	   $('#'+data.supplierID).parent().parent().children().eq(7).children().eq(0).val(contractArray[data.supplierID].statusReason);
    	   
    	   
    	  

       }
       
   } );
} );



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
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
        '<tr>'+           
            '<td>Net Amount</td>'+            
            '<td>Location Code</td>'+
            '<td>Location Name</td>'+
            '<td>Line Discount</td>'+
            '<td>Total Tax</td>'+          
            '<td>Status</td>'+
            '<td>No of Lines</td>'+
            '<td>Total Amount</td>'+
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
            '<td>'+currencyFormat(d.TotalAmount)+'</td>'+ 
            '<td><i class="fa fa-check-circle" aria-hidden="true"></i></td>'+ 
           
           
        '</tr>'+       
        
    '</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+
    '<tr>'+
    '<td>Contract Image</td>'+
    '<td>Board Approval Image</td>'+
    '<td>Purchase Order Image</td>'+
    
    
    '<tr>'+
    '<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'CONimg\','+d.ContractID+','+d.ContractNo+')">View Image</Button></td>'+
    '<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'BAimg\','+d.ContractID+','+d.ContractNo+')">View Image</Button></td>'+
    '<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'POimg\','+d.ContractID+','+d.ContractNo+')">View Image</Button></td>'+
    
    
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



$('#acceptTerms').on('change', function() {

	// outPaymentTable.destroy();
	
	

	if ($(this).prop('checked') === true && $(this).attr('value') == "Yes") {
		
		
	} else {
		//outPaymentTable.ajax.url( globalUrl+"/invoice/all" ).load();

		//$('#userTableDiv').hide();
		console.log("Hide Table Div Here")
		
	}
	
	
	
	
});



function addtoArrayList(contractWithStatus){
	
	contractArray[contractWithStatus.contractid] = contractWithStatus;

	
	
}

function removeFromArrayList(contractWithStatus){
	console.log(contractWithStatus);
	
	delete contractArray[contractWithStatus];
	
	console.log(contractArray);

	
}


function loadPaymentDatatable(para){
	


	var times = [
		"Accept", 
		"Reject", 
		"Hold"
	];

	$("#userTableDiv").show();
//	console.log(outPaymentTable);
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
			    	{ "data": "supplierName"},
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
		            // { "data": "contractOutstandingAmount" },
		            { "data": "contractOutstandingAmount",				            	
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
  
	loadPaymentDatatable(selectData.id);    	
   
});





