


var userTable;

var userListArray = {};



$(document).ready(function(){
	userTable = undefined;
	console.log("rr");
	loadUserDatatable("all");
	loadEditUserDetailsTable();
	
	$('#authrizedUser').on('click', function() {
		
		if ($('#Comment').val().length==0) {
		status+=1;
		$('#Comment').parent().parent().addClass('has-error')
		}else{
			
			userWithStatus = {
	 			"userid":$('#userId').val(),
	 			//"statusofusertemp": statusofusertemp,
	 			"statusReason": $('#Comment').val(), 
	 			"status" : "3",
				"auth" : "approve",
	 		};
		
			Swal.fire({
				  title: 'Are you sure?',
				  text: "Do you want to authorize?",
				  type: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, process it!'
				}).then((result) => {
				  if (result.value) {
					  console.log("TT");
					  
					
					var responseCode =  getAsyncDataPOST("/users/authorize", userWithStatus, confirmedCallBack)	
					
						$(this).prop("disabled",true);
			
				  }
				});
		}
		
			
		
		 
	});
	
	$('#rejectedUser').on('click', function() {
		
		if ($('#Comment').val().length==0) {
		status+=1;
		$('#Comment').parent().parent().addClass('has-error')
		}else{
			
			userWithStatus = {
	 			"userid":$('#userId').val(),
	 			//"statusofusertemp": statusofusertemp,
	 			"statusReason": $('#Comment').val(), 
	 			"status" : "8",
				"auth" : "reject",
	 		};
		
			Swal.fire({
				  title: 'Are you sure?',
				  text: "Do you want to reject?",
				  type: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, process it!'
				}).then((result) => {
				  if (result.value) {
					  console.log("TT");
					  
					
					var responseCode =  getAsyncDataPOST("/users/authorize", userWithStatus, confirmedCallBack)	
					
						$(this).prop("disabled",true);
			
				  }
				});
		}
		
			
		
		 
	});
	
	
	

	$("#user_ID").select2({
		  ajax: {
		    url: globalUrl+'/users/getuserforautho',
			
		    headers : {
				'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken"),
				'Content-Type' : 'application/json'
			},
		    dataType: 'json',
		    delay: 250,
		    data: function (params) {
		      return {
		        search: params.term, // search term
		        page: params.page
		      };
		    },
		    processResults: function (data, params) {
		 
		      params.page = params.page || 1;

		      return {
		        results: data.items,
		        pagination: {
		          more: (params.page * 30) < data.total_count
		        }
		      };
		    },
		    cache: true
		  },
		  placeholder: 'Search for a User Name',
		  minimumInputLength: 1,
		  templateResult: function(repo) {
			  if (repo.loading) {
				    return repo.text;
				  }

				  var $container = $(
				    "<div class='select2-result-repository clearfix'>" +
				      "<div class='select2-result-repository__meta'>" +
				        "<div class='select2-result-repository__title'></div>" +
				      "</div>" +
				    "</div>"
				  );

				  $container.find(".select2-result-repository__title").text(repo.name);

				  return $container;
		},
		  templateSelection: function(repo) {
			  return repo.name || repo.text;
		}
		});
	
	
	
	
});//-----------END (document).ready(function()---------------------------//

function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#AuthorizeButton").prop("disabled",false);

	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   Swal.fire(
				      'Accepted!',
				      'User ID actions has been proceed successfully.',
				      'success'
				    )
		userTable.ajax.url(globalUrl+"/users/authlist/all").load();
		$('#submit_rfp_comment').modal('hide');
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'User ID action failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 

	}



function loadUserDatatable(para){



	var times = [
		"Accept", 
		"Reject" 
		//"Hold"
	];
	

	$("#userTableDiv").show();

	if(userTable == undefined){
		console.log("1111111111111111111");
		userTable = $('#userTable').DataTable({
		
			processing: true,
			 serverSide: true,

		     ajax: {
		    	// url:globalUrl+"/users/authouserlist/",
		    	 url:globalUrl+"/users/authlist/all",
		    	 type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		            /*{ "data": "userid",
		            	orderable: false,				            
		            	render: function(data,type,row,meta) {	
		            		//console.log(row);
	            		 return '<input type="checkbox" id="'+row.userid+'" name="'+row.userid+'" value="'+row+'"><label for="'+row.userid+'"></label>'
						
		            	}, 
	            	 },*/			            	 
		            { "data": "userid" },
		            { "data": "username" },
		            { "data": "companyCode"},
		            { "data": "userRoleInBussiness"},
		           	{ "data": "createdDateTime",
		            	"render": function ( data, type, row, meta ) {
		            		  var mydate=getDateFormat(data);
		            		      return mydate;	
		            		      }},
		            { "data": "status"},
		            		
		            /*{ "data": "userid",
		            	 orderable: false,
		            	 render: function(data,type,row,meta) {
		            		 return '<input type="text" class="form-control" id="'+row.userid+'"  placeholder ="Reason" disabled = "disabled"/ autocomplete="off">';
		            	 },
							className:'text-center'
		            },*/
		            {"data":"userid",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.statusForButtonDisable == 1){
								return '<button type="button" data-username="'+row.username+'" data-companyCode="'+row.companyCode+'" data-userid="'+row.userid+'" class="btn btn-primary" style="margin-right: 10px" onclick="submitUserComment(event)">Authorization</button>'
							}else if(row.statusForButtonDisable == 3){
								return '<span class="badge badge-secondary">Authrized</span>'
							}else if(row.statusForButtonDisable == 8){
								return '<span class="badge badge-danger">Rejected</span>'
							}
							  
							/*'<br><br><button type="button" class="btn btn-danger" onclick="Reject('+data+')">Reject</button>'+*/
								/*'<br>'+*/
							  ''
						  },	
					}	            
		    			            
		           
		            
		        ],
			
		//	dom: 'Bfrtip',
		    
			
	         
	          'order': [[1, 'asc']]
		
		});
		
	}else{
		userTable.ajax.url(globalUrl+"/users/authlist/all").load();
		console.log("Else");		
		console.log("Inside Else");

	}
	

	
	
	
}

function submitUserComment(event){
	//console.log(data);
	//formclear();
	console.log(event.target.getAttribute('data-rfpNumber'))
	console.log(event.target.getAttribute('data-fileName'))
	console.log(event.target.getAttribute('data-rfpId'))
	$("#appendData input").remove();
	$("#rfpNumberDiv input").remove();
	$("#rfpFileNameDiv input").remove();
	
	$('#appendData').append(`<input type="hidden" id="userId" name="userId" value="${event.target.getAttribute('data-userid')}" />`);
	$('#rfpNumberDiv').append(`<input class="form-control" type="text" disabled value="${event.target.getAttribute('data-companyCode')}" />`);
	$('#rfpFileNameDiv').append(`<input class="form-control" type="text" disabled value="${event.target.getAttribute('data-username')}" />`);
	
	$('#rfpcommentDiv textarea').remove();
	$('#rfpcommentDiv').append(`<textarea id="Comment" class="form-control" rows="2" ></textarea>`);
	$('#submit_rfp_comment').modal('toggle');
	
}

var editTableAuth;
function loadEditUserDetailsTable(){
	 
	if(editTableAuth == undefined){
	
		editTableAuth = $('#userEditTable').DataTable({
			
			processing: true,
			 serverSide: true,
			
		     ajax: {
		    	 url:globalUrl+"/users/view-all-for-edit-auth",
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
		            { "data": "displayName" },
		            { "data": "nic" },		            
		            { "data": "email" },
		            { "data": "userRole"},
					{ "data": "departmentName"},
		           	{ "data": "tp"},
		            { "data": "expireDate",				            	
		            	className: "text-right",
		            	 render: function(data,type,row,meta) {
		            		 return getDateFormat(data);
		            	 }
		            },
		            { "data": "userID",
		            	 orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button" data-userID="'+row.userID+'" data-displayName="'+row.displayName+'" data-primaryUserId="'+row.primaryUserId+'" class="btn btn-primary" style="margin-right: 10px" onclick="editUserAuth(event)">Authorization</button>'
						  },	
		            },
		/*            {
	                     "className":      'details-control',
	                     "orderable":      false,
	                     "data":           null,
	                     "defaultContent": ''
	                 }
*/		            
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
		editTableAuth.ajax.url(globalUrl+"/users/view-all-for-edit-auth").load();
		
	}
}

function editUserAuth(event){
	$("#userIdDiv input").remove();
	$('#userIdDiv').append(`<input class="form-control" id="userIdAuthUpdate" type="text" disabled value="${event.target.getAttribute('data-userID')}" />`);
	
	$("#displayNameDiv input").remove();
	$('#displayNameDiv').append(`<input class="form-control" id="displayName" type="text" disabled value="${event.target.getAttribute('data-displayName')}" />`);
	
	$("#appendDataUpdateAuth input").remove();
	$('#appendDataUpdateAuth').append(`<input class="form-control" id="primaryUserId" type="hidden" disabled value="${event.target.getAttribute('data-primaryUserId')}" />`);
	
	$('#editUserAuthDiv textarea').remove();
	$('#editUserAuthDiv').append(`<textarea id="CommentAuth" class="form-control" rows="2" ></textarea>`);
	$('#submit_update_auth').modal('toggle');
}

$('#authrizedUserEdit').on('click', function() {
	
	if ($('#userIdAuthUpdate').val().length==0) {
		status+=1;
		$('#userIdAuthUpdate').parent().parent().addClass('has-error')
	}if ($('#CommentAuth').val().length==0) {
		status+=1;
		$('#CommentAuth').parent().parent().addClass('has-error')
	}if ($('#primaryUserId').val().length==0) {
		status+=1;
		$('#primaryUserId').parent().parent().addClass('has-error')
	}else{
		
		var edit = {
			"userId" : $('#userIdAuthUpdate').val(),
			"comment" : $('#CommentAuth').val(),
			"primaryKeyOfTemp" : $('#primaryUserId').val(),
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
					  //console.log("TT");
					  //console.log("Inside button"+$('#user_edit_id').val())
						var	 responseCode = getAsyncDataPOST("/users/add-temporary-data-to-user",edit,confirmedCallBackForAuth)
						
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

$('#rejectedUserEdit').on('click', function() {
	if ($('#userIdAuthUpdate').val().length==0) {
		status+=1;
		$('#userIdAuthUpdate').parent().parent().addClass('has-error')
	}if ($('#CommentAuth').val().length==0) {
		status+=1;
		$('#CommentAuth').parent().parent().addClass('has-error')
	}if ($('#primaryUserId').val().length==0) {
		status+=1;
		$('#primaryUserId').parent().parent().addClass('has-error')
	}else{
		
		var edit = {
			"userId" : $('#userIdAuthUpdate').val(),
			"comment" : $('#CommentAuth').val(),
			"primaryKeyOfTemp" : $('#primaryUserId').val(),
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
					  //console.log("TT");
					  //console.log("Inside button"+$('#user_edit_id').val())
						var	 responseCode = getAsyncDataPOST("/users/add-temporary-data-to-user/rejected",edit,confirmedCallBackForAuthRej)
						
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

function confirmedCallBackForAuth(responseCode){
	console.log(responseCode);
	$("#AuthorizeButton").prop("disabled",false);

	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   Swal.fire(
				      'Accepted!',
				      'User Details are authorized.',
				      'success'
				    )
		editTableAuth.ajax.url(globalUrl+"/users/view-all-for-edit-auth").load();
		$('#submit_update_auth').modal('hide');
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'User Details authorization failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 

	}
	
function confirmedCallBackForAuthRej(responseCode){
	console.log(responseCode);
	$("#AuthorizeButton").prop("disabled",false);

	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   Swal.fire(
				      'Rejected!',
				      'User Details are rejected.',
				      'success'
				    )
		editTableAuth.ajax.url(globalUrl+"/users/view-all-for-edit-auth").load();
		$('#submit_update_auth').modal('hide');
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'User Details authorization failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 

	}
/*$('#userEditTable tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = contractTable.row( tr );

    if ( row.child.isShown() ) {
        
        row.child.hide();
        tr.removeClass('shown');
    }
    else {
        
        row.child( format(row.data()) ).show();
        tr.addClass('shown');
    }
} );*/

/*function format ( d ) {
   
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
        '<tr>'+           
            '<td class="text-yellow">Approve Reason</td>'+
            '<td class="text-yellow">Dept. Name</td>'+
            '<td class="text-yellow">Role Name</td>'+
        '</tr>'+
        '<tr>'+
            '<td>'+d.approveReason+'</td>'+
            '<td>'+d.department+'</td>'+ 
            '<td>'+d.roleName+'</td>'+
        '</tr>'+       
               
        
        '</table>';
}*/
