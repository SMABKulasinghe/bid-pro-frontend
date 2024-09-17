<!-- left column -->
<div class="col-md-12 col-lg-12 animated fadeInLeft">
	
	<div class="box box-default">
		<!-- Horizontal Form -->
		<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title text-green">Additional Files Upload for Tender</h3>
			</div>
			<!-- /.box-header -->
			<!-- form start -->
			<div class="box-body">
			<div class="row">
				
				<div class="col-md-6">
				
					<fieldset>
						<h5 class="text-green">Select Tender</h5>
						
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Select Tender No *</label>
							<div class="col-sm-8" id="tenderIdDiv">
								<select id="tender_id_for_aditional_details_3" name="tender_id_for_aditional_details_3"
									 	class="form-control select2" value="" required="required"> </select>
							</div>
						</div>
						
						<h5 class="text-green">Files</h5>
						
						<div id="fileNameDiv">
						
							<!-- <div class="form-group row">
								<label for="inputPassword3" class="col-sm-4 control-label">File Name *</label>
								<div class="col-sm-8" id="">
									<label title="Upload PDF file" for="inputFile"
									class="btn bg-olive"> <input type="file"
									accept="file/*" name="m_batchfile" id="m_batchfile" class="btn btn-block  bg-olive btn-lg">
									</label>
								</div>
							</div> -->
						
						</div>
						
						
					</fieldset>
				
				</div>
				
			</div>
			
			
			
			<fieldset class="col-md-12">
	
				<div class="box-footer">
					<!-- <button type="submit" class="btn btn-default">Cancel</button> -->
					<button type="submit" id="submit_button_for_adding_filesr" class="btn btn-info pull-right">Submit</button>
				</div>
						
			</fieldset>
		</div>
		</div>
	</div>
	
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">View Additional Files Per Tender</h3>
		</div>
		
		<div class="box-body">
		<div class="row">
		
			<div class="col-md-12">
				
				<div style="margin-top: 40px" class="form-group row">
					<label for="userID" class="col-sm-3 control-label">Select Tender No *</label>

					<div class="col-sm-6" id="getTenderIdVal">
						<select id="tender_id_for_aditional_details_2" name="tender_id_for_aditional_details_2"
							class="form-control select2" required="required"> </select>
					</div>
					<button type="submit" id="searchUserIDButton"
						class="btn btn-info pull-right">SUBMIT</button>
				</div>
				
			</div>
			<div class="col-md-12" id="adtionalDataDiv">
				<table id="aditionalFileParamTble" class="table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select">
				<thead>
					<tr class="text-green">
						<th>Index</th>
						<th>File Name</th>
						<th>Uploaded File</th>
						
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


<div id="submit_additional_files_edit" class="modal fade bd-example-modal-lg"
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
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Additional File Name Edit</h1>
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
											<div class="col-md-12">
														<div class="form-group row">
															<label for="inputPassword3" class="col-sm-4 control-label">
																Additional File Name</label>
															<div class="col-sm-10" id="additionalFileNameDiv">
																
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
				<button type="submit" id="edit_button"
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

	$('#titleID').text("Aditional Files For Tender");
	$('#bcumb').text("Aditional Files For Tender");
	

</script>

<script>

function formclear(){
	$('#m_batchfile').val('');
	$('#poNumber').val('');
	$('#qty').val('');
	$('#supplierId').val('');
	$('#tenderId').val('');
	$('#rfp_no').val('');
	$('#tenderIddd').val('');
}
</script>
<script src="resources/js/customjs/tender/aditionalfileuploadfortender.js"></script>
