<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Tender Extend</h3>
		</div>
		
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
			<div class="row">
				<div class="col-md-6">

					<fieldset>
						<h4 class="card-subtitle text-green">Tender Extend</h4>
						<br>

						<div class="form-group row">
							<label for="inputPassword3" class="col-sm-4 control-label">Tender No <span style="color: red">*</span></label>
							<div class="col-sm-8" id="tenExtend_trnderdiv">
								<select id="tenExtend_tenderid" name="tenExtend_tenderid" class="form-control select2" value="" required="required"></select>
							</div>
						</div>
						
						<div class="form-group row">
								<label for="startDate" class="col-sm-4 control-label">Closing Date</label>
							<div class="col-sm-5 input-group date">
								<div class="input-group-addon">
									<i class="fa fa-calendar"></i>
								</div> 	
								<input class="form-control" autocomplete="off" id="ex_closing_date">
							</div>
						</div>
						
						<div class="form-group row">
								<label for="ex_closing_time"  class="col-sm-4 control-label">Closing Time</label>
							<div class="col-sm-8">
								<input type="time" autocomplete="off" id="ex_closing_time">
							</div>
						</div>
					</fieldset>
					
				</div>
			</div>
		</div>
		
			<div class="box-footer">
				<button type="button" id="submit_btn" class="btn btn-primary pull-right">Submit</button>
			</div>
	</div>
</div>




<script type="text/javascript">
	$('#titleID').text("Tender Extend");
	$('#bcumb').text("Tender Extend");
//	document.getElementById("submit_button").disabled = false;
</script>


</script>
<script src="resources/js/customjs/tender/tenderextend.js"></script>

