
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">Tender Offer</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<div class="col-md-6">
			
					<fieldset>
					<!-- <h5 class=" ">Tender Offer</h5> -->
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Tender  No *</label>
						<div class="col-sm-8" id="tenderIdDiv">
							<select id="tenderIdd" name="tenderIdd"
								 	class="form-control select2" value="" required="required"> </select>
								 	
								 	<!-- <button type="submit" id="emailTestButton"
									class="btn btn-info pull-right">SUBMIT</button> -->
						</div>
							
					</fieldset>
				<br/>
			
				
			</div>
			<div class="col-md-12">
			<table id="tenderOfferTable" class="table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select">
				<thead>
					<tr>
					<!-- <th>No</th> -->
					<!-- <th>Vender Id</th> -->
					<th>Vender Name</th>
					<th>Mark (%)</th>
					<th>Position</th>
					<th>Votes </th>
					<th >Action</th>
					
					</tr>
				</thead>
				<tbody id="evaluationMarkSummeryTableBody" >
						
						
				</tbody>
			</table>
			</div>
		</div>
		</div>
	</div>
</div>


<div id="mdl_tender_offer" class="modal fade bd-example-modal-lg"
	role="dialog" >
	<div class="modal-dialog modal-lg">

		<!-- Modal content-->
		<div class="modal-content" >
			<div class="modal-header">
				<div style="width: 100%;">
					<div class="row">
						<div class="col-md-2">
							<!-- <button type="button" class="close pull-left"
								data-dismiss="modal">&times;</button> -->
						</div>
						<div class="col-md-10">
							<div class="row">
								<div class="col-md-12" id="mdl_header">
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Offer tender to this vender</h1>
										
								</div>
							</div>
							<!-- <div class="row">
								<div class="col-md-12">
									<p class="pull-right" style="margin-bottom: 0"
										id="mdl_ii_contract_no">0000000</p>
									<p class="pull-right" style="margin-bottom: 0">Contract No
										-</p>
								</div>
							</div> -->
						</div>

					</div>
				</div>
			</div>
			<div class="modal-body">
				<div style="height: 100%">
					<div class="row">
						<!-- 	 <div class="col-md-4">
      	
      	 </div> -->
						<div class="col-md-12" id="mdl_tender_offer_div">
							<fieldset>
								

							</fieldset>
							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-6 control-label">Vender Name</label>
									<div class="col-sm-6" id="supplierNameDiv">
										 
										
										
									</div>
							</div>
							
							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-6 control-label">Enter offering supplier *</label>
									<div class="col-sm-6">
										 
										<input id="name" name="name"
								type="text" class="form-control" required="required">
										
									</div>
							</div>
							
							<div class="form-group row">
								<label for="inputPassword3" class="col-sm-6 control-label">Reason *</label>
									<div class="col-sm-6">
										 <textarea class="form-control" id="description" rows="" cols=""></textarea>
										
										
									</div>
							</div>
							
						</div>
						<!-- <div class="col-md-2">
							<div style="margin: 5px; opacity: 0.1; text-align: center;">
								<i class="fa fa-paper-plane"
									style="font-size: 50px; color: #e5e5e5"></i>
							</div>

						</div> -->
					</div>
					
					<!-- <div class="row d-flex justify-content-center">
						<h2><span class="badge badge-warning">This is the email you send to the supplier through the system for this tender</span></h2>
					</div> -->
					
					
					
				</div>
			</div>
			<div class="modal-footer">
				<button id="cancel_rfp_details" type="button" class="btn btn-default" data-dismiss="modal" >Close</button>
				<button type="button" id="Submit" class="btn bg-olive pull-right">Confirm</button>
					
			</div>
		</div>

	</div>
</div>

<script type="text/javascript">

	$('#titleID').text("Tender Offer for vender");
	$('#bcumb').text("Tender Offer for vender");
	

</script>


</script>
<script src="resources/js/customjs/evaluation/tenderoffer.js"></script>


