
$(document).ready(function() {

	  $('#ex_closing_date').datepicker({
		autoclose: true
	  });

$('#tenExtend_tenderid').select2({
		placeholder: 'Select a Tender No'
	});

 getAsyncData('/tender/tenderID', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		  $('#tenExtend_tenderid').append(new Option('Select a tender no', ''))
		  for (let item of res.responseJSON) {
			  $('#tenExtend_tenderid').append(new Option(item.bidno+" - "+ item.tendername, item.trnderid))
		}
	});
});



$('#ex_closing_date').on('focusout', function() {
	changeClass('#ex_closing_date');
});

$('#ex_closing_time').on('focusout', function() {
	changeClass('#ex_closing_time');
});



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


function changeClass(hashtag) {
	if ($(hashtag).val().length > 0) {
		$(hashtag).parent().parent().addClass('has-success')
		$(hashtag).parent().parent().removeClass('has-error')
	}else{
		$(hashtag).parent().parent().addClass('has-error')
		$(hashtag).parent().parent().removeClass('has-success')
	}
}

function changeClassUpload(hashtag) {
	if ($(hashtag).val().length > 0) {
		$(hashtag).parent().parent().parent().addClass('has-success')
		$(hashtag).parent().parent().parent().removeClass('has-error')
	} else {
		$(hashtag).parent().parent().parent().addClass('has-error')
		$(hashtag).parent().parent().parent().removeClass('has-success')
	}
}


$('#submit_btn').on('click', function() {

	$('#ex_closing_time').val();
	
	if (!$('#acceptTerms').prop("checked")) {
		Swal.fire(
			'Confirm',
			'Please confirm the tender creation!',
			'warning'
		);
	}
	
	var status = 0;

	if ($('#ex_closing_date').val().length == 0) {
		status += 1;
		$('#ex_closing_date').parent().parent().addClass('has-error')
	}
	if ($('#ex_closing_time').val().length==0) {
		status+=1;
		$('#ex_closing_time').parent().parent().addClass('has-error')
	}

	console.log('Clicked');

	if (status != 0) {
		Swal.fire(
			'Missing',
			'Please check the required fields!',
			'warning'
		);
	} else {
		console.log('All Fine');

		var textend = {
			"tenderId": $('#tenExtend_tenderid').val(),
			"closingdate": Date.parse($('#ex_closing_date').val()),
			"closingtime": $('#ex_closing_time').val(),
		};

		console.log(JSON.stringify(textend));

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
 //getAsyncDataPUT
//getAsyncDataPOST
				var responseCode = getAsyncDataPUT("/tender/tenderextend", textend, confirmedCallBack)
				$(this).prop("disabled", true);
				
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


function confirmedCallBack(responseCode) {
	console.log(responseCode);
	$("#submit_btn").prop("disabled", false);

	if (responseCode.responseText != null) {
		formclear();
		Swal.fire({
			  type: 'success',
			  title: 'Tender Extend has been successfully.',
			})
	}else {
		console.log(responseCode.responseText);
		Swal.fire({
			type: 'error',
			title: 'Tender Extend failed',
			text: 'Error occured !',
			footer: '<a href>Supplier Management V1.0</a>'
		});
	}
}


function formclear() {
		$('#tenExtend_tenderid').val('').trigger("change");
		$('#ex_closing_date').val('');
		$('#ex_closing_time').val('');
	}



