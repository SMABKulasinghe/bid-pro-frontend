<div class="col-md-12 col-lg-12 animated fadeInLeft">
	<div class="box box-default">

		<div class="box box-info">
			<div class="box-header with-border">
				<h4 class="card-subtitle text-green"> RFP Details</h4>
			</div>
			<div class="">
				<h5 class="text-green"></h5>
			</div>
			<!-- <div class="row">

				<div class="col-md-9">
					<div class="box-body">
						<fieldset>


							<div style="margin-top: 40px" class="form-group row">
								<label for="userID" class="col-sm-3 control-label">Enter
									Tender No*</label>

								<div class="col-sm-5">
									<input type="text" class="form-control" id="tenderno"
										value="TR001" name="tenderno" placeholder="Tender No"
										autocomplete="off">
								</div>
								<button type="submit" id="searchUserIDButton"
									class="btn btn-info pull-right">SUBMIT</button>
							</div>
						</fieldset>
					</div>
				</div>




				<div class="col-md-3">
					<div style="margin: 15px; opacity: 0.1;">
						<i class="fa fa-credit-card"
							style="font-size: 150px; color: #e5e5e5"></i>
					</div>
				</div>
			</div> -->
			
			<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="viewRfpTable"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr>
								<th>RFP No</th>
								<th>Tender No</th>
								<th>File name</th>
								<th>Tender Description</th>
								<!-- <th>Open</th> -->
								<th>Closing Date</th>
								<th>More Details of RFP</th>
								<!-- <th>Submit RFP</th> -->
								<!-- <th>ts</th> -->
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


<!-- 	<div class="box box-info animated fadeInDownBig" id="userTableDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle text-green">Update RFP Details</h4>
		</div>

		<div class="box-body">
			<div class="row">
			
					<div class="col-md-12">
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-2 control-label">Tender
							Name</label>
						<div class="col-sm-10">
							<input id="cordinate_name" name="cordinate_name" type="text"
								class="form-control" required="required" value="Vender Management System"
								readonly="readonly">
						</div>
					</div>

				</div>
			
				<div class="col-md-12">
				<div class="form-group row">
								<label for="inputPassword3" class="col-sm-2 control-label">
									Description </label>
								<div class="col-sm-10">
									<input id="tender_description" name="tender_description"
										type="text" class="form-control" required="required"
										value="Vender Management System">
								</div>
							</div>
				</div>
			</div>
			<div class="row">

				<div class="col-md-12">

					<div class="form-group row">
							
							<label for="inputPassword3" class="col-sm-2 control-label">Closing
								Date</label>
							<div class="col-sm-2">
								<input id="closing_date" name="closing_date" type="text"
									value="2021-02-25" class="form-control">
							</div>
							
				
							<label for="inputPassword3" class="col-sm-1 control-label">Time
							</label>
							<div class="col-sm-3">
								<input id="closing_date" name="closing_date" type="text"
									value="12.30" class="form-control">
							</div>
							
						
							<label for="inputPassword3" class="col-sm-1 control-label">Status</label>
							<div class="col-sm-3">
								<input id="status" name="status" type="text"
									class="form-control" value="Open">
							</div>
						</div>
						</div>
			</div>
					
					<br />



				</div>

				

		
		

	
	<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="example"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr>
								<th>No</th>
								<th>Description</th>
								
								
								
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>P12501</td>
								<td>OLAK</td>
								
								
							
							</tr>
							<tr>
								<td>P12502</td>
								<td>ASKPI</td>
								
								
							

							</tr>
							<tr>
								<td>P12503</td>
								<td>OnSys</td>
								
								
								
							</tr>
							<tr>
								<td>P12502</td>
								<td>Interblocks</td>
								
								
								

							</tr>
							<tr>
								<td>P12503</td>
								<td>Wso2</td>
								
								
							</tr>
						</tbody>
					</table>
					
				</div>
			</div>

		</div>
	

		</div>
		 -->
		
		
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
				<button type="button" onclick="createPDF()" id="create_pdf" class="btn bg-olive pull-right">Download PDF</button>
					
			</div>
		</div>

	</div>
</div>



<div id="submit_tender_form" class="modal fade bd-example-modal-lg"
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
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Submit RFP Documents</h1>
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
													<label for="inputPassword3" class="col-sm-4 control-label">Upload RFP</label>
													<div class="col-sm-10">
														<!-- <input id="rfp_file" name="rfp_file" type="text"
															class="form-control" required="required" > -->
															<label title="Upload file" for="inputImage"
														class="btn bg-olive"> 
														<input type="file"
														accept="image/*" name="file" id="upload_doc"
														class="btn btn-block bg-olive btn-lg" />

													</label>
													</div>
												</div>
							
											</div>
										
											<div class="col-md-6">
											<div class="form-group row">
															<label for="inputPassword3" class="col-sm-4 control-label">
																Description </label>
															<div class="col-sm-10">
																<!-- <input id="rfp_description" name="rfp_description"
																	type="text" class="form-control" required="required"
																	> -->
																	<textarea id="description" class="form-control" rows="2" ></textarea>
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
				<button type="submit" id="submit_button"
					class="btn btn-info pull-right">Submit</button>

				<!-- <button type="button" id="acceptPartnership"
					class="btn bg-olive pull-right">Send</button> -->
			</div>
		</div>

	</div>
</div>


<!-- <script
	src="resources/assets/vendor_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script
	src="resources/assets/vendor_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/media/js/jquery.dataTables.min.js"></script>

<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.flash.min.js"></script>

<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.html5.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.print.min.js"></script>
<script src="resources/js/pages/data-table.js"></script> -->

<!-- <script src="resources/js/customjs/tender/viewerfp.js"></script> -->










	
	
	



<!-- <script
	src="resources/assets/vendor_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script
	src="resources/assets/vendor_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/media/js/jquery.dataTables.min.js"></script>

<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.flash.min.js"></script>

<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.html5.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.print.min.js"></script> -->
<script src="resources/js/pages/data-table.js"></script> 

<script src="resources/js/customjs/rfp/viewerfp.js"></script>









<script type="text/javascript">
	$('#titleID').text("View & download RFP");
	$('#bcumb').text("View & download RFP");
</script>




