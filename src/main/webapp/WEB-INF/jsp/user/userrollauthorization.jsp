

<div class="col-xl-12 col-lg-8 animated fadeInLeft">

	<div class="box box-info">
		<div class="box-header with-border">
			<h4 class="card-subtitle">User Roll Authorization</h4>
		</div>
		<div class="">
			<h5 class="text-green"></h5>
		</div>
		<div class="row">

			<div class="col-md-6">
				<div class="box-body">
					<fieldset>


						<div style="margin-top: 40px" class="form-group row">
							<label for="rolecode" class="col-sm-4 control-label">Role
								ID*</label>

							<div class="col-sm-6">
								<select class="form-control m-b" name="rolecode"
										id="rolecode" required="required">
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
										value="Yes"> <label for="acceptTerms">Show All</label>
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
	<div class="box box-info animated fadeInDownBig" id="userRoleDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle">User Roll Authorization</h4>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="roleTable"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr>
								<th></th>
								<th>Role Code</th>
								<th>Name</th>
								<th>Description</th>
								<th>Status</th>
								<th>Creator ID</th>
								<th>Create Date</th>
								<th>Reason</th>
								<th>Action</th>
							</tr>
						</thead>
				
					</table>
					<div>
					
						<button type="button" id="AuthorizeButton" class="btn bg-olive">Authorize</button>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>




<script type="text/javascript">
	$('#titleID').text("User Roll Authorization");
	$('#bcumb').text("User");
</script>


<script>
 
 console.log("Redesign");
 var userTable;
 jQuery(document).ready(function($) {
 	$("#userRoleDiv").hide();
 	$("#clickUserIDButton").hide();

 	

 	$('#acceptTerms').on('change', function() {
 		$('#userRoleDiv').addClass("fadeInDownBig");
		$('#userTableDiv').removeClass("fadeOutUpBig");

 		

 		if ($(this).prop('checked') === true) {

 			if ($(this).attr('value') == "Yes") {

 				$("#userRoleDiv").show();

 			}

 		} else {

 			$('#userRoleDiv').removeClass("fadeInDownBig");
 			$('#userRoleDiv').addClass("fadeOutUpBig");
 			//$('#userTableDiv').hide();
 			console.log("Hide Table Div Here")
 		}
 	});
 });
 
 
 </script>

<script src="resources/js/customjs/user/userrollauthorization.js"></script>

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