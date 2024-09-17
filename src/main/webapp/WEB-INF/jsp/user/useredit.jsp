<style>
.dt-body-nowrap {
   white-space: nowrap;
}
</style>

<div class="col-xl-12 col-lg-8 animated fadeInLeft">

	<!-- <div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Search User for Edit or See all Users</h3>
		</div>
		<div class="">
			<h5 class="text-green"></h5>
		</div>
		<div class="row">

			<div class="col-md-6">
				<div class="box-body">
					<fieldset>


						<div style="margin-top: 40px" class="form-group row">
							<label for="userID" class="col-sm-5 control-label">User NIC / Employee No *</label>

							<div class="col-sm-5">
								<input type="text" class="form-control" id="user_ID"
									name="user_ID" placeholder="User ID" autocomplete="off">


							</div>
							<button type="submit" id="searchUserIDButton"
								class="btn btn-info pull-right">SUBMIT</button>
						</div>
					</fieldset>
				</div>
			</div>

			<div class="col-md-1">
				<div class="box-body">
					<fieldset>

						<div style="margin-top: 40px" class="form-group row">


							<div class="col-sm-3">

								<div class="checkbox">
									<label for="" class="text-yellow">OR</label>
								</div>

							</div>

						</div>
					</fieldset>
				</div>

			</div>



			<div class="col-md-2">
				<div class="box-body">
					<fieldset>

						<div style="margin-top: 40px" class="form-group row">


							<div class="col-sm-12">

								<div class="checkbox">

									<input type="checkbox" id="acceptTerms" name="acceptTerms" value="Yes">
									<label for="acceptTerms">Show All Users.</label>
								</div>

							</div>

						</div>
					</fieldset>
				</div>

			</div>
			<div class="col-md-3">
				<div style="margin: 15px">
					<i class="fa fa-user-circle"
						style="font-size: 180px; color: #e5e5e5"></i>
				</div>

			</div>
		</div>
	</div> -->


	<!-- /.User List table -->
	<div class="box box-info" id="userTableDiv">
		<div class="box-header with-border">
			<h3 class="box-title">Search User for Edit & View All Users</h3>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="example"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr class="text-yellow">
								<!-- <th>Picture</th> -->
								<th>User ID</th>								
								<th>Display name</th>
								<th>NIC</th>
								<th>User Role</th>
								<th>Mobile Number</th>
								<th>Created Date</th>
								<th>Expire Date</th>
								<th>Action</th>
								<th>More</th>
							</tr>
						</thead>

						<tbody>
						</tbody>
					</table>
					<div>
						<!-- <button type="button" id="clickUserIDButton"
							class="btn btn-primary">Authorize</button> -->
					</div>
				</div>
			</div>

		</div>
	</div>
	
	
	<div class="box box-info"   id="userEdit_div">
		<div class="box-header with-border">
			<h3 class="box-title">Edit User Information</h3>
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

								<div class="col-sm-10" id="edit_user_id_div">
									<!-- <input type="text" class="form-control" id="user_id_z"
										placeholder="User ID" autocomplete="off"> -->
								</div>
							</div>
							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-2 control-label">User
									Role <span
							style="color: red">*</span></label>
								<div class="col-sm-10">
									<select class="form-control m-b" name="user_role_name"
										id="user_role_name" required="required" >
										
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

								<div class="col-sm-10" id="edit_nic_div">
									
								</div>
							</div>
							<div class="form-group row">
								<label for="Name" class="col-sm-2 control-label">Display Name <span
							style="color: red">*</span></label>

								<div class="col-sm-10" id="display_name_div">
									
								</div>
							</div>

						</fieldset>
						<fieldset>
							<h5 class="text-light-blue">Contact Information</h5>
							<div class="form-group row">
								<label for="NIC" class="col-sm-2 control-label">Phone <span
							style="color: red">*</span></label>

								<div class="col-sm-10" id="phone_number_div">
									
								</div>
							</div>
							<div class="form-group row">
								<label for="Name" class="col-sm-2 control-label">Email <span
							style="color: red">*</span></label>

								<div class="col-sm-10" id="email_div">
									
								</div>
							</div>
						</fieldset>
						<fieldset>
							<h5 class="text-light-blue">User Validity Duration</h5>
							<!-- <div class="form-group row">
								<label for="NIC" class="col-sm-2 control-label">Creation
									Date </label>

								<div class="col-sm-10" id="created_date_div">
									
								</div>
								
							</div> -->
							<div class="form-group row">
								<label for="Name" class="col-sm-2 control-label">Expiration
									Date*</label>
								<div class="col-sm-10">
									<div class="input-group date" id="expire_date_div">
										
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
						<div class="input-group date" id="company_code_div">
										
						</div>
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
					<button type="button" id="update_user_button" class="btn btn-info pull-right">Submit
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

	$('#titleID').text("Edit User");
	$('#bcumb').text("User");




</script>

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
        
     </script>    



	<script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/dataTables.buttons.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.flash.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/jszip.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/pdfmake.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/vfs_fonts.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.html5.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.print.min.js"></script>
    
    <script src="https://gyrocode.github.io/jquery-datatables-checkboxes/1.2.6/js/dataTables.checkboxes.min.js"></script>
    <script src="https://cdn.datatables.net/select/1.3.1/js/dataTables.select.min.js"></script>


<script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.html5.min.js"></script>
<script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.print.min.js"></script>
<!-- <script src="resources/js/pages/data-table.js"></script> -->

<!--  <script src="resources/js/customjs/contract/contractview.js"></script> -->
<!--  <script src="resources/js/customjs/asset/viewsoftwareasset.js"></script> -->

  <script src="resources/js/customjs/user/useredit.js"></script>
 
