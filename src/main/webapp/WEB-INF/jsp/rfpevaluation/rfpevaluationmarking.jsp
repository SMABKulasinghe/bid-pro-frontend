<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">RFP Evaluation Marking</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<div class="col-md-6">
			
					<fieldset>
					<!-- <h4 class="card-subtitle text-green">Create a committee for RFP</h4> <br> -->
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Closed Tender No <span style="color: red">*</span> </label>
						<div class="col-sm-8" id="ev_trnderdiv">
							<select id="ecc_tenderid" name="ecc_tenderid" class="form-control select2" value="" required="required"> </select>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Select a Suppliers <span style="color: red">*</span> </label>
						<div class="col-sm-8" id="ev_venderdiv">
							<select id="supplier_list" name="supplier_list" class="form-control select2" value="" required="required"> </select>
						</div>
					</div>
					
				</fieldset>
				<br/>
			
			</div>
			<!-- <fieldset class="col-md-12">
					<div>
						<button type="create" id="create_button" class="btn btn-info pull-right"> Create </button>
					</div>
			</fieldset> -->
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
								<th>Title (Header Name)</th> 
								<th>Description (Field Name)</th> 
								<th>Vender Response (Yes/No)</th>
								<th>Vender Comment</th>
								<th>Price</th> 
								<th>QTY</th> 
								<th>Unit</th> 
								<th>Give a Mark for Supplier</th> 
								<th>Comment</th> 
							</tr>
						</thead>
						<tbody>
						
						</tbody>
					</table>
				</div>
			</div>
		</div>
	  </div>
	  <div class="col-md-12" id="submitButtonFieldSet">
			<div id="submitButtonDiv">
				<button type="button" id="create_button" class="btn btn-info pull-right"> Create </button>
			</div>
	</div>
	</div>
		
	</div>
	</div>
</div>

<script type="text/javascript">
	$('#titleID').text("RFP Evaluation Marking");
	$('#bcumb').text("RFP Evaluation Markings");
//	document.getElementById("submit_button").disabled = false;
</script>


</script>
<script src="resources/js/customjs/rfpevaluation/rfpevaluationmarking.js"></script>