$('#forHide').hide()
$( document ).ready(function() {
	//alert("ssssss");
	console.log('contractCreationJS Ready');
	getTenders();
});



function getTenders(){
	getAsyncData('/po/get-tender-ids', function(res) {
	    console.log(res);
	    console.log(res.responseJSON.data);
	    $('#tenderIddd').find('option').remove().end();
	      $('#tenderIddd').append(new Option('Select a tender no', ''))
	      for (let tender of res.responseJSON.data) {
	        
				$('#tenderIddd').append(new Option(tender.tBidNumber+"-"+tender.tenderName,tender.tenderId))
	    }
			
	});
}

const arrTermsAndCon=[];
const arrTermsAndConIds=[];
const arrTermsAndConTransIds=[];

$("body").on('change', '#tenderIddd', function(e){
	$("#btnMore").remove();
	var $tenderId= $(this).val();
	//$('#tenderIddd').find('select').val()
	getAsyncData("/po/get-tender-details-for-po/"+$tenderId, function(res) {
			console.log(res);
			console.log(res.responseJSON.tendername);
			
				$('#tenderName').val(res.responseJSON.TenderName);
				$('#category').val(res.responseJSON.Category);
				//$('#rfp_no').val(res.responseJSON.RfpId);
				$('#rfp_filename').val(res.responseJSON.RfpFileName);
				$('#qualifiedSup').val(res.responseJSON.SupplierName);
				$('#unitPriceLkr').val(res.responseJSON.amountLkr);
				//alert(res.responseJSON.amountUsd,res.responseJSON.amountLkr)
				
				$("#rfpDetailsDiv input").remove();
				$('#rfpDetailsDiv').append(`<input type="hidden" id="supplierId" name="supplierId" value="${res.responseJSON.VenderId}" />`);
				$('#rfpDetailsDiv').append(`<input type="hidden" id="tenderId" name="tenderId" value="${res.responseJSON.TenderId}" />`);
				$('#rfpDetailsDiv').append(`<input type="hidden" id="rfp_no" name="rfp_no" value="${res.responseJSON.RfpId}" />`);
				$('#rfpDetailsDiv').append(`<input type="hidden" id="TenderSubmissionId" name="TenderSubmissionId" value="${res.responseJSON.TenderSubmissionId}" />`);
				$("#rfpDetailsDiv button").remove();
				$("#rfpDetailsDiv").append('<button type="button" id="btnMore"  class="btn btn-success" style="margin-right: 10px" onclick="getMore('+res.responseJSON.RfpId+')">View RFP Details</button>');
				$("#procurementBoardPaperDiv button").remove();
				$("#procurementBoardPaperDiv").append('<button type="button" id="btnMore"  class="btn btn-success" style="margin-right: 10px" onclick="downloadboardpaper('+res.responseJSON.TenderId+')">View Board Paper</button>');
				
				$("#cappexFileDiv button").remove();
				$("#cappexFileDiv").append('<button type="button" id="btnMore"  class="btn btn-success" style="margin-right: 10px" onclick="downloadcappexfile('+res.responseJSON.TenderId+')">Cappex File</button>');
				
				$("#oppexFileDiv button").remove();
				$("#oppexFileDiv").append('<button type="button" id="btnMore"  class="btn btn-success" style="margin-right: 10px" onclick="downloadoppexfile('+res.responseJSON.TenderId+')">Oppex File</button>');
				
				$("#memoFileDiv button").remove();
				$("#memoFileDiv").append('<button type="button" id="btnMore"  class="btn btn-success" style="margin-right: 10px" onclick="downloadmemofile('+res.responseJSON.TenderId+')">Memo File</button>');
				
			
			
	});
	
	getAsyncData('/po/get-terms-and-condions-for-issue-po-page/'+$tenderId, function(res) {
	    console.log(res);
	    console.log(res.responseJSON.data);
	    
	     $("#termsAndConditionsDiv input").remove();
		 $("#termsAndConditionsDiv label").remove();
		 $("#termsAndConditionsDiv div").remove();
	     for (let trmAndCon of res.responseJSON.data) {
	        
			$("#termsAndConditionsDiv").append('<div class="form-group row">'+
						'<label for="inputPassword3" class="col-sm-4 control-label"> '+trmAndCon.termsAndCon+''+
							'</label>'+
							'<div class="col-sm-8">'+
								'<input id="'+trmAndCon.trmAndConWithoutSpace+'" name="warranty" type="text"'+
									'class="form-control" required="required" >'+
							'</div>'+	
					'</div>');
			arrTermsAndCon.push(trmAndCon.trmAndConWithoutSpace);	
			arrTermsAndConIds.push(trmAndCon.termsAndConditionId);
			arrTermsAndConTransIds.push(trmAndCon.trmAndConTrnsId);
	    }
			
	});
	$('#forHide').show()
	console.log(arrTermsAndCon);
})
	
function getMore(data){
	
	getAsyncData("/rfp/rfpdetail/"+data, function(res) {
				let row = "";
				let table = "";
				$("#rfpDetailsResponses td").remove();
				var n = 1;
				for(var i in res.responseJSON.data){
					
					
					row = `<tr>
								<td>${[n]}</td>
								<td>${res.responseJSON.data[i].rfpHeaderName } </td>
								<td>${res.responseJSON.data[i].rfpDetailsName } </td>
								
							</tr>`
					table = $('#rfpDetailsResponses').find('tbody')
					table.append(row);
					
					n++;
				}
				
				str = JSON.stringify(res);
				console.log("Approve response- "+str);
				//console.log("Approve response 111- "+res);
				console.table(res.responseJSON.data);
		
	});
	
	$('#mdl_issue_invoice').modal('toggle');
}

function downloadboardpaper(tenderid){
	
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink)
	window.open(globlelink+"/procurement/board-paper-download/"+tenderid);
	
}

function downloadcappexfile(tenderid){
	
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink)
	window.open(globlelink+"/procurement/cappex-file-download/"+tenderid);
	
}

function downloadoppexfile(tenderid){
	
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink)
	window.open(globlelink+"/procurement/oppex-file-download/"+tenderid);
	
}

function downloadmemofile(tenderid){
	
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink)
	window.open(globlelink+"/procurement/memo-file-download/"+tenderid);
	
}

function fileValidationBatchFile() {
            var fileInput =
                document.getElementById('m_batchfile');
             
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


$('#submit_button').on('click', function() {

	 var status = 0;
	
	/*if ($('#poNumber').val().length==0) {
		status+=1;
		$('#poNumber').parent().parent().addClass('has-error')
	}*/
	if ($('#qty').val().length==0) {
		status+=1;
		$('#qty').parent().parent().addClass('has-error')
	}
	if ($('#m_batchfile').val().length==0) {
		status+=1;
		$('#m_batchfile').parent().parent().addClass('has-error')
	}
	if ($('#supplierId').val().length==0) {
		status+=1;
		$('#supplierId').parent().parent().addClass('has-error')
	}
	if ($('#tenderId').val().length==0) {
		status+=1;
		$('#tenderId').parent().parent().addClass('has-error')
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
		const arrTermsAndConValues=[];
		
		console.log("inside insert- "+arrTermsAndConValues);
		var contract = {
				/*"mPoNo" : $('#poNumber').val(),*/
				"qty" : $('#qty').val(),
				"supplierId" : $('#supplierId').val(),
				"tenderId" : $('#tenderId').val(),
				"rfpId" : $('#rfp_no').val(),
				"TenderSubmissionId" : $('#TenderSubmissionId').val(),
				"unitPriceLkr" : $('#unitPriceLkr').val(),
				
				
			};
			for (let trmAndConIds of arrTermsAndCon) {
				var values = "#"+trmAndConIds
				arrTermsAndConValues.push($(values).val())
				contract[trmAndConIds]=$(values).val()
			}
			
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
						var responseCode =  differentialAsync("/po/addtopo", contract,[$('#m_batchfile')[0]], confirmedCallBack)
				  		
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
			
		   $('#poForm').hide();
		  getTenders();

		   Swal.fire(
				      'Accepted!',
				      'Issue PO has been created successfully.',
				      'success'
				    )
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Issue PO creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	    
}