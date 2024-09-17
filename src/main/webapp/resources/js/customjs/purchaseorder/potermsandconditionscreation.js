$('#trmsAndConTblDiv').hide()

$( document ).ready(function() {
	//alert("ssssss");
	console.log('contractCreationJS Ready');
	trmsAndConTable = undefined;
	trmsAndConTable1 = undefined;
	getTenders();
	getTendersTable();
	getTermsAndConditions();
	termsAndConditionsTble();
});

$('#submit_button').on('click', function() {
	 var status = 0;
	let count = 1;
	if(count == 1){
		getAsyncData("/po/terms-con/isexists/by/" +$("#terms_and_conditions").val(), existsCallBack);
	}
	if ($('#terms_and_conditions').val().length==0) {
		status+=1;
		$('#terms_and_conditions').parent().parent().addClass('has-error')
	}
	console.log('Clicked');
	if (status != 0) {
		Swal.fire(
				  'Missing',
				  'Please check the required fields!',
				  'warning'
				);
		
	}else{
		console.log('All Fine');
		
		var termAndConditions = {
				"termsAndConditions" : $('#terms_and_conditions').val(),
				/*"tenderId" : $('#tenderIddd').val(),*/
			};
			
			console.log(JSON.stringify(termAndConditions));
			
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
						var responseCode =  getAsyncDataPOST("/po/add-term-and-conditions", termAndConditions, confirmedCallBack)
						
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
	
});

function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);

	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'Term or Condtion has been created successfully.',
				      'success'
				    )
		trmsAndConTable1.ajax.url(globalUrl+"/po/view-terms-and-conditions").load();
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Term or Condtion creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	    
}

function confirmedCallBack3(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);

	    
	   if(responseCode.responseText!= null || responseCode.responseText=="Success"){
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'Term or Condtion has been created successfully.',
				      'success'
				    )
		trmsAndConTable1.ajax.url(globalUrl+"/po/view-terms-and-conditions").load();
		$('#submit_terms_condition_edit').modal('hide');
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Term or Condtion creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	    
}

function termsAndConditionsTble(){
	
	if(trmsAndConTable1 == undefined){
			trmsAndConTable1 = $('#trms_and_con_table').DataTable({
				
				processing: true,
				serverSide: true,
				responsive: true,
				ajax: {
				   	url:globalUrl+"/po/view-terms-and-conditions",
				    type: 'GET',
				    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
				},
				columns: [
						 {"data":"index"},
				    	 {"data":"trmsAndCon"},
						 {"data":"trmsAndConId",
							orderable: false,
			            	 render: function(data,type,row,meta) {
								
								return '<button type="button" data-trmsAndCon="'+row.trmsAndCon+'" class="btn btn-primary" style="margin-right: 10px" onclick="edit('+data+',event)">Edit</button>'
								  
							  },	
						},
						 {"data":"status",
							orderable: false,
			            	 render: function(data,type,row,meta) {
								if(row.status == 3){
									return '<span class="badge badge-success">Active</span>'
									
								}else if(row.status == 6){
									return '<span class="badge badge-info">Disabled</span>'
									
								}
								  
								  
							  },	
						},
						{"data":"trmsAndConId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.status == 3){
								return '<button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="deactive1('+data+')">Disabled</button>'
							}else if(row.status == 6){
								return '<button type="button"  class="btn btn-success" style="margin-right: 10px" onclick="active1('+data+')">Active</button>'
							}
							  
							  
						  },	
					},
						
						
				     ],
				order: [[1, 'asc']],
			})
			
		}else{
			trmsAndConTable1.ajax.url(globalUrl+"/po/view-terms-and-conditions").load();
		}
	
}

function edit(data,event){
	
	$("#termsAndConditionEditDiv input").remove();
	$("#appendData input").remove();
	$('#termsAndConditionEditDiv').append(`<input class="form-control" type="text" id="termsAndConditionEdit" value="${event.target.getAttribute('data-trmsAndCon')}" />`);

	$('#appendData').append(`<input type="hidden" id="trms_And_Con_Id" name="trms_And_Con_Id" value=${data} />`);
	$('#submit_terms_condition_edit').modal('toggle');
}

$('#edit_button').on('click', function() {
	
	let count = 1;
	if(count == 1){
		getAsyncData("/po/terms-con/isexists/by/" +$("#terms_and_conditions").val(), existsCallBack);
	}
	if ($('#termsAndConditionEdit').val().length==0) {
		status+=1;
		$('#termsAndConditionEdit').parent().parent().addClass('has-error')
	}else{
		var termsAndCon = {
			"termsAndConditionEdit" : $('#termsAndConditionEdit').val(),
			"id" : $('#trms_And_Con_Id').val(),
		};
	
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes!'
		}).then((result) => {
		  if (result.value) {
		
				  var	 responseCode = getAsyncDataPUT("/po/edit-terms-and-conditions",termsAndCon,confirmedCallBack3)
						
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
		})
	}
})


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
			
			  getAsyncData("/po/view-terms-and-conditions-status/"+ data+"/active", function(res) {
			  trmsAndConTable1.ajax.url(globalUrl+"/po/view-terms-and-conditions").load();
			 	})
		  
		  }
		})
}

function deactive1(data){
	console.log(data);
	//alert(data);
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, Disabled!'
		}).then((result) => {
		  if (result.value) {
			
			  getAsyncData("/po/view-terms-and-conditions-status/"+ data+"/deactive", function(res) {
			  trmsAndConTable1.ajax.url(globalUrl+"/po/view-terms-and-conditions").load();
			 	})
		  
		  }
		})
}

function existsCallBack(res) {
	console.log(res);

	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "termsCon") {
		console.log(res.responseText);
		
		formclear();   
		
		Swal.fire({
			type : 'error',
			title : 'Please use a different Term or Conditions*',
			text : 'Tender number and Committee member is already taken !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
	} 
	
}


function formclear() {
	$('#terms_and_conditions').val('');
	$('#tenderIddd').val('');
	$('#trms_n_con').val('');
}