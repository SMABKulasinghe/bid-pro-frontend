
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Submit Tender</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<div class="col-md-6">
			
					<fieldset>
					<h5 class=" ">Tender Details Information</h5>
					<div class="form-group row">
						<label for="userID" class="col-sm-4">Name *</label>

						<div class="col-sm-8">
							<!-- <input id="supplier_code" name="supplier_code" type="number"
								class="form-control" required="required"> -->
								<select class="form-control m-b" name="tendername"
										id="tendername" required="required">
						</select>
						</div>
						
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Bid  No *</label>
						<div class="col-sm-8">
							<input id="bid_no" name="bid_no"
								type="text" class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> Description *
						</label>
						<div class="col-sm-8">
							<input id="tender_description" name="tender_description" type="text"
								class="form-control" required="required">
						</div>
					</div>
						<div class="form-group row">
								<label for="inputPassword3" class="col-sm-4 control-label">Eligible Category *</label>
								<div class="col-sm-8">
									<select class="form-control m-b" name="eligible_category"
										id="eligible_category" required="required">
										<option value='empty'>Select Eligible Category</option>
										<option value='ITH'>IT Hardware</option>
										<option value='ITS'>IT Software</option>
										<option value='ITST'>IT Software tool </option>
										<option value='AC'>AC</option>
										<option value='FUR'>Furniture</option>
										<option value='US'>Utility service</option>
									</select>
								</div>
							</div>
							
								<div class="form-group row">
								<label for="inputPassword3" class="col-sm-4 control-label">Sub Category *</label>
								<div class="col-sm-8">
									<select class="form-control m-b" name="sub_category"
										id="sub_category" required="required">
										<option value='empty'>Select Sub Category</option>
										<option value='ITH'>IT Hardware</option>
										<option value='ITS'>IT Software</option>
										<option value='ITST'>IT Software tool </option>
										<option value='AC'>AC</option>
										<option value='FUR'>Furniture</option>
										<option value='US'>Utility service</option>
									</select>
								</div>
							</div>
					<div class="form-group row">
								<label for="inputPassword3" class="col-sm-4 control-label">Product Categories*</label>
								<div class="col-sm-8">
									<select class="form-control m-b" name="product"
										id="product" required="required">
										<option value='empty'>Select Product Categories</option>
										<option value='ITH'>IT Hardware</option>
										<option value='ITS'>IT Software</option>
										<option value='ITST'>IT Software tool </option>
										<option value='AC'>AC</option>
										<option value='FUR'>Furniture</option>
										<option value='US'>Utility service</option>
									</select>
								</div>
							</div>
					<div class="form-group row">
						<label for="startDate" class="col-sm-4 control-label">Closing Date & Time *</label>
						<div class="col-sm-8 input-group date">
							<div class="input-group-addon">
		                    	<i class="fa fa-calendar"></i>
		                  	</div>
							<input type="text" class="form-control pull-right" id="closing_date">
						</div>
					</div>
					<!-- <div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Expiration Date </label>
						<div class="col-sm-9">
							<input id="expiration_date" name="expiration_date" type="text"
								class="form-control" required="required">
						</div>
					</div> -->
					<div class="form-group row">
						<label for="Expiration" class="col-sm-4 control-label">Expiration Date *</label>
						<div class="col-sm-8 input-group date">
							<div class="input-group-addon">
		                    	<i class="fa fa-calendar"></i>
		                  	</div>
							<input type="text" class="form-control pull-right" id="expiration_date">
						</div>
					</div>
				</fieldset>
				<br/>
			 
				
				 <fieldset>
				<h5 class=" ">Upload Details</h5> 
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Upload RFP*</label>
						<div class="col-sm-8">
							<label title="Upload image file" for="inputImage"
								class="btn bg-olive"> <input type="file"
								accept="image/*" name="file" id="upload_rpf" class="btn btn-block  bg-olive btn-lg">
								
							</label>
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Upload Support Doc 1 *</label>
						<div class="col-sm-8">
							<label title="Upload image file" for="inputImage"
								class="btn bg-olive"> <input type="file"
								accept="image/*" name="file" id="upload_support1" class="btn btn-block bg-olive btn-lg">
								 
							</label>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Upload Support Doc 2 *</label>
						<div class="col-sm-8">
							<label title="Upload image file" for="inputImage"
								class="btn bg-olive"> <input type="file"
								accept="image/*" name="file" id="upload_support2" class="btn btn-block  bg-olive btn-lg">
								
							</label>
						</div>
					</div>

				</fieldset> 
					<fieldset>
			
					<h5 class=" ">Please confirm the  Details</h5>
					<input id="acceptTerms" name="acceptTerms" type="checkbox" class="">
					<label for="acceptTerms">I confirm that all information supplied above is correct and accurate</label> <br>

					<div class="box-footer">
					<a href="index"><button type="submit" class="btn bg-purple">Back</button></a>
						<button  type="button" onclick="formclear()"  class="btn btn-warning">Clear</button>
						<button type="button" id="submit_button"class="btn btn-primary pull-right">Submit
						</button>
					</div>
				</fieldset> 
				
			</div>

			<div class="col-md-6">
				
			 	<fieldset>
					<h5 class=" ">Tender Cordinator 1 Details</h5>
				
							<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Name*</label>
						<div class="col-sm-8">
							<input id="cordinate_name" name="cordinate_name" type="text"
								class="form-control" required="required">
						</div>
					</div>
							
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Designation*</label>
						<div class="col-sm-8">
							<input id="cordinate_destination" name="cordinate_destination" type="text"
								class="form-control">
						</div>
					</div>
	
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Email *</label>
						<div class="col-sm-8">
							<input id="cordinate_email" name="cordinate_email" type="text"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Contact No * </label>
						<div class="col-sm-8">
							<input id="cordinate_phon" name="cordinate_phon" type="number"
								class="form-control">
						</div>
					</div>
		
				
				</fieldset>
				
				<fieldset>
					<h5 class=" ">Tender Cordinator 2 Details</h5>
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
							<input id="cordinate2_destination" name="cordinate2_destination" type="text"
								class="form-control">
						</div>
					</div>
	
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Email *</label>
						<div class="col-sm-8">
							<input id="cordinate2_email" name="cordinate2_email" type="text"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Contact No * </label>
						<div class="col-sm-8">
							<input id="cordinate2_phon" name="cordinate2_phon" type="number"
								class="form-control">
						</div>
					</div>
				</fieldset> 
				
				
				

			

			</div>

		</div>
		</div>
	</div>
</div>

<script type="text/javascript">

	$('#titleID').text("Tender Details");
	$('#bcumb').text("Tender Details");
	document.getElementById("submit_button").disabled = true;

</script>

<script>

function formclear(){
	$("#acceptTerms").prop("checked", false);
	$('#contract_no').val('');
	$('#contract_description').val('');
	$('#category').val('');
	$('#start_date').val('');
	$('#expiration_date').val('');
	$('#board_approval_no').val('');
	$('#board_paper_date').val('');
	/* $('#board_approval_date').val(''); */
	$('#board_a_date').val('');
	$('#board_paper_originated_by').val('');
	$('#special_remarks').val('');
	$('#upload_board_approval').val('');
	$('#upload_contract').val('');
	$('#payment_type').val('');
	$('#amount').val('');
	$('#annual_payment_amount').val('');
	$('#conversion_rate').val('');
	$('#purchase_order_date').val('');
	$('#purchase_order_number').val('');
	$('#contract_signed_company').val('');
	$('#designation_company').val('');
	$('#contract_signed_supplier').val('');
	$('#designation_supplier').val('');
}
</script>
<script src="resources/js/customjs/contract/contractcreation.js"></script>


