
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">PO Details</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<!-- <div class="col-md-6">
			
					<fieldset>
					<h5 class=" ">Tender Offer</h5>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Tender  No *</label>
						<div class="col-sm-8" id="tenderIdDiv">
							<select id="tenderIdd" name="tenderIdd"
								 	class="form-control select2" value="" required="required"> </select>
						</div>
							
					</fieldset>
				<br/>
			
				
			</div> -->
			<div class="col-md-12">
			<table id="po_authorization"
											class="table table-bordered table-hover display nowrap margin-top-10 table-responsive">
											<thead>
													<tr class="text-yellow">
														<th>Supplier Name</th>
														<th>Tender Name</th>
														<th>Quantity</th>
														<th>RFP File Name</th>
														<th>RFP</th>
														<th>Batch File</th>
														<th>Terms and Conditions</th>
														<th>Status</th>
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


<!-- <div class="box-body"></div>
			
			
				<div class="col-md-12 col-lg-12 animated fadeInLeft">
					<div class="col col-md-12">
						<div class="box box-info">
							<div class="box-header with-border">
								<h3 class="box-title text-aqua">PO Authorization</h3>
							</div>
							<div class="row">
								
								<div class="row">
									<div class="col-md-12">
										<div class="box-body">
											<table id="po_authorization"
											class="table table-bordered table-hover display nowrap margin-top-10 table-responsive">
											<thead>
													<tr class="text-yellow">
														<th>Supplier Name</th>
														<th>Tender Name</th>
														<th>RFP File Name</th>
														<th>RFP</th>
														<th>Batch File</th>
														<th>Status</th>
														
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
				

</div> -->


<div id="mdl_issue_invoice" class="modal fade bd-example-modal-lg"
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
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">RFP Details</h1>
										
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
								<div class="box-body" id="for_pdf">
									<table id="rfpDetailsResponses"
										class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
										cellspacing="0" width="100%">
										<thead>
											<tr>
												<th>Index</th>
												<th>Title (Heading Name)</th>
												<th>Description (Field Name)</th>
												<!-- <th>HID</th> -->
											</tr>
										</thead>
				
										<tbody>
											
										</tbody>
									</table>
									
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
				<button id="cancel_rfp_details" type="button" class="btn btn-default" data-dismiss="modal" >Close</button>
				<!-- <button type="button" onclick="createPDF()" id="create_pdf" class="btn bg-olive pull-right">Create PDF</button> -->
					
			</div>
		</div>

	</div>
</div>

<div id="mdl_terms_and_con" class="modal fade bd-example-modal-lg"
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
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Terms And Conditions</h1>
										
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
								<div class="box-body" id="for_pdf">
									<table id="termsAndConditionTbl"
										class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
										cellspacing="0" width="100%">
										<thead>
											<tr>
												<th>Index</th>
												<th>Criteria</th>
												<th>Terms And Condition</th>
												<!-- <th>HID</th> -->
											</tr>
										</thead>
				
										<tbody>
											
										</tbody>
									</table>
									
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
				<button id="cancel_rfp_details" type="button" class="btn btn-default" data-dismiss="modal" >Close</button>
				<!-- <button type="button" onclick="createPDF()" id="create_pdf" class="btn bg-olive pull-right">Create PDF</button> -->
					
			</div>
		</div>

	</div>
</div>

<script type="text/javascript">
	$('#titleID').text("PO Details");
	$('#bcumb').text("PO Details");
</script>

<script src="resources/js/customjs/purchaseorder/podetails.js"></script>
