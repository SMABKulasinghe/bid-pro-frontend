<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Create User Redesign</h3>
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
									ID *</label>

								<div class="col-sm-10">
									<input type="email" class="form-control" id="user_id"
										placeholder="User ID" autocomplete="off">
								</div>
							</div>
							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-2 control-label">User
									Role *</label>
								<div class="col-sm-10">
									<select class="form-control m-b" name="user_role_name"
										id="user_role_name" required="required">
										<option value='empty'>RoleName 1</option>
										<option value='empty'>RoleName 2</option>
										<option value='empty'>RoleName 3</option>
									</select>
								</div>
							</div>
						
												
						</fieldset>
						<fieldset>
							<h5 class="text-aqua">Personal Information</h5>
							<div class="form-group row">
								<label for="NIC" class="col-sm-2 control-label">NIC *</label>

								<div class="col-sm-10">
									<input id="NIC_no" pattern="^T[0-3]\d[0-1]\d{10}$"
										placeholder="NIC" name="NIC_no" type="text"
										class="form-control" required="required">
								</div>
							</div>
							<div class="form-group row">
								<label for="Name" class="col-sm-2 control-label">Name *</label>

								<div class="col-sm-10">
									<input id="first_name"
											placeholder="Display Name" name="first_name" type="text"
											class="form-control" required="required">
								</div>
							</div>

						</fieldset>
						<fieldset>
							<h5 class="text-light-blue">Contact Information</h5>
							<div class="form-group row">
								<label for="NIC" class="col-sm-2 control-label">Phone *</label>

								<div class="col-sm-10">
									<input id="mobile_no"
											placeholder="Phone number" name="mobile_no" type="number"
											class="form-control" required="required">
								</div>
							</div>
							<div class="form-group row">
								<label for="Name" class="col-sm-2 control-label">Email *</label>

								<div class="col-sm-10">
									<input id="user_email"
											placeholder="Email" name="user_email" type="email"
											class="form-control" required="required"> <span
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
					<button type="button" id="create_user_button" class="btn btn-info pull-right">CONFIRM
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

	$('#titleID').text("User Redesign");
	$('#bcumb').text("User");




</script>

 <script src="resources/js/customjs/user/usercreationredesign.js"></script>