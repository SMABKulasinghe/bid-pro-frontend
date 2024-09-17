<!DOCTYPE html>
<html>


<head>


  <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="resources/images/favicon.ico">

    <title>BidPro Portal</title>
  
  <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.6.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.4.0/firebase-analytics.js"></script>

<script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-messaging.js"></script>
<script src="resources/js/customjs/commanAjax.js"></script>
<style>
#overlay {
  position: fixed;
  display: none; /*none, block*/
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
}

#text{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 25px;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
   border-top: 16px solid #1ab394;
  border-bottom: 16px solid #1ab394;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  position: absolute;
   
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.initContent {
	display: none !important;
}
</style>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-timepicker/1.13.16/jquery.timepicker.min.css">
  
	<!-- Bootstrap v4.0.0-beta -->
	<link rel="stylesheet" href="resources/assets/vendor_components/bootstrap/dist/css/bootstrap.css">

	<!-- Font Awesome -->
	<link rel="stylesheet" href="resources/assets/vendor_components/font-awesome/css/font-awesome.css">

	<!-- Ionicons -->
	<link rel="stylesheet" href="resources/assets/vendor_components/Ionicons/css/ionicons.css">

	<!-- jvectormap -->
	<link rel="stylesheet" href="resources/assets/vendor_components/jvectormap/jquery-jvectormap.css">

	<!-- Theme style -->
	<link rel="stylesheet" href="resources/css/master_style.css">

	<!-- Maximum Admin Skins. Choose a skin from the css/skins folder instead of downloading all of them to reduce the load. -->
	<link rel="stylesheet" href="resources/css/skins/_all-skins.css">
	
	<!-- bootstrap datepicker -->
	<link href="resources/assets/vendor_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.css" rel="stylesheet">
	
	<!-- daterange picker -->
	<link rel="stylesheet" href="resources/assets/vendor_components/bootstrap-daterangepicker/daterangepicker.css">
	
	<!-- Select2 -->
	<link rel="stylesheet" href="resources/assets/vendor_components/select2/dist/css/select2.min.css">

	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->

	<!-- google font -->
	<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
	<link href="resources/css/animate.css" rel="stylesheet">
	
	<link href="resources/css/datatableImages.css" rel="stylesheet">
	
	 <link href="resources/css/plugins/toastr/toastr.min.css" rel="stylesheet">
	
</head>
<body class="hold-transition skin-blue sidebar-mini">


<div class="wrapper">
	<jsp:include page="base_layout/topbar.jsp" />  
  <!-- Left side column. contains the logo and sidebar -->
 	<jsp:include page="base_layout/sidebaritems.jsp" />  

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header" style="background-image: url(resources/images/user-info.jpg);">
 
      <h1 id="titleID">
        Dashboard 
      </h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="breadcrumb-item" id="bcumb">Dashboard </li>
      </ol>
    </section>


    <!-- Main content -->
    <section class="content"  id="loadDiv">
      <!-- Info boxes -->
      
      
      <!-- /.info-box -->
      

      
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <jsp:include page="base_layout/footer.jsp" />  

  <!-- Control Sidebar -->
 <jsp:include page="base_layout/asidebar.jsp" />  
  <!-- /.control-sidebar -->
  
  <!-- Add the sidebar's background. This div must be placed immediately after the control sidebar -->
  <div class="control-sidebar-bg"></div>

</div>
<!-- ./wrapper -->

<div id="mdl_Accept_Request" class="modal fade bd-example-modal-lg" role="dialog">
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
      	 				<h1 class="modal-title pull-right" id="mdl_ar_com_name">Modal Header</h1>
      	 			</div>
      	 		</div>
      	 		<div class="row">
      	 			<div class="col-md-12">
      	 				<div class="row" style="height: 15px;">
      	 					<div class="col-md-12">
      	 						<p id="ar_add1" class="pull-right" style="font-size: 12px"></p>
      	 					</div>
      	 				</div>
      	 				<div class="row" style="height: 15px;">
      	 					<div class="col-md-12">	
      	 						<p id="ar_add2" class="pull-right" style="font-size: 12px"></p>
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
      				<img src="" id="ar_companyImage" alt="Nature" class="rounded img-fluid">
      			</div>
      			<div class="col-md-8">
      				<div class="row">
      					<div class="col-md-4">
      						<div>Company Code : -</div></br>
      						<div>Contact Number : -</div></br>
      						<div>Email : -</div></br>
      						<div id="ar_partnership_1" style="display: none;">Partership Date : -</div></br>
      					</div>
      					<div class="col-md-8">
      						<div id="ar_company_code"></div></br>
      						<div id="ar_company_contact"></div></br>
      						<div id="ar_company_email"></div></br>
      						<div id="ar_partnership_2" style="display: none;"><input type="hidden" id="mapId"/></div>
      					</div>
      				</div>
      			</div>
      		</div>
      	</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" id="acceptPartnership"  class="btn bg-olive pull-right">Accept Request</button>
        <button type="button" id="RejectPartnership"  class="btn btn-danger pull-right">Reject Request</button>
        
      </div>
    </div>

  </div>
</div>

<div align="center" id="overlay">
	<div id="text" style="margin-top: -150px;">
		<div class="loader"></div>

	</div>
	<div id="text">
		<p style='margin-left: 125px'>Please wait</p>
	</div>

</div>

	<!-- jQuery 3 -->
	<script src="resources/assets/vendor_components/jquery/dist/jquery.js"></script>
	
	<script src="resources/assets/vendor_components/jquery-ui/jquery-ui.js"></script>
	<!-- popper -->
	<script src="resources/assets/vendor_components/popper/dist/popper.min.js"></script>

	<!-- Bootstrap v4.0.0-beta -->
	<script src="resources/assets/vendor_components/bootstrap/dist/js/bootstrap.js"></script>

	<!-- Bootstrap WYSIHTML5 -->
	<script src="resources/assets/vendor_plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js"></script>
	<!-- FastClick -->
	<script src="resources/assets/vendor_components/fastclick/lib/fastclick.js"></script>
	


	<!-- Sparkline -->
	<script src="resources/assets/vendor_components/jquery-sparkline/dist/jquery.sparkline.js"></script>

	<!-- jvectormap  -->
	<script src="resources/assets/vendor_plugins/jvectormap/jquery-jvectormap-1.2.2.min.js"></script>
	<script src="resources/assets/vendor_plugins/jvectormap/jquery-jvectormap-world-mill-en.js"></script>
	
    <script src="resources/assets/vendor_components/raphael/raphael.js"></script>
	<script src="resources/assets/vendor_components/morris.js/morris.js"></script>
	<script src="resources/assets/vendor_components/jquery-knob/js/jquery.knob.js"></script>

	<!-- SlimScroll -->
	<script src="resources/assets/vendor_components/jquery-slimscroll/jquery.slimscroll.js"></script>

	<!-- ChartJS -->
	<script src="resources/assets/vendor_components/chart-js/chart.js"></script>
	
	<!-- MomentJS -->
	<script src="resources/assets/vendor_components/moment/moment.js"></script>

	<!-- Maximum_admin App -->
	<script src="resources/js/template.js"></script>

	<!-- Maximum_admin dashboard demo (This is only for demo purposes) -->
	<!-- <script src="resources/js/pages/dashboard2.js"></script> -->

	<!-- Maximum_admin for demo purposes -->
	<script src="resources/js/demo.js"></script>
	
	<!-- Index -->	

	<script src="resources/js/customjs/index/index.js"></script>
	<script src="resources/js/customjs/commanAjax.js"></script>
	
	<script src="resources/js/plugins/sweetalert2@8.js"></script>
	<!-- <script src="resources/js/plugins/datapicker/bootstrap-datepicker.js"></script> -->
	
	<!-- bootstrap datepicker -->
	<script src="resources/assets/vendor_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js"></script>
	
	<!-- daterange picker -->
	<script src="resources/assets/vendor_components/bootstrap-daterangepicker/daterangepicker.js"></script>
	
	<!-- Select2 -->
	<script src="resources/assets/vendor_components/select2/dist/js/select2.full.js"></script>
	
	<script src="resources/assets/vendor_plugins/DataTables-1.10.15/media/js/jquery.dataTables.min.js"></script>
	
	<script src="resources/js/plugins/toastr/toastr.min.js"></script>
	
	  <script src="resources/js/customjs/user/userprofile.js"></script>
 
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-timepicker/1.13.16/jquery.timepicker.min.js"></script>
</body>


</html>
