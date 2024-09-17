<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	
	
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">Upload</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<!-- <div class="col-md-6">
			
					<fieldset>
					
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Select closed Tender  No *</label>
						<div class="col-sm-8" id="tenderIdDiv">
							<select id="procVoteTender" name="procVoteTender"
								 	class="form-control select2" value="" required="required"> </select>
						</div>
						
					</div>	
				
				</fieldset>
				<br/>
			
				
			</div> -->
			<div class="col-md-12">
			<table id="tblTenderDetails" class="table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select">
				<thead>
					<tr class="text-yellow">
						<th>Index</th>
						<th>Tender ID</th>
						
						<th>Tender Name</th>
						<th>RFP Number</th>
						<th>RFP Name</th>
						<th>Files for upload</th>
						<th>Add your file</th>
					</tr>
				</thead>
				<tbody id="tblTenderDetailsBody">
						
						
				</tbody>
			</table>
			</div>
		</div>
		</div>
	</div>
</div>

<div id="upload_additional_file_for_tender" class="modal fade bd-example-modal-lg"
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
																File Names</label>
															<div class="col-sm-10" id="financialCodeDiv">
																
															</div>
														</div>
											</div>
											
											<div class="col-md-6">
														<div class="form-group row">
															<label for="inputPassword3" class="col-sm-4 control-label">
																<br>Upload your file</label>
															<div class="col-sm-10" id="descriptionDiv">
																
																<label title="Upload zip file" 
																	class="btn bg-olive"> <input type="file"
																	accept="application/zip" name="upload_file" id="upload_file" onchange="fileValidation()"
																	class="btn btn-block bg-olive btn-lg" required="required"> Choose file
																</label>
																
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
				<button type="submit" id="create_button"
					class="btn btn-info pull-right">Submit</button>
				
				<!-- <button type="button" id="authrized" class="btn btn-primary pull-right" style="margin-right: 10px" >Authorize</button> -->
				<!-- <button type="button" id="rejected" class="btn btn-danger pull-right" >Reject</button> -->
				
				<!-- <button type="button" id="acceptPartnership"
					class="btn bg-olive pull-right">Send</button> -->
			</div>
		</div>

	</div>
</div>

<script type="text/javascript">
	$('#titleID').text("Upload");
	$('#bcumb').text("Upload");
//	document.getElementById("submit_button").disabled = false;
</script>


</script>
<script src="resources/js/customjs/tender/uploadadditionalfilefortender.js"></script>