<style>
.dt-body-nowrap {
   white-space: nowrap;
}
</style>

<div class="col-xl-12 col-lg-8 animated fadeInLeft">

	<!-- <div class="box box-info">
		<div class="box-header with-border">
			<h4 class="card-subtitle">Contract Authorization</h4>
		</div>
		<div class="">
			<h5 class="text-green"></h5>
		</div>
		<div class="row">

			<div class="col-md-6">
				<div class="box-body">
					<fieldset>


						<div style="margin-top: 40px" class="form-group row">
							<label for="userID" class="col-sm-4 control-label">Contract No*</label>

							<div class="col-sm-6">
								<input type="text" class="form-control" id="user_ID"
									name="user_ID" placeholder="Contract ID" autocomplete="off">
							</div>
							<button type="button" id="searchUserIDButton"
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
									<label for="acceptTerms">Show All</label>
								</div>
							</div>
						</div>
					</fieldset>
				</div>

			</div>
			<div class="col-md-3">
				<div style="margin: 5px; opacity: 0.1">
					<i class="fa fa-handshake-o"
						style="font-size: 180px; color: #e5e5e5"></i>
				</div>
			</div>
		</div>
	</div> -->


	<!-- /.User List table -->
	<div class="box box-info animated fadeInDown" id="contractTableDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle">Contracts</h4>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="example"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr class="text-yellow">
								<th></th>								
								<th>Name</th>
								<th>Contract No</th>
								<th>Renewal Date</th>
								<th>Amount</th>
								<th>Created Date</th>
								<th>Category</th>
								<th>Reason</th>
								<th>Status</th>
								<th>Details</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>Sup001</td>
								<td>1245122</td>
								<td>Credit</td>
								<td>8119008115</td>
								<td>Commercial Bank</td>
								<td>Active</td>
							</tr>
						</tbody>
					</table>
					<!-- <div>
						<button type="button" id="AuthorizeButton"
							class="btn btn-primary">Authorize</button>
					</div> -->
				</div>
			</div>

		</div>
	</div>
</div>


<div id="mdl_issue_invoice" class="modal fade bd-example-modal-lg"
	role="dialog">
	<div class="modal-dialog modal-lg">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<div style="width: 100%;">
					<div class="row">
						<div class="col-md-2">
							<button type="button" class="close pull-left"
								data-dismiss="modal">&times;</button>
						</div>
						<div class="col-md-10">
							<div class="row">
								<div class="col-md-12">
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Issue
										Invoice</h1>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<p class="pull-right" style="margin-bottom: 0"
										id="mdl_ii_contract_no">0000000</p>
									<p class="pull-right" style="margin-bottom: 0">Contract No
										-</p>
								</div>
							</div>
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
								<div class="form-group row">
									<label for="inputPassword3" class="col-sm-6 control-label">
										Details</label>
									<img src="" alt="Smiley face" height="680" width="680"
									style="padding:10px" id = "imgLocation">
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
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button type="button" id="acceptPartnership"
					class="btn bg-olive pull-right">Send</button>
			</div>
		</div>

	</div>
</div>



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

 <script src="resources/js/customjs/contract/contractview.js"></script>
 
 
<script type="text/javascript">
	$('#titleID').text("View Contract Details");
	$('#bcumb').text("View Contract Details");
</script>
