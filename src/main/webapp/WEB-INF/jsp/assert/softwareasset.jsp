<style>
.dt-body-nowrap {
   white-space: nowrap;
}
</style>

<div class="col-xl-12 col-lg-8 animated fadeInLeft">


	<!-- /.User List table -->
	<div class="box box-info animated fadeInLeft" id="contractTableDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle" id="titleAssetSW">Asset</h4>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="example"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr class="text-yellow">
								<th>Supplier Code</th>								
								<th>Current Location</th>
								<th>Brand</th>
								<th>Model</th>
								<th>Current Market Value</th>
								<th>Disposable Amount</th>
								<th>Category</th>
								<th>Sub Category</th>
								<th>Actions</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>Sup001</td>
								<td>Adobe Reader</td>
								<td>10.0.1</td>
								<td>2021-01-31</td>
								<td>4500 LKR</td>
								<td>2020-01-31</td>
								<td>Software</td>
								<td><button type="button" id="" class="btn btn-success">More</button></td>
								<td><button type="submit" class="btn btn-danger">Remove</button>
								<button type="button" id="" class="btn btn-info">Edit</button></td>
							</tr>
							<tr>
								<td>Sup002</td>
								<td>Microsoft Office</td>
								<td>2016</td>
								<td>2022-12-31</td>
								<td>9000 LKR</td>
								<td>2020-02-25</td>
								<td>Software</td>
								<td><button type="button" id="" class="btn btn-success">More</button></td>
								<td><button type="submit" class="btn btn-danger">Remove</button>
								<button type="button" id="" class="btn btn-info">Edit</button></td>
							</tr>
						</tbody>
					</table>
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
							<button type="button" class="close pull-left"
								data-dismiss="modal">&times;</button>
						</div>
						<div class="col-md-10">
							<div class="row">
								<div class="col-md-12">
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Update Asset Details</h1>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<p class="pull-right" style="margin-bottom: 0"
										id="mdl_ii_contract_no">0000000</p>
									<p class="pull-right" style="margin-bottom: 0">Asset Serial No
										-</p>
								</div>
							</div>
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
							<div class="row">
			<div class="col-md-8">				
				<form class="form-horizontal form-element" id="assetForm_edit">
					<div class="box-body">
						<fieldset>
						<h5 class="text-green">Asset Information</h5>
							<div class="form-group row">
								<label for="assetID" class="col-sm-2 control-label">Asset
									Code <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input type="text" class="form-control" id="assetID_edit"
										placeholder="Asset ID" autocomplete="off">
								</div>
							</div>
							<div class="form-group row">
								<label for="assetCategory_edit" class="col-sm-2 control-label">Asset
									Category <span
							style="color: red">*</span></label>
								<div class="col-sm-10">
									<select class="form-control m-b" name="assetCategory_edit"
										id="assetCategory_edit" required="required">
										<option value="1">X</option>
										<option value="2">Y</option>
									</select>
								</div>
							</div>
							<div class="form-group row">
								<label for="assetSubCategory_edit" class="col-sm-2 control-label">Asset
									Sub Category <span
							style="color: red">*</span></label>
								<div class="col-sm-10">
									<select class="form-control m-b" name="assetSubCategory_edit"
										id="assetSubCategory_edit" required="required">
										<option value="1">A</option>
										<option value="2">B</option>
									</select>
								</div>
							</div>
											
						</fieldset>
						<fieldset>
							<h5 class="text-aqua">Asset Supplier Information</h5>
							<div class="form-group row">
								<label for="assetSupplierCode_edit" class="col-sm-2 control-label">Supplier Code <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="assetSupplierCode_edit" 
										placeholder="Asset Supplier Code" name="assetSupplierCode_edit" type="number"
										class="form-control" required="required" autocomplete="off">
								</div>
							</div>
							<div class="form-group row">
								<label for="supplierName_edit" class="col-sm-2 control-label">Supplier Name <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="supplierName_edit"
											placeholder="Supplier Name" name="supplierName_edit" type="text"
											class="form-control" required="required" autocomplete="off">
								</div>
							</div>
							<div class="form-group row">
								<label for="Name" class="col-sm-2 control-label">Email <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="user_email_edit"
											placeholder="Email" name="user_email_edit" type="email"
											class="form-control" required="required" autocomplete="off"> <span
											class="">Confirmation email will be send to this
											address</span>
								</div>
							</div>

						</fieldset>
						<fieldset>
							<h5 class="text-light-blue">Asset Model Information</h5>
							<div class="form-group row">
								<label for="brandName_edit" class="col-sm-2 control-label">Brand <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="brandName_edit"
											placeholder="Brand Name" name="brandName_edit" type="text"
											class="form-control" required="required">
								</div>
							</div>
							<div class="form-group row">
								<label for="ModelName_edit" class="col-sm-2 control-label">Model <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="ModelName_edit"
											placeholder="Model Name" name="ModelName_edit" type="text"
											class="form-control" required="required">
								</div>
							</div>
							<div class="form-group row">
								<label for="RAM_edit" class="col-sm-2 control-label">Memory (RAM)<span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="RAM_edit"
											placeholder="RAM" name="RAM_edit" type="number"
											class="form-control" required="required">
											<span class="help-block m-b-none">GB</span>
								</div>
							</div>
							<div class="form-group row">
								<label for="HDD_edit" class="col-sm-2 control-label">HDD Disk<span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="HDD_edit"
											placeholder="HDD" name="HDD_edit" type="number"
											class="form-control" required="required">
											<span class="help-block m-b-none">GB</span>
								</div>
							</div>
							<div class="form-group row">
								<label for="processor" class="col-sm-2 control-label">Processor<span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="processor_edit"
											placeholder="Processor" name="processor_edit" type="number"
											class="form-control" required="required">
											<span class="help-block m-b-none">GHz</span>
								</div>
							</div>
							
							<div class="form-group row">
								<label for="lastInspectedBy" class="col-sm-2 control-label">Last Inspected By<span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="lastInspectedBy_edit"
											placeholder="last Inspected By" name="lastInspectedBy_edit" type="text"
											class="form-control" required="required">
											<span class="help-block m-b-none">Person</span>
								</div>
							</div>
							
							<div class="form-group row">
								<label for="registrationNo_edit" class="col-sm-2 control-label">Registration No<span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="registrationNo_edit"
											placeholder="Registration No" name="registrationNo_edit" type="text"
											class="form-control" required="required">
											<span class="help-block m-b-none">Registration No</span>
								</div>
							</div>
							<div class="form-group row">
								<label for="serialNo_edit" class="col-sm-2 control-label">Serial No<span
							style="color: red">*</span></label>
								<div class="col-sm-10">
									<input id="serialNo_edit"
											placeholder="Serial No" name="serialNo_edit" type="text"
											class="form-control" required="required">
											<span class="help-block m-b-none">Serial No</span>
								</div>
							</div>
							<div class="form-group row">
								<label for="color_edit" class="col-sm-2 control-label">Color<span
							style="color: red">*</span></label>
								<div class="col-sm-10">
									<input id="color_edit"
											placeholder="Color" name="color_edit" type="text"
											class="form-control" required="required">
											<span class="help-block m-b-none">Color</span>
								</div>
							</div>
							
						</fieldset>
						<fieldset>
							<h5 class="text-light-blue">Asset Purchased Value</h5>
							<div class="form-group row">
								<label for="currentMarketValue_edit" class="col-sm-2 control-label">Current market value </label>

								<div class="col-sm-10">
									<input type="number" id="currentMarketValue_edit" class="form-control" placeholder="Current Market Value">
										<span class="help-block m-b-none">LKR</span>
								</div>
								
							</div>
							<div class="form-group row">
								<label for="disposableAmount_edit" class="col-sm-2 control-label">Disposable Amount </label>

								<div class="col-sm-10">
									<input type="number" id="disposableAmount_edit" class="form-control" placeholder="Disposable Amount">
										<span class="help-block m-b-none">LKR</span>
								</div>
								
							</div>
							<div class="form-group row">
								<label for="depricationMethod_edit" class="col-sm-2 control-label">Depreciation Method </label>

								<div class="col-sm-10">
									<input type="text" id="depricationMethod_edit" class="form-control" placeholder="Depreciation Method">
										<span class="help-block m-b-none">Depreciation Method </span>
								</div>
								
							</div>
							<div class="form-group row">
								<label for="depricationAmount_edit" class="col-sm-2 control-label">Depreciation Amount </label>

								<div class="col-sm-10">
									<input type="number" id="depricationAmount_edit" class="form-control" placeholder="Depreciation Amount">
										<span class="help-block m-b-none">LKR per Year </span>
								</div>
								
							</div>
							<div class="form-group row">
								<label for="currentConditionCode_edit" class="col-sm-2 control-label">Current Condition Code  </label>

								<div class="col-sm-10">
									<select class="form-control m-b" name="currentConditionCode_edit"
										id="currentConditionCode_edit" required="required">
										<option value="brandNew">Brand New</option>
										<option value="used">Used</option>
									</select>
								</div>
								
							</div>
							
						</fieldset>
						
						<fieldset>
							<h5 class="text-aqua">Asset Movement Information</h5>
							<div class="form-group row">
								<label for="assetmovementStatus_edit" class="col-sm-2 control-label">Movement Status <span
							style="color: red">*</span></label>
								<div class="col-sm-10">
									<input id="assetmovementStatus_edit" 
										placeholder="Asset Supplier Code" name="assetSupplierCode" type="text"
										class="form-control" required="required" autocomplete="off">
								</div>
							</div>
							<div class="form-group row">
								<label for="transferDate_edit" class="col-sm-2 control-label">Transferred Date *</label>
								<div class="col-sm-10">
									<div class="input-group date">
										<div class="input-group-addon">
											<i class="fa fa-calendar"></i>
										</div>
										<input type="text" class="form-control pull-right"
											id="TransferredDate_edit" autocomplete="off">
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
								<label for="buyingDate_edit" class="col-sm-2 control-label">Buying Date *</label>
								<div class="col-sm-10">
									<div class="input-group date">
										<div class="input-group-addon">
											<i class="fa fa-calendar"></i>
										</div>
										<input type="text" class="form-control pull-right"
											id="buyingDate_edit" autocomplete="off">
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
								<label for="lastRepairDate_edit" class="col-sm-2 control-label">Last Repair Date *</label>
								<div class="col-sm-10">
									<div class="input-group date">
										<div class="input-group-addon">
											<i class="fa fa-calendar"></i>
										</div>
										<input type="text" class="form-control pull-right"
											id="lastRepairDate_edit" autocomplete="off">
									</div>
									<span class="help-block m-b-none">Shows Asset Last Repair Date</span>
								</div>
							</div>
							<div class="form-group row">
								<label for="transferedFrom_edit" class="col-sm-2 control-label">Transferred From Location <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="transferedFrom_edit"
											placeholder="Previous Location" name="transferedFrom" type="text"
											class="form-control" required="required" autocomplete="off">
								</div>
							</div>
							<div class="form-group row">
								<label for="currentLocation_edit" class="col-sm-2 control-label">Current Location Code <span
							style="color: red">*</span></label>

								<div class="col-sm-10">
									<input id="currentLocation_edit"
											placeholder="Current Location" name="currentLocation" type="text"
											class="form-control" required="required" autocomplete="off"> 
								</div>
							</div>

						</fieldset>
						
						
						<fieldset>
									<h5 class="text-yellow">Please Confirm the Asset
										Information Update</h5>
									<input id="acceptTerms" name="acceptTerms" type="checkbox"
										class=""> <label for="acceptTerms">Confirm
										asset information update</label> <br>
						</fieldset>

					</div>
					<!-- /.box-body -->
				</form>
				<!-- <div class="box-footer">
					<button type="button" id="create_asset_button" class="btn btn-info pull-right">Submit</button>
				</div> -->
				<!-- /.box-footer -->
			</div>
			<!-- <div class="col-md-4">
				<div style="margin: 100px">
					<i class="fa fa-desktop"
						style="font-size: 180px; color: #e5e5e5"></i>
				</div>

			</div> -->
		</div>
						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button type="button" id="update_asset_button"
					class="btn bg-olive pull-right">Update</button>
			</div>
		</div>

	</div>
</div>



<script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/dataTables.buttons.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.flash.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/jszip.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/pdfmake.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/vfs_fonts.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.html5.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.print.min.js"></script>
    
    <script src="https://gyrocode.github.io/jquery-datatables-checkboxes/1.2.6/js/dataTables.checkboxes.min.js"></script>
    <script src="https://cdn.datatables.net/select/1.3.1/js/dataTables.select.min.js"></script>


<script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.html5.min.js"></script>
<script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.print.min.js"></script>
<!-- <script src="resources/js/pages/data-table.js"></script> -->

<!--  <script src="resources/js/customjs/contract/contractview.js"></script> -->
 <script src="resources/js/customjs/asset/viewsoftwareasset.js"></script>
 
