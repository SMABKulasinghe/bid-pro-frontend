<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">Procurement Request - Step 1</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<div class="col-md-6">
				<fieldset>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Department</label>
						<div class="col-sm-8">
							<input id="pro_department" name="pro_department" type="text" class="form-control" required="required" autocomplete="off">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Requester</label>
						<div class="col-sm-8">
							<input id="pro_requester" name="pro_requester" type="text" class="form-control" required="required" autocomplete="off">
						</div>
					</div>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Name</label>
						<div class="col-sm-8">
							<input id="pro_name" name="pro_name" type="text" class="form-control" required="required" autocomplete="off">
						</div>
					</div>
				</fieldset>
				<br/>
			</div>
		
		
		<div class="col-md-6">
			<fieldset>
				<!-- 	<div class="form-group row">
						<label for="startDate" class="col-sm-4 control-label">Date</label>
						<div class="col-sm-4 input-group date">
							<div class="input-group-addon">
								<i class="fa fa-calendar"></i>
							</div> 	
								<input class="form-control" autocomplete="off" id="pro_date">
						</div>
					</div> -->
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Designation</label>
						<div class="col-sm-8">
							<input id="pro_designation" name="pro_designation" type="text" class="form-control" required="required" autocomplete="off">
						</div>
					</div>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">HOD/ Unit Head Designation</label>
						<div class="col-sm-8">
							<input id="pro_approval" name="pro_approval" type="text" class="form-control" required="required" autocomplete="off">
						</div>
					</div>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Technical Evolution Team</label>
						<div class="col-sm-8">
							<input id="evolution_team" name="evolution_team" type="text" class="form-control" required="required" autocomplete="off">
						</div>
					</div>
			</fieldset>	
		 </div>
		 
		 <fieldset class="col-md-12">
					<div class="box-footer"> </div>					
		</fieldset>
		 
		 
		 <div class="col-md-7">
				<fieldset>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Budgeted</label>
					<div class="radio">
						<input type="radio" id="yes_budgeted" value="Yes" name="budgeted"> 
							<label for="yes_budgeted">Yes</label>
					</div> 
					
					<div class="radio">
						<input type="radio" id="no_budgeted" value="No" name="budgeted"> 
							<label for="no_budgeted">No</label>
					</div>
					</div>
				
				
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Estimated Project Cost (LKR)/Per Annum</label>
						<div class="col-sm-8">
							<input id="pro_projectCost" name="pro_projectCost" type="number" class="form-control" required="required" autocomplete="off">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Existing Supplier</label>
						<div class="col-sm-8">
							<input id="pro_supplier" name="pro_supplier" type="text" class="form-control" required="required" autocomplete="off">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Existing Prices</label>
						<div class="col-sm-8">
							<input id="pro_prices" name="pro_prices" type="number" class="form-control" required="required" autocomplete="off">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="startDate" class="col-sm-4 control-label">Last PC Approved Date/Purchase Date</label>
						<div class="col-sm-4 input-group date">
							<div class="input-group-addon">
								<i class="fa fa-calendar"></i>
							</div> 	
								<input class="form-control" autocomplete="off" id="purchase_date">
						</div>
					</div>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Type</label>
					<div class="radio">
						<input type="radio" id="one_time" value="One-time" name="type"> 
							<label for="one_time">One-time</label>
					</div> 
					
					<div class="radio">
						<input type="radio" id="recurring" value="Recurring" name="type"> 
							<label for="recurring">Recurring</label>
					</div>
					
					<div class="radio">
						<input type="radio" id="renewal" value="Renewal" name="type"> 
							<label for="renewal">Renewal</label>
					</div>
					
					<div class="radio">
						<input type="radio" id="re_ordering" value="Re-ordering" name="type"> 
							<label for="re_ordering">Re-ordering</label>
					</div>
					</div>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Goods & Service Category</label>
							<div class="col-sm-8" id="pro_catdiv">
								<select id="service_category" name="service_category" class="form-control select2" value="" required="required">
									<option>Select a category</option>
								</select>
							</div>
					</div>
					
										
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Bidding Period (Minimum 5 working days)</label>
						<div class="col-sm-8">
							<input id="bidding_period" name="bidding_period" type="text" class="form-control" required="required">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Staff contact details for Technical Clarifications</label>
						<div class="col-sm-8">
							<input id="pro_clarifications" name="pro_clarifications" type="text" class="form-control" required="required">
						</div>
					</div>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Sample Requirement</label>
					<div class="radio">
						<input type="radio" id="sample_yes" value="Yes" name="sample_equirement"> 
							<label for="sample_yes">Yes</label>
					</div> 
					
					<div class="radio">
						<input type="radio" id="sample_no" value="No" name="sample_equirement"> 
							<label for="sample_no">No</label>
					</div>
					</div>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Payment Terms (If specific)</label>
						<div class="col-sm-8">
							<input id="payment_terms" name="payment_terms" type="text" class="form-control" required="required">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Quotation Validity Period</label>
						<div class="col-sm-8">
							<input id="quotation" name="quotation" type="text" class="form-control" required="required">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Expected Delivery Period</label>
						<div class="col-sm-8">
							<input id="delivery_period" name="delivery_period" type="text" class="form-control" required="required">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Warranty Period</label>
						<div class="col-sm-8">
							<input id="warranty_period" name="warranty_period" type="text" class="form-control" required="required">
						</div>
					</div>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Pre Bid Meeting Requirement </label>
					<div class="radio">
						<input type="radio" id="bid_yes" value="true" name="bid_meeting"> 
							<label for="bid_yes">Yes</label>
					</div> 
					
					<div class="radio">
						<input type="radio" id="bid_no" value="true" name="bid_meeting"> 
							<label for="bid_no">No</label>
					</div>
					</div>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Recommended any other vendors in the Market Contact Details (Email)</label>
						<div class="col-sm-8">
							<input id="market_contact" name="market_contact" type="text" class="form-control" required="required">
						</div>
					</div>
					
					
					<div class="box-body">
						<div class="form-group">
							<label for="comment">Any Other Important Noted to Consider</label>
							<textarea id="important_noted" class="form-control" rows="3" ></textarea>
						 </div>
					</div>											 
				</fieldset>
				<br/>
			</div>
			
			
			<div class="col-md-5">
				<fieldset>					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Expenditure</label>
					<div class="radio">
						<input type="radio" id="expenditure_capex" value="Capex" name="expenditure"> 
							<label for="expenditure_capex">Capex</label>
					</div> 
					
					<div class="radio">
						<input type="radio" id="expenditure_opex" value="Opex" name="expenditure"> 
							<label for="expenditure_opex">Opex</label>
					</div>
					</div>					
				</fieldset>	
		 </div>
		 
		 <div class="col-md-12">
		 <label for="comment">Note - Any information required for technical/specification evaluation, 
										 should be mentioned in the RFP document properly. </label>
		 </div>
			 
		</div>
		</div>
		
		<fieldset class="col-md-12">
					<div class="box-footer">
						<button type="submit" id="btn_submit" class="btn btn-info pull-right">Submit</button>
					</div>					
		</fieldset>
	</div>
</div>




<!-- Create RFP Details -->

<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">Create RFP Details - Step 2</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<div class="col-md-6">
					
				<fieldset>
					<h4 class="box-title text-green">RFP Details</h4>
					
					<!-- <div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">RFP Number *</label>
						<div class="col-sm-8">
							<input id="rfp_no" name="rfp_no"
								type="text" class="form-control" required="required">
						</div>
					</div> -->
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">File Name <span style="color: red">*</span> </label>
						<div class="col-sm-8">
							<input id="rfp_filename" name="rfp_filename" type="text"
								class="form-control" required="required">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Category <span style="color: red">*</span> </label>
						<div class="col-sm-8">
							<select class="form-control select2" id="productCategory" name="location">
								<option>Select a category</option>
							</select>
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Sub Category <span style="color: red">*</span> </label>
						<div class="col-sm-8">
							<select class="form-control select2" id="productSubCategory" name="location">
								
							</select>
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Procurement Request <span style="color: red">*</span> </label>
						<div class="col-sm-8">
							<select class="form-control select2" id="procurementRequest" name="procurementRequest">
								<!-- <option>Select a Procurement Request</option> -->
							</select>
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Upload File</label>
						<div class="col-sm-8">
							<label title="Upload pdf file" 
								class="btn bg-olive"> <input type="file"
								accept="application/zip" name="upload_file" id="upload_file" onchange="fileValidation()"
								class="btn btn-block bg-olive btn-lg" required="required"> Choose file
							</label>
						</div>
					</div>
				</fieldset>
				<br/>
		</div>
		
		
		<div class="col-md-6">
			
				<h4 class="box-title text-green">Adding RFP Heading & Fields</h4>
				<!-- <div  class="box-body"> -->
				<!-- <div id="setofHeadingandFileds">	 -->
				<div id="addingFiledsectoin">
					<div class="box-body">
					<fieldset>
						<div class="form-group row" id="rfpheadingFields">
						<!-- <div class="col-sm-12 input-group"> -->
								<label for="inputPassword3" class="col-sm-4 control-label"> Title (Heading Name) <span style="color: red">*</span></label>
						 			 <div class="col-sm-8" id="headingNamediv">
						  				<input id="rfp_heading_name" name="rfp_filename" type="text" class="form-control" required="required">
									
						 			 </div>	
						 			 
						 			 
						<!-- </div> -->
							<br><br>
							
							
							<!-- <div class="col-sm-8 input-group"> -->
								<label for="inputPassword3" class="col-sm-4 control-label"> Description (Field Name) <span style="color: red">*</span></label>
								
						 			 <div class="col-sm-8" >
						 			 	
						 			 	<div class="input-group" id="fieldNamediv">
						  				<input id="rfp_fieldName" name="rfp_fieldName" type="text" class="form-control" required="required">
						  				<input type="button" value="Add to Field" id="fieldName" class="btn button-plus" >
										</div>
										
						 			 </div>	 
							<!-- </div> -->
							<div class="col-sm-4 input-group">
									<ul name="addedfieldlist" id="addedfiledlist1">
										
									</ul>
							</div>
								</div>
							<button id="submit_fields" class="btn btn-info pull-right">Add to table</button>
					</fieldset>
					
								
					</div>
					<div class="col-sm-4 input-group">
								<ul id="output">
									
								</ul>
					</div>
					
				</div>
				
				<!-- </div> -->
				
				<!-- <div class="row">
						<div class="form-group row">
						
							<div class="col-sm-12 input-group">
								<label for="inputPassword3" class="col-sm-6 control-label"> Add Heading</label>
						 			 <div class="col-sm-8 input-group">
						  				<input id="headdingval" name="headdingval" type="text" class="form-control" required="required">
										<input type="button" id="addheadings"  value="Add" class="btn button-plus" >
						 			 </div>	 
							</div>
						</div>
				</div>	 -->
					 
					 
				
				
			 </div>
				<!-- <div class="form-group row" id="fieldand">
					<div class="col-sm-8">
					<label for="inputPassword3" class="col-sm-4 control-label"> Heading Name *
						</label>
							<div class="input-group">
 							 	<input type="button" value="-" class="button-minus" data-field="quantity">
  							 	<input type="text"  max=""  name="quantity" class="form-control">
  							 	<input type="button" value="+" class="btn button-plus" data-field="quantity">
							    
							</div>
							<div class="col-sm-8">
									<label for="inputPassword3" class="col-sm-5 control-label"> Field Name *</label>
									<div class="input-group">
										<input type="button" value="-" class="button-minus" data-field="quantity">
  							 			<input type="text"  max="" name="quantity" class="form-control">
  							 			<input type="button" value="+" class="btn button-plus" data-field="quantity">
									</div>
								</div>
					</div>
				</div> -->
			
		</div>
		
		<div class="box-header with-border">
					<h3 class="box-title text-green">RFP Added List</h3>
				</div>
		
				<div class="row">
					<div class="col-md-12">
						<div class="box-body">
							<table id="rfpTable" class="table table-bordered table-hover display nowrap margin-top-10 table-responsive" cellspacing="0" width="100%">				
								
								<thead>
									<tr class="text-yellow">
										<th>Title (Heading Name)</th>
										<th>Description (Field Name)</th>
										<th>Action</th>
									</tr>
								</thead>
		
							</table><br>
						  <!-- 	<button type="button" id="confirmButton" class="btn bg-olive">Confirm</button> -->
						</div>
					</div>
				</div> 
				
				<!-- <div class="row">
					<div class="col-md-12">
						<div class="box-body">
							<table id="rfpTable2" class="table table-bordered table-hover display nowrap margin-top-10 table-responsive" cellspacing="0" width="100%">				
								
								<thead>
									<tr class="text-green">
										<th>Heading Name</th>
										<th>Field Name</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody id='MarkSheetTableBody'>
									
								</tbody>
		
							</table><br>
						  	<button type="button" id="confirmButton" class="btn bg-olive">Confirm</button>
						</div>
					</div>
				</div> --> 
		
		</div>
		<fieldset class="col-md-12">

					<div class="box-footer">
						<!-- <button type="submit" class="btn btn-default">Cancel</button> -->
						<button type="submit" id="submit_button" class="btn btn-info pull-right">Submit</button>
					</div>
					
		</fieldset>
	</div>
</div>




<div id="submit_financial_code" class="modal fade bd-example-modal-lg"
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
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Edit</h1>
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
																Financial code</label>
															<div class="col-sm-10" id="financialCodeDiv">
																
															</div>
														</div>
											</div>
											
											<div class="col-md-6">
														<div class="form-group row">
															<label for="inputPassword3" class="col-sm-4 control-label">
																<br>Description   </label>
															<div class="col-sm-10" id="descriptionDiv">
																
															</div>
														</div>
											</div>
										</div>
										<!-- <div class="row">
										
											<div class="col-md-12">
														<div class="form-group row">
															<label for="inputPassword3" class="col-sm-4 control-label">
																Comment </label>
															<div class="col-sm-10" id="rfpcommentDiv">
																
															</div>
														</div>
											</div>
										</div> -->
										
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
				<button type="submit" id="edit_button" class="btn btn-info pull-right">Submit</button>
				
				<!-- <button type="button" id="authrized" class="btn btn-primary pull-right" style="margin-right: 10px" >Authorize</button> -->
				<!-- <button type="button" id="rejected" class="btn btn-danger pull-right" >Reject</button> -->
				
				<!-- <button type="button" id="acceptPartnership"
					class="btn bg-olive pull-right">Send</button> -->
			</div>
		</div>

	</div>
</div>

<script type="text/javascript">

	$('#titleID').text("Create RFP");
	$('#bcumb').text("Create RFP");
//	document.getElementById("submit_button").disabled = false;

</script>

<!-- <script>

</script> -->
<script src="resources/js/customjs/rfp/createrfpjs.js"></script>
<script src="resources/js/customjs/tender/financialcodecreation.js"></script>

