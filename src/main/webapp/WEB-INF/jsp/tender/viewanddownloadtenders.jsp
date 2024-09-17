<div class="col-md-12 col-lg-12 animated fadeInLeft">
	
	<!--		<div class="box-header with-border">
				<h4 class="card-subtitle">View & download Tenders</h4>
			</div> -->
			<div class="">
				<h5 class="text-green"></h5>
			</div>
			<div class="row">

		
		<!--	<div class="col-md-3">
					<div style="margin: 15px; opacity: 0.1;">
						<i class="fa fa-credit-card"
							style="font-size: 150px; color: #e5e5e5"></i>
					</div>
				</div> -->
			</div>
		


	<div class="box box-info animated fadeInDownBig" id="userTableDiv">
		<div class="box-header with-border">
			<h4 class="card-subtitle text-green">View & Download Tenders</h4>
		</div>
		
		<div class="row">
			<div class="col-md-12">
				<div class="box-body">
					<table id="tbl_view_auth"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr class="text-yellow">
								<th>Index</th>  
								<th>Bid No</th>
								<th>Tender Name</th> 
								<th>Description</th>
								<th>Closing Date & Time</th>
								<th>Remaining Days</th>
								<th>Status</th>
								<th>More</th>
								
							</tr>
						</thead>

						<tbody>
						</tbody>
					</table>
					<!-- <div>
						<button type="button" id="clickUserIDButton" 
							class="btn btn-primary">Authorize</button>
					</div> -->
				</div>
			</div>

		</div>
		
					
					</div>
					
					<div class="box box-info">
						<div class="box-header with-border">
							<h3 class="box-title text-green">View Additional Files Per Tender</h3>
						</div>
						
						<div class="box-body">
						<div class="row">
						
							<div class="col-md-12">
								
								<div style="margin-top: 40px" class="form-group row">
									<label for="userID" class="col-sm-3 control-label">Select Tender No *</label>
				
									<div class="col-sm-6" id="getTenderIdVal">
										<select id="tender_id_for_aditional_details_2" name="tender_id_for_aditional_details_2"
											class="form-control select2" required="required"> </select>
									</div>
									<button type="submit" id="searchUserIDButton"
										class="btn btn-info pull-right">SUBMIT</button>
								</div>
								
							</div>
							<div class="col-md-12" id="adtionalDataDiv">
								<table id="aditionalFileParamTble" class="table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select">
								<thead>
									<tr class="text-green">
										<th>Index</th>
										<th>File Name</th>
										<th>Uploaded File</th>
										
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
			<!--  
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
				<button type="button" id="acceptPartnership"
					class="btn bg-olive pull-right">Send</button>
			</div>
		</div>

	</div>
</div> -->	


  <!-- Modal -->
<div id=mdl_issue_invoice class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
      <div style="width: 100%;">
					<div class="row">
						<div class="col-md-2">
							<button type="button" class="close pull-left"
								data-dismiss="modal">&times;</button>
						</div>
						<div class="col-md-10">
							<div class="row">
								<div class="col-md-12">
									 <h1 class="modal-title pull-right">Enter
										Response</h1>
								</div>
							</div>
					<!--		<div class="row">
								<div class="col-md-12">
									<p class="pull-right" style="margin-bottom: 0"
										id="mdl_ii_contract_no">0000000</p>
									<p class="pull-right" style="margin-bottom: 0">Tender No
										-</p>
								</div>
							</div> -->
						</div>

					</div>
				</div>
      </div>
      
    
      <div class="modal-body">
      <div class="form-group row">
					<label for="inputPassword3" class="col-sm-4 control-label">Enter Response</label>
					
    
    
					<div class="dropdown">
					<select id="response_cat_select" required="required" name="green"
									class="form-control">
									<option value="empty">Enter response</option>
									<option value="Will Participate">Will Participate</option>
									<option value="Will not participate">Will not participate</option>
									<option value="Consider later">Consider later</option>
									<option value="Not Interested">Not Interested</option>
								</select>
                           </div>
                     </div>
							
			</div>
			
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" id="send_button"
					class="btn bg-olive pull-right">Send</button>
      </div>
    </div>

  </div>
</div>

		<div class="row">
			<div class="col-md-12">
			
		<!--	<div class="box-header with-border">
			<h4 class="card-subtitle">Download Attachments</h4>
		</div>  -->
				<div class="box-body">
				
			
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

<script src="resources/js/customjs/tender/viewanddownloadtenders.js"></script>









<script type="text/javascript">
	$('#titleID').text("View & Download Tenders");
	$('#bcumb').text("View & Download Tenders");
</script>
<script>
// Set the date we're counting down to
var countDownDate = new Date("Jun 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
 //  Output the result in an element with id="demo"
//  document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
//    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
</script>



