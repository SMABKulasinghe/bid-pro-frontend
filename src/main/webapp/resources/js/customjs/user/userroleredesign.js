console.log("Redesign");

console.log("Redesign");
var userRoleList = [];
$("#selectionDiv").hide();

/*$("#GRNInvoiceQuote").hide();
$("#userSupplierPurchaseRow").hide();*/



var user = JSON.parse(sessionStorage.getItem('User'));
console.log(user.companyCode);
console.log(user.userRoll.userRoleID);
var roleid=user.userRoll.userRoleID;
var selectedValue  = user.userRoleInBussiness;
var userRoleInBussiness11 = user.userRoll.userRoleInBussiness;

jQuery(document).ready(function($) {
	console.log("Redesign ready");
	
	
	
	/*getAsyncData("/supplier/subcompany/"+user.companyCode, function(resdata) {
		console.log(resdata.responseJSON.companyIdentity);
		
		if(resdata.responseJSON.companyIdentity){
			selectedValue = "c";
		}else{
			selectedValue = "s"
		}
		
	});
	*/
	
	
	getAsyncData("/users/statusCheckForCS/"+user.companyCode, confirmedCallBack);
	 
	 function confirmedCallBack(responseCode){
			console.log(responseCode);
			if(responseCode.responseJSON != null){
				console.log(responseCode.responseJSON.subCompanyBool);
				userCompanyType = responseCode.responseJSON.subCompanyBool;
				
				if(sessionStorage.getItem('SuperUserRoleID') == roleid && userCompanyType){
					//console.clear();
					 console.log("Superuser Logged In");
					 //loadOptionsFortheUser(selectedValue);
					userRoleCreations();
				 }else if(userCompanyType){
						selectedValue = "c";
						console.log("userCompanyType ----- "+userCompanyType+" "+selectedValue);
						//loadOptionsFortheUser(selectedValue);
						userRoleCreations();
					}else{
						selectedValue = "s"
						console.log("userCompanyType ----- "+userCompanyType+" "+selectedValue);
						//loadOptionsFortheUser(selectedValue);
						userRoleCreations();
					}
					
				 
				
			}
			
	 }
	 
	 getAsyncData('/glob/1', function(global) {
		// console.clear();
			console.log(global.responseJSON.gbsuperuserroleid);
	  sessionStorage.setItem('SuperUserRoleID',JSON.stringify(global.responseJSON.gbsuperuserroleid) );	
	  
	  
	  });
	  
	  
	
	
	/*var resdata = getFunction("/supplier/subcompany/"+user.companyCode, "globalToken");

	console.log(resdata);
	
	if (resdata[0] == "S" && resdata!=null) {
		var companyIdentityBol = resdata[1].companyIdentity;
		 
		 if(companyIdentityBol){
				selectedValue = "c";
			}else{
				selectedValue = "s"
			}
			
	
	}
	*/
	var resdata = getFunction("/userroleoptions/all", "globalToken");
	
	console.log(resdata);
	
	if (resdata[0] == "S" && resdata!=null) {
		var userRoleNames = resdata[1];
		userRoleList = resdata[1];
		
	}
	
//	loadOptionsFortheUser(selectedValue);
//	console.clear() 
});

/*function loadOptionsFortheUser(selectedValue){
	

	console.log("OnLoad "+selectedValue);
	
	
	unHideItems("userDiv");
	unHideItems("SupplierDiv");
	unHideItems("PODiv");
	unHideItems("InvoiceDiv");
	unHideItems("ReturnDiv");
	unHideItems("ReportDiv");
	unHideItems("PaymentDiv");
	unHideItems("DashBoardDiv");
	unHideItems("RfpDiv");

	//var selectedValue = $("#user_role_owner").val();	
	
	
	console.log("selectedValue "+selectedValue+" "+user.userRoleInBussiness);
	clearAppendItems();
	if(selectedValue == "c"){
		userRoleList.forEach(function(item) {
		
			console.log("item.roleOwner"+item.roleOwner);
			if(item.roleOwner=="1" || item.roleOwner=="2" || item.roleOwner=="3"){
				console.log(item.userRoleOptionsName);				
				appendItemsToLists(item);
			}
			
			if(item.museroptionstype=="C"){
			
				console.log("museroptionstype "+item.userRoleOptionsName);	
				appendItemsToDashBoardList(item);
			}
			
			});	
		
		
		
	}else if(selectedValue == "s"){
		
		
		userRoleList.forEach(function(item) {
			
			if(item.roleOwner=="3"){
				console.log(item.userRoleOptionsName);
				appendItemsToLists(item);
			}
			
			if(item.museroptionstype=="S"){
				console.log("museroptionstype "+item.userRoleOptionsName);	
				appendItemsToDashBoardList(item);
			}
			
			});	
		
		
	}else if(selectedValue == "su" || sessionStorage.getItem('SuperUserRoleID') == roleid){
		console.log("SuperUser Logged In--- " + roleid);
		userRoleList.forEach(function(item) {
			
			if(item.roleOwner=="1" || item.roleOwner=="2" || item.roleOwner=="3"){
				console.log(item.userRoleOptionsName);	
				appendItemsToLists(item);
			
			}
			
			if(item.museroptionstype=="SS"){
				console.log("museroptionstype "+item.userRoleOptionsName);	
				appendItemsToDashBoardList(item);
			}
			
			});	
		
	}
	console.log( $('#invoiceDiv ul li').length );
	console.log( $('#returnDiv ul li').length );
	console.log( $('#PODiv ul li').length );
	console.log( $('#GRNDiv ul li').length );
	console.log( $('#ReportDiv ul li').length );
	

	$("#selectionDiv").show();
	
	$('html, body').animate({
        scrollTop: $("#selectionDiv").offset().top
    }, 1000);
	

	
	hideEmptyLists("userListItem", "userDiv");
	hideEmptyLists("supplierList", "SupplierDiv");
	
	hideEmptyLists("POList", "PODiv");
	hideEmptyLists("GRNList", "GRNDiv");
	hideEmptyLists("InvoiceList", "InvoiceDiv");
	hideEmptyLists("ReturnList", "ReturnDiv");
	hideEmptyLists("ReportList", "ReportDiv");
	hideEmptyLists("PaymentList", "PaymentDiv");
	hideEmptyLists("DashBoardListItem", "DashBoardDiv");
	
	hideEmptyLists("rfpList", "RfpDiv");
	hideEmptyLists("tenderList", "TenderDiv");
	hideEmptyLists("EvaluationList", "EvaluationDiv");
	
	clearFieldsOnChange();
	
	

	
}*/

$('#user_role_name').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});
$('#user_role_description').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});


/*$('#user_role_owner').on('change', function() {
	console.log("OnChange");
	
	
	unHideItems("userDiv");
	unHideItems("SupplierDiv");
	unHideItems("PODiv");
	unHideItems("InvoiceDiv");
	unHideItems("ReturnDiv");
	unHideItems("ReportDiv");
	unHideItems("PaymentDiv");
	unHideItems("DashBoardDiv");
	
	unHideItems("RfpDiv");
	unHideItems("TenderDiv");
	unHideItems("EvaluationDiv");
	
	var selectedValue = $("#user_role_owner").val();	
	
	
	console.log("selectedValue"+selectedValue);
	clearAppendItems();
	if(selectedValue == "c"){
		userRoleList.forEach(function(item) {
		
			console.log("item.roleOwner"+item.roleOwner);
			if(item.roleOwner=="2"){
				console.log(item.userRoleOptionsName);				
				appendItemsToLists(item);
			}
			
			if(item.museroptionstype=="C"){
			
				console.log("museroptionstype "+item.userRoleOptionsName);	
				appendItemsToDashBoardList(item);
			}
			
			});	
		
		
		
	}else if(selectedValue == "s"){
		
		
		userRoleList.forEach(function(item) {
			
			if(item.roleOwner=="3"){
				console.log(item.userRoleOptionsName);
				appendItemsToLists(item);
			}
			
			if(item.museroptionstype=="S"){
				console.log("museroptionstype "+item.userRoleOptionsName);	
				appendItemsToDashBoardList(item);
			}
			
			});	
		
		
	}else if(selectedValue == "su"){
		userRoleList.forEach(function(item) {
			
			if(item.roleOwner=="1"){
				console.log(item.userRoleOptionsName);	
				appendItemsToLists(item);
			
			}
			
			if(item.museroptionstype=="SS"){
				console.log("museroptionstype "+item.userRoleOptionsName);	
				appendItemsToDashBoardList(item);
			}
			
			});	
		
	}
	console.log( $('#invoiceDiv ul li').length );
	console.log( $('#returnDiv ul li').length );
	console.log( $('#PODiv ul li').length );
	console.log( $('#GRNDiv ul li').length );
	console.log( $('#ReportDiv ul li').length );
	

	$("#selectionDiv").show();
	
	$('html, body').animate({
        scrollTop: $("#selectionDiv").offset().top
    }, 1000);
	

	
	hideEmptyLists("userListItem", "userDiv");
	hideEmptyLists("supplierList", "SupplierDiv");
	
	hideEmptyLists("POList", "PODiv");
	hideEmptyLists("GRNList", "GRNDiv");
	hideEmptyLists("InvoiceList", "InvoiceDiv");
	hideEmptyLists("ReturnList", "ReturnDiv");
	hideEmptyLists("ReportList", "ReportDiv");
	hideEmptyLists("PaymentList", "PaymentDiv");
	hideEmptyLists("DashBoardListItem", "DashBoardDiv");
	
	
	hideEmptyLists("rfpList", "RfpDiv");
	hideEmptyLists("tenderList", "TenderDiv");
	hideEmptyLists("EvaluationList", "EvaluationDiv");
	
	clearFieldsOnChange();
	
	
});*/

function appendItemsToLists(item){

	if(item.userRoleOptionsCode=="1000" && item.museroptionstype=="M"){
		$("#userListItem").append(
				
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'
			);
		
		/*$("#userListItemUpgraded").append(
				
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms" class="user"> <label class="text-green" for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'
		);*/
	}else if(item.userRoleOptionsCode=="2000"){
		$("#contractAndCompanyList").append(
			
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms2" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'
		);
		/*$("#supplierListUpgraded").append(
				
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms2" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'
		);*/
	}else if(item.userRoleOptionsCode=="3000"){
		$("#supplierList").append(
			
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms2" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'
		);
		/*$("#supplierListUpgraded").append(
				
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms2" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'
		);*/
	}else if(item.userRoleOptionsCode=="4000"){
		$("#POList").append(

				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms3" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'	
			);
		/*$("#POListUpgraded").append(
				
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms3" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'	
		);*/
	}else if(item.userRoleOptionsCode=="5000"){
		$("#InvoiceList").append(

				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms4" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'	
			);
		/*$("#GRNListUpgraded").append(
				
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms4" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'	
		);*/
	}else if(item.userRoleOptionsCode=="6000"){
		$("#GRNList").append(

				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms5" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'	
			);
	}else if(item.userRoleOptionsCode=="7000"){
		$("#ReturnList").append(
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms6" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'	
			);
	}else if(item.userRoleOptionsCode=="8000"){
		$("#PaymentList").append(
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms7" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'	
			);
	}else if(item.userRoleOptionsCode=="9000"){
		$("#ReportList").append(
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms8" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'	
			);
	}else if(item.userRoleOptionsCode=="10000"){
		$("#rfpList").append(
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms8" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'	
			);
	}else if(item.userRoleOptionsCode=="11000"){
		$("#tenderList").append(
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms8" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'	
			);
	}else if(item.userRoleOptionsCode=="12000"){
		$("#POList").append(
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms8" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'	
			);
	}else if(item.userRoleOptionsCode=="13000"){
		$("#EvaluationList").append(
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms8" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'	
			);
	}else if(item.userRoleOptionsCode=="14000"){
		$("#ProcurementComList").append(
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms8" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'	
			);
	}else if(item.userRoleOptionsCode=="15000"){
		$("#MitList").append(
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms8" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'	
			);
	}else if(item.userRoleOptionsCode=="16000"){
		$("#rfpEveList").append(
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms8" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'	
			);
	}
	
	
}

function appendItemsToDashBoardList(item){
	if(item.museroptionstype=="C"){
		$("#DashBoardListItem").append(

			
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms9" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'
		);
	}
	if(item.museroptionstype=="S"){
		$("#DashBoardListItem").append(
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="acceptTerms10" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'			
		);
	}
	if(item.museroptionstype=="SS"){
		$("#DashBoardListItem").append(
				'<div class="checkbox"><input type="checkbox" value="'+ item.userRoleOptionsId + '" id="'+ item.userRoleOptionsId + '" name="'+ item.userRoleOptionsId + '" class="user"> <label for="'+ item.userRoleOptionsId + '">'+ item.userRoleOptionsName + '</label></div>'
		);
	}
}


$("#userDiv #user_checkAll").click(function () {
	 $( '#userDiv input[type="checkbox"]' ).prop('checked', this.checked)
});

$("#contractAndCompanyListDiv #contractAndCompanyList_checkAll").click(function () {
	$( '#contractAndCompanyListDiv input[type="checkbox"]' ).prop('checked', this.checked)
});

$("#SupplierDiv #suppierCheckAll").click(function () {
	 $( '#SupplierDiv input[type="checkbox"]' ).prop('checked', this.checked)
});

$("#PODiv #POCheckAll").click(function () {
	 $( '#PODiv input[type="checkbox"]' ).prop('checked', this.checked)
});

$("#GRNDiv #GRNCheckAll").click(function () {
	 $( '#GRNDiv input[type="checkbox"]' ).prop('checked', this.checked)
});

$("#InvoiceDiv #InvoiceCheckAll").click(function () {
	 $( '#InvoiceDiv input[type="checkbox"]' ).prop('checked', this.checked)
});

$("#ReturnDiv #ReturnCheckAll").click(function () {
	 $( '#ReturnDiv input[type="checkbox"]' ).prop('checked', this.checked)
});

$("#ReportDiv #ReportCheckAll").click(function () {
	 $( '#ReportDiv input[type="checkbox"]' ).prop('checked', this.checked)
}); 

$("#PaymentDiv #PaymentCheckAll").click(function () {
	 $( '#PaymentDiv input[type="checkbox"]' ).prop('checked', this.checked)
}); 

$("#DashBoardDiv #DashBoardCheckAll").click(function () {
	$( '#DashBoardDiv input[type="checkbox"]' ).prop('checked', this.checked)
}); 

$("#RfpDiv #rfpAll").click(function () {
	$( '#RfpDiv input[type="checkbox"]' ).prop('checked', this.checked)
});

$("#RfpEveDiv #rfpEveAll").click(function () {
	$( '#RfpEveDiv input[type="checkbox"]' ).prop('checked', this.checked)
});

$("#TenderDiv #tenderAll").click(function () {
	$( '#TenderDiv input[type="checkbox"]' ).prop('checked', this.checked)
});

$("#EvaluationDiv #EvaluationAll").click(function () {
	$( '#EvaluationDiv input[type="checkbox"]' ).prop('checked', this.checked)
});

$("#ProcurementComDiv #ProcurementComAll").click(function () {
	$( '#ProcurementComDiv input[type="checkbox"]' ).prop('checked', this.checked)
});

$("#MitDiv #MitAll").click(function () {
	$( '#MitDiv input[type="checkbox"]' ).prop('checked', this.checked)
});

function clearAppendItems(){
	$("#userListItem").empty();
	$("#contractAndCompanyList").empty();
	$("#supplierList").empty();
	$("#POList").empty();
	$("#GRNList").empty();
	$("#InvoiceList").empty();
	$("#ReturnList").empty();
	$("#ReportList").empty();
	$("#PaymentList").empty();
	$("#DashBoardListItem").empty();
	
	$("#rfpList").empty();
	$("#rfpEveList").empty();
	$("#tenderList").empty();
	$("#EvaluationList").empty();
	
}


$('#user_role_name').on('focusout', function() {
	console.log($("#user_role_name").val());	 
	let ele = this;
	if($("#user_role_name").val()==""){
	 
	}else{
	 getAsyncData("/userroles/isexists/by/"+"user_role_name"+"/"+$('#user_role_name').val(), userexistsCallBack);
	}

	});


function userexistsCallBack(res){
	console.log(res);

	console.log(res.responseJSON.msg);
	if(res.responseJSON!= null && res.responseJSON.msg==true && res.responseJSON.idtype=="userRoleName"){	
	console.log(res.responseText);
	$('#user_role_name').val("");
	$($("#user_role_name")).parent().addClass('has-error');
	$($("#LockIcon")).css("color", "#ffb3b3");
	$($("#LockIcon")).removeClass("fa fa-unlock-alt");
	$($("#LockIcon")).addClass("fa fa-lock");
	
	Swal.fire({
		type: 'error',
		title: 'Please use a different User Role Name*',
		text: 'User Role name is already taken !',
		footer: '<a href>Supplier Portal V1.0</a>'
	});
	}else {
		console.log("Unique rolename");
		$($("#user_role_name")).parent().removeClass('has-error');
		$($("#user_role_name")).parent().addClass('has-success');
		
		$($("#LockIcon")).removeClass("fa fa-lock");
		$($("#LockIcon")).addClass("fa fa-unlock-alt");
		$($("#LockIcon")).css("color", "#e5e5e5");
	}

}

$("#createRollButton").click(function () {
	var userRoleName = $('#user_role_name').val();
	var userRoleDescription = $('#user_role_description').val();
	var userRoleInBussiness = $('#user_role_owner').val();
	console.log("Clicked "+userRoleName+" "+userRoleDescription);
	
	if(userRoleName=="" || userRoleDescription==""){
		 Swal.fire(
			      'Please fill required feilds!',
			      'Fill Role Name & Role Description',
			      'error'
			    );
	}else{
	
	let a = [];
	 var userRoleOptionsArray =[];
	 let myArray = (function() {
		    //let a = [];
		    $(".user:checked").each(function() {
		        a.push(this.value);
		        userRoleOptionsArray.push({
	                "userRoleOptionsId": this.value   
	            });
		    });						    
		    return a;
		})()
		//console.log(a);
	 //console.log(userRoleOptionsArray);
		//console.log("myArray "+myArray);
		
		console.log("userRoleOptionsArray "+ userRoleOptionsArray.length);
	var mRoleInBussiness;
	if(userRoleInBussiness11 == "c"){
		mRoleInBussiness = "c";
	}else if (userRoleInBussiness11 == "s"){
		mRoleInBussiness = "s";
	}else if (userRoleInBussiness11 == "su"){
		mRoleInBussiness = "su";
	}
	
	 var userRoleOptionsObj = {
		 	//	"userRoleID": "4", // change here in REST
		 		"userRoleName" : userRoleName,
		 		"userRoleDescription" : userRoleDescription,
		 		"userRoleInBussiness" : userRoleInBussiness,
				"options": userRoleOptionsArray,
				"userRoleInBussiness": mRoleInBussiness
			};
	 console.log(userRoleOptionsObj);
	 console.log(JSON.stringify(userRoleOptionsObj));
	 
	 var myurl = "/userroles/adduserrole";
		
		//console.log(myurl);
		
		
		//sw start
		if(userRoleOptionsArray.length<=0){
			Swal.fire(
				      'Please select privileges for the role!',
				      'Select at least one privilege',
				      'error'
				    );
		}else{
		Swal.fire({
			  title: 'Are you sure?',
			  text: "You want to create user role!",
			  type: 'info',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Yes, create!'
			}).then((result) => {
			  if (result.value) {
				var responseCode =  postFunction("/userroles/adduserrole", userRoleOptionsObj)								  
				 if(responseCode =="success"){
					 Swal.fire(
						      'User Role Created!',
						      'User has been Created successfully.',
						      'success'
						    ); 				
					
					 
					 $('#selectionDiv').fadeOut(1000, function() {
						 //$("#selectionDiv").hide();
						});
					 
					
				 }else{
					 Swal.fire(
						      'User Role Creation Failed!',
						      'Please Try Again.',
						      'error'
						    );
				 }
			    
			  }
			});
		
		
		//sw end
		
		clearFields();
		
	}
		
	}
	
	createLog('User Role Redesign', ('Create '+ userRoleName +' Description '+userRoleDescription+' as business role '+userRoleInBussiness), user);	

	
});


function clearFields(){
	$('input[type="checkbox"]').prop('checked', false);
	$('#user_role_name').val('');
	$('#user_role_description').val('');
	$('#user_role_owner').val('empty');
 }



function hideEmptyLists(countMe, hideMe){
	
	
	var divID = "#"+countMe;
	var hideID = "#"+hideMe;
	console.log(divID+" "+hideID);
	var userDivCount = $(divID+ " div").length;	
	if(userDivCount<1){
		$(hideID).hide();
	}else{
		console.log("Else");
	}
}

function unHideItems(showMe){
	var showID = "#"+showMe;
	$(showID).show();
	
}

function clearFieldsOnChange(){
	$('input[type="checkbox"]').prop('checked', false);		
	$('#checkAll').removeAttr('checked');
	$('#suppierCheckAll').removeAttr('checked');
	$('#POCheckAll').removeAttr('checked');
	$('#GRNCheckAll').removeAttr('checked');
	$('#InvoiceCheckAll').removeAttr('checked');
	$('#ReturnCheckAll').removeAttr('checked');
	$('#ReportCheckAll').removeAttr('checked');
	$('#PaymentCheckAll').removeAttr('checked');
	$('#DashBoardCheckAll').removeAttr('checked');
 }


function userRoleCreations(){
	console.log("blassssssssssssssssss")
	//console.log(userRoleInBussiness)
	unHideItems("userDiv");
	unHideItems("SupplierDiv");
	unHideItems("PODiv");
	unHideItems("InvoiceDiv");
	unHideItems("ReturnDiv");
	unHideItems("ReportDiv");
	unHideItems("PaymentDiv");
	unHideItems("DashBoardDiv");
	unHideItems("RfpDiv");
	unHideItems("RfpEveDiv");
	
	console.log("tester")
	console.log(userRoleInBussiness11)
	if(userRoleInBussiness11 === "c"){
		console.log("tester2")
		console.log(userRoleList)
		userRoleList.forEach(function(item) {
			if(item.roleOwner == 2 || item.roleOwner == 4){
				console.log("ccccccccccccccccccccccccccccccccccccc")
				appendItemsToLists(item);
			}
			
		});	
		
		
		
	}else if(userRoleInBussiness11 == "s"){
		
		console.log("ssssssssssssssssssssssssssssssss")
		userRoleList.forEach(function(item) {
			if(item.roleOwner == 1 || item.roleOwner == 4){
				appendItemsToLists(item);
			}
			
		});	
		
		
	}else if(userRoleInBussiness11 == "su"){
		console.log("suuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
		userRoleList.forEach(function(item) {
			if(item.roleOwner == 3 || item.roleOwner == 4){
				appendItemsToLists(item);
			}
			
		});	
		
	}
	
	
	$("#selectionDiv").show();
	
	$('html, body').animate({
        scrollTop: $("#selectionDiv").offset().top
    }, 1000);
	

	
	hideEmptyLists("userListItem", "userDiv");
	hideEmptyLists("supplierList", "SupplierDiv");
	
	hideEmptyLists("POList", "PODiv");
	hideEmptyLists("GRNList", "GRNDiv");
	hideEmptyLists("InvoiceList", "InvoiceDiv");
	hideEmptyLists("ReturnList", "ReturnDiv");
	hideEmptyLists("ReportList", "ReportDiv");
	hideEmptyLists("PaymentList", "PaymentDiv");
	hideEmptyLists("DashBoardListItem", "DashBoardDiv");
	
	hideEmptyLists("rfpList", "RfpDiv");
	hideEmptyLists("rfpEveList", "RfpEveDiv");
	hideEmptyLists("tenderList", "TenderDiv");
	hideEmptyLists("EvaluationList", "EvaluationDiv");
	
	clearFieldsOnChange();
	
}
