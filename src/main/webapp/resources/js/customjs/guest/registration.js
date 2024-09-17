var globalUrl = "http://localhost:9222";

$(document).ready(function() {
	  $("#mdl_supplier_registration").modal();
	  $('#mdl_supplier_registration').modal({backdrop: 'static', keyboard: false})  
	
	  /*$("#resultDIv").modal();
	  $('#resultDIv').modal({backdrop: 'static', keyboard: false})  
	  */
});

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




$('#phone2').on('keyup', function() {
	 
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





$('#email_admin').on('focusout', function() {
	 
	/*if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}*/
});


$('#phone2').on('focusout', function() {
			console.log($("#phone1").val());

			if ($("#phone2").val() == "") {

			} else {
				var bol = validatePhoneNo($("#phone2").val());
				console.log(bol);
				if (!bol) {
					//$('#phone2').val("");
					Swal.fire({
						
						type : 'error',
						title : 'Invalid Phone Number format',
						text : 'Please enter a valid phone number!',
						
					});
				} 
				else{
					//console.log("dfa");
					getAsyncDataNosecurty("/registration/isexists/by/" + "mobile_no" + "/"
							+ $('#phone2').val(), existsCallBack);
					
				}
			}

});


$('#supplier_company_name').on('focusout', function() {

			if ($("#supplier_company_name").val() == "") {
		//		alert("Required");
			} else {
				getAsyncDataNosecurty("/registration/isexists/by/" + "company_name" + "/"
							+ $('#supplier_company_name').val(), existsCallBack);
			}
});



$('#email_admin').on('focusout', function() {
			console.log($("#email_admin").val());

			if ($("#email_admin").val() == "") {

			} else {
				var bol = validateEmail($("#email_admin").val());
				console.log(bol);
				if (!bol) {
					//$('#phone2').val("");
					Swal.fire({
						
						type : 'error',
						title : 'Invalid email',
						text : 'Please enter a email address!',
						
					});
					$(this).parent().parent().addClass('has-error')
					$(this).parent().parent().removeClass('has-success')
				}else{
					//console.log("dfa");
					getAsyncDataNosecurty("/registration/isexists/by/" + "user_email" + "/"
							+ $('#email_admin').val(), existsCallBack);
				}
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
	if($('#email_admin').val().length==0){
		status+=1;
		$('#email_admin').parent().parent().addClass('has-error')
	}
	if($('#phone2').val().length==0){
		status+=1;
		$('#phone1').parent().parent().addClass('has-error')
	}
	
	console.log(status)
	
	$.each($('input[name="check"]'), function( index, value ) {
		if ($(value).prop('checked')) {
			$(value).parent().parent().addClass('has-error')
			//status += 1;
			console.log(status)
		}else{
			status += 1;
			console.log(status)
		}
	});
	
	console.log(status)
	

	
	if(!$('#acceptTerms').prop("checked")){
		Swal.fire(
				  'Confirm',
				  'Please confirm the action!',
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
			data.supName = $('#supplier_company_name').val();
			data.supType = $('#user_role_name').val();
			data.supPhone1 = $('#phone2').val();
			data.supMailAdmin = $('#email_admin').val();
			
				$.each($('input[name="check"]'), function( index, value ) {
					if ($(value).prop('checked')) {
						data.regType =$(value).attr('id');
						$(value).prop('checked', false);
					}
				});
				
				console.log(data);
				var param = "Self";
			
			differentialAsync('/supplier/supplierselfreg/'+param,data,null, function(res) {
				console.log(res);
				if (res.responseJSON.result == true) {
					console.log(res.responseJSON);
					/*Swal.fire(
							  'Your company registration is in progress',
							  'Thank you for registering with us as a Supplier. Please check your email for login credentials. You may contact our call center for further assistance. Your reference No. is '+res.responseJSON.clientID,
							  'success'
							); */
							Swal.fire({
						title: 'Your company registration is in progress',
						text: 'Thank you for registering with us as a Supplier. Please check your email for login credentials. You may contact our call center for further assistance. Your reference No. is '+res.responseJSON.clientID,
						type: 'success',
						showCancelButton: false,
						confirmButtonColor: '#3085d6',
						cancelButtonColor: '#d33',
						confirmButtonText: 'OK'
					}).then((result) => {
						if (result.value) {
							window.location.replace("login");

						}
					});
					$('#mdl_supplier_registration').modal('toggle');
				}
				$('#supplier_company_name').val('');
				$('#user_role_name').val('');
				$('#phone1').val('');
				$('#email_admin').val('');
				$('#acceptTerms').prop("checked",false);
				
				$('#mdl_supplier_registration').hide();
				
				//window.location.replace("login");
				
				$("#resultDIv").modal();
				$('#resultDIv').modal({backdrop: 'static', keyboard: false})
				
			});
		}else{
			console.log(status);
			Swal.fire(
					  'More details required',
					  'Please provide more information!',
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

	if (data.length == 0 || file == null) {
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


function getAsyncDataNosecurty(url,callBackName) {	
	console.log(globalUrl + url);	
		$.ajax({
			url : globalUrl + url,
			contentType : "application/json",			
			type : 'GET',
			dataType : "json",
			complete: function(xhr, textStatus) {
				if (xhr.readyState == 4) {
					 if(callBackName!=null){
						 callBackName(xhr);
					 }
					 
				}         
		    },
		});
}


function existsCallBack(res) {
	console.log(res);

	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "userId") {
		console.log(res.responseText);
		$('#user_id').val("");
		Swal.fire({
			type : 'error',
			title : 'Please use a different User ID*',
			text : 'User ID is already taken !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
	} else if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "NIC_no") {
		console.log(res.responseText);
		$('#NIC_no').val("");
		Swal.fire({
			type : 'error',
			title : 'User already exists for this NIC*',
			text : 'NIC is used !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
	} else if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "mobile_no" || res.responseJSON != null && res.responseJSON.msg == false
			&& res.responseJSON.idtype == "mobile_no" ) {
		
		if( res.responseJSON.msg == true){
			console.log(res.responseText);
			$('#phone2').val("");
			Swal.fire({
				type : 'error',
				title : 'Mobile number already used*',
				text : 'Please use a different mobile no !',
				footer : '<a href>Supplier Portal V1.0</a>'
			});
			$('#phone2').parent().parent().removeClass('has-success')
			$('#phone2').parent().parent().addClass('has-error')
		}else{
			$('#phone2').parent().parent().addClass('has-success')
			$('#phone2').parent().parent().removeClass('has-error')
		}
		
		
	} else if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "user_email") {
		console.log(res.responseText);
		$('#email_admin').val("");
		Swal.fire({
			type : 'error',
			title : 'Please use a different Email*',
			text : 'This email address is associated with another user !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
		$('#email_admin').parent().parent().removeClass('has-success')
		$('#email_admin').parent().parent().addClass('has-error')
	}
	
	else if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "company_name" || res.responseJSON != null && res.responseJSON.msg == false
			&& res.responseJSON.idtype == "company_name" ) {
		
		if( res.responseJSON.msg == true){
			console.log(res.responseText);
			$('#supplier_company_name').val("");
			Swal.fire({
				type : 'error',
				title : 'Company Name already used*',
				text : 'Please use a different company name !',
				footer : '<a href>Supplier Portal V1.0</a>'
			});
			$('#supplier_company_name').parent().parent().removeClass('has-success')
			$('#supplier_company_name').parent().parent().addClass('has-error')
		}else{
			$('#supplier_company_name').parent().parent().addClass('has-success')
			$('#supplier_company_name').parent().parent().removeClass('has-error')
		}
	}else{
		$('#email_admin').parent().parent().addClass('has-success')
		$('#email_admin').parent().parent().removeClass('has-error')
	}	
} 







$('#login_btn').click(function(e){
	
	sessionStorage.removeItem('GlobalToken');
	sessionStorage.removeItem('loggedUserID');
	sessionStorage.removeItem('myMainKey');
	sessionStorage.removeItem('mmiddlennames');
	sessionStorage.removeItem('userMenu');
	sessionStorage.removeItem('User');
	
	event.preventDefault();
      var userId=$('#user_id').val();
      var userPassWord=$('#user_password').val();
      var jsonUserObject=userId+':'+userPassWord;
      var passObj=$.base64.encode(jsonUserObject);
//  sessionStorage.setItem('GlobalToken', passObj);
  
  console.log('test-----------------------------------'+passObj);
  

  
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
		            
		            var option =[];
		            var loggedUserID = sessionStorage.getItem('loggedUserID');
		            sessionStorage.setItem('GlobalToken', passObj);
		    	
		    		
		    		var userMenu = JSON.stringify(option);
		    		sessionStorage.setItem('userMenu', userMenu);
		    		
		    		var OptionListLS =JSON.parse(sessionStorage.getItem('userMenu'));

					if(userData.isFirstLogin === false){
						window.location.replace("login");
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
	
});
