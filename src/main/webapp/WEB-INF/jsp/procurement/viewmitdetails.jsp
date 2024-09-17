<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">View MIT Details</h3>
		</div>
		
		<div class="box-body">
			<div class="row">
				<div class="col-md-6">
				<fieldset>
						<!-- <h4 class="card-subtitle text-green">View MIT Details</h4> <br> -->
						
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Tender No <span style="color: red">*</span> </label>
						<div class="col-sm-8" id="mit_trnderdiv">
							<select id="viewMit_tenderid" name="viewMit_tenderid" class="form-control select2" value="" required="required"> </select>
						</div>
					</div>						
				</fieldset>
				</div>			
		 </div>		
		
		
		<div class="row" id="table_div_mit">
				<div class="box box-info animated fadeInDownBig" id="mitTableDiv">
					<div class="box-header with-border">
						<h4 class="card-subtitle text-green">View MIT Details</h4>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="box-body">
								<table id="mit_table"
									class="table table-bordered table-hover display nowrap margin-top-10 table-responsive" 
									cellspacing="0" width="100%">
									<thead>
										<tr class="text-yellow">
											<th>Index</th>
											<th>View Picture</th>
											<th>View File</th>
											<th>Description</th>
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
		
	
	
<!-- Modal for View Picture-->
<div id="mdl_view_Picture" class="modal fade bd-example-modal-lg" role="dialog">
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
									<h1 class="modal-title pull-right" id="mdl_com_name">Picture Upload</h1>
								</div>
							</div>
								<div class="row">
									<div class="col-md-12">
										<p class="pull-right" style="margin-bottom: 0" id="mdl_ii_sup_no">0000000</p>
										<p class="pull-right" style="margin-bottom: 0">Tender Name - </p>
									</div>
							  </div> 
						</div>
					</div>
				</div>
			</div>
			
			<div class="modal-body">
				<div style="height: 100%">
					<div class="row">
						<div class="col-md-12">
							<fieldset>																
								<div class="form-group row">
									<label for="inputPassword3" class="col-sm-6 control-label">Details</label>
									<img src="" alt="Smiley face" height="680" width="680" style="padding:10px" id="imgLocation">
								</div>
							</fieldset>							
						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn bg-olive pull-right" data-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
</div>



<script type="text/javascript">
	$('#titleID').text("View MIT Details");
	$('#bcumb').text("View MIT Details");
//	document.getElementById("confirm_button").disabled = false;
</script>


</script>
<script src="resources/js/customjs/procurement/viewmitdetails.js"></script>
