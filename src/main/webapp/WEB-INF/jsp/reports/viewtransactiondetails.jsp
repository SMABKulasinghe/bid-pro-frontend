
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<!-- <div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">View Transaction Details</h3>
		</div>
		/.box-header
		form start
		<div class="row">
			<div class="col-md-6">
				<br />
				<fieldset>
					<div class="col-md-10 form-group" id="data_5">
						<label for="userID" class="">Select a Date Range</label>

						<div class="input-daterange input-group" id="datepicker">
							<input type="text" class="input-sm form-control" name="start"
								id="Date_start" data-mask="12/31/2999" /> <span
								class="input-group-addon">to</span> <input type="text"
								class="input-sm form-control" name="end" id="Date_end"
								data-mask="12/31/2999" />
						</div>
					</div>


				</fieldset>

				<fieldset>
					<div class="col-md-10 form-group">
						<button type="submit" class="btn btn-default">CANCEL</button>
						<button type="submit" class="btn btn-info pull-right">SEARCH
						</button>
					</div>
				</fieldset>
			</div>

			<div class="col-md-6">
				<br />
				<fieldset>
					<div class="col-md-10 form-group">
						<label for="userID" class="">Select Company</label>
						<div class="controls">
							<input type="email" name="email" class="form-control" required
								data-validation-required-message="This field is required">
						</div>
					</div>

					<div class="col-md-10 form-group">
						<label for="userID" class="">Transaction Status</label>
						<div class="controls">
							<input type="email" name="email" class="form-control" required
								data-validation-required-message="This field is required">
						</div>
					</div>

				</fieldset>

			</div>

		</div>
	</div> -->
	
	
	<div class="box box-info"  id="contractTableDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle">Invoices</h4>
		</div>
		<fieldset>
						<div class="col-md-2">
				<div class="box-body">
					<fieldset>
						<!-- <div style="margin-top: 40px" class="form-group row">
							<div class="col-sm-12">
								<div class="checkbox">
									<input type="checkbox" id="acceptTerms" name="acceptTerms" value="Yes">
									<label for="acceptTerms">Show All</label>
								</div>
							</div>
						</div> -->
					</fieldset>
				</div>

			</div>
					</fieldset>

		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="invoiceAuthTbl"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr class="text-yellow">
								<th></th>								
								<th>Name</th>
								<th>Contract No</th>
								<th>Invoice Date</th>
								<th>Inv No</th>
								<th>Total</th>
								<th>BatchNo</th>
								<th>Reason</th>
								<th>Status</th>
								<th>Details</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								
							</tr>
						</tbody>
					</table>
					<!-- <div>
						<button type="button" id="AuthorizeButton"
							class="btn btn-primary">Authorize</button>
					</div> -->
				</div>
			</div>

		</div>
	</div>
	
</div>

<script type="text/javascript">

	$('#titleID').text("View Transaction Details");
	$('#bcumb').text("View Transaction Details");

</script>


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

 <script src="resources/js/customjs/invoice/viewinvoice.js"></script>

