<style>
.dt-body-nowrap {
   white-space: nowrap;
}
</style>


<div class="col-md-12 col-lg-12 animated fadeInLeft">
	<div class="box box-default">
		<div class="box-header with-border">
			<!-- <h3 class="card-title">Provide Purchase Order Details</h3> -->
			<h6 class="card-subtitle">
				Please use one of the following methods
				<!-- <code>customtab</code> -->
			</h6>
		</div>
		<!-- /.box-header -->
		<div class="box-body">
			<!-- Nav tabs -->
			<ul class="nav nav-tabs customtab" role="tablist">
				<li class="nav-item"><a class="nav-link active"
					data-toggle="tab" href="#home2" role="tab"><span
						class="hidden-sm-up"><i class="ion-home"></i></span> <span
						class="hidden-xs-down">Manual Enter</span></a></li>
				<!-- <li class="nav-item"><a class="nav-link" data-toggle="tab"
					href="#profile2" role="tab"><span class="hidden-sm-up"><i
							class="ion-person"></i></span> <span class="hidden-xs-down">File
							Upload</span></a></li>
				<li class="nav-item"><a class="nav-link" data-toggle="tab"
					href="#messages2" role="tab"><span class="hidden-sm-up"><i
							class="ion-email"></i></span> <span class="hidden-xs-down">API</span></a></li> -->
			</ul>
			<!-- Tab panes -->
			<div class="tab-content">
				<div class="tab-pane active" id="home2" role="tabpanel">
					<div class="box box-info">
						<!-- <h5 class="">PO Details Manual Enter</h5> -->
						<div class="row">
							<div class="col-md-6">
								<fieldset>
									<h5 class="">Find Invoices to be paid for a Supplier</h5>

									<div class="form-group row">
										<label for="suppliers" class="col-sm-3 control-label">Supplier</label>
										<div class="col-sm-9">
											<select class="form-control m-b" name="suppliers"
												id="suppliers_payment" required="required">
											</select>
										</div>
									</div>
									
									<!-- <div class="col-sm-9 input-group date">
							<div class="input-group-addon">
		                    	<i class="fa fa-calendar"></i>
		                  	</div>
							<input type="text" class="form-control pull-right" id="reg_date1">
						</div> -->
									
								</fieldset>
								<fieldset id = "oldset">
									<h5 class="text-green">Enter Payment Details</h5>
									<div class="form-group row">
										<label for="inputPassword3" class="col-sm-3 control-label">Payment Type *</label>
										<div class="col-sm-9">
											<select class="form-control m-b" name="user_role_name"
												id="user_role_name" required="required">
												<option value='empty'>Cheque</option>
												<option value='empty'>Cash</option>
											</select>
										</div>
									</div>
									<div class="form-group row">
										<label for="inputPassword3" class="col-sm-3 control-label">Invoice No *</label>
										<div class="col-sm-9">
											<select class="form-control m-b" name="user_role_name"
												id="user_role_name" required="required">
												<option value='empty'>54832</option>
												<option value='empty'>69875</option>
											</select>
										</div>
									</div>
								
									<div class="form-group row">
										<label for="inputPassword3" class="col-sm-3 control-label">Invoice
											Amount *</label>
										<div class="col-sm-9">
											<input id="registration_no" name="registration_no"
												type="text" class="form-control" required="required">
										</div>
									</div>


								</fieldset>
								<fieldset class="col-md-12" id="oldset2">

									<h5 class="text-yellow">Please confirm the details</h5>
									<input id="acceptTerms" name="acceptTerms" type="checkbox"
										class=""> <label for="acceptTerms">I confirm
										that all information above is correct and accurate</label> <br>

									<div class="box-footer">
										<button type="submit" class="btn btn-default">Cancel</button>
										<button type="submit" class="btn btn-info pull-right">Submit
										</button>
									</div>
								</fieldset>

							</div>

							<div class="col-md-3">
								


							</div>
							<div class="col-md-3">
								<div style="margin: 20px; opacity: 0.1">
									<i class="fa fa-file-text-o"
										style="font-size: 150px; color: #e5e5e5"></i>
								</div>

							</div>

						</div>
					</div>
				</div>
				<div class="tab-pane pad" id="profile2" role="tabpanel">
					<div class="box box-info">
						<h4 class="">Upload Files here</h4>
						<div class="row">
							<div class="col-md-4" style="margin-top: 60px">
								<input type="file" id="POU_headerUp_input"
									class="btn btn-block btn-info btn-lg" name="file" />
							</div>
							<div class="col-md-4">
								
							</div>
							<div class="col-md-4">
							<div style="margin: 20px; opacity: 0.1">
									<i class="fa fa-upload"
										style="font-size: 150px; color: #e5e5e5"></i>
								</div>
								
							</div>
						</div>


					</div>
				</div>
				<div class="tab-pane pad" id="messages2" role="tabpanel">
					<div class="box box-info">
						<h4 class="">Connect with API</h4>
						<div class="row">
							<div class="col-md-4"  style="margin-top: 60px">
								<button type="button" id="create_user_button"
									class="btn btn-block btn-info btn-lg">Connect</button>
							</div>
							<div class="col-md-4">
								
							</div>
							<div class="col-md-4">
							<div style="margin: 20px; opacity: 0.1">
									<i class="fa fa-cloud-upload"
										style="font-size: 150px; color: #e5e5e5"></i>
								</div>
								
							</div>
						</div>


					</div>
				</div>
			</div>
			<!-- /.box-body -->
		</div>
		<!-- /.box -->
	</div>
	
	
	<div class="box box-info animated fadeInDownBig" id="userTableDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle">Approved Invoices to be Paid</h4>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="outstandingPaymentTbl"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr class="text-yellow">
								<th class="text-yellow"></th>								
								<th>Supplier Name</th>
								<th>Contract No</th>
								<th>Invoice Date</th>
								<th>Inv No</th>
								<th>Total</th>
								<th>BatchNo</th>
								<th>Location</th>
								<th>Tax</th>
								<th>Details</th>
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
<!-- /.col -->

<!-- Modal -->
<div id="myPaymentModal" class="modal fade bd-example-modal-lg" role="dialog">
	<div class="modal-dialog modal-lg ">
		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<!-- <button type="button" class="close" data-dismiss="modal">&times;</button> -->
				<h4 class="modal-title">Insert Payment Details</h4>
			</div>
			<div class="modal-body">
				<p class="card-description">Payment to be made</p>
				<div class="media">
					<!-- <img class="mr-3 w-25 rounded" src="resources/images/samples/300x300/13.jpg" alt="sample image"> -->
					<div class="media-body">
						<!-- <form class="form-inline">
							<input type="text" class="form-control mb-2 mr-sm-2"
								id="inlineFormInputName2" placeholder="P12502"
								readonly="readonly">
							<div class="input-group mb-2 mr-sm-2">
								<input type="text" class="form-control"
									id="inlineFormInputGroupUsername" placeholder="2012/08/03"
									readonly="readonly">
							</div>
							<div class="input-group mb-2 mr-sm-2">
								<input type="text" class="form-control"
									id="inlineFormInputGroupUsername2" placeholder="2,500.00"
									readonly="readonly">
							</div>
						</form> -->
						<div class="row">
							<div class="col-md-8">

								<fieldset>
									<form class="forms-sample">
										<div class="form-group">
											<label for="paymentDate">Payment Date *</label>
											<div class="col-sm-9 input-group date">
												<div class="input-group-addon">
													<i class="fa fa-calendar"></i>
												</div>
												<input type="text" class="form-control pull-right"
													autocomplete="off" id="reg_date1" required="required">
											</div>
										</div>
										<div class="form-group">
											<label for="amount">Cheque No *</label>
											<div class="col-sm-9 input-group date">
												<input id="ChequeNo" name="ChequeNo" placeholder="123456789"
													type="number" class="form-control" required="required"
													autocomplete="off"><span
													class="help-block m-b-none"></span>
											</div>
										</div>
										<div class="form-group">
											<label for="amount">Bank</label>
											<div class="col-sm-9 input-group date">
												<input id="bankName" name="bankname" placeholder="BOC"
													type="text" class="form-control" required="required"
													autocomplete="off"><span
													class="help-block m-b-none"></span>
											</div>
										</div>
										<div class="form-group">
											<label for="confirmedAmount">Amount *</label>
											<div class="col-sm-9 input-group date">
												<input id="amountPaid" name="amountPaid" placeholder="0.00"
													type="number" class="form-control" required="required"
													autocomplete="off"><span
													class="help-block m-b-none"></span>
											</div>
										</div>

										<br>

										<button type="submit" class="btn btn-outline-primary btn-sm" id="proceedToPayButton">Submit</button>
										<button type="button" class="btn btn-outline-light btn-sm"
											data-dismiss="modal">Cancel</button>
									</form>
								</fieldset>

							</div>

						</div>
					</div>
				</div>
			</div>
			<!-- <div class="modal-footer">
				<button type="button" class="btn pull-right btn-default"
					data-dismiss="modal">Close</button>
			</div> -->
		</div>

	</div>
</div>



<div id="mdl_invoice_details" class="modal fade bd-example-modal-lg" role="dialog">
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
      	 				<h1 class="modal-title pull-right" id="mdl_ar_com_name">Invoice Details</h1>
      	 			</div>
      	 		</div>
      	 		<div class="row">
      	 			<div class="col-md-12">
      	 				<p class="pull-right" style="margin-bottom: 0" id="mdl_ii_contract_no" >0000000</p>
      	 				<p class="pull-right" style="margin-bottom: 0" >Contract No -  </p>
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
								<div class="box-body">
									<table id="tbl_view_invoice_details"
										class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
										cellspacing="0" width="100%">
										<thead>
											<tr>
												<th>Item Code</th>
												<th>Unit Price</th>
												<th>Item Quantity</th>
												<th>Item Amount</th>
												<th>Service Charge</th>
												<th>Discount</th>
												<th>Value</th>
											</tr>
										</thead>
									</table>
								</div>
							</fieldset>
						</div>
					</div>
				</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
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


<script type="text/javascript">
	$('#titleID').text("Proceed Payment");
	$('#bcumb').text("Proceed Payment");
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

<script src="resources/js/customjs/payment/proceedPayments.js"></script>














