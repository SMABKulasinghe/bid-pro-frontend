<style>
.dt-body-nowrap {
   white-space: nowrap;
}
</style>



<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Asset Transfer</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="row">
			<div class="col-md-6">				
				<form class="form-horizontal form-element" id="assetForm">
					<div class="box-body">
						<fieldset>
						<h5 class="text-green">Asset Category</h5>
							<div class="form-group row">
								<label for="assetCategory" class="col-sm-2 control-label">Asset
									Category <span
							style="color: red"></span></label>
								<div class="col-sm-10">
									<select class="form-control m-b" name="assetCategory"
										id="assetCategory" required="required">
										<option value="0">Select a category</option>
										<!-- <option value="1">X</option>
										<option value="2">Y</option> -->
									</select>
								</div>
							</div>
							
											
						</fieldset>
						
						
						

					</div>
					<!-- /.box-body -->
				</form>
				
			</div>
			<div class="col-md-6">
			<div class="box-body">
						<fieldset id="subCategorySet">
							<h5 class="text-aqua">Asset Sub Category</h5>
							<div class="form-group row">
								<label for="assetSubCategory" class="col-sm-2 control-label">Asset
									Sub Category <span
							style="color: red"></span></label>
								<div class="col-sm-10">
									<select class="form-control m-b" name="assetSubCategory"
										id="assetSubCategory" required="required">
										<!-- <option value="1">A</option>
										<option value="2">B</option> -->
									</select>
								</div>
							</div>

						</fieldset>
												

			</div>
			</div>
		</div>
		<div class="row">
		<div class="col-md-8">
			<div class="box-footer" id="footerDiv">
					<button type="submit" class="btn btn-default">Cancel</button>
					<button type="button" id="search_asset_button" class="btn btn-info pull-right">Search
						</button>
				</div>
				<!-- /.box-footer -->
		</div>
		
		</div>
	</div>
</div>


<div class="col-xl-12 col-lg-8 animated fadeInLeft" id="assetTableDiv">


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
								<th>Supplier</th>								
								<th>Current Location</th>
								<th>Last Transfer From</th>
								<th>Brand</th>
								<th>Model</th>
								<th>Current Market Value</th>
								<th>Serial No</th>
								<th>Color</th>
								<th>Action</th>
								<th>More</th>
							</tr>
						</thead>

						<tbody>
							<!-- <tr>
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
							</tr> -->
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
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Asset Transfer Details</h1>
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
							<h5 class="text-aqua">Asset Movement Information</h5>
							<div class="form-group row">
								<label for="currentLocation_edit" class="col-sm-3 control-label">Current Location <span
							style="color: red"> </span></label>
							
							<div class="col-sm-1">
									
							</div>

								<div class="col-sm-8">
									<input id="currentLocation_edit"
											placeholder="Current Location" name="currentLocation_edit" type="text"
											class="form-control" required="required" autocomplete="off" disabled="disabled">
											<span class="">Asset will transfer from this location </span>
								</div>
							</div>
							<div class="form-group row">
								<label for="currentLocation_edit" class="col-sm-3 control-label">Destination <span
							style="color: red"> * </span></label>
							
								<div class="col-sm-1">
									
							</div>

								<div class="col-sm-8">
									<input id="destination_edit"
											placeholder="Destination" name="destination_edit" type="text"
											class="form-control" required="required" autocomplete="off"> 
											<span class="">Location asset should be move to</span>
								</div>
							</div>
							
							<div class="form-group row">
								<label for="move_comment" class="col-sm-3 control-label">Comment <span
							style="color: red"> * </span></label>
							
								<div class="col-sm-1">
									
							</div>

								<div class="col-sm-8">
									<input id="move_comment"
											placeholder="Comments about movement" name="move_comment" type="text"
											class="form-control" required="required" autocomplete="off"> 
											<span class="">Reason for movement or comment</span>
								</div>
							</div>

						</fieldset>
						
						
						<fieldset>
									<h5 class="text-yellow">Please Confirm the Asset
										Transfer Information</h5>
									<input id="acceptTerms" name="acceptTerms" type="checkbox"
										class=""> <label for="acceptTerms">Confirm
										asset transfer information</label> <br>
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
					class="btn bg-olive pull-right">Submit</button>
			</div>
		</div>

	</div>
</div>

<script type="text/javascript">

	$('#titleID').text("Asset Transfer");
	$('#bcumb').text("Asset");


</script>

 <script src="resources/js/customjs/asset/transferasset.js"></script>
