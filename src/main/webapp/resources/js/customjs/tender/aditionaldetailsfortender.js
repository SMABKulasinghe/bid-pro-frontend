
var dd;
$('#adtionalDataDiv').hide()
/*var table = $('#rfpTable').DataTable({
			aaSorting:[],
			"pageLength": 200,
			"bPaginate": false,
			"select": {
            style:    'os',
            selector: 'td:first-child'
       		 },
});*/
		
var arrHeadingNames = [];	
var arrFieldNames = [];	

aditionalDetails = undefined;

$(document).ready(function() {
	
	$('#tender_id_for_aditional_details').select2({
		placeholder: 'Select a Tender No'
	});
	
	$('#tender_id_for_aditional_details_2').select2({
		placeholder: 'Select a Tender No'
	});
	
	$('#tender_id_for_aditional_details_3').select2({
		placeholder: 'Select a Tender No'
	});
	
	$('#tender_id_for_aditional_details_4').select2({
		placeholder: 'Select a Tender No'
	});

	getAsyncData('/rfp/tendeid-for-rfp-change-id', function(res) {
		console.log(res);
		console.log(res.responseJSON);

		$('#tender_id_for_aditional_details').append(new Option('Select a tender no', ''))
		for (let item of res.responseJSON) {
			$('#tender_id_for_aditional_details').append(new Option(item.bidno + " - " + item.tendername, item.trnderid))
		}
	});
	
	
	getAsyncData('/rfp/tendeid-for-rfp-change-id', function(res) {
		console.log(res);
		console.log(res.responseJSON);

		$('#tender_id_for_aditional_details_2').append(new Option('Select a tender no', ''))
		for (let item of res.responseJSON) {
			$('#tender_id_for_aditional_details_2').append(new Option(item.bidno + " - " + item.tendername, item.trnderid))
		}
	});
	
	getAsyncData('/rfp/tendeid-for-rfp-change-id', function(res) {
		console.log(res);
		console.log(res.responseJSON);

		$('#tender_id_for_aditional_details_3').append(new Option('Select a tender no', ''))
		for (let item of res.responseJSON) {
			$('#tender_id_for_aditional_details_3').append(new Option(item.bidno + " - " + item.tendername, item.trnderid))
		}
	});
	
	getAsyncData('/rfp/tendeid-for-rfp-change-id', function(res) {
		console.log(res);
		console.log(res.responseJSON);

		$('#tender_id_for_aditional_details_4').append(new Option('Select a tender no', ''))
		for (let item of res.responseJSON) {
			$('#tender_id_for_aditional_details_4').append(new Option(item.bidno + " - " + item.tendername, item.trnderid))
		}
	});
	
});

$("#searchUserIDButton").click(function(){
	if(aditionalDetails == undefined){
		
		aditionalDetails = $('#aditionalFileParamTble').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			
			ajax: {
			   	url:globalUrl+"/tender/aditional-details-for-edit/"+$('#tender_id_for_aditional_details_2').val(),
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			
			columns: [
					 {"data":"index"},
					 {"data":"fileName"},
					 {"data":"fileStatus",
							orderable: false,
			            	 render: function(data,type,row,meta) {
								if(row.fileStatus == 6){
									return '<span class="badge badge-danger">Locked File</span>'
									
								}else if(row.fileStatus == 23){
									return '<span class="badge badge-info">Pending</span>'
									
								}
								  
								  
							  },	
						},
					 {"data":"id",
							orderable: false,
			            	 render: function(data,type,row,meta) {
								
								return '<button type="button" data-fileName="'+row.fileName+'" class="btn btn-primary" style="margin-right: 10px" onclick="edit('+data+',event)">Edit</button>'
								  
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
			    	 {"data":"id",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.status == 3){
								return '<button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="deactive('+data+')">Disabled</button>'
							}else if(row.status == 6){
								return '<button type="button"  class="btn btn-success" style="margin-right: 10px" onclick="active('+data+')">Active</button>'
							}
							  
							  
						  },	
						},
					
						
								   			    	 
			     ],
			
			order: [[1, 'asc']],
			
		});
		console.log("Programe");
	}else{
		aditionalDetails.ajax.url(globalUrl+"/tender/aditional-details-for-edit/"+$('#tender_id_for_aditional_details_2').val()).load();
	}
	
	$('#adtionalDataDiv').show()
});

$('#submit_button_for_tender').on('click', function() {
	
	let count = 1;
	if(count == 1){
		getAsyncData("/tender/aditional-files/isexists/by/" +$("#tender_id_for_aditional_details").val()+"/"+$("#file_name").val(), existsCallBack);
	}
	
	if ($('#tender_id_for_aditional_details').val().length==0) {
		status+=1;
		$('#tender_id_for_aditional_details').parent().parent().addClass('has-error')
	}
	if ($('#file_name').val().length==0) {
		status+=1;
		$('#file_name').parent().parent().addClass('has-error')
	}

	if (status != 0) {
		Swal.fire(
				  'Missing',
				  'Please check the required fields or table is empty!',
				  'warning'
				);		
	}else{
	
	var files = {
				"tenderId" : $('#tender_id_for_aditional_details').val(),
				"fileName" : $('#file_name').val(),
								
			};						
			console.log(JSON.stringify(files));
			
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
					  
						var	 responseCode = getAsyncDataPOST("/tender/aditional-files-for-tender-params",files,confirmedCallBack)
						
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
	
	   if(responseCode.responseText!= null || responseCode.responseText=="Success"){
		   Swal.fire(
				      'Accepted!',
				      'Aditional File has been created successfully.',
				      'success'
				    )
			formclear();
			aditionalDetails.ajax.url(globalUrl+"/tender/aditional-details-for-edit/"+$('#tender_id_for_aditional_details_2').val()).load();
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Aditional File creation failed',
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
	  confirmButtonText: 'Yes! Active'
		}).then((result) => {
		  if (result.value) {
			
			  getAsyncData("/tender/aditional-files-status/"+data+"/active", function(res) {
			  aditionalDetails.ajax.url(globalUrl+"/tender/aditional-details-for-edit/"+$('#tender_id_for_aditional_details_2').val()).load();
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
	  confirmButtonText: 'Yes, Disabled!'
		}).then((result) => {
		  if (result.value) {
			
			  getAsyncData("/tender/aditional-files-status/"+data+"/deactive", function(res) {
			  aditionalDetails.ajax.url(globalUrl+"/tender/aditional-details-for-edit/"+$('#tender_id_for_aditional_details_2').val()).load();
			 	})
		  
		  }
		})
}

function edit(data,event){
	
	$("#additionalFileNameDiv input").remove();
	$("#appendData input").remove();
	$('#additionalFileNameDiv').append(`<input class="form-control" type="text" id="aditionalFilesNameEdit" value="${event.target.getAttribute('data-fileName')}" />`);

	$('#appendData').append(`<input type="hidden" id="addtionalNameId" name="addtionalNameId" value=${data} />`);
	$('#submit_additional_files_edit').modal('toggle');
}

$('#edit_button').on('click', function() {
	
	let count = 1;
	if(count == 1){
		getAsyncData("/tender/aditional-files/isexists/by/" +$("#tender_id_for_aditional_details_2").val()+"/"+$("#aditionalFilesNameEdit").val(), existsCallBack);
	}
	if ($('#aditionalFilesNameEdit').val().length==0) {
		status+=1;
		$('#aditionalFilesNameEdit').parent().parent().addClass('has-error')
	}else{
		var addtionalFile = {
			"aditionalFilesNameEdit" : $('#aditionalFilesNameEdit').val(),
			"id" : $('#addtionalNameId').val(),
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
		
				  var	 responseCode = getAsyncDataPUT("/tender/edit-additional-file-name",addtionalFile,confirmedCallBack3)
						
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

function confirmedCallBack3(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);

	    
	   if(responseCode.responseText!= null || responseCode.responseText=="Success"){
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'Addtional File Edit has been created successfully.',
				      'success'
				    )
		aditionalDetails.ajax.url(globalUrl+"/tender/aditional-details-for-edit/"+$('#tender_id_for_aditional_details_2').val()).load();
		$('#submit_additional_files_edit').modal('hide');
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Addtional File Edit creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	    
}

function existsCallBack(res) {
	console.log(res);

	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "addtionalFile") {
		console.log(res.responseText);
		
		formclear();   
		
		Swal.fire({
			type : 'error',
			title : 'Please use a different File Name*',
			text : 'File Name is already taken !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
	} 
	
}

var additionalFilesId=[];
var additionalFilesName=[];
$("body").on('change', '#tender_id_for_aditional_details_3', function(e){
	
	getAsyncData('/tender/get-additional-files-to-page/'+$('#tender_id_for_aditional_details_3').val(), function(res) {
	    console.log(res);
	    console.log(res.responseJSON.data);
	    
	     $("#fileNameDiv input").remove();
		 $("#fileNameDiv label").remove();
		 $("#fileNameDiv div").remove();
	     for (let additionalFiles of res.responseJSON.data) {
	        
			$("#fileNameDiv").append('<div class="form-group row">'+
								'<label for="inputPassword3" class="col-sm-4 control-label">'+additionalFiles.fileName+' *</label>'+
								'<div class="col-sm-8" id="">'+
									'<label title="Upload PDF file" for="inputFile" class="btn bg-olive">'+
									 '<input type="file" accept="file/*" name="m_batchfile" id="'+additionalFiles.fileId+'" class="btn btn-block  bg-olive btn-lg">'+
									'</label>'+
								'</div>'+
							'</div>');
			/*arrTermsAndCon.push(trmAndCon.trmAndConWithoutSpace);	
			arrTermsAndConIds.push(trmAndCon.termsAndConditionId);
			arrTermsAndConTransIds.push(trmAndCon.trmAndConTrnsId);*/
			var id = "#"+additionalFiles.fileId;
			additionalFilesId.push(id);
			additionalFilesName.push(additionalFiles.fileId);
	    }
			
	});
	
});

$('#submit_button_for_adding_filesr').on('click', function() {
	 var status = 0;
	//var uploadRfpFile = document.getElementById('upload_rfp_file');

	//var files = uploadRfpFile.files;
	
        /*if(files.length==0){
            Swal.fire(
				  'Missing',
				  'Please check the required fields!',
				  'warning'
				);
            return false;
        }*/
	
	

	if ($('#tender_id_for_aditional_details_3').val().length==0) {
		status+=1;
		$('#tender_id_for_aditional_details_3').parent().parent().addClass('has-error')
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
		
		var contract = {
				"tenderId" : $('#tender_id_for_aditional_details_3').val(),
				
			};
			
			
			console.log(JSON.stringify(contract));
			
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
					var responseCode;
					for (let addtionalFile of additionalFilesName) {
						
						responseCode =  putFilesUploadSubmitTender("/tender/additional-file-upload/"+addtionalFile, contract,$("#"+addtionalFile)[0], confirmedCallBackFileUpload)
						
					}

					console.log("Response CODE "+responseCode);	
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

function confirmedCallBackFileUpload(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);

	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   formclear();

		   Swal.fire(
				      'Accepted!',
				      'File upload has been created successfully.',
				      'success'
				    )
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'File upload creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	    
}

$('#submit_button_lock_additional_files').on('click', function() {
	
	if ($('#tender_id_for_aditional_details_4').val().length==0) {
		status+=1;
		$('#tender_id_for_aditional_details_4').parent().parent().addClass('has-error')
	}else{
		var lockFiles = {
			"tenderId" : $('#tender_id_for_aditional_details_4').val(),
		};
	
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this! After the tender is locked, it is not possible to upload additional files to this tender",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes!'
		}).then((result) => {
		  if (result.value) {
		
				  var	 responseCode = getAsyncDataPUT("/tender/lock-addiotnal-files",lockFiles,confirmedCallBackLockScreen)
						
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

function confirmedCallBackLockScreen(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);

	    
	   if(responseCode.responseText!= null || responseCode.responseText=="Success"){
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'Tender is Locked.',
				      'success'
				    )
		aditionalDetails.ajax.url(globalUrl+"/tender/aditional-details-for-edit/"+$('#tender_id_for_aditional_details_2').val()).load();
		
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Tender Locked is failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	    
}

function formclear(){
	/*$('#rfp_no').val('');*/
	$('#file_name').val('');
	$('#rfp_filename').val('');
	$('#rfp_fieldName').val('');		
	$('#tender_id_details').val('').trigger("change");
	$('#tender_id_for_aditional_details').val('').trigger("change");
	$('#tender_id_for_aditional_details_4').val('').trigger("change");
	
}