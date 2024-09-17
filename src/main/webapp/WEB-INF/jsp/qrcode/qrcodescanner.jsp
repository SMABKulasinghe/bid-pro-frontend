<!-- left column -->
<div class="col-xl-12 col-lg-8 animated fadeInLeft">
	<!-- Horizontal Form -->
	<div class="box box-info">
			<div class="box-header with-border">
				<h3 class="box-title text-green">Counts</h3>
			</div>
			<!-- /.box-header -->
			<!-- form start -->
			<div class="box-body">
			<div class="row">
				
				<div class="col-md-3">
					<div class="small-box bg-red">
			            <div class="inner">
			              <h3 id="pendingParti"></h3>
			
			              <p>Pending participants</p>
			            </div>
			            <div class="icon">
			              <i class="fa fa-pie-chart"></i>
			            </div>
			            
			         </div>
				</div>
				<div class="col-md-3">
					<div class="small-box bg-purple">
			            <div class="inner">
			              <h3 id="attendParti"></h3>
			
			              <p>Attended participants</p>
			            </div>
			            <div class="icon">
			              <i class="fa fa-user-plus"></i>
			            </div>
			            
			         </div>
				</div>
				<div class="col-md-3">
					<div class="small-box bg-green">
			            <div class="inner">
			              <h3 id="attendAndPendong"></h3>
			
			              <p>Total participants</p>
			            </div>
			            <div class="icon">
			              <i class="fa fa-bar-chart"></i>
			            </div>
			            
			         </div>
				</div>
			</div>
			</div>
	</div>
	
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">QR Code Scanner</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		
		
		<div class="box-body">
		<div class="row">
			<div class="col-md-6">
			
					<fieldset>
					<!-- <h4 class="card-subtitle text-green">Procurement Committee Creation</h4> <br> -->
					
					<div class="form-group row">
						<!-- <label for="inputPassword3" class="col-sm-4 control-label">Select closed Tender  No *</label> -->
						
							  <div class="col-md-8">
							  	<!--  style="width:500px;" -->
							    <div id="reader"></div>
							  </div>
							   
							  <div class="col-md-8">
							  <br>
							 
							  	<button type="submit" id="create_button" class="btn btn-info pull-left col-md-12"> Mark the Ticket </button>
							  </div>
							  
							  <!-- <div class="col-md-8" style="padding:30px;">
							    <h4>SCAN RESULT</h4>
							    <div id="result">Result Here</div>
							  </div> -->
							  <br>
							 <!--  <fieldset class="col-md-8">
								<div>
									 <br>
									  
									<button type="submit" id="create_button" class="btn btn-info pull-left col-md-8"> Mark the Ticket </button>
								</div>
							  </fieldset> -->
						
					</div>
					
					
				</fieldset>
				<br/>
			
			</div>
			
		</div>
	
	
	
	
		
	</div>
	</div>
	
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">Attendance Sheet</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			
			<div class="col-md-12">
			<table id="qrCodeTable" class="table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select">
				<thead>
					<tr class="text-yellow">
						<th>Index</th>
						<th>Name</th>
						<th>Email</th>
						<th>Phone number</th>
						<th>Ticket Number</th>
						<th>Ticket Date</th>
						<th>Attended Date</th>
						<th>Attended Time</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody id="">
						
						
				</tbody>
			</table>
			</div>
		</div>
		</div>
	</div>
	
	<div class="box box-info">
		<div class="box-header with-border">
			<h3 class="box-title text-green">Send Email</h3>
		</div>
		<!-- /.box-header -->
		<!-- form start -->
		<div class="box-body">
		<div class="row">
			
			<div class="col-md-12">
				
				<div>
					<button type="submit" id="send_email_button" class="btn btn-info pull-left"> Send </button>
				</div>
				
			</div>
		</div>
		</div>
	</div>
	
</div>

<script src="resources/js/customjs/qrcode/qrcode.min_.js"></script>
<script type="text/javascript">
$('#Procurementtext').empty()
$('#testIndex').empty()
$('#TechnicalEvaluation').empty()
$('#PurchaseOrder').empty()
$('#companyprofile').empty()
$('#AccountingIl').empty()

//$('#testIndex').hide()
var qrResults;

function onScanSuccess(qrCodeMessage) {
    //document.getElementById('result').innerHTML = '<span class="result" id="qrCodeResults">'+qrCodeMessage+'</span>';
    qrResults = qrCodeMessage;
    //<span class="result" id="qrCodeResults">'+qrCodeMessage+'</span>
}
function onScanError(errorMessage) {
  //handle scan error
}
var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);

$(document).ready(function() {
	$('#Procurementtext').empty();
	$('#testIndex').empty();
	$('#TechnicalEvaluation').empty();
	$('#PurchaseOrder').empty();
	$('#companyprofile').empty();
	$('#AccountingIl').empty();
	counts();
	
	qrTable = undefined;
	
	if(qrTable == undefined){
		console.log("5");
		qrTable = $('#qrCodeTable').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			
			
			ajax: {
			   	url:globalUrl+"/qr/qr-code-table-details",
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 
			    	 {"data":"index"},
					 {"data":"name"},
					 {"data":"email"},
					 {"data":"phoneNumber"},
					 {"data":"ticketNumber"},
					 {"data":"ticketDate"},
					
					 {"data":"accessedDate",
							orderable: false,
			            	 render: function(data,type,row,meta) {
								if(row.accessedDate == null){
									return '<span class="badge badge-success">Pending</span>'
								}else if(row.accessedDate != null){
									
									return '<span class="badge badge-primary">'+row.accessedDate+'</span>'
								}
								  
								  
							  },	
						},
					{"data":"accessedTime",
							orderable: false,
			            	 render: function(data,type,row,meta) {
								if(row.accessedTime == null){
									return '<span class="badge badge-success">Pending</span>'
								}else if(row.accessedTime != null){
									
									return '<span class="badge badge-primary">'+row.accessedTime+'</span>'
								}
								  
								  
							  },	
						},
					 /* {"data":"status",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.status == 1){
								return '<span class="badge badge-success">Pending</span>'
							}else if(row.status == 2){
								
								return '<span class="badge badge-primary">Presented</span>'
							}
							  
							  
						  },	
					}, */
					{"data":"id",
						orderable: false,
		            	 render: function(data,type,row,meta) {
		            		 if(row.status == 1){
		            			 return '<button type="button"  class="btn btn-success" style="margin-right: 10px" onclick="active1('+data+')">Mark the Ticket</button>'
								}else if(row.status == 2){
									
									return '<span class="badge badge-danger">Already Attended</span>'
								}
		            		 
							  
						  },	
					},
					
			     ],
			order: [[1, 'asc']],
			//pageLength : 5,
			
    		
		})
		
		}else{
			console.log("Else part");
			counts();
			qrTable.ajax.url(globalUrl+"/qr/qr-code-table-details").load();
			
		}
	
});


function active1(data){
	console.log(data);
	//alert(data);
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes! Active'
		}).then((result) => {
		  if (result.value) {
			
			  getAsyncData("/qr/set-qr-status-to-present/"+ data+"/active", function(res) {
				  qrTable.ajax.url(globalUrl+"/qr/qr-code-table-details").load();
				  counts();
			 	})
		  
		  }
		})
}

function counts(){
	getAsyncData("/qr/get-qr-count", function(res) {
		console.log(res.responseJSON.attendCount);
		console.log(res.responseJSON.pendingCount);
		
		$('#pendingParti').append(res.responseJSON.pendingCount);
		$('#attendParti').append(res.responseJSON.attendCount);
		$('#attendAndPendong').append(res.responseJSON.attendPendingCount);
		
	})
}

$('#create_button').on('click', function() {
	 
	//alert(qrResults);
	Swal.fire({
		  title: 'Are you sure?',
		  text: "You won't be able to revert this!",
		  type: 'warning',
		  html:'Your Ticket Number<p>'+qrResults+'</p>',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Yes! Active'
			}).then((result) => {
			  if (result.value) {
				
				  getAsyncData("/qr/set-qr-status-to-present-using-qr/"+qrResults+"/qrcode", function(res) {
					  console.log(res.responseJSON.results);
					  if(res.responseJSON.results == "Success"){
						  Swal.fire(
									'Accepted!',
									'You can Access',
									'success'
						)
					  }else if(res.responseJSON.results == "AlreadExists"){
						  Swal.fire({
								type: 'error',
								title: 'Access Denied',
								text: 'Your QR alread used !',
								
							});
					  }else if(res.responseJSON.results == "NotTodayTicket"){
						  Swal.fire({
								type: 'error',
								title: 'Access Denied',
								text: 'Your Ticket is not Today !',
								
							});
					  }
					  qrTable.ajax.url(globalUrl+"/qr/qr-code-table-details").load();
				 	})
			  
			  }
			})
			counts();
	
});

$('#send_email_button').on('click', function() {
	
	Swal.fire({
		  title: 'Are you sure?',
		  text: "You won't be able to revert this!",
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Yes! Active'
			}).then((result) => {
			  if (result.value) {
				
				  getAsyncData("/qr/send-email-and-generate-qr", function(res) {
					  qrTable.ajax.url(globalUrl+"/qr/qr-code-table-details").load();
				 })
			  
			  }
		})
		counts();
	
});

</script>