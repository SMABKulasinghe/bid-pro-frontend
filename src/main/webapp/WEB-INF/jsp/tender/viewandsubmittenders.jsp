<div class="col-md-12 col-lg-12 animated fadeInLeft">
	<div class="box box-default">

		<div class="box box-info">
			<div class="box-header with-border">
				<h4 class="card-subtitle text-green">View & Download Closed Tenders</h4>
			</div>
			<div class="">
				<h5 class="text-green"></h5>
			</div>
			<div class="row">

				<div class="col-md-9">
					<div class="box-body">
						<fieldset>


							<div style="margin-top: 40px" class="form-group row">
								<label for="userID" class="col-sm-3 control-label">Submitted Tender No *</label>

								<div class="col-sm-5" id="getTenderIdVal">
									<!-- <input type="text" class="form-control" id="tenderno"
										value="TR001" name="tenderno" placeholder="Tender No"
										autocomplete="off"> -->
										<select id="tenderId" name="tenderId"
								 		class="form-control select2" value="" required="required"> </select>
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
			</div>
		</div>
	</div>


	<div class="box box-info animated fadeInDownBig" id="userTableDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle text-green">Tender Details</h4>
		</div>

		<div class="box-body" >
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
			<div class="row">
				<div class="col-md-12">
					<h5 class="text-green">Tender Participants</h5>
				</div>
			</div>

			<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="tenderSubmissionsTable"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr class="text-yellow">
								<th>Index</th>
								<th>Supplier Name</th>
								<th>Phone number</th>
								<th>Email</th>
								<!-- <th>Tender Submitted User name</th> -->
								
								<!-- <th>Financial File</th> -->
								<!-- <th>Company Profile</th> -->
								<!-- <th>RFP File</th> -->
								<!-- <th>Support Doc1</th> -->
								<!-- <th>Support Doc2</th> -->
								<!-- <th>Support Doc3</th> -->
								
								<th>More</th>
							</tr>
						</thead>

						<tbody>
							<!-- <tr>
								<td>P12501</td>
								<td>OLAK</td>
								<td>25/03/2022</td>
								<td>9:47 AM</td>
								<td>F453</td>
								<th>Done</th>
								<th><select name="cars" id="cars">
								    <option >Disqualified</option>
								    <option >Shortlisted</option>
								    <option >Selected</option>
							  		</select>
							  	</th>
							  	<th>OK</th>
							  	<th>OK</th>
							  	<th>OK</th>
							  	<th> ... </th>
							</tr>
							<tr>
								<td>P14501</td>
								<td>ASKPI</td>
								<td>14/01/2022</td>
								<td>12:17 AM</td>
								<td>F363</td>
								<th>Done</th>
								<th><select name="cars" id="cars">
								    <option >Disqualified</option>
								    <option >Shortlisted</option>
								    <option >Selected</option>
							  		</select>
							  	</th>
							  	<th>OK</th>
							  	<th>OK</th>
							  	<th>OK</th>
							  	<th> ... </th>
							</tr>
							<tr>
								<td>P19601</td>
								<td>Onsys</td>
								<td>08/02/2022</td>
								<td>9:47 AM</td>
								<td>F983</td>
								<th>Done</th>
								<th><select name="cars" id="cars">
								    <option >Disqualified</option>
								    <option >Shortlisted</option>
								    <option >Selected</option>
							  		</select>
							  	</th>
							  	<th>OK</th>
							  	<th>OK</th>
							  	<th>OK</th>
							  	<th> ... </th>
							</tr> -->
						</tbody>
					</table>
					
				</div>
			</div>

		</div>





		<!-- 	<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="fileViewTable"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr class="text-yellow">
								<th>Index</th>
								<th>Supplier Name</th>
								<th>Financial Document</th>
						
							</tr>
						</thead>

						<tbody>
			
						</tbody>
					</table>
					
				</div>
			</div>

		</div> -->

			<!-- <div class="row">
				<div class="col-md-12">

					<div class="box-header with-border">
						<h4 class="card-subtitle">Download Attachments</h4>
					</div>
					<div class="box-body">

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Download RFP Responses
								</label>
							<div class="col-sm-6">
								<button type="submit" id="download_fileformats_btn"
									class="btn btn-info pull-left">Download File</button>

							</div>
						</div>


						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Download Financials</label>
							<div class="col-sm-6">
								<button type="submit" id="download_fileformats_btn"
									class="btn btn-info pull-left">Download File</button>

							</div>
						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Download Company Profile
								</label>
							<div class="col-sm-6">
								<button type="submit" id="download_fileformats_btn"
									class="btn btn-info pull-left">Download File</button>

							</div>
						</div>
						
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Download other Document</label>
							<div class="col-sm-6">
								<button type="submit" id="download_fileformats_btn"
									class="btn btn-info pull-left">Download File</button>

							</div>
						</div>
					

					</div>
				</div>
			</div> -->

			<!-- <fieldset>



				<div class="box-footer">
					<div class="form-group row">
						<label for="slc_ii_company" class="col-sm-3 control-label">
							Resonse</label>
						<div class="col-sm-5">
							<select class="form-control m-b" name="user_role_name"
								id="slc_ii_company" required="required">
								<option value='empty'>Select Resonse</option>
								<option value='A'>Will not participate</option>
								<option value='B'>Consider later</option>
								<option value='C'>Will Participate</option>
							</select>
						</div>
					</div>

					<button type="button" id="submit_button"
						class="btn btn-primary pull-right">Submit</button>
				</div>
			</fieldset> -->

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
												<!-- <p id="add1" class="pull-right" style="font-size: 12px">No 04, Dias Building, 2nd Floor, S De S Jayasinghe Mawatha</p> -->
											</div>
										</div>
										<div class="row" style="height: 15px;">
											<div class="col-md-12" id="amountUSDOfallDiv">
												<!-- <p id="add2" class="pull-right" style="font-size: 12px"> Kohuwala, Nugegoda</p> -->
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


<!-- <script
	src="resources/assets/vendor_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script
	src="resources/assets/vendor_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/media/js/jquery.dataTables.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/dataTables.buttons.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.flash.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/jszip.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/pdfmake.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/vfs_fonts.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.html5.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.print.min.js"></script>
<script src="resources/js/pages/data-table.js"></script>

<script src="resources/js/customjs/tender/viewanddownloadtenders.js"></script> -->


<script src="resources/js/customjs/tender/viewandsubmittenders.js"></script>






<script type="text/javascript">
	$('#titleID').text("View & Download Closed Tenders");
	$('#bcumb').text("View & Download Closed Tenders");
</script>



<script>
function formclear(){
	
	$('#btnMore').val('');
	
}
</script>
