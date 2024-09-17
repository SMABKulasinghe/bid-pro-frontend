$(document).ready(function() {
	  $('#reg_date').datepicker({
	      autoclose: true
	    });
	financialCodeTable = undefined;
	financialCodeView();
});


$('#financial_code_submit_button').on('click', function() {
	
	
	
	if ($('#financial_code').val().length==0) {
		status+=1;
		$('#financial_code').parent().parent().addClass('has-error')
	}
	if ($('#description').val().length==0) {
		status+=1;
		$('#description').parent().parent().addClass('has-error')
	}
	if ($('#description').val() !== "") {
		getAsyncData("/tender/isexists-financial/by/" + "description" + "/"+ $("#description").val(), existsCallBack1);
	}
	if (status != 0) {
		
		Swal.fire(
				  'Missing',
				  'Please check the required fields is empty!',
				  'warning'
				);
		
	}else{
	//console.log("after validation");
	
	var code = {
				"financialCode" : $('#financial_code').val(),
				"description" : $('#description').val(),
			};
			//console.log(evaArray);
			console.log(JSON.stringify(code));

			//alert("not emmpty")
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
					  
						var	 responseCode = getAsyncDataPOST("/tender/financial-code-submit",code,confirmedCallBack)
						if(responseCode == undefined){
							Swal.fire({
							  title: 'Sending...',
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
	$("#financial_code td").remove();
	}
});

function financialCodeView(){
	if(financialCodeTable == undefined){
		financialCodeTable = $('#financialCodeTable').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
			   	url:globalUrl+"/tender/financial-code-view",
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 {"data":"index"},
			    	 {"data":"financialCode"},
					 {"data":"description"},
					 {"data":"financialId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							
							return '<button type="button" data-financialCode="'+row.financialCode+'" data-description="'+row.description+'" class="btn btn-primary" style="margin-right: 10px" onclick="edit('+data+',event)">Edit</button>'
							  
						  },	
					},
					 {"data":"financialId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.status == 3){
								return '<span class="badge badge-success">Active</span>'
								
							}else if(row.status == 4){
								return '<span class="badge badge-danger">Deactive</span>'
								
							}
							  
							  
						  },	
					},
					{"data":"financialId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.status == 3){
								return '<button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="deactive('+data+')">Deactive</button>'
							}else if(row.status == 4){
								return '<button type="button"  class="btn btn-success" style="margin-right: 10px" onclick="active('+data+')">Active</button>'
							}
							  
							  
						  },	
					},
					/*{"data":"financialId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							
							return '<button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="disable('+data+')">Delete</button>'
							  
						  },	
					},*/
					
			     ],
			order: [[1, 'asc']],
		})
		
	}else{
		financialCodeTable.ajax.url(globalUrl+"/tender/financial-code-view").load();
	}
}
	
function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#financial_code_submit_button").prop("disabled",false);
	    
	   if(responseCode.responseText!= null || responseCode.responseText=="Success"){
		   Swal.fire(
				      'Accepted!',
				      'Financial code has been created successfully.',
				      'success'
				    )
			formclear();
			financialCodeTable.ajax.url(globalUrl+"/tender/financial-code-view").load();
			$('#submit_financial_code').modal('hide');
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Financial code creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	   formclear();
}	
	
function active(data){
	console.log(data);
	//alert(data);
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, Reject!'
		}).then((result) => {
		  if (result.value) {
			
			  getAsyncData("/tender/financial-code-status/"+ data+"/active", function(res) {
			  financialCodeTable.ajax.url(globalUrl+"/tender/financial-code-view").load();
			 	})
		  
		  }
		})
}

function deactive(data){
	console.log(data);
	//alert(data);
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, Reject!'
		}).then((result) => {
		  if (result.value) {
			
			  getAsyncData("/tender/financial-code-status/"+ data+"/deactive", function(res) {
			  financialCodeTable.ajax.url(globalUrl+"/tender/financial-code-view").load();
			 	})
		  
		  }
		})
}

function disable(data){
	console.log(data);
	//alert(data);
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, Reject!'
		}).then((result) => {
		  if (result.value) {
			
			  getAsyncData("/tender/financial-code-status/"+ data+"/disable", function(res) {
			  financialCodeTable.ajax.url(globalUrl+"/tender/financial-code-view").load();
			 	})
		  
		  }
		})
}

function edit(data,event){
	//alert(data+"/"+event.target.getAttribute('data-financialCode')+"/"+event.target.getAttribute('data-description'));
	$("#financialCodeDiv input").remove();
	$("#descriptionDiv input").remove();
	$('#financialCodeDiv').append(`<input class="form-control" type="text" id="financialCodeVal" value="${event.target.getAttribute('data-financialCode')}" />`);
	$('#descriptionDiv').append(`<input class="form-control" type="text" id="descriptionVal" value="${event.target.getAttribute('data-description')}" />`);
	$('#descriptionDiv').append(`<input type="hidden" id="financialId" name="financialId" value=${data} />`);
	$('#submit_financial_code').modal('toggle');
}

$('#edit_button').on('click', function() {
	if ($('#financialCodeVal').val().length!=0) {
		getAsyncData("/tender/isexists-financial/by/" + "financialCode" + "/"+ $("#financialCodeVal").val(), existsCallBack);
	}
	if ($('#financialCodeVal').val().length==0) {
		status+=1;
		$('#financialCodeVal').parent().parent().addClass('has-error')
	}if ($('#descriptionVal').val().length==0) {
		status+=1;
		$('#descriptionVal').parent().parent().addClass('has-error')
	}else{
		var financialRes = {
		"financialId" : $('#financialId').val(),
		"financialCodeVal" : $('#financialCodeVal').val(),
		"descriptionVal" : $('#descriptionVal').val(),
				
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
		
				  var	 responseCode = getAsyncDataPUT("/tender/edit-financial-code",financialRes,confirmedCallBack)
						
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

$('#financial_code').on(
		'focusout',
		function() {
			//console.log($("#tender_no").val());

			if ($("#financial_code").val() == "") {

			} else { 
				
				getAsyncData("/tender/isexists-financial/by/" + "financialCode" + "/"+ $("#financial_code").val(), existsCallBack);
				
			}

});

$('#financialCodeVal').on(
		'focusout',
		function() {
			//console.log($("#tender_no").val());

			if ($("#financialCodeVal").val() == "") {

			} else { 
				
				getAsyncData("/tender/isexists-financial/by/" + "financialCode" + "/"+ $("#financialCodeVal").val(), existsCallBack);
				
			}

});

$('#description').on(
		'focusout',
		function() {
			//console.log($("#tender_no").val());

			if ($("#financial_code").val() == "") {

			} else { 
				
				getAsyncData("/tender/isexists-financial/by/" + "description" + "/"+ $("#description").val(), existsCallBack1);
				
			}

});

function existsCallBack(res) {
	console.log(res);

	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "financialCode") {
		console.log(res.responseText);
		$('#financial_code').val("");
		$('#financialCodeVal').val("");
		Swal.fire({
			type : 'error',
			title : 'Please use a different Financial code*',
			text : 'Financial code is already taken !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
	} 
	
}

function existsCallBack1(res) {
	console.log(res);

	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "description") {
		console.log(res.responseText);
		//$('#financial_code').val("");
		$('#description').val('');
		Swal.fire({
			type : 'error',
			title : 'Please use a different Financial Description*',
			text : 'Financial Description is already taken !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
	} 
	
}

function formclear(){
	$('#trnderid').val('').trigger("change");
	$('#financial_code').val('');
	$('#description').val('');
}	
	

	

