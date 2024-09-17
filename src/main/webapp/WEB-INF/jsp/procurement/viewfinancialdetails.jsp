
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">View Financial Details</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
			<div class="row">
				<div class="col-md-6">
				<fieldset>
						<h4 class="card-subtitle text-green">View Financial Details</h4> <br>
						
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Tender No <span style="color: red">*</span> </label>
						<div class="col-sm-8" id="finan_trnderdiv">
							<select id="finan_tenderid" name="finan_tenderid" class="form-control select2" value="" required="required"> </select>
						</div>
					</div>						
				</fieldset>
				</div>			
		 </div>		
		
		
		<div class="row">
			<div class="box box-info animated fadeInDownBig" id="viewFinanceTable">
				<div class="box-header with-border">
					<h4 class="card-subtitle text-green">Financial Details for Tender</h4>
				</div>
		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="table_view_finance"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr class="text-yellow">
						    	<th>Index</th>  
								<th>Supplier Name</th> 
								<th>Phone Number</th> 
								<th>Email</th>
								<th>More</th>
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



<div id="mdl_financial_details" class="modal fade bd-example-modal-lg" role="dialog" data-toggle="modal" >
		<div class="modal-dialog modal-lg" style="max-width: 90%">

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
										<div class="row" style="height: 15px;">
											<div class="col-md-12" id="amountLKROfallDiv">
												<!-- <p id="add1" class="pull-right" style="font-size: 12px">No 04, Lambert watta,</p> -->
											</div>
										</div>
										<div class="row" style="height: 15px;">
											<div class="col-md-12" id="amountUSDOfallDiv">
												<!-- <p id="add2" class="pull-right" style="font-size: 12px"> Mallawapitiya, Kurunegala</p> -->
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
				
				<div class="modal-body">
					<div style="height: 100%">
						<div class="row" id="supplier_div">
							<div class="col-md-12 ">
								<div class="row"></div>
								<div class="row">
									<div class="col-md-6">
										<h5 class="text-green">CAPPEX</h5>
										<div class="box-body">
											<table id="CappexTable"
												class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
												cellspacing="0" width="100%">
												<thead>
													<tr class="text-yellow">
														<th>Currency Type</th>
														<th>Amount</th>
														<th>Comment</th>
														<th>Financial Description</th>
													</tr>
												</thead>
												<tbody>
													
												</tbody>
											</table>
										</div>
									</div>
									
									<div class="col-md-6">
										<h5 class="text-green">OPPEX</h5>
										<div class="box-body">
											<table id="oppexTable"
												class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
												cellspacing="0" width="100%">
												<thead>
													<tr class="text-yellow">
														<th>Currency Type</th>
														<th>Amount</th>
														<th>Comment</th>
														<th>Financial Description</th>
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
				<div class="modal-footer" id="btn">
					<button id="cancel_rfp_details" type="button" class="btn bg-olive pull-right" data-dismiss="modal" >Close</button>
				</div>
			</div>

		</div>
	</div>






<script type="text/javascript">
	$('#titleID').text("View Financial Details");
	$('#bcumb').text("View Financial Details");
	//document.getElementById("submit_button").disabled = false;
</script>


</script>
<script src="resources/js/customjs/procurement/viewfinancialdetails.js"></script>
