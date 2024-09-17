<div class="col-md-12 col-lg-12 animated fadeInLeft">
	<div class="box box-default">

		<div class="box box-info">
			<div class="box-header with-border">
				<h4 class="card-subtitle text-green">RFP Details</h4>
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
							<tr class="text-yellow">
								<th>Index</th>
								<th>RFP Number</th>
								<th>File name</th>
								<th>Created Date and Time</th>
								<th>Created User</th>
								<th>Uploaded File</th>
								<th>Tender details and Status</th>
								<th>More details</th>
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
						
						<div class="col-md-6">
							
							<!-- <div class="col-md-2"> -->
								<div class="box-body" >
								<div class="form-group row">
									<label for="inputPassword3" class="col-sm-4 control-label text-yellow">
												RFP number </label>
											<div class="col-sm-10">
												<input id="rfp_number" name="rfp_description"
													type="text" class="form-control" required="required"
														disabled>
												<!-- <textarea id="rfpComment" class="form-control" rows="2" ></textarea> -->
											</div>
								</div>
								</div>	

							<!-- </div> -->
							
						</div>
						
						<div class="col-md-6">
							
							<!-- <div class="col-md-2"> -->
								<div class="box-body" >
								<div class="form-group row">
									<label for="inputPassword3" class="col-sm-4 control-label text-yellow">
												RFP File name </label>
											<div class="col-sm-10">
												<input id="rfp_fileName" name="rfp_description"
													type="text" class="form-control" required="required"
														disabled>
												<!-- <textarea id="rfpComment" class="form-control" rows="2" ></textarea> -->
											</div>
								</div>
								</div>			

							<!-- </div> -->
							
						</div>
						
					</div>
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
												<th class="text-yellow">Index</th>
												<th class="text-yellow">Title (Heading Name)</th>
												<th class="text-yellow">Description (Field Name)</th>
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

<div id="mdl_tender_details"
		class="modal fade bd-example-modal-lg" role="dialog"
		data-toggle="modal" >
		<div class="modal-dialog modal-lg" style="max-width: 90%">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					<div style="width: 100%;">
						<div class="row">
							<div class="col-md-2">
								<!-- <button type="button" class="close pull-left" data-dismiss="modal">&times;</button> -->
							</div>
							<div class="col-md-10">
								<!-- <div class="row">
									<div class="col-md-12">
										<h1 class="modal-title pull-right" id="mdl_com_name">BidPro Registration</h1>
									</div>
								</div> -->
								<div class="row">
									<div class="col-md-12">
										<div class="row" style="height: 15px;">
											<div class="col-md-12" id="amountLKROfallDiv">
												<!-- <p id="add1" class="pull-right" style="font-size: 12px">No 04, Lambert watta, </p> -->
											</div>
										</div>
										<div class="row" style="height: 15px;">
											<div class="col-md-12" id="amountUSDOfallDiv">
												<!-- <p id="add2" class="pull-right" style="font-size: 12px"> Mallawapitiya, Kurunegala</p> -->
											</div>
										</div>
										<!-- <div class="row" style="height: 15px;">
											<div class="col-md-12">
												<p id="add2" class="pull-right" style="font-size: 12px">Sri
													Lanka</p>
											</div>
										</div> -->
										<!-- <div class="row" style="height: 15px; margin-top: 5px">
											<div class="col-md-12">
												<p id="add2" class="pull-right" style="font-size: 12px">bidpro.tender@gmail.com</p>
											</div>
										</div> -->
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				<div class="modal-body">
					<div style="height: 100%">


						<div class="row" id="supplier_div">
							<div class="col-md-12 ">
								<div class="row">
									<!-- <div class="col-md-12">
										<p>If your company interested in building a partnership
											through BidPro please communicate with us through the company
											registration form given below.</p>
										<p>Team BidPro will contact you.</p>
									</div> -->
								</div>
								<div class="row">
									<div class="col-md-12">
										<h5 class="text-green">Tender details</h5>
										<div class="box-body">
											<table id="tender_details_table"
												class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
												cellspacing="0" width="100%">
												<thead>
													<tr>
														<th>Tender Number</th>
														<th>Tender Name</th>
														<!-- <th>Description</th> -->
														<th>Eligible Category</th>
														<th>Sub Category</th>
														<th>Closing Date</th>
														<th>Closing time</th>
														<th>Status</th>
														<!-- <th>More</th> -->
													</tr>
												</thead>
						
												<tbody>
													
												</tbody>
											</table>
											
										</div>
										
									</div>
									
									<!-- <div class="col-md-6">
										<h5 class="text-green">OPPEX</h5>
										<div class="box-body">
											<table id="oppexTable"
												class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
												cellspacing="0" width="100%">
												<thead>
													<tr>
														<th>Company Code</th>
														<th>Currency Type</th>
														<th>Amount</th>
														<th>Comment</th>
														<th>Financial Description</th>
													</tr>
												</thead>
						
												<tbody>
													
												</tbody>
											</table>
											
										</div>
									
									</div> -->
									
									
								</div>

<!-- <hr style="background : #2b6565"> -->
								
								<!-- <div class="row">
									<div class="col-sm-12">
										<fieldset>
											<h5 class="text-yellow">Please confirm the action</h5>
											<input id="acceptTerms" name="acceptTerms" type="checkbox"
												class="acpt"> <label for="acceptTerms">I
												confirm that all information supplied above is correct and
												accurate.</label> <br> <input id="acceptTermsCon"
												name="acceptTermsCon" type="checkbox" class="acpt">
											<label for="acceptTermsCon">Read and understood our
												terms and conditions.</label> <br>

										</fieldset>
									</div>
								</div> -->
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer" id="btn">
					<!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
					<button id="cancel_rfp_details" type="button" class="btn btn-default" data-dismiss="modal" >Close</button>
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

<script src="resources/js/customjs/rfp/viewerfpcompany.js"></script>









<script type="text/javascript">
	$('#titleID').text("View RFP");
	$('#bcumb').text("View RFP");
</script>




