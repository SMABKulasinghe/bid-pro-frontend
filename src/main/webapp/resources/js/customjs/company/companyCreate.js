/**
 *  Kasun
 */

//mandatory-field-check-start
$( document ).ready(function() {	
	  $('#register_datepicker').datepicker({
	      autoclose: true
	    });
	  
	  $('#province').select2({
		  placeholder: 'Select a province'
	  });
	  
  getAsyncData('/locationdetails/getprovince', function(res) {
		  
		  for (let item of res.responseJSON) {
			  $('#province').append(new Option(item.englishName, item.id))
		}
	});
	console.log('ok')
} );


$('#province').on('change', function() {
	
	console.log($(this).val());
	$('#district').find('option').remove().end();
	$('#district').select2({
		placeholder: 'Select a city'
	});
	getAsyncData('/locationdetails/getdistrict/'+$(this).val(), function(res) {
		  for (let item of res.responseJSON) {
			  $('#district').append(new Option(item.englishName, item.id))
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

$('#company_phone1').on('keyup', function() {
	 
	if (validatePhoneNo($(this).val())) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#company_code').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#company_name').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#company_registration_no').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#company_address_line1').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#company_email_admin').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#province').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#district').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#city').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#city').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#company_type').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});


$('#inputImage1').on('focusout', function() {
	changeClassUpload('#inputImage1');
});

$('#inputImage2').on('focusout', function() {
	changeClassUpload('#inputImage2');
});

$('#inputImage3').on('focusout', function() {
	changeClassUpload('#inputImage3');
});


function changeClassUpload(hashtag){
	if ($(hashtag).val().length>0) {
		$(hashtag).parent().parent().parent().addClass('has-success')
		$(hashtag).parent().parent().parent().removeClass('has-error')
	}else{
		$(hashtag).parent().parent().parent().addClass('has-error')
		$(hashtag).parent().parent().parent().removeClass('has-success')
	}
	
}

$('#reg_company').on('click', function() {
	
	status = 0;
	
	if ($('#company_code').val().length==0) {
		status+=1;
		$('#company_code').parent().parent().addClass('has-error')
	}
	if ($('#company_name').val().length==0){
		status+=1;
		$('#company_name').parent().parent().addClass('has-error')
	}
	if($('#company_registration_no').val().length==0){
		status+=1;
		$('#company_registration_no').parent().parent().addClass('has-error')
	}
	if($('#company_address_line1').val().length==0){
		status+=1;
		$('#company_address_line1').parent().parent().addClass('has-error')
	}
	if($('#company_email_admin').val().length==0){
		status+=1;
		$('#company_email_admin').parent().parent().addClass('has-error')
	}
	if($('#company_phone1').val().length==0){
		status+=1;
		$('#company_phone1').parent().parent().addClass('has-error')
	}
	if($('#province').val().length==0){
		status+=1;
		$('#province').parent().parent().addClass('has-error')
	}
	if($('#district').val().length==0){
		status+=1;
		$('#district').parent().parent().addClass('has-error')
	}
	if($('#city').val().length==0){
		status+=1;
		$('#city').parent().parent().addClass('has-error')
	}
	if($('#company_type').val().length==0){
		status+=1;
		$('#company_type').parent().parent().addClass('has-error')
	}
	
	if ($('#inputImage1').val()=='') {
		status+=1;
		$('#inputImage1').parent().parent().parent().addClass('has-error')
	}
	
	if ($('#inputImage2').val()=='') {
		status+=1;
		$('#inputImage2').parent().parent().parent().addClass('has-error')
	}
	
	if ($('#inputImage3').val()=='') {
		status+=1;
		$('#inputImage3').parent().parent().parent().addClass('has-error')
	}
	

	if(!$('#acceptTerms').prop("checked")){
		Swal.fire(
				  'Warning',
				  'Please confirm the company creation!',
				  'warning'
				);
	}else if (status != 0) {
		Swal.fire(
				  '',
				  'Please check the required fields!',
				  'warning'
				);
	}else{
	
	console.log('All Done');		
		var company = {
				"companycode" : $('#company_code').val(),
				"companyname" : $('#company_name').val(),
				"companytype" : $('#company_type').val(),
				"companyregistrationno" : $('#company_registration_no').val(),
				"registerdatepicker" : Date.parse($('#register_datepicker').val()),
				"companyphone1" : $('#company_phone1').val(),						
				"companyphone2" : $('#company_phone2').val(),						
				"companyphone3" : $('#company_phone3').val(),
				"companybankaccountno" : $('#company_bank_account_no').val(),
				"companybankname" : $('#company_bank_name').val(),
				"companybankbranchname" : $('#company_bank_branch_name').val(),				
				"companybankbranchcode" : $('#company_bank_branch_code').val(),
				"province" : $('#province').val(),
				"district" : $('#district').val(),
				"city" : $('#city').val(),
				"companyaddressline1" : $('#company_address_line1').val(),
				"companyaddressline2" : $('#company_address_line2').val(),
				"companyemailadmin" : $('#company_email_admin').val(),
				"companyemailbusinesshead" : $('#company_email_business_head').val()
		};
			console.log(JSON.stringify(company));
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
					  console.log("1");  		
					  var responseCode =  differentialAsync("/company/addcompany", company,[$('#inputImage1')[0],$('#inputImage2')[0],$('#inputImage3')[0]], confirmedCallBack)
					  $(this).prop("disabled",true);
			}
		});
		
	}
	
})




function confirmedCallBack(responseCode){
	console.log("responseCode0-"+responseCode);
	$("#reg_company").prop("disabled",false);
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'Company has been created successfully.',
				      'success'
				    )
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Company creation failed',
				text: 'Error occord !',
			});
	   } 
	    
	}

function formclear(){
	$("#acceptTerms").prop("checked", false);
	$('#company_code').val('');
	$('#company_name').val('');
	$('#company_type').val('');
	$('#company_registration_no').val('');
	$('#register_datepicker').val('');
	$('#company_phone1').val('');
	$('#company_phone2').val('');
	$('#company_phone3').val('');
	$('#company_bank_account_no').val('');
	$('#company_bank_name').val('');
	$('#company_bank_branch_name').val('');
	$('#company_bank_branch_code').val('');
	$('#province').val('');
	$('#district').val('');
	$('#city').val('');
	$('#company_address_line1').val('');
	$('#company_address_line2').val('');
	$('#company_email_admin').val('');
	$('#company_email_business_head').val('');
	$('#inputImage1').val('');
	$('#inputImage2').val('');
	$('#inputImage3').val('');
}

//mandatory-field-check-end