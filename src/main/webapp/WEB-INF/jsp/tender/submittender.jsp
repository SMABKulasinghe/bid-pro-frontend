<div class="col-md-12 col-lg-12 animated fadeInLeft">

	<div class="box box-info animated fadeInDownBig" id="userTableDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle text-green">Tender Submission</h4>
		</div>

		<div class="box-body">

			<div class="row">
				<div class="col-md-12">
					<div class="box-body">
						<table id="tenderSubmission"
							class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
							cellspacing="0" width="100%">
							<thead>
								<tr>
									<th class="text-yellow">Bid number</th>
									<th class="text-yellow">Tender name</th>
									<th class="text-yellow">Tender Description</th>
									<th class="text-yellow">Closing Date and Time</th>
									<th class="text-yellow">Action</th>
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
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Submit Tender Documents</h1>
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

									<div class="row">
										<div class="col-md-12">
										
											<div class="form-group row" >
												<label for="inputPassword3" class="col-sm-6 control-label"> Bid number </label>
												<div class="col-sm-6" id="bid_no_div">
													<!-- <input id="bid_no" name="bid_no"
														type="text" class="form-control" required="required"> -->
												</div>
											</div>
											
											<div class="form-group row" >
												<label for="inputPassword3" class="col-sm-6 control-label"> Tender Name </label>
												<div class="col-sm-6" id="tender_name_div">
													<!-- <input id="tender_name" name="tender_name" type="text" class="form-control" required="required"> -->
												</div>
											</div>
											
											<div class="form-group row">
												<label for="inputPassword3" class="col-sm-6 control-label">Upload
													RFP File <span style="color: red">*</span></label>
												<div class="col-sm-6">
													<label title="Upload csv file" 
														class="btn bg-olive"> 
														<input type="file"
														 name="file" id="upload_rfp_file" onchange="fileValidationUploadRfpProfile()" 
														class="btn btn-block bg-olive btn-lg" required="required"/>

													</label>
												</div>
											</div>
											
											<div class="form-group row">
												<label for="inputPassword3" class="col-sm-6 control-label">Upload
													Company Profile </label>
												<div class="col-sm-6">
													<label title="Upload pdf file" 
														class="btn bg-olive"> 
														<input type="file"
														 name="file" id="upload_company_profile" onchange="fileValidationCompanyProfile()" 
														class="btn btn-block bg-olive btn-lg" required="required"/>

													</label>
												</div>
											</div>




											<div class="form-group row">
												<label for="inputPassword3" class="col-sm-6 control-label">Upload
													Financials File </label>
												<div class="col-sm-6">
													<label title="Upload pdf file" 
														class="btn bg-olive"> <input type="file"
														 name="file" id="upload_financial_file"  onchange="fileValidationUploadFinancialFile()"
														class="btn btn-block bg-olive btn-lg"/>

													</label>
												</div>
											</div>
											

										<!-- </div>
										<div class="col-md-6"> -->
											<div class="form-group row">
												<label for="inputPassword3" class="col-sm-6 control-label">Upload
													Support Document 1 File </label>
												<div class="col-sm-6">
													<label title="Upload pdf file" 
														class="btn bg-olive"> <input type="file"
														 name="file" id="upload_support_doc1" onchange="fileValidationSupportDoc1()"
														class="btn btn-block bg-olive btn-lg" />

													</label>
												</div>
											</div>

											<div class="form-group row">
												<label for="inputPassword3" class="col-sm-6 control-label">Upload
													Support Document 2 File </label>
												<div class="col-sm-6">
													<label title="Upload pdf file" 
														class="btn bg-olive"> <input type="file"
														 name="file" id="upload_support_doc2" onchange="fileValidationSupportDoc2()"
														class="btn btn-block bg-olive btn-lg" />

													</label>
												</div>
											</div>

											<div class="form-group row">
												<label for="inputPassword3" class="col-sm-6 control-label">Upload
													Support Document 3 File </label>
												<div class="col-sm-6">
													<label title="Upload pdf file" 
														class="btn bg-olive"> <input type="file"
														 name="file" id="upload_support_doc3" onchange="fileValidationSupportDoc3()"
														class="btn btn-block bg-olive btn-lg" />

													</label>
												</div>
											</div>
											
											
											<!-- <div class="form-group row">
												<label for="inputPassword3" class="col-sm-6 control-label">Upload
													sample <span style="color: red">*</span></label>
												<div class="col-sm-6">
													<label title="Upload pdf file" 
														class="btn bg-olive"> <input type="file"
														 name="file" id="sample_file" onchange="sampleFile(this)"
														class="btn btn-block bg-olive btn-lg" />

													</label>
												</div>
											</div> -->

										</div>
									</div>
									
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


<!-- <div id="wait" style="display:none;width:69px;height:89px;border:1px solid black;position:absolute;top:50%;left:50%;padding:2px;"><img src='https://www.w3schools.com/jquery/demo_wait.gif' width="64" height="64" /><br>Loading..</div> -->




<script type="text/javascript">
	
	$('#titleID').text("Tender Submit");
	$('#bcumb').text("Tender Submit");
	
</script>

<script>
function formclear(){
	
	$('#upload_company_profile').val('');
	$('#upload_financial_file').val('');
	$('#upload_rfp_file').val('');
	$('#upload_support_doc1').val('');
	$('#upload_support_doc2').val('');
	$('#upload_support_doc3').val('');
	
}
</script>
<script src="resources/js/customjs/tender/submittender.js"></script>

