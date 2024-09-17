//check the loging
//Piumal told to delete ;)
var globalUrl = "http://localhost:9222";
$(document).ready(function() {
	  $('#reg_date').datepicker({
	      autoclose: true
	    });
	  
	  getAsyncData('/locationdetails/getprovince', function(res) {
		  $('#province').append(new Option('Select a province', ''))
		  for (let item of res.responseJSON) {
			  $('#province').append(new Option(item.englishName, item.id))
		}
	});
	
})

function getAsyncData(url,callBackName) {
	
	console.log(globalUrl + url);
		
		$.ajax({

			url : globalUrl + url,
			contentType : "application/json",			
			type : 'GET',
			dataType : "json",
			complete: function(xhr, textStatus) {
				if (xhr.readyState == 4) {
					 console.log("Completed with Token "+xhr.status+" "+textStatus);
//				        console.log(xhr);
//				        console.log(xhr.responseText);
//				        console.log(xhr.responseJSON);
					 if(callBackName!=null){
						 callBackName(xhr);
					 }
					 
				}         
		    },
		});
}

$('#login_btn').click(function(e){
	
	sessionStorage.removeItem('GlobalToken');
	sessionStorage.removeItem('loggedUserID');
	sessionStorage.removeItem('myMainKey');
	sessionStorage.removeItem('mmiddlennames');
	sessionStorage.removeItem('userMenu');
	sessionStorage.removeItem('User');
	sessionStorage.removeItem('GlobleUrl');
	
	event.preventDefault();
      var userId=$('#user_id').val();
      var userPassWord=$('#user_password').val();
      var jsonUserObject=userId+':'+userPassWord;
      var passObj=$.base64.encode(jsonUserObject);
//  sessionStorage.setItem('GlobalToken', passObj);
  
  console.log('test-----------------------------------'+passObj);
  
//    var resdata=getFunction("/users/"+userId, passObj);
    
//	var tokenNow = sessionStorage.getItem("GlobalToken");
//	console.log('Basic '+sessionStorage.getItem("GlobalToken"));

  
//  2019/03/19 Naveen ------- change login process ---------  
	
	$.ajax({

		url : globalUrl + "/users/"+userId,
		contentType : "application/json",
		async : false,
		headers : {"Authorization" : 'Basic '+passObj},
		type : 'GET',
		dataType : "json",
		complete: function(xhr, textStatus) {
	        console.log("Completed with Token "+xhr.status+" "+textStatus);
	        console.log(xhr);
	        if(xhr.status=="200"){ 
	        	var resData=xhr.responseJSON;
//	        	resData[0]="S";
//	        	resData[1]=getData;	

	        	if (new Date(resData.expireDate)>new Date()) {
	        		var userData=resData;
		            var userr = userData.username;
		            var mmiddlenname = userData.mmiddlenname;
		            var loggeduserID = userData.userid;
		           
		            sessionStorage.setItem('User',JSON.stringify(userData) );
		            sessionStorage.setItem('myMainKey', userr);
		            sessionStorage.setItem('mmiddlennames', mmiddlenname);
		            sessionStorage.setItem('loggedUserID', loggeduserID);
					sessionStorage.setItem('GlobleUrl', globalUrl);
		            
		            var option =[];
		            var loggedUserID = sessionStorage.getItem('loggedUserID');
		            sessionStorage.setItem('GlobalToken', passObj);
		    	
		    		
		    		var userMenu = JSON.stringify(option);
		    		sessionStorage.setItem('userMenu', userMenu);
		    		
		    		var OptionListLS =JSON.parse(sessionStorage.getItem('userMenu'));

					//alert("First-- "+userData.isFirstLogin);
					if(userData.isFirstLogin === false){
						$("#fristLoginDiv").modal();
						$('#fristLoginDiv').modal({backdrop: 'static', keyboard: false})
					
				
					}else{
						window.location.replace("index");
					}
		    		
		    		//window.location.replace("index");
				}else{
					Swal.fire({
		        		  type: 'error',
		        		  title: 'User Expired',
		        		  text: 'Please contact the administration',
		        		});
				}
	            
	        }else {
	        	Swal.fire({
	        		  type: 'error',
	        		  title: 'Access Denied',
	        		  text: 'Please check the USER ID and Password!',
	        		});
	        	
	        }
	    },
	});
	
	// Piumal 2022/Aug/09
	// Change password on first login
	
	function updateFirstLogin(loggeduserID){
		console.log("First-- "+loggeduserID);
		
		var userPassWord = lastPW.newPassword;
        var jsonUserObject = loggeduserID+':'+userPassWord;
        var passObj = $.base64.encode(jsonUserObject);
        sessionStorage.setItem('GlobalToken', passObj);
		
		const url = "/users/updateFirstLogin";
		const data = {
			"loggeduserID" : loggeduserID
		};
		
		$.ajax({
			url : globalUrl + url,
			contentType : "application/json",		
			async : false,
			headers : {"Authorization" : 'Basic '+sessionStorage.getItem('GlobalToken')},
			data : JSON.stringify(data),
			type : 'PUT',
			dataType : "json",
			complete: function(xhr, textStatus) {
				if (xhr.readyState == 4) {
					 console.log("Completed with Token "+xhr.status+" "+textStatus);
				        console.log(xhr);
						$("#fristLoginDiv").toggle();
					$('.modal-backdrop').hide()


					 
				}         
		    },
		});
	}
	
	
	$('#current_password').focusout(function(e){
		console.log("current_password focusout");
		checkCurrentPasswordWithUser("Ediri");
		
	});
	
	
	const checkCurrentPasswordWithUser = currentPW = (userID) => {
		console.log("UserID ---- "+ userID);
		
	  var userId = $('#user_id').val();
      var userPassWord = $('#current_password').val();
      var jsonUserObject = userId+':'+userPassWord;
      const passObj2 = $.base64.encode(jsonUserObject);
		
		$.ajax({

		url : globalUrl + "/users/"+userId,
		contentType : "application/json",
		async : false,
		headers : {"Authorization" : 'Basic '+passObj2},
		type : 'GET',
		dataType : "json",
		complete: function(xhr, textStatus) {
	        console.log("Completed with Token "+xhr.status+" "+textStatus);
	        console.log(xhr);
	        if(xhr.status=="200"){ 
	        	var resData=xhr.responseJSON;

	        	
	            
	        }else {
	        	Swal.fire({
	        		  type: 'error',
	        		  title: 'Invalid Password',
	        		  text: 'Please check your confirmation email for the tempory password!',
	        		});
	        	
	        }
	    },
	});
		
	}
	
	$('#change_password_btn').click(function(e){
		console.log("change_password_btn");
		const currentPassword = $('#current_password').val();
		const ch_password1 = $('#ch_password1').val();
		const ch_password2 = $('#ch_password2').val();
		
		if(ch_password1 === ch_password2){
			console.log("Match & correcnt temp password");
			changePassword(currentPassword, ch_password1);
		}else{
			Swal.fire({
	        		  type: 'error',
	        		  title: 'Password Mismatch',
	        		  text: 'New password does not match with the confirm password',
	        		});
		}
		
	});
	
	function getAsyncDataPUT(url,data,callBackName) {
	
	//console.log(globalUrl + url);
	//console.log('put-data '+JSON.stringify(data));
		
		$.ajax({

			url : globalUrl + url,
			contentType : "application/json",			
			headers : {"Authorization" : 'Basic '+globalToken},
			data : JSON.stringify(data),
			type : 'PUT',
			dataType : "json",
			complete: function(xhr, textStatus) {
				if (xhr.readyState == 4) {
					// console.log("Completed with Token "+xhr.status+" "+textStatus);
//				        console.log(xhr);
//				        console.log(xhr.responseText);
//				        console.log(xhr.responseJSON);
					 if (callBackName != null) {
						 callBackName(xhr);
					}
					 
				}         
		    },
		});
}
	var lastPW;
	const changePassword = (currentPassword, newPassword) => {
		//console.log("c- "+currentPassword+" n- "+newPassword)
		//const currentPassword = $.base64.encode(currentPassword);
		//const newPassword = $.base64.encode(newPassword);
		const psobj = {
			"currentPassword" : currentPassword,
			"newPassword" : newPassword
		}
		
		//const jsonUserObject = userId+':'+userPassWord;
        lastPW = psobj;
		
		var responseCode =  getAsyncDataPUT("/users/changepassword", psobj, confirmedCallBack);
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
	
	function confirmedCallBack(responseCode){
//	 marksArray = {};
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);

		if(responseCode.responseText!= null & responseCode.responseJSON.msg=="Success"){
		  // formclear();
		  updateFirstLogin(responseCode.responseJSON.userID);
		   Swal.fire(
				      'Accepted!',
				      'Password changed successfully.',
				      'success'
				    )
				    $('#user_password').val("");
				    
				    
	   }else{
		   console.log(responseCode.responseJSON);
		   Swal.fire({
				type: 'error',
				title: 'Password Change Failed',
				text: 'Try again !',
				footer: '<a href>appaiz.com</a>'
			});
	   } 
		// formclear();
}
	
	
	
	var user = JSON.parse(sessionStorage.getItem('User'));
	/*userRoleInBussiness =user.userRoleInBussiness;
	userCompany = user.userCompanyCode;
*/
	if(user==null){
		//createLog('Login', ('login failed'), user);	
		//alert("No User");
	}else{		
		//alert("User available");
		
		var location = 'Login';
		var action = 'Login Success';		
		var url  = '/useractivity/addlogentry/'+user.userid+'/roleid/'+user.userRoll.userRoleID+'/location/'+location+'/action/'+action
		var globalToken = sessionStorage.getItem("GlobalToken");
		
		$.ajax({

			url : globalUrl + url,
			contentType : "application/json",		
			async : false,
			headers : {"Authorization" : 'Basic '+globalToken},
			type : 'GET',
			dataType : "json",
			complete: function(xhr, textStatus) {
				if (xhr.readyState == 4) {
					 console.log("Completed with Token "+xhr.status+" "+textStatus);
//				        console.log(xhr);
//				        console.log(xhr.responseText);
//				        console.log(xhr.responseJSON);
					 /*if(callBackName!=null){
						 callBackName(xhr);
					 }*/
					 
				}         
		    },
		});
		
		
		// createLog('Login', ('login success'), user);	
	}
	
	
	
	
	

    
    
    
    
    
    
//    if(resdata[0]=="S"){
//        
//    	console.log(resdata[1])
//        var userData=resdata[1];
//        var userr = userData.username;
//        var loggeduserID = userData.userid;
//       
//        
//        sessionStorage.setItem('myMainKey', userr);
//        sessionStorage.setItem('loggedUserID', loggeduserID);
//        
//         window.location.replace("index");
//        
//        var option =[];
//        var loggedUserID = sessionStorage.getItem('loggedUserID');
//	
//		var resp = getFunction("/users/"+loggedUserID+"/useroptions", "RjAwNDoxMjM0NTY3")
//		resp[1].forEach(function(item){
//			option.push(item.userRoleOptionsName);
//		});
//		
//		var userMenu = JSON.stringify(option);
//		sessionStorage.setItem('userMenu', userMenu);
//		
//		var OptionListLS =JSON.parse(sessionStorage.getItem('userMenu'));
//	    
//        
//        
//    } else if(resdata[0]=="E"){
//        alert("error");
//    }

});

$('#logout_urlbtn').click(function(){
	//alert("in");
	var resdata=getFunction("/logout","RjAwNDoxMjM0NTY3");
	//alert(resdata[0]+"  "+resdata[1]);
	
	if(resdata[0]=="E" && resdata[1]=="204"){
		sessionStorage.setItem('myMainKey', "");
        sessionStorage.setItem('loggedUserID', "");
        sessionStorage.setItem('GlobalToken', "");
		window.location.replace("login");	
	}else{
		console.log("did'nt log out---->"+resData[1]);
	}
	
	
});



$('#forgotPassword_btn').click(function(){
	$("#forgotPassword_model").show();
});


$(window).click(function(e) {

	if (e.target == $('#forgotPassword_model')[0]) {
		console.log('ok')
		$('#forgotPassword_model').hide();
	} else {
	}
});

$('#back_btn').click(function(e) {
	$('#forgotPassword_model').hide();

});
$('#backgr').click(function(e) {
	$('#forgotPassword_model').hide();
	
});

$('#resetpassword_btn').click(function(){
	event.preventDefault();
	 var fpuserid = $('#fp_login_userid').val();
	 var fpuseremail = $('#fp_login_useremail').val();
	 
	 console.log(fpuserid+" "+fpuseremail);
	 if(fpuserid.length==0 && fpuseremail.length==0){
		 $('#forgotPassword_model').hide();
		 Swal.fire({
			  title: 'Please fill the form!',
			  text: "Enter your login id and password.",
			  type: 'error',
			  showCancelButton: false,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Ok!',
			  allowOutsideClick: false
			}).then((result) => {
			  if (result.value) {
				  
				  $('#forgotPassword_model').show();
		          					
				 }
			  }
			);
	 }else{
		 console.log("before1");
		 $('#forgotPassword_model').hide();
		 console.log("before2");
		 document.getElementById("overlay").style.display = "block";
		 console.log("after");
		 $.ajax({

				url : globalUrl + "/users/forgotpassword/user/"+fpuserid+"/email/"+fpuseremail,
				contentType : "application/json",
				async : true,
				type : 'GET',
				dataType : "json",
				complete: function(xhr, textStatus) {
			        console.log("Completed with Token "+xhr.status+" "+textStatus);
			        console.log(xhr);
			        if(xhr.status=="200"){
			        	 $('#forgotPassword_model').hide();
			        	var resData=xhr.responseJSON;	
			        	console.log(resData);
			        	if (resData!=null && resData.msg=="Password Changed") {
			        		document.getElementById("overlay").style.display = "none";
							console.log(resData.msg);
							Swal.fire(
								      'Success!',
								      'Password has been changed successfully.',
								      'success'
								    ); 		
			        	}else {
			        		document.getElementById("overlay").style.display = "none";
				        	$('#forgotPassword_model').hide();
				        	Swal.fire({
								  title: 'Failed!',
								  text: "Please check your credentials.",
								  type: 'error',
								  showCancelButton: false,
								  confirmButtonColor: '#3085d6',
								  cancelButtonColor: '#d33',
								  confirmButtonText: 'Ok!',
								  allowOutsideClick: false
								}).then((result) => {
								  if (result.value) {
									  
							            
									  $('#forgotPassword_model').show();					
									 }
								  }
								);
				        	
				        }
			        	
			        }
			    },
			});
	 }
	 
	 
	 
	 
});

$('#btn_register').on('click', function() {
	$("#mdl_supplier_registration").modal();
})

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
function validatePhoneNo(phone){
	var isValid = /^(\+\d{2,4})?\s?(\d{10})$/.test(phone);
	return isValid;
}
function validateEmail(email){
	var isValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	return isValid;
}

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

document.getElementById("reg_supplier").disabled = true;

$('.acpt').on('change', function() {
  	if(!($('#acceptTerms').prop("checked") && $('#acceptTermsCon').prop("checked"))){
	  document.getElementById("reg_supplier").disabled = true;	
  	}
  else{
	  document.getElementById("reg_supplier").disabled = false;	
  }
});

/*$('#acceptTermsCon').on('change', function() {
	if(!$('#acceptTerms').prop("checked") && !$('#acceptTermsCon').prop("checked")){
		document.getElementById("reg_supplier").disabled = true;	
	}
	else{
		document.getElementById("reg_supplier").disabled = false;	
	}
});
*/


$('#reg_supplier').on('click', function() {
	
	let status = 0;
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
	$.each($('input[name="check"]'), function( index, value ) {
		if ($(value).prop('checked')) {
			$(value).parent().parent().addClass('has-error')
			status-=1;
		}else{
			status+=1;
		}
	});
	
	console.log(status)
	

	
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
		 document.getElementById("reg_supplier").disabled = false;	
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
				$.each($('input[name="check"]'), function( index, value ) {
					if ($(value).prop('checked')) {
						data.regType =$(value).attr('id');
						$(value).prop('checked', false);
					}
				});
				
				var param = "notSelf";
			
			differentialAsync('/supplier/addsupplier/'+param,data,[$('#inputImage_logo')[0],$('#inputImage_Registration')[0],$('#inputImage_Address')[0]], function(res) {
				if (res.status == 200) {
					console.log(res.responseJSON);
					Swal.fire(
							  'Your company registed',
							  'Thank you for submiting a request for Company / Supplier registration. Our team will verify the submitted information and confirm your registration with BidPro portal. You may contact our call center for further information. Your reference No. is '+res.responseJSON,
							  'success'
							);
					$('#mdl_supplier_registration').modal('toggle');
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
	
});

$('input[name="check"]').on('click', function() {
	let selected = $(this)
	$.each($('input[name="check"]'), function( index, value ) {
		if ($(value).attr('id') != selected.attr('id')) {
			$(value).prop('checked', false); 
		}
		});
})

function differentialAsync(url, data, file, callbackfun) {

	if (data.length == 0) {
		getAsyncDataPOST(url, data, callbackfun)
	} else {
		for ( let up in file) {
			if (file[up].files.length != 0) {

				let reader = new FileReader();
				reader.readAsDataURL(file[up].files[0]);
				reader.onload = function() {

					file_data = reader.result;
					data[file[up].id] = file_data;

					if (file.length == (parseInt(up) + 1)) {
						getAsyncDataPOST(url, data, callbackfun)
					}
				}

			}else{
				if (file.length == (parseInt(up) + 1)) {
					getAsyncDataPOST(url, data, callbackfun)
				}
			}

		}

	}

}
function getAsyncDataPOST(url,data,callBackName) {
	
	console.log(globalUrl + url);
		
		$.ajax({

			url : globalUrl + url,
			contentType : "application/json",			
			data : JSON.stringify(data),
			type : 'POST',
			dataType : "json",
			complete: function(xhr, textStatus) {
				if (xhr.readyState == 4) {
					 console.log("Completed with Token "+xhr.status+" "+textStatus);
					 if (callBackName != null) {
						 callBackName(xhr);
					}
					 
				}         
		    },
		});
}

function viewReset() {
	$("#mdl_password_reset").modal();
}

$('#btn_resetpass').on('click', function() {
	if ($('#passreset_userid').val()=='') {
		Swal.fire(
				  'Invalid User ID',
				  'Please provide valid UserID!',
				  'error'
				);
	}else if ($('#passreset_email').val()=='' || !validateEmail($('#passreset_email').val())) {
		Swal.fire(
				  'Invalid Email',
				  'Please provide valid Email!',
				  'error'
				);
	}else{
		data={'userID':$('#passreset_userid').val(),'email':$('#passreset_email').val()}
		getAsyncDataPOST('/users/forgotpassword/user/'+$('#passreset_userid').val(),data, function(res) {
			if (res.responseJSON.msg == 'User not found') {
				Swal.fire(
						  'User not found',
						  'Please provide valid Email!',
						  'error'
						);
			}else{
				Swal.fire(
						  'Success',
						  'Your new password sent to '+$('#passreset_email').val(),
						  'success'
						);
			}
		});
	}
})
