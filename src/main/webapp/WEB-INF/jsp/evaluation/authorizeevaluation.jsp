<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Authorize Evaluation</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
			<div class="row">
				<div class="col-md-6">

					<fieldset>
						<h4 class="card-subtitle text-green">Authorize Evaluation</h4>
						<br>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Tender No <span style="color: red">*</span></label>
							<div class="col-sm-8" id="auth_trnderdiv">
								<select id="euth_trnderid" name="euth_trnderid" class="form-control select2" value="" required="required"> </select>
							</div>
						</div>
					</fieldset>
					<br />
				</div>
			</div>


			<div class="row">
				<div class="box box-info animated fadeInDownBig" id="authEvalusheetTable">
					<div class="box-header with-border">
						<h4 class="card-subtitle text-green">Created Evaluation Sheet</h4>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="box-body">
								<table id="evaAuthtable"
									class="table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select">
									<thead>
										<tr class="text-yellow">
									   		<th>Index </th> 
											<th>Criteria Name</th>
											<th>Maximum Mark (%)</th>
										</tr>
									</thead>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			
			<div class="row">
				<div class="box box-info animated fadeInDownBig" id="authEvaCommitteeTable">
					<div class="box-header with-border">
						<h4 class="card-subtitle text-green">Created Evaluation Committee</h4>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="box-body">
								<table id="evaCommitteetable"
									class="table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select">
									<thead>
										<tr class="text-yellow">
									   		<th>Index </th> 
											<th>Tender Name</th>
											<th>Committee Member</th>
										</tr>
									</thead>
								</table>
							</div>
							<div class="box-footer">
								<button type="button" id="reject_button" style="margin : 5px" class="btn btn-danger pull-right">Reject</button>&emsp;<strong></strong>
								<button type="button" id="authorize_button" style="margin : 5px" class="btn btn-primary pull-right">Authorize</button>&emsp;<strong></strong>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>



<script type="text/javascript">
	$('#titleID').text("Authorize Evaluation");
	$('#bcumb').text("Authorize Evaluation");
//	document.getElementById("submit_button").disabled = false;
</script>


</script>
<script src="resources/js/customjs/evaluation/authorizeevaluation.js"></script>