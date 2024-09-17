<div class="col-xl-12 col-lg-8 animated fadeInLeft">

	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Search User Role Edit or See all User Roles</h3>
		</div>
		<div class="">
			<h5 class="text-green"></h5>
		</div>
		<div class="row">

			<div class="col-md-6">
				<div class="box-body">
					<fieldset>


						<div style="margin-top: 40px" class="form-group row">
							<label for="userID" class="col-sm-2 control-label">User Role Name *
						</label>

							<div class="col-sm-6">
								<input type="text" class="form-control" id="user_role_ID"
														name="user_role_ID" placeholder="User ID" autocomplete="off">


							</div>
							<button type="submit" id="searchUserroleIDButton"
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
									<label for="acceptTerms">Show All User Roles.</label>
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
	</div>


	<!-- /.User List table -->
	<div class="box box-info" id="userTableDiv">
		<div class="box-header with-border">
			<h3 class="box-title">Users Role List</h3>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="example"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr>
								<th>#</th>
								<th>User Role Name</th>
								<th>User Role Description</th>
								<th>Business Level</th>
								<th>Action</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>1</td>
								<td>Dialog Axista</td>
								<td>Credit</td>
								<td>8119008115</td>
								<td> <button type='button' onclick='loadUserForEdit()' id='edit' class='btn btn-primary'>Edit</button></td>
								
							</tr>
						</tbody>
					</table>
					<div>
						<button type="button" id="clickUserIDButton"
							class="btn btn-primary">Authorize</button>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>

<script type="text/javascript">

	$('#titleID').text("User Role Edit");
	$('#bcumb').text("User");




</script>

 <script src="resources/js/customjs/user/userroleedit.js"></script>



<script
	src="resources/assets/vendor_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script
	src="resources/assets/vendor_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/media/js/jquery.dataTables.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/dataTables.buttons.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.flash.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/jszip.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/pdfmake.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/vfs_fonts.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.html5.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.print.min.js"></script>
<script src="resources/js/pages/data-table.js"></script>