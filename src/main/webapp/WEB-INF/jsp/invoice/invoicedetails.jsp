
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Invoice Details</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="row">
			<div class="col-md-8">
				<br />
				<fieldset>
					<div class="col-md-8 form-group" id="data_5">
						<label for="userID" class="">Select a Date Range</label>

						<div class="input-daterange input-group" id="datepicker">
							<input type="text" class="input-sm form-control" name="start"
								id="Date_start" data-mask="12/31/2999" /> <span
								class="input-group-addon">to</span> <input type="text"
								class="input-sm form-control" name="end" id="Date_end"
								data-mask="12/31/2999" />
						</div>
					</div>

					<div class="col-md-8 form-group">
						<label for="userID" class="">Select Company</label>
						<div class="controls">
							<input type="email" name="email" class="form-control" required
								data-validation-required-message="This field is required">
						</div>
					</div>

					<div class="col-md-8 form-group">
						<label for="userID" class="">Transaction Status</label>
						<div class="controls">
							<input type="email" name="email" class="form-control" required
								data-validation-required-message="This field is required">
						</div>
					</div>

				</fieldset>

				<fieldset>
					<div class="col-md-8 form-group">
						<button type="submit" class="btn btn-default">CANCEL</button>
						<button type="submit" class="btn btn-info pull-right">SEARCH
						</button>
					</div>
				</fieldset>
			</div>

			<div class="col-md-4">
							<div style="margin: 20px; opacity: 0.1">
									<i class="fa  fa-history"
										style="font-size: 150px; color: #e5e5e5"></i>
								</div>
								
							</div>

		</div>
	</div>
</div>

<script type="text/javascript">

	$('#titleID').text("Invoice Details");
	$('#bcumb').text("Invoice Details");

</script>

