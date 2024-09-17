<div class="col-xl-12 col-lg-8 animated fadeInLeft">

	<!-- <div class="box box-info" id ="section1">
		<div class="box-header with-border">
			<h3 class="box-title">User Authorization</h3>
		</div>
		<div class="">
			<h5 class="text-green"></h5>
		</div>
		<div class="row">

			<div class="col-md-6">
				<div class="box-body">
					<fieldset>


						<div style="margin-top: 40px" class="form-group row">
							<label for="userID" class="col-sm-2 control-label">User
								ID *</label>

							
							<div class="col-sm-6">
								<select class="form-control m-b" name="rolecode"
										id="user_ID" required="required">
									</select>
							</div>
						
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
									<input type="checkbox" id="acceptTerms" name="acceptTerms"
										value="Yes"> <label for="acceptTerms">Show All
										Users</label>
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
	<div class="box box-info animated fadeInDownBig"  id="userTableDiv">
		<div class="box-header with-border">
			<h3 class="box-title">Users to be Authorize</h3>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id=userTable
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr>
								<!-- <th></th> -->
								<th>User Id</th>
								<th>Name</th>
								<th>Company Code</th>
								<th>Role</th>
								<th>Create Date</th>
								<th>Status</th>
								<!-- <th>Reason</th> -->
								<th>Action</th>
							</tr>
						</thead>

					</table>
					<!-- <button type="button" id="AuthorizeButton" class="btn bg-olive">Authorize</button> -->
				</div>
			</div>
		</div>

	</div>
	
	<div class="box box-info animated fadeInDownBig"  id="userEditTableDiv">
		<div class="box-header with-border">
			<h3 class="box-title">Updated users to be Authorize</h3>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="userEditTable"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr class="text-yellow">
								<!-- <th>Picture</th> -->
								<th>User ID</th>								
								<th>Display name</th>
								<th>NIC</th>
								<th>Email</th>
								<th>User Role</th>
								<th>Department name</th>
								<th>Mobile Number</th>
								<th>Expire Date</th>
								<th>Action</th>
								<!-- <th>More</th> -->
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
</div>


<div id="submit_rfp_comment" class="modal fade bd-example-modal-lg"
	role="dialog">
	<div class="modal-dialog modal-lg">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<div style="width: 100%;">
					<div class="row">
						<div class="col-md-2">
							<!-- <button type="button" class="close pull-left"
								data-dismiss="modal">&times;</button> -->
						</div>
						<div class="col-md-10">
							<div class="row">
								<div class="col-md-12">
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Add a comment</h1>
								</div>
							</div>
							<!-- <div class="row">
								<div class="col-md-12">
									<p class="pull-right" style="margin-bottom: 0"
										id="mdl_ii_contract_no">0000000</p>
									<p class="pull-right" style="margin-bottom: 0">Contract No
										-</p>
								</div>
							</div> -->
						</div>

					</div>
				</div>
			</div>
			<div class="modal-body">
				<div style="height: 100%">
					<div class="row">
						<!-- 	 <div class="col-md-4">
      	
      	 </div> -->
						<div class="col-md-12">
							<fieldset>
								<div class="box-body">

									<!-- text field -->
									<!-- <div class="box-body"> -->
										<div class="row">
											<div class="col-md-6">
														<div class="form-group row">
															<label for="inputPassword3" class="col-sm-4 control-label">
																Company code </label>
															<div class="col-sm-10" id="rfpNumberDiv">
																<!-- <input id="rfp_description" name="rfp_description"
																	type="text" class="form-control" required="required"
																	> -->
																	<!-- <textarea id="rfpComment" class="form-control" rows="2" ></textarea> -->
															</div>
														</div>
											</div>
											
											<div class="col-md-6">
														<div class="form-group row">
															<label for="inputPassword3" class="col-sm-4 control-label">
																<br>User Name </label>
															<div class="col-sm-10" id="rfpFileNameDiv">
																<!-- <input id="rfp_description" name="rfp_description"
																	type="text" class="form-control" required="required"
																	> -->
																	<!-- <textarea id="rfpComment" class="form-control" rows="2" ></textarea> -->
															</div>
														</div>
											</div>
										</div>
										<div class="row">
										
											<div class="col-md-12">
														<div class="form-group row">
															<label for="inputPassword3" class="col-sm-4 control-label">
																Comment </label>
															<div class="col-sm-10" id="rfpcommentDiv">
																<!-- <input id="rfp_description" name="rfp_description"
																	type="text" class="form-control" required="required"
																	> -->
																	<!-- <textarea id="rfpComment" class="form-control" rows="2" ></textarea> -->
															</div>
														</div>
											</div>
										</div>
										
												<br />
							
							
							
											<!-- </div> -->
									
									<div id="appendData"></div>

								</div>

								<div class="form-group row">
									<!-- <label for="inputPassword3" class="col-sm-6 control-label">
										Details</label>
									<img src="" alt="Smiley face" height="680" width="680"
									style="padding:10px" id = "imgLocation"> -->
								</div>

							</fieldset>

						</div>


						<!-- <div class="col-md-2">
							<div style="margin: 5px; opacity: 0.1; text-align: center;">
								<i class="fa fa-paper-plane"
									style="font-size: 50px; color: #e5e5e5"></i>
							</div>

						</div> -->
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button id="cancel_rfp_details" type="button"
					class="btn btn-default" data-dismiss="modal">Close</button>
				<!-- <button type="submit" id="submit_button"
					class="btn btn-info pull-right">Submit</button> -->
				
				<button type="button" id="authrizedUser" class="btn btn-primary pull-right" style="margin-right: 10px" >Authorize</button>
				<button type="button" id="rejectedUser" class="btn btn-danger pull-right" >Reject</button>
				
				<!-- <button type="button" id="acceptPartnership"
					class="btn bg-olive pull-right">Send</button> -->
			</div>
		</div>

	</div>
</div>

<div id="submit_update_auth" class="modal fade bd-example-modal-lg"
	role="dialog">
	<div class="modal-dialog modal-lg">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<div style="width: 100%;">
					<div class="row">
						<div class="col-md-2">
							<!-- <button type="button" class="close pull-left"
								data-dismiss="modal">&times;</button> -->
						</div>
						<div class="col-md-10">
							<div class="row">
								<div class="col-md-12">
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Add a Reason</h1>
								</div>
							</div>
							<!-- <div class="row">
								<div class="col-md-12">
									<p class="pull-right" style="margin-bottom: 0"
										id="mdl_ii_contract_no">0000000</p>
									<p class="pull-right" style="margin-bottom: 0">Contract No
										-</p>
								</div>
							</div> -->
						</div>

					</div>
				</div>
			</div>
			<div class="modal-body">
				<div style="height: 100%">
					<div class="row">
						<!-- 	 <div class="col-md-4">
      	
      	 </div> -->
						<div class="col-md-12">
							<fieldset>
								<div class="box-body">

									<!-- text field -->
									<!-- <div class="box-body"> -->
										<div class="row">
										
											<div class="col-md-6">
											<br>
														<div class="form-group row">
															<label for="inputPassword3" class="col-sm-4 control-label">
																User ID </label>
															<div class="col-sm-10" id="userIdDiv">
																
															</div>
														</div>
											</div>
											
											<div class="col-md-6">
														<div class="form-group row">
															<label for="inputPassword3" class="col-sm-4 control-label">
																<br>Display name </label>
															<div class="col-sm-10" id="displayNameDiv">
																
															</div>
														</div>
											</div>
										</div>
										<div class="row">
										
											<div class="col-md-12">
														<div class="form-group row">
															<label for="inputPassword3" class="col-sm-4 control-label">
																Reason for authorized or reject</label>
															<div class="col-sm-10" id="editUserAuthDiv">
																<!-- <input id="rfp_description" name="rfp_description"
																	type="text" class="form-control" required="required"
																	> -->
																	<!-- <textarea id="rfpComment" class="form-control" rows="2" ></textarea> -->
															</div>
														</div>
											</div>
										</div>
										
												<br />
							
							
							
											<!-- </div> -->
									
									<div id="appendDataUpdateAuth"></div>

								</div>

								<div class="form-group row">
									<!-- <label for="inputPassword3" class="col-sm-6 control-label">
										Details</label>
									<img src="" alt="Smiley face" height="680" width="680"
									style="padding:10px" id = "imgLocation"> -->
								</div>

							</fieldset>

						</div>


						<!-- <div class="col-md-2">
							<div style="margin: 5px; opacity: 0.1; text-align: center;">
								<i class="fa fa-paper-plane"
									style="font-size: 50px; color: #e5e5e5"></i>
							</div>

						</div> -->
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button id="cancel_rfp_details" type="button"
					class="btn btn-default" data-dismiss="modal">Close</button>
				<!-- <button type="submit" id="submit_button"
					class="btn btn-info pull-right">Submit</button> -->
				
				<button type="button" id="authrizedUserEdit" class="btn btn-primary pull-right" style="margin-right: 10px" >Authorize</button>
				<button type="button" id="rejectedUserEdit" class="btn btn-danger pull-right" >Reject</button>
				
				<!-- <button type="button" id="acceptPartnership"
					class="btn bg-olive pull-right">Send</button> -->
			</div>
		</div>

	</div>
</div>

<script type="text/javascript">
	$('#titleID').text("User Authorization");
	$('#bcumb').text("User");
</script>

<script>
 
 console.log("Redesign");
 var userTable;
 jQuery(document).ready(function($) {
 	$("#userTableDiv").hide();
 	$("#clickUserIDButton").hide();

 	

 	$('#acceptTerms').on('change', function() {
 		$('#userTableDiv').addClass("fadeInDownBig");
		$('#userTableDiv').removeClass("fadeOutUpBig");

 		

 		if ($(this).prop('checked') === true) {

 			if ($(this).attr('value') == "Yes") {

 				$("#userTableDiv").show();

 			}

 		} else {

 			$('#userTableDiv').removeClass("fadeInDownBig");
 			$('#userTableDiv').addClass("fadeOutUpBig");
 			//$('#userTableDiv').hide();
 			console.log("Hide Table Div Here")
 		}
 	});
 });
 
 
 </script>

<script src="resources/js/customjs/user/userauthorization2.js"></script>

 	<!-- <script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/dataTables.buttons.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.flash.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/jszip.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/pdfmake.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/vfs_fonts.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.html5.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.print.min.js"></script>
    
    <script src="https://gyrocode.github.io/jquery-datatables-checkboxes/1.2.6/js/dataTables.checkboxes.min.js"></script>
    <script src="https://cdn.datatables.net/select/1.3.1/js/dataTables.select.min.js"></script>


<script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.html5.min.js"></script>
<script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.print.min.js"></script> -->