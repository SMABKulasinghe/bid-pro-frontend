console.log("Redesign");
var user = JSON.parse(sessionStorage.getItem('User'));
console.log(user.companyCode);
console.log(user.userRoll.userRoleID);
var roleid=user.userRoll.userRoleID;


jQuery(document).ready(function($) {
			console.log("UserCreation");

			var globalToken = sessionStorage.getItem('GlobalToken');

			/*getAsyncData("/userroles/getuserrole/" + roleid, function(resdata) {
//				var userRoleNames = resdata;
				 console.log(resdata);
				resdata.responseJSON.forEach(function(item) {
					// console.log('UserRole: ' + item.userRoleName);
					$("#user_role_name").append(
							'<option value=' + item.userRoleID + '-'
									+ item.userRoleInBussiness + '>'
									+ item.userRoleName + '</option>');
				});
			});
*/
			getAsyncData("/glob/1", function(resdata) {
				console.log(resdata);
				
				// One-Time-Admin
				if(resdata.responseJSON.gbonetimadminroleid == user.userRoll.userRoleID){
					getAsyncData("/userroles/getuserrole/" + roleid, function(resdata) {
//						var userRoleNames = resdata;
						// console.log(resdata);
						resdata.responseJSON.forEach(function(item) {
							// console.log('UserRole: ' + item.userRoleName);
							$("#user_role_name").append(
									'<option value=' + item.userRoleID + '-'
											+ item.userRoleInBussiness + '>'
											+ item.userRoleName + '</option>');
						});
					});
					
					// Company-Admin
				}else if(resdata.responseJSON.gbcompanyadminroleid == user.userRoll.userRoleID){
					getAsyncData("/userroles/getalluserroles/"+user.companyCode, function(resdata) {
						//console.log(resdata);
						resdata.responseJSON.forEach(function(item) {
							 console.log('UserRole: ' + item.userRoleName);
							$("#user_role_name").append(
									'<option value=' + item.userRoleID + '-'
									+ item.userRoleInBussiness + '>'
									+ item.userRoleName + '</option>');
						});
					});
					
					// SuperUser
				}else if(resdata.responseJSON.gbsuperuserroleid == user.userRoll.userRoleID){
					getAsyncData("/userroles/getAllUserRolesForSuperUser", function(resdata) {
						//console.log(resdata);
						resdata.responseJSON.forEach(function(item) {
							 console.log('UserRole: ' + item.userRoleName);
							$("#user_role_name").append(
									'<option value=' + item.userRoleID + '-'
									+ item.userRoleInBussiness + '>'
									+ item.userRoleName + '</option>');
						});
					});
				}else{
					// Normal user
					console.log("Normal user");
					getAsyncData("/userroles/getalluserroles/"+user.companyCode, function(resdata) {
						console.log(resdata);
						resdata.responseJSON.forEach(function(item) {
							 console.log('UserRole: ' + item.userRoleName);
							$("#user_role_name").append(
									'<option value=' + item.userRoleID + '-'
									+ item.userRoleInBussiness + '>'
									+ item.userRoleName + '</option>');
						});
					});
					
					
				}
				
			});
			
					getAsyncData("/userroles/getLocationCode", function(resdata) {
						console.log(resdata);
						resdata.responseJSON.forEach(function(item) {
							 //console.log('Location: ' + item.locationname);
							$("#location_code").append(
									'<option value=' + item.id + '-'
									+ item.locationname + '>'
									+ item.locationname + '</option>');
						});
					});
				
					getAsyncData("/userroles/getDepartmentCode", function(resdata) {
						console.log(resdata);
						resdata.responseJSON.forEach(function(item) {
							 //console.log('Department: ' + item.departmentName);
							$("#department_code").append(
									'<option value=' + item.deptId + '-'
									+ item.departmentName + '>'
									+ item.departmentName + '</option>');
						});
				});
});


$('#user_id').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});
$('#user_role_name').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#location_code').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});
$('#department_code').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#NIC_no').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});
$('#first_name').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#mobile_no').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});
$('#user_email').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});




var userRoleInBussiness = "N";

$('#user_id').on(
		'focusout',
		function() {
			console.log($("#user_id").val());
			if ($("#user_id").val() == "") {

			} else {
				getAsyncData("/users/isexists/by/" + "user_id" + "/"
						+ $('#user_id').val(), userexistsCallBack);
			}

		});

$('#NIC_no').on(
		'focusout',
		function() {
			console.log($("#NIC_no").val());
			if ($("#NIC_no").val() == "") {

			} else {
				// alert(validateNIC()); 942281632v 199439848733

				var bol = validateNIC($("#NIC_no").val());
				if (!bol) {
					$('#NIC_no').val("");
					Swal.fire({
						type : 'error',
						title : 'Invalid NIC format',
						text : 'Please enter a valid NIC!',
						footer : '<a href>Supplier Portal V1.0</a>'
					});
				} else {
					getAsyncData("/users/isexists/by/" + "NIC_no" + "/"
							+ $('#NIC_no').val(), userexistsCallBack);
				}

			}

		});

$('#mobile_no').on(
		'focusout',
		function() {
			console.log($("#mobile_no").val());

			if ($("#mobile_no").val() == "") {

			} else {
				var bol = validatePhoneNo($("#mobile_no").val());
				console.log(bol);
				if (!bol) {
					$('#mobile_no').val("");
					Swal.fire({
						type : 'error',
						title : 'Invalid Phone Number format',
						text : 'Please enter a valid phone number!',
						footer : '<a href>Supplier Portal V1.0</a>'
					});
				} else {
					getAsyncData("/users/isexists/by/" + "mobile_no" + "/"
							+ $('#mobile_no').val(), userexistsCallBack);
				}

			}

		});

$('#user_email').on(
		'focusout',
		function() {
			console.log($("#user_email").val());
			if ($("#user_email").val() == "") {

			} else {
				var bol = emailIsValid($("#user_email").val());
				if (!bol) {
					$('#user_email').val("");
					Swal.fire({
						type : 'error',
						title : 'Invalid email format',
						text : 'Please enter a valid email address!',
						footer : '<a href>Supplier Portal V1.0</a>'
					});
				} else {
					getAsyncData("/users/isexists/by/" + "user_email" + "/"
							+ $('#user_email').val(), userexistsCallBack);
				}

			}

		});

function userexistsCallBack(res) {
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
			&& res.responseJSON.idtype == "mobile_no") {
		console.log(res.responseText);
		$('#mobile_no').val("");
		Swal.fire({
			type : 'error',
			title : 'Mobile number already used*',
			text : 'Please use a different mobile no !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
	} else if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "user_email") {
		console.log(res.responseText);
		$('#user_email').val("");
		Swal.fire({
			type : 'error',
			title : 'Please use a different Email*',
			text : 'This email address is associated with another user !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
	}
}

function emailIsValid(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validateNIC() {
	var nic = document.getElementById('NIC_no');
	var isValid = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/.test(nic.value);
	var dob = nic.value.substring(1, 7);
	return isValid;
}

function validatePhoneNo(phone) {
	var isValid = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/
			.test(phone);
	return isValid;
}

console.log("First");
$('#company_div').hide();
$('#supplier_div').hide();

setDatesForToday();

function setDatesForToday() {
	var date = new Date();
	var dd = String(date.getDate()).padStart(2, '0');
	var mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
	var mmm = String(date.getMonth() + 3).padStart(2, '0'); // January is 0!
	var yyyy = date.getFullYear();
	var today = mm + '-' + dd + '-' + yyyy;
	var endDay = mmm + '-' + dd + '-' + yyyy;

	$("#Date_start").val(today);
	$("#Date_end").val(endDay);
	console.log("today is " + today);
}

function SelectElement(id, valueToSelect) {

	var element = document.getElementById(id);
	element.value = valueToSelect;
}

function clearFields() {
	$("#user_id").val("");
	$("#mobile_no").val("");
	$("#user_id_z").val("");
	$("#NIC_no").val("");
	$("#first_name").val("");
	$("#user_email").val("");
	$('input[type="checkbox"]').prop('checked', false);

	SelectElement("user_role_name", "empty");
	SelectElement("location_code", "empty");
	SelectElement("department_code", "empty");
}

$("#create_user_button").click(function() {
	
	
	if(!$('#acceptTerms').prop("checked")){
		Swal.fire(
				  'Confirm',
				  'Please confirm the user creation!',
				  'warning'
				);
	}else{
		
		let userrolename = $('#user_role_name').val().split("-")[0];
		// var userrolename = $("#user_role_name").val();
		var userIDZ = $("#user_id_z").val();
		
		let locationcode = $('#location_code').val().split("-")[0];
		let departmentcode = $('#department_code').val().split("-")[0];
		
		var NIC = $("#NIC_no").val();
		var firstName = $("#first_name").val();
		// var displayName = $("#display_name").val();

		var mobileNo = $("#mobile_no").val();
		var email = $("#user_email").val();

		var Date_start = $("#Date_start").val().replace(
				/[^a-zA-Z0-9]/g, '-');
		;
		var Date_end = $("#Date_end").val().replace(/[^a-zA-Z0-9]/g,
				'-');
		;
		var Date_start_dd = new Date(Date_start);
		var Date_end_dd = new Date(Date_end);
		var userRoleObj = {
			"userRoleID" : userrolename
		};
		/*var locationObj = {
			"id" : locationcode
		};
		var departmentObj = {
			"deptId" : departmentcode
		};*/

		if (userrolename == "empty" || userIDZ == "" || NIC == ""
				|| firstName == "" || mobileNo == "" || email == ""
				|| Date_start == "" || Date_end == "") {
			console.log("Some fields are empty");
			Swal.fire({
				type : 'info',
				title : 'Please fill all * marked fields',
				text : 'Please fill all fields !',
				footer : '<a href>Supplier Portal V1.0</a>'
			});
		} else {

			var search = {
				"userid" : userIDZ,
				"username" : firstName,
				"nic" : NIC,
				"email" : email,
				"mobileNo" : mobileNo,
				"createdDateTime" : Date_start_dd,
				"expireDate" : Date_end_dd,
				"userRoleInBussiness" : userRoleInBussiness,
				"companyCode" : user.companyCode,
				"userRoll" : userRoleObj,
				"locationID" : locationcode,
				"deptID" : departmentcode
			};

			console.log(JSON.stringify(search));
			var myurl = "/users/adduser";
			// postFunction("/users/adduser", search)

//id, deptId
			var responseCode = getAsyncDataPOST("/users/adduser", search, confirmedCallBack)

			console.log(myurl);
			
			//clearFields();
		
		}
	}
	
		// OLD
	
		/*	var acceptTermsBool = $('#acceptTerms').is(":checked");

			if (acceptTermsBool) {
				console.log("Accepted");

				var tick = $("#acceptTerms").val();

				let userrolename = $('#user_role_name').val().split("-")[0];
				// var userrolename = $("#user_role_name").val();
				var userIDZ = $("#user_id_z").val();

				var NIC = $("#NIC_no").val();
				var firstName = $("#first_name").val();
				// var displayName = $("#display_name").val();

				var mobileNo = $("#mobile_no").val();
				var email = $("#user_email").val();

				var Date_start = $("#Date_start").val().replace(
						/[^a-zA-Z0-9]/g, '-');
				;
				var Date_end = $("#Date_end").val().replace(/[^a-zA-Z0-9]/g,
						'-');
				;
				var Date_start_dd = new Date(Date_start);
				var Date_end_dd = new Date(Date_end);
				var userRoleObj = {
					"userRoleID" : userrolename
				};

				if (userrolename == "empty" || userIDZ == "" || NIC == ""
						|| firstName == "" || mobileNo == "" || email == ""
						|| Date_start == "" || Date_end == "") {
					console.log("Some fields are empty");
					Swal.fire({
						type : 'info',
						title : 'Please fill all * marked fields',
						text : 'Please fill all fields !',
						footer : '<a href>Supplier Portal V1.0</a>'
					});
				} else {

					var search = {
						"userid" : userIDZ,
						"username" : firstName,
						"nic" : NIC,
						"email" : email,
						"mobileNo" : mobileNo,
						"createdDateTime" : Date_start_dd,
						"expireDate" : Date_end_dd,
						"userRoleInBussiness" : userRoleInBussiness,
						"companyCode" : user.companyCode,
						"userRoll" : userRoleObj
					};

					console.log(JSON.stringify(search));
					var myurl = "/users/adduser";
					// postFunction("/users/adduser", search)

					var responseCode = getAsyncDataPOST("/users/adduser", search, confirmedCallBack)

					console.log(myurl);

				}

				console.log(tick + " " + userrolename + " " + userIDZ + " "
						+ userRoleInBussiness + " " + firstName + " "
						+ NIC + " " + Date_start_dd + " "
						+ Date_end_dd);

				clearFields();

			} else {
				console.log("Not Accepted");
				Swal.fire({
					type : 'info',
					title : 'Please confrim user creation',
					text : 'Select Report Type !',
					footer : '<a href>Supplier Portal V1.0</a>'
				});
			}
*/
		});

function confirmedCallBack(responseCode) {
	console.log(responseCode);

	if (responseCode.responseText != null
			& responseCode.responseText == "Success") {
		Swal
				.fire('Accepted!', 'User has been created successfully.',
						'success')
	} else {
		console.log(responseCode.responseText);
		Swal.fire({
			type : 'error',
			title : 'User creation failed',
			text : 'Error occord !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
	}

}
