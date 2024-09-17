
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Create Contract</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<div class="col-md-6">
			
					<fieldset>
					<h5 class=" ">Contract Information</h5>
					<div class="form-group row">
						<label for="userID" class="col-sm-4">Supplier *</label>

						<div class="col-sm-8">
							<!-- <input id="supplier_code" name="supplier_code" type="number"
								class="form-control" required="required"> -->
								<select class="form-control m-b" name="supplier_code"
										id="supplier_code" required="required">
						</select>
						</div>
						
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Contract No *</label>
						<div class="col-sm-8">
							<input id="contract_no" name="contract_no"
								type="number" class="form-control" required="required">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Contract Description *
						</label>
						<div class="col-sm-8">
							<input id="contract_description" name="contract_description" type="text"
								class="form-control" required="required">
						</div>
					</div>
						<div class="form-group row">
								<label for="inputPassword3" class="col-sm-4 control-label">Category *</label>
								<div class="col-sm-8">
									<select class="form-control m-b" name="category"
										id="category" required="required">
										<option value='empty'>Select Category</option>
										<option value='ITH'>IT Hardware</option>
										<option value='ITS'>IT Software</option>
										<option value='ITST'>IT Software tool </option>
										<option value='AC'>AC</option>
										<option value='FUR'>Furniture</option>
										<option value='US'>Utility service</option>
									</select>
								</div>
							</div>
				<!-- 	<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Original Date </label>
						<div class="col-sm-9">
							<input id="registration_no" name="registration_no" type="text"
								class="form-control" required="required">
						</div>
						</div> -->
				<!-- <div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Start Date </label>
						<div class="col-sm-9">
							<input id="start_date" name="start_date" type="text"
								class="form-control" required="required">
						</div>
					</div> -->
					<div class="form-group row">
						<label for="startDate" class="col-sm-4 control-label">Start Date *</label>
						<div class="col-sm-8 input-group date">
							<div class="input-group-addon">
		                    	<i class="fa fa-calendar"></i>
		                  	</div>
							<input type="text" class="form-control pull-right" id="start_date">
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
					<h5 class=" ">Approval Details</h5>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Board Approval No *</label>
						<div class="col-sm-8">
							<input id="board_approval_no" name="board_approval_no" type="text"
								class="form-control">
						</div>
					</div>
					<!-- <div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Board Paper Date </label>
						<div class="col-sm-9">
							<input id="board_paper_date" name="board_paper_date" type="text"
								class="form-control">
						</div>
					</div> -->
					<div class="form-group row">
						<label for="Board Paper" class="col-sm-4 control-label">Board Paper Date *</label>
						<div class="col-sm-8 input-group date">
							<div class="input-group-addon">
		                    	<i class="fa fa-calendar"></i>
		                  	</div>
							<input type="text" class="form-control pull-right" id="board_paper_date">
						</div>
					</div>
					<div class="form-group row">
						<label for="Board Paper" class="col-sm-4 control-label">Board Approval Date *</label>
						<div class="col-sm-8 input-group date">
							<div class="input-group-addon">
		                    	<i class="fa fa-calendar"></i>
		                  	</div>
							<input type="text" class="form-control pull-right" id="board_a_date">
						</div>
					</div>
					<!-- <div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Board Approval Date </label>
						<div class="col-sm-9">
							<input id="board_approval_date" name="board_approval_date" type="text"
								class="form-control">
						</div>
					</div> -->
					<!-- <div class="form-group row">
						<label for="Board Approval" class="col-sm-4 control-label">Board Approval Date *</label>
						<div class="col-sm-8 input-group date">
							<div class="input-group-addon">
		                    	<i class="fa fa-calendar"></i>
		                  	</div>
							<input type="text" class="form-control pull-right" id="board_approval_date">
						</div>
					</div> -->
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Board Paper Originated By *</label>
						<div class="col-sm-8">
							<input id="board_paper_originated_by" name="board_paper_originated_by"
								type="text" class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Special Remarks in Approval Paper *</label>
						<div class="col-sm-8">
							<input id="special_remarks" name="special_remarks"
								type="text" class="form-control">
						</div>
					</div>
				</fieldset>
				
				 <fieldset>
				<h5 class=" ">Upload Details</h5> 
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Upload Board Approval*</label>
						<div class="col-sm-8">
							<label title="Upload image file" for="inputImage"
								class="btn bg-olive"> <input type="file"
								accept="image/*" name="file" id="upload_board_approval" class="btn btn-block  bg-olive btn-lg">
								
							</label>
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Upload Contract *</label>
						<div class="col-sm-8">
							<label title="Upload image file" for="inputImage"
								class="btn bg-olive"> <input type="file"
								accept="image/*" name="file" id="upload_contract" class="btn btn-block bg-olive btn-lg">
								 
							</label>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Upload PO *</label>
						<div class="col-sm-8">
							<label title="Upload image file" for="inputImage"
								class="btn bg-olive"> <input type="file"
								accept="image/*" name="file" id="upload_purchase_order" class="btn btn-block  bg-olive btn-lg">
								
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
					<h5 class=" ">Contract Amount Details</h5>
										<div class="form-group row">
								<label for="inputPassword3" class="col-sm-4 control-label">Payment Type *</label>
								<div class="col-sm-8">
									<select class="form-control m-b" name="payment_type"
										id="payment_type" required="required">
										<option value='empty'>Select Payment Type</option>
										<option value='annualFixed'>Annual Fixed</option>
										<option value='monthlyFixed'>Monthly Fixed </option>
										<option value='annualVary'>Annual Variable  </option>
										<option value='monthlyVary'>Monthly Variable </option>
										<option value='adhoc'>Ad hoc </option>
										<option value='oneTime'>One time</option>
									</select>
								</div>
							</div>
							<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Amount LKR *</label>
						<div class="col-sm-8">
							<input id="amount" name="amount" type="number"
								class="form-control" required="required">
						</div>
					</div>
							
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">AMC LKR *</label>
						<div class="col-sm-8">
							<input id="annual_payment_amount" name="annual_payment_amount" type="number"
								class="form-control">
						</div>
					</div>
	<!-- 				<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Annual Payment Amount LKR</label>
						<div class="col-sm-9">
							<input id="phone3" name="phone3" type="number"
								class="form-control">
						</div>
					</div> -->
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">AMC USD</label>
						<div class="col-sm-8">
							<input id="amc_usd" name="amc_usd" type="number"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Conversion Rate </label>
						<div class="col-sm-8">
							<input id="conversion_rate" name="conversion_rate" type="number"
								class="form-control">
						</div>
					</div>
				<!-- 	<div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Conversion Rate USD LKR</label>
						<div class="col-sm-9">
							<input id="phone3" name="phone3" type="number"
								class="form-control">
						</div>
					</div> -->
				
				</fieldset>
				
				<fieldset>
					<h5 class=" ">Purchase Order Details</h5>
					<!-- <div class="form-group row">
						<label for="inputPassword3" class="col-sm-3 control-label">Purchase Order Date</label>
						<div class="col-sm-9">
							<input id="purchase_order_date" name="purchase_order_date" type="text"
								class="form-control" required="required">
						</div>
					</div> -->
					<div class="form-group row">
						<label for="Purchase Order" class="col-sm-4 control-label">PO Date *</label>
						<div class="col-sm-8 input-group date">
							<div class="input-group-addon">
		                    	<i class="fa fa-calendar"></i>
		                  	</div>
							<input type="text" class="form-control pull-right" id="purchase_order_date">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">PO Number *</label>
						<div class="col-sm-8">
							<input id="purchase_order_number" name="purchase_order_number"
								type="text" class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Contract Sign by Company *</label>
						<div class="col-sm-8">
							<input id="contract_signed_company" name="contract_signed_company"
								type="text" class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Designation *</label>
						<div class="col-sm-8">
							<input id="designation_company" name="designation_company"
								type="text" class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Contract Sign by Supplier *</label>
						<div class="col-sm-8">
							<input id="contract_signed_supplier" name="contract_signed_supplier"
								type="text" class="form-control">
						</div>
					</div>
						<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Designation *</label>
						<div class="col-sm-8">
							<input id="designation_supplier" name="designation_supplier"
								type="text" class="form-control">
						</div>
					</div>
				</fieldset> 
				
				
				

			

			</div>

		</div>
		</div>
	</div>
</div>

<script type="text/javascript">

	$('#titleID').text("Create Contract");
	$('#bcumb').text("Contract Details");
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


<!-- <div class="box-footer">
					<button type="submit" class="btn btn-default">Cancel</button>
					<button type="submit" class="btn btn-info pull-right">Submit
						</button>
				</div>
 -->
