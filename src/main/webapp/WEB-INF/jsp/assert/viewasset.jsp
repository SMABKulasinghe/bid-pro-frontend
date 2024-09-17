<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title">Register / View Asset</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="row">
			<div class="col-md-12">				
				<form class="form-horizontal form-element">
					<div class="box-body">
					
					<!-- START Card With Image -->
      <div class="row fx-element-overlay">
       <div class="col-12"> 
       		<h2 class="card-title">Asset Categories</h2>
       		<h6 class="card-subtitle margin-bottom">Click for more details</h6>
       </div>
        <div class="col-md-12 col-lg-3">
          <div class="box box-default">
            <div class="fx-card-item">
				<div class="fx-card-avatar fx-overlay-1"> <img src="resources/images/customcards/Software.jpg" style="width:237px; height:237px"  alt="user">
					<div class="fx-overlay">
						<ul class="fx-info">
							<li><a class="btn default btn-outline image-popup-vertical-fit" onclick='navigate("viewsoftwareasset")'><i class="ion-search"></i></a></li>
							<li><a class="btn default btn-outline" href="javascript:void(0);" onclick='navigate("softwareassertregistration")'><i class="ion-plus"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="fx-card-content">
					<h3 class="box-title">Software</h3> <small>Find More</small>
					<br> </div>
			</div>
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
        <div class="col-md-12 col-lg-3">
          <div class="box box-default">
            <div class="fx-card-item">
				<div class="fx-card-avatar fx-overlay-1"> <img src="resources/images/customcards/Electronics.jpg" style="width:237px; height:237px"  alt="user">
					<div class="fx-overlay">
						<ul class="fx-info">
							<li><a class="btn default btn-outline image-popup-vertical-fit" onclick='navigate("electronicasset")'><i class="ion-search"></i></a></li>
							<li><a class="btn default btn-outline" href="javascript:void(0);"><i class="ion-link"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="fx-card-content">
					<h3 class="box-title">Electronics</h3> <small>Find More</small>
					<br> </div>
			</div>
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
        <div class="col-md-12 col-lg-3">
          <div class="box box-default">
            <div class="fx-card-item">
				<div class="fx-card-avatar fx-overlay-1"> <img src="resources/images/customcards/furniture.jpg" style="width:237px; height:237px"  alt="user">
					<div class="fx-overlay">
						<ul class="fx-info">
							<li><a class="btn default btn-outline image-popup-vertical-fit" onclick='navigate("furnitureasset")'><i class="ion-search"></i></a></li>
							<li><a class="btn default btn-outline" href="javascript:void(0);"><i class="ion-link"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="fx-card-content">
					<h3 class="box-title">Furniture</h3> <small>Find More</small>
					<br> </div>
			</div>
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
        <div class="col-md-12 col-lg-3">
          <div class="box box-default">
            <div class="fx-card-item">
				<div class="fx-card-avatar fx-overlay-1"> <img src="resources/images/customcards/Vehicle.jpg" style="width:237px; height:237px" alt="user">
					<div class="fx-overlay">
						<ul class="fx-info">
							<li><a class="btn default btn-outline image-popup-vertical-fit" onclick='navigate("motorvehicleasset")' ><i class="ion-search"></i></a></li>
							<li><a class="btn default btn-outline" href="javascript:void(0);"><i class="ion-link"></i></a></li>
						</ul>
					</div>
				</div>
				<div class="fx-card-content">
					<h3 class="box-title">Motor Vehicle</h3> <small>Find More</small>
					<br> </div>
			</div>
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
      <!-- END Card with image -->
      
	
					</div>
					<!-- /.box-body -->
				</form>
				<div class="box-footer">
					<!-- <button type="submit" class="btn btn-default">Cancel</button>
					<button type="button" id="create_user_button" class="btn btn-info pull-right">Submit
						</button> -->
				</div>
				<!-- /.box-footer -->
			</div>
			<!-- <div class="col-md-4">
				<div style="margin: 100px">
					<i class="fa fa-user-circle"
						style="font-size: 180px; color: #e5e5e5"></i>
				</div>

			</div> -->
		</div>
	</div>
</div>

<script>
        $(document).ready(function(){
        	var date = new Date();
			date.setDate(date.getDate());			
        	
			//Date picker
			    $('#Date_end').datepicker({
			    	todayBtn : "linked",
					keyboardNavigation : false,
					forceParse : false,
					calendarWeeks : false,
					autoclose : true,
					todayHighlight : true
			    });

			
             });
        
        
     </script>    

<script type="text/javascript">

	$('#titleID').text("View Asset Details");
	$('#bcumb').text("Asset");




</script>

 <script src="resources/js/customjs/asset/viewasset.js"></script>

