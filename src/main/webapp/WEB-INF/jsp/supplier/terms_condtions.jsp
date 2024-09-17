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
	
	

	<!-- google font -->
	<link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet">
	<link href="resources/css/animate.css" rel="stylesheet">
	
	
</head>
<body class="hold-transition skin-blue sidebar-mini">


<div class="wrapper">
	
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header" style="background-image: url(resources/images/user-info.jpg);">
 
      <h1 id="titleID">
        Terms and Conditions 
      </h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="breadcrumb-item" id="bcumb">Terms and Conditions  </li>
      </ol>
    </section>


    <!-- Main content -->
    <section class="content"  id="loadDiv">
      <!-- Info boxes -->
     <div class="col-md-12 col-lg-12">
          <div class="box box-default">
            <div class="box-header with-border">
              <h3 class="card-title">Terms & Conditions</h3>
              <h6 class="card-subtitle">Read bellow details as it is <code>Important</code></h6>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
            	<!-- Nav tabs -->
				<div class="vtabs">
					<ul class="nav nav-tabs tabs-vertical" role="tablist">
						<li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#home4" role="tab"><span class="hidden-sm-up"><i class="ion-home"></i></span> <span class="hidden-xs-down">Terms</span> </a> </li>
						<li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#profile4" role="tab"><span class="hidden-sm-up"><i class="ion-person"></i></span> <span class="hidden-xs-down">IT Quality Policy</span></a> </li>
						<li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#messages4" role="tab"><span class="hidden-sm-up"><i class="ion-email"></i></span> <span class="hidden-xs-down">Condtions</span></a> </li>
					</ul>
					<!-- Tab panes -->
					<div class="tab-content">
						<div class="tab-pane active" id="home4" role="tabpanel">
							<div class="pad">
								<h3>1. Purpose</h3>
								<h4>Purpose of the software</h4>
								<p>IT quality policy states the basic beliefs that BidPro to deliver quality in Procurement systems and related support services.
It acts like a company constitution informing Staff actions when there is no specific procedure to guide them.
The quality policies identify BidPro priorities separating the critical few from the important many. This policy also summarises measures of success too.
This document describes the how quality principles applied in the genera business process of Procurement Management and Support services.</p>
							</div>
						</div>
						<div class="tab-pane pad" id="profile4" role="tabpanel">2</div>
						<div class="tab-pane pad" id="messages4" role="tabpanel">3</div>
					</div>
				</div>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
        <!-- /.col -->
      
      <!-- /.info-box -->
      

      
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  
  
  <!-- Add the sidebar's background. This div must be placed immediately after the control sidebar -->
  <div class="control-sidebar-bg"></div>

</div>
<!-- ./wrapper -->





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
	


	
</body>


</html>
