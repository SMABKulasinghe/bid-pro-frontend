<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Asset Registration</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="row">
			<div class="col-md-8">				
				<form class="form-horizontal form-element" id="assetForm">
					<div class="box-body">
						<fieldset>
						<h5 class="text-green">Asset Information</h5>
							<div class="form-group row">
								<label for="assetID" class="col-sm-2 control-label">Asset
									Code <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input type="text" class="form-control" id="assetID"
										placeholder="Asset Code" autocomplete="off">
								</div>
							</div>
							<div class="form-group row">
								<label for="assetCategory" class="col-sm-2 control-label">Asset
									Category <span
							style="color: red">*</span></label>
								<div class="col-sm-10">
									<select class="form-control m-b" name="assetCategory"
										id="assetCategory" required="required">
										<option value="0">Select a category</option>
										<!-- <option value="1">X</option>
										<option value="2">Y</option> -->
									</select>
								</div>
							</div>
							<div class="form-group row" id="subCategorySet">
								<label for="assetSubCategory" class="col-sm-2 control-label">Asset
									Sub Category <span
							style="color: red">*</span></label>
								<div class="col-sm-10">
									<select class="form-control m-b" style="width: 100%" name="assetSubCategory"
										id="assetSubCategory" required="required">
										<!-- <option value="1">A</option>
										<option value="2">B</option> -->
									</select>
								</div>
							</div>
											
						</fieldset>
						<fieldset>
							<h5 class="text-aqua">Asset Supplier Information</h5>
							<div class="form-group row">
								<label for="assetSupplierCode" class="col-sm-2 control-label">Supplier Code <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="assetSupplierCode" 
										placeholder="Asset Supplier Code" name="assetSupplierCode" type="number"
										class="form-control" required="required" autocomplete="off">
								</div>
							</div>
							<div class="form-group row">
								<label for="supplierName" class="col-sm-2 control-label">Supplier Name <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="supplierName"
											placeholder="Supplier Name" name="supplierName" type="text"
											class="form-control" required="required" autocomplete="off">
								</div>
							</div>
							<div class="form-group row">
								<label for="Name" class="col-sm-2 control-label">Email <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="user_email"
											placeholder="Email" name="user_email" type="email"
											class="form-control" required="required" autocomplete="off"> <span
											class="">Confirmation email will be send to this
											address</span>
								</div>
							</div>

						</fieldset>
						<fieldset>
							<h5 class="text-light-blue">Asset Model Information</h5>
							<div class="form-group row">
								<label for="brandName" class="col-sm-2 control-label">Brand <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="brandName"
											placeholder="Brand Name" name="brandName" type="text"
											class="form-control" required="required">
								</div>
							</div>
							<div class="form-group row">
								<label for="ModelName" class="col-sm-2 control-label">Model <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="ModelName"
											placeholder="Model Name" name="ModelName" type="text"
											class="form-control" required="required">
								</div>
							</div>
							<div class="form-group row">
								<label for="RAM" class="col-sm-2 control-label">Memory (RAM)<span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="RAM"
											placeholder="RAM" name="RAM" type="number"
											class="form-control" required="required">
											<span class="help-block m-b-none">GB</span>
								</div>
							</div>
							<div class="form-group row">
								<label for="HDD" class="col-sm-2 control-label">HDD Disk<span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="HDD"
											placeholder="HDD" name="HDD" type="number"
											class="form-control" required="required">
											<span class="help-block m-b-none">GB</span>
								</div>
							</div>
							<div class="form-group row">
								<label for="processor" class="col-sm-2 control-label">Processor<span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="processor"
											placeholder="Processor" name="processor" type="number"
											class="form-control" required="required">
											<span class="help-block m-b-none">GHz</span>
								</div>
							</div>
							
							<div class="form-group row">
								<label for="lastInspectedBy" class="col-sm-2 control-label">Last Inspected By<span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="lastInspectedBy"
											placeholder="last Inspected By" name="lastInspectedBy" type="text"
											class="form-control" required="required">
											<span class="help-block m-b-none">Person</span>
								</div>
							</div>
							
							<div class="form-group row">
								<label for="registrationNo" class="col-sm-2 control-label">Registration No<span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="registrationNo"
											placeholder="Registration No" name="registrationNo" type="text"
											class="form-control" required="required">
											<span class="help-block m-b-none">Registration No</span>
								</div>
							</div>
							<div class="form-group row">
								<label for="serialNo" class="col-sm-2 control-label">Serial No<span
							style="color: red">*</span></label>
								<div class="col-sm-10">
									<input id="serialNo"
											placeholder="Serial No" name="serialNo" type="text"
											class="form-control" required="required">
											<span class="help-block m-b-none">Serial No</span>
								</div>
							</div>
							<div class="form-group row">
								<label for="color" class="col-sm-2 control-label">Color<span
							style="color: red">*</span></label>
								<div class="col-sm-10">
									<input id="color"
											placeholder="Color" name="color" type="text"
											class="form-control" required="required">
											<span class="help-block m-b-none">Color</span>
								</div>
							</div>
							
						</fieldset>
						<fieldset>
							<h5 class="text-light-blue">Asset Purchased Value</h5>
							<div class="form-group row">
								<label for="currentMarketValue" class="col-sm-2 control-label">Current market value </label>

								<div class="col-sm-10">
									<input type="number" id="currentMarketValue" class="form-control" placeholder="Current Market Value">
										<span class="help-block m-b-none">LKR</span>
								</div>
								
							</div>
							<div class="form-group row">
								<label for="disposableAmount" class="col-sm-2 control-label">Disposable Amount </label>

								<div class="col-sm-10">
									<input type="number" id="disposableAmount" class="form-control" placeholder="Disposable Amount">
										<span class="help-block m-b-none">LKR</span>
								</div>
								
							</div>
							<div class="form-group row">
								<label for="depricationMethod" class="col-sm-2 control-label">Depreciation Method </label>

								<div class="col-sm-10">
									<input type="text" id="depricationMethod" class="form-control" placeholder="Depreciation Method">
										<span class="help-block m-b-none">Depreciation Method </span>
								</div>
								
							</div>
							<div class="form-group row">
								<label for="depricationAmount" class="col-sm-2 control-label">Depreciation Amount </label>

								<div class="col-sm-10">
									<input type="number" id="depricationAmount" class="form-control" placeholder="Depreciation Amount">
										<span class="help-block m-b-none">LKR per Year </span>
								</div>
								
							</div>
							<div class="form-group row">
								<label for="currentConditionCode" class="col-sm-2 control-label">Current Condition Code  </label>

								<div class="col-sm-10">
									<select class="form-control m-b" name="currentConditionCode"
										id="currentConditionCode" required="required">
										<option value="brandNew">Brand New</option>
										<option value="used">Used</option>
									</select>
								</div>
								
							</div>
							
						</fieldset>
						
						<fieldset>
							<h5 class="text-aqua">Asset Movement Information</h5>
							<div class="form-group row">
								<label for="assetmovementStatus" class="col-sm-2 control-label">Movement Status <span
							style="color: red">*</span></label>
								<div class="col-sm-10">
									<input id="assetmovementStatus" 
										placeholder="Asset Movement Status" name="assetSupplierCode" type="text"
										class="form-control" required="required" autocomplete="off">
								</div>
							</div>
							<div class="form-group row">
								<label for="transferDate" class="col-sm-2 control-label">Transferred Date *</label>
								<div class="col-sm-10">
									<div class="input-group date">
										<div class="input-group-addon">
											<i class="fa fa-calendar"></i>
										</div>
										<input type="text" class="form-control pull-right"
											id="TransferredDate" autocomplete="off">
									</div>
									<span class="help-block m-b-none">Shows Asset transfer
										date</span>
								</div>
								<!-- <div class="col-sm-10 input-group date">
									<input type="text" id="TransferredDate" class="form-control">
									<span class="help-block m-b-none">Shows user expiration
										date</span>
								</div> -->
							</div>
							<div class="form-group row">
								<label for="buyingDate" class="col-sm-2 control-label">Buying Date *</label>
								<div class="col-sm-10">
									<div class="input-group date">
										<div class="input-group-addon">
											<i class="fa fa-calendar"></i>
										</div>
										<input type="text" class="form-control pull-right"
											id="buyingDate" autocomplete="off">
									</div>
									<span class="help-block m-b-none">Shows Asset brought
										date</span>
								</div>
								<!-- <div class="col-sm-10 input-group date">
									<input type="text" id="TransferredDate" class="form-control">
									<span class="help-block m-b-none">Shows user expiration
										date</span>
								</div> -->
							</div>
							<div class="form-group row">
								<label for="lastRepairDate" class="col-sm-2 control-label">Last Repair Date *</label>
								<div class="col-sm-10">
									<div class="input-group date">
										<div class="input-group-addon">
											<i class="fa fa-calendar"></i>
										</div>
										<input type="text" class="form-control pull-right"
											id="lastRepairDate" autocomplete="off">
									</div>
									<span class="help-block m-b-none">Shows Asset Last Repair Date</span>
								</div>
							</div>
							<div class="form-group row">
								<label for="transferedFrom" class="col-sm-2 control-label">Transferred From Location <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="transferedFrom"
											placeholder="Previous Location" name="transferedFrom" type="text"
											class="form-control" required="required" autocomplete="off">
								</div>
							</div>
							<div class="form-group row">
								<label for="currentLocation" class="col-sm-2 control-label">Current Location Code <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="currentLocation"
											placeholder="Current Location" name="currentLocation" type="text"
											class="form-control" required="required" autocomplete="off"> 
								</div>
							</div>

						</fieldset>
						
						
						<fieldset>
									<h5 class="text-yellow">Please Confirm the Asset
										Registration</h5>
									<input id="acceptTerms" name="acceptTerms" type="checkbox"
										class=""> <label for="acceptTerms">Confirm
										asset registration</label> <br>
						</fieldset>

					</div>
					<!-- /.box-body -->
				</form>
				<div class="box-footer">
					<button type="submit" class="btn btn-default">Cancel</button>
					<button type="button" id="create_asset_button" class="btn btn-info pull-right">Submit
						</button>
				</div>
				<!-- /.box-footer -->
			</div>
			<div class="col-md-4">
				<div style="margin: 100px">
					<i class="fa fa-desktop"
						style="font-size: 180px; color: #e5e5e5"></i>
				</div>

			</div>
		</div>
	</div>
</div>

<script>
        $(document).ready(function(){
        	var date = new Date();
			date.setDate(date.getDate());			
        	
			//Date picker
			    $('#TransferredDate').datepicker({
			    	todayBtn : "linked",
					keyboardNavigation : false,
					forceParse : false,
					calendarWeeks : false,
					autoclose : true,
					todayHighlight : true
			    });

			    $('#buyingDate').datepicker({
			    	todayBtn : "linked",
					keyboardNavigation : false,
					forceParse : false,
					calendarWeeks : false,
					autoclose : true,
					todayHighlight : true
			    });

			
			    $('#lastRepairDate').datepicker({
			    	todayBtn : "linked",
					keyboardNavigation : false,
					forceParse : false,
					calendarWeeks : false,
					autoclose : true,
					todayHighlight : true
			    });

			
             });
        
        
     </script>    

<script type="text/javascript">

	$('#titleID').text("Asset Registration");
	$('#bcumb').text("Asset");




</script>

 <script src="resources/js/customjs/asset/assetregistration.js"></script>

