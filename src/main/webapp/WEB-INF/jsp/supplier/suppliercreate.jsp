
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h4 class="card-subtitle">Create Supplier</h4>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="row">
			<div class="col-md-6">
				<fieldset>
					<h5 class="">Supplier Information</h5>
					<div class="form-group row">
						<label for="userID" class="col-sm-3">Supplier Code <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<input id="supplier_code" name="supplier_code" type="text"
								class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<div class="col-sm-3">
							<label for="inputPassword3" class="control-label">Supplier Name <span style="color: red">*</span></label>
						</div>
						<div class="col-sm-9">
							<input id="supplier_company_name" name="supplier_company_name"
								type="text" class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Category</label>
						<div class="col-sm-9">
									<select class="form-control m-b" name="user_role_name"
										id="user_role_name" required="required">
										<option value=''>Select</option>
										<option value='P'>Product</option>
										<option value='C'>Service</option>
										<option value='B'>Both</option>
									</select>
								</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Registration No <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<input id="registration_no" name="registration_no" type="text"
								class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Registered Date </label>
						<div class="col-sm-9 input-group date">
							<div class="input-group-addon">
		                    	<i class="fa fa-calendar"></i>
		                  	</div>
							<input type="text" class="form-control pull-right" id="reg_date">
						</div>
					</div>
				</fieldset>
		
				<fieldset>
					<h5 class="">Contact Information</h5>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Phone No 1 <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<input id="phone1" name="phone1" type="number"
								class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Phone No 2</label>
						<div class="col-sm-9">
							<input id="phone2" name="phone2" type="number"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Phone No 3</label>
						<div class="col-sm-9">
							<input id="phone3" name="phone3" type="number"
								class="form-control">
						</div>
					</div>
				</fieldset>

				<fieldset>
					<h5 class="">Bank Account Details</h5>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Bank Account No</label>
						<div class="col-sm-9">
							<input id="bank_account_no" name="bank_account_no" type="number"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Bank Name</label>
						<div class="col-sm-9">
							<input id="bank_name" name="bank_name" type="text"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Bank Branch Name</label>
						<div class="col-sm-9">
							<input id="bank_branch_name" name="bank_branch_name" type="text"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Bank Branch Code</label>
						<div class="col-sm-9">
							<input id="bank_branch_code" name="bank_branch_code"
								type="number" class="form-control">
						</div>
					</div>
				</fieldset>
				
					<fieldset>
			
					<h5 class="text-yellow">Please confirm the supplier creation</h5>
					<input id="acceptTerms" name="acceptTerms" type="checkbox" class="">
					<label for="acceptTerms">I confirm that all information supplied above is correct and accurate</label> <br>

					<div class="box-footer">
						<a href="index"><button type="submit" class="btn bg-purple">Back</button></a>
						<button  type="button" onclick="formclear()"  class="btn btn-warning">Clear</button>
						<button type="submit" class="btn btn-primary pull-right" id="reg_supplier" id="submit_button" >Submit</button>
					</div>
				</fieldset>
				
			</div>

			<div class="col-md-6">
				<fieldset>
					<h5 class="">Location Information</h5>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Province <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<select id="province" name="province"
								class="form-control select2">
								</select>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">District <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<select id="district" name="district"
								class="form-control select2" disabled></select>
						</div>
					</div>
					<div class="form-group row">
						<label for="city" class="col-sm-3 control-label">City <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<select id="city" name="city"
								class="form-control select2" disabled>
								 
								</select>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Address Line 1 <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<input id="address_line1" name="address_line1" type="text"
								class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Address Line 2</label>
						<div class="col-sm-9">
							<input id="address_line2" name="address_line2" type="text"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Address Line 3</label>
						<div class="col-sm-9">
							<input id="address_line3" name="address_line3" type="text"
								class="form-control">
						</div>
					</div>
					
					

				</fieldset>
				<fieldset>
					<h5 class="">Email Information</h5>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Admin <span style="color: red">*</span></label>
						<div class="col-sm-9">
							<input id="email_admin" name="email_admin" type="email"
								class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Business Head</label>
						<div class="col-sm-9">
							<input id="email_business_head" name="email_business_head"
								type="email" class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Line Manager</label>
						<div class="col-sm-9">
							<input id="email_line_manager" name="email_line_manager"
								type="email" class="form-control">
						</div>
					</div>
				</fieldset>
				<fieldset>
					<!-- <h5 class="text-purple">Registration / Address Proof</h5> -->
				<h5 class="">Upload Details</h5> 
					<div class="form-group row">
						<label for="inputImage_logo" class="col-sm-3 control-label">Upload Company Logo Here</label>
						<div class="col-sm-9">
							<label title="Upload image file" for="inputImage_logo"
								class="btn bg-olive"> <input type="file"
								accept="image/*" name="file" id="inputImage_logo" class="hide">
								Upload Registration Form Image
								
							</label>
							<p id="inputImage_logo_name"></p>
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputImage_Registration" class="col-sm-3 control-label">Registration Form Upload</label>
						<div class="col-sm-9">
							<label title="Upload image file" for="inputImage_Registration"
								class="btn bg-olive"> <input type="file"
								accept="image/*" name="file" id="inputImage_Registration" class="hide">
								Upload Registration Form Image
							</label>
							<p id="inputImage_Registration_name"></p>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputImage_Address" class="col-sm-3 control-label">Address
							Proof Upload *</label>
						<div class="col-sm-9">
							<label title="Upload image file" for="inputImage_Address"
								class="btn bg-olive"> <input type="file"
								accept="image/*" name="file" id="inputImage_Address" class="hide">
								Upload Address Proof Image
							</label>
							<p id="inputImage_Address_name"></p>
						</div>
					</div>

				</fieldset>

			

			</div>

		</div>
	</div>
</div>

<!-- Modal -->
<!-- <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    Modal content
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
      </div>
      <div class="modal-body">
        <p>Some text in the modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div> -->

<script type="text/javascript">

	$('#titleID').text("Add Supplier");
	$('#bcumb').text("Supplier Details");

</script>

<script>

function formclear(){
	$("#acceptTerms").prop("checked", false);
	$('#email_line_manager').val('');
	$('#email_business_head').val('');
	$('#email_admin').val('');
	$('#address_line3').val('');
	$('#address_line2').val('');
	$('#address_line1').val('');
	$('#city').val('');
	$('#district').val('');
	$('#province').val('');
	$('#bank_branch_code').val('');
	$('#bank_branch_name').val('');
	$('#bank_name').val('');
	$('#bank_account_no').val('');
	$('#phone3').val('');
	$('#phone2').val('');
	$('#phone1').val('');
	$('#reg_date').val('');
	$('#registration_no').val('');
	$('#user_role_name').val('');
	$('#supplier_company_name').val('');
	$('#supplier_code').val('');
}
</script>
<script src="resources/js/customjs/supplier/supplierCreate.js"></script>
<!-- <div class="box-footer">
					<button type="submit" class="btn btn-default">Cancel</button>
					<button type="submit" class="btn btn-info pull-right">Submit
						</button>
				</div>
 -->
