

$("#titleAssetSW").text("Software Asset");
console.log("Inside Software asset JS FILE");


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
	 

function loadContractDetailsTable(){
 

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
		    	 url:globalUrl+"/asset/"+parameter,
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		            { "data": "supplierName", orderable: false,}, 			            	 		            	 
		           // { "data": "email" },
		            { "data": "currentLocation" },
		            { "data": "brnad" },		            
		            { "data": "model" },
		            { "data": "currentMarketValue",				            	
		            	className: "text-right",
		            	 render: function(data,type,row,meta) {
		            		 return currencyFormat(data);
		            	 }
		            },
		            { "data": "disposableAmount",				            	
		            	className: "text-right",
		            	render: function(data,type,row,meta) {
		            		return currencyFormat(data);
		            	}
		            },
		           // { "data": "currentMarketValue" },
		            { "data": "category"},
		            { "data": "assetSubCategory", orderable: false,},
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
		contractTable.ajax.url(globalUrl+"/asset/viewall").load();
		
	}
}


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



function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
        '<tr>'+           
            '<td class="text-yellow">Disposable Amount</td>'+
            '<td class="text-yellow">Deprication Amount</td>'+
            '<td class="text-yellow">Deprication Method</td>'+
            '<td class="text-yellow">Current Condition Code</td>'+
            '<td class="text-yellow">Last Inspected By</td>'+
            '<td class="text-yellow">Last Repair Date</td>'+
            /*  '<td>Signed Supplier</td>'+
            '<td>PO Date</td>'+
            '<td>Created By</td>'+
            '<td>Expiration Date</td>'+
            '<td>Modified By</td>'+*/
            
        '</tr>'+
        '<tr>'+
          //  '<td>'+new Date(d.expiryDate).toLocaleString()+'</td>'+
          //  '<td>'+new Date(d.buyingDate).toLocaleString()+'</td>'+
            '<td class="text-right">'+currencyFormat(d.disposableAmount)+'</td>'+            
            '<td class="text-right">'+currencyFormat(d.depricationAmount)+'</td>'+
            '<td>'+d.depricationMethod+'</td>'+
            '<td>'+d.currentConditionCode+'</td>'+ 
            '<td>'+d.lastInspectedBy+'</td>'+
            '<td>'+getDateFormat(d.lastRepairDate)+'</td>'+ 
            /*'<td>'+d.signedBySupplier+'</td>'+
            '<td>'+d.PODate+'</td>'+
            '<td>'+d.createdBy+'</td>'+
            '<td>'+d.boardApprovalNo+'</td>'+
            '<td>'+d.modifiedBy+'</td>'+*/
           
        '</tr>'+       
               
        
        '</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+
        '<tr>'+
        '<td class="text-yellow">Buying Date</td>'+
        '<td class="text-yellow">Asset Movement Status</td>'+
        '<td class="text-yellow">Transferred Date</td>'+
        '<td class="text-yellow">Transfered From</td>'+
        '<td class="text-yellow">Current Location</td>'+
        '<td class="text-yellow">Supplier Email</td>'+
        
        
        '<tr>'+
        '<td>'+getDateFormat(d.buyingDate)+'</td>'+
        '<td>'+d.assetmovementStatus+'</td>'+
        '<td>'+getDateFormat(d.transferredDate)+'</td>'+
        '<td>'+d.transferedFrom+'</td>'+
        '<td>'+d.currentLocation+'</td>'+
        '<td>'+d.email+'</td>'+
        
        
        '</table>'+
        
        '</tr>'+       
        
        
        '</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+
        '<tr>'+
        '<td class="text-yellow">Last Inspected By</td>'+
        '<td class="text-yellow">Registration No</td>'+
        '<td class="text-yellow">Serial No</td>'+
        '<td class="text-yellow">Color</td>'+
        '<td class="text-yellow">Last Repair Date</td>'+
        '<td class="text-yellow">RAM(GB)</td>'+
        '<td class="text-yellow">HDD(GB)</td>'+
        '<td class="text-yellow">Processor(GHz)</td>'+
        
        
        '<tr>'+
        '<td>'+d.lastInspectedBy+'</td>'+
        '<td>'+d.registrationNo+'</td>'+
        '<td>'+d.serialNo+'</td>'+
        '<td>'+d.color+'</td>'+
        '<td>'+getDateFormat(d.lastRepairDate)+'</td>'+
        '<td>'+d.RAM+' GB</td>'+
        '<td>'+d.HDD+' GB</td>'+
        '<td>'+d.processor+' GHz</td>'+
        
        
        '</table>'+
        
    '</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
    '<tr>'+
   /* '<td class="text-green">View Image</td>'+
    '<td class="text-blue">Edit</td>'+
    '<td class="text-red">Remove</td>'+*/
    
    
    '<tr>'+
   /* '<td><Button type="button" class="btn btn-success" onclick="viewImage(\'CONimg\','+d.currentMarketValue+','+d.currentMarketValue+')">View Image</Button></td>'+*/
    '<td><Button type="button" class="btn btn-info" onclick="editAsset('+d.assetCode+')">Edit</Button></td>'+
    '<td><Button type="button" class="btn btn-danger" onclick="removeAsset('+d.assetCode+')">Remove</Button></td>'+
    
    
    '</table>';
}

function viewImage(buttonID, ContractID, ContractNo){
	console.log(buttonID+" "+ ContractID+" "+ContractNo);
	//$("#imgLocation").attr("src", path);
	
	if(buttonID=="CONimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/contract/'+ContractID+'/con');
		 $('#mdl_ar_com_name').text("Asset Image");
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



function getDateFormat(date){
	let current_datetime = new Date(date)
	let monthFormated = current_datetime.getMonth();
	let dateFormated = current_datetime.getDate();
	
	if((current_datetime.getMonth() + 1)<10){
		monthFormated = "0"+(current_datetime.getMonth()+1);
	}
	
	if((current_datetime.getDate())<10){
		dateFormated = "0"+(current_datetime.getDate());
	}
	
	let formatted_date = dateFormated + "-" + (monthFormated) + "-" + current_datetime.getFullYear()
	console.log(formatted_date)
	return formatted_date;
}



function editAsset(assetID){
	
	var data = {};
	data.assetCode = assetID;
	console.log(assetID);


	Swal.fire({
		  title: 'Are you sure?',
		  text: "You want to edit this asset!",
		  type: 'info',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Yes, edit!'
		}).then((result) => {
		  if (result.value) {
			  getAsyncData("/asset/getasset/"+assetID, confirmedCallBack);
				 
				 function confirmedCallBack(responseCode){
						//console.log(responseCode);
						if(responseCode.responseJSON != null){
							console.log(responseCode.responseJSON);
							

							var data = responseCode.responseJSON;
							
							  $("#assetID_edit").val(data.assetCode);
							  $("#assetCategory_edit").val(data.category );
							  $("#assetSubCategory_edit").val(data.assetSubCategory);
							  $("#assetSupplierCode_edit").val(data.assetSupplierCode);
							  $("#supplierName_edit").val(data.supplierName);
							  $("#user_email_edit").val(data.email);
							  $("#brandName_edit").val(data.brnad);
							  $("#ModelName_edit").val(data.model);
							  $("#RAM_edit").val(data.RAM );
							  $("#HDD_edit").val(data.HDD);
							  $("#processor_edit").val(data.processor);
							  $("#currentMarketValue_edit").val(data.currentMarketValue);
							  $("#disposableAmount_edit").val(data.disposableAmount);
							  $("#depricationMethod_edit").val(data.depricationMethod);
							  $("#depricationAmount_edit").val(data.depricationAmount);
							  $("#currentConditionCode_edit").val(data.currentConditionCode);
							  $("#assetmovementStatus_edit").val(data.assetmovementStatus );
						      $('#TransferredDate_edit').val(data.transferredDate);
							  $('#buyingDate_edit').val(data.buyingDate);
							  $("#transferedFrom_edit").val(data.transferedFrom );
							  $("#currentLocation_edit").val(data.currentLocation);
							
							  $("#lastInspectedBy_edit").val(data.lastInspectedBy);
							  $("#registrationNo_edit").val(data.registrationNo);
							  $("#serialNo_edit").val(data.serialNo);
							  $("#color_edit").val(data.color);
							  $('#lastRepairDate_edit').val(data.lastRepairDate);
							
							
							
							$('#mdl_issue_invoice').modal('toggle');
							
						}
						
				 }
				 
				 
				 
			/* if(responseCode.responseText =="success"){
				 Swal.fire(
					      'Asset Edited!',
					      'Asset Edited successfully.',
					      'success'
					    ); 				
				 
				 $('#selectionDiv').fadeOut(1000, function() {
					 //$("#selectionDiv").hide();
					});
				 
				
			 }else{
				 Swal.fire(
					      'Asset Edit Failed!',
					      'Please Try Again.',
					      'error'
					    );
			 }*/
		    
		  }
		});
	
	
	//sw end
	
}


function removeAsset(assetID){
	
	var data = {};
	data.assetCode = assetID;
	console.log(assetID);


	Swal.fire({
		  title: 'Are you sure?',
		  text: "You want to remove this asset!",
		  type: 'info',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Yes, remove!'
		}).then((result) => {
		  if (result.value) {
			var responseCode =  postFunction("/asset/remove", data)		
			//console.log(responseCode);
			 if(responseCode.responseText =="success"){
				 Swal.fire(
					      'Asset Removed!',
					      'Asset Removed successfully.',
					      'success'
					    ); 				
				 loadContractDetailsTable()
				 
				 $('#selectionDiv').fadeOut(1000, function() {
					 //$("#selectionDiv").hide();
					});
				 
				
			 }else{
				 Swal.fire(
					      'Asset Removing Failed!',
					      'Please Try Again.',
					      'error'
					    );
			 }
		    
		  }
		});
	
	
	//sw end
	
}





$('#update_asset_button').on('click', function() {
	console.log("update_asset_button");
	
status = 0;
	
	if ($('#assetID_edit').val().length==0) {
		status+=1;
		$('#assetID_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#assetCategory_edit').val().length==0) {
		status+=1;
		$('#assetCategory_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#assetSubCategory_edit').val().length==0) {
		status+=1;
		$('#assetSubCategory_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#assetSupplierCode_edit').val().length==0) {
		status+=1;
		$('#assetSupplierCode_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#supplierName_edit').val().length==0) {
		status+=1;
		$('#supplierName_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#user_email_edit').val().length==0) {
		status+=1;
		$('#user_email_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#brandName_edit').val().length==0) {
		status+=1;
		$('#brandName_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#ModelName_edit').val().length==0) {
		status+=1;
		$('#ModelName_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#RAM_edit').val().length==0) {
		status+=1;
		$('#RAM_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#HDD_edit').val().length==0) {
		status+=1;
		$('#HDD_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#processor_edit').val().length==0) {
		status+=1;
		$('#processor_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#currentMarketValue_edit').val().length==0) {
		status+=1;
		$('#currentMarketValue_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#disposableAmount_edit').val().length==0) {
		status+=1;
		$('#disposableAmount_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#depricationMethod_edit').val().length==0) {
		status+=1;
		$('#depricationMethod_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#depricationAmount_edit').val().length==0) {
		status+=1;
		$('#depricationAmount_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#currentConditionCode_edit').val().length==0) {
		status+=1;
		$('#currentConditionCode_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#assetmovementStatus_edit').val().length==0) {
		status+=1;
		$('#assetmovementStatus_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#TransferredDate_edit').val()=="") {
		status+=1;
		$('#TransferredDate_edit').parent().parent().parent().addClass('has-error')
	}
	
	if ($('#transferedFrom_edit').val().length==0) {
		status+=1;
		$('#transferedFrom_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#currentLocation_edit').val().length==0) {
		status+=1;
		$('#currentLocation_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#lastInspectedBy_edit').val().length==0) {
		status+=1;
		$('#lastInspectedBy_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#registrationNo_edit').val().length==0) {
		status+=1;
		$('#registrationNo_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#serialNo_edit').val().length==0) {
		status+=1;
		$('#serialNo_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#color_edit').val().length==0) {
		status+=1;
		$('#color_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#lastRepairDate_edit').val().length==0) {
		status+=1;
		$('#lastRepairDate_edit').parent().parent().parent().addClass('has-error')
	}
	
	if ($('#buyingDate_edit').val().length==0) {
		status+=1;
		$('#buyingDate_edit').parent().parent().parent().addClass('has-error')
	}
	
	
	if(!$('#acceptTerms').prop("checked")){
		Swal.fire(
				  'Confirm',
				  'Please confirm the asset information update!',
				  'warning'
				);
	}else{
	if (status==0) {
			console.log("Update OK");
			var data = {};
			
			data.assetCode = $("#assetID_edit").val();
			data.category = $("#assetCategory_edit").val();
			data.assetSubCategory = $("#assetSubCategory_edit").val();
			data.assetSupplierCode = $("#assetSupplierCode_edit").val();
			data.supplierName = $("#supplierName_edit").val();
			data.userEmail = $("#user_email_edit").val();
			data.brandName = $("#brandName_edit").val();
			data.ModelName = $("#ModelName_edit").val();
			data.RAM = $("#RAM_edit").val();
			data.HDD = $("#HDD_edit").val();
			data.processor = $("#processor_edit").val();
			data.currentMarketValue = $("#currentMarketValue_edit").val();
			data.disposableAmount = $("#disposableAmount_edit").val();
			data.depricationMethod = $("#depricationMethod_edit").val();
			data.depricationAmount = $("#depricationAmount_edit").val();
			data.currentConditionCode = $("#currentConditionCode_edit").val();
			data.assetmovementStatus = $("#assetmovementStatus_edit").val();
			data.transferredDate =/* $("#TransferredDate").val(); */ Date.parse($('#TransferredDate_edit').val()),
			data.buyingDate =/* $("#TransferredDate").val(); */ Date.parse($('#buyingDate_edit').val()),
			data.transferedFrom = $("#transferedFrom_edit").val();
			data.currentLocation = $("#currentLocation_edit").val();
			
			data.lastInspectedBy = $("#lastInspectedBy_edit").val();
			data.registrationNo = $("#registrationNo_edit").val();
			data.serialNo = $("#serialNo_edit").val();
			data.color = $("#color_edit").val();
			data.lastRepairDate = Date.parse($('#lastRepairDate_edit').val()),
			
			console.log(data);
			

			Swal.fire({
				  title: 'Are you sure?',
				  text: "You want to update information of this asset!",
				  type: 'info',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, Upadte!'
				}).then((result) => {
				  if (result.value) {
					var responseCode =  postFunction("/asset/updateasset", data)		
					//console.log(responseCode);
					 if(responseCode.responseText =="success"){
						 Swal.fire(
							      'Asset Information Updated!',
							      'Asset Information Updated successfully.',
							      'success'
							    ); 				
						 /*clearForm();*/
						 $('#mdl_issue_invoice').modal('toggle');
						 loadContractDetailsTable()
						 
						 $('#selectionDiv').fadeOut(1000, function() {
							 //$("#selectionDiv").hide();
							});
						 
						
					 }else{
						 Swal.fire(
							      'Asset Update Failed!',
							      'Please Try Again.',
							      'error'
							    );
					 }
				    
				  }
				});
			
			
			//sw end
			
	
	}
		
		
	}
	
	
});
