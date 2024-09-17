
console.log("Asset Loading");

$("#subCategorySet").hide();

$(document).ready(function($) {
	
	console.log("Asset Registration Ready");
	
	$('#assetCategory').select2({
		  placeholder: 'Select a category'
	  });
	  
	
	$('#assetSubCategory').select2({
		placeholder: 'Select a sub category',
			width: 'resolve'
	});
	
	
	getAsyncData("/asset/getassetcategory/"+user.companyCode, confirmedCallBack2);
	 
	 function confirmedCallBack2(responseCode){
			console.log(responseCode);
			if(responseCode.responseJSON != null){
				console.log(responseCode.responseJSON);
				console.log(responseCode.responseJSON.subCategory);
				 var json = responseCode.responseJSON.subCategory;
				for(var i = 0; i < json.length; i++) {
				    var obj = json[i];

				    console.log(obj);
				    
				    $('#assetCategory').append(new Option(obj.categoryName, obj.categoryID))
				}
			}
	 }
	
	 
		$('#assetCategory').on('change', function() {
			console.log("assetCategory Changed "+this.value);
			$('#assetSubCategory').find('option').remove().end();
			getAsyncData("/asset/getassetsubcategory/"+this.value, confirmedCallBack3);
			 
			 function confirmedCallBack3(responseCode){
					console.log(responseCode);
					if(responseCode.responseJSON != null){
						console.log(responseCode.responseJSON);
						console.log(responseCode.responseJSON.subCategory);
						 var json = responseCode.responseJSON.subCategory;
						for(var i = 0; i < json.length; i++) {
						    var obj = json[i];

						    console.log(obj);
						    
						    $('#assetSubCategory').append(new Option(obj.subCategoryName, obj.subCategoryID))
						}
					}
			 }
			 
			 if(this.value=="0"){
				 $('#subCategorySet').fadeOut(1000,function() {});
			 }else{
				 $('#subCategorySet').fadeIn(1000, function() {
					});
			 }
		});
	 
	
});

$('#create_asset_button').on('click', function() {
	console.log("Clicked Asset Submit");
	
	status = 0;
	
	if ($('#assetID').val().length==0) {
		status+=1;
		$('#assetID').parent().parent().addClass('has-error')
	}
	
	if ($('#assetCategory').val().length==0) {
		status+=1;
		$('#assetCategory').parent().parent().addClass('has-error')
	}
	
	if ($('#assetSubCategory').val().length==0) {
		status+=1;
		$('#assetSubCategory').parent().parent().addClass('has-error')
	}
	
	if ($('#assetSupplierCode').val().length==0) {
		status+=1;
		$('#assetSupplierCode').parent().parent().addClass('has-error')
	}
	
	if ($('#supplierName').val().length==0) {
		status+=1;
		$('#supplierName').parent().parent().addClass('has-error')
	}
	
	if ($('#user_email').val().length==0) {
		status+=1;
		$('#user_email').parent().parent().addClass('has-error')
	}
	
	if ($('#brandName').val().length==0) {
		status+=1;
		$('#brandName').parent().parent().addClass('has-error')
	}
	
	if ($('#ModelName').val().length==0) {
		status+=1;
		$('#ModelName').parent().parent().addClass('has-error')
	}
	
	if ($('#RAM').val().length==0) {
		status+=1;
		$('#RAM').parent().parent().addClass('has-error')
	}
	
	if ($('#HDD').val().length==0) {
		status+=1;
		$('#HDD').parent().parent().addClass('has-error')
	}
	
	if ($('#processor').val().length==0) {
		status+=1;
		$('#processor').parent().parent().addClass('has-error')
	}
	
	if ($('#currentMarketValue').val().length==0) {
		status+=1;
		$('#currentMarketValue').parent().parent().addClass('has-error')
	}
	
	if ($('#disposableAmount').val().length==0) {
		status+=1;
		$('#disposableAmount').parent().parent().addClass('has-error')
	}
	
	if ($('#depricationMethod').val().length==0) {
		status+=1;
		$('#depricationMethod').parent().parent().addClass('has-error')
	}
	
	if ($('#depricationAmount').val().length==0) {
		status+=1;
		$('#depricationAmount').parent().parent().addClass('has-error')
	}
	
	if ($('#currentConditionCode').val().length==0) {
		status+=1;
		$('#currentConditionCode').parent().parent().addClass('has-error')
	}
	
	if ($('#assetmovementStatus').val().length==0) {
		status+=1;
		$('#assetmovementStatus').parent().parent().addClass('has-error')
	}
	
	if ($('#TransferredDate').val()=="") {
		status+=1;
		$('#TransferredDate').parent().parent().parent().addClass('has-error')
	}
	
	if ($('#transferedFrom').val().length==0) {
		status+=1;
		$('#transferedFrom').parent().parent().addClass('has-error')
	}
	
	if ($('#currentLocation').val().length==0) {
		status+=1;
		$('#currentLocation').parent().parent().addClass('has-error')
	}
	
	if ($('#lastInspectedBy').val().length==0) {
		status+=1;
		$('#lastInspectedBy').parent().parent().addClass('has-error')
	}
	
	if ($('#registrationNo').val().length==0) {
		status+=1;
		$('#registrationNo').parent().parent().addClass('has-error')
	}
	
	if ($('#serialNo').val().length==0) {
		status+=1;
		$('#serialNo').parent().parent().addClass('has-error')
	}
	
	if ($('#color').val().length==0) {
		status+=1;
		$('#color').parent().parent().addClass('has-error')
	}
	
	if ($('#lastRepairDate').val().length==0) {
		status+=1;
		$('#lastRepairDate').parent().parent().parent().addClass('has-error')
	}
	
	if ($('#buyingDate').val().length==0) {
		status+=1;
		$('#buyingDate').parent().parent().parent().addClass('has-error')
	}
	
	if(!$('#acceptTerms').prop("checked")){
		Swal.fire(
				  'Confirm',
				  'Please confirm the asset registration!',
				  'warning'
				);
	}else{
		
		if (status==0) {
			
			var data = {};
			data.assetCode = $("#assetID").val();
			data.category = $("#assetCategory").val();
			data.assetSubCategory = $("#assetSubCategory").val();
			data.assetSupplierCode = $("#assetSupplierCode").val();
			data.supplierName = $("#supplierName").val();
			data.userEmail = $("#user_email").val();
			data.brandName = $("#brandName").val();
			data.ModelName = $("#ModelName").val();
			data.RAM = $("#RAM").val();
			data.HDD = $("#HDD").val();
			data.processor = $("#processor").val();
			data.currentMarketValue = $("#currentMarketValue").val();
			data.disposableAmount = $("#disposableAmount").val();
			data.depricationMethod = $("#depricationMethod").val();
			data.depricationAmount = $("#depricationAmount").val();
			data.currentConditionCode = $("#currentConditionCode").val();
			data.assetmovementStatus = $("#assetmovementStatus").val();
			data.transferredDate =/* $("#TransferredDate").val(); */ Date.parse($('#TransferredDate').val()),
			data.buyingDate =/* $("#TransferredDate").val(); */ Date.parse($('#buyingDate').val()),
			data.transferedFrom = $("#transferedFrom").val();
			data.currentLocation = $("#currentLocation").val();
			
			data.lastInspectedBy = $("#lastInspectedBy").val();
			data.registrationNo = $("#registrationNo").val();
			data.serialNo = $("#serialNo").val();
			data.color = $("#color").val();
			data.lastRepairDate = Date.parse($('#lastRepairDate').val()),
			
			console.log(data);
			

			Swal.fire({
				  title: 'Are you sure?',
				  text: "You want to register this asset!",
				  type: 'info',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, registr!'
				}).then((result) => {
				  if (result.value) {
					var responseCode =  postFunction("/asset/register", data)		
					//console.log(responseCode);
					 if(responseCode.responseText =="success"){
						 Swal.fire(
							      'Asset Registered!',
							      'Asset Registered successfully.',
							      'success'
							    ); 				
						 clearForm();
						 
						 $('#selectionDiv').fadeOut(1000, function() {
							 //$("#selectionDiv").hide();
							});
						 
						
					 }else{
						 Swal.fire(
							      'Asset Registration Failed!',
							      'Please Try Again.',
							      'error'
							    );
					 }
				    
				  }
				});
			
			
			//sw end
			
			//clearFields();
			
		
	
		
	
		}else{
			console.log(status);
			Swal.fire(
					  'Validation Error',
					  'Please provide valid data!',
					  'warning'
					);
		
		}
	}
});

function clearForm(){
	$("#assetID").val("");
	$("#assetCategory").val("");
	$("#assetSubCategory").val("");
	$("#assetSupplierCode").val("");
	$("#supplierName").val("");
	$("#user_email").val("");
	$("#brandName").val("");
	$("#ModelName").val("");
	$("#RAM").val("");
	$("#HDD").val("");
	$("#processor").val("");
	$("#currentMarketValue").val("");
	$("#disposableAmount").val("");
	$("#depricationMethod").val("");
	$("#depricationAmount").val("");
	$("#currentConditionCode").val("");
	$("#assetmovementStatus").val("");
	$('#TransferredDate').val(""),
	$('#buyingDate').val("");
	$("#transferedFrom").val("");
	$("#currentLocation").val("");
	
	$("#lastInspectedBy").val("");
	$("#registrationNo").val("");
	$("#serialNo").val("");
	$("#color").val("");
	$('#lastRepairDate').val("");
	
	
}

