<div class="col-xl-12 col-lg-8 animated fadeInLeft">

	<div class="box box-info" id="userSearch_div">
		<div class="box-header with-border">
			<h3 class="box-title">Password Reset</h3>
		</div>
		<div class="">
			<h5 class="text-green"></h5>
		</div>
		<div class="row">

			<div class="col-md-8">
				<div class="box-body">
					<fieldset>


						<div style="margin-top: 40px" class="form-group row">
							<label for="userID" class="col-sm-2 control-label">User
								ID *</label>

							<div class="col-sm-6">
								<input type="text" class="form-control" id="userid"
									name="userid" placeholder="User ID" autocomplete="off">


							</div>
							<button type="submit" id="searchUserIDButton"
								class="btn btn-info pull-right">SEARCH</button>
						</div>
					</fieldset>
				</div>
			</div>



			<div class="col-md-4">
				<div style="margin: 15px">
					<i class="fa fa-user-circle"
						style="font-size: 180px; color: #e5e5e5"></i>
				</div>

			</div>
		</div>
	</div>

<div class="box box-info"   id="section2">
		<div class="box-header with-border">
			<h3 class="box-title">User Information</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="row">
			<div class="col-md-8">				
				<form class="form-horizontal form-element">
					<div class="box-body">
						<fieldset>
						<h5 class="text-green"></h5>
							<div class="form-group row">
								<label for="userID" class="col-sm-2 control-label">User
									ID <span style="color: red">*</span></label>

								<div class="col-sm-10">
									<input type="email" class="form-control" id="useridtemp"
										placeholder="User ID" autocomplete="off" readonly="readonly">
								</div>
							</div>
							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-2 control-label">User
									Role </label>
								
								
								<div class="col-sm-10">
									<input type="email" class="form-control" id="user_role_name"
										placeholder="User Role" autocomplete="off" name="user_role_name" readonly="readonly">
								</div>
								
							</div>
						
											
						</fieldset>
						<fieldset>
							<h5 class="text-aqua">Personal Information</h5>
							<div class="form-group row">
								<label for="NIC" class="col-sm-2 control-label">NIC </label>

								<div class="col-sm-10">
									<input id="nicno" pattern="^T[0-3]\d[0-1]\d{10}$"
										placeholder="NIC" name="NIC_no" type="text"
										class="form-control" readonly="readonly">
								</div>
							</div>
							<div class="form-group row">
								<label for="Name" class="col-sm-2 control-label">Name </label>

								<div class="col-sm-10">
									<input id="first_name"
											placeholder="Display Name" name="first_name" type="text"
											class="form-control" readonly="readonly">
								</div>
							</div>

						</fieldset>
						<fieldset>
							<h5 class="text-light-blue">Contact Information</h5>
							<div class="form-group row">
								<label for="NIC" class="col-sm-2 control-label">Phone</label>

								<div class="col-sm-10">
									<input id="mobile_no"
											placeholder="Phone number" name="mobile_no" type="text"
											class="form-control" readonly="readonly">
								</div>
							</div>
							<div class="form-group row">
								<label for="Name" class="col-sm-2 control-label">Email</label>

								<div class="col-sm-10">
									<input id="user_email"
											placeholder="Email" name="user_email" type="email"
											class="form-control" readonly="readonly"> <span
											class="">Confirmation email will be send to this
											address with temporary login credential</span>
								</div>
							</div>
						</fieldset>
					
					

					</div>
					<!-- /.box-body -->
				</form>
				<div class="box-footer">
					<button type="submit" id="cancelbtn" class="btn btn-warning">Cancel</button>
					<button type="button" id="passwordrestbtn" class="btn btn-info pull-right">RESET
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

<script type="text/javascript">

	$('#titleID').text("User Password Reset");
	$('#bcumb').text("User");




</script>

 <script src="resources/js/customjs/user/userpasswordrest.js"></script>
 
