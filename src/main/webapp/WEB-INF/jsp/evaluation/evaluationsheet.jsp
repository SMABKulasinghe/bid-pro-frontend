
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Evaluation Sheet</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<div class="col-md-6">
			
					<fieldset>
					<h5 class=" ">Evaluation Sheet</h5>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Tender  No *</label>
						<div class="col-sm-8">
							<select id="trnderid_1" name="trnderid_1"
								class="form-control select2" value="" required="required"> </select>
						</div>
					</div>
					
					<!-- <div class="form-group row">
						<label for="Test" class="col-sm-4 control-label">Test *</label>
						<div class="col-sm-8">
							<select id="Test" name="Test"
								class="form-control select2" value="" required="required">
									<option>blaa 1</option>
									<option>blaa 2</option>
								 </select>
						</div>
					</div> -->
					
					<!-- <button id="Test">Tesla</button> -->
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label"> Vender * </label>
						<div class="col-sm-8">
							<select id="vender_ID_1" name="vender_ID_1" 
								class="form-control select2" value="" required="required"> </select>
						</div>
					</div>
						
							
				
				
				</fieldset>
				<br/>
			
				
			</div>
			
		</div>
		</div>
	</div>
	
	<div class="box box-info animated fadeInDownBig" id="MarksTable">
		<div class="box-header with-border">
			<h4 class="card-subtitle">Marks of Tender</h4>
		</div>

		<div class="box-body" >
			<div class="row" >
				<div class="col-md-12" id="marktableDiv">
					<!-- <table id="evaluationMainTable" class="table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select">
					<thead id="MarkSheetTableHeader">
						<tr id="MarkSheetTableHeaderTableRow">
						
							<th>No</th>
							<th>Criteria </th>
							<th>Mark (%)</th>
						
							
		
						</tr>
					</thead>
					<tbody id="MarkSheetTableBody">
						
						
					</tbody>
					</table> -->
			</div>
			</div>
		</div>
	</div>
</div>

<script type="text/javascript">

	$('#titleID').text("Vendor Evaluation Sheet");
	$('#bcumb').text("Vendor Evaluation Sheet");

</script>


<script src="resources/js/customjs/evaluation/evaluationsheet.js"></script>

