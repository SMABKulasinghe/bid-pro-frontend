/**
 *  Naveen
 */

$( document ).ready(function() {
	
	  $('#reg_date').datepicker({
	      autoclose: true
	    });
	
	  $('#province').select2({
		  placeholder: 'Select a province'
	  });
	
	  
	  getAsyncData('/locationdetails/getprovince', function(res) {
		  $('#province').append(new Option('Select a province', ''))
		  for (let item of res.responseJSON) {
			  $('#province').append(new Option(item.englishName, item.id))
		}
	});
	  
		
		
		/*if(!$('#acceptTerms').prop("checked")){
			   document.getElementById("reg_supplier").disabled = true;

				}
		*/
		document.getElementById("reg_supplier").disabled = true;
		
		 $('#acceptTerms').on('change', function() {
			  	if(!$('#acceptTerms').prop("checked")){
				  document.getElementById("reg_supplier").disabled = true;	
			  	}
			  else{
				  document.getElementById("reg_supplier").disabled = false;	
			  }
			});
});



$('#province').on('change', function() {
	
	console.log($(this).val());
	$('#district').find('option').remove().end();
	$('#city').find('option').remove().end();
	$('#district').select2({
		placeholder: 'Select a city'
	});
	getAsyncData('/locationdetails/getdistrict/'+$(this).val(), function(res) {
		  for (let item of res.responseJSON) {
			  $('#district').append(new Option(item.englishName, item.id)).trigger('change');
		}
		  $( "#district" ).prop( "disabled", false );
	});
})

$('#district').on('change', function() {
	
	console.log($(this).val());
	$('#city').find('option').remove().end();
	$('#city').select2({
		placeholder: 'Select a city'
	});
	getAsyncData('/locationdetails/getcity/'+$(this).val(), function(res) {
		  for (let item of res.responseJSON) {
			  $('#city').append(new Option(item.englishName, item.id))
		}
		  $( "#city" ).prop( "disabled", false );
	});
})

$('#phone1').on('keyup', function() {
	 
	if (validatePhoneNo($(this).val())) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#supplier_code').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#supplier_company_name').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#registration_no').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#address_line1').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#email_admin').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});
$('#district').on('change.select2', function() {
	if ($(this).val()!= null) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});
$('#city').on('change.select2', function() {
	if ($(this).val()!= null) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});


$('#reg_supplier').on('click', function() {
	
	status = 0;
	
	if ($('#supplier_code').val().length==0) {
		status+=1;
		$('#supplier_code').parent().parent().addClass('has-error')
	}
	if ($('#supplier_company_name').val().length==0){
		status+=1;
		$('#supplier_company_name').parent().parent().addClass('has-error')
	}
	if($('#registration_no').val().length==0){
		status+=1;
		$('#registration_no').parent().parent().addClass('has-error')
	}
	if($('#address_line1').val().length==0){
		status+=1;
		$('#address_line1').parent().parent().addClass('has-error')
	}
	if($('#email_admin').val().length==0){
		status+=1;
		$('#email_admin').parent().parent().addClass('has-error')
	}
	if($('#phone1').val().length==0){
		status+=1;
		$('#phone1').parent().parent().addClass('has-error')
	}
	if($('#province').val()==''){
		status+=1;
		$('#province').parent().parent().addClass('has-error')
	}
	if($('#district').val()==''){
		status+=1;
		$('#district').parent().parent().addClass('has-error')
	}
	if($('#city').val()==''){
		status+=1;
		$('#city').parent().parent().addClass('has-error')
	}
	
	if(!$('#acceptTerms').prop("checked")){
		Swal.fire(
				  'Confirm',
				  'Please confirm the supplier creation!',
				  'warning'
				);
//	}else if (status != 0) {
//		Swal.fire(
//				  '',
//				  'Please check the required fields!',
//				  'warning'
//				);
//	}
	}else{
		if (status==0) {

			let data ={};
			data.supCode = $('#supplier_code').val();
			data.supName = $('#supplier_company_name').val();
			data.supType = $('#user_role_name').val();
			data.supRegNo = $('#registration_no').val();
			data.supRegDate = $('#reg_date').val();
			data.supPhone1 = $('#phone1').val();
			data.supPhone2 = $('#phone2').val();
			data.supPhone3 = $('#phone3').val();
			data.supBankNo = $('#bank_account_no').val();
			data.supBankName = $('#bank_name').val();
			data.supBankBranchName = $('#bank_branch_name').val();
			data.supBankBranchCode = $('#bank_branch_code').val();
			data.supProvince = $('#province').val();
			data.supDistrict = $('#district').val();
			data.supCity = $('#city').val();
			data.supAddress1 = $('#address_line1').val();
			data.supAddress2 = $('#address_line2').val();
			data.supAddress3 = $('#address_line3').val();
			data.supMailAdmin = $('#email_admin').val();
			data.supMailBH = $('#email_business_head').val();
			data.supMailLM = $('#email_line_manager').val();
			
			var param = "notSelf";
			
			differentialAsync('/supplier/addsupplier/'+param,data,[$('#inputImage_logo')[0],$('#inputImage_Registration')[0],$('#inputImage_Address')[0]], function(res) {
				if (res.status == 200) {
					Swal.fire(
							  'Supplier Created',
							  '',
							  'success'
							);
				}
				$('#supplier_code').val('');
				$('#supplier_company_name').val('');
				$('#user_role_name').val('');
				$('#registration_no').val('');
				$('#reg_date').val('');
				$('#phone1').val('');
				$('#phone2').val('');
				$('#phone3').val('');
				$('#bank_account_no').val('');
				$('#bank_name').val('');
				$('#bank_branch_name').val('');
				$('#bank_branch_code').val('');
				$('#province').val('');
				$('#district').val('');
				$('#city').val('');
				$('#address_line1').val('');
				$('#address_line2').val('');
				$('#address_line3').val('');
				$('#email_admin').val('');
				$('#email_business_head').val('');
				$('#email_line_manager').val('');
				$('#inputImage_logo_name').text('');
				$('#inputImage_Registration_name').text('');
				$('#inputImage_Address_name').text('');
				$('#phone1').parent().parent().removeClass('has-error');
				$('#supplier_code').parent().parent().removeClass('has-error');
				$('#supplier_company_name').parent().parent().removeClass('has-error');
				$('#registration_no').parent().parent().removeClass('has-error');
				$('#address_line1').parent().parent().removeClass('has-error');
				$('#email_admin').parent().parent().removeClass('has-error');
				$('#province').parent().parent().removeClass('has-error');
				$('#district').parent().parent().removeClass('has-error');
				$('#city').parent().parent().removeClass('has-error');
				$('#acceptTerms').prop("checked",false);
				
			});
			
		
		
		}else{
			console.log(status);
			Swal.fire(
					  'Validation Error',
					  'Please provide valid data!',
					  'warning'
					);
		}
	}
	
})

$('#inputImage_logo').on('change', function (e) {
	if (e.target.files.length>0) {
		var fileName = e.target.files[0].name;
		$('#inputImage_logo_name').text('The file "' + fileName + '" has selected.')
	}
	
});
$('#inputImage_Registration').on('change', function (e) {
	if (e.target.files.length>0) {
		var fileName = e.target.files[0].name;
		$('#inputImage_Registration_name').text('The file "' + fileName + '" has selected.')
	}
	
});
$('#inputImage_Address').on('change', function (e) {
	if (e.target.files.length>0) {
		var fileName = e.target.files[0].name;
		$('#inputImage_Address_name').text('The file "' + fileName + '" has selected.')
	}
	
});