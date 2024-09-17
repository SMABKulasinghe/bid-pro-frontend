<div class="col-md-12 col-lg-12 animated fadeInLeft">
	
	<div class="box box-info animated fadeInDownBig" id="userTableDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle text-green">View more RFP details and authorization</h4>
		</div>

		<div class="box-body">
			<!-- <div class="row">
			
					<div class="col-md-6">
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-2 control-label">Tender
							Name</label>
						<div class="col-sm-10">
							<select id="tender_no" name="tender_no"
								type="select" class="form-control" value="201203001T" required="required">
								<option>E353 </option>
								<option>E355 </option>
								<option>E354 </option>
								<option>E357 </option>
							
							</select>
						</div>
					</div>

				</div>
			
				<div class="col-md-6">
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
			
					<div class="col-md-6">
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-2 control-label">Closing
							Date</label>
						<div class="col-sm-10">
							<input id="closing_date" name="closing_date" type="text"
									value="2021-02-25" class="form-control">
						</div>
					</div>

				</div>
			
				<div class="col-md-6">
				<div class="form-group row">
								<label for="inputPassword3" class="col-sm-2 control-label">
									Conditions </label>
								<div class="col-sm-10">
									<select id="tender_no" name="tender_no"
										type="select" class="form-control" value="201203001T" required="required">
										<option>Conditions 1 </option>
										<option>Conditions 2 </option>
									</select>
								</div>
							</div>
				</div>
				
			</div>								
					<br />
				</div> -->	

	
	<div class="row">
			<div class="col-md-12">
				<!-- <div class="box-body"> -->
					<table id="rfpResponses"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive" style=" width:100%">
						<thead>
							<tr>
								<th class="text-yellow">Index</th>
								<th class="text-yellow">RFP number</th>
								<th class="text-yellow">Created Date and Time</th>
								<th class="text-yellow">File name</th>
								<th class="text-yellow">Created User</th>
								<th class="text-yellow">Category</th>
								<th class="text-yellow">Department</th>
								<th class="text-yellow">Uploaded File</th>
								<th class="text-yellow">More Details of RFP</th>
								<th class="text-yellow">Procurement Request Details</th>
								<th class="text-yellow">Status</th>
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




<!-- Procurement Request Details-->
<div id="mdl_procurement" class="modal fade bd-example-modal-lg" role="dialog" data-toggle="modal" >
		<div class="modal-dialog modal-lg" style="max-width: 90%">

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
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Procurement Request</h1>										
								</div>
							</div>
							
							<div class="row">
								<div class="col-md-12">
									<p class="pull-right" style="margin-bottom: 0" id="mdl_ii_rfpNumber">SP4853</p>
									<p class="pull-right" style="margin-bottom: 0">RFP Number - </p>
								</div>
							</div>
							
						  <div class="row">
						 	<div class="col-md-12">
								<p class="pull-right" style="margin-bottom: 0" id="mdl_ii_category">IT-Hardware</p>
								<p class="pull-right" style="margin-bottom: 0">Category - </p>
							</div>
					      </div>
					   </div>
							
							<div class="col-md-10">
								<div class="row">
									<div class="col-md-12">
										<div class="row" style="height: 10px;">
											<div class="col-md-12" id="amountLKROfallDiv">
											</div>
										</div>
										<div class="row" style="height: 10px;">
											<div class="col-md-12" id="amountUSDOfallDiv">
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="modal-body">
				<div style="height: 100%">					
				<div class="modal-body">
				<div style="height: 100%">
					<div class="row">	
										
						<div class="col-md-6">						
							 <div class="box-body" >
								<div class="form-group row">
									<label for="inputPassword3" class="col-sm-7 control-label text-yellow">Department</label>
										<div class="col-sm-8">
											<input id="department_pro" name="department_pro" type="text" class="form-control" required="required" disabled>
										</div>
								</div>
							</div>	
							
							 <div class="box-body" >
								<div class="form-group row">
									<label for="inputPassword3" class="col-sm-7 control-label text-yellow">Requester</label>
										<div class="col-sm-8">
											<input id="requester_pro" name="requester_pro" type="text" class="form-control" required="required" disabled>
										</div>
								</div>
							</div>	
							
						<div class="box-body" >
							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-7 control-label text-yellow">HOD/ Unit Head Designation</label>
									<div class="col-sm-8">
										<input id="approval_pro" name="approval_pro" type="text" class="form-control" required="required" disabled>
									</div>
							</div>	
					  </div>
					  
					  <div class="box-body" >
							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-7 control-label text-yellow">Technical Evolution Team</label>
									<div class="col-sm-8">
										<input id="tech_evolution_team" name="tech_evolution_team" type="text" class="form-control" required="required" disabled>
									</div>
							</div>	
					  </div>
					  
			       </div>
						
						
			<div class="col-md-6">						   
			   <div class="box-body" >
					<div class="form-group row">
						<label for="startDate" class="col-sm-7 control-label text-yellow">Date</label>
						<div class="col-sm-8">
							<input id="date_pro" name="date_pro" type="text" class="form-control" required="required" disabled>
						</div>
					</div>
			   </div>	
			   
			  
			  <div class="box-body" >
			 		<div class="form-group row">
						<label for="inputPassword3" class="col-sm-7 control-label text-yellow">Designation</label>
						<div class="col-sm-8">
							<input id="designation_pro" name="designation_pro" type="text" class="form-control" required="required" disabled>
						</div>
					</div>
				</div>
				
				
				<div class="box-body" >
					  	<div class="form-group row">
							<label for="inputPassword3" class="col-sm-7 control-label text-yellow">Name</label>
								<div class="col-sm-8">
									<input id="name_pro" name="name_pro" type="text" class="form-control" required="required" disabled>
								</div>
						</div>	
				</div>		
			</div>	
				
				 <fieldset class="col-md-12">
					<div class="box-footer"> </div>					
				</fieldset>
						
				
			<div class="col-md-6">
				<fieldset>				
				<div class="box-body">
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-8 control-label text-yellow">Budgeted</label>
							<div class="col-sm-8">
								<input id="budgeted" name="budgeted" type="text" class="form-control" required="required" disabled>
							</div>
					</div>
				</div> 	
				
				
				<div class="box-body">
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-8 control-label text-yellow">Estimated Project Cost (LKR)/Per Annum</label>
						<div class="col-sm-8">
							<input id="projectCost_pro" name="projectCost_pro" type="number" class="form-control" required="required" disabled>
						</div>
					</div>
				</div>
									
					
				<div class="box-body">
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-8 control-label text-yellow">Existing Prices</label>
						<div class="col-sm-8">
							<input id="prices_pro" name="prices_pro" type="number" class="form-control" required="required" disabled>
						</div>
					</div>
				</div>	
														
				
				<div class="box-body">		
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-8 control-label text-yellow">Type</label>
							<div class="col-sm-8">
							<input id="type" name="type" type="text" class="form-control" disabled>
						</div>
					
				  </div> 	
				</div>
								
						
				<div class="box-body">							
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-8 control-label text-yellow">Bidding Period (Minimum 5 working days)</label>
						<div class="col-sm-8">
							<input id="bidding_period_pro" name="bidding_period_pro" type="text" class="form-control" disabled>
						</div>
					</div>
				</div>	
									
			 
			 <div class="box-body">
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-8 control-label text-yellow">Sample Requirement</label>
							<div class="col-sm-8">
							<input id="sample_equirement" name="sample_equirement" type="text" class="form-control" disabled>
						</div>
				</div>	
			 </div>	
									
					
				<div class="box-body">	
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-6 control-label text-yellow">Expected Delivery Period</label>
						<div class="col-sm-8">
							<input id="delivery_period_pro" name="delivery_period_pro" type="text" class="form-control" disabled>
						</div>
					</div>
				</div>	
		
							
				<div class="box-body">	
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-5 control-label text-yellow">Pre Bid Meeting Requirement </label>
						<div class="col-sm-8">
							<input id="bid_meeting" name="bid_meeting" type="text" class="form-control" disabled>
						</div>
					</div>
				</div>	
					
			
					<div class="box-body">
						<div class="form-group row">
							<label for="comment" class="col-sm-7 control-label text-yellow">Any Other Important Noted to Consider</label>
							<div class="col-sm-9">
							<textarea id="important_noted_pro" class="form-control" rows="3" ></textarea>
						 </div>
						  </div>
					</div>											 
				</fieldset>
				<br/>
			</div>	
			
			
		 	<div class="col-md-6">	
		 		<div class="box-body">								
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-8 control-label text-yellow">Expenditure</label>
						<div class="col-sm-8">
							<input id="expenditure" name="expenditure" type="text" class="form-control" required="required" disabled>
						</div>
					</div>
				</div>			
					
					
				<div class="box-body">	
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-8 control-label text-yellow">Existing Supplier</label>
						<div class="col-sm-8">
							<input id="supplier_pro" name="supplier_pro" type="text" class="form-control" required="required" disabled>
						</div>
					</div>
				 </div>	
				
				
				 <div class="box-body" >
					<div class="form-group row">
						<label for="startDate" class="col-sm-8 control-label text-yellow">Last PC Approved Date/Purchase Date</label>
						<div class="col-sm-8">
							<input id="purchase_date_pro" name="purchase_date_pro" type="text" class="form-control" required="required" disabled>
						</div>
					</div>
			   </div>	
				
				
				<div class="box-body">		
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-6 control-label text-yellow">Goods & Service Category</label>
							<div class="col-sm-8" id="pro_catdiv">
								<input id="service_category_pro" name="service_category_pro" type="text" class="form-control" value="" disabled>
							</div>
					</div>
				</div>	
				
				
				<div class="box-body">			
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-10 control-label text-yellow">Staff contact details for Technical Clarifications</label>
						<div class="col-sm-8">
							<input id="clarifications_pro" name="clarifications_pro" type="text" class="form-control" disabled>
						</div>
					</div>
				</div>	
				
				
				<div class="box-body">
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-8 control-label text-yellow">Payment Terms (If specific)</label>
						<div class="col-sm-8">
							<input id="payment_terms_pro" name="payment_terms_pro" type="number" class="form-control" disabled>
						</div>
					</div>
				</div>	
				
				
				<div class="box-body">	
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-6 control-label text-yellow">Quotation Validity Period</label>
						<div class="col-sm-8">
							<input id="quotation_validity" name="quotation_validity" type="text" class="form-control" disabled>
						</div>
					</div>
				</div>	
				
				
				<div class="box-body">	
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-6 control-label text-yellow">Warranty Period</label>
						<div class="col-sm-8">
							<input id="warranty_period_pro" name="warranty_period_pro" type="text" class="form-control" disabled>
						</div>
					</div>
				</div>	
				
				
				<div class="box-body">		
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-10 control-label text-yellow">Recommended any other vendors in the Market Contact Details (Email)</label>
						<div class="col-sm-8">
							<input id="market_contact_pro" name="market_contact_pro" type="text" class="form-control" disabled>
						</div>
					</div>
				</div>	
		 </div> 
		 
		 
		 <div class="col-md-12">
		 <label for="comment">Note - Any information required for technical/specification evaluation, 
										 should be mentioned in the RFP document properly. </label>
		 </div>	
		 	
					</div>
				</div>
			</div>
					</div>
				</div>
				
				<div class="modal-footer" id="btn">
					<button id="cancel_pro_details" type="button" class="btn bg-olive" data-dismiss="modal" >Close</button>
				</div>
			</div>
		</div>
	</div>



<div id="submit_rfp_comment" class="modal fade bd-example-modal-lg"
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
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Add a comment</h1>
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
															<label for="inputPassword3" class="col-sm-4 control-label">
																RFP Number </label>
															<div class="col-sm-10" id="rfpNumberDiv">
																<!-- <input id="rfp_description" name="rfp_description"
																	type="text" class="form-control" required="required"
																	> -->
																	<!-- <textarea id="rfpComment" class="form-control" rows="2" ></textarea> -->
															</div>
														</div>
											</div>
											
											<div class="col-md-6">
														<div class="form-group row">
															<label for="inputPassword3" class="col-sm-4 control-label">
																RFP File Name </label>
															<div class="col-sm-10" id="rfpFileNameDiv">
																<!-- <input id="rfp_description" name="rfp_description"
																	type="text" class="form-control" required="required"
																	> -->
																	<!-- <textarea id="rfpComment" class="form-control" rows="2" ></textarea> -->
															</div>
														</div>
											</div>
										</div>
										<div class="row">
										
											<div class="col-md-12">
														<div class="form-group row">
															<label for="inputPassword3" class="col-sm-4 control-label">
																Comment </label>
															<div class="col-sm-10" id="rfpcommentDiv">
																<!-- <input id="rfp_description" name="rfp_description"
																	type="text" class="form-control" required="required"
																	> -->
																	<!-- <textarea id="rfpComment" class="form-control" rows="2" ></textarea> -->
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
				<!-- <button type="submit" id="submit_button"
					class="btn btn-info pull-right">Submit</button> -->
				
				<button type="button" id="authrized" class="btn btn-primary pull-right" style="margin-right: 10px" >Authorize</button>
				<button type="button" id="rejected" class="btn btn-danger pull-right" >Reject</button>
				
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

<!-- <script src="resources/js/customjs/tender/vieweligiblevendors.js"></script> -->



<script type="text/javascript">
//jQuery(document).ready(function(e) {
	
	$('#titleID').text("RFP Authorization");
	$('#bcumb').text("RFP Authorization");
	
</script>
<script src="resources/js/customjs/rfp/rfpresponses.js"></script>


