
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="resources/images/favicon.ico">

    <title>BidPro Portal - Login</title>
  
	<!-- Bootstrap v4.0.0-beta -->
	<link rel="stylesheet" href="resources/assets/vendor_components/bootstrap/dist/css/bootstrap.css">

	<!-- Font Awesome -->
	<link rel="stylesheet" href="resources/assets/vendor_components/font-awesome/css/font-awesome.min.css">

	<!-- Ionicons -->
	<link rel="stylesheet" href="resources/assets/vendor_components/Ionicons/css/ionicons.min.css">

	<!-- Theme style -->
	<link rel="stylesheet" href="resources/css/master_style.css">

	<!-- Skins. Choose a skin from the css/skins
	   folder instead of downloading all of them to reduce the load. -->
	<link rel="stylesheet" href="resources/css/skins/_all-skins.css">	
	
	<!-- bootstrap datepicker -->
	<link href="resources/assets/vendor_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.css" rel="stylesheet">
	
	<!-- Select2 -->
	<link rel="stylesheet" href="resources/assets/vendor_components/select2/dist/css/select2.min.css">

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

	<!-- google font -->
	<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
	
	<style>
/* Style all input fields */
input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
}

/* Style the submit button */
input[type=submit] {
  background-color: #04AA6D;
  color: white;
}

/* Style the container for inputs */
.container {
  background-color: #f1f1f1;
  padding: 20px;
}

/* The message box is shown when the user clicks on the password field */
#message {
  display:none;
  background: #f1f1f1;
  color: #000;
  position: relative;
  padding: 20px;
  margin-top: 10px;
}

#message p {
  padding: 10px 35px;
  font-size: 18px;
}

/* Add a green text color and a checkmark when the requirements are right */
.valid {
  color: green;
}

.valid:before {
  position: relative;
  left: -35px;
 /*  content: "✔"; */
}

/* Add a red text color and an "x" when the requirements are wrong */
.invalid {
  color: red;
}

.invalid:before {
  position: relative;
  left: -35px;
 /*  content: "✖"; */
}

/* .login-page {
    background-image:none
} */
</style>

</head>
<body class="hold-transition login-page responsiveBack">
<br><br><br><br><br>
<!-- <img src="resources/images/butterfly logo.png" alt="Paris" class="centerMe"> -->
<img style="width: 20%; height: 20%;" src="resources/images/Untitled.png" alt="Paris" class="centerMe">
<div class="login-box">
  <div class="login-logo">
 <br>
   <!-- <a href=""><b>BidPro </b>Portal&trade;</a>  -->
    <!-- <a href="resources/index2.html" style="color: #000;font-weight: 500;"><b>Supplier </b>Utility Management</a> -->
  </div>
  <!-- <p class="login-box-msg">Partnering business relations. Digitally.</p> -->
  <!-- /.login-logo -->
  <div class="login-box-body">
  <!--  <p class="login-box-msg">Welcome to Service Partner Portal</p> -->
 
   <!--  <p class="login-box-msg" style="font-size: 18px; padding-bottom: 0px;">Welcome</p>
    </br> -->
   <!--  <p class="login-box-msg" style="margin-top: -15px;">Welcome to Service Partner Portal</p> -->

    <form action="" method="post" class="form-element">
      <div class="form-group has-feedback">
        <input type="text" id="user_id" class="form-control" placeholder="UserID">
        <span class="ion ion-email form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input type="password" id="user_password"  class="form-control" placeholder="Password">
        <span class="ion ion-locked form-control-feedback"></span>
      </div>
      <div class="row">
        
        <!-- /.col -->
        <div class="col-12">
         <div class="fog-pwd">
          	<!-- <a href="javascript:void(0)" onclick="viewReset()" style="color: blue"><i class="ion ion-locked"></i> Forgot password?</a><br> -->
          </div>
        </div>
        <!-- /.col -->
        <div class="col-12 text-center">
          <button type="button" id="login_btn" class="btn bg-olive btn-block btn-flat margin-top-10">SIGN IN</button>
        </div>
        <div class="col-12 text-center">
          <!-- <button type="button" id="btn_register" class="btn btn-info btn-block btn-flat margin-top-10">Join With Us</button> -->
          <!-- <a class="btn btn-info btn-block btn-flat margin-top-10" href="registration" target="_blank">Join With Us</a> -->
        </div>
        <!-- /.col -->
      </div>
    </form>


  </div>
  <!-- /.login-box-body -->
</div>
<!-- /.login-box -->

<div id="mdl_supplier_registration" class="modal fade bd-example-modal-lg" role="dialog">
  <div class="modal-dialog modal-lg" style="max-width: 60%">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
      <div style="width: 100%;">
      	 <div class="row">
      	 	<div class="col-md-2">
      	 		<button type="button" class="close pull-left" data-dismiss="modal">&times;</button>
      	 	</div>
      	 	<div class="col-md-10">
      	 		<div class="row">
      	 			<div class="col-md-12">
      	 				<h1 class="modal-title pull-right" id="mdl_com_name">BidPro Registration</h1>
      	 			</div>
      	 		</div>
      	 		<div class="row">
      	 			<div class="col-md-12">
      	 				<div class="row" style="height: 15px;">
      	 					<div class="col-md-12">
      	 						<p id="add1" class="pull-right" style="font-size: 12px">1B 1/2, Deanston Place,</p>
      	 					</div>
      	 				</div>
      	 				<div class="row" style="height: 15px;">
      	 					<div class="col-md-12">	
      	 						<p id="add2" class="pull-right" style="font-size: 12px">Colombo 03,</p>
      	 					</div>
      	 				</div>
      	 				<div class="row" style="height: 15px;">
      	 					<div class="col-md-12">	
      	 						<p id="add2" class="pull-right" style="font-size: 12px">Sri Lanka</p>
      	 					</div>
      	 				</div>
      	 				<div class="row" style="height: 15px; margin-top: 5px">
      	 					<div class="col-md-12">	
      	 						<p id="add2" class="pull-right" style="font-size: 12px">bidpro.tender@gmail.com</p>
      	 					</div>
      	 				</div>
      	 			</div>
      	 		</div>
      	 	</div>
			
        </div>
      </div>
      </div>
      <div class="modal-body">
      	<div style="height: 100%">
      	
      	 	
      		<div class="row" id="supplier_div" >
      			<div class="col-md-12 ">
      			<div class="row">
	      	 		<div class="col-md-12">
	      	 			<p>If you are company interested in building a partnership through BidPro please communicate with us through the company registration form given below. Team BidPro will contact you.</p>
	      	 		</div>
      			</div>
      				<div class="row">
      					<div class="col-md-6">
										<fieldset>
											<h5 class="text-green">Registration Type</h5>
											<input id="company_check" name="check" type="checkbox"
												class=""> <label for="company_check">Join as
												a company</label> <br>
										</fieldset>
										<fieldset>
											<input id="supplier_check" name="check" type="checkbox"
												class=""> <label for="supplier_check">Join
												as a supplier</label> <br>
										</fieldset>
										<fieldset>
					<h5 class="text-green">Company Information</h5>
					<div class="form-group row">
						<div class="col-sm-3">
							<label for="inputPassword3" class="control-label">Company Name <span style="color: red">*</span></label>
						</div>
						<div class="col-sm-9">
							<input id="supplier_company_name" name="supplier_company_name"
								type="text" class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Category</label>
						<div class="col-sm-9">
									<select class="form-control m-b" name="user_role_name"
										id="user_role_name" required="required">
										<option value=''>Select</option>
										<option value='P'>Product</option>
										<option value='C'>Service</option>
										<option value='B'>Both</option>
									</select>
								</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Company Registration No <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<input id="registration_no" name="registration_no" type="text"
								class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Registered Date </label>
						<div class="col-sm-9 input-group date">
							<div class="input-group-addon">
		                    	<i class="fa fa-calendar"></i>
		                  	</div>
							<input type="text" class="form-control pull-right" id="reg_date">
						</div>
					</div>
				</fieldset>
				<fieldset>
					<h5 class="text-green">Contact Information</h5>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Phone No 1 <span style="color: red">*</span></label>
						<div class="col-sm-8">
							<input id="phone1" name="phone1" type="number"
								class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Phone No 2</label>
						<div class="col-sm-8">
							<input id="phone2" name="phone2" type="number"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">E -Mail<span style="color: red">*</span></label>
						<div class="col-sm-8">
							<input id="email_admin" name="email_admin" type="email"
								class="form-control" required="required">
						</div>
					</div>
				</fieldset>
				<!-- <fieldset>
					<h5 class="text-green">Registration Type</h5>
					<input id="company_check" name="check" type="checkbox" class="">
					<label for="company_check">Join as a company</label> <br>
				</fieldset>
				<fieldset>
					<input id="supplier_check" name="check" type="checkbox" class="">
					<label for="supplier_check">Join as a supplier</label> <br>
				</fieldset> -->
				
      					</div>
      					<div class="col-md-6">
      					<fieldset>
					<h5 class="text-green">Location Information</h5>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Province <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<select id="province" name="province"
								class="form-control select2">
								</select>
						</div>
					</div>
					<div class="form-group row">
						<label for="district" class="col-sm-3 control-label">District <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<select id="district" name="district"
								class="form-control select2" disabled></select>
						</div>
					</div>
					<div class="form-group row">
						<label for="city" class="col-sm-3 control-label">City <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<select id="city" name="city"
								class="form-control select2" disabled>
								 
								</select>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Address Line 1 <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<input id="address_line1" name="address_line1" type="text"
								class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Address Line 2</label>
						<div class="col-sm-9">
							<input id="address_line2" name="address_line2" type="text"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Address Line 3</label>
						<div class="col-sm-9">
							<input id="address_line3" name="address_line3" type="text"
								class="form-control">
						</div>
					</div>
					
					

				</fieldset>
				<fieldset>
					<!-- <h5 class="text-purple">Registration / Address Proof</h5> -->
				<h5 class="text-green">Upload Details</h5> 
					<div class="form-group row">
						<label for="inputImage_logo" class="col-sm-3 control-label">Upload Company Logo Here <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<label title="Upload image file" for="inputImage_logo"
								class="btn bg-olive"> <input type="file"
								accept="image/*" name="file" id="inputImage_logo" class="hide">
								Upload Registration Form Image
								
							</label>
							<p id="inputImage_logo_name"></p>
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputImage_Registration" class="col-sm-3 control-label">Registration Form Upload <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<label title="Upload image file" for="inputImage_Registration"
								class="btn bg-olive"> <input type="file"
								accept="image/*" name="file" id="inputImage_Registration" class="hide">
								Upload Registration Form Image
							</label>
							<p id="inputImage_Registration_name"></p>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputImage_Address" class="col-sm-3 control-label">Address
							Proof Upload <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<label title="Upload image file" for="inputImage_Address"
								class="btn bg-olive"> <input type="file"
								accept="image/*" name="file" id="inputImage_Address" class="hide">
								Upload Address Proof Image
							</label>
							<p id="inputImage_Address_name"></p>
						</div>
					</div>

				</fieldset>
      					</div>
      				</div>
      				<div class="row">
      						<div class="col-sm-12">
      							<fieldset>
									<h5 class="text-yellow">Please confirm the supplier creation</h5>
									<input id="acceptTerms" name="acceptTerms" type="checkbox" class="acpt">
									<label for="acceptTerms">I confirm that all information supplied above is correct and accurate.</label> <br>
				
									<input id="acceptTermsCon" name="acceptTermsCon" type="checkbox" class="acpt">
									<label for="acceptTermsCon">Read and understood our terms and conditions.</label> <br>
				
								</fieldset>
      						</div>
      					</div>
      			</div>
      		</div>
      	</div>
      </div>
      <div class="modal-footer" id="btn">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" id="reg_supplier" class="btn bg-olive pull-right">Register</button>
      </div>
    </div>

  </div>
</div>

<div id="mdl_password_reset" class="modal fade bd-example-modal-lg" role="dialog">
  <div class="modal-dialog modal-lg">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
      <div style="width: 100%;">
      	 <div class="row">
      	 	<div class="col-md-2">
      	 		<button type="button" class="close pull-left" data-dismiss="modal">&times;</button>
      	 	</div>
      	 	<div class="col-md-10">
      	 		<div class="row">
      	 			<div class="col-md-12">
      	 				<h1 class="modal-title pull-right" id="mdl_com_name">BidPro.com</h1>
      	 			</div>
      	 		</div>
      	 		<div class="row">
      	 			<div class="col-md-12">
      	 				<div class="row" style="height: 15px;">
      	 					<div class="col-md-12">
      	 						<p id="add1" class="pull-right" style="font-size: 12px">1B 1/2, Deanston Place,</p>
      	 					</div>
      	 				</div>
      	 				<div class="row" style="height: 15px;">
      	 					<div class="col-md-12">	
      	 						<p id="add2" class="pull-right" style="font-size: 12px">Colombo 03,</p>
      	 					</div>
      	 				</div>
      	 				<div class="row" style="height: 15px;">
      	 					<div class="col-md-12">	
      	 						<p id="add2" class="pull-right" style="font-size: 12px">Sri Lanka</p>
      	 					</div>
      	 				</div>
      	 				<div class="row" style="height: 15px; margin-top: 5px">
      	 					<div class="col-md-12">	
      	 						<p id="add2" class="pull-right" style="font-size: 12px">bidpro.tender@gmail.com</p>
      	 					</div>
      	 				</div>
      	 			</div>
      	 		</div>
      	 	</div>
			
        </div>
      </div>
      </div>
      <div class="modal-body">
      	<div style="height: 100%">
      	
      	 	
      		<div class="row">
      			<div class="col-md-12 ">
      				<div class="row">
      					<div class="col-md-12">
				<fieldset>
					<h5 class="text-green">Forgot Password</h5>
					<div class="form-group row">
						<label for="passreset_userid" class="col-sm-3 control-label">User ID/ Employee ID</label>
						<div class="col-sm-9">
							<input id="passreset_userid" name="phone1" type="text"
								class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="passreset_email" class="col-sm-3 control-label">E -Mail</label>
						<div class="col-sm-9">
							<input id="passreset_email" name="email_admin" type="email"
								class="form-control" required="required">
						</div>
					</div>
				</fieldset>
				
      					</div>
      					
      				</div>
      				<div class="row">
      						<div class="col-sm-12">
      						</div>
      					</div>
      			</div>
      		</div>
      	</div>
      </div>
      <div class="modal-footer" id="btn">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" id="btn_resetpass" class="btn bg-olive pull-right">Reset Password</button>
      </div>
    </div>

  </div>
</div>

<div id="fristLoginDiv"
		class="modal fade" role="dialog"
		data-toggle="modal" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog" style="width: 80%">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">

					<div>
						<div class="row">
							
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-12">
										<h2 class="modal-title" id="mdl_com_name">Quick
											Registration is successful</h2>
									</div>
								</div>
								
							</div>

						</div>
					</div>

				</div>

				<div class="modal-body">
					<div style="height: 100%">
					
					<div class="row" id="">
							<div class="col-md-12 ">
								<div class="row">
									<div class="col-md-12">
										<p>Thank you for join with us. <br> Please change your password at first login</p>
									</div>
								</div>
							</div>
						</div>
						
						<div class="row">
				
				
				
				<div class="col-12">
				<div class="login-box-body">
						<h3 class="login-box-msg">Change Password at First Login</h3>

						<form action="" method="post" class="form-element">
							<div class="form-group has-feedback">
								<input type="password" id="current_password" class="form-control"
									placeholder="Current Password"> <span
									class="ion ion-locked form-control-feedback"></span>
							</div>
							<div class="form-group has-feedback">
								<input type="password" id="ch_password1" class="form-control"
									placeholder="New Password"> <span
									class="ion ion-locked form-control-feedback"
									pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"></span>
							</div>
							<div class="form-group has-feedback">
								<input type="password" id="ch_password2" class="form-control"
									placeholder="Confrim Password"> <span
									class="ion ion-locked form-control-feedback"></span>
							</div>
							<div class="row">

								<!-- /.col -->
								<div class="col-12">
									<div id="message">
  <h3>Password must contain the following:</h3>
  <h4 id="letter" class="invalid control-label">A <b>lowercase</b> letter</h4>
  <h4 id="capital" class="invalid control-label">A <b>capital (uppercase)</b> letter</h4>
  <h4 id="number" class="invalid control-label">A <b>number</b></h4>
  <h4 id="length" class="invalid control-label">Minimum <b>8 characters</b></h4>
</div>
								</div>
								<!-- /.col -->
								<div class="col-12 text-center">
									<button type="button" id="change_password_btn"
										class="btn bg-olive btn-block btn-flat margin-top-10">Change Password</button>
								</div>

							</div>
						</form>
						
					</div>
				
				</div>
				
				</div>
					</div>
				</div>


				<div class="modal-footer" id="btn">

				</div>



			</div>
		</div>
	</div>

	<!-- jQuery 3 -->
	<script src="resources/assets/vendor_components/jquery/dist/jquery.min.js"></script>
	
	<!-- popper -->
	<script src="resources/assets/vendor_components/popper/dist/popper.min.js"></script>
	
	<!-- Bootstrap v4.0.0-beta -->
	<script src="resources/assets/vendor_components/bootstrap/dist/js/bootstrap.min.js"></script>
	
	<script src="resources/js/plugins/base64/jquery.base64.min.js"></script>
  	<script src="resources/js/customjs/loginJs/loginjs.js"></script>
  	<script src="resources/js/plugins/sweetalert2@8.js"></script>
  	<!-- bootstrap datepicker -->
	<script src="resources/assets/vendor_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
	<!-- Select2 -->
	<script src="resources/assets/vendor_components/select2/dist/js/select2.full.js"></script>
	
	<script>
var myInput = document.getElementById("ch_password1");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
</script>
	
</body>

</html>
