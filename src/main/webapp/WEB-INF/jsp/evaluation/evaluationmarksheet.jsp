
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Evaluation Mark Sheet</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
			<div class="row">
				<div class="col-md-6">

					<fieldset>
						<h4 class="card-subtitle text-green">Evaluation Mark Sheet</h4>
						<br>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Tender
								No *</label>
							<div class="col-sm-8" id="ev_trnderdiv">
								<select id="ems_tenderid" name="ems_tenderid"
									class="form-control select2" value="" required="required">
								</select>
							</div>
						</div>


						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">
								Vender * </label>
							<div class="col-sm-8" id="ev_venderdiv">
								<select id="vender_ID" name="vender_ID"
									class="form-control select2" value="" required="required">
								</select>
							</div>
						</div>
					</fieldset>
					<br />



				</div>
				<div class="col-md-6" style="display: flex; justify-content: center; align-items: center;">
					<div>
						<button type="button" id="view_mark_sheet" class="btn btn-info">View Mark Sheet Details</button>
					</div>

				</div>
			</div>


		<div class="row">
			<div class="box box-info animated fadeInDownBig" id="marksheetTable">
					<div class="box-header with-border">
					<h4 class="card-subtitle">Insert a New Mark Sheet</h4>
					</div>
				<div class="row">
					<div class="col-md-12">
						<div class="box-body">
							<table id="mark_sheet_table"
								class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
								cellspacing="0" width="100%">
								<thead>
									<tr class="text-yellow">
										<th>Index</th>
										<th>Criteria</th>
										<th>Maximum Mark (%)</th>
										<th>Given Mark</th>
										<th>Comment</th>
									</tr>
								</thead>
								<tbody>

								</tbody>
							</table>
						</div>
							<div class="box-footer">
								<button type="button" id="submit_button" class="btn btn-info pull-right">Submit</button>
							</div>
					</div>
				</div>
			</div>
		</div>


			<!-- <div class="col-md-12">
					<table
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select">
						<thead>
							<tr>
								<th>No</th>
								<th>Criteria</th>
								<th>Maximum Mark (%)</th>
								<th>Given Mark</th>
							</tr>
						</thead>


						<tbody>
							<tr>
								<td>1</td>
								<td>Functional / Technical</td>
								<td>35</td>
								<td><input id="rfp_filename" name="rfp_filename"
									type="number" class="form-control" required="required"></td>

							</tr>

							<tr>
								<td>2</td>
								<td>Profile / Client Reference</td>
								<td>10</td>
								<td><input id="rfp_filename" name="rfp_filename"
									type="number" class="form-control" required="required"></td>
							</tr>

							<tr>
								<td>3</td>
								<td>Similar Project</td>
								<td>20</td>
								<td><input id="rfp_filename" name="rfp_filename"
									type="number" class="form-control" required="required"></td>
							</tr>

							<tr>
								<td>4</td>
								<td>Experience of the Team</td>
								<td>10</td>
								<td><input id="rfp_filename" name="rfp_filename"
									type="number" class="form-control" required="required"></td>
							</tr>

							<tr>
								<td>5</td>
								<td>Implementation Approach /Project Plan</td>
								<td>10</td>
								<td><input id="rfp_filename" name="rfp_filename"
									type="number" class="form-control" required="required"></td>
							</tr>

							<tr>
								<td>6</td>
								<td>SUPPORT ARRANGEMENTS</td>
								<td>3</td>
								<td><input id="rfp_filename" name="rfp_filename"
									type="number" class="form-control" required="required"></td>
							</tr>

							<tr>
								<td>7</td>
								<td>PRIOR EXPERIENCE</td>
								<td>7</td>
								<td><input id="rfp_filename" name="rfp_filename"
									type="number" class="form-control" required="required"></td>
							</tr>

							<tr>
								<td>8</td>
								<td>STANDARDS & CERTIFICATIONS</td>
								<td>5</td>
								<td><input id="rfp_filename" name="rfp_filename"
									type="number" class="form-control" required="required"></td>
							</tr>

							<tr>
								<td></td>
								<td>Total</td>
								<td>100</td>
								<td><input id="rfp_filename" name="rfp_filename"
									type="number" class="form-control" required="required"></td>
							</tr>
						</tbody>

					</table>
				</div> -->

		</div>
	</div>
</div>


<!-- Modal for View Mark Sheet Details-->
<div id="markSheet_Modal" class="modal fade bd-example-modal-lg"
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
									<h1 class="modal-title pull-right" id="mdl_view_marks">View Mark Sheet Details</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="modal-body">
				<div class="media">
					<div class="col-lg-12">
						<div class="box-body">
							<table id="eve_marksheet"
								class="table table-bordered table-hover display nowrap margin-top-10 table-responsive">
								<thead>

									<tr class="text-yellow">
										<th>Index</th>
										<th>Tender No</th>
										<th>Tender Name</th>
							<!--		<th>Supplier Id</th> -->
										<th>Supplier Name</th>
										<th>Created Date & Time</th>
										<th>Is Marked</th>
									</tr>
								</thead>
								<tbody>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn bg-olive pull-right"
					data-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">
	$('#titleID').text("Evaluation Mark Sheet");
	$('#bcumb').text("Evaluation Mark Sheet");
	//	document.getElementById("submit_button").disabled = true;
</script>


</script>
<script src="resources/js/customjs/evaluation/evaluationmarksheet.js"></script>


