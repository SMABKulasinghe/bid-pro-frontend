<div class="col-md-12 col-lg-12 animated fadeInLeft">
	<div class="box box-default">

		<div class="box box-info">
			<div class="box-header with-border">
				<h4 class="card-subtitle">Select Tender No</h4>
			</div>
			<div class="">
				<h5 class="text-green"></h5>
			</div>
			<!-- <div class="row">

				<div class="col-md-9">
					<div class="box-body">
						<fieldset>


							<div style="margin-top: 40px" class="form-group row">
								<label for="userID" class="col-sm-3 control-label">
									Tender No*</label>

								<div class="col-sm-5">
									<input type="text" class="form-control" id="tenderno"
										value="TR0000098" name="tenderno" placeholder="Tender No"
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
					<table id="example"
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

						<tbody>
							<tr>
							
								<td>P12501</td>
								<td>Banking Remittance System</td>
								<td>2021/01/10</td>
								<td>2021/04/10</td>
								<td><button type="submit" id="searchUserIDButton"
									class="btn btn-info ">VIEW</button></td>
							</tr>
							<tr>
							
								<td>P12502</td>
								<td>Vender Management System</td>
								<td>2020/12/18</td>
								<td>2021/03/18</td>
								<td><button type="submit" id="searchUserIDButton"
									class="btn btn-info ">VIEW</button></td>
							</tr>
							<tr>
							
								<td>P12503</td>
								<td>Farmer System</td>
								<td>2020/12/05</td>
								<td>2021/03/05</td>
								<td><button type="submit" id="searchUserIDButton"
									class="btn btn-info">VIEW</button></td>
							</tr>
							<tr>
							
								<td>P12502</td>
								<td>Furniture</td>
								<td>2021/01/10</td>
								<td>2021/04/10</td>
								<td><button type="submit" id="searchUserIDButton"
									class="btn btn-info">VIEW</button></td>
							</tr>
							<tr>
							
								<td>P12503</td>
								<td>A/C Repair</td>
								<td>2021/01/15</td>
								<td>2021/04/15</td>
								<td><button type="submit" id="searchUserIDButton"
									class="btn btn-info ">VIEW</button></td>
							</tr>
						</tbody>
					</table>
					
				</div>
			</div>

		</div>
		</div>
	</div>


	<div class="box box-info animated fadeInDownBig" id="userTableDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle">Financial Details </h4>
		</div>
<br/>
		<div class="box-body">
			<div class="row">
				<div class="col-md-6">

					<fieldset>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">
								Tender Description </label>
							<div class="col-sm-8">
								<input id="tender_description" name="tender_description"
									type="text" class="form-control" required="required"
									value="Vender Management System" readonly="readonly">
							</div>
						</div>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Tender
								Closing Date </label>
							<div class="col-sm-8">
								<input id="closing_date" name="closing_date" type="text"
									value="2021-02-25 17:00:00" class="form-control"
									readonly="readonly">
							</div>
						</div>
						
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Currency  </label>
							<div class="col-sm-4">
								<select class="form-control m-b" name="currency"
										id="currency" required="required">
										<option value='empty'>Select Currency</option>
										<option value='LKR'>LKR</option>
										<option value='USD'>USD</option>
									
									</select>
							</div>
							<div class="col-sm-4">
								<input id="exchangerate" name="exchangerate" type="text" 
									value="" class="form-control displayContent" placeholder="Enter Exchange Rate"
									>
							</div>
						</div>
					</fieldset>
					<br />
					<table>
						<tr>
							<th>Description</th>
							<th>Amount</th>

						</tr>
						<tr>
							<td>Capital Amount / Cost</td>
							<td><input type="text" style="width: 100%"></td>

						</tr>
						<tr>
							<td>Capital Discount</td>
							<td><input type="text" style="width: 100%"></td>

						</tr>
						<tr>
							<td>Percentage %</td> <!-- 0>40- -->
							<td><input type="text" style="width: 100%"></td>

						</tr>
						<tr>
							<td>Year 1 - AMC</td>
							<td><input type="text" style="width: 100%"></td>

						</tr>
						<tr>
							<td>Year 2 - AMC</td>
							<td><input type="text" style="width: 100%"></td>

						</tr>
						<tr>
							<td>Year 3 - AMC</td>
							<td><input type="text" style="width: 100%"></td>

						</tr>
						<tr>
							<td>Year 4 - AMC</td>
							<td><input type="text" style="width: 100%"></td>

						</tr>
						<tr>
							<td>Year 5 - AMC</td>
							<td><input type="text" style="width: 100%"></td>

						</tr>
						<tr>
							<td>Any other expeditions (Annual)</td>
							<td><input type="text" style="width: 100%"></td>

						</tr>

						<tr>
							<td>Annual Subscriptions</td>
							<td><input type="text" style="width: 100%"></td>

						</tr>

						<tr>
							<td>Final Total</td>
							<td><input type="text" style="width: 100%"></td>

						</tr>
						


					</table>
				</div>
				<!-- 
				<div class="col-md-6">

					<fieldset>
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Tender Closing Date </label>
							<div class="col-sm-8">
								<input id="closing_date" name="closing_date" type="text"
									value="2021-02-25 17:00:00" class="form-control" readonly="readonly">
							</div>
						</div>
					</fieldset>

				</div>	 -->
				
					<!-- <div class="row">
			<div class="col-md-12">
				<div class="box-body">
		
					

				
				</div>
			</div>

		</div>
 -->			
			</div>	
		</div>
   <button type="button" class="btn btn-default" data-dismiss="modal">SUBMIT</button>
	</div>
	
</div>



<script
	src="resources/assets/vendor_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script
	src="resources/assets/vendor_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/media/js/jquery.dataTables.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/dataTables.buttons.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.flash.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/jszip.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/pdfmake.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/vfs_fonts.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.html5.min.js"></script>
<script
	src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.print.min.js"></script>
<script src="resources/js/pages/data-table.js"></script>









<script type="text/javascript">
	$('#titleID').text("Financial Details");
	$('#bcumb').text("Financial Details");
</script>




