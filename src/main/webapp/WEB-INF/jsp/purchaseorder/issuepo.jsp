<!-- left column -->
<div class="col-md-12 col-lg-12 animated fadeInLeft">
	<div class="box box-default">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">PO Details</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			
			<div class="col-md-6">
			
				<fieldset>
					<h5 class="text-green">Select Tender</h5>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Qualified Tender No *</label>
						<div class="col-sm-8" id="tenderIdDiv">
							<select id="tenderIddd" name="tenderIddd"
								 	class="form-control select2" value="" required="required"> </select>
					</div>
							
				</fieldset>
			
			</div>
			
		</div>
		<div id="forHide">
		<div class="row" id="poForm">
			
			<div class="col-md-6">
					
				<fieldset>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Tender Name </label>
						<div class="col-sm-8">
							<input id="tenderName" name="tenderName"
								type="text" class="form-control" required="required" disabled>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> Category
						</label>
						<div class="col-sm-8">
							<input id="category" name="category" type="text"
								class="form-control" required="required" disabled>
						</div>
					</div>
					<!-- <div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> PO number *
						</label>
						<div class="col-sm-8">
							<input id="poNumber" name="poNumber" type="text"
								class="form-control" required="required" >
						</div>
					</div> -->
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> Quantity *
						</label>
						<div class="col-sm-8">
							<input id="qty" name="qty" type="number"
								class="form-control" required="required" >
						</div>
					</div>
					<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label"> Batch File *
							</label>
							<div class="col-sm-8">
								<label title="Upload file" for="inputFile"
									class="btn bg-olive"> <input type="file"
									accept="file/*" name="m_batchfile" id="m_batchfile" class="btn btn-block  bg-olive btn-lg"
									onchange="fileValidationBatchFile()">
								</label>
							</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> RFP File Name
						</label>
						<div class="col-sm-8">
							<input id="rfp_filename" name="rfp_filename" type="text"
								class="form-control" required="required" disabled>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> Unit Price (LKR)
						</label>
						<div class="col-sm-8">
							<input id="unitPriceLkr" name="unitPriceLkr" type="text"
								class="form-control" required="required" disabled>
						</div>
					</div>
					
					
						
						
				</fieldset>
				<br/>
				
		</div>
		
		<div class="col-md-6">
			
				
				<!-- <div  class="box-body"> -->
				<!-- <div id="setofHeadingandFileds">	 -->
				<div id="addingFiledsectoin">
					<div class="box-body">
					<fieldset>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label"> Qualified Supplier *
							</label>
							<div class="col-sm-8">
								<input id="qualifiedSup" name="qualifiedSup" type="text"
									class="form-control" required="required" disabled>
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Procurement Board Paper</label>
							<div class="col-sm-8" id="procurementBoardPaperDiv">
								
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Cappex file</label>
							<div class="col-sm-8" id="cappexFileDiv">
								
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Oppex file</label>
							<div class="col-sm-8" id="oppexFileDiv">
								
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Memo file</label>
							<div class="col-sm-8" id="memoFileDiv">
								
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">RFP </label>
							<div class="col-sm-8" id="rfpDetailsDiv">
								<!-- <input id="rfp_no" name="rfp_no"
									type="text" class="form-control" required="required"> -->
							</div>
						</div>
						
							
					</fieldset>
					
								
					</div>
					
					
				</div>
				
				
				
				
					 
					 
				
				
			 </div>
				
			
		</div>
		
		<div class="row">
			
			<div class="col-md-6">
			
				<fieldset>
					<h5 class="text-green">Terms & Conditions</h5>
					<div id="termsAndConditionsDiv"></div>
					<!-- <div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> Delivery 
						</label>
						<div class="col-sm-8">
							<input id="delivery" name="delivery" type="text"
								class="form-control" required="required" >
						</div>	
					</div>
					<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label"> Warranty 
							</label>
							<div class="col-sm-8">
								<input id="warranty" name="warranty" type="text"
									class="form-control" required="required" >
							</div>	
					</div>
					<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label"> Payment Term 
							</label>
							<div class="col-sm-8">
								<input id="paymentTerms" name="paymentTerms" type="text"
									class="form-control" required="required" >
							</div>	
					</div>
					<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label"> Bank VAT no mention on invoice 
							</label>
							<div class="col-sm-8">
								<input id="bankVat" name="bankVat" type="text"
									class="form-control" required="required" >
							</div>	
					</div>
					<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label"> Delivery Delay Penalty 
							</label>
							<div class="col-sm-8">
								<input id="ddPenalty" name="ddPenalty" type="number"
									class="form-control" required="required" >
							</div>	
					</div> -->
							
				</fieldset>
			
			</div>
			
			
		</div>
		
		
		<fieldset class="col-md-12">

					<div class="box-footer">
						<!-- <button type="submit" class="btn btn-default">Cancel</button> -->
						<button type="submit" id="submit_button" class="btn btn-info pull-right">Submit</button>
					</div>
					
		</fieldset>
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
				<button type="button" onclick="createPDF()" id="create_pdf" class="btn bg-olive pull-right">Create PDF</button>
					
			</div>
		</div>

	</div>
</div>

<script type="text/javascript">

	$('#titleID').text("Issue Purchase Order");
	$('#bcumb').text("Issue PO");
	

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
<script src="resources/js/customjs/purchaseorder/issuepo.js"></script>
