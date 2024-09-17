<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Evaluation Sheet Create</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
			<div class="row">
				<div class="col-md-6">

					<fieldset>
						<h4 class="card-subtitle text-green">Evaluation Sheet Create</h4>
						<br>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Tender
								No *</label>
							<div class="col-sm-8" id="ev_trnderdiv">
								<select id="evesheet_trnderid" name="evesheet_trnderid"
									class="form-control select2" value="" required="required">
								</select>
							</div>
						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">
								Criteria Name *</label>
							<div class="col-sm-8" id="ev_crnamediv">
								<input id="ev_crname" name="ev_crname" type="text"
									class="form-control" value="" required="required"
									autocomplete="off">
							</div>
						</div>

						
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">
								Maximum Mark (%) *</label>
							<div class="col-sm-8" id="ev_maxmarkdiv">
								<input id="ev_maxmark" name="ev_maxmark" type="number"
									oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
									type="number" maxlength="5"
									class="form-control" value="" required="required"
									autocomplete="off">
							</div>
						</div>
						

						<div class="form-group row">
							<div class="col-sm-3">
								<input id="ev_addcr" name="ev_addcr" type="button" class="btn"
									value="Add Criteria" required="required">
							</div>
						</div>
					</fieldset>
					<br />
				</div>

				<div class="col-md-6"
					style="display: flex; justify-content: center; align-items: center;">
					<div>
						<button type="button" id="view_eva_sheet" class="btn btn-info">View
							Evaluation Sheet Details</button>
					</div>
				</div>
			</div>


			<div class="row">
				<div class="box box-info animated fadeInDownBig" id="marksheetTable">
					<div class="box-header with-border">
						<h4 class="card-subtitle">Create a New Evaluation Sheet</h4>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="box-body">
								<table id="evaddedtable"
									class="table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select">
									<thead>
										<tr class="text-yellow">
									 <!--   <th>Index </th> -->
											<th>Criteria Name</th>
											<th>Maximum Mark (%)</th>
											<th>Remove</th>
										</tr>
									</thead>
								</table>
							</div>
							<div class="box-footer">
								<button type="submit" id="submit_button"
									class="btn btn-info pull-right">Submit</button>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>


<!-- Modal for View Evaluation Sheet Details-->
<div id="sheetCreate_Modal" class="modal fade bd-example-modal-lg"
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
									<h1 class="modal-title pull-right" id="mdl_view_marks">View
										Evaluation Sheet Details</h1>
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
							<div class="form-group row">
								<label for="inputPassword3"
									class="col-sm-4 control-label text-yellow">Tender No & Tender Name *</label>
								<div class="col-sm-8" id="evsheet_tenderdiv">
									<select id="evesheet_tenderNo" name="evesheet_tenderNo"
										class="form-control select2" value="" required="required">
									</select>
								</div>
							</div>
							
						<div id="table_ST_Div">
							<table id="eve_sheetcreate"
								class="table table-bordered table-hover display nowrap margin-top-10 table-responsive">
								<thead>
									<tr class="text-yellow">
										<th>Index</th>
										<th>Criteria</th>
										<th>Maximum Mark (%)</th>
								<!--	<th>Created User</th> -->
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
			<div class="modal-footer">
				<button type="button" class="btn bg-olive pull-right"
					data-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
</div>



<script type="text/javascript">
	$('#titleID').text("Evaluation Sheet Create");
	$('#bcumb').text("Evaluation Sheet Create");
	document.getElementById("submit_button").disabled = false;
</script>


</script>
<script src="resources/js/customjs/evaluation/evaluationsheetcreate.js"></script>