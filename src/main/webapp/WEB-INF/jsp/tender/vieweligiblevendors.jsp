<div class="col-md-12 col-lg-12 animated fadeInLeft">
	<div class="box box-default">

		<div class="box box-info">
			<div class="box-header with-border">
				<h4 class="card-subtitle text-green">Tenders</h4>
			</div>
			<div class="">
				<h5 class="text-green"></h5>
			</div>
			<!-- <div class="row">

				<div class="col-md-9">
					<div class="box-body">
						<fieldset>


							<div style="margin-top: 40px" class="form-group row">
								<label for="userID" class="col-sm-3 control-label">Enter
									Tender No*</label>

								<div class="col-sm-5">
									<input type="text" class="form-control" id="tenderno"
										value="TR001" name="tenderno" placeholder="Tender No"
										autocomplete="off">
								</div>
								<button type="submit" id="searchUserIDButton"
									class="btn btn-info pull-right">SUBMIT</button>
							</div>
						</fieldset>
					</div>
				</div>




				<div class="col-md-3">
					<div style="margin: 15px; opacity: 0.1;">
						<i class="fa fa-credit-card"
							style="font-size: 150px; color: #e5e5e5"></i>
					</div>
				</div>
			</div> -->
			
			<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="tbl_tender_details"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr>
								<th>Tender No</th>
								<th>Tender Description</th>
								<th>Open</th>
								<th>Close</th>
								<th>View</th>
								
								
							</tr>
						</thead>

						<!-- <tbody>
							<tr>
								<td>P12501</td>
								<td>Banking Remittance System</td>
								<td>2021/01/10</td>
								<td>2021/04/10</td>
								<td><button type="submit" id="searchUserIDButton"
									class="btn btn-info ">SUBMIT</button></td>
							</tr>
							<tr>
								<td>P12502</td>
								<td>Vender Management System</td>
								<td>2020/12/18</td>
								<td>2021/03/18</td>
								<td><button type="submit" id="searchUserIDButton"
									class="btn btn-info ">SUBMIT</button></td>
							</tr>
							<tr>
								<td>P12503</td>
								<td>Farmer System</td>
								<td>2020/12/05</td>
								<td>2021/03/05</td>
								<td><button type="submit" id="searchUserIDButton"
									class="btn btn-info">SUBMIT</button></td>
							</tr>
							<tr>
								<td>P12502</td>
								<td>Furniture</td>
								<td>2021/01/10</td>
								<td>2021/04/10</td>
								<td><button type="submit" id="searchUserIDButton"
									class="btn btn-info">SUBMIT</button></td>
							</tr>
							<tr>
								<td>P12503</td>
								<td>A/C Repair</td>
								<td>2021/01/15</td>
								<td>2021/04/15</td>
								<td><button type="submit" id="searchUserIDButton"
									class="btn btn-info ">SUBMIT</button></td>
							</tr>
						</tbody> -->
					</table>
					
				</div>
			</div>

		</div>
			
		</div>
	</div>


	<div class="box box-info animated fadeInDownBig" id="userTableDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle text-green">Eligible Vender Details</h4>
		</div>

		<div class="box-body">
			<div class="row">
			
					<div class="col-md-12">
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-2 control-label">Tender
							Name</label>
						<div class="col-sm-10">
							<input id="cordinate_name" name="cordinate_name" type="text"
								class="form-control" required="required" value="Vender Management System"
								readonly="readonly">
						</div>
					</div>

				</div>
			
			<div class="col-md-12">
			<div class="form-group row">
							<label for="inputPassword3" class="col-sm-2 control-label">
								Description </label>
							<div class="col-sm-10">
								<input id="tender_description" name="tender_description"
									type="text" class="form-control" required="required"
									value="Vender Management System">
							</div>
						</div>
			</div>
				</div>
				<div class="row">

				<div class="col-md-12">

<div class="form-group row">
							
							<label for="inputPassword3" class="col-sm-2 control-label">Closing
								Date</label>
							<div class="col-sm-2">
								<input id="closing_date" name="closing_date" type="text"
									value="2021-02-25" class="form-control">
							</div>
							
				
							<label for="inputPassword3" class="col-sm-1 control-label">Time
							</label>
							<div class="col-sm-3">
								<input id="closing_date" name="closing_date" type="text"
									value="12.30" class="form-control">
							</div>
							
						
							<label for="inputPassword3" class="col-sm-1 control-label">Status</label>
							<div class="col-sm-3">
								<input id="status" name="status" type="text"
									class="form-control" value="Open">
							</div>
						</div>
						</div>
	</div>
					
					<br />



				</div>

				

		
		

	
	<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="example"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr>
								<th>Vender No</th>
								<th>Vendor Name</th>
								<th>Category</th>
								<th>Sub Category</th>
								
								
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>P12501</td>
								<td>OLAK</td>
								<td>Computer Software</td>
								<td>NetWork</td>
								
							
							</tr>
							<tr>
								<td>P12502</td>
								<td>ASKPI</td>
								<td>Computer Software</td>
								<td>IT Support</td>
								
							

							</tr>
							<tr>
								<td>P12503</td>
								<td>OnSys</td>
								<td>Computer Software</td>
								<td>Data Base Service</td>
								
								
							</tr>
							<tr>
								<td>P12502</td>
								<td>Interblocks</td>
								<td>Computer Software</td>
								<td>IT Software</td>
								
								

							</tr>
							<tr>
								<td>P12503</td>
								<td>WSO2</td>
								<td>Computer Software</td>
								<td>IT Hardware</td>
								
								
							</tr>
						</tbody>
					</table>
					
				</div>
			</div>

		</div>
	

		</div>
		
		
		
	</div>
	
	
	
	



<script
	src="resources/assets/vendor_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script
	src="resources/assets/vendor_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/media/js/jquery.dataTables.min.js"></script>

<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.flash.min.js"></script>

<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.html5.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.print.min.js"></script>
<script src="resources/js/pages/data-table.js"></script>

<script src="resources/js/customjs/tender/vieweligiblevendors.js"></script>









<script type="text/javascript">
	$('#titleID').text("View & download Tenders");
	$('#bcumb').text("View & download Tenders");
</script>




