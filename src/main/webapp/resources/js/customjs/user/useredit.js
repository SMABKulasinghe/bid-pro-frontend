/*console.log("Redesign");
var userTable;
jQuery(document).ready(function($) {
	$("#userTableDiv").hide();
	$("#clickUserIDButton").hide();
	$("#userEdit_div").hide();
	
	

	$('#acceptTerms').on('change', function() {

		

		if ($(this).prop('checked') === true) {

			if ($(this).attr('value') == "Yes") {

				$("#userTableDiv").show();
			
			}

		} else {

			$('#userTableDiv').hide();
			$("#userEdit_div").hide();
			console.log("Hide Table Div Here")
		}
	});
});

function loadUserForEdit(){
	$("#userEdit_div").show();
}

*/

console.log("Inside Software asset JS FILE");
$('#userEdit_div').hide()

var contractTable;

var contractArray = {};

var userCompanyType;

$(document).ready(function(){
	var user = JSON.parse(sessionStorage.getItem('User'));
	console.log(user.companyCode);
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
	
	getAsyncData("/users/statusCheckForCS/"+user.companyCode, confirmedCallBack);
	 
	 function confirmedCallBack(responseCode){
			console.log(responseCode);
			if(responseCode.responseJSON != null){
				console.log(responseCode.responseJSON.subCompanyBool);
				userCompanyType = responseCode.responseJSON.subCompanyBool;
				loadContractDetailsTable();
				
			}
			
	 }
	 
		contractTable = undefined;
		console.log("RR");

		$('#example tbody').on( 'click', 'tr', function () {
		    $(this).toggleClass('selected');
		} );


	 
});

$('#user_id').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});
$('#user_role_name').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#location_code').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});
$('#department_code').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#NIC_no').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});
$('#display_name').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});

$('#mobile_no').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});
$('#user_email').on('focusout', function() {
	 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}
});


/*$('#user_id').on(
		'focusout',
		function() {
			console.log($("#user_id").val());
			if ($("#user_id").val() == "") {

			} else {
				getAsyncData("/users/isexists/by/" + "user_id" + "/"
						+ $('#user_id').val(), userexistsCallBack);
			}

		});*/

$('#NIC_no').on(
		'focusout',
		function() {
			console.log($("#NIC_no").val());
			if ($("#NIC_no").val() == "") {

			} else {
				// alert(validateNIC()); 942281632v 199439848733

				var bol = validateNIC($("#NIC_no").val());
				if (!bol) {
					$('#NIC_no').val("");
					Swal.fire({
						type : 'error',
						title : 'Invalid NIC format',
						text : 'Please enter a valid NIC!',
						footer : '<a href>Supplier Portal V1.0</a>'
					});
				} else {
					getAsyncData("/users/isexists/by/" + "NIC_no" + "/"
							+ $('#NIC_no').val(), userexistsCallBack);
				}

			}

		});

$('#mobile_no').on(
		'focusout',
		function() {
			console.log($("#mobile_no").val());

			if ($("#mobile_no").val() == "") {

			} else {
				var bol = validatePhoneNo($("#mobile_no").val());
				console.log(bol);
				if (!bol) {
					$('#mobile_no').val("");
					Swal.fire({
						type : 'error',
						title : 'Invalid Phone Number format',
						text : 'Please enter a valid phone number!',
						footer : '<a href>Supplier Portal V1.0</a>'
					});
				} else {
					getAsyncData("/users/isexists/by/" + "mobile_no" + "/"
							+ $('#mobile_no').val(), userexistsCallBack);
				}

			}

		});

$('#user_email').on(
		'focusout',
		function() {
			console.log($("#user_email").val());
			if ($("#user_email").val() == "") {

			} else {
				var bol = emailIsValid($("#user_email").val());
				if (!bol) {
					$('#user_email').val("");
					Swal.fire({
						type : 'error',
						title : 'Invalid email format',
						text : 'Please enter a valid email address!',
						footer : '<a href>Supplier Portal V1.0</a>'
					});
				} else {
					getAsyncData("/users/isexists/by/" + "user_email" + "/"
							+ $('#user_email').val(), userexistsCallBack);
				}

			}

		});

function userexistsCallBack(res) {
	console.log(res);

	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "userId") {
		console.log(res.responseText);
		$('#user_id').val("");
		Swal.fire({
			type : 'error',
			title : 'Please use a different User ID*',
			text : 'User ID is already taken !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
	} else if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "NIC_no") {
		console.log(res.responseText);
		$('#NIC_no').val("");
		Swal.fire({
			type : 'error',
			title : 'User already exists for this NIC*',
			text : 'NIC is used !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
	} else if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "mobile_no") {
		console.log(res.responseText);
		$('#mobile_no').val("");
		Swal.fire({
			type : 'error',
			title : 'Mobile number already used*',
			text : 'Please use a different mobile no !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
	} else if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "user_email") {
		console.log(res.responseText);
		$('#user_email').val("");
		Swal.fire({
			type : 'error',
			title : 'Please use a different Email*',
			text : 'This email address is associated with another user !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
	}
}

function emailIsValid(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validateNIC() {
	var nic = document.getElementById('NIC_no');
	var isValid = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/.test(nic.value);
	var dob = nic.value.substring(1, 7);
	return isValid;
}

function validatePhoneNo(phone) {
	var isValid = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|5|6|7|8)\d)\d{6}$/
			.test(phone);
	return isValid;
}

setDatesForToday();

function setDatesForToday() {
	var date = new Date();
	var dd = String(date.getDate()).padStart(2, '0');
	var mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
	var mmm = String(date.getMonth() + 3).padStart(2, '0'); // January is 0!
	var yyyy = date.getFullYear();
	var today = mm + '-' + dd + '-' + yyyy;
	var endDay = mmm + '-' + dd + '-' + yyyy;

	$("#Date_start").val(today);
	$("#Date_end").val(endDay);
	console.log("today is " + today);
}

function SelectElement(id, valueToSelect) {

	var element = document.getElementById(id);
	element.value = valueToSelect;
}

function clearFields() {
	$("#user_edit_id").val("");
	$("#mobile_no").val("");
	//$("#user_id_z").val("");
	$("#NIC_no").val("");
	$("#display_name").val("");
	$("#user_email").val("");
	$('input[type="checkbox"]').prop('checked', false);

	SelectElement("user_role_name", "empty");
	SelectElement("location_code", "empty");
	SelectElement("department_code", "empty");
}

function loadContractDetailsTable(){
	 

	if(userCompanyType){
		parameter = "viewall";
	}else{
		parameter = "supplier";
	}
	
	console.log(parameter);

	$("#contractTableDiv").show();
//	console.log(contractTable);
	if(contractTable == undefined){
	//	console.log("Inside");
		contractTable = $('#example').DataTable({
			
			processing: true,
			 serverSide: true,
			
		     ajax: {
		    	 url:globalUrl+"/users/view/viewall",
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		    	 	/*{ "data": "userID",
		            	orderable: false,
		            	render: function(data,type,row,meta) {
		            		return '<div class="image">'+
		                    '<img id="company_logo_img" style="width: 45px; height:45px" src="resources/images/user2-160x160.png" class="user-image rounded-circle" alt="User Image">'+
		                  '</div>'
		            	},	
		            },*/
		            { "data": "userID"}, 			            	 		            	 
		            { "data": "username" },
		            { "data": "NIC" },		            
		            { "data": "userRole" },
		            { "data": "mobileNumber"},
		            { "data": "createdDate"
						/*	,				            	
		            	className: "text-right",
		            	 render: function(data,type,row,meta) {
							var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
							var today  = new Date(data);
		            		 	return today.toLocaleDateString("en-US", options);
		            	 	}*/
		            },
					{ "data": "expireDate"},
		            /*{ "data": "expireDate",				            	
		            	className: "text-right",
		            	 render: function(data,type,row,meta) {
							var today  = new Date(data);
		            		 return today.toLocaleDateString("en-US");
		            	 }
		            },*/
		            { "data": "userID",
		            	 orderable: false,
		            	 render: function(data,type,row,meta) {
								var today  = new Date(row.expireDate);
		            		 
							  return '<button type="button" data-expireDate="'+row.expireDate+'" data-createdDate="'+row.createdDate+'" data-email="'+row.email+'" data-mobileNumber="'+row.mobileNumber+'" data-username="'+row.username+'" data-userID="'+row.userID+'" data-NIC="'+row.NIC+'" class="btn btn-primary" style="margin-right: 10px" onclick="editUser('+row.companyCode+','+row.userRoleId+','+row.locationCode+','+row.depId+',event)">Edit</button>'
						  },	
		            },
		            {
	                     "className":      'details-control',
	                     "orderable":      false,
	                     "data":           null,
	                     "defaultContent": ''
	                 }
		            
		        ],
			
		//	dom: 'Bfrtip',
		    dom:"<'row'<'col-sm-12'B>>" +  
	        	"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
	        "<'row'<'col-sm-12'tr>>" +
	        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			
			buttons: [
				'copy', 'csv', 'excel', 'pdf', 'print'
			],
			'columnDefs': [			            
	            /*{ "width": "50%", "targets": 7 },
	            { "width": "50%", "targets": 8 }*/
	            
	         ],			         
	          'order': [[1, 'asc']]
		
		});
		
	}else{
		console.log("TableElse");
		contractTable.ajax.url(globalUrl+"/users/view/viewall").load();
		
	}
}



$('#example tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = contractTable.row( tr );

    if ( row.child.isShown() ) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
    }
    else {
        // Open this row
        row.child( format(row.data()) ).show();
        tr.addClass('shown');
    }
} );


function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
        '<tr>'+           
            /*'<td class="text-yellow">Status</td>'+*/
           /* '<td class="text-yellow">Approve Status</td>'+*/
            '<td class="text-yellow">Approve Reason</td>'+
            '<td class="text-yellow">Dept. Name</td>'+
            '<td class="text-yellow">Role Name</td>'+
            /*'<td class="text-yellow">Company Name</td>'+*/
            /*  '<td>Signed Supplier</td>'+
            '<td>PO Date</td>'+
            '<td>Created By</td>'+
            '<td>Expiration Date</td>'+
            '<td>Modified By</td>'+*/
            
        '</tr>'+
        '<tr>'+
          //  '<td>'+new Date(d.expiryDate).toLocaleString()+'</td>'+
          //  '<td>'+new Date(d.buyingDate).toLocaleString()+'</td>'+
           /* '<td class="text-right">'+currencyFormat(100)+'</td>'+            */
            /*'<td class="text-right">'+currencyFormat(100)+'</td>'+*/
            '<td>'+d.approveReason+'</td>'+
            '<td>'+d.department+'</td>'+ 
            '<td>'+d.roleName+'</td>'+
            /*'<td>'+getDateFormat(d.lastRepairDate)+'</td>'+ */
            /*'<td>'+d.signedBySupplier+'</td>'+
            '<td>'+d.PODate+'</td>'+
            '<td>'+d.createdBy+'</td>'+
            '<td>'+d.boardApprovalNo+'</td>'+
            '<td>'+d.modifiedBy+'</td>'+*/
           
        '</tr>'+       
               
        
        '</table>';
}

function editUser(companyCode,userRoleId,locationCode,depId,event){
	console.log("data-userID"+event.target.getAttribute('data-userID'))
	getAsyncData('/users/user-role-for-edit-find-by-id/'+userRoleId, function(res) {
		$('#user_role_name').find('option').remove().end();
		console.log("user-role-for-edit-find-by-id "+JSON.stringify(res));
		console.log("user-role-for-edit-find-by-id "+res.responseJSON.roleName);
		$('#user_role_name').append(new Option(res.responseJSON.roleName,res.responseJSON.roleId))
		
		getAsyncData('/users/user-role-for-edit', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		  
		  for (let item of res.responseJSON) {
			  $('#user_role_name').append(new Option(item.userRoleName, item.userRoleID))
		}
		$( "#user_role_name" ).prop( "disabled", false );
		//$('#vender_ID').val("");
		});
	});
	
	getAsyncData('/users/location-code-for-edit-find-by-id/'+locationCode, function(res) {
		$('#location_code').find('option').remove().end();
		
		$('#location_code').append(new Option(res.responseJSON.locName,res.responseJSON.locId))
		
		getAsyncData('/users/location-code-for-edit', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		  
		  for (let item of res.responseJSON) {
			  $('#location_code').append(new Option(item.locationname, item.id))
		}
		$( "#location_code" ).prop( "disabled", false );
		
		});
	});
	
	getAsyncData('/users/department-code-for-edit-find-by-id/'+depId, function(res) {
		$('#department_code').find('option').remove().end();
		
		$('#department_code').append(new Option(res.responseJSON.depName,res.responseJSON.depId1))
		
		getAsyncData('/users/department-code-for-edit', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		  
		  for (let item of res.responseJSON) {
			  $('#department_code').append(new Option(item.departmentName, item.deptId))
		}
		$( "#department_code" ).prop( "disabled", false );
		
		});
	});
	
	
	$('#edit_user_id_div').find('#user_edit_id').remove()
	$('#edit_user_id_div').append('<input type="text" class="form-control" id="user_edit_id" name="user_edit_id" disabled value="'+event.target.getAttribute('data-userID')+'">')
	
	$('#edit_nic_div').find('#NIC_no').remove()
	$('#edit_nic_div').append('<input id="NIC_no" pattern="^T[0-3]\d[0-1]\d{10}$" placeholder="NIC" name="NIC_no" type="text" class="form-control" required="required" autocomplete="off" value="'+event.target.getAttribute('data-NIC')+'">')
	
	$('#display_name_div').find('#display_name').remove()
	$('#display_name_div').append('<input id="display_name"placeholder="Display Name" name="display_name" type="text" class="form-control" required="required" autocomplete="off" value="'+event.target.getAttribute('data-username')+'">')
	
	$('#phone_number_div').find('#mobile_no').remove()
	$('#phone_number_div').append('<input id="mobile_no" placeholder="Phone number" name="mobile_no" type="number" class="form-control" required="required" value="'+event.target.getAttribute('data-mobileNumber')+'">')
	
	$('#email_div').find('#user_email').remove()
	$('#email_div').append('<input id="user_email" placeholder="Email" name="user_email" type="email" class="form-control" required="required" autocomplete="off" value="'+event.target.getAttribute('data-email')+'">')

	$('#expire_date_div').find('#Date_end').remove()
	
	$('#expire_date_div').append('<input type="date" class="form-control pull-right" id="Date_end" autocomplete="off" value="'+event.target.getAttribute('data-expireDate')+'">')
	
	
	
	$('#company_code_div').find('#compCode').remove()
	$('#company_code_div').append('<input type="hidden" class="form-control" id="compCode" name="compCode" disabled value="'+companyCode+'">')
	
	$('#userEdit_div').show()
}

function getDateFormat(date){
	let current_datetime = new Date(date)
	let monthFormated = current_datetime.getMonth();
	let dateFormated = current_datetime.getDate();
	
	if((current_datetime.getMonth() + 1)<10){
		monthFormated = "0"+(current_datetime.getMonth()+1);
	}
	
	if((current_datetime.getDate())<10){
		dateFormated = "0"+(current_datetime.getDate());
	}
	
	let formatted_date = dateFormated + "-" + (monthFormated) + "-" + current_datetime.getFullYear()
//	console.log(formatted_date)
	return formatted_date;
}



$("#update_user_button").click(function() {
	if ($('#user_role_name').val().length==0) {
		status+=1;
		$('#user_role_name').parent().parent().addClass('has-error')
	}
	if ($('#location_code').val().length==0) {
		status+=1;
		$('#location_code').parent().parent().addClass('has-error')
	}
	if ($('#department_code').val().length==0) {
		status+=1;
		$('#department_code').parent().parent().addClass('has-error')
	}
	if ($('#NIC_no').val().length==0) {
		status+=1;
		$('#NIC_no').parent().parent().addClass('has-error')
	}
	if ($('#display_name').val().length==0) {
		status+=1;
		$('#display_name').parent().parent().addClass('has-error')
	}
	if ($('#mobile_no').val().length==0) {
		status+=1;
		$('#mobile_no').parent().parent().addClass('has-error')
	}
	if ($('#user_email').val().length==0) {
		status+=1;
		$('#user_email').parent().parent().addClass('has-error')
	}
	if ($('#Date_end').val().length==0) {
		status+=1;
		$('#Date_end').parent().parent().addClass('has-error')
	}
	if (status != 0) {
		Swal.fire(
			'Missing',
			'Please check the required fields!',
			'warning'
		);
		
	}
	if(!$('#acceptTerms').prop("checked")){
		Swal.fire(
				  'Confirm',
				  'Please confirm!',
				  'warning'
				);
	}else{
		
		var edit = {
			"userId" : $('#user_edit_id').val(),
			"userRole" : $('#user_role_name').val(),
			"locatioCode" : $('#location_code').val(),
			"departmentCode" : $('#department_code').val(),
			"nicNo" : $('#NIC_no').val(),
			"dispalyName" : $('#display_name').val(),
			"mobileNo" : $('#mobile_no').val(),
			"userEmail" : $('#user_email').val(),
			"dateEnd" : $('#Date_end').val(),
			"compCode" : $('#compCode').val(),
		};
		
		Swal.fire({
				  title: 'Are you sure?',
				  text: "Do you want to proceed?",
				  type: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, process it!'
				}).then((result) => {
				  if (result.value) {
					  console.log("TT");
					  console.log("Inside button"+$('#user_edit_id').val())
						var	 responseCode = getAsyncDataPOST("/users/add-temporary",edit,confirmedCallBack)
						
						if(responseCode == undefined){
							Swal.fire({
							  title: 'Uploading...',
							  html: 'Please wait...',
							  allowEscapeKey: true,
							  allowOutsideClick: false,
							  imageUrl: 'http://cdn.home-designing.com/wp-content/uploads/2018/03/loading.gif',
  							  imageHeight: 120,
							  imageWidth: 120,
							  //hideOnOverlayClick: false,
							  //hideOnContentClick: false,
							  showConfirmButton: false,
							 
							});
						}
						
				  }
				});
	}
	
})


function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);
	if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		clearFields();
		Swal.fire(
			'Accepted!',
			'Temporary user has been created successfully.',
			'success'
		)
		contractTable.ajax.url(globalUrl+"/users/view/viewall").load();
		$('#userEdit_div').hide()
	 }else{
		 console.log(responseCode.responseText);
		 Swal.fire({
			type: 'error',
			title: 'Temporary user creation failed',
			text: 'Error occord !',
			footer: '<a href>Supplier Management V1.0</a>'
		});
	  }    
	    
}
