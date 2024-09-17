
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<meta name="description" content="">
<meta name="author" content="">
<link rel="icon" href="resources/images/favicon.ico">

<title>BidPro Portal - Join</title>

<!-- Bootstrap v4.0.0-beta -->
<link rel="stylesheet"
	href="resources/assets/vendor_components/bootstrap/dist/css/bootstrap.css">

<!-- Font Awesome -->
<link rel="stylesheet"
	href="resources/assets/vendor_components/font-awesome/css/font-awesome.min.css">

<!-- Ionicons -->
<link rel="stylesheet"
	href="resources/assets/vendor_components/Ionicons/css/ionicons.min.css">

<!-- Theme style -->
<link rel="stylesheet" href="resources/css/master_style.css">

<!-- Skins. Choose a skin from the css/skins
	   folder instead of downloading all of them to reduce the load. -->
<link rel="stylesheet" href="resources/css/skins/_all-skins.css">

<!-- bootstrap datepicker -->
<link
	href="resources/assets/vendor_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.css"
	rel="stylesheet">

<!-- Select2 -->
<link rel="stylesheet"
	href="resources/assets/vendor_components/select2/dist/css/select2.min.css">

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

<!-- google font -->
<link
	href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
	rel="stylesheet">

</head>
<body class="hold-transition login-page responsiveBack">
	<img src="resources/images/butterfly logo.png" alt="Paris"
		class="centerMe">


	<div id="mdl_supplier_registration"
		class="modal fade bd-example-modal-lg" role="dialog"
		data-toggle="modal" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog modal-lg" style="max-width: 90%">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<div style="width: 100%;">
						<div class="row">
							<div class="col-md-2">
								<!-- <button type="button" class="close pull-left" data-dismiss="modal">&times;</button> -->
							</div>
							<div class="col-md-10">
								<div class="row">
									<div class="col-md-12">
										<h1 class="modal-title pull-right" id="mdl_com_name">BidPro
											Registration</h1>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12">
										<div class="row" style="height: 15px;">
											<div class="col-md-12">
												<p id="add1" class="pull-right" style="font-size: 12px">No 04, Lambert watta, </p>
											</div>
										</div>
										<div class="row" style="height: 15px;">
											<div class="col-md-12">
												<p id="add2" class="pull-right" style="font-size: 12px"> Mallawapitiya, Kurunegala</p>
											</div>
										</div>
										<div class="row" style="height: 15px;">
											<div class="col-md-12">
												<p id="add2" class="pull-right" style="font-size: 12px">Sri
													Lanka</p>
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


						<div class="row" id="supplier_div">
							<div class="col-md-12 ">
								<div class="row">
									<div class="col-md-12">
										<p>If your company interested in building a partnership
											through BidPro please communicate with us through the company
											registration form given below.</p>
										<p>Team BidPro will contact you.</p>
									</div>
								</div>
								<div class="row">
									<div class="col-md-6">
										<!-- <fieldset>
											<h5 class="text-green">Registration Type</h5>
											<input id="company_check" name="check" type="checkbox"
												class=""> <label for="company_check">Join as
												a company</label> <br>
										</fieldset> -->
										<fieldset>
											<input id="supplier_check" name="check" type="checkbox"
												class=""> <label for="supplier_check">Join
												as a supplier</label> <br>
										</fieldset>
										<fieldset>
											<h5 class="text-green">Company Information</h5>
											<div class="form-group row">
												<div class="col-sm-4">
													<label for="inputPassword3" class="control-label">Company
														Name <span style="color: red">*</span>
													</label>
												</div>
												<div class="col-sm-8">
													<input id="supplier_company_name"
														name="supplier_company_name" type="text"
														class="form-control" required="required">
												</div>
											</div>
											<div class="form-group row">
												<label for="inputPassword3" class="col-sm-4 control-label">Company Type</label>
												<div class="col-sm-8">
													<select class="form-control m-b" name="user_role_name"
														id="user_role_name" required="required">
														<option value=''>Select</option>
														<option value='I'>Individual</option>
														<option value='SPP'>Sole Proprietor/Partnership</option>
														<option value='LLC'>Limited Liability Company</option>
														<option value='PQC'>Public Quoted Company</option>
														<option value='OC'>Offshore Company</option>
													</select>
												</div>
											</div>
											<!-- <div class="form-group row">
												<label for="inputPassword3" class="col-sm-3 control-label">Company
													Registration No <span style="color: red">*</span>
												</label>
												<div class="col-sm-9">
													<input id="registration_no" name="registration_no"
														type="text" class="form-control" required="required">
												</div>
											</div>
											<div class="form-group row">
												<label for="inputPassword3" class="col-sm-3 control-label">Registered
													Date </label>
												<div class="col-sm-9 input-group date">
													<div class="input-group-addon">
														<i class="fa fa-calendar"></i>
													</div>
													<input type="text" class="form-control pull-right"
														id="reg_date">
												</div>
											</div> -->
										</fieldset>
										
									</div>
									
									<div class="col-md-6">
									<fieldset>
											<h5 class="text-green">Contact Information</h5>
											<div class="form-group row">
												<label for="inputPassword3" class="col-sm-4 control-label">Contact Person
												 <span style="color: red">*</span>
												</label>
												<div class="col-sm-8">
													<input id="phone1" name="phone1" type="text"
														class="form-control" required="required">
												</div>
											</div>
											<div class="form-group row">
												<label for="inputPassword3" class="col-sm-4 control-label">EMail Address<span style="color: red">*</span>
												</label>
												<div class="col-sm-8">
													<input id="email_admin" name="email_admin" type="email"
														class="form-control" required="required">
												</div>
											</div>
											<div class="form-group row">
												<label for="inputPassword3" class="col-sm-4 control-label">Phone
													No </label>
												<div class="col-sm-8">
													<input id="phone2" name="phone2" type="number"
														class="form-control">
												</div>
											</div>
										</fieldset>
									
									
									</div>
									
									<!-- <div class="col-md-6">
										<fieldset>
											<h5 class="text-green">Location Information</h5>
											<div class="form-group row">
												<label for="inputPassword3" class="col-sm-3 control-label">Province
													<span style="color: red">*</span>
												</label>
												<div class="col-sm-9">
													<select id="province" name="province"
														class="form-control select2">
													</select>
												</div>
											</div>
											<div class="form-group row">
												<label for="district" class="col-sm-3 control-label">District
													<span style="color: red">*</span>
												</label>
												<div class="col-sm-9">
													<select id="district" name="district"
														class="form-control select2" disabled></select>
												</div>
											</div>
											<div class="form-group row">
												<label for="city" class="col-sm-3 control-label">City
													<span style="color: red">*</span>
												</label>
												<div class="col-sm-9">
													<select id="city" name="city" class="form-control select2"
														disabled>

													</select>
												</div>
											</div>
											<div class="form-group row">
												<label for="inputPassword3" class="col-sm-3 control-label">Address
													Line 1 <span style="color: red">*</span>
												</label>
												<div class="col-sm-9">
													<input id="address_line1" name="address_line1" type="text"
														class="form-control" required="required">
												</div>
											</div>
											<div class="form-group row">
												<label for="inputPassword3" class="col-sm-3 control-label">Address
													Line 2</label>
												<div class="col-sm-9">
													<input id="address_line2" name="address_line2" type="text"
														class="form-control">
												</div>
											</div>
											<div class="form-group row">
												<label for="inputPassword3" class="col-sm-3 control-label">Address
													Line 3</label>
												<div class="col-sm-9">
													<input id="address_line3" name="address_line3" type="text"
														class="form-control">
												</div>

										</fieldset>
										
									</div> -->
								</div>

<hr style="background : #2b6565">
								<!-- <div class="row">
									<div class="col-md-6">
										<fieldset>
											<h5 class="text-purple">Registration / Address Proof</h5>
											<h5 class="text-green">Registration Documents</h5>
											<div class="form-group row">
												<label for="inputImage_logo" class="col-sm-3 control-label">Upload
													Company Logo Here <span style="color: red">*</span>
												</label>
												<div class="col-sm-9">
													<label title="Upload image file" for="inputImage_logo"
														class="btn bg-olive"> <input type="file"
														accept="image/*" name="file" id="inputImage_logo"
														class="hide"> Upload Registration Form Image

													</label>
													<p id="inputImage_logo_name"></p>
												</div>
											</div>

											<div class="form-group row">
												<label for="inputImage_Registration"
													class="col-sm-3 control-label">Registration Form
													Upload <span style="color: red">*</span>
												</label>
												<div class="col-sm-9">
													<label title="Upload image file"
														for="inputImage_Registration" class="btn bg-olive">
														<input type="file" accept="image/*" name="file"
														id="inputImage_Registration" class="hide"> Upload
														Registration Form Image
													</label>
													<p id="inputImage_Registration_name"></p>
												</div>
											</div>
											<div class="form-group row">
												<label for="inputImage_Address"
													class="col-sm-3 control-label">Address Proof Upload
													<span style="color: red">*</span>
												</label>
												<div class="col-sm-9">
													<label title="Upload image file" for="inputImage_Address"
														class="btn bg-olive"> <input type="file"
														accept="image/*" name="file" id="inputImage_Address"
														class="hide"> Upload Address Proof Image
													</label>
													<p id="inputImage_Address_name"></p>
												</div>
											</div>
											<div class="form-group row">
												<label for="inputImage_Address"
													class="col-sm-6 control-label">ICTAD registration (for building contractors only)
													<span style="color: red">*</span>
												</label>
												<div class="col-sm-6">
													<label title="Upload image file" for="inputImage_Address"
														class="btn bg-olive"> <input type="file"
														accept="image/*" name="file" id="inputImage_Address"
														class="hide"> Choose file
													</label>
													<p id="inputImage_Address_name"></p>
													<p>Download From <a href='appaiz.com/etendering'>bidpro.com/listofdir</a> </p>
												</div>
											</div>
											<div class="form-group row">
												<label for="inputImage_Address"
													class="col-sm-6 control-label">List of Goods/Services provided by the Company
													<span style="color: red">*</span>
												</label>
												<div class="col-sm-6">
													<label title="Upload image file" for="inputImage_Address"
														class="btn bg-olive"> <input type="file"
														accept="image/*" name="file" id="inputImage_Address"
														class="hide"> Choose file
													</label>
													<p id="inputImage_Address_name"></p>
													<p>Download From <a href='appaiz.com/etendering'>bidpro.com/listofdir</a> </p>
												</div>
											</div>
											<div class="form-group row">
												<label for="inputImage_Address"
													class="col-sm-6 control-label">Certification of Incorporation
													<span style="color: red">*</span>
												</label>
												<div class="col-sm-6">
													<label title="Upload image file" for="inputImage_Address"
														class="btn bg-olive"> <input type="file"
														accept="image/*" name="file" id="inputImage_Address"
														class="hide"> Choose file
													</label>
													<p id="inputImage_Address_name"></p>
													<p>Download From <a href='appaiz.com/etendering'>bidpro.com/listofdir</a> </p>
												</div>
											</div>
											<div class="form-group row">
												<label for="inputImage_Address"
													class="col-sm-6 control-label">Articles of Association
													<span style="color: red">*</span>
												</label>
												<div class="col-sm-6">
													<label title="Upload image file" for="inputImage_Address"
														class="btn bg-olive"> <input type="file"
														accept="image/*" name="file" id="inputImage_Address"
														class="hide"> Choose file
													</label>
													<p id="inputImage_Address_name"></p>
													<p>Download From <a href='appaiz.com/etendering'>bidpro.com/listofdir</a> </p>
												</div>
											</div>
										</fieldset>
									</div>
									<div class="col-md-6">
										<fieldset>
											<h5 class="text-purple">Registration / Address Proof</h5>
											&nbsp
											<h5 class="text-green"> </h5>
											<div class="form-group row">
												<label for="inputImage_logo" class="col-sm-3 control-label">
													Green Policy <span style="color: red">*</span>
												</label>
												<div class="col-sm-9">
													<label title="Upload image file" for="inputImage_logo"
														class="btn bg-olive"> <input type="file"
														accept="image/*" name="file" id="inputImage_logo"
														class="hide"> Upload Green Policy
													</label>
													<p id="inputImage_logo_name"></p>
													<p>For more details please visit <a href='appaiz.com/etendering'>bidpro.com/etendering</a> </p> 
												</div>
											</div>

											<div class="form-group row">
												<label for="inputImage_Registration"
													class="col-sm-3 control-label">KYC Form
													Upload <span style="color: red">*</span>
												</label>
												<div class="col-sm-9">
													<label title="Upload image file"
														for="inputImage_Registration" class="btn bg-olive">
														<input type="file" accept="image/*" name="file"
														id="inputImage_Registration" class="hide"> Upload KYC														
													</label>
													<p id="inputImage_Registration_name"></p>
													<p>Download From <a href='appaiz.com/etendering'>bidpro.com/kyc</a> </p>
												</div>
											</div>
											<div class="form-group row">
												<label for="inputImage_Address"
													class="col-sm-3 control-label">Company Profile
													<span style="color: red">*</span>
												</label>
												<div class="col-sm-9">
													<label title="Upload image file" for="inputImage_Address"
														class="btn bg-olive"> <input type="file"
														accept="image/*" name="file" id="inputImage_Address"
														class="hide"> Upload Company Profile
													</label>
													<p id="inputImage_Address_name"></p>
												</div>
											</div>
											<div class="form-group row">
												<label for="inputImage_Address"
													class="col-sm-6 control-label">Current account statements of last 06 months
													(for building contractors only)
													<span style="color: red">*</span>
												</label>
												<div class="col-sm-6">
													<label title="Upload image file" for="inputImage_Address"
														class="btn bg-olive"> <input type="file"
														accept="image/*" name="file" id="inputImage_Address"
														class="hide"> Choose file
													</label>
													<p id="inputImage_Address_name"></p>
												</div>
											</div>
											<div class="form-group row">
												<label for="inputImage_Address"
													class="col-sm-6 control-label">Certified list of Directors
													<span style="color: red">*</span>
												</label>
												<div class="col-sm-6">
													<label title="Upload image file" for="inputImage_Address"
														class="btn bg-olive"> <input type="file"
														accept="image/*" name="file" id="inputImage_Address"
														class="hide"> Choose file
													</label>
													<p id="inputImage_Address_name"></p>
													<p>Download From <a href='appaiz.com/etendering'>bidpro.com/listofdir</a> </p>
												</div>
											</div>
											<div class="form-group row">
												<label for="inputImage_Address"
													class="col-sm-6 control-label">Latest Audited Financial Accounts
													<span style="color: red">*</span>
												</label>
												<div class="col-sm-6">
													<label title="Upload image file" for="inputImage_Address"
														class="btn bg-olive"> <input type="file"
														accept="image/*" name="file" id="inputImage_Address"
														class="hide"> Choose file
													</label>
													<p id="inputImage_Address_name"></p>
													<p>Download From <a href='appaiz.com/etendering'>bidpro.com/listofdir</a> </p>
												</div>
											</div>
											<div class="form-group row">
												<label for="inputImage_Address"
													class="col-sm-6 control-label">List of Top 15 Present/Past Clients
													<span style="color: red">*</span>
												</label>
												<div class="col-sm-6">
													<label title="Upload image file" for="inputImage_Address"
														class="btn bg-olive"> <input type="file"
														accept="image/*" name="file" id="inputImage_Address"
														class="hide"> Choose file
													</label>
													<p id="inputImage_Address_name"></p>
													<p>Download From <a href='appaiz.com/etendering'>bidpro.com/listofdir</a> </p>
												</div>
											</div>
											
										</fieldset>
									
									</div>
								</div> -->




								<div class="row">
									<div class="col-sm-12">
										<fieldset>
											<h5 class="text-yellow">Please confirm the action</h5>
											<input id="acceptTerms" name="acceptTerms" type="checkbox"
												class="acpt"> <label for="acceptTerms">I
												confirm that all information supplied above is correct and
												accurate.</label> <br> <input id="acceptTermsCon"
												name="acceptTermsCon" type="checkbox" class="acpt">
											<label for="acceptTermsCon">Read and understood our
												terms and conditions.</label> <br>

										</fieldset>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer" id="btn">
					<!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
					<button type="button" id="reg_supplier"
						class="btn bg-olive pull-right">Register</button>
				</div>
			</div>

		</div>
	</div>







	<div id="resultDIv"
		class="modal fade bd-example-modal-lg" role="dialog"
		data-toggle="modal" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog modal-lg" style="max-width: 90%">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">

					<div style="width: 100%;">
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
					
					<div class="row" id="supplier_div">
							<div class="col-md-12 ">
								<div class="row">
									<div class="col-md-12">
										<p>Thank you for join with us. <br> Please check your email for one-time credentials and login to continue.</p>
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
			
				<div class="row">
				
				<div class="col-4">
				
				</div>
				
				<!-- <div class="col-4">
				<div class="login-box-body">
						<p class="login-box-msg">Welcome to Service Partner Portal</p>

						<form action="" method="post" class="form-element">
							<div class="form-group has-feedback">
								<input type="text" id="user_id" class="form-control"
									placeholder="UserID"> <span
									class="ion ion-email form-control-feedback"></span>
							</div>
							<div class="form-group has-feedback">
								<input type="password" id="user_password" class="form-control"
									placeholder="Password"> <span
									class="ion ion-locked form-control-feedback"></span>
							</div>
							<div class="row">

								/.col
								<div class="col-12">
									<div class="fog-pwd">
										<a href="javascript:void(0)" onclick="viewReset()"
											style="color: blue"><i class="ion ion-locked"></i> Forgot
											password?</a><br>
									</div>
								</div>
								/.col
								<div class="col-12 text-center">
									<button type="button" id="login_btn"
										class="btn bg-olive btn-block btn-flat margin-top-10">SIGN
										IN</button>
								</div>

							</div>
						</form>


					</div>
				
				</div> -->
				
				<div class="col-4">
				
				</div>
				
				
				
				</div>
				

					

				</div>



			</div>
		</div>
	</div>
	
	
	<div id="fristLoginDiv"
		class="modal fade bd-example-modal-lg" role="dialog"
		data-toggle="modal" data-backdrop="static" data-keyboard="false">
		<div class="modal-dialog modal-lg" style="max-width: 90%">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">

					<div style="width: 100%;">
						<div class="row">
							
							<div class="col-md-12">
								<div class="row">
									<div class="col-md-12">
										<h1 class="modal-title" id="mdl_com_name">BidPro
											Registration is success</h1>
									</div>
								</div>
								
							</div>

						</div>
					</div>

				</div>

				<div class="modal-body">
					<div style="height: 100%">
					
					<div class="row" id="supplier_div">
							<div class="col-md-12 ">
								<div class="row">
									<div class="col-md-12">
										<p>Thank you for join with us. Please change your password at first login</p>
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
			
				<div class="row">
				
				<div class="col-4">
				
				</div>
				
				<div class="col-4">
				<div class="login-box-body">
						<p class="login-box-msg">Change Password</p>

						<form action="" method="post" class="form-element">
							<div class="form-group has-feedback">
								<input type="password" id="current_password" class="form-control"
									placeholder="Current Password"> <span
									class="ion ion-locked form-control-feedback"></span>
							</div>
							<div class="form-group has-feedback">
								<input type="password" id="ch_password1" class="form-control"
									placeholder="New Password"> <span
									class="ion ion-locked form-control-feedback"></span>
							</div>
							<div class="form-group has-feedback">
								<input type="password" id="ch_password3" class="form-control"
									placeholder="Confrim Password"> <span
									class="ion ion-locked form-control-feedback"></span>
							</div>
							<div class="row">

								<!-- /.col -->
								<div class="col-12">
									<!-- <div class="fog-pwd">
										<a href="javascript:void(0)" onclick="viewReset()"
											style="color: blue"><i class="ion ion-locked"></i> Forgot
											password?</a><br>
									</div> -->
								</div>
								<!-- /.col -->
								<div class="col-12 text-center">
									<button type="button" id="login_btn"
										class="btn bg-olive btn-block btn-flat margin-top-10">Change Password</button>
								</div>

							</div>
						</form>


					</div>
				
				</div>
				
				<div class="col-4">
				
				</div>
				
				
				
				</div>
				

					

				</div>



			</div>
		</div>
	</div>



	<!-- jQuery 3 -->
	<script
		src="resources/assets/vendor_components/jquery/dist/jquery.min.js"></script>

	<!-- popper -->
	<script
		src="resources/assets/vendor_components/popper/dist/popper.min.js"></script>

	<!-- Bootstrap v4.0.0-beta -->
	<script
		src="resources/assets/vendor_components/bootstrap/dist/js/bootstrap.min.js"></script>

	<script src="resources/js/plugins/base64/jquery.base64.min.js"></script>
	<script src="resources/js/customjs/guest/registration.js"></script>
	<script src="resources/js/plugins/sweetalert2@8.js"></script>
	<!-- bootstrap datepicker -->
	<script
		src="resources/assets/vendor_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
	<!-- Select2 -->
	<script
		src="resources/assets/vendor_components/select2/dist/js/select2.full.js"></script>
</body>

</html>
