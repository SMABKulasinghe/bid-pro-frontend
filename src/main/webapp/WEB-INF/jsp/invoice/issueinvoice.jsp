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
		<div class="box-body" id="ii_tabs">
			<!-- Nav tabs -->
			<ul class="nav nav-tabs customtab" role="tablist">
				<li class="nav-item"><a class="nav-link active"
					data-toggle="tab" href="#home2" role="tab"><span
						class="hidden-sm-up"><i class="ion-home"></i></span> <span
						class="hidden-xs-down">Manual Enter</span></a></li>
				<li class="nav-item"><a class="nav-link" data-toggle="tab"
					href="#ii_upload" role="tab"><span class="hidden-sm-up"><i
							class="ion-person"></i></span> <span class="hidden-xs-down">File
							Upload</span></a></li>
				<li class="nav-item"><a class="nav-link" data-toggle="tab"
					href="#messages2" role="tab"><span class="hidden-sm-up"><i
							class="ion-email"></i></span> <span class="hidden-xs-down">API</span></a></li>
			</ul>
			<!-- Tab panes -->
			<div class="tab-content">
				<div class="tab-pane active" id="home2" role="tabpanel">
					<div class="box box-info">
						<!-- <h5 class="">PO Details Manual Enter</h5> -->
						<div class="row">
							<div class="col-md-6">
								<fieldset>
									<h5 class="text-green">Enter Invoice Details</h5>
									<div class="form-group row">
										<label for="slc_ii_company" class="col-sm-3 control-label">Select
											Company</label>
										<div class="col-sm-9">
											<select class="form-control m-b" name="user_role_name"
												id="slc_ii_company" required="required">
											</select>
										</div>
									</div>
									<div class="form-group row">
										<label for="slc_ii_type" class="col-sm-3 control-label">Select
											Type</label>
										<div class="col-sm-9">
											<select class="form-control m-b" name="user_role_name"
												id="slc_ii_type" required="required">
												<option value=''>Select</option>
												<option value='oneTime'>One Time</option>
												<option value='recurring'>Recurring</option>
											</select>
										</div>
									</div>

								</fieldset>
								
									<div class="box-footer">
										<button type="submit" id="btn_search" class="btn btn-blue pull-right">Search</button>
										
									</div>

							</div>

							<div class="col-md-6">
								<div style="margin: 20px; opacity: 0.1; text-align: center;">
									<i class="fa fa-file-text-o"
										style="font-size: 150px; color: #e5e5e5"></i>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div class="tab-pane active" id="ii_upload" role="tabpanel">
					<div class="box box-info">
						<div class="row">
							<div class="col-md-6">
								<fieldset>
									<h5 class="text-green">Upload Invoice Details</h5>
									<div class="form-group row">
										<label for="slc_ii_upload_company" class="col-sm-3 control-label">Select
											Company</label>
										<div class="col-sm-9">
											<select class="form-control m-b" name="user_role_upload_name"
												id="slc_ii_upload_company" required="required">
											</select>
										</div>
									</div>
									<div class="form-group row">
										<label for="slc_ii_type" class="col-sm-3 control-label">Select
											Type</label>
										<div class="col-sm-9">
											<select class="form-control m-b" name="user_role_name"
												id="slc_ii_upload_type" required="required">
												<option value=''>Select</option>
												<option value='oneTime'>One Time</option>
												<option value='recurring'>Recurring</option>
											</select>
										</div>
									</div>

								</fieldset>
								
									<div class="box-footer">
										<button type="submit" id="btn_upload_search" class="btn btn-blue pull-right">Search</button>
									</div>

							</div>

							<div class="col-md-6">
								<div style="margin: 20px; opacity: 0.1; text-align: center;">
									<i class="fa fa-file-text-o"
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
			<h6>
				* Please use the following button to download the accepted file format in order to upload your invoices.
			</h6>
			<h6>
				** Total Amount for the header file must be match with its content from details file.				
			</h6>
			<button type="submit" id="download_fileformats_btn" class="btn btn-info pull-left">Download File Format</button>
		</div>
		<!-- /.box -->
	</div>
</div>

<div class="col-md-12 col-lg-12 animated fadeInLeftBig" id="tbl_contract_invoice" style="display: none">
	<div class="box box-default">
		<div class="box-header with-border">
			<!-- <h3 class="card-title">Provide Purchase Order Details</h3> -->
			<h6 class="card-subtitle">
				Existing PO's
				<!-- <code>customtab</code> -->
			</h6>
		</div>
		<!-- /.box-header -->
		<div class="box-body">
			<!-- Nav tabs -->
			
			<!-- Tab panes -->
			<div class="tab-content">
				<div class="tab-pane active"  role="tabpanel">
					<div class="box box-info">
						<!-- <h5 class="">PO Details Manual Enter</h5> -->
						
						<div class="row">
							<div class="col-md-12">
								<fieldset>
									
									<div class="box-body">
										<table id="tbl_contracts"
											class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
											cellspacing="0" width="100%">
											<thead>
												<tr>
													<th>Contract No</th>
													<th>Description</th>
													<th>Category</th>
													<th>payment Type</th>
													<th>Amount</th>
													<th>Annual Payment Amount</th>
													<th>Process</th>
												</tr>
											</thead>
										</table>
									</div>
								</fieldset>
							</div>
						</div>
					</div>
				</div>
				
				
			</div>
			<!-- /.box-body -->
		</div>
		<!-- /.box -->
	</div>
</div>


<div class="col-md-12 col-lg-12 animated fadeInLeftBig" id="tbl_contract_invoice_manual" style="display: none">
	<div class="box box-default">
		<div class="box-header with-border">
			<!-- <h3 class="card-title">Provide Purchase Order Details</h3> -->
			<h6 class="card-subtitle">
				Existing Contracts
				<!-- <code>customtab</code> -->
			</h6>
		</div>
		<!-- /.box-header -->
		<div class="box-body">
			<!-- Nav tabs -->
			
			<!-- Tab panes -->
			<div class="tab-content">
				<div class="tab-pane active"  role="tabpanel">
					<div class="box box-info">
						<!-- <h5 class="">PO Details Manual Enter</h5> -->
						
						<div class="row">
							<div class="col-md-12">
								<fieldset>
									
									<div class="box-body">
										<table id="tbl_contracts_manual"
											class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
											cellspacing="0" width="100%">
											<thead>
												<tr>
													<th>Contract No</th>
													<th>Description</th>
													<th>Category</th>
													<th>payment Type</th>
													<th>Amount</th>
													<th>Annual Payment Amount</th>
													<th>Process</th>
												</tr>
											</thead>
										</table>
									</div>
								</fieldset>
							</div>
						</div>
					</div>
				</div>
				
				
			</div>
			<!-- /.box-body -->
		</div>
		<!-- /.box -->
	</div>
</div>

<div class="col-md-12 col-lg-12 animated fadeInLeftBig" id="tbl_contract_invoice_accepted" style="display: none">
	<div class="box box-default">
		<div class="box-header with-border">
			<!-- <h3 class="card-title">Provide Purchase Order Details</h3> -->
			<h6 class="card-subtitle">
				Uploaded Data
				<!-- <code>customtab</code> -->
			</h6>
		</div>
		<!-- /.box-header -->
		<div class="box-body">
			<!-- Nav tabs -->
			
			<!-- Tab panes -->
			<div class="tab-content">
				<div class="tab-pane active" role="tabpanel">
					<div class="box box-info">
						<!-- <h5 class="">PO Details Manual Enter</h5> -->
						
						<div class="row">
							<div class="col-md-12">
								<fieldset>
									
									<div class="box-body">
										<table id="tbl_uploaded_invoice_data"
											class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
											cellspacing="0" width="100%">
											<thead>
												<tr>
													<th>Contract No</th>
													<th>Invoice Number</th>
													<th>Invoice Date</th>
													<th>Discount</th>
													<th>Value</th>
													<th>Tax</th>
													<th>Net amount</th>
													<th>Batch No</th>
													<th>Status</th>
													<th>View</th>
												</tr>
											</thead>
										</table>
									</div>
								</fieldset>
							</div>
						</div>
					</div>
					 <button type="button" id="_btn_ii_Approve"  class="btn bg-olive pull-right" style="margin: 10px">Approve</button>
					 <button type="button" id="_btn_ii_reject"  class="btn btn-danger pull-right" style="margin: 10px">Reject</button>
				</div>
				
				
			</div>
			<!-- /.box-body -->
		</div>
		<!-- /.box -->
	</div>
</div>

<div id="mdl_issue_invoice" class="modal fade bd-example-modal-lg" role="dialog">
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
      	<!-- 		<div class="col-md-4">
      				
      			</div> -->
      			<div class="col-md-8">
							<fieldset>
								<div class="form-group row">
									<!-- <label for="mdl_contract_amount" class="col-sm-6 control-label">Contract
										Amount </label> -->
									<div class="col-sm-6">
										<input id="mdl_contract_id" style="text-align: right;" name="registration_no" type="hidden"
											class="form-control" disabled="disabled">
											<input id="mdl_mapping_id" style="text-align: right;" name="mapping_no" type="hidden"
											class="form-control" disabled="disabled">
									</div>
								</div>
								
								<div class="form-group row">
									<label for="mdl_comments" class="col-sm-6 control-label">Comments
										</label>
									<div class="col-sm-6">
										<textarea id="mdl_contract_comment" name="registration_no" 
											class="form-control"></textarea>
									</div>
								</div>
								<div class="form-group row">
									<label for="inputPassword3" class="col-sm-6 control-label">
										Upload Invoice Header</label>
									<div class="col-sm-6">
										<label title="Upload image file" for="mdl_ii_uploaded_invoice_header"
											class="btn btn-primary"> <input type="file"
											accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
											 name="file" id="mdl_ii_uploaded_invoice_header" class="hide">
											Upload Invoice Header
										</label>
										<p id="mdl_ii_uploaded_invoice_header_lbl"></p>
									</div>
								</div>
								<div class="form-group row">
									<label for="inputPassword3" class="col-sm-6 control-label">
										Upload Invoice Details</label>
									<div class="col-sm-6">
										<label title="Upload image file" for="mdl_ii_uploaded_invoice_body"
											class="btn btn-primary"> <input type="file"
											accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
											 name="file" id="mdl_ii_uploaded_invoice_body" class="hide">
											Upload Invoice Details
										</label>
										<p id="mdl_ii_uploaded_invoice_body_lbl"></p>
									</div>
								</div>
								<div class="form-group row">
									<label for="inputPassword3" class="col-sm-6 control-label">
										Invoice Copy</label>
									<div class="col-sm-6">
										<label title="Upload image file" for="mdl_ii_uploaded_invoice_copy"
											class="btn btn-primary"> <input type="file"
											accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
											 name="file" id="mdl_ii_uploaded_invoice_copy" class="hide">
											Upload Invoice Copy
										</label>
										<p id="mdl_ii_uploaded_invoice_body_lbl"></p>
									</div>
								</div>

							</fieldset>
							<!-- <div class="row">
      					<div class="col-md-4">
      						<div>Company Code : -</div></br>
      						<div>Contact Number : -</div></br>
      						<div>Email : -</div></br>
      						<div id="ar_partnership_1" style="display: none;">Partership Date : -</div></br>
      					</div>
      					<div class="col-md-8">
      						<div id="ar_company_code"></div></br>
      						<div id="ar_company_contact"></div></br>
      						<div id="ar_company_email"></div></br>
      						<div id="ar_partnership_2" style="display: none;"><input type="hidden" id="mapId"/></div>
      					</div>
      				</div> -->
      			</div>
						<div class="col-md-4">
							<div style="margin: 20px; opacity: 0.1; text-align: center;">
								<i class="fa fa-paper-plane"
									style="font-size: 150px; color: #e5e5e5"></i>
							</div>

						</div>
					</div>
      	</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" id="sendInvoices"  class="btn bg-olive pull-right">Send</button>
      </div>
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
									<table id="tbl_uploaded_invoice_details"
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
<!-- /.col -->
<script src="resources/js/customjs/invoice/issueinvoice.js"></script>

<script type="text/javascript">
	$('#titleID').text("Issue Invoice");
	$('#bcumb').text("Issue Invoice");
</script>

