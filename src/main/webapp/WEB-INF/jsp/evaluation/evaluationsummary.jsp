
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">Evaluation Sheet</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<div class="col-md-6">
			
					<fieldset>
					<!-- <h5 class="text-green">Evaluation Sheet</h5> -->
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Tender  No *</label>
						<div class="col-sm-8" id="tenderIdDiv">
							<select id="tenderIddd" name="tenderIddd"
								 	class="form-control select2" value="" required="required"> </select>
						</div>
						<!-- <div class="col-sm-3">
							<button type="submit" id="searchUserIDButton"
									class="btn btn-info pull-right">Search</button>
						</div> -->
					</div>
					<!-- <div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> </label>
						
						<div class="col-sm-8">
							<button type="submit" id="searchTenderIds"
									class="btn btn-info pull-right">Search</button>
						</div>
					</div> -->
					
					<!-- <div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> Tender Name *
						</label>
						<div class="col-sm-8" id="tenderName">
							<input id="rfp_filename" name="rfp_filename" type="text"
								class="form-control" value="Vender Management System" required="required">
						</div>
					</div>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> Closing Date & Time *
						</label>
						<div class="col-sm-8" id="closingDateTime">
							<input id="rfp_filename" name="rfp_filename" type="text"
								class="form-control" value="2021-Jan-15 15.00" required="required">
						</div>
					</div> -->
							
							
				
				
				</fieldset>
				<br/>
			
				
			</div>
			<div class="col-md-12">
			<table id="evaluationMarkSummery" class="table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select">
				<thead>
					<tr class="text-yellow">
					<!-- <th>No</th> -->
					<!-- <th>Vender Id</th> -->
					<th>Vender Name</th>
					<th>Mark (%)</th>
					<th>Position</th>
					
					</tr>
				</thead>
				<tbody id="evaluationMarkSummeryTableBody">
						
						
				</tbody>
			</table>
			</div>
		</div>
		</div>
	</div>
</div>

<script type="text/javascript">

	$('#titleID').text("Evaluation Summery");
	$('#bcumb').text("Evaluation Summery");
	

</script>


</script>
<script src="resources/js/customjs/evaluation/evaluationsummery.js"></script>


