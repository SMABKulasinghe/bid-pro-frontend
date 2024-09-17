<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">Procurement Committee Creation</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<div class="col-md-6">
			
					<fieldset>
					<!-- <h4 class="card-subtitle text-green">Procurement Committee Creation</h4> <br> -->
					<br>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Select closed Tender  No *</label>
						<div class="col-sm-8" id="proc_com_creation">
							<select id="proc_tenderid" name="proc_tenderid"
								class="form-control select2" value="" required="required"> </select>
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> Committee Member * </label>
						<div class="col-sm-8" id="proc_com_creation_mem">
							<select id="committee_member" name="committee_member" 
								class="form-control select2"  value="" required="required"> </select>
						</div>
					</div>


						<fieldset>
							<br>
							<h5 class="  text-green">Upload Details</h5>
							<br>
							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-4 control-label">Support
									Doc 1 </label>
								<div class="col-sm-8">
									<label title="Upload pdf file" class="btn bg-olive"> <input
										type="file" name="file" id="upload_support_doc1"
										onchange="fileValidation1()"
										class="btn btn-block bg-olive btn-lg">

									</label>
								</div>
							</div>
							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-4 control-label">Support
									Doc 2 </label>
								<div class="col-sm-8">
									<label title="Upload pdf file" class="btn bg-olive"> <input
										type="file" name="file" id="upload_support_doc2"
										onchange="fileValidationCompany2()"
										class="btn btn-block  bg-olive btn-lg">

									</label>
								</div>
							</div>

							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-4 control-label">Support
									Doc 3 </label>
								<div class="col-sm-8">
									<label title="Upload pdf file" class="btn bg-olive"> <input
										type="file" name="file" id="upload_support_doc3"
										onchange="fileValidationCompany3()"
										class="btn btn-block  bg-olive btn-lg">

									</label>
								</div>
							</div>
						</fieldset>

						<!-- <div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> Select tender submitted supplier * </label>
						<div class="col-sm-8" id="proc_com_creation_mem">
							<select id="supplier_name" name="supplier_name" 
								class="form-control select2" value="" required="required"> </select>
						</div>
					</div> -->
				</fieldset>
				<br/>
			
			</div>
			<fieldset class="col-md-12">
					<div>
						<button type="create" id="create_button" class="btn btn-info pull-right"> Create </button>
					</div>
			</fieldset>
		</div>
	
	
	
	<!-- <div class="row">
		<div class="box box-info animated fadeInDownBig" id="eveCommitteeTable">
					<div class="box-header with-border">
					<h4 class="card-subtitle">Committee Members for Tender</h4>
					</div>
		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="tbl_committee"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr class="text-yellow">
						    	<th>Index</th>  
								<th>Tender No</th> 
								<th>Tender Name</th> 
								<th>Committee Member</th>
							</tr>
						</thead>
						<tbody>
						
						</tbody>
					</table>
				</div>
			</div>
		</div>
	  </div>
	</div> -->
		
	</div>
	</div>
	
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">Voting details</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<div class="col-md-6">
			
					<fieldset>
					<!-- <h5 class="text-green">Evaluation Sheet</h5> -->
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Select closed Tender  No *</label>
						<div class="col-sm-8" id="tenderIdDiv">
							<select id="procVoteTender" name="procVoteTender"
								 	class="form-control select2" value="" required="required"> </select>
						</div>
						<!-- <div class="col-sm-3">
							<button type="submit" id="searchUserIDButton"
									class="btn btn-info pull-right">Search</button>
						</div> -->
					</div>	
				
				</fieldset>
				<br/>
			
				
			</div>
			<div class="col-md-12">
			<table id="procurementVote" class="table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select">
				<thead>
					<tr class="text-yellow">
						<th>Index</th>
						
						<th>Company name</th>
						<th>Voter Name</th>
						<th>Vote Status</th>
					</tr>
				</thead>
				<tbody id="procurementVoteBody">
						
						
				</tbody>
			</table>
			</div>
		</div>
		</div>
	</div>
</div>

<script type="text/javascript">
	$('#titleID').text("Procurement Committee");
	$('#bcumb').text("Procurement Committee");
//	document.getElementById("submit_button").disabled = false;
</script>


</script>
<script src="resources/js/customjs/procurement/procurementcreationcommittee.js"></script>