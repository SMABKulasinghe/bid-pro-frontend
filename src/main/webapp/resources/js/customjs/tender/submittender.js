

$(document).ready(function() {
	
	submitTenderTable = undefined;
	console.log("Ready");
	submitTenderDetailsTable();
	
	/*$(document).ajaxStart(function(){
    $("#wait").css("display", "block");
	  });
	  $(document).ajaxComplete(function(){
	    $("#wait").css("display", "none");
	  });
	  */
});

function submitTenderDetailsTable(){
	if(submitTenderTable == undefined){
		submitTenderTable = $('#tenderSubmission').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
			   	url:globalUrl+"/tender/get-tender-details",
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 {"data":"bidNo"},
					 {"data":"tenderName"},
					 {"data":"tenderDescription"},
			    	 {"data":"closingDateTime"},
					 //{"data":"closingTime"},
					/* {"data":"designation"},*/
					
			    	 /*{"data":"rfpDetails"},*/
					 {"data":"tenderNumber",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button" data-tenderName="'+row.tenderName+'" data-bidNo="'+row.bidNo+'" class="btn btn-success" style="margin-right: 10px" onclick="submitTenderDetails('+data+','+row.rfpId+',event)">Submit Tender</button>'
							  
						  },	
					},
			   
			     ],
			language:{
				emptyTable: "You have no other tenders to submit"
			},
			
			
		});
		console.log("Programe");
	}else{
		submitTenderTable.ajax.url(globalUrl+"/tender/get-tender-details").load();
	}
}

/*function loading(){
	Swal.fire({
	  title: 'Uploading...',
	  html: 'Please wait...',
	  allowEscapeKey: true,
	  allowOutsideClick: false,
	  hideOnOverlayClick: false,
	  hideOnContentClick: false,
	  showConfirmButton: false,
	  didOpen: () => {
	    Swal.showLoading()
	  }
	});
}*/

function submitTenderDetails(data,rfpid,event){
	
	Swal.fire({
		  icon: 'info',
		  title: 'Important !',
		  text: 'You need to upload only the RFP file provide by Bank. Otherwise you will not be able to perform these tasks. To download it, visit the View and Download Tender menu in Tender Details. From there you can download the RFP file of the relevant Tender.',
		  footer: '<a href="">Why do I have this issue?</a>'
		});
	console.log(event.target.getAttribute('data-tenderName'))
	console.log(event.target.getAttribute('data-bidNo'))
	//console.log(data);
	$("#appendData input").remove();
	$('#appendData').append(`<input type="hidden" id="tender_id" name="tender_id" value="${data}" />`);
	$('#appendData').append(`<input type="hidden" id="rfp_id" name="rfp_id" value="${rfpid}" />`);
	
	$("#bid_no_div input").remove();
	$("#tender_name_div input").remove();
	$('#bid_no_div').append(`<input id="bid_no" value="${event.target.getAttribute('data-bidNo')}" name="bid_no" type="text" class="form-control" disabled>`);
	$('#tender_name_div').append(`<input id="tender_name" value="${event.target.getAttribute('data-tenderName')}" name="tender_name" type="text" class="form-control" disabled>`);
	
	$('#submit_tender_form').modal('toggle');
}

//appz_tender_submissions   <<<<<<<<<<<<<< tblname
function fileValidationCompanyProfile() {
            var fileInput =
                document.getElementById('upload_company_profile');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
                    /(\.pdf)$/i;

			//var allowedExtensionsPdf = /()$/i;
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
					title: "Please use PDF",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                //alert('Invalid file type');
                fileInput.value = '';
				//filePath.value = '';
                return false;
            }
}

function fileValidationUploadFinancialFile() {
            var fileInput =
                document.getElementById('upload_financial_file');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
                    /(\.pdf)$/i;

			//var allowedExtensionsPdf = /()$/i;
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
					title: "Please use PDF",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                //alert('Invalid file type');
                fileInput.value = '';
				//filePath.value = '';
                return false;
            }
}

function fileValidationUploadRfpProfile() {
            var fileInput =
                document.getElementById('upload_rfp_file');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
                    /(\.csv)$/i;

			//var allowedExtensionsPdf = /()$/i;
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
					title: "Please use CSV file",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                //alert('Invalid file type');
                fileInput.value = '';
				//filePath.value = '';
                return false;
            }
}

function fileValidationSupportDoc1() {
            var fileInput =
                document.getElementById('upload_support_doc1');
             
            var filePath = fileInput.value;
         
            
            var allowedExtensions =
                    /(\.pdf)$/i;

			
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
					title: "Please use PDF",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                
                fileInput.value = '';
				
                return false;
            }
}

function fileValidationSupportDoc2() {
            var fileInput =
                document.getElementById('upload_support_doc2');
             
            var filePath = fileInput.value;
         
            
            var allowedExtensions =
                    /(\.pdf)$/i;

			
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
					title: "Please use PDF",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                
                fileInput.value = '';
				
                return false;
            }
}

function fileValidationSupportDoc3() {
            var fileInput =
                document.getElementById('upload_support_doc3');
             
            var filePath = fileInput.value;
         
            
            var allowedExtensions =
                    /(\.pdf)$/i;

			
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
					title: "Please use PDF",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                
                fileInput.value = '';
				
                return false;
            }
}

$("body").on('change', '#upload_rfp_file', function(e) {
	var contract = {
				"tId" : $('#tender_id').val(),
				"rfpId" : $('#rfp_id').val(),
				/*"mSupplierCode" : $('#m_supplier_code').val(),*/
			};
	responseCode =  putFilesUploadSubmitTender("/tender/submit/rfpfile", contract,$('#upload_rfp_file')[0], confirmedCallBackForUpdateRfp)
	
})

$('#submit_button').on('click', function() {
	 var status = 0;
	/*var uploadCompanyProfile = document.getElementById('upload_company_profile');
	var uploadFinancialFile = document.getElementById('upload_financial_file');*/
	var uploadRfpFile = document.getElementById('upload_rfp_file');
	/*var uploadSupportDoc1 = document.getElementById('upload_support_doc1');
	var uploadSupportDoc2 = document.getElementById('upload_support_doc2');
	var uploadSupportDoc3 = document.getElementById('upload_support_doc3');*/
	
   /* var files = uploadCompanyProfile.files;
	var files = uploadFinancialFile.files;*/
	var files = uploadRfpFile.files;
	/*var files = uploadSupportDoc1.files;
	var files = uploadSupportDoc2.files;
	var files = uploadSupportDoc3.files;*/

        if(files.length==0){
            Swal.fire(
				  'Missing',
				  'Please check the required fields!',
				  'warning'
				);
            return false;
        }
	
	

	if ($('#tender_id').val().length==0) {
		status+=1;
		$('#tender_id').parent().parent().addClass('has-error')
	}
	if ($('#rfp_id').val().length==0) {
		status+=1;
		$('#rfp_id').parent().parent().addClass('has-error')
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
				"tId" : $('#tender_id').val(),
				"rfpId" : $('#rfp_id').val(),
				/*"mSupplierCode" : $('#m_supplier_code').val(),*/
			};
			
			
			console.log(JSON.stringify(contract));
			console.log($('#upload_rfp_file')[0]);
			
			
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
					/*console.log($('#upload_company_profile')[0]);
					console.log($('#upload_rfp_file')[0]);
					console.log($('#upload_support_doc1')[0]);
					console.log($('#upload_support_doc2')[0]);
					console.log($('#upload_support_doc3')[0]);	*/
					
					
					//var responseCode =  putFilesUploadSubmitTender("/tender/submit", contract,[$('#upload_company_profile')[0],$('#upload_financial_file')[0],$('#upload_rfp_file')[0],$('#upload_support_doc1')[0],$('#upload_support_doc2')[0],$('#upload_support_doc3')[0]], confirmedCallBackForUpdate)		
				  	var responseCode;
					responseCode =  putFilesUploadSubmitTender("/tender/submit/companyProfile", contract,$('#upload_company_profile')[0], confirmedCallBackForUpdate)
					responseCode =  putFilesUploadSubmitTender("/tender/submit/financialfile", contract,$('#upload_financial_file')[0], confirmedCallBackForUpdate)
					//responseCode =  putFilesUploadSubmitTender("/tender/submit/rfpfile", contract,$('#upload_rfp_file')[0], confirmedCallBackForUpdate)
					responseCode =  putFilesUploadSubmitTender("/tender/submit/supportdoc1", contract,$('#upload_support_doc1')[0], confirmedCallBackForUpdate)
					responseCode =  putFilesUploadSubmitTender("/tender/submit/supportdoc2", contract,$('#upload_support_doc2')[0], confirmedCallBackForUpdate)
					responseCode =  putFilesUploadSubmitTender("/tender/submit/supportdoc3", contract,$('#upload_support_doc3')[0], confirmedCallBackForUpdate)
			
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

function confirmedCallBackForUpdateRfp(responseCode){
	
	console.log("Response CODE2 "+responseCode.responseText);
	$("#submit_button").prop("disabled",false);
	
	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		//submitTenderTable.ajax.url(globalUrl+"/tender/get-tender-details").load();
		
		  // formclear();
		   Swal.fire(
				      'Apporved!',
				      'Your RFP File is approved. Please submit other details',
				      'success'
				    )
		//$('#submit_tender_form').modal('hide');
	   }else if(responseCode.responseText!= null & responseCode.responseText=="FilesNotEqual"){
			//submitTenderTable.ajax.url(globalUrl+"/tender/get-tender-details").load();
			//formclear();
			Swal.fire({
				type: 'error',
				title: "Your RFP File is not correct. Don't Delete or Edit Field of RFP file",
				text: "Tender submition failed. Please try again",
				footer: '<a href>Supplier Management V1.0</a>'
			});
			$('#submit_tender_form').modal('hide');
				
		}else if(responseCode.responseText!= null & responseCode.responseText=="TenderExpired"){
			//submitTenderTable.ajax.url(globalUrl+"/tender/get-tender-details").load();
			//formclear();
			Swal.fire({
				type: 'error',
				title: "Tender is Expired",
				text: "Tender submition failed",
				footer: '<a href>Supplier Management V1.0</a>'
			});
			$('#submit_tender_form').modal('hide');
				
		}
		else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Tender submition creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 

}

function confirmedCallBackForUpdate(responseCode){
	
	console.log("Response CODE2 "+responseCode.responseText);
	$("#submit_button").prop("disabled",false);
	
	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		submitTenderTable.ajax.url(globalUrl+"/tender/get-tender-details").load();
		
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'Tender has been submission successfully.',
				      'success'
				    )
		$('#submit_tender_form').modal('hide');
	   }else if(responseCode.responseText!= null & responseCode.responseText=="FilesNotEqual"){
			submitTenderTable.ajax.url(globalUrl+"/tender/get-tender-details").load();
			formclear();
			Swal.fire({
				type: 'error',
				title: "Your RFP File is not correct. Don't Delete or Edit Field of RFP file",
				text: "Tender submition failed. Please try again",
				footer: '<a href>Supplier Management V1.0</a>'
			});
			$('#submit_tender_form').modal('hide');
				
		}else if(responseCode.responseText!= null & responseCode.responseText=="TenderExpired"){
			submitTenderTable.ajax.url(globalUrl+"/tender/get-tender-details").load();
			formclear();
			Swal.fire({
				type: 'error',
				title: "Tender is Expired",
				text: "Tender submition failed",
				footer: '<a href>Supplier Management V1.0</a>'
			});
			$('#submit_tender_form').modal('hide');
				
		}
		else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Tender submition creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 

}


function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);

	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'Tender has been submition successfully.',
				      'success'
				    )
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Tender submition creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 

}
