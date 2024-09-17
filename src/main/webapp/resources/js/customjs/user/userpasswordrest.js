console.log("Password Reset");
var userid;
jQuery(document).ready(
		function($) {
			$("#section2").hide();

			$("#searchUserIDButton").click(
					function(event) {
						$("#userSearch_div").hide();
						$("#section2").show();

						userid = $("#userid").val().trim();
						console.log("userid----" + userid);

						if (userid == "") {
							console.log("userid----==" + userid);
							Swal.fire({
								type : 'error',
								title : 'User Password Reset action failed',
								text : 'Error occord !',
								footer : '<a href>Supplier Management V1.0</a>'
							});
							$("#section2").hide();
							$("#userSearch_div").show();
						} else {
							console.log("userid !=0----");
							$("#section2").show();

							getAsyncData('/users/users/'+ userid,function(res) {
										console.log(res);
										if (res.status == 200) {
											console.log(res.responseJSON.role);
											$("#useridtemp").val(userid);	
											$("#user_role_name").val(res.responseJSON.role);		
											$("#nicno").val(res.responseJSON.nic);		
											$("#first_name").val(res.responseJSON.name);		
											$("#mobile_no").val(res.responseJSON.mobileNo);		
											$("#user_email").val(res.responseJSON.email);		
											
										}

									});

						}

					});

			$("#cancelbtn").click(function(event) {

				$("#section2").hide();
				$("#userSearch_div").show();
				$("#userid").val('');
			});

			$("#passwordrestbtn").click(
					function(event) {

						$("#section2").hide();
						$("#userid").val('');

						Swal.fire('Successfull!',
								'Password has been reset successfully.',
								'success')
						$("#userid").val('');
						$("#userSearch_div").show();
					});
			
		

		});

$('#userid').on('focusout', function() {

	if ($(this).val().length > 0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	} else {
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#passwordrestbtn').on('click', function() {
	var useridtemp = $("#useridtemp").val().trim();
	
	console.log("Reset buttonn click user id"+useridtemp);
	
	var responseCode =  getAsyncDataPOST("/users/pwdreset/" + useridtemp,null, function() {
		
	})	
	
	console.log("Reset buttonn click responseCode"+responseCode);
});









