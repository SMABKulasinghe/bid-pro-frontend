
var dd;
$('#adtionalDataDiv').hide()
		
var arrHeadingNames = [];	
var arrFieldNames = [];	

aditionalDetails = undefined;

$(document).ready(function() {
	
	$('#tender_id_for_aditional_details_2').select2({
		placeholder: 'Select a Tender No'
	});
	
	$('#tender_id_for_aditional_details_3').select2({
		placeholder: 'Select a Tender No'
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
	
	
});

$("#searchUserIDButton").click(function(){
	if(aditionalDetails == undefined){
		
		aditionalDetails = $('#aditionalFileParamTble').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			
			ajax: {
			   	url:globalUrl+"/tender/aditional-details-for-view-tble/"+$('#tender_id_for_aditional_details_2').val(),
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			
			columns: [
					 {"data":"index"},
					 {"data":"fileName"},
			    	 {"data":"id",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							
								return '<button type="button"  class="btn btn-success" style="margin-right: 10px" onclick="fileView('+data+')">View File</button>'
							
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
									 '<input type="file" accept=".pdf" name="m_batchfile" id="'+additionalFiles.fileId+'" title="Use PDF to upload" class="btn btn-block  bg-olive btn-lg">'+
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

function fileView(id){
	//alert("url "+$('#tender_id_for_aditional_details_2').val()+"-"+id)
	var globlelink = sessionStorage.getItem("GlobleUrl");
	window.open(globlelink+"/tender/aditional-files-view/"+$('#tender_id_for_aditional_details_2').val()+"/"+id);	
}

function formclear(){
	/*$('#rfp_no').val('');*/
	$('#file_name').val('');
	$('#rfp_filename').val('');
	$('#rfp_fieldName').val('');		
	$('#tender_id_details').val('').trigger("change");
	$('#tender_id_for_aditional_details').val('').trigger("change");
	
}