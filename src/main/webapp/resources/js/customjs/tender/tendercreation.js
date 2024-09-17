$(document).ready(function() {

	console.log('Tender Creation Ready');

	$('#closing_date').datepicker({
		autoclose: true
	});
	
   /*if (!$('#acceptTerms').prop("checked")) {
		document.getElementById("submit_button").disabled = true;
	}
	else {
		document.getElementById("submit_button").disabled = false;
	}
	*/
});



$('#tendername').on('focusout', function() {
	changeClass('#tendername');
});

$('#bid_no').on('focusout', function() {
	changeClass('#bid_no');	
}); 

$('#tender_description').on('focusout', function() {
	changeClass('#tender_description');
});

$('#closing_date').on('focusout', function() {
	changeClass('#closing_date');
});

$('#closing_time_1').on('focusout', function() {
	changeClass('#closing_time_1');
});

$('#cordinate_name').on('focusout', function() {
	changeClass('#cordinate_name');
});

$('#cordinate_destination').on('focusout', function() {
	changeClass('#cordinate_destination');
});

$('#cordinate_email').on('focusout', function() {
	changeClass('#cordinate_email');
});

$('#cordinate_phon').on('focusout', function() {
	changeClass('#cordinate_phon');
});

$('#cordinate2_name').on('focusout', function() {
	changeClass('#cordinate2_name');
});

$('#cordinate2_destination').on('focusout', function() {
	changeClass('#cordinate2_destination');
});

$('#cordinate2_email').on('focusout', function() {
	changeClass('#cordinate2_email');
});

$('#cordinate2_phon').on('focusout', function() {
	changeClass('#cordinate2_phon');
});
/*
$('#upload_rpf').on('focusout', function() {
	changeClassUpload('#upload_rpf');
});*/

$('#upload_support1').on('focusout', function() {
	changeClassUpload('#upload_support1');
});

$('#upload_support2').on('focusout', function() {
	changeClassUpload('#upload_support2');
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
/* getAsyncData('/rfp', function(res) {
		//  $('#productCategory').append(new Option('Select a rfp file', ''))
		  for (let item of res.responseJSON) {
			  $('#rfp_id').append(new Option(item.fileName, item.rfpID))
		  }
		  
	  });*/
	  
  getAsyncData('/category', function(res) {
			$('#eligible_category').select2({
		    	placeholder: 'Select a Category'
			});
		  for (let item of res.responseJSON) {
			  $('#eligible_category').append(new Option(item.eligibleCategortName, item.eligibleCategortID))
		  }
	  });
	  
function loadRFPForCategory(catID,subCatId) {
	
	
}
	  
$("body").on('change', '#eligible_category', function(e){
	console.log($(this).val());
	
	$('#tender_productSubCategory').select2({
    	placeholder: 'Select a Sub Category'
	});
	
	let catid = $(this).val();
	
	getAsyncData('/tender/sub-category/'+catid, function(res) {
	    console.log(res);
	    console.log(res.responseJSON.data);
	    	$('#tender_productSubCategory').find('option').remove().end();
	      $('#tender_productSubCategory').append(new Option('Select a tender no', ''))
	      for (let cat of res.responseJSON) {
			$('#tender_productSubCategory').append(new Option(cat.eligibleSubcatname,cat.eligibleSubcatId))
	    }
	});
	
	// load RFP for the selected category
	//loadRFPForCategory(this.value,('#tender_productSubCategory').val());
	
});

$("body").on('change', '#tender_productSubCategory', function(e){
	
	var catId = $('#eligible_category').find(":selected").val();
	//let catId = ('#eligible_category').val()
	//alert("CatId -"+catId)
	getAsyncData('/rfp/categoryID/'+catId+"/"+$(this).val(), function(res) {
		//  $('#productCategory').append(new Option('Select a rfp file', ''))
		$('#rfp_id').find('option').remove().end();
		  for (let item of res.responseJSON) {
			  $('#rfp_id').append(new Option(item.fileName+" - "+ item.rfpNo, item.rfpID))
			
		  }
		  
	  });

});
	
/*$("body").on('change', '#tender_productSubCategory', function(e){
		
	console.log($(this).val());
	
	$('#productlist').find('option').remove().end();
	
	getAsyncData('/category/'+this.value+'/subcategory/'+this.value+'/product', function(res) {
		
		console.log(res);
		
			
		  for (let item of res.responseJSON) {
			$('#productlist').find('option').remove().end();
			  $('#productlist').append(new Option(item.eligibleSubcatProddescription, item.eligiblesubcatProdid))
		}
		
		  $( "#productlist" ).prop( "disabled", false );
		  
	});
});*/
	
	$('#bid_no').on(
		'focusout',
		function() {
			console.log($("#bid_no").val());
			
			if ($("#bid_no").val() == "") {


			
			} else {
				
				getAsyncData("/tender/isexists/by/" + "bidno" + "/"+ $('#bid_no').val(), existsCallBack);
				
			}

});



$('#cordinate_phon').on(
		'focusout',
		function() {
			console.log($("#cordinate_phon").val());
			
			if ($("#cordinate_phon").val() == "") {


			
			} else {
				
				//getAsyncData("/tender/isexists/by/" + "cordinator1contactno" + "/"+ $('#cordinate_phon').val(), existsCallBack);
				
			}

});

$('#cordinate_email').on(
		'focusout',
		function() {
			console.log($("#cordinate_email").val());
			
			if ($("#cordinate_email").val() == "") {


			
			} else {
				
				//getAsyncData("/tender/isexists/by/" + "cordinator1email" + "/"+ $('#cordinate_email').val(), existsCallBack);
				
			}

});

$('#cordinate2_phon').on(
		'focusout',
		function() {
			console.log($("#cordinate2_phon").val());
			
			if ($("#cordinate2_phon").val() == "") {


			
			} else {
				
				//getAsyncData("/tender/isexists/by/" + "cordinator2contactno" + "/"+ $('#cordinate2_phon').val(), existsCallBack);
				
			}

});

$('#cordinate2_email').on(
		'focusout',
		function() {
			console.log($("#cordinate2_email").val());
			
			if ($("#cordinate2_email").val() == "") {


			
			} else {
				
				//getAsyncData("/tender/isexists/by/" + "cordinator2email" + "/"+ $('#cordinate2_email').val(), existsCallBack);
				
			}

});

function validatePhoneNo(phone){
	var isValid = /^(\+\d{2,4})?\s?(\d{10})$/.test(phone);
	return isValid;
}
function validateEmail(email){
	var isValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	return isValid;
}

$('#cordinate_phon').on(
		'focusout',
		function() {
			console.log($("#cordinate_phon").val());

			if ($("#cordinate_phon").val() == "") {

			} else {
				var bol = validatePhoneNo($("#cordinate_phon").val());
				console.log(bol);
				if (!bol) {
					//$('#phone2').val("");
					Swal.fire({
						
						type : 'error',
						title : 'Invalid Phone Number format',
						text : 'Please enter a valid phone number!',
						
					});
				} 
				else{
					//console.log("dfa");
					//getAsyncDataNosecurty("/tender/isexists/by/" + "cordinator1contactno" + "/"
					//		+ $('#cordinate_phon').val(), existsCallBack);
					
				}
			}

});

$('#cordinate_email').on(
		'focusout',
		function() {
			console.log($("#cordinate_email").val());

			if ($("#cordinate_email").val() == "") {

			} else {
				var bol = validateEmail($("#cordinate_email").val());
				console.log(bol);
				if (!bol) {
					//$('#phone2').val("");
					Swal.fire({
						
						type : 'error',
						title : 'Invalid email',
						text : 'Please enter a valid email address!',
						
					});
					$(this).parent().parent().addClass('has-error')
					$(this).parent().parent().removeClass('has-success')
				}else{
					//console.log("dfa");
					//getAsyncDataNosecurty("/tender/isexists/by/" + "cordinator1email" + "/"
						//	+ $('#cordinate_email').val(), existsCallBack);
				}
			}

});

$('#cordinate2_phon').on(
		'focusout',
		function() {
			console.log($("#cordinate2_phon").val());

			if ($("#cordinate2_phon").val() == "") {

			} else {
				var bol = validatePhoneNo($("#cordinate2_phon").val());
				console.log(bol);
				if (!bol) {
					//$('#phone2').val("");
					Swal.fire({
						
						type : 'error',
						title : 'Invalid Phone Number format',
						text : 'Please enter a valid phone number!',
						
					});
				} 
				else{
					//console.log("dfa");
					//getAsyncDataNosecurty("/tender/isexists/by/" + "cordinator2contactno" + "/"
						//	+ $('#cordinate2_phon').val(), existsCallBack);
					
				}
			}

});

$('#cordinate2_email').on(
		'focusout',
		function() {
			console.log($("#cordinate2_email").val());

			if ($("#cordinate2_email").val() == "") {

			} else {
				var bol = validateEmail($("#cordinate2_email").val());
				console.log(bol);
				if (!bol) {
					//$('#phone2').val("");
					Swal.fire({
						
						type : 'error',
						title : 'Invalid email',
						text : 'Please enter a valid email address!',
						
					});
					$(this).parent().parent().addClass('has-error')
					$(this).parent().parent().removeClass('has-success')
				}else{
					//console.log("dfa");
					//getAsyncDataNosecurty("/tender/isexists/by/" + "cordinator2email" + "/"
					//		+ $('#cordinate2_email').val(), existsCallBack);
				}
			}

});


	
function existsCallBack(res) {
	console.log(res);
	
	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "bidno") {
		console.log(res.responseText);
		$('#bid_no').val("");
		Swal.fire({
			type : 'error',
			title : 'Please use a different Tender Number*',
			text : 'Tender Number is already taken !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
	}
	
	/*	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
		//	        && res.responseJSON.idtype == "bidno" || res.responseJSON != null && res.responseJSON.msg == false
		&& res.responseJSON.idtype == "bidno") {
		console.log(res.responseText);
		$('#bid_no').val("");
		Swal.fire({
			type: 'error',
			title: 'Please use a different Tender ID*',
			text: 'Tender ID is already taken !',
			footer: '<a href>Supplier Portal V1.0</a>'
		});
		$('#bid_no').parent().parent().removeClass('has-success')
		$('#bid_no').parent().parent().addClass('has-error')
	}
	else {
		$('#bid_no').parent().parent().addClass('has-success')
		$('#bid_no').parent().parent().removeClass('has-error')
	}
	
	  if (res.responseJSON != null && res.responseJSON.msg == true
	//	&& res.responseJSON.idtype == "cordinator1contactno" || res.responseJSON != null && res.responseJSON.msg == false
		&& res.responseJSON.idtype == "cordinator1contactno") {

		if (res.responseJSON.msg == true) {
			console.log(res.responseText);
			$('#cordinate_phon').val("");
			Swal.fire({
				type: 'error',
				title: 'Mobile number already used*',
				text: 'Please use a different mobile no !',
				footer: '<a href>Supplier Portal V1.0</a>'
			});
			$('#cordinate_phon').parent().parent().removeClass('has-success')
			$('#cordinate_phon').parent().parent().addClass('has-error')
		} else {
			$('#cordinate_phon').parent().parent().addClass('has-success')
			$('#cordinate_phon').parent().parent().removeClass('has-error')
		}

	} else if (res.responseJSON != null && res.responseJSON.msg == true
		&& res.responseJSON.idtype == "cordinator1email") {
		console.log(res.responseText);
		$('#cordinate_email').val("");
		Swal.fire({
			type: 'error',
			title: 'Please use a different Email*',
			text: 'This email address is associated with another user !',
			footer: '<a href>Supplier Portal V1.0</a>'
		});
		$('#cordinate_email').parent().parent().removeClass('has-success')
		$('#cordinate_email').parent().parent().addClass('has-error')
	} else {
		$('#cordinate_email').parent().parent().addClass('has-success')
		$('#cordinate_email').parent().parent().removeClass('has-error')
	}
	 if (res.responseJSON != null && res.responseJSON.msg == true
	//	&& res.responseJSON.idtype == "mobile_no" || res.responseJSON != null && res.responseJSON.msg == false
		&& res.responseJSON.idtype == "cordinator2contactno")  {

		if (res.responseJSON.msg == true) {
			console.log(res.responseText);
			$('#cordinate2_phon').val("");
			Swal.fire({
				type: 'error',
				title: 'Mobile number already used*',
				text: 'Please use a different mobile no !',
				footer: '<a href>Supplier Portal V1.0</a>'
			});
			$('#cordinate2_phon').parent().parent().removeClass('has-success')
			$('#cordinate2_phon').parent().parent().addClass('has-error')
		} else {
			$('#cordinate2_phon').parent().parent().addClass('has-success')
			$('#cordinate2_phon').parent().parent().removeClass('has-error')
		}


	} else if (res.responseJSON != null && res.responseJSON.msg == true
		&& res.responseJSON.idtype == "cordinator2email") {
		console.log(res.responseText);
		$('#cordinate2_email').val("");
		Swal.fire({
			type: 'error',
			title: 'Please use a different Email*',
			text: 'This email address is associated with another user !',
			footer: '<a href>Supplier Portal V1.0</a>'
		});
		$('#cordinate2_email').parent().parent().removeClass('has-success')
		$('#cordinate2_email').parent().parent().addClass('has-error')
	} else {
		$('#cordinate2_email').parent().parent().addClass('has-success')
		$('#cordinate2_email').parent().parent().removeClass('has-error')
	}

}
*/

	/* else if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "cordinator1contactno") {
		console.log(res.responseText);
		$('#cordinate_phon').val("");
		Swal.fire({
			type : 'error',
			title : 'User already exists for this NIC*',
			text : 'NIC is used !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
		
		} else if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "cordinator1email" || res.responseJSON != null && res.responseJSON.msg == false
			&& res.responseJSON.idtype == "cordinator1email" ) {
		
		if( res.responseJSON.msg == true){
			console.log(res.responseText);
			$('#cordinate_email').val("");
			Swal.fire({
				type : 'error',
				title : 'Mobile number already used*',
				text : 'Please use a different mobile no !',
				footer : '<a href>Supplier Portal V1.0</a>'
			});
			$('#cordinate_email').parent().parent().removeClass('has-success')
			$('#cordinate_email').parent().parent().addClass('has-error')
		}else{
			$('#cordinate_email').parent().parent().addClass('has-success')
			$('#cordinate_email').parent().parent().removeClass('has-error')
		}
		
	} else if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "cordinator2contactno" || res.responseJSON != null && res.responseJSON.msg == false
			&& res.responseJSON.idtype == "cordinator2contactno" ) {
		
		if( res.responseJSON.msg == true){
			console.log(res.responseText);
			$('#cordinate2_phon').val("");
			Swal.fire({
				type : 'error',
				title : 'Mobile number already used*',
				text : 'Please use a different mobile no !',
				footer : '<a href>Supplier Portal V1.0</a>'
			});
			$('#cordinate2_phon').parent().parent().removeClass('has-success')
			$('#cordinate2_phon').parent().parent().addClass('has-error')
		}else{
			$('#cordinate2_phon').parent().parent().addClass('has-success')
			$('#cordinate2_phon').parent().parent().removeClass('has-error')
		}
		
		
	} else if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "cordinator2email") {
		console.log(res.responseText);
		$('#cordinate2_email').val("");
		Swal.fire({
			type : 'error',
			title : 'Please use a different Email*',
			text : 'This email address is associated with another user !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
		$('#cordinate2_email').parent().parent().removeClass('has-success')
		$('#cordinate2_email').parent().parent().addClass('has-error')
	}else{
		$('#cordinate2_email').parent().parent().addClass('has-success')
		$('#cordinate2_email').parent().parent().removeClass('has-error')
	}
*/	
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

function fileValidationCompanyProfile1() {
            var fileInput =
                document.getElementById('upload_support1');
             
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

function fileValidationCompanyProfile2() {
            var fileInput =
                document.getElementById('upload_support2');
             
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

/*	
	var status = 0;
	var uploadSupportDocProfile = document.getElementById('upload_support1');
	var uploadFile = document.getElementById('upload_support2');
	
	var files = uploadSupportDocProfile.files;
	var files = uploadFile.files;
	

	 if(files.length==0){
            Swal.fire(
				  'Missing',
				  'Please check the required fields!',
				  'warning'
				);
            return false;
        }
*/	
	$('#closing_time_1').val();
	//alert($('#closing_time_1').val());
	
	if (!$('#acceptTerms').prop("checked")) {


		Swal.fire(
			'Confirm',
			'Please confirm the tender creation!',
			'warning'
		);

	}
	var status = 0;

	if ($('#tendername').val().length == 0) {
		status += 1;
		$('#tendername').parent().parent().addClass('has-error')
	}

/*	if ($('#bid_no').val().length == 0) {
		status += 1;
		$('#bid_no').parent().parent().addClass('has-error')
	}
*/
	if ($('#tender_description').val().length ==0) {
		status += 1;
		$('#tender_description').parent().parent().addClass('has-error')
	}

	if ($('#closing_date').val().length == 0) {
		status += 1;
		$('#closing_date').parent().parent().addClass('has-error')
	}

	if ($('#closing_time_1').val().length==0) {
		status+=1;
		$('#closing_time_1').parent().parent().addClass('has-error')
	}



	if ($('#cordinate_name').val().length == 0) {
		status += 1;
		$('#cordinate_name').parent().parent().addClass('has-error')
	}

	if ($('#cordinate_destination').val().length == 0) {
		status += 1;
		$('#cordinate_destination').parent().parent().addClass('has-error')
	}

	if ($('#cordinate_email').val().length == 0) {
		status += 1;
		$('#cordinate_email').parent().parent().addClass('has-error')
	}

	if ($('#cordinate_phon').val().length == 0) {
		status += 1;
		$('#cordinate_phon').parent().parent().addClass('has-error')
	}


	if ($('#cordinate2_name').val().length == 0) {
		status += 1;
		$('#cordinate2_name').parent().parent().addClass('has-error')
	}

	if ($('#cordinate2_destination').val().length == 0) {
		status += 1;
		$('#cordinate2_destination').parent().parent().addClass('has-error')
	}

	if ($('#cordinate2_email').val().length == 0) {
		status += 1;
		$('#cordinate2_email').parent().parent().addClass('has-error')
	}

	if ($('#cordinate2_phon').val().length == 0) {
		status += 1;
		$('#cordinate2_phon').parent().parent().addClass('has-error')
	}


    if ($('#rfp_id').val() == 'empty') {
		status += 1;
		$('#rfp_id').parent().parent().addClass('has-error')
	} else {
		$('#rfp_id').parent().parent().addClass('has-success')
	}
	

	if ($('#eligible_category').val() == 'empty') {
		status += 1;
		$('#eligible_category').parent().parent().addClass('has-error')
	} else {
		$('#eligible_category').parent().parent().addClass('has-success')
	}


	/*if ($('#upload_rpf').val() == '') {
		status += 1;
		$('#upload_rpf').parent().parent().parent().addClass('has-error')
	}
*/
/*	if ($('#upload_support1').val() == '') {
		status += 1;
		$('#upload_support1').parent().parent().parent().addClass('has-error')
	}

	if ($('#upload_support2').val() == '') {
		status += 1;
		$('#upload_support2').parent().parent().parent().addClass('has-error')
	}
*/

	console.log('Clicked');

	if (status != 0) {
		Swal.fire(
			'Missing',
			'Please check the required fields!',
			'warning'
		);

	} else {
		console.log('All Fine');

		var tender = {

			"tendername": $('#tendername').val(),
			"bidno": $('#bid_no').val(),
			"tenderdescription": $('#tender_description').val(),
			"qty": $('#qty').val(),
			"rfpid": $('#rfp_id').val(),
			"eligiblecategory": $('#eligible_category').val(),
			"subcategory": $('#tender_productSubCategory').val(),
			//"product": $('#productlist').val(),
			"closingdate": Date.parse($('#closing_date').val()),
			"closingtime": $('#closing_time_1').val(),


			"cordinatename": $('#cordinate_name').val(),
			"cordinatedestination": $('#cordinate_destination').val(),
			"cordinatemail": $('#cordinate_email').val(),
			"cordinatephon": $('#cordinate_phon').val(),
			"cordinate2name": $('#cordinate2_name').val(),
			"cordinate2destination": $('#cordinate2_destination').val(),
			"cordinate2email": $('#cordinate2_email').val(),
			"cordinate2phon": $('#cordinate2_phon').val(),

		};

		console.log(JSON.stringify(tender));

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


				var responseCode = differentialAsync("/tender/addtender", tender, [$('#upload_support1')[0], $('#upload_support2')[0]], confirmedCallBack)
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
	$("#submit_button").prop("disabled", false);


	if (responseCode.responseText != null) {
		formclear();
		Swal.fire({
			  icon: 'success',
			  title: 'Tender has been created successfully.',
			  html:
			    '<input disabled id="swal-input1" class="swal2-input" value="Tender No: '+responseCode.responseText+'">',
			  
			  
			})
		
	} else if(responseCode.responseText != null & responseCode.responseText == "already exists"){
		Swal.fire({
			type: 'error',
			title: 'Tender creation failed',
			text: 'Already created a tender for this Number !',
			footer: '<a href>Supplier Management V1.0</a>'
		});
	}else {
		console.log(responseCode.responseText);
		Swal.fire({
			type: 'error',
			title: 'Tender creation failed',
			text: 'Error occured !',
			footer: '<a href>Supplier Management V1.0</a>'
		});
	}

}

function formclear() {
	//$("#acceptTerms").prop("checked", false);
	$('#tendername').val('');
	$('#bid_no').val('');
	$('#tender_description').val('');
	$('#qty').val('');
	$('#rfpid').val('');
	$('#eligible_category').val('');
	$('#tender_productSubCategory').val('');
	//$('#productlist').val('');
	$('#closing_date').val('');
	$('#closing_time_1').val('');

	//$('#upload_rpf').val('');
	$('#upload_support1').val('');
	$('#upload_support2').val('');
	$('#cordinate_name').val('');
	$('#cordinate_destination').val('');
	$('#cordinate_email').val('');
	$('#cordinate_phon').val('');

	$('#cordinate2_name').val('');
	$('#cordinate2_destination').val('');
	$('#cordinate2_email').val('');
	$('#cordinate2_phon').val('');

}

