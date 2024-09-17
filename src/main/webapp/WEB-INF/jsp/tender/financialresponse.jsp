<div class="col-md-12 col-lg-12 animated fadeInLeft">
	<div class="box box-default">

		<div class="box box-info">
			<div class="box-header with-border">
				<h4 class="card-subtitle">Financial Response</h4>
			</div>
			<div class="">
				<h5 class="text-green"></h5>
			</div>
			<div class="row">

				<div class="col-md-9">
					<div class="box-body">

						<fieldset>

							<div style="margin-top: 40px" class="form-group row">
								<label for="userID" class="col-sm-3 control-label">Enter
									Tender No*</label>

								<div class="col-sm-6">
									<select class="form-control m-b" id="tenderno" name="tenderno">
										<option value='empty'>Select Tender No</option>
									</select>
								</div>

							</div>
						</fieldset>

					</div>
				</div>


				<div class="col-md-3">
					<div style="margin: 15px; opacity: 0.1;">
						<i class="fa fa-credit-card"
							style="font-size: 150px; color: #e5e5e5"></i>
					</div>
				</div>
			</div>
		</div>
	</div>


	<div class="box box-info animated fadeInDownBig" id="tenderDetailsDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle">Tender Details</h4>
		</div>

		<div class="box-body">
			<div class="row">
				<div class="col-md-12">
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-2 control-label">Tender
							Name</label>
						<div class="col-sm-10">
							<input id="tender_name" name="tender_name" type="text"
								class="form-control" required="required" readonly="readonly">
						</div>
					</div>
				</div>

				<div class="col-md-6">

					<fieldset>

						<div class="form-group row">
							<label for="rfp" class="col-sm-4">RFP No </label>

							<div class="col-sm-8">

								<input id="rfp_No" name="rfp_No" type="text"
									class="form-control" required="required" readonly="readonly">
							</div>

						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Eligible
								Category</label>
							<div class="col-sm-8">
								<input id="cat" name="cat" type="text" class="form-control"
									readonly="readonly">
							</div>
						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Sub
								Category</label>
							<div class="col-sm-8">
								<input id="esub" name="esub" type="text" class="form-control"
									readonly="readonly">
							</div>
						</div>


					</fieldset>
					<br />

				</div>

				<div class="col-md-6">

					<fieldset>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">RFP
								File Name</label>
							<div class="col-sm-8">
								<input id="rfp_file" name="rfp_file" type="text"
									class="form-control" readonly="readonly">
							</div>
						</div>


						<!-- <div class="form-group row">
							<label for="venderlabel" class="col-sm-4">Vender ID </label>

							<div class="col-sm-8">

								<input id="vender_id" name="vender" type="text"
									class="form-control" required="required" readonly="readonly">

							</div>

						</div> -->

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Description</label>
							<div class="col-sm-8">
								<input id="tender_description" name="tender_description"
									type="text" class="form-control" readonly="readonly">
							</div>
						</div>


					</fieldset>

				</div>
			</div>


			<!--  start -->
			<div class="box-header with-border">
				<h4 class="card-subtitle">Payment Details</h4>
			</div>
			<br>
			<div class="row">
			<br>
			<div class="form-group row">
			<br>
					<label for="radio_btn" class="col-sm-6 control-label">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Currency &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type</label>
					<input type="radio" id="radio_btn_1" name="currency_type"
						value="LKR"> <label for="radio_btn_1">LKR</label> <input type="radio"
						id="radio_btn_2" name="currency_type" value="USD"> <label
						for="radio_btn_2">USD</label>

					<!--  		<br> <label for="radio_btn" class="col-sm-6 control-label">Currency
						Type</label>
					
						<input type="radio" class="form-check-input" id="lkr_radio"
							name="currency_type_R" value="option1"> <label
							class="form-check-label" for="radio1">LKR</label>
					
					
						<input type="radio" class="form-check-input" id="usd_radio"
							name="currency_type_R" value="option2"> <label
							class="form-check-label" for="radio2">USD</label>
			-->		
					</div>
			</div>
			
			
			<div class="row">

				<div class="col-md-6">
					<br> <!-- <label for="radio_btn" class="col-sm-6 control-label">Currency
						Type</label>
					<div class="form-check">
						<input type="radio" class="form-check-input" id="lkr_radio"
							name="optradio" value="option1" checked> <label
							class="form-check-label" for="radio1">LKR</label>
					</div>
					<div class="form-check">
						<input type="radio" class="form-check-input" id="usd_radio"
							name="optradio" value="option2"> <label
							class="form-check-label" for="radio2">USD</label>
					</div> -->
					
					
					<h5 class="card-subtitle text-aqua">CAPEX</h5>
					<br>
					

					<fieldset>
						<div id="CapexFieldArray"></div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-3 control-label">Sub Total</label>
							<div class="col-sm-3">
								<input id="sub_total" name="sub_total" type="number"
									class="form-control" disabled="disabled" style='text-align:right'>
							</div>
						</div>

					</fieldset>
					<br />

				</div>

				<div class="col-md-6">
					<br>
					<h5 class="card-subtitle text-aqua">OPPEX</h5>
					<br>

					<fieldset>

						<div id="OppexFieldArray"></div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-3 control-label">Sub Total</label>
							<div class="col-sm-3">
								<input id="capex_sub_total" name="total" type="number"
									class="form-control" disabled="disabled" style='text-align:right'>
							</div>
						</div>

					</fieldset>

				</div>
			</div>



			<!--  End   -->

			<!-- <div class="box-header with-border">
				<h4 class="card-subtitle">Payment Details</h4>
			</div>

			<br>

			
			<label for="radio_btn" class="col-sm-2 control-label">Currency
				Type</label>
			<div class="form-check">
				<input type="radio" class="form-check-input" id="lkr_radio"
					name="optradio" value="option1" checked> <label
					class="form-check-label" for="radio1">LKR</label>
			</div>
			<div class="form-check">
				<input type="radio" class="form-check-input" id="usd_radio"
					name="optradio" value="option2"> <label
					class="form-check-label" for="radio2">USD</label>
			</div>


			<div class="box-body">
				<div class="col-md-6">
				<fieldset>adf</fieldset>
					
					<div id="CapexFieldArray"></div>
				</div>
				<div class="col-md-6">
				<fieldset>adfa</fieldset>
					
					<div id="OppexFieldArray"></div>
				</div>

				<div class="form-group row">
					<label for="inputPassword3" class="col-sm-2 control-label">Total</label>
					<div class="col-sm-4">
						<input id="total" name="total" type="number" class="form-control"
							disabled="disabled">
					</div>
				</div>
			</div> -->

			<button type="button" id="confirm_button_fr"
					class="btn btn-success">Confirm Cost</button><br>
			<!-- <div class="box-header with-border"></div> -->

			<br>
			
			<div class="form-group row">
							<label for="inputPassword3" class="col-sm-3 control-label">Grand Total</label>
							<div class="col-sm-3">
								<input id="grand_total" name="grand_total" type="number"
									class="form-control" disabled="disabled">
							</div>
						</div>
						
						<div class="form-group row">
							<label for="doc" class="col-sm-2 control-label">Document</label>
							<div class="col-sm-8">
								<label title="Upload pdf file" 
									class="btn bg-olive"> <input type="file"
									name="file" id="upload_doc" onchange="fileValidationDoc()"
									class="btn btn-block  bg-olive btn-lg">
								</label>
							</div>
							</div>
							
			<div class="form-group row">
				<label for="comment" class="col-sm-2 control-label">Comment</label>
				<div class="col-sm-4">
					<input id="comment" name="comment" type="text" class="form-control">
				</div>
			</div>


			<div class="box-footer">
				<a href="index"><button type="submit" class="btn bg-purple">Back</button></a>
				<button type="button" onclick="formclear()" class="btn btn-warning">Clear</button>
				<button type="button" id="submit_button"
					class="btn btn-primary pull-right">Submit</button>
			</div>
		</div>
	</div>
</div>




<script
	src="resources/assets/vendor_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script
	src="resources/assets/vendor_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/media/js/jquery.dataTables.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/dataTables.buttons.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.flash.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/jszip.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/pdfmake.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/vfs_fonts.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.html5.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.print.min.js"></script>
<script src="resources/js/pages/data-table.js"></script>

<script src="resources/js/customjs/tender/financialresponse.js"></script>




<script type="text/javascript">
	$('#titleID').text("Financial Response");
	$('#bcumb').text("Financial Response");
</script>




