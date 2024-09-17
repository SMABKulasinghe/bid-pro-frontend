<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">Invite for Suppliers</h3>
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
							<select id="tenderid" name="tenderid" class="form-control select2" value="" required="required"> </select>
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">File Names <span style="color: red">*</span> </label>
						<div class="col-sm-8" id="ev_trnderdiv">
							
							<textarea class="form-control" id="noteNFileNames" name="noteNFileNames" rows="4" cols="50"></textarea>
						</div>
					</div>
					
					
				</fieldset>
				<br/>
			
			</div>
			<fieldset class="col-md-12">
					<div>
						<button type="create" id="create_button" class="btn btn-info pull-right"> Invite </button>
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
					<div class="col-sm-4 form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Closed Tender No <span style="color: red">*</span> </label>
						<div class="col-sm-8" id="ev_trnderdiv">
							<select id="tenderid_com_tbl" name="tenderid_com_tbl" class="form-control select2" value="" required="required"> </select>
						</div>
					</div>
					<table id="tblTenderDetails"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr class="text-yellow">
						    	<th>Index</th>  
								<th>Company Name</th> 
								<th>Download File</th>
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
	$('#titleID').text("Additional File Upload Invitation For Supplier");
	$('#bcumb').text("Additional File Upload Invitation For Supplier");
//	document.getElementById("submit_button").disabled = false;
</script>



<script src="resources/js/customjs/tender/additionalfileuploadforinvitationsupplier.js"></script>