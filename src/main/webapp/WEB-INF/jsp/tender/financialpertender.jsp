<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Financial Per Tender</h3>
		</div>

		<div class="box-body">
			<div class="row">
				<div class="col-md-6">
					<br>

					<fieldset>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">
								Tender No* </label>
							<div class="col-sm-8" id="ev_code">
								<select id="fin_tenderid" name="fin_tenderid"
									class="form-control select2" value="" required="required">
								</select>
							</div>
						</div>

						<div class="form-group row">
							<label for="description" class="col-sm-4 control-label">
								Financial Code* </label>
							<div class="col-sm-8" id="description_div">
								<select id="fin_financialCode" name="fin_financialCode"
									class="form-control select2" value="" required="required">
								</select>
							</div>
						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Type
								* </label>
							<div class="col-sm-8">

								<input type="radio" id="radio_btn_1" class="radio_btn"
									name="radio_btn" value="Yes"> <label for="radio_btn_1">Cappex</label>

								<input type="radio" id="radio_btn_2" class="radio_btn"
									name="radio_btn" value="No"> <label for="radio_btn_2">Oppex</label>

							</div>
						</div>


					</fieldset>
					<br />
				</div>

			</div>
		</div>

		<fieldset class="col-md-12">
			<div class="box-footer">
				<!-- <button type="submit" class="btn btn-default">Cancel</button> -->
				<button type="submit" id="submit_button"
					class="btn btn-info pull-right">Submit</button>
			</div>

		</fieldset>

	</div>
	
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Financial Per Tender View</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
		
			<div class="col-md-12">
				
				<div style="margin-top: 40px" class="form-group row">
					<label for="userID" class="col-sm-3 control-label">Submitted Tender No *</label>

					<div class="col-sm-5" id="getTenderIdVal">
						<select id="financialPertenderId" name="financialPertenderId"
							class="form-control select2" value="" required="required"> </select>
					</div>
					<button type="submit" id="searchUserIDButton"
						class="btn btn-info pull-right">SUBMIT</button>
				</div>
				
			</div>
			<div class="col-md-12" id="financialCodeTableDiv">
				<table id="financialCodeTable" class="table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select">
				<thead>
					<tr class="text-green">
					<th>Index</th>
					<th>Financial Code</th>
					<!-- <th>Tender Number</th>
					<th>Tender Name</th>  -->
					<th>Cappex or Opexx</th>
					<!-- <th>Remove</th> -->
					</tr>
				</thead>
				<tbody>
				
				</tbody>
				</table>
			</div>

		</div>
		</div>
		
		
		
	</div>

</div>


<script type="text/javascript">
	$('#titleID').text("Financial Per Tender");
	$('#bcumb').text("Financial Per Tender");
	document.getElementById("submit_button").disabled = false;
</script>


<script src="resources/js/customjs/tender/financialpertender.js"></script>