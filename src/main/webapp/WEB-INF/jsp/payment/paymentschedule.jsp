<div class="col-md-12 col-lg-12 animated fadeInLeft">
	<div class="box box-default">

		<div class="box box-info">
			<div class="box-header with-border">
				<h4 class="card-subtitle">Outstanding Payments</h4>
			</div>
			<div class="">
				<h5 class="text-green"></h5>
			</div>
			<div class="row">

				<div class="col-md-6">
					<div class="box-body">
						<fieldset>


							<div style="margin-top: 40px" class="form-group row">
							<label for="userID" class="col-sm-2 control-label">Inv No*</label>

							<div class="col-sm-6">
								<input type="text" class="form-control" id="user_ID"
									name="user_ID" placeholder="Inv No" autocomplete="off">
							</div>
							<button type="submit" id="searchUserIDButton"
								class="btn btn-info pull-right">SUBMIT</button>
						</div>
						</fieldset>
					</div>
				</div>

				<div class="col-md-1">
					<div class="box-body">
						<fieldset>
							<div style="margin-top: 40px" class="form-group row">
								<div class="col-sm-3">
									<div class="checkbox">
										<label for="" class="text-yellow">OR</label>
									</div>
								</div>
							</div>
						</fieldset>
					</div>
				</div>


				<div class="col-md-2">
					<div class="box-body">
						<fieldset>
							<div style="margin-top: 40px" class="form-group row">
								<div class="col-sm-12">
									<div class="checkbox">
										<input type="checkbox" id="acceptTerms" name="acceptTerms"
											value="Yes"> <label for="acceptTerms">Show
											All</label>
									</div>
								</div>
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
			</div>
		</div>
	</div>


	<div class="box box-info animated fadeInDownBig" id="userTableDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle">Outstanding Payments</h4>
		</div>

		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="example"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr>
								<th>Order #</th>
								<th>Date</th>
								<th>Amount</th>
								<th>Usage</th>
								<th>Status</th>
								<th>View</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>P12501</td>
								<td>2012/08/03</td>
								<td>12,500.00</td>
								<td>300 GB</td>
								<td><label class="badge badge-danger">Pending</label></td>
								<td><button type="button" class="btn btn-outline-primary"
										data-toggle="modal" data-target="#myModal">VIEW</button></td>
							</tr>
							<tr>
								<td>P12502</td>
								<td>2012/08/03</td>
								<td>2,500.00</td>
								<td>350 GB</td>
								<td><label class="badge badge-danger">Pending</label></td>
								<td><button type="button" class="btn btn-outline-primary"
										data-toggle="modal" data-target="#myModal">VIEW</button></td>
								<!-- 	<button class="btn btn-outline-primary">View</button> -->

							</tr>
							<tr>
								<td>P12503</td>
								<td>2012/08/03</td>
								<td>2,900.00</td>
								<td>100 GB</td>
								<td><label class="badge badge-danger">Pending</label></td>
								<td><button type="button" class="btn btn-outline-primary"
										data-toggle="modal" data-target="#myModal">VIEW</button></td>
							</tr>
							<tr>
								<td>P12502</td>
								<td>2012/08/03</td>
								<td>2,500.00</td>
								<td>350 GB</td>
								<td><label class="badge badge-danger">Pending</label></td>
								<td><button type="button" class="btn btn-outline-primary"
										data-toggle="modal" data-target="#myModal">VIEW</button></td>
								<!-- 	<button class="btn btn-outline-primary">View</button> -->

							</tr>
							<tr>
								<td>P12503</td>
								<td>2012/08/03</td>
								<td>2,900.00</td>
								<td>100 GB</td>
								<td><label class="badge badge-danger">Pending</label></td>
								<td><button type="button" class="btn btn-outline-primary"
										data-toggle="modal" data-target="#myModal">VIEW</button></td>
							</tr>
						</tbody>
					</table>
					<div>
						<button type="button" id="clickUserIDButton"
							class="btn btn-primary">Authorize</button>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>


<script>
 
 console.log("Redesign");
 var userTable;
 jQuery(document).ready(function($) {
 	$("#userTableDiv").hide();
 	$("#clickUserIDButton").hide();

 	

 	$('#acceptTerms').on('change', function() {
 		$('#userTableDiv').addClass("fadeInDownBig");
		$('#userTableDiv').removeClass("fadeOutUpBig");

 		

 		if ($(this).prop('checked') === true) {

 			if ($(this).attr('value') == "Yes") {

 				$("#userTableDiv").show();

 			}

 		} else {

 			$('#userTableDiv').removeClass("fadeInDownBig");
 			$('#userTableDiv').addClass("fadeOutUpBig");
 			//$('#userTableDiv').hide();
 			console.log("Hide Table Div Here")
 		}
 	});
 });
 
 
 </script>
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
	$('#titleID').text("Outstanding Payments");
	$('#bcumb').text("Outstanding Payments");
</script>








<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog ">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <!-- <button type="button" class="close" data-dismiss="modal">&times;</button> -->
        <h4 class="modal-title">Payment Details</h4>
      </div>
      <div class="modal-body">
         <div class="media">
           <!-- <img class="mr-3 w-25 rounded" src="resources/images/samples/300x300/13.jpg" alt="sample image"> -->
                 <div class="media-body">
                 <form class="form-inline">
                    <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="P12502" readonly="readonly">
                    <div class="input-group mb-2 mr-sm-2">
                      <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="2012/08/03" readonly="readonly">
                    </div>
                    <div class="input-group mb-2 mr-sm-2">
                      <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="2,500.00" readonly="readonly">
                    </div>
                  </form>
                  <div class="row">   
					<div class="col-md-8">
					
					<p class="card-description">Approve Payment</p> 
					
						<fieldset>
							<form class="forms-sample">
								<div class="form-group">
									<label for="userID">Date *</label> <input id="user_id"
										name="user_id" placeholder="invoice date" type="date"
										class="form-control" required="required"><span
										class="help-block m-b-none"></span>
								</div>
								<div class="form-group">
									<label for="userID">Amount *</label> <input id="user_id"
										name="user_id" placeholder="amount" type="text"
										class="form-control" required="required"><span
										class="help-block m-b-none"></span>
								</div>
									<div class="form-group">
									<label for="userID">Usage *</label> <input id="user_id"
										name="user_id" placeholder="usage units" type="text"
										class="form-control" required="required"><span
										class="help-block m-b-none"></span>
								</div>

								<br>
										<fieldset>
										<!-- 	<h5 class="card-description">Upload Details</h5> -->
											<div class="form-group">
												<label for="acceptTerms">Upload Excel File</label>
												<br> <input type="file" name="file"
													id="POU_headerUp_input" class="hide">
											</div>
											<div class="form-group">
											<label for="acceptTerms">Upload Scan File</label>
												<br> <input type="file" name="file"
													id="POU_headerUp_input" class="hide">
											</div>
										</fieldset>

										<br>
								<!-- <div class="">
									<h5 class="card-description">Please Confirm the Details</h5>
									<input id="acceptTerms" name="acceptTerms" type="checkbox"
										class=""> <label for="acceptTerms">Confirm Details</label> <br>
								</div> -->
								<button type="submit" class="btn btn-outline-primary btn-sm">Submit</button>
								<button class="btn btn-outline-light btn-sm">Cancel</button>
							</form>
						</fieldset>

					</div>
			
				</div>
                        </div>
                      </div>
      </div>
     <!--  <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div> -->
    </div>

  </div>
</div>
  
<script>
        $(document).ready(function(){
        	var date = new Date();
			date.setDate(date.getDate());

			
        	$('#data_1 .input-group.date').datepicker({
				todayBtn : "linked",
				keyboardNavigation : false,
				forceParse : false,
				calendarWeeks : true,
				autoclose : true,
				todayHighlight : true
			});
			$('#data_2 .input-group.date').datepicker({
				todayBtn : "linked",
				keyboardNavigation : false,
				forceParse : false,
				calendarWeeks : true,
				autoclose : true,
				todayHighlight : true,
				startDate: date
			});
			
			var date = new Date();
			date.setDate(date.getDate());

			
			 $('#data_5 .input-daterange').datepicker({
		            keyboardNavigation: false,
		            forceParse: false,
		            autoclose: true,
		            todayHighlight : true,
		            startDate: date
		        });
			
             });
     </script>    
      <!-- plugin js for this page -->

 