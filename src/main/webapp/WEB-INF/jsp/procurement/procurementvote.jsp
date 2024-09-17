
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">Vote for a Supplier</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<div class="col-md-6">
			
					<fieldset>
					<!-- <h5 class="text-green">Evaluation Sheet</h5> -->
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Select closed Tender  No *</label>
						<div class="col-sm-8" id="tenderIdDiv">
							<select id="procVote" name="procVote"
								 	class="form-control select2" value="" required="required"> </select>
						</div>
						<!-- <div class="col-sm-3">
							<button type="submit" id="searchUserIDButton"
									class="btn btn-info pull-right">Search</button>
						</div> -->
					</div>	
				
				</fieldset>
				<br/>
			
				
			</div>
			<div class="col-md-12" id="procurementVoteCol">
			
			<div class="box-header with-border">
			<h4 class="card-subtitle text-green">Tender Details</h4>
			</div>

		<div  class="box-body" >
			<div class="row" id="commandDetails">
				<div class="col-md-12">
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-2 control-label">Tender
							Name</label>
						<div class="col-sm-10" id="tenderNameDiv">
							<input id="tenderName" name="tenderName" type="text"
								class="form-control" required="required"
								readonly="readonly">
						</div>
					</div>

				</div>

				<div class="col-md-6">

					<fieldset>



						<div class="form-group row">
							<label for="userID" class="col-sm-4">Bid Number </label>

							<div class="col-sm-8" id="bidNumberDiv">

								<input id="bidNo" name="bidNo"
									 type="text" class="form-control"
									required="required" readonly="readonly">

							</div>

						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Created By</label>
							<div class="col-sm-8">
								<input id="createdBy" name="createdBy" type="text"
									class="form-control" readonly="readonly">
							</div>
						</div>

						





					</fieldset>
					<br />



				</div>

				<div class="col-md-6">

					<fieldset>




						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Categories</label>
							<div class="col-sm-8">
								<input id="categories" name="categories"
									type="text" class="form-control" 
									readonly="readonly">
							</div>
						</div>



						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Closing
								Date & Time</label>
							<div class="col-sm-8">
								<input id="closing_date" name="closing_date" type="text"
									 class="form-control"
									readonly="readonly">
							</div>
						</div>

						

					</fieldset>







				</div>
				<br />
				<div class="col-md-6">

					<fieldset>




						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">
								Comment </label>
							<div class="col-sm-8">
								<input id="comment" name="comment"
									type="text" class="form-control" required="required"
									readonly="readonly">
							</div>
						</div>



						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">View RFP Details</label>
							<div class="col-sm-8" id="rfpDetailsDiv">
								
							</div>
						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Procurement Request Details</label>
								
							<div class="col-sm-8" id="procurementReqDiv">
								<!-- <input id="procurement_req" name="procurement_req" type="text" class="form-control" readonly="readonly"> -->
							</div>
						</div>
						
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">View MIT Details</label>
								
							<div class="col-sm-8" id="mitDiv">
								
							</div>
						</div>

					</fieldset>







				</div>
				
				<div class="col-md-12">
				

			</div>
			</div>

			<div class="row">
				<div class="col-md-6">
					<fieldset>
						<h5 class="text-green">Tender Cordinator 1 Details</h5>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Name*</label>
							<div class="col-sm-8">
								<input id="cordinate_name" name="cordinate_name" type="text"
									class="form-control" required="required"
									readonly="readonly">
							</div>
						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Designation*</label>
							<div class="col-sm-8">
								<input id="cordinate_destination" name="cordinate_destination"
									type="text"  class="form-control"
									readonly="readonly">
							</div>
						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Email
								*</label>
							<div class="col-sm-8">
								<input id="cordinate_email" name="cordinate_email" type="text"
									 class="form-control"
									readonly="readonly">
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Contact
								No * </label>
							<div class="col-sm-8">
								<input id="cordinate_phon" name="cordinate_phon" type="number"
									 class="form-control" readonly="readonly">
							</div>
						</div>
					</fieldset>
				</div>
				<div class="col-md-6">

					<fieldset>
						<h5 class="text-green">Tender Cordinator 2 Details</h5>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Name*</label>
							<div class="col-sm-8">
								<input id="cordinate2_name" name="cordinate2_name" type="text"
									class="form-control" required="required" readonly="readonly"
									>
							</div>
						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Designation*</label>
							<div class="col-sm-8">
								<input id="cordinate2_destination" name="cordinate2_destination"
									type="text" class="form-control"
									readonly="readonly">
							</div>
						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Email
								*</label>
							<div class="col-sm-8">
								<input id="cordinate2_email" name="cordinate2_email" type="text"
									 class="form-control"
									readonly="readonly">
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Contact
								No * </label>
							<div class="col-sm-8">
								<input id="cordinate2_phon" name="cordinate2_phon" type="number"
									class="form-control" readonly="readonly" >
							</div>
						</div>
					</fieldset>

				</div>

			</div>
					<div class="box-header with-border">
						<h4 class="card-subtitle text-green">Tender Details</h4>
					</div>
				
					<table id="procurementVote" style="width: 100%;" class="table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select">
						<thead>
							<tr class="text-yellow">
								<th>Index</th>
								
								<th>Company name</th>
								<th>Vote to the supplier</th>
								<th>More</th>
							</tr>
						</thead>
						<tbody id="procurementVoteBody">
								
								
						</tbody>
					</table>
				
			
			
			</div>
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

<!--  
**** View Vote moodle ****
-->

<div id="voteModal" class="modal fade" role="dialog">
		<div class="modal-dialog ">
		
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
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Vote for supplier</h1>
								</div>
							</div>
				       
				<div class="row">
						<div class="col-md-12">
							<p class="pull-right" style="margin-bottom: 0"
								id="supplierName">Hello</p>
							 <p class="pull-right" style="margin-bottom: 0">Supplier ID- </p>
							
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
							
							<div class="form-group">
								<label for="comment">Comment</label>
						 </div>
									
						<textarea id="comment_vote" class="form-control" rows="3" ></textarea>
								<br>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer"> <button type="button" style="margin : 5px" id="reject_button" class="btn btn-danger pull-right">Reject</button>&emsp;<strong></strong>
											<button type="button" style="margin : 5px" id="vote_button" class="btn btn-primary pull-right" data-dismiss="modal">Vote</button>  &nbsp; &nbsp;</div>
			</div> 
		</div>
</div> 

<div id="mdl_supplier_registration"
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
									<div class="col-md-6">
										<h5 class="text-green">CAPPEX</h5>
										<div class="box-body">
											<table id="CappexTable"
												class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
												cellspacing="0" width="100%">
												<thead>
													<tr>
														<!-- <th>Company Code</th> -->
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
										
									</div>
									
									<div class="col-md-6">
										<h5 class="text-green">OPPEX</h5>
										<div class="box-body">
											<table id="oppexTable"
												class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
												cellspacing="0" width="100%">
												<thead>
													<tr>
														<!-- <th>Company Code</th> -->
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
									
									</div>
									
									
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
	

<div id="mdl_procurement_req"
		class="modal fade bd-example-modal-lg" role="dialog"
		data-toggle="modal" >
		<div class="modal-dialog modal-lg" style="max-width: 90%">

			<!-- Modal content-->
			<div class="modal-content">
				<div class="modal-header">
					
				</div>
				<div class="modal-body">
					
					<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">Procurement Request</h3>
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
						<label for="inputPassword3" class="col-sm-4 control-label">HOD/ Unit Head Approval</label>
						<div class="col-sm-8">
							<input id="pro_approval" name="pro_approval" type="text" class="form-control" required="required" autocomplete="off">
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
					<div class="form-group row">
						<label for="startDate" class="col-sm-4 control-label">Date</label>
						<div class="col-sm-4 input-group date">
							<div class="input-group-addon">
								<i class="fa fa-calendar"></i>
							</div> 	
								<input class="form-control" autocomplete="off" id="pro_date">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Designation</label>
						<div class="col-sm-8">
							<input id="pro_designation" name="pro_designation" type="text" class="form-control" required="required" autocomplete="off">
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
					<!-- <div class="radio">
						<input type="radio" id="yes_budgeted" value="Yes" name="budgeted"> 
							<label for="yes_budgeted">Yes</label>
					</div> 
					
					<div class="radio">
						<input type="radio" id="no_budgeted" value="No" name="budgeted"> 
							<label for="no_budgeted">No</label>
					</div> -->
						<div class="col-sm-8">
							<input id="budgeted" name="budgeted" type="text" class="form-control" required="required" autocomplete="off" disabled>
						</div>
					</div>
				
				
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Estimated Project Cost (LKR)/Per Annum</label>
						<div class="col-sm-8">
							<input id="pro_projectCost" disabled name="pro_projectCost" type="number" class="form-control" required="required" autocomplete="off">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Existing Supplier</label>
						<div class="col-sm-8">
							<input id="pro_supplier" disabled name="pro_supplier" type="text" class="form-control" required="required" autocomplete="off">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Existing Prices</label>
						<div class="col-sm-8">
							<input id="pro_prices" disabled name="pro_prices" type="number" class="form-control" required="required" autocomplete="off">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="startDate" class="col-sm-4 control-label">Last PC Approved Date/Purchase Date</label>
						<div class="col-sm-4 input-group date">
							<div class="input-group-addon">
								<i class="fa fa-calendar"></i>
							</div> 	
								<input class="form-control" disabled autocomplete="off" id="purchase_date">
						</div>
					</div>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Type</label>
					<!-- <div class="radio">
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
					</div> -->
						<div class="col-sm-8">
							<input id="type" disabled name="type" type="text" class="form-control" required="required">
						</div>
					</div>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Goods & Service Category</label>
						<div class="col-sm-8">
							<input id="goodAndServiceCat" disabled name="goodAndServiceCat" type="text" class="form-control" required="required">
						</div>
					</div>
					
										
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Bidding Period (Minimum 5 working days)</label>
						<div class="col-sm-8">
							<input id="bidding_period" disabled name="bidding_period" type="text" class="form-control" required="required">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Staff contact details for Technical Clarifications</label>
						<div class="col-sm-8">
							<input id="pro_clarifications" disabled name="pro_clarifications" type="text" class="form-control" required="required">
						</div>
					</div>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Sample Requirement</label>
					<!-- <div class="radio">
						<input type="radio" id="sample_yes" value="Yes" name="sample_equirement"> 
							<label for="sample_yes">Yes</label>
					</div> 
					
					<div class="radio">
						<input type="radio" id="sample_no" value="No" name="sample_equirement"> 
							<label for="sample_no">No</label>
					</div> -->
						<div class="col-sm-8">
							<input id="samplerequirement" disabled name="samplerequirement" type="text" class="form-control" required="required">
						</div>
					</div>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Payment Terms (If specific)</label>
						<div class="col-sm-8">
							<input id="payment_terms" disabled name="payment_terms" type="number" class="form-control" required="required">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Quotation Validity Period</label>
						<div class="col-sm-8">
							<input id="quotation" disabled name="quotation" type="text" class="form-control" required="required">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Expected Delivery Period</label>
						<div class="col-sm-8">
							<input id="delivery_period" disabled name="delivery_period" type="text" class="form-control" required="required">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Warranty Period</label>
						<div class="col-sm-8">
							<input id="warranty_period" disabled name="warranty_period" type="text" class="form-control" required="required">
						</div>
					</div>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Pre Bid Meeting Requirement </label>
					<!-- <div class="radio">
						<input type="radio" id="bid_yes" value="true" name="bid_meeting"> 
							<label for="bid_yes">Yes</label>
					</div> 
					
					<div class="radio">
						<input type="radio" id="bid_no" value="true" name="bid_meeting"> 
							<label for="bid_no">No</label>
					</div> -->
						<div class="col-sm-8">
							<input id="meetingReq" disabled name="meetingReq" type="text" class="form-control" required="required">
						</div>
					</div>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Recommended any other vendors in the Market Contact Details (Email)</label>
						<div class="col-sm-8">
							<input id="market_contact" disabled name="market_contact" type="text" class="form-control" required="required">
						</div>
					</div>
					
					
					<div class="box-body">
						<div class="form-group">
							<label for="comment">Any Other Important Noted to Consider</label>
							<textarea id="important_noted" disabled class="form-control" rows="3" ></textarea>
						 </div>
					</div>											 
				</fieldset>
				<br/>
			</div>
			
			
			<div class="col-md-5">
				<fieldset>					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Expenditure</label>
					<!-- <div class="radio">
						<input type="radio" id="expenditure_capex" value="Capex" name="expenditure"> 
							<label for="expenditure_capex">Capex</label>
					</div> 
					
					<div class="radio">
						<input type="radio" id="expenditure_opex" value="Opex" name="expenditure"> 
							<label for="expenditure_opex">Opex</label>
					</div> -->
						<div class="col-sm-8">
							<input id="expenditure" disabled name="expenditure" type="text" class="form-control" required="required">
						</div>
					</div>					
				</fieldset>	
		 </div>
		 
		 <div class="col-md-12">
		 
			 
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
</div>

<div id="mdl_mit" class="modal fade bd-example-modal-lg"
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
									<table id="mit_table"
									class="table table-bordered table-hover display nowrap margin-top-10 table-responsive" 
									cellspacing="0" width="100%">
									<thead>
										<tr class="text-yellow">
											<th>Index</th>
											<th>View Picture</th>
											<th>View File</th>
											<th>Description</th>
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

<!-- Modal for View Picture-->
<div id="mdl_view_Picture" class="modal fade bd-example-modal-lg" role="dialog">
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
									<h1 class="modal-title pull-right" id="mdl_com_name">Picture Upload</h1>
								</div>
							</div>
								<div class="row">
									<div class="col-md-12">
										<p class="pull-right" style="margin-bottom: 0" id="mdl_ii_sup_no">0000000</p>
										<p class="pull-right" style="margin-bottom: 0">Tender Name - </p>
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
									<img src="" alt="Smiley face" height="680" width="680" style="padding:10px" id="imgLocation">
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

<script type="text/javascript">

	$('#titleID').text("Voting to supplier");
	$('#bcumb').text("Voting to supplier");
	

</script>



<script src="resources/js/customjs/procurement/procurementvote.js"></script>
