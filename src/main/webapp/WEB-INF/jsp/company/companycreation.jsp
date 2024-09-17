
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- HorizontalForm -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h4 class="card-subtitle">Create Company</h4>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="row">
			<div class="col-md-6">
				<fieldset>
					<h5 class="">Basic Information</h5>
					<div class="form-group row">
						<label for="userID" class="col-sm-4">Company Code <span style="color: red">*</span></label>
						<div class="col-sm-8">
							<input id="company_code" name="company_code" type="text"
								class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<div class="col-sm-4">
							<label for="inputPassword3" class="control-label">Company Name <span style="color: red">*</span></label>
						</div>
						<div class="col-sm-8">
							<input id="company_name" name="company_name"
								type="text" class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Company Type<span style="color: red">*</span></label>
						<div class="col-sm-8">
									<select class="form-control m-b" name="company_type"
										id="company_type" required="required">
										<option value=''>Select Type</option>
										<option value='G'>Group of Company </option>
										<option value='S'>Single</option>
									</select>
								</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Registration No<span style="color: red">*</span></label>
						<div class="col-sm-8">
							<input id="company_registration_no" name="company_registration_no" type="text"
								class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Registered Date</label>
						<div class="col-sm-8 input-group date">
							<div class="input-group-addon">
		                    	<i class="fa fa-calendar"></i>
		                  	</div>
							<input type="text" class="form-control pull-right" id="register_datepicker">
						</div>
					</div>
				</fieldset>
		
				<fieldset>
					<h5 class="">Contact Information</h5>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Phone No 1 <span style="color: red">*</span></label>
						<div class="col-sm-8">
							<input id="company_phone1" name="company_phone1" type="number"
								class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Phone No 2</label>
						<div class="col-sm-8">
							<input id="company_phone2" name="company_phone2" type="number"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Phone No 3</label>
						<div class="col-sm-8">
							<input id="company_phone3" name="company_phone3" type="number"
								class="form-control">
						</div>
					</div>
				</fieldset>

				<fieldset>
					<h5 class="">Bank Account Details</h5>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Bank Account No</label>
						<div class="col-sm-8">
							<input id="company_bank_account_no" name="company_bank_account_no" type="number"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Bank Name</label>
						<div class="col-sm-8">
							<input id="company_bank_name" name="company_bank_name" type="text"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Bank Branch Name</label>
						<div class="col-sm-8">
							<input id="company_bank_branch_name" name="company_bank_branch_name" type="text"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Bank Branch Code</label>
						<div class="col-sm-8">
							<input id="company_bank_branch_code" name="company_bank_branch_code"
								type="number" class="form-control">
						</div>
					</div>
				</fieldset>
				
					<fieldset>
			
					<h5 class="text-yellow">Please confirm the company creation</h5>
					<input id="acceptTerms" name="acceptTerms" type="checkbox" class="">
					<label for="acceptTerms">I confirm that all information supplied above is correct and accurate</label> <br>

					<div class="box-footer">
						<button type="submit" class="btn btn-default">Cancel</button>
						<button type="submit" class="btn btn-info pull-right"  id="reg_company" >Submit</button>
					</div>
				</fieldset>
				
			</div>

			<div class="col-md-6">
				<fieldset>
					<h5 class="">Location Information</h5>	
					<!-- <div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Province<span style="color: red">*</span></label>
						<div class="col-sm-8">
							<input id="province" name="province" type="text"
								class="form-control">
						</div>
					</div>
						<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">District<span style="color: red">*</span></label>
						<div class="col-sm-8">
							<input id="district" name="district" type="text"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">City<span style="color: red">*</span></label>
						<div class="col-sm-8">
							<input id="city" name="city" type="text"
								class="form-control text">
						</div>
					</div> -->
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Province</label>
						<div class="col-sm-8">
							<select id="province" name="province"
								class="form-control select2">
								  
								</select>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">District</label>
						<div class="col-sm-8">
							<select id="district" name="district"
								class="form-control select2" disabled></select>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">City</label>
						<div class="col-sm-8">
							<select id="city" name="city"
								class="form-control select2" disabled>
								 
								</select>
						</div>
					</div>
						<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Address Line 1 <span style="color: red">*</span></label>
						<div class="col-sm-8">
							<input id="company_address_line1" name="company_address_line1" type="text"
								class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Address Line 2</label>
						<div class="col-sm-8">
							<input id="company_address_line2" name="company_address_line2" type="text"
								class="form-control">
						</div>
					</div>
				

				</fieldset>
				<fieldset>
					<h5 class="">Email Information</h5>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Admin <span style="color: red">*</span></label>
						<div class="col-sm-8">
							<input id="company_email_admin" name="company_email_admin" type="email"
								class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Business Head</label>
						<div class="col-sm-8">
							<input id="company_email_business_head" name="company_email_business_head"
								type="email" class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<!-- <label for="inputPassword3" class="col-sm-3 control-label"></label>  -->
						<br><br>
						<div class="col-sm-8">
							<!--<input id="email_line_manager" name="email_line_manager" type="email" class="form-control">-->
						</div>
					</div>
				</fieldset>
				<fieldset>
					<!-- <h5 class="text-purple">Registration / Address Proof</h5> -->
				<h5 class="">Upload Details</h5> 
					<!-- <div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Upload Company Logo Here</label>
						<div class="col-sm-8">
							<label title="Upload image file" for="inputImage1"
								class="btn btn-primary"> <input type="file"
								accept="image/*" name="file" id="inputImage1" class="hide">
								Upload Registration Form Image
							</label>
						</div>
					</div> -->
						<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Upload Company Logo *</label>
						<div class="col-sm-8">
							<label title="Upload image file" for="inputImage1"
								class="btn btn-primary"> <input type="file"
								accept="image/*" name="file" id="inputImage1" class="btn btn-block btn-info btn-lg">
								
							</label>
						</div>
					</div>
					
				<!-- 	<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Registration Form Upload</label>
						<div class="col-sm-8">
							<label title="Upload image file" for="inputImage2"
								class="btn btn-primary"> <input type="file"
								accept="image/*" name="file" id="inputImage2" class="hide">
								Upload Registration Form Image
							</label>
						</div>
					</div> -->
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Registration Form Upload *</label>
						<div class="col-sm-8">
							<label title="Upload image file" for="inputImage2"
								class="btn btn-primary"> <input type="file"
								accept="image/*" name="file" id="inputImage2" class="btn btn-block btn-info btn-lg">
								
							</label>
						</div>
					</div>
					
					
					<!-- <div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Address
							Proof Upload *</label>
						<div class="col-sm-8">
							<label title="Upload image file" for="inputImage3"
								class="btn btn-primary"> <input type="file"
								accept="image/*" name="file" id="inputImage3" class="hide">
								Upload Address Proof Image
							</label>
						</div>
					</div> -->
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Address Proof Upload *</label>
						<div class="col-sm-8">
							<label title="Upload image file" for="inputImage3"
								class="btn btn-primary"> <input type="file"
								accept="image/*" name="file" id="inputImage3" class="btn btn-block btn-info btn-lg">
								
							</label>
						</div>
					</div>

				</fieldset>

			

			</div>

		</div>
	</div>
</div>
<!-- Modal -->

<script type="text/javascript">

	$('#titleID').text("Add Company");
	$('#bcumb').text("Company Details");

</script>

<script src="resources/js/customjs/company/companyCreate.js"></script>
