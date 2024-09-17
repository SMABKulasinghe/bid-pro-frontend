<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Evaluation Committee Creation</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<div class="col-md-6">
			
					<fieldset>
					<h4 class="card-subtitle text-green">Evaluation Committee Creation</h4> <br>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Tender No <span style="color: red">*</span> </label>
						<div class="col-sm-8" id="ev_trnderdiv">
							<select id="ecc_tenderid" name="ecc_tenderid" class="form-control select2" value="" required="required"> </select>
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> Committee Member <span style="color: red">*</span> </label>
						<div class="col-sm-8" id="ev_venderdiv">
							<select id="committee_member" name="committee_member" class="form-control select2" value="" required="required"> </select>
						</div>
					</div>
				</fieldset>
				<br/>
			
			</div>
			<fieldset class="col-md-12">
					<div>
						<button type="create" id="create_button" class="btn btn-info pull-right"> Create </button>
					</div>
			</fieldset>
		</div>
	
	
	
	<div class="row">
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
	</div>
		
	</div>
	</div>
</div>

<script type="text/javascript">
	$('#titleID').text("Evaluation Committee Creation");
	$('#bcumb').text("Evaluation Committee Creation");
//	document.getElementById("submit_button").disabled = false;
</script>


</script>
<script src="resources/js/customjs/evaluation/evaluationcommitteecreation.js"></script>