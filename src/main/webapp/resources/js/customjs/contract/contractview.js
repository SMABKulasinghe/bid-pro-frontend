console.log("AuthContract");
$("#contractTableDiv").hide();


if (typeof selectData !== 'undefined') {
	let selectData1;
	}

var contractTable;

var contractArray = {};

var userCompanyType;

$(document).ready(function(){
	var user = JSON.parse(sessionStorage.getItem('User'));
	console.log(user.companyCode);
	
	getAsyncData("/users/statusCheckForCS/"+user.companyCode, confirmedCallBack);
	 
	 function confirmedCallBack(responseCode){
			console.log(responseCode);
			if(responseCode.responseJSON != null){
				console.log(responseCode.responseJSON.subCompanyBool);
				userCompanyType = responseCode.responseJSON.subCompanyBool;
				loadContractDetailsTable();
				
			}
			
	 }
	 
	 
	contractTable = undefined;
	console.log("RR");
	
	


	
	$('#example tbody').on( 'click', 'tr', function () {
	    $(this).toggleClass('selected');
	} );


	
	
});


	    

$('#example').on( 'draw.dt', function (e) {
	 contractTable.rows().eq(0).each( function ( index ) {
       var row = contractTable.row( index );
    
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
       
   });
});



$('#example tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = contractTable.row( tr );

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
            '<td>Expiration Date</td>'+            
            '<td>BA No</td>'+
            '<td>Board Paper Date</td>'+
            '<td>Board Paper Originated By</td>'+
            '<td>Board Approval Date</td>'+
            '<td>Board Approval No</td>'+
            '<td>Payment Type</td>'+
            '<td>Signed Company</td>'+
            /*  '<td>Signed Supplier</td>'+
            '<td>PO Date</td>'+
            '<td>Created By</td>'+
            '<td>Expiration Date</td>'+
            '<td>Modified By</td>'+*/
            
        '</tr>'+
        '<tr>'+
          //  '<td>'+new Date(d.expiryDate).toLocaleString()+'</td>'+
            '<td>'+getDateFormat(d.expiryDate)+'</td>'+
            '<td>'+d.boardApprovalNo+'</td>'+            
            '<td>'+d.boardpaperDate+'</td>'+
            '<td>'+d.boardpaperOriginatedBy+'</td>'+
            '<td>'+d.BoardApprovalDate+'</td>'+ 
            '<td>'+d.boardApprovalNo+'</td>'+
            '<td>'+d.paymentType+'</td>'+
            '<td>'+d.signedByCompany+'</td>'+ 
            /*'<td>'+d.signedBySupplier+'</td>'+
            '<td>'+d.PODate+'</td>'+
            '<td>'+d.createdBy+'</td>'+
            '<td>'+d.boardApprovalNo+'</td>'+
            '<td>'+d.modifiedBy+'</td>'+*/
           
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
    
    
    '</table>';
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


	if ($(this).prop('checked') === true && $(this).attr('value') == "Yes") {
		loadContractDetailsTable();
	} else {
		
		$('#contractTableDiv').hide();
		console.log("Hide Table Div Here")
	}
	
	
	
	
});

function loadContractDetailsTable(){
 
//	var userCompanyType = "supplier";
	
	
//	console.log(parameter);
	 

	if(userCompanyType){
		parameter = "viewall";
	}else{
		parameter = "supplier";
	}
	
	console.log(parameter);

	$("#contractTableDiv").show();
//	console.log(contractTable);
	if(contractTable == undefined){
	//	console.log("Inside");
		contractTable = $('#example').DataTable({
			
			processing: true,
			 serverSide: true,
			
		     ajax: {
		    	 url:globalUrl+"/contract/"+parameter,
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		            { "data": "supplierID", orderable: false,}, 			            	 		            	 
		            { "data": "supplierName" },
		            { "data": "ContractNo" },		            
		            { "data": "renewalDate" },
		            //{ "data": "Amount"},
		            { "data": "Amount",				            	
		            	className: "text-right",
		            	 render: function(data,type,row,meta) {
		            		 return currencyFormat(data);
		            	 }
		            },
		            { "data": "PODate" },
		            { "data": "Category"},
		            { "data": "reason", orderable: false,},
		            { "data": "status", orderable: false,},	            				            				            		            
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
	            /*{ "width": "50%", "targets": 7 },
	            { "width": "50%", "targets": 8 }*/
	            
	         ],			         
	          'order': [[1, 'asc']]
		
		});
		
	}else{
		console.log("TableElse");
		contractTable.ajax.url(globalUrl+"/contract/all").load();
		
	}
	
	




	
	
}



$('#searchUserIDButton').on('click', function() {
	console.log("Toster Test");
	
	toastr.options = {
			  "closeButton": true,
			  "debug": false,
			  "progressBar": true,
			  "preventDuplicates": false,
			  "positionClass": "toast-top-right",
			  "onclick": null,
			  "showDuration": "400",
			  "hideDuration": "1000",
			  "timeOut": "7000",
			  "extendedTimeOut": "1000",
			  "showEasing": "swing",
			  "hideEasing": "linear",
			  "showMethod": "fadeIn",
			  "hideMethod": "fadeOut"
			}
	
         // Display a success toast, with a title
         toastr.success('Without any options','Simple notification!')
   
	
});





