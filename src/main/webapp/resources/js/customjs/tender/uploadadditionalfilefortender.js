$('#procurementVote').hide()
$(document).ready(function() {

	tblTenderDetails = undefined;

$('#proc_tenderid').select2({
		placeholder: 'Select a Tender No'
	});
	
	tableData();

});

function tableData(){
	
	if(tblTenderDetails == undefined){
		console.log("5");
		tblTenderDetails = $('#tblTenderDetails').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			
			
			ajax: {
			   	url:globalUrl+"/tender/supplier-additinal-file-upload/",
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 
			    	 {"data":"index",},		 
					 {"data":"tenderNumber"},
					 {"data":"tenderName"},
					 {"data":"rfpNumber"},
					 {"data":"rfpName"},
					 {"data":"fileForUpload"},
					 {"data":"addFileId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.fileUploadStatus == 23){
								return '<button type="button" data-fileForUpload="'+row.fileForUpload+'" class="btn btn-success" style="margin-right: 10px" onclick="submitdata('+data+',event)">Submit<br> Files</button>'
							}else if(row.fileUploadStatus == 24){
								return '<span class="badge badge-success">Already submitted</span>'
							}
							  
						  },
					},
					 
					
			     ],
			order: [[1, 'asc']],
			//pageLength : 5,
			
    		
		})
		
		}else{
			console.log("Else part");
			
			tblTenderDetails.ajax.url(globalUrl+"/tender/supplier-additinal-file-upload/").load();
			
		}
}

function submitdata(data,event){
	//alert(data+"/"+event.target.getAttribute('data-financialCode')+"/"+event.target.getAttribute('data-description'));
	$("#financialCodeDiv input").remove();
	$("#appendData input").remove();
	/*$("#descriptionDiv label").remove();*/
	$('#financialCodeDiv').append(`<input dibabled class="form-control" type="text" id="financialCodeVal" value="${event.target.getAttribute('data-fileForUpload')}" />`);
	/*$('#descriptionDiv').append(`<label title="Upload zip file" 
								class="btn bg-olive"> <input type="file"
								accept="application/zip" name="upload_file" id="upload_file" onchange="fileValidation()"
								class="btn btn-block bg-olive btn-lg" required="required"> Choose file
							</label>`);*/
	$('#appendData').append(`<input type="hidden" id="addFileId" name="addFileId" value=${data} />`);
	$('#upload_additional_file_for_tender').modal('toggle');
}

function fileValidation() {
            var fileInput =
                document.getElementById('upload_file');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
                    /(\.zip)$/i;

			//var allowedExtensionsPdf = /()$/i;
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
					title: "Please use zip",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                //alert('Invalid file type');
                fileInput.value = '';
				//filePath.value = '';
                return false;
            }
}

$('#create_button').on('click', function() {
	
	if ($('#addFileId').val().length==0) {
		status+=1;
		$('#addFileId').parent().parent().addClass('has-error')
	}
	
	
	if (status != 0) {
		Swal.fire(
				  'Missing',
				  'Please check the required fields is empty!',
				  'warning'
				);
	}else{
		
			console.log('Clicked');
	
	var files = {
		"addFileId" : $('#addFileId').val(),
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
					
					  var responseCode = differentialAsync("/tender/additinal-file-upload",files,[$('#upload_file')[0]],confirmedCallBack)
				
					  if (responseCode == undefined) {
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
	if(responseCode.responseText=="Success"){
		
		Swal.fire(
			'Accepted!',
			'Additinal File upload has been created successfully.',
			'success'
		)
	formclear(); 
	tblTenderDetails.ajax.url(globalUrl+"/tender/supplier-additinal-file-upload/").load();  
	$('#upload_additional_file_for_tender').modal('hide');
	 }else{
		 console.log(responseCode.responseText);
		 Swal.fire({
			type: 'error',
			title: 'Additinal File upload creation failed',
			text: 'Error occured !',
			footer: '<a href>Supplier Management V1.0</a>'
		});
	  }    
	 
}


function formclear() {
	console.log("formclear");
	$('#proc_tenderid').val('').trigger("change");
	$('#committee_member').val('').trigger("change");
	$('#upload_support_doc1').val('');
	$('#upload_support_doc2').val('');
	$('#upload_support_doc3').val('');
}




