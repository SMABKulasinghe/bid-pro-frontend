
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Enter MIT Details</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
			<div class="row">
				<div class="col-md-6">
				<fieldset>
						<h4 class="card-subtitle text-green">Enter MIT Details</h4> <br>
						
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Tender No <span style="color: red">*</span> </label>
						<div class="col-sm-8" id="mit_trnderdiv">
							<select id="mit_tenderid" name="mit_tenderid" class="form-control select2" value="" required="required"> </select>
						</div>
					</div>						
				</fieldset>
				</div>			
		 </div>		
		
		<br>
	<div class="row">
		<div class="box box-info animated fadeInDownBig" id="mitDetails">
					<!-- <div class="box-header with-border">
					<h4 class="card-subtitle">MIT Details</h4>
					</div> -->
		<div class="row">
			<div class="col-md-12">
				<div class="box-body"> <br>
				
					<div class="row">
						<div class="col-md-6">
							<div class="form-group row">
								<label for="inputImage_logo" class="col-sm-4 control-label">Picture Upload</label>
									
								<div class="col-sm-6">
									<label title="Upload image file" for="inputImage_logo"
										class="btn bg-olive"> <input type="file"
										accept="image/*" name="file" id="inputImage_logo"
										class="btn btn-block bg-olive btn-lg" required="required"> Choose Image
									</label>
									<p id="inputImage_logo_name"></p>
								</div>
								
							</div>
						</div>
					</div>
						
						
					<div class="row">
						<div class="col-md-6">
							<div class="form-group row">
								<label for="inputImage_Registration" class="col-sm-4 control-label">File Upload</label>
									
								<div class="col-sm-6">
									<label title="Upload pdf file" 
										class="btn bg-olive"> <input type="file"
										accept="application/pdf" name="file" id="inputImage_File" onchange="fileValidationFileUpload()"
										class="btn btn-block bg-olive btn-lg" required="required"> Choose file
									</label>
									<p id="inputImage_Registration_name"></p>
								</div>
							</div>
						</div>
					</div>	
					
					
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-2 control-label">Description <span style="color: red">*</span></label>
							<div class="col-sm-5" id="mit_descriptiondiv">
								<textarea id="description" name="description" class="form-control"
									 required="required" rows="3" autocomplete="off"></textarea>
							</div>
						</div>	
				</div>
			</div>
		</div>
	  </div>
	</div>
						
				<fieldset class="col-md-12">
					<div class="box-footer">
						<button type="submit" id="mit_submit_button" class="btn btn-info pull-right">Submit</button>
					</div>	
				</fieldset>			
	</div>												
</div>
</div>



<script type="text/javascript">
	$('#titleID').text("Enter MIT Details");
	$('#bcumb').text("Enter MIT Details");
	//document.getElementById("submit_button").disabled = false;
</script>


</script>
<script src="resources/js/customjs/mit/entermitdetails.js"></script>
