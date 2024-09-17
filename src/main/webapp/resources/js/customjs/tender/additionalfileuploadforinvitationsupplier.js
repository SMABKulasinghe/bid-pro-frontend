//$('#eveCommitteeTable').hide();

$(document).ready(function() {
	tbl_committee = undefined;
	
	  $('#reg_date').datepicker({
	      autoclose: true
	    });

	$('#tenderid').select2({
		placeholder: 'Select a Tender No'
	});
	
	$('#tenderid_com_tbl').select2({
		placeholder: 'Select a Tender No'
	});
	
	tblTenderDetails = undefined;
	
	
 	getAsyncData('/tender/closed-tenders', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		$('#tenderid').append(new Option('Select a tender no', ''))
		for (let item of res.responseJSON.data) {
			$('#tenderid').append(new Option(item.tBidNumber+" - "+ item.tenderName, item.tenderId))
		}
		
	});
	
	getAsyncData('/tender/closed-tenders', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		$('#tenderid_com_tbl').append(new Option('Select a tender no', ''))
		for (let item of res.responseJSON.data) {
			$('#tenderid_com_tbl').append(new Option(item.tBidNumber+" - "+ item.tenderName, item.tenderId))
		}
		
	});
	
});



$('#create_button').on('click', function() {
	
		let count = 1
		if (count == 1) {
			getAsyncData("/tender/isexists-financial/by/" + "tenderidForAdditionalFile" + "/"+ $("#tenderid").val(), existsCallBack);
		}
		if ($('#tenderid').val()=='empty') {
		status+=1;
		$('#tenderid').parent().parent().addClass('has-error')
		}
		else{
		$('#tenderid').parent().parent().addClass('has-success')
		}
		if ($('#tenderid').val()=='empty') {
		status+=1;
		$('#noteNFileNames').parent().parent().addClass('has-error')
		}
		else{
		$('#noteNFileNames').parent().parent().addClass('has-success')
		}
	
		console.log('Clicked');
	
	var add = {
		"tenderID" : $('#tenderid').val(),
		"noteAndFileNames" : $('#noteNFileNames').val(),
	};
		
		console.log(JSON.stringify(add));
		
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
					  
						var	 responseCode = getAsyncDataPOST("/tender/additional-file-upload-invitation-for-supplier",add,confirmedCallBack)
						
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
});

$("body").on('change', '#tenderid_com_tbl', function(e) {
	
	let tender_id = $(this).val();
	
	if(tblTenderDetails == undefined){
		console.log("5");
		tblTenderDetails = $('#tblTenderDetails').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			
			
			ajax: {
			   	url:globalUrl+"/tender/supplier-additinal-file-download/"+tender_id,
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 
			    	 {"data":"index",},		 
					 {"data":"companyName"},
					
					 {"data":"additionalTenderId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							
							if(row.fileUploadStatus == 24){
								return '<button type="button" class="btn btn-success" style="margin-right: 10px" onclick="fileDownload('+data+')">Download<br> Files</button>'
							}else if(row.fileUploadStatus == 23){
								return '<span class="badge badge-success">Not submitted</span>'
							}
							
							
						  },
					},
					 
					
			     ],
			order: [[1, 'asc']],
			//pageLength : 5,
			
    		
		})
		
		}else{
			console.log("Else part");
			
			tblTenderDetails.ajax.url(globalUrl+"/tender/supplier-additinal-file-download/"+tender_id).load();
			
		}
	
});

function fileDownload(data){
	
	var additionalFile = data
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink+"/tender/supplier-additinal-file-download-to-pc/"+additionalFile);
	window.open(globlelink+"/tender/supplier-additinal-file-download-to-pc/"+additionalFile);
}

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

function existsCallBack(res) {
	console.log(res);

	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "tenderidForAdditionalFile") {
		console.log(res.responseText);
		$('#tenderid').val("");
		$('#noteNFileNames').val("");
		Swal.fire({
			type : 'error',
			title : 'Please use a different Tender Number*',
			text : 'Tender Number is already taken !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
	} 
	
}

function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);
	    
	   if(responseCode.responseText == "00"){
		   Swal.fire(
				      'Accepted!',
				      'Additional File Upload Invitations sended Successfully',
				      'success'
				    )			
	  //tbl_committee.ajax.url(globalUrl + "/rfp/rfp-committeeview/"+selectedTendderIDfor).load();	
	   
	   }else{
		   Swal.fire({
				type: 'error',
				title: 'Additional File Upload Invitations sending Failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   
	}
	   formclear();
}	



function formclear() {
	console.log("formclear");
	$('#tenderid').val('').trigger("change");
	$('#committee_member').val('').trigger("change");
	//$('#ems_tenderid').find('option').remove().end();
}

/*let count = 1;
	if(count == 1){
		getAsyncData("/procurement/isexists/by/" +$("#committee_member").val()+"/"+$("#proc_tenderid").val(), existsCallBack);
	}*/