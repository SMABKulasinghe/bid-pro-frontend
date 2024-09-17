
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
     
     <!-- Step wizard -->
      <div class="box box-default">
        <div class="box-header with-border">
          <h3 class="card-title">Complete Company Profile</h3>
 <!--     <h6 class="card-subtitle">You can find more details on <a href="http://www.jquery-steps.com/" target="_blank">BidPro </a></h6> -->
          <h6 class="card-subtitle">You can find more details on BidPro</h6>
        </div>
        
        <!-- /.box-header -->
        <div class="box-body wizard-content">
			<form action="#" class="tab-wizard wizard-circle" id="example-advanced-form">
			
				<!-- Step 1 -->
				<h4 class="text-green">Location</h4>
				<section>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="province">Province <span style="color: red">*</span></label>
								<select id="province" name="province" class="form-control select2">
								</select>
							</div>
						</div>
						
						<div class="col-md-6">
							<div class="form-group">
								<label for="phoneNumber1">Address Line 1 <span style="color: red">*</span></label>
								<input id="address_line1" name="address_line1" type="text" class="form-control" required="required" autocomplete="off"></div>
						</div>						
					</div>
					
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="district">District <span style="color: red">*</span></label>
								<select id="district" name="district" class="form-control select2" disabled></select>
							</div>
						</div>
						
						<div class="col-md-6">
							<div class="form-group">
								<label for="location1">Address Line 2 </label>
								<input id="address_line2" name="address_line2" type="text" class="form-control" autocomplete="off">
							</div>
						</div>
					</div>
					
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="emailAddress1">City <span style="color: red">*</span></label>
								<select id="city" name="city" class="form-control select2" disabled> </select>
							 </div>
						</div>
						
						<div class="col-md-6">
							<div class="form-group">
								<label for="date1">Address Line 3 </label>
								<input id="address_line3" name="address_line3" type="text" class="form-control" autocomplete="off"> </div>
						</div>
					</div>
				</section>
								
				
				<!-- Step 2 -->
				<hr color="#7dab2e">
				<h4 class="text-green">Product Details</h4>
				<section>
					<div class="row">
						<div class="col-md-9">
							<div class="form-group">
								<label for="productCategory">Category <span style="color: red">*</span></label>
								<select class="form-control select2" id="productCategory" name="productCategory">
							  	<option value="">Select Category</option> 
									<!-- <option value="buildingcat">Building Category</option>
									<option value="buildingcon">Building Construction</option>
									<option value="building_int_ext">Building Interior/Exterior</option>
									<option value="comm_equip_acc">Communication Equipment and Accessories</option>
									<option value="consultancy">Consultancy Services</option>
									<option value="ewaste">E-Waste</option>
									<option value="ewaste">IT Software</option>
									<option value="ewaste">IT Hardware</option>
									<option value="ewaste">Gift Items</option> -->
								</select>
							</div>
							
							<div class="form-group">
								<label for="productSubCategory">Sub Category <span style="color: red">*</span></label>
								<select class="form-control select2" id="productSubCategory" name="productSubCategory">
								<option value="">Select Sub Category</option>
									 <!-- <option value="Selected">A</option>
									<option value="Rejected">B</option>
									<option value="Call Second-time">C</option> -->
								</select> 
							</div> 
							
						<!--	<div class="form-group">
								<label for="product">Product <span style="color: red">*</span></label>
								<select class="custom-select form-control" id="product" name="product">
									<option value="">Select Product</option> -->
									 <!-- <option value="Selected">X</option>
									<option value="Rejected">Y</option>
									<option value="Call Second-time">C</option> -->
							<!--	</select>
							</div> -->
							
							<!-- <div class="form-group">
								<button class="btn bg-olive pull-right" id="addproductNow">Add Product Now</button>
							</div> -->
						</div>
						
			       <!--   <div class="col-md-6">
							<div class="box-body">
								<table id="categoryFee"
									class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
									cellspacing="0" width="100%">
									<thead>
										<tr class="text-yellow">
											<th>Index</th>
											<th>Category Name</th>
											<th>Category Fee</th>
										</tr>
									</thead>
								</table>
								<br>
							</div>
						</div> -->
						
					</div>
			</section>
				
				
		<div class="box box-info animated fadeInDownBig"  id="productTableDiv">		
		<h4 class="box-title text-yellow">Categories You would Like to Register</h4>		
		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="userTable"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr class="text-yellow">
								<th>CategoryID</th>
								<th>SubCategoryID</th>
								<th>Category</th>
						    	<th>Sub Category</th> 
						    	<th>Sub Category Fee (LKR)</th> 
								<th>Action</th>
							</tr>
						</thead>
					</table><br>
				  <!-- 	<button type="button" id="confirmButton" class="btn bg-olive">Confirm</button> -->
				</div>
			</div>
		</div>
	</div>												
				
				
				<!-- Step 3 -->			
					<!-- <hr color="#7dab2e"> -->
					<h4 class="text-yellow">Registration Fee</h4>
					<div class="row">
						<div class="col-md-3">
							<div class="form-group">    <!-- "form-group row" -->
							<label for="input_onetimefee" class="control-label">Two-Years Category Fee (LKR)
							<span style="color: red">*</span> </label>
									<input id="onetimefee" name="onetimefee" type="text" disabled class="form-control" required="required">
									<p id="regprice_img"></p>
							</div>
						</div> <span style="display: flex; justify-content: center; align-items: center;">+</span>
						
						<div class="col-md-3">
							<div class="form-group">
							<label for="input_totCategoryFee" class="control-label">Total Sub Category Fee (LKR)
							<span style="color: red">*</span> </label>
								<input id="totCategoryFee" name="totCategoryFee" type="text" disabled="disabled" class="form-control" required="required">
								<p id="regprice_img"></p>
							</div>
						</div><span style="display: flex; justify-content: center; align-items: center;">=</span>
						
						<div class="col-md-3">
							<div class="form-group">
							<label for="input_grandTotal" class="control-label">Grand Total (LKR)
							<span style="color: red">*</span> </label>
								<input id="grandTotal" name="grandTotal" type="text" disabled="disabled" class="form-control" required="required">
								<p id="regprice_img"></p>
							</div>
						</div>
						
						<!-- <div class="col-md-3">
							<div class="form-group">
							<label for="input_categoryFee" class="control-label">Category Fee (LKR)
							<span style="color: red">*</span> </label>
								<input id="input_categoryFee" name="input_categoryFee"  disabled type="text" class="form-control" required="required">
								<p id="regprice_img"></p>
							</div>
						</div> -->
					</div>
										
					<div class="row">																								
					
					</div>
				
				
				<!-- Step 4 -->
				<hr color="#7dab2e">
				<h4 class="text-green">Documents</h4>
				<section>					
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
							<label for="reg_no" class="control-label">Business Registration(BR) Number <span style="color: red">*</span></label>
								<input id="reg_no" name="reg_no" type="number" class="form-control" required="required" autocomplete="off">
								<p id="regprice_img"></p>
							</div>
						</div>
						
						<div class="col-md-6">
							<div class="form-group row">
								<div class="col-sm-6">
									<label for="input_KYC" class="control-label">KYC Form <span style="color: red">*</span></label> <br>
									<small>
										<!-- Download From <a href='appaiz.com/etendering'>bidpro.com/kycform</a> -->
									</small>
								</div>
								<div class="col-sm-6">
									<label title="Upload pdf file" 
										class="btn bg-olive"> <input type="file"
										accept="application/pdf" name="file" id="input_KYC" onchange="fileValidationKYCForm()"
										class="btn btn-block bg-olive btn-lg" required="required"> Choose file
									</label>
									<p id="inputImage_kyc_name"></p>
								</div>
							</div>
						</div>
					</div>
					
					<div class="row">
						<div class="col-md-6">
							<div class="form-group row">
								<div class="col-sm-6">
									<label for="input_Audited_Reports" class="control-label">Last Year Audited Reports <span style="color: red">*</span></label> <br>
									<small>
										<!-- Download From <a href='appaiz.com/etendering'>bidpro.com/auditedreports</a> -->
									</small>
								</div>
								
								<div class="col-sm-6">
									<label title="Upload pdf file" 
										class="btn bg-olive"> <input type="file"
										accept="application/pdf" name="file" id="input_Audited_Reports" onchange="fileValidationAuditedReports()"
										class="btn btn-block bg-olive btn-lg" required="required"> Choose file </label>
									<p id="input_AuditedReports_name"></p>
								</div>
							</div>
						</div>
						
						
						<div class="col-md-6">
							<div class="form-group row">
								<div class="col-sm-6">
									<label for="input_directordetails" class="control-label">Director Details (with NIC details) <span style="color: red">*</span></label>
									<small>
										<!-- Download From <a href='appaiz.com/etendering'>bidpro.com/directordetails</a> -->
									</small>
								</div>
								<div class="col-sm-6">
									<label title="Upload pdf file" 
										class="btn bg-olive"> <input type="file"
										accept="application/pdf" name="file" id="input_directordetails" onchange="fileValidationDirectorDetails()"
										class="btn btn-block bg-olive btn-lg" required="required"> Choose file
									</label>
									<p id="input_directordetails_name"></p>
								</div>
							</div>
						</div>
						
					</div>
					
					
					<div class="row">
						
						
						
					</div>
					
					
					<div class="row">
						<div class="col-md-6">
							<div class="form-group row">
								<div class="col-sm-6">
									<label for="input_CompanyProfile" class="control-label">Company Profile<span style="color: red">*</span></label> <br>
									<small>
										<!-- Download From <a href='appaiz.com/etendering'>bidpro.com/companyprofile</a> -->
									</small>
								</div>
								<div class="col-sm-6">
									<label title="Upload pdf file" 
										class="btn bg-olive"> <input type="file"
										accept="application/pdf" name="file" id="input_CompanyProfile" onchange="fileValidationCompanyProfile()"
										class="btn btn-block bg-olive btn-lg" required="required"> Choose file </label>
									<p id="input_CompanyProfile_name"></p>
								</div>
							</div>
						</div>
					
					<div class="col-md-6">
							<div class="form-group row">
								<label for="inputImage_logo" class="col-sm-6 control-label">Company Logo <span style="color: red">*</span> </label>
									
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
				</section>
				
				
				
				<!-- Step 5 -->
				<hr color="#7dab2e">
				<section>
				<h4 class="text-green">Company Profile</h4>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-5 control-label">Download Below Applications</label> 
								<button type="submit" id="download_all_files_btn" class="btn btn-success">Download All</button>
							</div>
							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-10 control-label">Please upload all documents in PDF format</label>
							</div>
						</div>
			      </div> <br>
			      
					
					<div class="row">
						<div class="col-md-6">
							<div class="form-group row">
								<div class="col-sm-6">
									<label for="input_BR" class="control-label">BR Form <span style="color: red">*</span></label> <br>
									<small>
										<!-- Download From <a href='appaiz.com/etendering'>bidpro.com/brform</a> -->
									</small>
								</div>
								<div class="col-sm-6">
									<label title="Upload pdf file" 
										class="btn bg-olive"> <input type="file"
										accept="application/pdf" name="file" id="input_BR" onchange="fileValidationBRForm()"
										class="btn btn-block bg-olive btn-lg" required="required"> Choose file
									</label>
									<p id="inputImage_br_name"></p>
								</div>
							</div>
						</div>
						
						
						<div class="col-md-6">
							<div class="form-group row">
								<div class="col-sm-6">
									<label for="input_BCI" class="control-label">BCI Form <span style="color: red">*</span></label> <br>
									<small>
										<!-- Download From <a href='appaiz.com/etendering'>bidpro.com/bciform</a> -->
									</small>
								</div>
								<div class="col-sm-6">
									<label title="Upload pdf file" 
										class="btn bg-olive"> <input type="file"
										accept="application/pdf" name="file" id="input_BCI" onchange="fileValidationBCIForm()"
										class="btn btn-block bg-olive btn-lg" required="required"> Choose file
									</label>
									<p id="input_bci_name"></p>
								</div>
							</div>
						</div>
					
					
						<div class="col-md-6">
							<div class="form-group row">
								<div class="col-sm-6">
									<label for="input_Application" class="control-label">Main Application <span style="color: red">*</span></label> <br>
									<!-- <small>
										Download From <a href='appaiz.com/etendering'>bidpro.com/mainapplication</a>
									</small> -->
								</div>
								<div class="col-sm-6">
									<label title="Upload pdf file"
										class="btn bg-olive"> <input type="file"
										accept="application/pdf" name="file" id="input_Application" onchange="fileValidationMainApplication()"
										class="btn btn-block bg-olive btn-lg" required="required"> Choose file
									</label>
									<p id="inputImage_Main_Application_name"></p>
								</div>
							</div>
						</div>
						
						
						<div class="col-md-6">
							<div class="form-group row">
								<div class="col-sm-6">
									<label for="input_CodeConduct" class="control-label">NDB Supplier Code of Conduct <span style="color: red">*</span></label> <br>
									<!-- <small>
										Download From <a href='appaiz.com/etendering'>bidpro.com/codeconduct</a>
									</small> -->
								</div>
								<div class="col-sm-6">
									<label title="Upload pdf file"
										class="btn bg-olive"> <input type="file"
										accept="application/pdf" name="file" id="input_CodeConduct" onchange="fileValidationCodeConduct()"
										class="btn btn-block bg-olive btn-lg" required="required"> Choose file
									</label>
									<p id="inputImage_Supplier_code_name"></p>
								</div>
							</div>
						</div>
					</div>
					
					
					<div class="row">
						<div class="col-md-6">
							<div class="form-group row">
								<div class="col-sm-6">
									<label for="input_ESQuestions" class="control-label">Supplier ES Questions <span style="color: red">*</span></label> <br>
									<!-- <small>
										Download From <a href='appaiz.com/etendering'>bidpro.com/esquestions</a>
									</small> -->
								</div>
								<div class="col-sm-6">
									<label title="Upload pdf file"
										class="btn bg-olive"> <input type="file"
										accept="application/pdf" name="file" id="input_ESQuestions" onchange="fileValidationESquestions()"
										class="btn btn-block bg-olive btn-lg" required="required"> Choose file
									</label>
									<p id="inputImage_ES_questions_name"></p>
								</div>
							</div>
						</div>
					</div>
					
					
					<!-- Step 6 -->
					<hr color="#7dab2e">
					<h4 class="text-green">Contact Person</h4> 
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="s_name">Name <span style="color: red">*</span></label>
								<input id="s_name" name="s_name" type="text" class="form-control" autocomplete="off"> </div>
						</div>
						
						<div class="col-md-6">
							<div class="form-group">
								<label for="s_designation">Designation <span style="color: red">*</span></label>
								<input id="s_designation" name="s_designation" type="text" class="form-control" autocomplete="off"> </div>
						</div>
					</div>
					
					<div class="row">
					<div class="col-md-6">
							<div class="form-group">
								<label for="s_contact_no">Contact No <span style="color: red">*</span></label>
								<input id="s_contact_no" name="s_contact_no" type="number" class="form-control" autocomplete="off"> </div>
					</div>
						
						<div class="col-md-6">
							<div class="form-group">
								<label for="s_email">E-mail <span style="color: red">*</span></label>
								<input id="s_email" name="s_email" type="text" class="form-control" autocomplete="off"> </div>
						</div>
					</div>					
					
					
					
					<!-- Step 7 -->
					<hr color="#7dab2e">
					<h4 class="text-green">Please Provide the Details of Your Main Bank</h4>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="bank_name">Bank</label>
								<input id="bank_name" name="bank_name" type="text" class="form-control" autocomplete="off"> </div>
						</div>
						
						<div class="col-md-6">
							<div class="form-group">
								<label for="bank_branch">Branch</label>
								<input id="bank_branch" name="bank_branch" type="text" class="form-control" autocomplete="off"> </div>
						</div>
					</div>
					
					<div class="row">
					<div class="col-md-6">
							<div class="form-group">
								<label for="bank_account_no">Account No</label>
								<input id="bank_account_no" name="bank_account_no" type="number" class="form-control" autocomplete="off"> </div>
					</div>
						
						<div class="col-md-6">
							<div class="form-group">
								<label for="bank_code">Bank Code</label>
								<input id="bank_code" name="bank_code" type="text" class="form-control" autocomplete="off"> </div>
						</div>
					</div>													
				</section>
				
				
				<!-- Step 8 -->				
				<section>																
					<fieldset>
						<h5 class=" ">Please confirm the  Details</h5>
						<label for="acceptTerms">Terms & Conditions <a href='terms_condtions' style="color: crimson;" target="_blank">bidpro.com/terms_conditions</a></label> <br>
						<input id="acceptTerms" name="acceptTerms" type="checkbox" class="">
						<label for="acceptTerms">I agree to above terms & conditions, confirm that all information supplied above is correct and accurate</label> <br>

						<div class="box-footer">
							<a href="index"><button type="submit" class="btn bg-purple">Back</button></a>
								<button  type="button" onclick="formclear()"  class="btn btn-warning">Clear</button>
								<button type="button" id="submit_button"class="btn btn-primary pull-right">Submit</button>
						</div>
					</fieldset> 										
			</section>
											
			</form>
        </div>               
      </div>   	      
</div>



<script type="text/javascript">
	$('#titleID').text("Company Profile");
	$('#bcumb').text("Company Details");
	//document.getElementById("submit_button").disabled = true;	
</script>

<script>  //  $("#StreamName").val(null).trigger("change");

</script>


<script type="text/javascript">
/* $('#submit_button').on('click', function() {
	console.log("Test on JSP");
}); */	
</script>


<script src="resources/js/plugins/sweetalert2@8.js"></script>	
<script src="resources/js/customjs/regprocess/registrationProcess1.js"></script>
   
