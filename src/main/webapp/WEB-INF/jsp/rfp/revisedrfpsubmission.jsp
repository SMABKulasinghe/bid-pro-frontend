<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">RFP Details</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<div class="col-md-6" id="rfpDiv">
				<fieldset>
					<h4 class="box-title text-green">RFP Ids</h4>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">
							Select RFP ID* </label>
						<div class="col-sm-8" id="ev_code">
							<select id="rfp_id_details" name="rfp_id_details"
								class="form-control select2" value="" required="required">
							</select>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
		</div>
		
		<div class="box-body" id="rfpdiv">
		
		<div class="box-header with-border">
			
		</div>
		<div class="row">
			<div class="col-md-6">
					
				<fieldset>
					<h4 class="box-title text-green">RFP Details</h4>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> File Name <span style="color: red">*</span>
						</label>
						<div class="col-sm-8">
							<input id="rfp_filename" name="rfp_filename" type="text"
								class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row" id="catDiv">
						<label for="inputPassword3" class="col-sm-4 control-label"> Category <span style="color: red">*</span>
						</label>
						<div class="col-sm-8">
							<select class="custom-select form-control" id="productCategory" name="location">
								<!-- <option>Select a category</option> -->
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
						<label for="inputPassword3" class="col-sm-4 control-label"> Current File <span style="color: red">*</span>
						</label>
						<div class="col-sm-8" id="currentFile">
							
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> Upload File <span style="color: red">*</span>
						</label>
						<div class="col-sm-8">
							<label title="Upload pdf file" 
								class="btn bg-olive"> 
								<input type="file"
								accept="application/pdf" name="upload_file" id="upload_file" onchange="fileValidation()"
								class="btn btn-block bg-olive btn-lg" required="required"> Choose file
							</label>
						</div>
					</div>
					
						
				</fieldset>
				<br/>
				<input id="rfp_prId" name="rfp_prId" type="hidden" class="form-control" required="required">
		</div>
		
		<!-- <div class="col-md-6">
			
				<h4 class="box-title text-green">Adding RFP Heading & Fields</h4>
				
				<div id="addingFiledsectoin">
					<div class="box-body">
					<fieldset>
						<div class="form-group row" id="rfpheadingFields">
						
								<label for="inputPassword3" class="col-sm-4 control-label"> Heading Name *</label>
						 			 <div class="col-sm-8" id="headingNamediv">
						  				<input id="rfp_heading_name" name="rfp_filename" type="text" class="form-control" required="required">
									
						 			 </div>	
						 			 
						 			 
						
							<br><br>
							
							
							
								<label for="inputPassword3" class="col-sm-4 control-label"> Field Name *</label>
								
						 			 <div class="col-sm-8" >
						 			 	
						 			 	<div class="input-group" id="fieldNamediv">
						  				<input id="rfp_fieldName" name="rfp_fieldName" type="text" class="form-control" required="required">
						  				<input type="button" value="Add to Field" id="fieldName" class="btn button-plus" >
										</div>
										
						 			 </div>	 
							
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
				
		</div> -->
			
		</div>
		
				<div class="box-header with-border">
					<h3 class="box-title text-green">RFP Added List</h3>
				</div>
		
				<div class="row">
					<div class="col-md-12">
						<div class="box-body">
							<table id="rfpTable" class="table table-bordered table-hover display nowrap margin-top-10 table-responsive rfpTable" cellspacing="0" width="100%">				
								
								<thead>
									<tr class="text-yellow">
										<th>Title (Heading Name)</th>
										<th>Description (Field Name)</th>
										<th>Update <button class="btn btn-primary add">Add new</button> </th>
										
									</tr>
								</thead>
		
							</table><br>
						  <!-- 	<button type="button" id="confirmButton" class="btn bg-olive">Confirm</button> -->
						</div>
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
	
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">Change the RFP of Tender</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<div class="col-md-6">
				<fieldset>
					<h4 class="box-title text-green">  </h4>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">
							Select Tender ID* </label>
						<div class="col-sm-8" id="ev_code">
							<select id="tender_id_details" name="tender_id_details"
								class="form-control select2"  required="required">
							</select>
						</div>
					</div>
				</fieldset>
			</div>
			
			
		</div>
		<div class="row">
		
			<div class="col-md-6">
				<fieldset>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">
							Select RFP ID* </label>
						<div class="col-sm-8" id="ev_code">
							<select id="rfp_id_for_tender_update" name="rfp_id_for_tender_update"
								class="form-control select2" value="" required="required">
							</select>
						</div>
					</div>
				</fieldset>
			</div>
		
		</div>
		<fieldset class="col-md-12">

			<div class="box-footer">
				<button type="submit" id="submit_button_update_rfp" class="btn btn-info pull-right">Submit</button>
			</div>
					
		</fieldset>
		
		</div>
		
		
		
	</div>
	
</div>



<script type="text/javascript">

	$('#titleID').text("Revised RFP submittion");
	$('#bcumb').text("Revised RFP submittion");
	document.getElementById("submit_button").disabled = false;

</script>

<!-- <script>

</script> -->
<script src="resources/js/customjs/rfp/revisedrfpsubmittion.js"></script>
<script src="https://editor.datatables.net/extensions/Editor/js/dataTables.editor.min.js"></script>
<!-- <script src="resources/js/customjs/tender/financialcodecreation.js"></script> -->

