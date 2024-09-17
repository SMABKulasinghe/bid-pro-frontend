$('#procurementVote').hide()
$(document).ready(function() {
	
	procVoteTable = undefined;
	
	  $('#reg_date').datepicker({
	      autoclose: true
	    });

$('#board_tenderid').select2({
		placeholder: 'Select a Tender No'
	});

 getAsyncData('/procurement/tenderid', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		  $('#board_tenderid').append(new Option('Select a tender no', ''))
		  for (let item of res.responseJSON) {
			  $('#board_tenderid').append(new Option(item.bidno+" - "+ item.tendername, item.trnderid))
		}
	});
});

function fileValidationBoardProfile() {
            var fileInput =
                document.getElementById('upload_board_papers');
             
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

function fileValidationCappex() {
            var fileInput =
                document.getElementById('upload_cappex_file');
             
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

function fileValidationOppex() {
            var fileInput =
                document.getElementById('upload_oppex_file');
             
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

function fileValidationMemo() {
            var fileInput =
                document.getElementById('upload_memo_file');
             
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

function existsCallBack(res) {
	console.log(res);

	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "boardTenderId") {
		console.log(res.responseText);
		
		formclear();   
		
		Swal.fire({
			type : 'error',
			title : 'Please use a different Tender number*',
			text : 'Tender number is already taken !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
	} 
	
}

$('#board_tenderid').on(
		'focusout',
		function() {

			if ($("#board_tenderid").val() == "") {

			} else { 
				
				getAsyncData("/procurement/isexists-board-papers/by/" +$("#board_tenderid").val(), existsCallBack);
				
			}

});


$('#create_button').on('click', function() {
	var uploadBoardPapers = document.getElementById('upload_board_papers');
	var uploadCappex = document.getElementById('upload_cappex_file');
	var uploadOppex = document.getElementById('upload_oppex_file');
	var uploadMemo = document.getElementById('upload_memo_file');
	var files = uploadBoardPapers.files;
	var files = uploadCappex.files;
	var files = uploadOppex.files;
	var files = uploadMemo.files;
	if(files.length==0){
            Swal.fire(
				  'Missing',
				  'Please check the required fields!',
				  'warning'
				);
            return false;
     }

	let count = 1;
	if(count == 1){
		getAsyncData("/procurement/isexists-board-papers/by/" +$("#board_tenderid").val(), existsCallBack);
	}
	
	if ($('#board_tenderid').val().length==0) {
		status+=1;
		$('#board_tenderid').parent().parent().addClass('has-error')
	}
	
	if (status != 0) {
		Swal.fire(
				  'Missing',
				  'Please check the required fields is empty!',
				  'warning'
				);
	}else{
		
			console.log('Clicked');
	
	var board = {
		"tenderID" : $('#board_tenderid').val(),
		
	};
		
		console.log(JSON.stringify(board));
		
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
						var	responseCode
					  	responseCode =  differentialAsync("/procurement/procurement-board-paper-upload/uploadBoardPapers", board,[$('#upload_board_papers')[0],$('#upload_cappex_file')[0],$('#upload_oppex_file')[0],$('#upload_memo_file')[0]], confirmedCallBack)
						/*responseCode =  postFilesUploadNew("/procurement/procurement-board-paper-upload/uploadCappexFile", board,$('#upload_cappex_file')[0], confirmedCallBack)
						responseCode =  postFilesUploadNew("/procurement/procurement-board-paper-upload/uploadOppexFile", board,$('#upload_oppex_file')[0], confirmedCallBack)
						responseCode =  postFilesUploadNew("/procurement/procurement-board-paper-upload/uploadMemoFile", board,$('#upload_memo_file')[0], confirmedCallBack)*/
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
			text: 'Error occord !',
			footer: '<a href>Supplier Management V1.0</a>'
		});
	  }    
	 
}


function formclear() {
	console.log("formclear");
	$('#board_tenderid').val('').trigger("change");
	$('#upload_board_papers').val('');
	$('#upload_cappex_file').val('');
	$('#upload_oppex_file').val('');
	$('#upload_memo_file').val('');
	
}

function confirmedCallBackForUpdate(responseCode){
	console.log("Response CODE2 "+responseCode.responseText);
	$("#submit_button").prop("disabled",false);
	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'Board paper creation successfully.',
				      'success'
				    )
		
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Board paper creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
}

$("body").on('change', '#procVoteTender', function(e){
	
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
    		
		})
		
		}else{
			console.log("Else part");
			
			procVoteTable.ajax.url(globalUrl+"/procurement/voting-details-and-voting/"+$tenderId).load();
			
		}
		$('#procurementVote').show()
});

