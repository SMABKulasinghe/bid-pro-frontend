
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h4 class="card-subtitle">Connect Supplier</h4>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="row">
			<div class="col-md-12">
				<fieldset>
					<h5 class="">Find Supplier Information</h5>
					
					<div class="form-group row">
						<label for="suppliers" class="col-sm-3 control-label">Company</label>
						<div class="col-sm-9">
									<select class="form-control m-b" name="suppliers"
										id="suppliers" required="required">
									</select>
								</div>
					</div>
				</fieldset>
				<fieldset>
					<h5 class="">Existing Suppliers</h5>
					<div class="box-body">
              <table id="tbl_companies" class="table table-bordered table-hover display nowrap margin-top-10 table-responsive" cellspacing="0" width="100%">
				<thead>
					<tr>
						<th>Company Code</th>
						<th>Name</th>
						<th>Reg Number</th>
						<th>Email</th>
						<th>Partnership Date</th>
					</tr>
				</thead>
			</table>
            </div>
				</fieldset>

				
					<fieldset>
			

					<div class="box-footer">
					</div>
				</fieldset>
				
			</div>

		</div>
	</div>
</div>

<div id="mdl_ViewSupplierDetails" class="modal fade bd-example-modal-lg" role="dialog">
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
      	 				<h1 class="modal-title pull-right" id="mdl_com_name">Modal Header</h1>
      	 			</div>
      	 		</div>
      	 		<div class="row">
      	 			<div class="col-md-12">
      	 				<div class="row" style="height: 15px;">
      	 					<div class="col-md-12">
      	 						<p id="add1" class="pull-right" style="font-size: 12px"></p>
      	 					</div>
      	 				</div>
      	 				<div class="row" style="height: 15px;">
      	 					<div class="col-md-12">	
      	 						<p id="add2" class="pull-right" style="font-size: 12px"></p>
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
      		<div class="row">
      			<div class="col-md-4">
      				<img src="" id="companyImage" alt="Nature" class="rounded img-fluid">
      			</div>
      			<div class="col-md-8">
      				<div class="row">
      					<div class="col-md-4">
      						<div>Company Code : -</div></br>
      						<div>Contact Number : -</div></br>
      						<div>Email : -</div></br>
      						<div id="partnership_1" style="display: none;">Partership Date : -</div></br>
      					</div>
      					<div class="col-md-8">
      						<div id="company_code"></div></br>
      						<div id="company_contact"></div></br>
      						<div id="company_email"></div></br>
      						<div id="partnership_2" style="display: none;"></div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" id="sendPartnership" class="btn bg-olive pull-right">Partnership Request</button>
      </div>
    </div>

  </div>
</div>
  
  
<script type="text/javascript">

	$('#titleID').text("Connect Your Supplier");
	$('#bcumb').text("Supplier Details");

	
</script>

<script src="resources/js/customjs/supplier/supplierMapping.js"></script>

 <script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/dataTables.buttons.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.flash.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/jszip.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/pdfmake.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/ex-js/vfs_fonts.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.html5.min.js"></script>
    <script src="resources/assets/vendor_plugins/DataTables-1.10.15/extensions/Buttons/js/buttons.print.min.js"></script>

<!-- <div class="box-footer">
					<button type="submit" class="btn btn-default">Cancel</button>
					<button type="submit" class="btn btn-info pull-right">Submit
						</button>
				</div>
 -->
