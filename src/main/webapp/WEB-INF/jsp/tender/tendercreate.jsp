<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	
	<div class="box box-info" >
	<form name="tender-form">
		<div class="box-header with-border">
			<h3 class="box-title">Create Tender Details</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
			<div class="row">

				<div class="col-md-12">
					<h5 class=" text-green ">Tender Details Informations</h5>
                      <br>
					<div class="form-group row">
						<label for="userID" class="col-sm-2">Name *</label>
						<div class="col-sm-10">
							<input id="tendername" name="tendername" autocomplete="off" type="text"
								class="form-control" required="required">
						</div>
					</div>					

					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-2 control-label">
							Description * </label>
						<div class="col-sm-10">
							<input id="tender_description" autocomplete="off" name="tender_description"
								type="text" class="form-control" required="required">
						</div>
					</div>
				</div>

				<div class="col-md-6">

					<fieldset>

<!-- 
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Tender
								No *</label>
							<div class="col-sm-8">
								<input id="bid_no" autocomplete="off" name="bid_no" type="text"
									class="form-control" required="required">
							</div>
						</div>
 -->
 						
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Quantity *</label>
							<div class="col-sm-8">
								<input id="qty" autocomplete="off" name="qty" type="number"
									class="form-control" required="required">
							</div>
						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Eligible Category *</label>
							<div class="col-sm-8">
								<select class="custom-select form-control" id="eligible_category" name="eligible_cat">
									<option value="">Select Category</option>

								</select>
							</div>
						</div>
						
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Sub Category *</label>
							<div class="col-sm-8">
								<select class="custom-select form-control" id="tender_productSubCategory" name="tender_productSubCategory">
									<option value="">Select Sub Category</option>
								</select>
							</div>
						</div>
						
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">RFP *</label>
							<div class="col-sm-8">
								<select class="custom-select form-control" id="rfp_id" name="rfpid">
									<option value="">Select RFP ID</option>
									</select>
						</div>
						</div>
						
						<!-- <div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Product Categories*</label>
							<label for="inputPassword3" class="col-sm-4 control-label">Product Categories</label>
							<div class="col-sm-8">
								<select class="custom-select form-control"  id="productlist"  name="productlist">
									<option value="">Select Product Category</option>
								</select>
							</div>
						</div> -->
						
						
						<div class="form-group row">
							<label for="startDate" class="col-sm-4 control-label">Closing Date *</label>
						<div class="col-sm-4 input-group date">
								<div class="input-group-addon">
									<i class="fa fa-calendar"></i>
								</div> 	
								<input class="form-control" autocomplete="off"
									id="closing_date">
							</div>
						</div>

				<!--		 <div class="form-group row">
							<label for="startDate" class="col-sm-4 control-label">Closing
								Time *</label>
							<div class="col-sm-4">
								<input type="time" class="form-control pull-right"
									id="closing_time" />
							</div>
						</div> 
				-->		
					
						<div class="form-group row">
							<label for="closing_time_1"  class="col-sm-4 control-label">Closing Time *</label>
								<div class="col-sm-8">
								<input type="time" autocomplete="off" id="closing_time_1" />
						</div>
						</div>
					

					</fieldset>
					<br />

					<fieldset>
						<h5 class=" text-green ">Tender Coordinator 1 Details</h5>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Name*</label>
							<div class="col-sm-8">
								<input id="cordinate_name" name="cordinate_name" autocomplete="off" type="text"
									class="form-control" required="required">
							</div>
						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Designation*</label>
							<div class="col-sm-8">
								<input id="cordinate_destination" autocomplete="off" name="cordinate_destination"
									type="text" class="form-control">
							</div>
						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Email
								*</label>
							<div class="col-sm-8">
								<input id=cordinate_email autocomplete="off" name="cordinate_email" type="text"
									class="form-control">
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Contact
								No * </label>
							<div class="col-sm-8">
								<input id="cordinate_phon" autocomplete="off" name="cordinate_phon" type="number"
									class="form-control">
							</div>
						</div>
					</fieldset>

				</div>

				<div class="col-md-6">

					<fieldset>
					 <br> 
						<h5 class="  text-green">Upload Details</h5>
                     <br> 
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Support
								Doc 1 </label>
							<div class="col-sm-8">
								<label title="Upload pdf file"
									class="btn bg-olive"> <input type="file"
									 name="file" id="upload_support1" onchange="fileValidationCompanyProfile1()" 
									class="btn btn-block bg-olive btn-lg">

								</label>
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Support
								Doc 2 </label>
							<div class="col-sm-8">
								<label title="Upload pdf file" 
									class="btn bg-olive"> <input type="file"
									name="file" id="upload_support2" onchange="fileValidationCompanyProfile2()"
									class="btn btn-block  bg-olive btn-lg">

								</label>
							</div>
							
							<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label"></label>
							<div class="col-sm-8">
								<label>
 
								</label>
							</div>
						</div> 
						</div>
					
<br> <br> <br> <br> <br> 

					</fieldset>
					
				

					<fieldset>
						<h5 class=" text-green ">Tender Coordinator 2 Details</h5>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Name*</label>
							<div class="col-sm-8">
								<input id="cordinate2_name" name="cordinate2_name" type="text"
									class="form-control" required="required">
							</div>
						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Designation*</label>
							<div class="col-sm-8">
								<input id="cordinate2_destination" autocomplete="off" name="cordinate2_destination"
									type="text" class="form-control">
							</div>
						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Email
								*</label>
							<div class="col-sm-8">
								<input id="cordinate2_email" autocomplete="off" name="cordinate2_email" type="text"
									class="form-control">
							</div>
						</div>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Contact
								No * </label>
							<div class="col-sm-8">
								<input id="cordinate2_phon" autocomplete="off" name="cordinate2_phon" type="number"
									class="form-control">
							</div>
						</div>
					</fieldset>





				</div>




			</div>
			</div>

			<div class="box-footer">
				<a href="index"><button type="submit" class="btn bg-purple">Back</button></a>
				<button type="button" onclick="formclear()" class="btn btn-warning">Clear</button>
				<button type="button" id="submit_button"
					class="btn btn-primary pull-right">Submit</button>
			</div>
</form>
		</div>


	</div>



<script type="text/javascript">
	$('#titleID').text("Tender Registration");
	$('#bcumb').text("Tender Registration");
	//document.getElementById("submit_button").disabled = true;

	//$('#closing_time').timepicker();
</script>

<script>
	function formclear() {

		$('#tendername').val('');
		$('#bid_no').val('');
		$('#tender_description').val('');
		$('#productCatergory').val('');
		$('#productSubCategory').val('');
		$('#product').val('');
		$('#closing_date').val('');
		$('#closing_time_1').val('');

		$('#upload_rpf').val('');
		$('#upload_support1').val('');
		$('#upload_support2').val('');
		$('#cordinate_name').val('');
		$('#cordinate_destination').val('');
		$('#cordinate_email').val('');
		$('#cordinate_phon').val('');

		$('#cordinate2_name').val('');
		$('#cordinate2_destination').val('');
		$('#cordinate2_email').val('');
		$('#cordinate2_phon').val('');

	}
</script>
<script src="resources/js/customjs/tender/tendercreation.js"></script>


