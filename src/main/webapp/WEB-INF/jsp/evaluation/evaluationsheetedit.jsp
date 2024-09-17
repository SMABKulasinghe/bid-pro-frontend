<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Evaluation Sheet Edit</h3>
		</div>

		<div class="box-body">
			<div class="row">
				<div class="col-md-7">
					<fieldset>
						<h4 class="card-subtitle text-green">Evaluation Sheet Edit</h4>
						<br>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Tender
								No & Tender Name *</label>
							<div class="col-sm-8" id="ev_trnderdiv">
								<select id="edit_trnderid" name="edit_trnderid"
									class="form-control select2" value="" required="required">
								</select>
							</div>
						</div>
					</fieldset>
					<br />
				</div>
			</div>


			<div class="row" id="table_div_edit">
				<div class="box box-info animated fadeInDownBig" id="eveditsheetTable">
					<div class="box-header with-border">
						<h4 class="card-subtitle">Edit a Evaluation Sheet</h4>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="box-body">
								<table id="edit_table"
									class="table table-bordered table-hover display nowrap margin-top-10 table-responsive" 
									cellspacing="0" width="100%">
									<thead>
										<tr class="text-yellow">
											<th>Index</th>
											<th>Criteria Name</th>
											<th>Maximum Mark (%)</th>
											<th>Edit Sheet</th>
										</tr>
									</thead>
									<tbody>

									</tbody>
								</table>
							</div>
									<div class="box-footer">
									<label for="running_currentTotal" id= "running_currentTotal" class="col-sm-4 control-label text-green">123</label>
						<!--		<button type="button" id="add_new_criteria_btn" class="btn btn-warning pull-right">Add New Criteria</button> -->
									<input type="button" id="add_new_criteria_btn" class="btn btn-warning pull-right" value="Add Criteria" required="required"></button>
							</div> 
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</div>



<!-- Modal for Edit Evaluation Sheet -->
<div id="edit_Modal" class="modal fade bd-example-modal-lg" role="dialog">
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
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Edit Criteria</h1>
										<label for="currentTotal" id= "currentTotal" class="col-sm-4 control-label text-green"></label>
										<label for="allowedValue" id= "allowedValue" class="col-sm-4 control-label text-yellow"></label>
								</div>
							</div>
							
							<div class="row">
								<div class="col-md-12">
									<p class="pull-right" style="margin-bottom: 0"
										id="mdl_ii_tender_Name">0000000</p>
									<p class="pull-right" style="margin-bottom: 0">Tender Name - </p>
								</div>
							</div> 
							
						</div>
					</div>
				</div>
			</div>

			<div class="modal-body">
				<div class="media">
					<div class="col-md-12">
						<div class="box-body">
							<div class="row">
								<div class="col-md-6">
									<fieldset>
										<h4 class="card-subtitle text-green">Existing Values</h4>
										<br> <label for="ecc_e_criteria_no_2_label"
											class="col-sm-6 control-label text-green">No. (#)</label> <label
											for="ecc_e_criteria_no_2" class="col-sm-5 control-label" id="ev_hash">1</label>

										<div class="form-group row">
											<label for="ecc_e_criteria_name_L" 
												class="col-sm-6 control-label text-green">Criteria Name *</label> <label
												for="eva_criteria_name" class="col-sm-6 control-label" id="eva_criteria_name">Price</label>
										</div>
										<div class="form-group row">
											<label for="ecc_e_max_mark_L" class="col-sm-6 control-label text-green">
												Maximum Mark (%)* </label> <label for="eva_maxmark"
												class="col-sm-6 control-label" id="eva_maxmark">25</label>
										</div>
									</fieldset>
								</div>
							
							
								<div class="col-md-6">
									<fieldset>
										<h4 class="card-subtitle text-yellow">Insert New Values</h4>
										<br> <label for="ecc_e_criteria_no_label"
											class="col-sm-4 control-label">No. (#)</label> <label
											for="ecc_e_criteria_no_1" class="col-sm-4 control-label" id="ev_hash_o">1</label>

										<div class="form-group row">
											<label for="ecc_e_criteria_name_LL"
												class="col-sm-4 control-label">Criteria Name *</label>
											<div class="col-sm-8" id="ev_crdiv">
												<input type="text" id="ecc_e_criteria_name"
													class="form-control" autocomplete="off" />
											</div>
										</div>
										<div class="form-group row">
											<label for="ecc_e_max_mark_LL" class="col-sm-4 control-label">
												Maximum Mark (%)* </label>
											<div class="col-sm-8" id="ev_venderdiv">
												<input type="number"
													oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
													type="number" maxlength="5" id="ecc_e_max_mark"
													class="form-control" autocomplete="off" />
											</div>
										</div>
									</fieldset>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			
				<div class="modal-footer"> 
				<button type="button" style="margin : 5px" id="close_button" class="btn bg-olive pull-right" data-dismiss="modal">Close</button>&emsp;<strong></strong>
				<button type="button" style="margin : 5px" id="confirm_button" class="btn btn-info pull-right" data-dismiss="modal">Confirm</button>&nbsp; &nbsp;</div>
		</div>
	</div>
</div>




<!-- Modal for Add New Criteria -->
<div id="newCriteria_Modal" class="modal fade bd-example-modal-lg" role="dialog">
	<div class="modal-dialog modal-lg">

		<!-- Modal content-->
		<div class="modal-content">
			<div class="modal-header">
				<div style="width: 100%;">
					<div class="row">
						<div class="col-md-2">
							<button type="button" class="close pull-left" data-dismiss="modal">&times;</button>
						</div>
						
						<div class="col-md-10">
							<div class="row">
								<div class="col-md-12">
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Add New Criteria</h1>
								</div>
							</div>
				       
				<!--		<div class="row">
								<div class="col-md-12">
									<p class="pull-right" style="margin-bottom: 0"
										id="mdl_ii_newtender_Name">0000000</p>
									<p class="pull-right" style="margin-bottom: 0">Tender Name - </p>
								</div>
							</div> -->
					
					   </div>
					</div>
				</div>
			</div>

			<div class="modal-body">
				<div class="media">
					<div class="col-md-12">
						<div class="box-body">
							<div class="row">
								<div class="col-md-6">
									<fieldset>
											<label for="newCurrentTotal" id= "newCurrentTotal" class="col-sm-6 control-label text-green"></label>
											<label for="newAllowedValue" id= "newAllowedValue" class="col-sm-6 control-label text-yellow"></label>
									</fieldset>
								</div>
							
							
								<div class="col-md-6">
									<fieldset>
										<h4 class="card-subtitle text-yellow">Insert New Values</h4>
										<br> <label for="e_criteria_no_label"
											class="col-sm-4 control-label">No. (#)</label> <label
											for="new_criteria_no_1" class="col-sm-4 control-label" id="new_hash_o">1</label>

										<div class="form-group row">
											<label for="ecc_e_criteria_name_LL"
												class="col-sm-4 control-label">Criteria Name *</label>
											<div class="col-sm-8" id="ev_crdiv1">
												<input type="text" id="new_criteria_name"
													class="form-control" autocomplete="off" />
											</div>
										</div>
										
										<div class="form-group row">
											<label for="ecc_e_max_mark_LL" class="col-sm-4 control-label">
												Maximum Mark (%)* </label>
											<div class="col-sm-8" id="ev_venderdiv1">
												<input type="number"
													oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
													type="number" maxlength="5" id="e_max_mark"
													class="form-control" autocomplete="off" />
											</div>
										</div>
									</fieldset>
								</div>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			
				<div class="modal-footer"> 
				<button type="button" style="margin : 5px" id="adclose_button" class="btn bg-olive pull-right" data-dismiss="modal">Close</button>&emsp;<strong></strong>
				<button type="button" style="margin : 5px" id="insert_button" class="btn btn-info pull-right" data-dismiss="modal">Insert</button>&nbsp; &nbsp;</div>
		</div>
	</div>
</div>



<script type="text/javascript">
	$('#titleID').text("Evaluation Sheet Edit");
	$('#bcumb').text("Evaluation Sheet Edit");
	document.getElementById("confirm_button").disabled = false;
</script>


</script>
<script src="resources/js/customjs/evaluation/evaluationsheetedit.js"></script>