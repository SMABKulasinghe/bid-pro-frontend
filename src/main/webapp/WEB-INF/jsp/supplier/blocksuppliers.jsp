 <div class="col-xl-12 col-lg-8 animated fadeInLeftBig">
		<div class="">
			<h5 class="text-green"></h5>
		</div>
		<div class="row"></div>
</div> 

	<div class="box box-info animated fadeInLeft" id="blockTableDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle text-green">Block Suppliers</h4>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="tbl_supplier_block"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr class="text-yellow">
						    	<th>Index</th>  
								<th>Supplier Name</th>
								<th>Company Type</th> 
								<th>Registration Number</th>
								<!-- <th>Created Date & Time</th> -->
								<th>Contact No</th>
								<th>District</th>
								<th>City</th>
							    <th>Status</th> 
							    <th>Supplier Block</th>
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



<div id="mdl_block_sup" class="modal fade bd-example-modal-lg" role="dialog">
	<div class="modal-dialog modal-lg">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<div style="width: 100%;">
					<div class="row">
						<div class="col-md-2">
							<button type="button" class="close pull-left" data-dismiss="modal">&times;</button>
						</div>
						<div class="col-md-10">
							<div class="row">
								<div class="col-md-12">
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Issue Invoice</h1>
								</div>
							</div>
					<div class="row">
								<div class="col-md-12">
									<p class="pull-right" style="margin-bottom: 0" id="mdl_ii_contract_no">0000000</p>
									<p class="pull-right" style="margin-bottom: 0">Supplier Name - </p>
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
									<label for="inputPassword3" class="col-sm-6 control-label">Details</label>
									<img src="" alt="Smiley face" height="680" width="680" style="padding:10px" id = "imgLocation">
								</div>

							</fieldset>
							
						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn bg-olive pull-right" data-dismiss="modal">Close</button>
			</div>
		</div>

	</div>
</div>



<!-- Modal for Block category suppliers-->
<div id="block_Modal" class="modal fade bd-example-modal-lg" role="dialog">
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
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Registered Categories</h1><br>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<h6 style="display: flex; justify-content: flex-end; margin: 0;" id="category_fee"></h6><br/>
									<h6 style="display: flex; justify-content: flex-end; margin: 0;" id="subCargory_total"></h6><br/>
									<h6 style="display: flex; justify-content: flex-end; margin: 0;" id="onetime_fee"></h6><br/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="modal-body">
				<div class="media">
						<div class="col-md-12">
							<div class="box-body">
								<table id="block_category_sup"
									class="table table-bordered table-hover display nowrap margin-top-10 table-responsive">
									<thead>
										<tr class="text-yellow">
											<th>Index</th>
										    <th>Supplier Name</th>
											<th>Sub Category</th>
											<th>Category</th>
										</tr>
									</thead>
									<tbody>
									</tbody>
								</table>
							</div>
						</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn bg-olive pull-right" data-dismiss="modal">Close</button>
			</div>
	</div>
</div>
</div>



<!-- Modal for Block Supplier -->
<div id="ml_supplierBlock_Modal" class="modal fade bd-example-modal-lg" role="dialog">
		<div class="modal-dialog modal-lg">
		
			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
				    <div style="width: 100%;">
				       <div class="row">
				       
				       <div class="col-md-2">
							<button type="button" class="close pull-left" data-dismiss="modal">&times;</button>
						</div>
						
						<div class="col-md-10">
							<div class="row">
								<div class="col-md-12">
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Supplier Block</h1>
								</div>
							</div>
				       
				<div class="row">
						<div class="col-md-12">
							<p class="pull-right" style="margin-bottom: 0" id="mdl_ii_supplierName">SP4853</p>
							<p class="pull-right" style="margin-bottom: 0">Supplier Name - </p>
						</div>
				</div>
					   </div>
				  </div>  
			  </div>
		  </div>

				<div class="modal-body">
					<div class="media">
						<div class="col-md-10">
							<div class="box-body">
							<div class="form-group">
								<label for="reason">Reason <span style="color: red">*</span></label>
								<textarea id="reason_blocksupplier" class="form-control" rows="3" ></textarea>
						 </div>
							</div>
						</div>
					</div>					
				</div>
				
				
				<div class="modal-footer">
				<button id="cancel_rfp_details" style="margin : 5px" type="button" class="btn bg-olive pull-right" data-dismiss="modal">Close</button>
				<button type="button" style="margin : 5px" id="block_button" class="btn btn-primary pull-right" data-dismiss="modal">Block</button>&nbsp; &nbsp;</div>
			</div> 
		</div>
</div> 



<script type="text/javascript">
	$('#titleID').text("Block Suppliers");
	$('#bcumb').text("Block Suppliers");
</script>


 <script src="resources/js/customjs/supplier/blocksuppliers.js"></script>
<script src="resources/assets/vendor_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="resources/assets/vendor_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<script src="resources/assets/vendor_plugins/DataTables-1.10.15/media/js/jquery.dataTables.min.js"></script>
<script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/dataTables.buttons.min.js"></script>
<script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.flash.min.js"></script>
<script src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/jszip.min.js"></script>
<script src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/pdfmake.min.js"></script>
<script src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/vfs_fonts.js"></script>
<script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.html5.min.js"></script>
<script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.print.min.js"></script>
<script src="resources/js/pages/data-table.js"></script>