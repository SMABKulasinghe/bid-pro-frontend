$('#procurementVote').hide()
$(document).ready(function() {
	tbl_committee = undefined;
	
	procVoteTable = undefined;
	
	  $('#reg_date').datepicker({
	      autoclose: true
	    });

$('#proc_tenderid').select2({
		placeholder: 'Select a Tender No'
	});

 getAsyncData('/procurement/tenderid', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		  $('#proc_tenderid').append(new Option('Select a tender no', ''))
		  for (let item of res.responseJSON) {
			  $('#proc_tenderid').append(new Option(item.bidno+" - "+ item.tendername, item.trnderid))
		}
	});
});


$('#committee_member').select2({
		placeholder: 'Select a Committee Member'
	});

 getAsyncData('/procurement/committeememberId', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		  $('#committee_member').append(new Option('Select a committee member', ''))
		  for (let item of res.responseJSON) {
			  $('#committee_member').append(new Option(item.companyCode+" - "+ item.userid, item.userid))
		}
});

$('#procVoteTender').select2({
		placeholder: 'Select a Tender No'
	});

 getAsyncData('/procurement/tenderid', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		//$('#procVoteTender').val('').trigger("change");
		  $('#procVoteTender').append(new Option('Select a tender no', ''))
		  for (let item of res.responseJSON) {
			  $('#procVoteTender').append(new Option(item.bidno+" - "+ item.tendername, item.trnderid))
		}
	});


$('#committee_member').on('focusout',function() {
	if ($("#committee_member").val() == "") {

	} else { 
				
		getAsyncData("/procurement/isexists/by/" +$("#committee_member").val()+"/"+$("#proc_tenderid").val(), existsCallBack);
				
	}

});



function existsCallBack(res) {
	console.log(res);

	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "procCom") {
		console.log(res.responseText);
		
		formclear();   
		
		Swal.fire({
			type : 'error',
			title : 'Please use a different Tender number and Committee member*',
			text : 'Tender number and Committee member is already taken !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
	} 
	
}
/*$('#supplier_name').select2({
		placeholder: 'Select a Committee Member'
	});*/

/* getAsyncData('/procurement/supplierId', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		  $('#supplier_name').append(new Option('Select a supplier', ''))
		  for (let item of res.responseJSON) {
			  $('#supplier_name').append(new Option(item.companyCode+" - "+ item.userid, item.userid))
		}
});*/

function fileValidation1(){
            var fileInput =
                document.getElementById('upload_support_doc1');
             
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

function fileValidationCompany2() {
            var fileInput =
                document.getElementById('upload_support_doc2');
             
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

function fileValidationCompany3() {
            var fileInput =
                document.getElementById('upload_support_doc3');
             
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


$('#create_button').on('click', function() {
	
	let count = 1;
	if(count == 1){
		getAsyncData("/procurement/isexists/by/" +$("#committee_member").val()+"/"+$("#proc_tenderid").val(), existsCallBack);
	}
	
	if ($('#proc_tenderid').val().length==0) {
		status+=1;
		$('#proc_tenderid').parent().parent().addClass('has-error')
	}
	if ($('#committee_member').val().length==0) {
		status+=1;
		$('#committee_member').parent().parent().addClass('has-error')
	}
	
	if (status != 0) {
		Swal.fire(
				  'Missing',
				  'Please check the required fields is empty!',
				  'warning'
				);
	}else{
		
			console.log('Clicked');
	
	var committee = {
		"tenderID" : $('#proc_tenderid').val(),
		"committeeMember" : $('#committee_member').val(),
	};
		
		console.log(JSON.stringify(committee));
		
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
					  
					/*	var	 responseCode = getAsyncDataPOST("/procurement/add-procurement-committee",committee,confirmedCallBack)
				 		if(responseCode == undefined){
					*/
					
					  var responseCode = differentialAsync("/procurement/add-procurement-committee", committee, [$('#upload_support_doc1')[0], $('#upload_support_doc2')[0], $('#upload_support_doc3')[0]], confirmedCallBack)
					  $(this).prop("disabled", true);
					  
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
	if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		
		Swal.fire(
			'Accepted!',
			'Procurement committee has been created successfully.',
			'success'
		)
	formclear();   
	 }else{
		 console.log(responseCode.responseText);
		 Swal.fire({
			type: 'error',
			title: 'Procurement committee creation failed',
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


$("body").on('change', '#procVoteTender', function(e){
	
	
	//loadMyTable($("#tenderIddd").val());
	
	var $tenderId= $(this).val();
	
	
	if(procVoteTable == undefined){
		console.log("5");
		procVoteTable = $('#procurementVote').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			
			
			ajax: {
			   	url:globalUrl+"/procurement/voting-details/"+$tenderId,
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 
			    	 {"data":"index",},
					 
					 {"data":"supplierName"},
					 {"data":"userName"},
					 {"data":"procComId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.voteStatus == 19){
								return '<span class="badge badge-success">To vote</span>'
							}else if(row.voteStatus == 18){
								//return '<button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="active('+data+')">Already voted</button>'
								return '<span class="badge badge-primary">Voted</span>'
							}else if(row.voteStatus == 20){
								//return '<button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="active('+data+')">Already voted</button>'
								return '<span class="badge badge-danger">Rejected vote</span>'
							}
							  
							  
						  },	
					},
					
			     ],
			order: [[1, 'asc']],
			//pageLength : 5,
			
    		
		})
		
		}else{
			console.log("Else part");
			
			procVoteTable.ajax.url(globalUrl+"/procurement/voting-details-and-voting/"+$tenderId).load();
			
		}
		$('#procurementVote').show()
});

