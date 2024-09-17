<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Create Category</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
			<div class="row">
				<div class="col-md-6">

					<fieldset>
						<h4 class="card-subtitle text-green">Create Category</h4>
						<br>
						
						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label"> Category Code *</label>
							<div class="col-sm-8" id="sup_catcodediv">
								<input id="cat_code" name="cat_code" type="text"
									class="form-control" value="" required="required" autocomplete="off">
							</div>
						</div>	

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label"> Category Name *</label>
							<div class="col-sm-8" id="sup_catnamediv">
								<input id="cat_name" name="cat_name" type="text"
									class="form-control" value="" required="required" autocomplete="off">
							</div>
						</div>
						

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label"> Category Description *</label>
							<div class="col-sm-8" id="sup_catdisdiv">
								<input id="cat_description" name="cat_description" type="text"
									class="form-control" value="" required="required" autocomplete="off">
							</div>
						</div>
						
						
				<!--		<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label"> Category Fee </label>
							<div class="col-sm-8" id="sup_catfeediv">
								<input id="cat_fee" name="cat_fee" type="text"
									class="form-control" value="" required="required" autocomplete="off">
							</div>
						</div>		-->					
						
					</fieldset>
				</div>
				
				<div class="col-md-6" style="display: flex; align-items: center; justify-content: center;">
				<div class="form-group row">
				<label for="inputPassword3" class="col-sm-4 control-label"> Category Fee (LKR)</label>
				<div class="col-sm-8" id="sup_catfeediv">
					<input id="cat_fee" name="cat_fee" type="text"
							class="form-control" value="" required="required" autocomplete="off">
				</div>
				</div>									
			</div>  
		</div>		
						
						<fieldset class="col-md-12">
						<div class="box-footer">
							<button type="submit" id="submit_button" class="btn btn-info pull-right">Submit</button>
						</div>	
						</fieldset>			
	</div>												
						
	 
			
			
			<div class="box box-info">
				<div class="box-header with-border">
				<h3 class="box-title">Category View</h3>
				</div>
			<div class="box-body">
			<div class="row">
			
			<div class="col-md-12">
			<table id="categoryTable" class="table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select">
			<thead>
				<tr class="text-yellow">
				<th>Index</th>
				<th>Category Code</th>
				<th>Category Name</th>
				<th>Category Description</th>
				<th>Category Fee (LKR)</th>
				<th>Edit</th>
				<th>Current status</th>
				<th>Status</th>
				</tr>
			</thead>			
			</table>
			</div>
		</div>
		</div>
		</div>					
</div>
</div>


 <!-- Modal -->
<div id="md_submit_category" class="modal fade bd-example-modal-lg" role="dialog">
	<div class="modal-dialog modal-lg">

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
									<h1 class="modal-title pull-right" id="mdl_ar_com_name">Edit Category</h1>
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
								<div class="box-body">
									<!-- text field -->
									<!-- <div class="box-body"> -->
										<div class="row">										
										<div class="col-md-6">
												<div class="form-group row">
												<label for="inputPassword3" class="col-sm-5 control-label">Category Code</label>
													<div class="col-sm-10" id="catCodeDiv">
													</div>
												</div>
											</div> 
											
											<div class="col-md-6">
												<div class="form-group row">
												<label for="inputPassword3" class="col-sm-5 control-label">Category Name</label>
												<div class="col-sm-10" id="catNameDiv">																
												</div>
												</div>
											</div>
											
											<div class="col-md-6">
												<div class="form-group row">
												<label for="inputPassword3" class="col-sm-6 control-label">Category Description</label>
													<div class="col-sm-10" id="catDescriptionDiv">
													</div>
												</div>
											</div>
											
											<div class="col-md-6">
												<div class="form-group row">
												<label for="inputPassword3" class="col-sm-5 control-label">Category Fee</label>
													<div class="col-sm-10" id="catFeeDiv">
													</div>
												</div>
											</div>																						
										</div>									
																			
									<div id="appendData"></div>
								</div>
								<div class="form-group row">
									
								</div>
							</fieldset>
						</div>
					</div>
				</div>
			</div>
			
			<div class="modal-footer">
				<button id="cancel_cat_details" type="button" class="btn bg-olive" data-dismiss="modal">Close</button>
				<button type="submit" id="edit_sub_btn" class="btn btn-info pull-right">Submit</button>				
			</div>
		</div>
	</div>
</div>


<script type="text/javascript">
	$('#titleID').text("Create Category");
	$('#bcumb').text("Create Category");
	//document.getElementById("submit_button").disabled = false;
</script>


</script>
<script src="resources/js/customjs/suppliercategory/createcategory.js"></script>