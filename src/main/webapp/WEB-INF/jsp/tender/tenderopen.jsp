<!-- 
 <div class="box-body">
	<div class="row animated fadeInLeftBig">
		<div class="col col-md-12">
			<div class="box">
				<div class="box-header with-border">
					<h3 class="box-title text-aqua">Tender Open</h3>
				</div>
				<div class="row">
-->

<div class="col-xl-12 col-lg-8 animated fadeInLeftBig">

		<div class="">
			<h5 class="text-green"></h5>
		</div>
		<div class="row">

		</div>
</div> 



	<div class="box box-info animated fadeInLeft" id="userTableDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle text-green">Tender Open</h4>
		</div>
		
					<div class="row">
						<div class="col-md-12">
							<div class="box-body">
								<table id="tender_open"
									class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
									cellspacing="0" width="100%">
									<thead>
										<tr class="text-yellow">
											<th>Tender Number</th>
											<th>Tender Name</th>
											<th>Description</th>
											<th>Eligible Category</th>
											<th>Sub Category</th>
											<th>Product Category</th>
											<th>Status</th>
											<th>More</th>
										</tr>
									</thead>
									<tbody>

									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>



<!-- Modal for eligible suppliers-->
 
<div id="my_Modal" class="modal fade" role="dialog">
   <div class="modal-dialog modal-lg" style="max-width: 42%">
 
		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<h4 class="modal-title">Eligible Suppliers</h4>
			</div>

			<div class="modal-body">

				<div style="height: 100%">
					<div class="row">
						<div style="height: 100%">
							<div class="row">

								<div class="col-md-12">
									<div class="box-body">
										<table id="eligible_sup_1"
											class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
											cellspacing="0" width="100%">
											<thead>
												<tr class="text-yellow">
													<th>Supplier Code</th>
													<th>Supplier Name</th>
													<th>Supplier Email</th>
										    <!--    <th>Action</th>
										     -->
									   
												</tr>
											</thead>
											<tbody>

											</tbody>
										</table>

										<br>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>


	 		<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
				<button type="button" id="invite_all_btn" class="btn bg-olive pull-right">Invite All</button>
			</div>
    
		</div>
	</div>
</div>
	<div id="mdl_issue_invoice" class="modal fade bd-example-modal-lg"
		role="dialog">
		<div class="modal-dialog modal-lg">


			<div class="modal-content" >
				<div class="modal-header">
					<div style="width: 100%">
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
											id="mdl_ii_bid_no">0000000</p>
										<p class="pull-right" style="margin-bottom: 0">Tender No -</p>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div class="modal-body">
					<div style="height: 100%">
						<div class="row">

							<div class="col-md-12">
								<fieldset>
									<div class="form-group row">
										<label for="inputPassword3" class="col-sm-6 control-label">
											Details</label> <img src="" alt="Smiley face" height="680"
											width="680" style="padding: 10px" id="imgLocation">
									</div>
								</fieldset>

							</div>
							<div class="col-md-2">
								<div style="margin: 5px; opacity: 0.1; text-align: center;">
									<i class="fa fa-paper-plane"
										style="font-size: 50px; color: #e5e5e5"></i>
								</div>

							</div>
						</div>
					</div>
				</div>

			</div>

		</div>
	</div>



	<script type="text/javascript">
	$('#titleID').text("Tender Open");
	$('#bcumb').text("Tender Open");
</script>
	<script src="resources/js/customjs/tender/tenderopen.js"></script>


	<!-- <script
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
	<script src="resources/js/pages/data-table.js"></script> -->