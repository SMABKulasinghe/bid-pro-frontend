<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Create User</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="row">
			<div class="col-md-8">				
				<form class="form-horizontal form-element">
					<div class="box-body">
						<fieldset>
						<h5 class="text-green">User Information</h5>
							<div class="form-group row">
								<label for="userID" class="col-sm-2 control-label">User
									ID <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input type="email" class="form-control" id="user_id_z"
										placeholder="User ID" autocomplete="off">
								</div>
							</div>
							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-2 control-label">User
									Role <span
							style="color: red">*</span></label>
								<div class="col-sm-10">
									<select class="form-control m-b" name="user_role_name"
										id="user_role_name" required="required">
										
									</select>
								</div>
							</div>
											
						</fieldset>
						
						<fieldset>
							<h5 class="text-aqua">Location & Department</h5>
							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-2 control-label">Location Code
									 <span
							style="color: red">*</span></label>
								<div class="col-sm-10">
									<select class="form-control m-b" name="location_code"
										id="location_code" required="required">
										
									</select>
								</div>
							</div>
							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-2 control-label">Department Code
									 <span
							style="color: red">*</span></label>
								<div class="col-sm-10">
									<select class="form-control m-b" name="department_code"
										id="department_code" required="required">
										
									</select>
								</div>
							</div>
						</fieldset>
						
						<fieldset>
							<h5 class="text-aqua">Personal Information</h5>
							<div class="form-group row">
								<label for="NIC" class="col-sm-2 control-label">NIC <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="NIC_no" pattern="^T[0-3]\d[0-1]\d{10}$"
										placeholder="NIC" name="NIC_no" type="text"
										class="form-control" required="required" autocomplete="off">
								</div>
							</div>
							<div class="form-group row">
								<label for="Name" class="col-sm-2 control-label">Name <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="first_name"
											placeholder="Display Name" name="first_name" type="text"
											class="form-control" required="required" autocomplete="off">
								</div>
							</div>

						</fieldset>
						<fieldset>
							<h5 class="text-light-blue">Contact Information</h5>
							<div class="form-group row">
								<label for="NIC" class="col-sm-2 control-label">Phone <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="mobile_no"
											placeholder="Phone number" name="mobile_no" type="number"
											class="form-control" required="required">
								</div>
							</div>
							<div class="form-group row">
								<label for="Name" class="col-sm-2 control-label">Email <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="user_email"
											placeholder="Email" name="user_email" type="email"
											class="form-control" required="required" autocomplete="off"> <span
											class="">Confirmation email will be send to this
											address with temporary login credential</span>
								</div>
							</div>
						</fieldset>
						<fieldset>
							<h5 class="text-light-blue">User Validity Duration</h5>
							<div class="form-group row">
								<label for="NIC" class="col-sm-2 control-label">Creation
									Date </label>

								<div class="col-sm-10">
									<input type="text" id="Date_start" class="form-control"
										disabled="disabled">
										<span class="help-block m-b-none">Shows user creation
									date</span>
								</div>
								
							</div>
							<div class="form-group row">
								<label for="Name" class="col-sm-2 control-label">Expiration
									Date*</label>
								<div class="col-sm-10">
									<div class="input-group date">
										<div class="input-group-addon">
											<i class="fa fa-calendar"></i>
										</div>
										<input type="text" class="form-control pull-right"
											id="Date_end" autocomplete="off">
									</div>
									<span class="help-block m-b-none">Shows user expiration
										date</span>
								</div>
								<!-- <div class="col-sm-10 input-group date">
									<input type="text" id="Date_end" class="form-control">
									<span class="help-block m-b-none">Shows user expiration
										date</span>
								</div> -->
							</div>
						</fieldset>
						<fieldset>
									<h5 class="text-yellow">Please Confirm the User
										Creation</h5>
									<input id="acceptTerms" name="acceptTerms" type="checkbox"
										class=""> <label for="acceptTerms">Confirm
										user creation</label> <br>
						</fieldset>

					</div>
					<!-- /.box-body -->
				</form>
				<div class="box-footer">
					<button type="submit" class="btn btn-default">Cancel</button>
					<button type="button" id="create_user_button" class="btn btn-info pull-right">Submit
						</button>
				</div>
				<!-- /.box-footer -->
			</div>
			<div class="col-md-4">
				<div style="margin: 100px">
					<i class="fa fa-user-circle"
						style="font-size: 180px; color: #e5e5e5"></i>
				</div>

			</div>
		</div>
	</div>
</div>

<script>
        $(document).ready(function(){
        	var date = new Date();
			date.setDate(date.getDate());			
        	
			//Date picker
			    $('#Date_end').datepicker({
			    	todayBtn : "linked",
					keyboardNavigation : false,
					forceParse : false,
					calendarWeeks : false,
					autoclose : true,
					todayHighlight : true
			    });

			
             });
        
        
     </script>    

<script type="text/javascript">

	$('#titleID').text("User Creation");
	$('#bcumb').text("User");




</script>

 <script src="resources/js/customjs/user/usercreationredesign.js"></script>
 <%-- <script src="<c:url value="/resources/js/customjs/user/usercreationredesign.js" />"></script> --%>

<!-- 

<div class="col-xl-12 col-lg-12">
	general form elements
	<div class="box box-primary">
		<div class="box-header with-border">
			<h3 class="box-title">Create User</h3>
		</div>
		/.box-header
		form start
		<div class="row">
			<div class="col-md-8">
				<form role="form" class="form-element">
					<h5 class="text-green">User Information</h5>
					<div class="box-body">
						<div class="form-group">
							<label for="exampleInputEmail1">Email address</label> <input
								type="email" class="form-control" id="exampleInputEmail1"
								placeholder="Enter email">
						</div>

					</div>
				</form>
			</div>
			<div class="col-md-4">
			<div style="margin: 100px">
							<i class="fa fa-user-circle"
								style="font-size: 180px; color: #e5e5e5"></i>
						</div>
			 
			</div>
			
		</div>
	</div>
</div>






<div class="row animated fadeInLeftBig">
	<div class='col-md-12 grid-margin stretch-card'>
		<div class="card">
			<div class="card-body">
				<div class="row">
					<div class="col-md-8">
						<h4 class="card-title">Create User</h4>
						<p class="card-description">Basic form layout</p>
						<h5 class="card-description">User Information</h5>

						<fieldset>
							<form class="forms-sample">
								<div class="form-group">
									<label for="userID">UserID *</label> <input id="user_id"
										name="user_id" placeholder="User ID" type="text"
										class="form-control" required="required"><span
										class="help-block m-b-none">Must be unique and used to
										login</span>
								</div>
								<div class="form-group">
									<label for="UserRole">UserRole *</label> <select
										class="form-control m-b" name="user_role_name"
										id="user_role_name" required="required">
										<option value='empty'>-- Select User Role --</option>
										<option value='empty'>RoleName</option>
									</select>
								</div>
								<div class="form-group" id='company_div'>
									<label for="userID">Company *</label> <select
										class="form-control m-b" name="company_code" id="company_code"
										required="required">
										<option value="empty">-- Select Company Code --</option>
									</select><span class="help-block m-b-none">Select Company</span>
								</div>
								<div class="form-group" id='supplier_div'>
									<label>Supplier *</label> <select class="form-control m-b"
										id="supplier_code" required="required">
										<option value="empty">-- Select Supplier Code --</option>
									</select>
								</div>

								<br>
								<fieldset>
									<h5 class="card-description">Personal Information</h5>
									<div class="form-group">
										<label>NIC *</label> <input id="NIC_no"
											pattern="^T[0-3]\d[0-1]\d{10}$" placeholder="NIC"
											name="NIC_no" type="text" class="form-control"
											required="required">
									</div>
									<div class="form-group">
										<label>Name *</label> <input id="first_name"
											placeholder="Display Name" name="first_name" type="text"
											class="form-control" required="required">
									</div>
								</fieldset>
								<br>
								<fieldset>
									<h5 class="card-description">Contact Information</h5>


									<div class="form-group">
										<label>Phone *</label> <input id="mobile_no"
											placeholder="Phone number" name="mobile_no" type="number"
											class="form-control" required="required">
									</div>
									<div class="form-group">
										<label>Email *</label> <input id="user_email"
											placeholder="Email" name="user_email" type="email"
											class="form-control" required="required"> <span
											class="">Confirmation email will be send to this
											address with temporary login credential</span>
									</div>



								</fieldset>
								<br>
								<div class="">
									<h5 class="card-description">Please Confirm the User
										Creation</h5>
									<input id="acceptTerms" name="acceptTerms" type="checkbox"
										class=""> <label for="acceptTerms">Confirm
										user creation</label> <br>
								</div>
								<button type="submit" class="btn btn-outline-primary btn-sm">Submit</button>
								<button class="btn btn-outline-light btn-sm">Cancel</button>
							</form>
						</fieldset>

					</div>
					<div class="col-md-4">
						<div style="margin: 100px">
							<i class="typcn typcn-user menu-icon"
								style="font-size: 180px; color: #e5e5e5"></i>
						</div>

					</div>
				</div>
			</div>

		</div>

	</div>
</div> -->