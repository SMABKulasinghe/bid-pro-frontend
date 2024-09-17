
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">View Payments Details</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="row">
			<div class="col-md-6">
				<br />
				<fieldset>
					<div class="col-md-10 form-group" id="data_5">
						<label for="userID" class="">Supplier Code</label>

						<div class="input-daterange input-group" id="datepicker">
							<input id="supplier_code" name="supplier_code" type="text"
								class="form-control" required="required">
						</div>
					</div>

					<div class="col-md-10 form-group">
						<label for="userID" class="">Contract No</label>
						<div class="controls">
							<input type="email" name="email" class="form-control" required
								data-validation-required-message="This field is required">
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
						<label for="userID" class="">Expiry Date </label>
						<div class="controls">
							<input type="email" name="email" class="form-control" required
								data-validation-required-message="This field is required">
						</div>
					</div>

					<div class="col-md-10 form-group">
						<label for="userID" class="">Amount Range </label>
						<div class="controls">
							<input type="email" name="email" class="form-control" required
								data-validation-required-message="This field is required">
						</div>
					</div>
				</fieldset>
			</div>


		</div>
	</div>
</div>

<script type="text/javascript">

	$('#titleID').text("View Payments Details");
	$('#bcumb').text("View Payments Details");

</script>