
$(document).ready(function() {
	
	  $('#reg_date').datepicker({
	      autoclose: true
	    });

$('#mit_tenderid').select2({
		placeholder: 'Select a Tender No'
	});

 getAsyncData('/evaluation/trnderID', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		  $('#mit_tenderid').append(new Option('Select a tender no', ''))
		  for (let item of res.responseJSON) {
			  $('#mit_tenderid').append(new Option(item.bidno+" - "+ item.tendername, item.trnderid))
		}
	});
});



function fileValidationFileUpload() {
            var fileInput =
                document.getElementById('inputImage_File');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
             //       /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
						/(\.pdf)$/i;

			//var allowedExtensionsPdf = /()$/i;
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
			//		title: "Please use Image or PDF",
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


function getAsyncDataNosecurty(url,callBackName) {	
	console.log(globalUrl + url);	
		$.ajax({
			url : globalUrl + url,
			contentType : "application/json",			
			type : 'GET',
			dataType : "json",
			complete: function(xhr, textStatus) {
				if (xhr.readyState == 4) {
					 if(callBackName!=null){
						 callBackName(xhr);
					 }
					 
				}         
		    },
		});
}


$("body").on('click', '#mit_submit_button', function(e){
	console.log("Clicked submit button");
	
	if ($('#description').val().length==0) {
		status+=1;
		$('#description').parent().parent().addClass('has-error')
	}

var status = 0;

	if ($('#inputImage_logo').val()=='empty') {
		status+=1;
		$('#inputImage_logo').parent().parent().addClass('has-error')
	}else{
		$('#inputImage_logo').parent().parent().addClass('has-success')
	}
	if ($('#description').val()=='empty') {
		status+=1;
		$('#description').parent().parent().addClass('has-error')
	}else{
		$('#description').parent().parent().addClass('has-success')
	}
	
	console.log('Clicked');
	
	var inputImageFile = document.getElementById('inputImage_File');
	
	var files = inputImageFile.files;
	
	if(files.length==0){
            Swal.fire(
				  'Missing',
				  'Please check the required fields!',
				  'warning'
				);
            return false;
        }
		
		var  mitDetails= {
				"tenderID" : $('#mit_tenderid').val(),
				"description" : $('#description').val(),
		};
		
		console.log(JSON.stringify(mitDetails));
		
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
					
						var responseCode =  differentialAsync("/evaluation/enterMitDetails", mitDetails,[$('#inputImage_logo')[0],
						$('#inputImage_File')[0]],confirmedCallBack)
						$(this).prop("disabled",true);
						
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
});


function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#mit_submit_button").prop("disabled",false);
	    
	   if(responseCode.responseJSON!= null & responseCode.responseJSON.code=="00"){
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'MIT Details has been successfully.',
				      'success'
				    )		
	   }else{
		   console.log(responseCode.responseJSON);
		   Swal.fire({
				type: 'error',
				title: 'MIT details failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 	    
}


function changeClass(hashtag) {
	if ($(hashtag).val().length > 0) {
		$(hashtag).parent().parent().addClass('has-success')
		$(hashtag).parent().parent().removeClass('has-error')
	}else{
		$(hashtag).parent().parent().addClass('has-error')
		$(hashtag).parent().parent().removeClass('has-success')
	}
}


$('#description').on('focusout', function() {
	changeClass('#description');	
});



function formclear() {
	console.log("formclear");
	$('#mit_tenderid').val('').trigger("change");
	$('#inputImage_logo').val('');
	$('#inputImage_File').val('');
	$('#description').val('');
}





