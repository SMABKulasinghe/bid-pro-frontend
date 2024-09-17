let CurrentLocation;

jQuery(document).ready(function() {
	getSupplierDetails();
	
	var data = sessionStorage.getItem('myMainKey');
	var companyname = sessionStorage.getItem('mmiddlennames');
	var loggedUserID = sessionStorage.getItem('loggedUserID');
    var option = [];
	var option = JSON.parse(sessionStorage.getItem('userMenu'))
	var user = JSON.parse(sessionStorage.getItem('User'))
	
	if (user == undefined) {
		window.location.replace("/portal/login");
	}
	
	if(user.isFirstLogin === false){
		window.location.replace("/portal/login");
	}
	
	$('#top_username').text(user.username);
	$('#popup_username').html(user.username+' <small>'+user.userRoll.userRoleName+'</small>');
	$('#company_logo_img').attr('src', globalUrl+'/image/company/'+user.companyCode+'/logo');
	
	getAsyncData('/company/'+user.companyCode, function(res) {
		$('#menu_company_name').html(res.responseJSON.scname);
	});
	
	  // Your web app's Firebase configuration
	var firebaseConfig = {
    apiKey: "AIzaSyBaKj0N_AhVvShl8Cfz_u9MsOFV34_TyRQ",
    authDomain: "vms-v1.firebaseapp.com",
    databaseURL: "https://vms-v1.firebaseio.com",
    projectId: "vms-v1",
    storageBucket: "vms-v1.appspot.com",
    messagingSenderId: "126377981511",
    appId: "1:126377981511:web:efd8aee362bf85389ba362",
    measurementId: "G-WLC32LRQHD"
  };
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);
	  firebase.analytics();
	  
	 // firebase.analytics();
	  
	//Retrieve Firebase Messaging object.
	  const messaging = firebase.messaging(); 
	  messaging.usePublicVapidKey("BLHsxzV63H9mLGWTww_8gDTCMDSW_S0B1GW6usTnqm6CeTV1rSZJVLeXW3aPLtF9QBtQSTl5oTPiKWH_cK6s3uA");
	  
	  navigator.serviceWorker.register('/portal/resources/assets/sw.js')
	  .then((registration) => {
	    messaging.useServiceWorker(registration);

	    Notification.requestPermission().then((permission) => {
	  	  if (permission === 'granted') {
	  	    console.log('Notification permission granted.');
	  	    getRegToken();
	  	    // TODO(developer): Retrieve an Instance ID token for use with FCM.
	  	    // ...
	  	  } else {
	  	    console.log('Unable to get permission to notify.');
	  	  }
	  	});
	  });
	  
	  

	  
	  function getRegToken(){
		// Get Instance ID token. Initially this makes a network call, once retrieved
		// subsequent calls to getToken will return from cache.
		messaging.getToken().then((currentToken) => {
		  if (currentToken) {
			//console.log('reg key get'+currentToken);
		    sendTokenToServer(currentToken);
		  //  updateUIForPushEnabled(currentToken);
		  } else {
		    // Show permission request.
		    console.log('No Instance ID token available. Request permission to generate one.');
		    // Show permission UI.
		  //  updateUIForPushPermissionRequired();
		    setTokenSentToServer(false);
		  }
		}).catch((err) => {
		  console.log('An error occurred while retrieving token. ', err);
		  //	showToken('Error retrieving Instance ID token. ', err);
		  setTokenSentToServer(false);
		});
	  }
	  
	  function setTokenSentToServer(sent) {
		    window.localStorage.setItem('sentToServer', sent ? '1' : '0');
		  }
	  
	  function sendTokenToServer(currentToken) {
		  console.log(currentToken);
		    if (!isTokenSentToServer()) {
		      console.log('Sending token to server...');
		      console.log(currentToken);
		      // TODO(developer): Send the current token to your server.
		      
		     let data = {'token': currentToken}
		      
		      getAsyncDataPOST('/users/'+sessionStorage.getItem("loggedUserID")+'/token',data, function(res){
		    	  sessionStorage.setItem('token', currentToken);
		      });
		      
		      setTokenSentToServer(true);
		    } else {
		    	let token = sessionStorage.getItem('token');
//		    	if (token != currentToken) {
		    		 let data = {'token': currentToken}
			    	  
				    getAsyncDataPOST('/users/'+sessionStorage.getItem("loggedUserID")+'/token',data, function(res){
					    sessionStorage.setItem('token', currentToken);
					});
//				}
		    	 
		      console.log('Token already sent to server so won\'t send it again unless it changes');
		      
		      
		    }
	  }
	  function isTokenSentToServer() {
		    return window.localStorage.getItem('sentToServer') === '1';
		  }
	  
	  messaging.onMessage(function(payload) {
		  
		console.log(payload);
		 toastr.options = {
				  "closeButton": true,
				  "debug": false,
				  "progressBar": true,
				  "preventDuplicates": false,
				  "positionClass": "toast-top-right",
				  "onclick": null,
				  "showDuration": "400",
				  "hideDuration": "1000",
				  "timeOut": "7000",
				  "extendedTimeOut": "1000",
				  "showEasing": "swing",
				  "hideEasing": "linear",
				  "showMethod": "fadeIn",
				  "hideMethod": "fadeOut"
				}
		
		if (payload.data.type == 'Invoice Raised') {
			toastr.success(payload.data.company+' send you a Invoice',payload.data.type);
		}else{
			toastr.success(payload.data.company+' send you a partnership request',payload.data.type);
		}
		

		 // Display a success toast, with a title
		
		 
		 getNotification();
	});
	
	
	
	console.log("IndexOriginal Document requests its content");
	//$('#loadDiv').load('../portal/poupload');
	//loadNavBar();
	


	// one value find from login.js

	
	//console.log(user.username);

	//extra security check for Logged User
	//console.log(data)
	if(option != null  && data!=null ){
		//console.log('')
		$("#username").text(data); 
		//$("#todayis").text(new Date().toISOString().slice(0,10).replace(/-/g,"-")); 
	//	$("#todayis").text(moment().format('LL')); 
		//$("#mmiddlenname").text(companyname); 
		$("#mmiddlenname").html(companyname+'<b class="caret"></b>'); 
		
		if(option==0){
			var resp = getFunction("/users/"+loggedUserID+"/useroptions",null,"N")
			console.log(resp)
			resp[1].forEach(function(item){
				option.push(item.userRoleOptionsName);
			});
			var userMenu = JSON.stringify(option);
			sessionStorage.setItem('userMenu', userMenu);
		}
		loadNavBar();
	}else if(data!=null && option==null){
		console.log('data')
		option = [];
		var resp = getFunction("/users/"+loggedUserID+"/useroptions",null,"N")
		resp[1].forEach(function(item){
			option.push(item.userRoleOptionsName);
		});
		var userMenu = JSON.stringify(option);
		sessionStorage.setItem('userMenu', userMenu);
		loadNavBar();
	}else{
		window.location.replace("login");

	}

 
	function update() {
		  $('#todayis').html(moment().format('D. MMMM YYYY H:mm:ss'));
		}

		setInterval(update, 1000);
		getNotification();
		
	
});

function onClickNotification(mappingId) {
	console.log(mappingId)
	 getAsyncData('/contract/partnership/'+mappingId, function(res) {
		 if (res.status == 200) {
			$('#mdl_ar_com_name').text(res.responseJSON.companyName)
	    	$('#ar_add1').text(res.responseJSON.companyAdd1+' '+res.responseJSON.companyAdd2)
	    	$('#ar_add2').text(res.responseJSON.companyAdd3)
	    	$('#mapId').val(mappingId)
	    		
	    	$('#ar_company_code').text(res.responseJSON.companyCode)
	    	$('#ar_company_contact').text(res.responseJSON.companyContact)
	    	$('#ar_company_email').text(res.responseJSON.companyEmail)
	    	$('#ar_companyImage').attr('src',globalUrl+'/image/company/'+res.responseJSON.companyId+'/logo');
			$("#mdl_Accept_Request").modal();
		 }
	 });
	 
	return false;
}


$('#aid').on('click', function(){
	 console.log("Widget Clicked");
	 $('#loadDiv').load('../portal/1');	 
});


	
$('#dashboardLink').on('click', function(){
	console.log("DashBoard Clicked");
	$('#loadDiv').load('../portal/indexContent');		
});

	$('#loadDiv').load('../portal/indexContent');


/*$('#companyprofile').on('click', function(){
	console.log("Company Profile Clicked");
	$('#loadDiv').load('../portal/companyprofile');		
});
	*/
	
	function navigate(location){
		if (CurrentLocation != location) {
			CurrentLocation = location;
			$('#loadDiv').load('../portal/'+location);
		}
		
	}
	
	function loadNavBar(){
		
		var option = JSON.parse(sessionStorage.getItem('userMenu'));
		
		

		if(option.includes('User ID Creation')||option.includes('User/Password Authorization')||option.includes('Password Reset')
				||option.includes('User Roll Authorization')||option.includes('User Edit') || option.includes('User Audit Log') 
				|| option.includes('User Roll Creation')){
			
			if(option.includes('User ID Creation')){
		   		 console.log('test')
		        	$("#userSubItems").append('<li> <a href="#" onclick="navigate(\'usercreate\')"><i class="fa fa-circle-o"></i>User Creation</a> </li>'); 
			} 
			 if(option.includes('User/Password Authorization')){
		        	$("#userSubItems").append('<li> <a href="#" onclick="navigate(\'userpasswordauth\')"><i class="fa fa-circle-o"></i>User Authorization</a></li>');
		     }
			 if(option.includes('User Edit')){
		        	$("#userSubItems").append('<li> <a href="#" onclick="navigate(\'useredit\')"><i class="fa fa-circle-o"></i>User Edit</span></a></li>');
		        }
			 if(option.includes('Password Reset')){
		        	$("#userSubItems").append('<li> <a href="#" onclick="navigate(\'userpasswordrest\')"><i class="fa fa-circle-o"></i>Password Reset</span></a></li>');
		        }
			/* if(option.includes('User Roll Creation')){
		     	$("#userSubItems").append('<li> <a href="#" onclick="navigate(\'userrollcreation\')"><i class="fa fa-circle-o"></i>User Roll Creation</span></a></li>');
		     }*/
			 if(option.includes('User Roll Creation')){
				 $("#userSubItems").append('<li> <a href="#" onclick="navigate(\'userroleredesign\')"><i class="fa fa-circle-o"></i>User Roll Creation</span></a></li>');
			 }
			 if(option.includes('User Roll Authorization')){
		     	$("#userSubItems").append('<li> <a href="#" onclick="navigate(\'userrollauthorization\')"><i class="fa fa-circle-o"></i>User Roll Authorization</span></a></li>');
		     }		
			 if(option.includes('User Role Edit')){
				 $("#userSubItems").append('<li> <a href="#" onclick="navigate(\'userroleedit\')"><i class="fa fa-circle-o"></i>User Role Edit</span></a></li>');
			 }
			 if(option.includes('User Audit Log')){
				 $("#userSubItems").append('<li> <a href="#" onclick="navigate(\'userauditlog\')"><i class="fa fa-circle-o"></i>User Audit Log</span></a></li>');
			 }		 
			/* if(option.includes('User ID Creation Dedesign')){
				 $("#userSubItems").append('<li> <a href="#" onclick="navigate(\'usercreateredesign\')"><i class="fa fa-circle-o"></i>User ID Creation Dedesign</span></a></li>');
			 }*/
			 
			
			
		}else{
			$("#userMainItem").hide();
		}
		
		if(option.includes('Company Creation')||option.includes('Authorize Company')){
			if(option.includes('Company Creation')){
		      	$("#companySubItems").append('<li> <a href="#" onclick="navigate(\'companycreation\')"><i class="fa fa-circle-o"></i>Company Creation</a> </li>');
		     }
			if(option.includes('Authorize Company')){
		      	$("#companySubItems").append('<li> <a href="#" onclick="navigate(\'authorizecompany\')"><i class="fa fa-circle-o"></i>Authorize Company</a> </li>');
		     }
			 
		}
	
		else{
			$("#companyMainItem").hide();
		}
		
		if(option.includes('Supplier Creation')||option.includes('Authorize Supplier')||option.includes('View Suppliers')||option.includes('Block Suppliers')||option.includes('View Block Suppliers')){
			//||option.includes('Authorize Contract')
			 /*if(option.includes('Supplier Creation')){
				   $("#supplierSubItems").append('<li> <a href="#" onclick="navigate(\'suppliercreate\')"><i class="fa fa-circle-o"></i>Supplier Creation</a> </li>');
				 	 
			 }*/
			 if(option.includes('Supplier Creation')){
				 $("#supplierSubItems").append('<li> <a href="#" onclick="navigate(\'registerationprocess1\')"><i class="fa fa-circle-o"></i>Supplier Registration</a> </li>');
				 
			 }
			 if(option.includes('View Suppliers')){
				 $("#supplierSubItems").append('<li> <a href="#" onclick="navigate(\'viewsuppliers\')"><i class="fa fa-circle-o"></i>View Suppliers</a> </li>');
			   	 
			 }
			 if(option.includes('Authorize Supplier')){
				 $("#supplierSubItems").append('<li> <a href="#" onclick="navigate(\'supplierauthorization\')"><i class="fa fa-circle-o"></i>Authorize Supplier</a> </li>');
			   	 
			 }
			 if(option.includes('Connect Supplier')){
				 $("#supplierSubItems").append('<li> <a href="#" onclick="navigate(\'connectsuppliers\')"><i class="fa fa-circle-o"></i>Connect Supplier</a> </li>');
			   	 
			 }
		 	 if(option.includes('Block Suppliers')){
				 $("#supplierSubItems").append('<li> <a href="#" onclick="navigate(\'blocksuppliers\')"><i class="fa fa-circle-o"></i>Block Suppliers</a> </li>');
			   	 
			 }
			 if(option.includes('View Block Suppliers')){
				 $("#supplierSubItems").append('<li> <a href="#" onclick="navigate(\'viewblocksuppliers\')"><i class="fa fa-circle-o"></i>View Block Suppliers</a> </li>');
			   	 
			 }
			 /*if(option.includes('Contract Details')){
				 $("#supplierSubItems").append('<li> <a href="#" onclick="navigate(\'contractcreate\')"><i class="fa fa-circle-o"></i>Create Contract </a> </li>');

			 }
			 
			 if(option.includes('Authorize Contract')){
				 $("#supplierSubItems").append('<li> <a href="#" onclick="navigate(\'contractauthorization\')"><i class="fa fa-circle-o"></i>Authorize Contract </a> </li>');
			   	 
			 }*/
			 
		}else{
			$("#supplierMainItem").hide();
		}
		
		
		if(option.includes('Create Category')){
			
			 if(option.includes('Create Category')){
				 $("#supplierCategorySubItems").append('<li> <a href="#" onclick="navigate(\'createcategory\')"><i class="fa fa-circle-o"></i>Create Category</a> </li>');
			 }
		}else{
			$("#supplierCategoryMainItem").hide();
		}
		
		
		if(option.includes('Contract Details')||option.includes('Authorize Contract')){
			
			 /*if(option.includes('Supplier Creation')){
				   $("#supplierSubItems").append('<li> <a href="#" onclick="navigate(\'suppliercreate\')"><i class="fa fa-circle-o"></i>Supplier Creation</a> </li>');
				 	 
			 }*/
			 
			 if(option.includes('Contract Details')){
				 $("#contractSubItems").append('<li> <a href="#" onclick="navigate(\'contractcreate\')"><i class="fa fa-circle-o"></i>Create Contract </a> </li>');

			 }
			 
			 if(option.includes('Authorize Contract')){
				 $("#contractSubItems").append('<li> <a href="#" onclick="navigate(\'contractauthorization\')"><i class="fa fa-circle-o"></i>Authorize Contract </a> </li>');
			   	 
			 }
		}else{
			$("#contractMainItem").hide();
		}
		
		
		if(option.includes('Create RFP') || option.includes('Update RFP')  || option.includes('View RFP') || option.includes('Response Tender') || option.includes('Financial Details') || option.includes('Upload File')|| option.includes('Latter Submit') /*|| option.includes('Registeration Process')*/|| option.includes('RFP Responses') || option.includes('Technical Evaluation Parameters') || option.includes('View RFP Details') || option.includes('Revised RFP submittion') || option.includes('Financial Code Creation') || option.includes('Financial Per Tender')){
				 
				 if(option.includes('Create RFP')){
					 $("#rfpSubItems").append('<li> <a href="#" onclick="navigate(\'createrfp\')"><i class="fa fa-circle-o"></i>Create RFP</a> </li>');  	 
				 }
			
				if(option.includes('Financial Code Creation')){
				 $("#rfpSubItems").append('<li> <a href="#" onclick="navigate(\'financialcodecreation\')"><i class="fa fa-circle-o"></i>Financial Code Creation</a> </li>');  	 
			 	}
			
				if(option.includes('Financial Per Tender')){
				 $("#rfpSubItems").append('<li> <a href="#" onclick="navigate(\'financialpertender \')"><i class="fa fa-circle-o"></i>Financial Per Tender</a> </li>');  	 
			    }					
					
				 /*if(option.includes('Update RFP')){
					 $("#rfpSubItems").append('<li> <a href="#" onclick="navigate(\'updaterfp\')"><i class="fa fa-circle-o"></i>Update RFP</a> </li>');  	 
				 }	*/			
					
				 if(option.includes('View RFP')){
					 $("#rfpSubItems").append('<li> <a href="#" onclick="navigate(\'viewrfp\')"><i class="fa fa-circle-o"></i>View RFP</a> </li>');  	 
				 }
				 /*if(option.includes('Response Tender')){
					 $("#rfpSubItems").append('<li> <a href="#" onclick="navigate(\'responserfp\')"><i class="fa fa-circle-o"></i>Response Tender</a> </li>');  	 
				 }*/
				 /*if(option.includes('Financial Details')){
					 $("#rfpSubItems").append('<li> <a href="#" onclick="navigate(\'financialdetails\')"><i class="fa fa-circle-o"></i>Financial Details</a> </li>');  	 
				 }*/
				 /*if(option.includes('Upload File')){
					 $("#rfpSubItems").append('<li> <a href="#" onclick="navigate(\'uploadfile\')"><i class="fa fa-circle-o"></i>Upload File</a> </li>');  	 
				 }*/
				/* if(option.includes('Latter Submit')){
					 $("#rfpSubItems").append('<li> <a href="#" onclick="navigate(\'latter\')"><i class="fa fa-circle-o"></i>Latter Submit</a> </li>');  	 
				 }*/
				 if(option.includes('RFP Submit')){
					 $("#rfpSubItems").append('<li> <a href="#" onclick="navigate(\'submitrfpbysupplier\')"><i class="fa fa-circle-o"></i>RFP Submit</a> </li>');  	 
				 }
				/* if(option.includes('Registeration Process')){
					 $("#rfpSubItems").append('<li> <a href="#" onclick="navigate(\'registerationprocess\')"><i class="fa fa-circle-o"></i>Registeration Process</a> </li>');  	 
				 }*/
				 if(option.includes('RFP Responses')){
					 $("#rfpSubItems").append('<li> <a href="#" onclick="navigate(\'rfpresponses\')"><i class="fa fa-circle-o"></i>RFP Authorization</a> </li>');  	 
				 }
				 
				 if(option.includes('View RFP Details')){
					 $("#rfpSubItems").append('<li> <a href="#" onclick="navigate(\'viewrfpcompany\')"><i class="fa fa-circle-o"></i>View RFP Details</a> </li>');  	 
				 }
					
				if(option.includes('Revised RFP submittion')){
					 $("#rfpSubItems").append('<li> <a href="#" onclick="navigate(\'revisedrfpsubmission\')"><i class="fa fa-circle-o"></i>Revised RFP submittion</a> </li>');  	 
				 }
				  /*if(option.includes('Technical Evaluation Parameters')){
					  $("#rfpSubItems").append('<li> <a href="#" onclick="navigate(\'techeveparams\')"><i class="fa fa-circle-o"></i>Technical Evaluation Parameters</a> </li>');  	 
				  }*/
				 
			 }else{
				 $("#rfpMainItem").hide(); 
			 }
		
		 
		if(option.includes('Issue PO')||option.includes('Re-issue PO')||option.includes('PO Authorization')||option.includes('PO Details') ||option.includes('Purchase Order Details') ||option.includes('Create Terms and Conditions') ||option.includes('Terms and Conditions per Tender') ){
		
		/*if(option.includes('Board Paper Upload')){
				 $("#poSubItems").append('<li> <a href="#" onclick="navigate(\'boardpaperupload\')"><i class="fa fa-circle-o"></i>Upload Files</a> </li>');  	 
			 }
		*/	 
		if(option.includes('Create Terms and Conditions')){
				 $("#poSubItems").append('<li> <a href="#" onclick="navigate(\'potermsandconditionscreation\')"><i class="fa fa-circle-o"></i>Create Terms and <br> Conditions</a> </li>');
			      
			 }
			if(option.includes('Terms and Conditions per Tender')){
				 $("#poSubItems").append('<li> <a href="#" onclick="navigate(\'potermsandconditionspertender\')"><i class="fa fa-circle-o"></i>Terms and Conditions<br> per Tender</a> </li>');
			      
			 }
			if(option.includes('Issue PO')){
				 $("#poSubItems").append('<li> <a href="#" onclick="navigate(\'issuepo\')"><i class="fa fa-circle-o"></i>Issue PO</a> </li>');
			      
			 }
			 if(option.includes('Re-issue PO')){
				 $("#poSubItems").append('<li> <a href="#" onclick="navigate(\'reissuepo\')"><i class="fa fa-circle-o"></i>Re-issue PO</a> </li>');
			      
			 }
			 if(option.includes('PO Authorization')){
				 $("#poSubItems").append('<li> <a href="#" onclick="navigate(\'poauthorization\')"><i class="fa fa-circle-o"></i>PO Authorization</a> </li>');
			      
			 }
			 if(option.includes('PO Details')){
				 $("#poSubItems").append('<li> <a href="#" onclick="navigate(\'podetails\')"><i class="fa fa-circle-o"></i>PO Details</a> </li>');
			      
			 }
			if(option.includes('Purchase Order Details')){
				 $("#poSubItems").append('<li> <a href="#" onclick="navigate(\'purchaseorderdetails\')"><i class="fa fa-circle-o"></i>Purchase Order Details</a> </li>');
			      
			 }
			

	
		 }else{
			 $("#purchaseOrderMainItem").hide();
		 }
		
		
		if(option.includes('Issue Invoice')||option.includes('Invoice Authorization')||option.includes('Invoice Details')){
			
			 if(option.includes('Issue Invoice')){
			      		 
			     $("#invoiceItems").append('<li> <a href="#" onclick="navigate(\'issueinvoice\')"><i class="fa fa-circle-o"></i>Issue Invoice</a> </li>');
			 }
			 if(option.includes('Invoice Authorization')){
				 $("#invoiceItems").append('<li> <a href="#" onclick="navigate(\'invoiceapprove\')"><i class="fa fa-circle-o"></i>Invoice Authorization</a> </li>');
			      
			 }
			 if(option.includes('Invoice Details')){
				 $("#invoiceItems").append('<li> <a href="#" onclick="navigate(\'invoicedetails\')"><i class="fa fa-circle-o"></i>Invoice Details</a> </li>');
			      
			 }


	
		 }else{
			 $("#invoiceMainItem").hide();
		 }
	
		/*if(option.includes('Issue Invoice')||option.includes('Invoice Authorization')||option.includes('Invoice Details')){
			
			 if(option.includes('Issue Invoice')){
			      		 
			     $("#invoiceItems").append('<li> <a href="#" onclick="navigate(\'issueinvoice\')"><i class="fa fa-circle-o"></i>Issue Invoice</a> </li>');
			 }
			 if(option.includes('Invoice Authorization')){
				 $("#invoiceItems").append('<li> <a href="#" onclick="navigate(\'invoiceapprove\')"><i class="fa fa-circle-o"></i>Invoice Authorization</a> </li>');
			      
			 }
			 if(option.includes('Invoice Details')){
				 $("#invoiceItems").append('<li> <a href="#" onclick="navigate(\'invoicedetails\')"><i class="fa fa-circle-o"></i>Invoice Details</a> </li>');
			      
			 }


	
		 }else{
			 $("#invoiceMainItem").hide();
		 }*/
		 
		 if(option.includes('Board Paper Upload')){
			
			 if(option.includes('Board Paper Upload')){
				 $("#boardPaperUploadSubItems").append('<li> <a href="#" onclick="navigate(\'boardpaperupload\')"><i class="fa fa-circle-o"></i>Upload Files</a> </li>');  	 
			 }
			
		 }else{
			 $("#boardPaperUploadMainItem").hide();
			 }
		
		if(option.includes('Proceed Payment')||option.includes('Payment Authorization')||option.includes('Payment Schedule')||option.includes('Outstanding Payments')){
			if(option.includes('Proceed Payment')){
		      	$("#payementsSubItems").append('<li> <a href="#" onclick="navigate(\'proceedpayment\')"><i class="fa fa-circle-o"></i>Proceed Payment</a> </li>');
		     }
			if(option.includes('Payment Authorization')){
		      	$("#payementsSubItems").append('<li> <a href="#" onclick="navigate(\'paymentauthorization\')"><i class="fa fa-circle-o"></i>Payment Authorization</a> </li>');
		     }
			if(option.includes('Payment Schedule')){
		      	$("#payementsSubItems").append('<li> <a href="#" onclick="navigate(\'paymentschedule\')"><i class="fa fa-circle-o"></i>Payment Schedule</a> </li>');
		     }
			if(option.includes('Outstanding Payments')){
		      	$("#payementsSubItems").append('<li> <a href="#" onclick="navigate(\'outstandingpayments\')"><i class="fa fa-circle-o"></i>Outstanding Payments</a> </li>');
		     }
			 
		}else{
			$("#paymentsMainItem").hide();
		}
	
	
		 if(option.includes('View Contract Details') || option.includes('View Invoice Details')|| option.includes('View Payment Details')){
				
				 if(option.includes('View Contract Details')){
					 $("#reportsSubItems").append('<li> <a href="#" onclick="navigate(\'viewcontractdetails\')"><i class="fa fa-circle-o"></i>View Contract Details</a> </li>');  	 
				 }				
				 if(option.includes('View Transaction Details')){
					 $("#reportsSubItems").append('<li> <a href="#" onclick="navigate(\'viewtransactiondetails\')"><i class="fa fa-circle-o"></i>View Transaction Details</a> </li>');  	 
				 }
				 if(option.includes('View Payment Details')){
					 $("#reportsSubItems").append('<li> <a href="#" onclick="navigate(\'viewpaymentdetails\')"><i class="fa fa-circle-o"></i>View Payment Details</a> </li>');  	 
				 }	
			 }else{
				 $("#reportsMainItem").hide(); 
			 }
		
		 if(option.includes('RFP Evaluation Committee')){
			 
			 if(option.includes('RFP Evaluation Committee')){
				 $("#rfpEveSubItems").append('<li> <a href="#" onclick="navigate(\'rfpevaluationcommitteecreation\')"><i class="fa fa-circle-o"></i>RFP Evaluation Committee</a> </li>');  	 
			 }
			if(option.includes('RFP Evaluation Marking')){
				 $("#rfpEveSubItems").append('<li> <a href="#" onclick="navigate(\'rfpevaluationmarking\')"><i class="fa fa-circle-o"></i>RFP Evaluation Marking</a> </li>');  	 
			 }
			if(option.includes('RFP Evaluation Results')){
				 $("#rfpEveSubItems").append('<li> <a href="#" onclick="navigate(\'rfpevaluationresults\')"><i class="fa fa-circle-o"></i>RFP Evaluation Results</a> </li>');  	 
			 }				
			
		 }else{
			 $("#rfpEveMainItem").hide(); 
		 }
		 
		
		 if(option.includes('Asset Registration') || option.includes('Transfer Asset') ){
			 
			 if(option.includes('Asset Registration')){
				 $("#assetSubItems").append('<li> <a href="#" onclick="navigate(\'assertregistration\')"><i class="fa fa-circle-o"></i>Asset Registration</a> </li>');  	 
			 }				
			 if(option.includes('View Asset')){
				 $("#assetSubItems").append('<li> <a href="#" onclick="navigate(\'viewasset\')"><i class="fa fa-circle-o"></i>View Asset</a> </li>');  	 
			 }				
			 if(option.includes('Transfer Asset')){
				 $("#assetSubItems").append('<li> <a href="#" onclick="navigate(\'transferasset\')"><i class="fa fa-circle-o"></i>Transfer Asset</a> </li>');  	 
			 }				
			 
		 }else{
			 $("#assetMainItem").hide(); 
		 }
		 
		 

		 	if(option.includes('Tender Registration') || option.includes('Submit RFP')  || option.includes('View & Download Tenders') || option.includes('View Tender') || option.includes('View Eligible Vendors')  || option.includes('Download Bidded Tenders') ||  option.includes('Inform Eligible Venders')||  option.includes('Tender Authorize')|| option.includes('Tender Master View') || option.includes('Submit Tender') || option.includes('Tender Open') || option.includes('Financial Response') || option.includes('Tender Details View') || option.includes('Financial Code Creation') || option.includes('Tender Participators') || option.includes('Financial Per Tender') || option.includes('Aditional Files For Tender') || option.includes('Additional Files Upload For Tender') || option.includes('Tender Extend') || option.includes('Resubmit Financial Details')){
			 
			 if(option.includes('Tender Registration')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'tendercreate\')"><i class="fa fa-circle-o"></i>Tender Registration</a> </li>');  	 
			 }	
		
			 if(option.includes('Financial Code Creation')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'financialcodecreation\')"><i class="fa fa-circle-o"></i>Financial Code Creation</a> </li>');  	 
			 }
		
			 if(option.includes('Financial Per Tender')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'financialpertender \')"><i class="fa fa-circle-o"></i>Financial Per Tender</a> </li>');  	 
			 }
		
			if(option.includes('Resubmit Financial Details')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'resubmitfinancialdetails \')"><i class="fa fa-circle-o"></i>Resubmit Financial Details</a> </li>');  	 
			 }	
		
			 if(option.includes('Tender Authorize')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'tenderauth\')"><i class="fa fa-circle-o"></i>Tender Authorize</a> </li>');  	 
			 }			
				
			 if(option.includes('Submit RFP')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'submitrfp\')"><i class="fa fa-circle-o"></i>Submit RFP </a> </li>');  	 
			 }	
			 
			 if(option.includes('Tender Master View')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'tenderview\')"><i class="fa fa-circle-o"></i>Tender Master View</a> </li>');  	 
			 }		
			 
			 if(option.includes('Tender Open')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'tenderopen\')"><i class="fa fa-circle-o"></i>Tender Open</a> </li>');  	 
			 }
		
			 if(option.includes('Tender Participators')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'tenderparticipators\')"><i class="fa fa-circle-o"></i>Tender Participants</a> </li>');  	 
			 }
		
			 if(option.includes('Tender Extend')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'tenderextend\')"><i class="fa fa-circle-o"></i>Tender Extend</a> </li>');  	 
			 }		
		
		 	 if(option.includes('Download Bidded Tenders')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'viewandsubmittenders\')"><i class="fa fa-circle-o"></i>Bidded Closed Tenders</a> </li>');  	 
			 }	
			 
			 	
				
			 if(option.includes('View & Download Tenders')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'viewanddownloadtenders\')"><i class="fa fa-circle-o"></i>View & Download Tenders</a> </li>');  	 
			 }	
			 
			 
			 
			 
			 /*if(option.includes('View Eligible Vendors')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'vieweligiblevendors \')"><i class="fa fa-circle-o"></i>View Eligible Vendors</a> </li>');  	 
			 }	*/
		
			/*if(option.includes('Inform Eligible Venders')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'informeligiblevendors \')"><i class="fa fa-circle-o"></i>Inform Eligible Vendors</a> </li>');  	 
			 }*/
			
			if(option.includes('Submit Tender')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'submittender \')"><i class="fa fa-circle-o"></i>Submit Tender</a> </li>');  	 
			 }	
			 
			if(option.includes('Financial Response')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'financialresponse \')"><i class="fa fa-circle-o"></i>Financial Response</a> </li>');  	 
			 }
		
			if(option.includes('Tender Details View')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'tenderviewforsupplier \')"><i class="fa fa-circle-o"></i>Tender Details View</a> </li>');  	 
			 }	
			
			if(option.includes('Aditional Files For Tender')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'aditionaldetailsfortender \')"><i class="fa fa-circle-o"></i>Aditional Files For Tender</a> </li>');  	 
			 }
		
			if(option.includes('Additional Files Upload For Tender')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'additionalfileuploadfortender \')"><i class="fa fa-circle-o"></i>Additional Files Upload <br> For Tender</a> </li>');  	 
			 }	
		
			if(option.includes('Additional File Upload Invitation For Supplier')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'additionalfileuploadforinvitationsupplier \')"><i class="fa fa-circle-o"></i>Additional File Upload <br>Invitation For Supplier</a> </li>');  	 
			 }	
		
			if(option.includes('Upload Additional Files For Tender')){
				 $("#tenderSubItems").append('<li> <a href="#" onclick="navigate(\'uploadadditionalfilefortender \')"><i class="fa fa-circle-o"></i>Upload Additional Files <br> For Tender</a> </li>');  	 
			 }
			
		 }else{
			 $("#tenderMainItem").hide(); 
		 }
		 	
		
		
			if(option.includes('Enter MIT Details') ){
				 
				 if(option.includes('Enter MIT Details')){
					 $("#mitSubItems").append('<li> <a href="#" onclick="navigate(\'entermitdetails\')"><i class="fa fa-circle-o"></i>Enter MIT Details</a> </li>');  	 
				 }
			
			 }else{
				 $("#mitMainItem").hide(); 
			 }
		
			if(option.includes('QR Code Scanner') ){
				 
				 if(option.includes('QR Code Scanner')){
					 $("#QrSubItems").append('<li> <a href="#" onclick="navigate(\'qrcodescanner\')"><i class="fa fa-circle-o"></i>QR Code Scanner</a> </li>');  	 
				 }
			
			 }else{
				 $("#QrMainItem").hide(); 
			 }
		 	
		 	
		 	if(option.includes('Evaluation Mark Sheet') || option.includes('Evaluation Sheet')  || option.includes('Evaluation Summary') || option.includes('Evaluation Sheet Create') || option.includes('Evaluation Committee Creation') || option.includes('Evaluation Sheet Edit') || option.includes('Authorize Evaluation') ){
				 
				 if(option.includes('Evaluation Sheet Create')){
					 $("#evalutionSubItems").append('<li> <a href="#" onclick="navigate(\'evaluationsheetcreate\')"><i class="fa fa-circle-o"></i>Evaluation Sheet Create</a> </li>');  	 
				 }
				if(option.includes('Evaluation Sheet Edit')){
					 $("#evalutionSubItems").append('<li> <a href="#" onclick="navigate(\'evaluationsheetedit\')"><i class="fa fa-circle-o"></i>Evaluation Sheet Edit</a> </li>');  	 
				 }
				 if(option.includes('View Close Tenders')){
					 $("#evalutionSubItems").append('<li> <a href="#" onclick="navigate(\'viewandsubmittenders\')"><i class="fa fa-circle-o"></i>View Close Tenders</a> </li>');  	 
				 }
				 if(option.includes('Evaluation Committee Creation')){
					 $("#evalutionSubItems").append('<li> <a href="#" onclick="navigate(\'evaluationcommitteecreation\')"><i class="fa fa-circle-o"></i>Evaluation Committee <br>   Creation</a> </li>');  	 
				 }
				if(option.includes('Authorize Evaluation')){
					 $("#evalutionSubItems").append('<li> <a href="#" onclick="navigate(\'authorizeevaluation\')"><i class="fa fa-circle-o"></i>Authorize Evaluation</a> </li>');  	 
				 }
				if(option.includes('Evaluation Mark Sheet')){
					 $("#evalutionSubItems").append('<li> <a href="#" onclick="navigate(\'evaluationmarksheet\')"><i class="fa fa-circle-o"></i>Evaluation Mark Sheet</a> </li>');  	 
				 }				
				if(option.includes('Evaluation Sheet')){
					 $("#evalutionSubItems").append('<li> <a href="#" onclick="navigate(\'evaluationsheet\')"><i class="fa fa-circle-o"></i>Evaluation Sheet</a> </li>');  	 
				 }	
				if(option.includes('Evaluation Summary')){
					 $("#evalutionSubItems").append('<li> <a href="#" onclick="navigate(\'evaluationsummary\')"><i class="fa fa-circle-o"></i>Evaluation Summary</a> </li>');  	 
				 }
				 
				 /*if(option.includes('Tender Offer')){
					 $("#evalutionSubItems").append('<li> <a href="#" onclick="navigate(\'tenderoffer\')"><i class="fa fa-circle-o"></i>Tender Offer</a> </li>');  	 
				 }*/
				 
			 }else{
				 $("#evalutionMainItem").hide(); 
			 }
		
		if(option.includes('Procurement Committee Creation') || option.includes('Procurement Vote for Tender') || option.includes('Board Paper Upload') || option.includes('Tender Offer') || option.includes('View MIT Details') || option.includes('View Financial Details')){
			 
			if(option.includes('View MIT Details')){
				 $("#procurementComSubItems").append('<li> <a href="#" onclick="navigate(\'viewmitdetails\')"><i class="fa fa-circle-o"></i>View MIT Details</a> </li>');  	 
			 }	
		
			if(option.includes('Procurement Committee Creation')){
				 $("#procurementComSubItems").append('<li> <a href="#" onclick="navigate(\'procurementcreationcommittee\')"><i class="fa fa-circle-o"></i>Procurement Committee <br>Creation</a> </li>');  	 
			 }
		
			if(option.includes('View Financial Details')){
				 $("#procurementComSubItems").append('<li> <a href="#" onclick="navigate(\'viewfinancialdetails\')"><i class="fa fa-circle-o"></i>View Financial Details</a> </li>');  	 
			 }		
		
			if(option.includes('Procurement Vote for Tender')){
				 $("#procurementComSubItems").append('<li> <a href="#" onclick="navigate(\'procurementvote\')"><i class="fa fa-circle-o"></i>Procurement Vote for<br> Tender</a> </li>');  	 
			 }	
			
			if(option.includes('Tender Offer')){
				 $("#procurementComSubItems").append('<li> <a href="#" onclick="navigate(\'tenderoffer\')"><i class="fa fa-circle-o"></i>Tender Offer</a> </li>');  	 
			 }				
			 
		 }else{
			 $("#procurementComMainItem").hide(); 
		 }
		 
	}
	
function newFunction() {
    return ' Creation</a> </li>';
}

	 function logout(){
		 let user = JSON.parse(sessionStorage.getItem('User'))
		 				 swal.fire({
		 					  title: 'Are you sure?',
		 					  text: "Do You want to Logout?",
		 					  type: 'info',
		 					 customClass: 'swal-size-sm',
		 					  showCancelButton: true,
		 					  confirmButtonColor: '#3085d6',
		 					  cancelButtonColor: '#d33',
		 					  confirmButtonText: 'Yes, Logout!'
		 					}).then((result) => {
		 					  if (result.value) {
		 						  
		 						  var location = 'Logout';
		 							var action = 'Logout success';		
		 							var url  = '/useractivity/addlogentry/'+user.userid+'/roleid/'+user.userRoll.userRoleID+'/location/'+location+'/action/'+action
		 							var globalToken = sessionStorage.getItem("GlobalToken");
		 							
		 							$.ajax({

		 								url : globalUrl + url,
		 								contentType : "application/json",		
		 								async : false,
		 								headers : {"Authorization" : 'Basic '+globalToken},
		 								type : 'GET',
		 								dataType : "json",
		 								complete: function(xhr, textStatus) {
		 									if (xhr.readyState == 4) {
		 										 console.log("Completed with Token "+xhr.status+" "+textStatus);
//		 									        console.log(xhr);
//		 									        console.log(xhr.responseText);
//		 									        console.log(xhr.responseJSON);
		 										 /* if(callBackName!=null){
		 											 callBackName(xhr);
		 										 } */
		 										 
		 									}         
		 							    },
		 							});
		 							
		 						  
		 						  	sessionStorage.removeItem('GlobalToken');
		 							sessionStorage.removeItem('loggedUserID');
		 							sessionStorage.removeItem('myMainKey');
		 							sessionStorage.removeItem('userMenu');
		 							sessionStorage.removeItem('User');
		 							sessionStorage.removeItem('mmiddlennames');
		 							window.location.replace("login");
		 						  
		 						
		 					    
		 					  }
		 					});
		 			}
	 
	 function getNotification() {
		 getAsyncData('/glob/notifications', function(res) {
			 if (res.status==200) {
				 if (res.responseJSON.length>0) {
					 $('#notification_Count').show();
					 $('#notification_view').show();
					 $('#notification_Count').text(res.responseJSON.length);
					 $('#notification_desc').text('You have '+res.responseJSON.length+' notifications');
					 $('#notifications').empty();
					 
					 
					 for (let data of res.responseJSON) {
						 console.log("get notification")
						 console.log(data)
						 if (data.type == 'partnership') {
							 console.log("partnership")
							 $("#notification_view").append('<li>'+
					                    '<a href="#" onclick="return onClickNotification('+data.mappingId+');" class="Notify_link">'+
					                      '<i class="fa fa-handshake-o text-green"></i>Partnership Request From '+data.company+'.'+
					                    '</a>'+
					                  '</li>');
						}else if (data.type == 'Invoice Raised') {
							 console.log("Invoice")
							 $("#notification_view").append('<li>'+
					                    '<a href="#" onclick="navigate(\'invoiceapprove\')" class="Notify_link">'+
					                      '<i class="fa fa-file-text-o text-green"></i>Invoice From '+data.company+'.'+
					                    '</a>'+
					                  '</li>');
						}
					}
				}else{
					$('#notification_Count').hide();
					 $('#notification_view').hide();
					 $('#notification_Count').text(res.responseJSON.length);
					 $('#notification_desc').text('You have '+res.responseJSON.length+' notifications');
					 $('#notifications').empty();
				}
				
			}
			
		});
	}
	 
	 $('#acceptPartnership').on('click', function() {
		
		 Swal.fire({
			  title: 'Do you want to accept?',
			  type: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Accept!'
			}).then((result) => {
			  if (result.value) {
			   
				  getAsyncData('/contract/partnership/'+$('#mapId').val()+'/accept/A', function(res) {
						 if (res.status==200) {
//							 Swal.fire(
//							   'Partnership Accepted',
//							   'You are joined with'+$('#mdl_ar_com_name').text(),
//							   'success'
//							 );
							 Swal.fire({
								  title: 'Partnership Accepted',
								  text: 'You are joined with '+$('#mdl_ar_com_name').text(),
								  type: 'success',
								  showCancelButton: false,
								  confirmButtonColor: '#3085d6',
								  cancelButtonColor: '#d33',
								  confirmButtonText: 'OK'
								}).then((result) => {
								  if (result.value) {
									  $('#mdl_Accept_Request').modal('toggle');
								  }
								})
							 getNotification();
						}
					 });
			  }
			})
	})
	
	 $('#RejectPartnership').on('click', function() {
		
		 Swal.fire({
			  title: 'Do you want to Reject?',
			  type: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Reject!'
			}).then((result) => {
			  if (result.value) {
			   
				  getAsyncData('/contract/partnership/'+$('#mapId').val()+'/accept/R', function(res) {
						 if (res.status==200) {
//							 Swal.fire(
//							   'Partnership Rejected',
//							   'You are joined with'+$('#mdl_ar_com_name').text(),
//							   'Danger'
//							 );
							 Swal.fire({
								  title: 'Partnership Rejected',
								  text: 'You are rejected '+$('#mdl_ar_com_name').text(),
								  type: 'error',
								  showCancelButton: false,
								  confirmButtonColor: '#3085d6',
								  cancelButtonColor: '#d33',
								  confirmButtonText: 'OK'
								}).then((result) => {
								  if (result.value) {
									  $('#mdl_Accept_Request').modal('toggle');
								  }
								})
							 getNotification();
						}
					 });
			  }
			})
	})
	
	 function validatePhoneNo(phone){
			var isValid = /^(\+\d{2,4})?\s?(\d{10})$/.test(phone);
			return isValid;
		}
	 function currencyFormat(num) {
		  return '' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
		}
		
		// Piumal 10/28/2022
	function doCurrencyFormat(num) {
			if(num === undefined || num == "" ){
				return 'Empty'
			}else{
				return '' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
			}
	}

	function qtyFormat(num) {
		  return '' + num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
		}
		
		
		function getSupplierDetails(){
			getAsyncData('/supplier/getSupplierDetails', function(res) {
				console.log(res.responseJSON.categoryID);
				if(res.responseJSON.categoryID){
					$("#supplierSubItems").remove();
					$("#supplierMainItem").hide();
				}
			});
		}
		
		