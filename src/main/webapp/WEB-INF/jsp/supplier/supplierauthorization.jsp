 <div class="col-xl-12 col-lg-8 animated fadeInLeftBig">
		<div class="">
			<h5 class="text-green"></h5>
		</div>
		<div class="row"></div>
</div> 


	<!-- /.User List table -->
	<div class="box box-info animated fadeInLeft" id="userTableDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle text-green">Pending Authorization</h4>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="tbl_supplier_auth"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr class="text-yellow">
						    	<th>Index</th>  
								<th>Supplier Name</th>
								<th>Company Type</th> 
								<th>Registration Number</th>
								<th>Created Date & Time</th>
								<th>Contact No</th>
								<th>District</th>
								<th>Status</th>
								<th>Authorization</th>
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



<!-- Modal for category suppliers-->
<div id="my_Modal" class="modal fade bd-example-modal-lg" role="dialog">
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
							<!-- <div class="row">
								<div class="col-md-12">
									<h6 class="pull-right" style="margin-bottom: 0" id="grand_tot_h3"></h6><br/>
								</div>
							</div> -->
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
								<table id="category_sup"
									class="table table-bordered table-hover display nowrap margin-top-10 table-responsive">
									<thead>
										<tr class="text-yellow">
											<th>Index</th>
										    <th>Supplier Name</th>
										    <th>Sub Category</th>
											<th>Category</th>
											<!-- <th>Category Fee</th> -->
									<!--		<th>Grand Total (LKR)</th>  
									        <th>Sub Category</th>
											<th>Product</th>   -->
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


<!-- Modal for Approval Comment -->
<div id="auth_Modal" class="modal fade bd-example-modal-lg" role="dialog">
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
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Approval Comment</h1>
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
								<label for="comment">Comment <span style="color: red">*</span></label>
								<textarea id="comment_supauth" class="form-control" rows="3" ></textarea>
						 </div>
							</div>
						</div>
					</div>					
										
					
					
					<div id="paymentDiv">
						<div class="col-md-6">
							<div class="box-body">
								<label for="comment">Approval Completed Under the Condition <span style="color: red">*</span> </label>
								
									<div style="" class="form-group row">
										<div class="col-sm-8">
											<div class="radio">
												<input type="radio" id="with_pay" value="true" name="payment"> 
												<label for="with_pay">Invite to Pay</label>
											</div>
											<div class="hr-line-dashed"></div>
										</div>
												
										<div class="col-sm-8">
											<div class="radio">
												<input type="radio" id="without_pay" value="false" name="payment"> 
												<label for="without_pay">Without Payment</label>
											</div>													
											<div class="hr-line-dashed"></div>
										</div>																																	
								   </div>	
							
							
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Amount <span style="color: red">*</span> </label>
							<div class="col-sm-8">
								<input id="amount" autocomplete="off" name="amount" type="number" class="form-control" required="required">
							</div>
						</div>		
						   </div>
						</div>								
					</div>	
									
				</div>
				
				
				
				<div class="modal-footer"> <button type="button" style="margin : 5px" id="reject_button" class="btn btn-danger pull-right">Reject</button>&emsp;<strong></strong>
											<button type="button" style="margin : 5px" id="authorize_button" class="btn btn-primary pull-right" data-dismiss="modal">Authorize</button>  &nbsp; &nbsp;</div>
			</div> 
		</div>
</div> 


<script type="text/javascript">

	$('#titleID').text("Authorize Supplier");
	$('#bcumb').text("Authorize Supplier");

</script>

 <!-- <script src="resources/js/customjs/supplier/supplierauthorization.js"></script> -->
 <script src="resources/js/customjs/supplier/supplierauth.js"></script>
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