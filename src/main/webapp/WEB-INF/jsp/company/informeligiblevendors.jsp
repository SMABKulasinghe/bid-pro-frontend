
<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Inform Eligible Vendors</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			<div class="col-md-6">
			
					<fieldset>
					<h5 class=" ">Eligible Vendor Details</h5>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Enter Tender  No *</label>
						<div class="col-sm-8">
							<select id="tender_no" name="tender_no"
								type="select" class="form-control" value="201203001T" required="required">
								<option>E353 </option>
								<option>E355 </option>
								<option>E354 </option>
								<option>E357 </option>
							
							</select>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Tender Description 
						</label>
						<div class="col-sm-8">
							<input id="rfp_filename" name="rfp_filename" type="text"
								class="form-control" value="Olak Technologies" required="required">
						</div>
					</div>
					
							
							
				
				
				</fieldset>
				<br/>
			
				
			</div>
			<div class="col-md-6">
			<fieldset>
					<br>
					<br>
					
					<div class="form-group row">
						<label for="inputPassword3" class="col-sm-4 control-label">Closing Date	
						</label>
						<div class="col-sm-8">
							<input id="rfp_filename" name="rfp_filename" type="text"
								class="form-control" value="28/04/2022" required="required">
						</div>
				</div>
			</fieldset>
				
			
			</div>
			<div class="col-md-12">
					<table id="example"
						class="table table-bordered table-hover display nowrap margin-top-10 table-responsive"
						cellspacing="0" width="100%">
						<thead>
							<tr>
								<th>Vender No</th>
								<th>Vendor Name</th>
								<th>Category</th>
								<th>Sub Category</th>
								<th>Action</th>
								
							</tr>
						</thead>

						<tbody>
							<tr>
								<td>P12501</td>
								<td>OLAK</td>
								<td>Computer Software</td>
								<td>Network</td>
								<td><button type="submit" id="click"
									class="btn btn-info ">Eligible ?</button></td>
							
							</tr>
							<tr>
								<td>P12502</td>
								<td>ASKPI</td>
								<td>Computer Software</td>
								<td>IT Support</td>
								<td><button type="submit" id="click2"
									class="btn btn-info ">Eligible ?</button></td>
							

							</tr>
							<tr>
								<td>P12503</td>
								<td>OnSys</td>
								<td>Computer Software</td>
								<td>Database Service</td>
								<td><button type="submit" id="click3"
									class="btn btn-info ">Eligible ?</button></td>
								
							</tr>
							<tr>
								<td>P12502</td>
								<td>Interblocks</td>
								<td>Computer Software</td>
								<td>IT Software</td>
								<td><button type="submit" id="click4"
									class="btn btn-info ">Eligible ?</button></td>
								

							</tr>
							<tr>
								<td>P12503</td>
								<td>Wso2</td>
								<td>Computer Software</td>
								<td>IT Hardware</td>
								<td><button type="submit" id="click5"
									class="btn btn-info ">Eligible ?</button></td>
								
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
<script type="text/javascript">
	$('#titleID').text("Eligible Vendors");
	$('#bcumb').text("Eligible Vendors");
</script>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

<script>
        $('#click').on('click',function(){
            Swal.fire({
            /* icon: 'info', */
            title: 'Confirm ?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Mark as eligible',
            denyButtonText: `Denied `,
            // text: '!',
            // footer: '<a href="">Why do I have this issue?</a>'
            })
        })
</script>

<script>
        $('#click2').on('click',function(){
            Swal.fire({
            /* icon: 'info', */
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
            // text: '!',
            // footer: '<a href="">Why do I have this issue?</a>'
            })
        })
</script>

<script>
        $('#click3').on('click',function(){
            Swal.fire({
            /* icon: 'info', */
            title: 'Confirm ?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Mark as eligible',
            denyButtonText: `Denied `,
            // text: '!',
            // footer: '<a href="">Why do I have this issue?</a>'
            })
        })
</script>

<script>
        $('#click4').on('click',function(){
            Swal.fire({
            /* icon: 'info', */
            title: 'Confirm ?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Mark as eligible',
            denyButtonText: `Denied `,
            // text: '!',
            // footer: '<a href="">Why do I have this issue?</a>'
            })
        })
</script>

<script>
        $('#click5').on('click',function(){
            Swal.fire({
            /* icon: 'info', */
            title: 'Confirm ?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Mark as eligible',
            denyButtonText: `Denied `,
            // text: '!',
            // footer: '<a href="">Why do I have this issue?</a>'
            })
        })
</script>


