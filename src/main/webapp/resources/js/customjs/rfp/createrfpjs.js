var headingincrement;
var dd;

var table = $('#rfpTable').DataTable({
			aaSorting:[],
			"pageLength": 200,
			"bPaginate": false,
});
		
var arrHeadingNames = [];	
var arrFieldNames = [];	
$(document).ready(function() {
	
	headingincrement=1;
	
	$("#fieldName").click(function(){
		var $fieldname = $('#fieldNamediv').find('input').val();
		/*console.log($fieldname);*/
		if($('#fieldNamediv').find('input').val() == ""){
			Swal.fire('Please fill field name')
		}else{
			$("#addedfiledlist1").append( '<li> <input type="button" class="btn-sm removeaddedfields" value="-">'+ $fieldname+'</li>');
			$('#fieldNamediv').find('input:text').val(''); 
		}		
	});
	
	getAsyncData('/category', function(res) {
		  for (let item of res.responseJSON) {
			  $('#productCategory').append(new Option(item.eligibleCategortName, item.eligibleCategortID))
		  }
	 });

	

	 getAsyncData('/rfp/prID', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		  $('#procurementRequest').append(new Option('Select a Procurement Request', ''))
		  for (let item of res.responseJSON) {
			  $('#procurementRequest').append(new Option(item.requester, item.prID))
		}
	});	


/*	$('#pro_date').datepicker({
		autoclose: true
	});*/
	
	$('#purchase_date').datepicker({
		autoclose: true
	});
});

$("body").on('change', '#productCategory', function(e) {
	
	$('#productSubCategory').select2({
    	placeholder: 'Select a Sub Category'
	});
	
	let catid = $(this).val();
	
	getAsyncData('/tender/sub-category/'+catid, function(res) {
	    console.log(res);
	    console.log(res.responseJSON.data);
	    	$('#productSubCategory').find('option').remove().end();
	      $('#productSubCategory').append(new Option('Select a tender no', ''))
	      for (let cat of res.responseJSON) {
			$('#productSubCategory').append(new Option(cat.eligibleSubcatname,cat.eligibleSubcatId))
	    }
	});
	
});



$("#submit_fields").click(function(){	
		/*nameArray.push($headingName);*/
		var arr = [];		
		let heading = $('#headingNamediv').find('input').val();				
		$('#addedfiledlist1').find('li').each(function(index){			
			/*console.log(index +':'+ $(this).text());*/
			arr.push($(this).text());			
		})	
		
		if(heading == "" || arr.length == 0){
			Swal.fire('Please fill heading and field name')
		}else{
			$headingName = $('#headingNamediv').find('input').val();
			table.row.add([
			$headingName,
			arr,
				'<button class="btn bg-danger pull-center removeField" id="removeField">Remove</button>'
				]			
			).draw();
		}				
		
		$('#addedfiledlist1').empty();
		$('#rfpheadingFields').find('input:text').val(''); 
		/*$("#rfpheadingFields")[0].reset();*/
		//console.log(arr,$headingName);
	
		//$('#MarkSheetTableBody').append("<tr> <td>"+$headingName+"</td><td>"+arr+"</td><td><button class='btn bg-danger pull-center removeField' id='removeField'>Remove</button></td></tr>")	
});

$("body").on('click', '.removeaddedfields', function(e){
	console.log('ok');
	 $(this).closest('li').remove();
});


$("#rfpTable").on('click', '.removeField', function(e){
	$(this).closest('tr').remove();
	var removeRow =  $(this).closest('tr');
	table.row(removeRow).remove().draw();		
});


$("#rfpTable2").on('click', '.removeField', function(e){
	$(this).closest('tr').remove();
	var removeRow =  $(this).closest('tr');
	table.row(removeRow).remove().draw();		
});

/*$("#rfpTable").on('click', '.removeField', function(e){
		table.row( this ).delete();
	 	
});
*/
function addfieldstolist(filedval,listid){
	$('#'+listid+'').append(filedval)
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

$('#rfp_no').on(
		'focusout',
		function() {
			//console.log($("#tender_no").val());
			if ($("#rfp_no").val() == "") {
			} else { 
				//console.log('/rfp/isexists/by/" + "tenderNo" + "/"'+ $("#tender_no").val());				
		//		/isexists/by/{type}/{enteredValue}
				getAsyncData("/rfp/isexists/by/" + "rfpNo" + "/"+ $("#rfp_no").val(), existsCallBack);
				/*var bol = validateEmail($("#tender_no").val());
				console.log(bol);
				if (!bol) {
					//$('#phone2').val("");
					Swal.fire({
						
						type : 'error',
						title : 'Invalid Tender number',
						text : 'Please enter a tender no!',						
					});
					$(this).parent().parent().addClass('has-error')
					$(this).parent().parent().removeClass('has-success')
				}else{
					//console.log("dfa");
					getAsyncDataNosecurty("/registration/isexists/by/" + "tenderNo" + "/"
							+ $('#tender_no').val(), existsCallBack);
				}*/
			}
});


function existsCallBack(res) {
	console.log(res);
	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "rfpNo") {
		console.log(res.responseText);
		$('#rfp_no').val("");
		Swal.fire({
			type : 'error',
			title : 'Please use a different Tender number*',
			text : 'Tender number is already taken !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
	} 	
}


$('#submit_button').on('click', function() {
	var uploadFile = document.getElementById('upload_file');
//	var files = uploadFile.files;
	
	var tableData = $('#rfpTable').DataTable();	
	const rfpArray = [];
	rfpArray.length = 0;
	rfpArray.splice(0, rfpArray.length)
	
	$('#rfpTable > tbody > tr').each(function(){		
		let rfpHeadingAndFieldsObject = {};		
		let heading = $(this).find('td:eq(0)').html();
		let field = $(this).find('td:eq(1)').html();
		
		console.log($(this).find('td:eq(0)').html());
		
		if(heading === "" || heading === undefined){
			//alert("Cannot be empty");
		}else{
			rfpHeadingAndFieldsObject["headingNames"] = $(this).find('td:eq(0)').html();
			rfpHeadingAndFieldsObject["fieldsNames"] = $(this).find('td:eq(1)').html();
			rfpArray.push(rfpHeadingAndFieldsObject);
		}
		console.log(JSON.stringify(rfpArray));		
	});		
	
	
/*	if ($('#rfp_no').val().length==0) {
		status+=1;
		$('#rfp_no').parent().parent().addClass('has-error')
	}*/
	if ($('#rfp_filename').val().length==0) {
		status+=1;
		$('#rfp_filename').parent().parent().addClass('has-error')
	}
	if ($('#productCategory').val().length==0) {
		status+=1;
		$('#productCategory').parent().parent().addClass('has-error')
	}
	if ($('#productSubCategory').val().length==0) {
		status+=1;
		$('#productSubCategory').parent().parent().addClass('has-error')
	}
	if ($('#procurementRequest').val().length==0) {
		status+=1;
		$('#procurementRequest').parent().parent().addClass('has-error')
	}
	//console.log("rfpArray................................."+rfpArray.length)
	//console.log("rfpArray0................................."+rfpArray[0])
	var jsonob = rfpArray[0]
	
	console.log("rfpArray[0]................................."+jsonob.headingNames)		
	
	/*if(jsonob.headingNames == undefined){
		delete rfpArray[0];
	}*/
	
	/*const results = rfpArray.filter(element => {
	  return element !== null;
	});*/
	const results = rfpArray.filter(element => {
	  if (Object.keys(element).length !== 0) {
	    return true;
	  }	
	  return false;
	});	
	console.log("after remove null"+JSON.stringify(results))
	
	if(jsonob.headingNames  == "No data available in table"){
		status+=1;
		//$('#rfpTable').parent().parent().addClass('has-error')
	}
/*	if(files.length==0){
            Swal.fire(
				  'Missing',
				  'Please check the required fields!',
				  'warning'
				);
            return false;
     }	*/
	if (status != 0) {
		Swal.fire(
				  'Missing',
				  'Please check the required fields or table is empty!',
				  'warning'
				);		
	}else{
	console.log("after validation");
	var rfp = {
				"rfpNo" : $('#rfp_no').val(),
				"rfpFileName" : $('#rfp_filename').val(),
				"eligibleCat" : $('#productCategory').val(),
				"eligibleSubCat" : $('#productSubCategory').val(),
				"proRequest" : $('#procurementRequest').val(),
		//		"prID" : sessionStorage.getItem("savedPRID"),
				"prID": "",
			//	"prID" :rfp.prID,
			
				/*"arrHeadingNames" : arrHeadingNames,
				"arrFieldNames" : arrFieldNames,*/
				"rfpArray" : results				
			};						
			console.log(JSON.stringify(rfp));
			
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
					  
						var	 responseCode = differentialAsync("/rfp/addrfp",rfp,[$('#upload_file')[0]],confirmedCallBackRFP)
						
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
	
	/*tableData.row().data().map((row)=>{
		 // each row is an array where each column is an element in the array
  		// as a string
	})*/	
	}
});


function confirmedCallBackRFP(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);
	    
	   if(responseCode.responseText!= null & responseCode.responseText !="Error"){		  	
			Swal.fire({
			  icon: 'success',
			  title: 'RFP has been created successfully.',
			  html:
			    '<input disabled id="swal-input1" class="swal2-input" value="RFP No: '+responseCode.responseText+'">',			  			  
			})
		$("#rfpTable td").remove();
		arr = [];
		//rfpArray.length = 0;
		//rfpArray.splice(0, rfpArray.length)
		rfpHeadingAndFieldsObject = {};
		sessionStorage.removeItem("savedPRID");
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'RFP creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	   formclear();
	    /*$('html, body').animate({
	        scrollTop: $("#Uploading_div").offset().top
	    }, 1500);
		setTimeout(function(){ 
			$('#uploaded_po_Veryfication').hide();
		}, 2000);
		 $('#overlay').hide();*/
}


$('#addheadings').click(function(){
		
	var dd='<div id="addingFiledsectoin'+headingincrement+'" class="box box-info addingFiledsectoin"><input type="button" class="col-md-2 removesection" value="Remove Section"/>'
					+'<div class="box-header with-border">'
//					+'<h5 class="box-title">'+headingincrement+'</h5>'
//					+'<input type="button" class="col-md-12 removesection" value="Remove Section"/>'
					+'</div>'
					+'<div class="box-body">'
					+'<fieldset>'
					+'<div class="row">'
					+'<div class="col-sm-12 input-group">'
					+'<label for="inputPassword3" class="col-sm-4 control-label"> Title (Heading Name) *</label>'
					+'<div class="col-sm-8 input-group">'
					+'<input name="rfp_filename" type="text" class="form-control heading-main heading-main-'+headingincrement+'" required="required">'
					+'</div>'
					+'</div>'
					+'<br><br>'
					+'<div class="col-sm-4 input-group">'
					+'<ul name="addedfieldlist" id="addedfiledlist_'+headingincrement+'">'
					+'</ul></div>'
					+'<div class="col-sm-8 input-group">'
					+'<label for="inputPassword3" class="col-sm-4 control-label"> Filed Name *</label>'
					+'<div class="col-sm-8 input-group">'
					+'<input id="rfp_fieldname_'+headingincrement+'" name="rfp_filename" type="text" class="form-control field-value field-hm-'+headingincrement+'" required="required">'
					+'<input type="button" value="Add" onclick="addfieldstoList('+headingincrement+')" class="btn button-plus  " >'
					+'</div></div></div></div></div></fieldset>'

					$('#setofHeadingandFileds').append(dd);
	headingincrement++;		
});


function addfieldstoList(listid){
	var sm_length=$('#addedfiledlist_'+listid+'').length;
	if($('#rfp_fieldname_'+listid+'').val().length > 0){
		$('#addedfiledlist_'+listid+'').append('<li><input type="button" class="btn-sm removeaddedfields" value="-">'+$('#rfp_fieldname_'+listid+'').val()+'</li>')
		$('#rfp_fieldname_'+listid+'').val("")
	}	
}


$("body").on('click', '.removesection', function(e){
	console.log('ok');
	 $(this).closest('div').remove();
});


function formclear(){
	/*$('#rfp_no').val('');*/
	$('#rfp_filename').val('');
	$('#rfp_filename').val('');
	$('#rfp_fieldName').val('');		
}


/*$('#submit_button').on('click',function(){
	console.log('submit');
	for(var i = 0;i<$('.addedfieldlist').length;i++){
		console.log(i);
	}
});
	*/

/*$('#pro_date').on('focusout', function() {
	changeDateClass('#pro_date');
});*/

$('#purchase_date').on('focusout', function() {
	changeClass('#purchase_date');
});


function changeDateClass(hashtag) {
	if ($(hashtag).val().length > 0) {
		$(hashtag).parent().parent().addClass('has-success')
		$(hashtag).parent().parent().removeClass('has-error')
	}else{
		$(hashtag).parent().parent().addClass('has-error')
		$(hashtag).parent().parent().removeClass('has-success')
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


$('#pro_department').on('focusout', function() {
	changeClass('#pro_department');
});

$('#pro_requester').on('focusout', function() {
	changeClass('#pro_requester');	
});

$('#evolution_team').on('focusout', function() {
	changeClass('#evolution_team');	
});  

$('#pro_approval').on('focusout', function() {
	changeClass('#pro_approval');	
}); 

$('#pro_name').on('focusout', function() {
	changeClass('#pro_name');	
}); 

$('#pro_designation').on('focusout', function() {
	changeClass('#pro_designation');	
}); 

$('#pro_projectCost').on('focusout', function() {
	changeClass('#pro_projectCost');	
}); 

$('#pro_supplier').on('focusout', function() {
	changeClass('#pro_supplier');	
}); 

$('#pro_prices').on('focusout', function() {
	changeClass('#pro_prices');	
}); 

$('#bidding_period').on('focusout', function() {
	changeClass('#bidding_period');	
}); 

$('#pro_clarifications').on('focusout', function() {
	changeClass('#pro_clarifications');	
}); 

$('#payment_terms').on('focusout', function() {
	changeClass('#payment_terms');	
});

$('#quotation').on('focusout', function() {
	changeClass('#quotation');	
}); 

$('#delivery_period').on('focusout', function() {
	changeClass('#delivery_period');	
});  

$('#warranty_period').on('focusout', function() {
	changeClass('#warranty_period');	
});  

$('#market_contact').on('focusout', function() {
	changeClass('#market_contact');	
});  

$('#important_noted').on('focusout', function() {
	changeClass('#important_noted');	
});  

$('#service_category').on('focusout', function() {
	changeClass('#service_category');	
});  



function findCategoryFee(catgeoryID){
	console.log(catgeoryID);
}
		

getAsyncData('/category', function(res) {
	for (let item of res.responseJSON) {
	     $('#service_category').append(new Option(item.eligibleCategortName, item.eligibleCategortID))
	 }
});


$("body").on('change', '#service_category', function(e){	
	 $('#productSubCategory').prop("disabled", false);	 

	 console.log($("#service_category option:selected" ).text());
	 findCategoryFee(this.value);			 		     
});
	

$('#btn_submit').on('click', function() {
	
	var checkedBudgeted = $("input[name='budgeted']:checked").val()
	console.log(checkedBudgeted);
	
	var checkedExpenditure = $("input[name='expenditure']:checked").val()
	console.log(checkedExpenditure);
	
	var checkedType = $("input[name='type']:checked").val()
	console.log(checkedType);
	
	var checkedSampleRequirement = $("input[name='sample_equirement']:checked").val()
	console.log(checkedSampleRequirement);
	
	var checkedBidMeeting = $("input[name='bid_meeting']:checked").val()
	console.log(checkedBidMeeting);
	
	
	
	if (!$('#acceptTerms').prop("checked")) {
		Swal.fire(
			'Confirm',
			'Please confirm the tender creation!',
			'warning'
		);
	}
	
	var status = 0;

	if ($('#pro_department').val().length == 0) {
		status += 1;
		$('#pro_department').parent().parent().addClass('has-error')
	}
	if ($('#pro_requester').val().length == 0) {
		status += 1;
		$('#pro_requester').parent().parent().addClass('has-error')
	}
	if ($('#pro_approval').val().length ==0) {
		status += 1;
		$('#pro_approval').parent().parent().addClass('has-error')
	}
	if ($('#pro_name').val().length == 0) {
		status += 1;
		$('#pro_name').parent().parent().addClass('has-error')
	}
	if ($('#pro_designation').val().length==0) {
		status+=1;
		$('#pro_designation').parent().parent().addClass('has-error')
	}


	if ($('#pro_projectCost').val().length == 0) {
		status += 1;
		$('#pro_projectCost').parent().parent().addClass('has-error')
	}
	if ($('#pro_supplier').val().length == 0) {
		status += 1;
		$('#pro_supplier').parent().parent().addClass('has-error')
	}
	if ($('#pro_prices').val().length == 0) {
		status += 1;
		$('#pro_prices').parent().parent().addClass('has-error')
	}
	if ($('#bidding_period').val().length == 0) {
		status += 1;
		$('#bidding_period').parent().parent().addClass('has-error')
	}
	if ($('#pro_clarifications').val().length == 0) {
		status += 1;
		$('#pro_clarifications').parent().parent().addClass('has-error')
	}
	if ($('#payment_terms').val().length == 0) {
		status += 1;
		$('#payment_terms').parent().parent().addClass('has-error')
	}
	if ($('#quotation').val().length == 0) {
		status += 1;
		$('#quotation').parent().parent().addClass('has-error')
	}
	if ($('#delivery_period').val().length == 0) {
		status += 1;
		$('#delivery_period').parent().parent().addClass('has-error')
	}
	if ($('#warranty_period').val().length == 0) {
		status += 1;
		$('#warranty_period').parent().parent().addClass('has-error')
	}
	if ($('#market_contact').val().length == 0) {
		status += 1;
		$('#market_contact').parent().parent().addClass('has-error')
	}
	if ($('#important_noted').val().length == 0) {
		status += 1;
		$('#important_noted').parent().parent().addClass('has-error')
	}	
	if ($('#service_category').val() == 'empty') {
		status += 1;
		$('#service_category').parent().parent().addClass('has-error')
	} else {
		$('#service_category').parent().parent().addClass('has-success')
	}
	
/*	if ($('#pro_date').val().length == 0) {
		status += 1;
		$('#pro_date').parent().parent().addClass('has-error')
	}*/
	if ($('#purchase_date').val().length == 0) {
		status += 1;
		$('#purchase_date').parent().parent().addClass('has-error')
	}
	if ($('#evolution_team').val().length == 0) {
		status += 1;
		$('#evolution_team').parent().parent().addClass('has-error')
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

		var prorequest = {
			"department": $('#pro_department').val(),
			"technicalEvolutionTeam": $('#evolution_team').val(),
			"requester": $('#pro_requester').val(),
			"proApproval": $('#pro_approval').val(),
			"proName": $('#pro_name').val(),
			"designation": $('#pro_designation').val(),
			"projectCost": $('#pro_projectCost').val(),
			"proSupplier": $('#pro_supplier').val(),
			"proPrices": $('#pro_prices').val(),
			"biddingPeriod": $('#bidding_period').val(),
			"clarifications": $('#pro_clarifications').val(),
			"paymentTerms": $('#payment_terms').val(),
			"quotation": $('#quotation').val(),
			"deliveryPeriod": $('#delivery_period').val(),
			"warrantyPeriod": $('#warranty_period').val(),
			"marketContact": $('#market_contact').val(),
			"importantNoted": $('#important_noted').val(),
			"serviceCategory": $('#service_category').val(),
			"prID": "",
			
			"budgeted" : checkedBudgeted,
			"expenditure" : checkedExpenditure,
			"type" : checkedType,
			"sample_equirement" : checkedSampleRequirement,
			"bid_meeting" : checkedBidMeeting,
			
//			"proDate": Date.parse($('#pro_date').val()),
			"purchaseDate": Date.parse($('#purchase_date').val()),
		};

		console.log(JSON.stringify(prorequest));

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

				var responseCode = getAsyncDataPOST("/rfp/procurementrequest", prorequest, confirmedCallBack)
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
	
var savedPRID;
function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#btn_submit").prop("disabled",false);
	    
	   if(responseCode.responseJSON!= null & responseCode.responseJSON.code=="00"){
		   formclear2();
		   Swal.fire(
				      'Accepted!',
				      'Procurement Request Details has been successfully.',
				      'success'
				    )	
	savedPRID = responseCode.responseJSON.prID;
	sessionStorage.setItem("savedPRID", savedPRID);
	   }else{
		   console.log(responseCode.responseJSON);
		   Swal.fire({
				type: 'error',
				title: 'Procurement Request Details failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 	    
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

	
function formclear2() {
	$('#pro_department').val('');
	$('#evolution_team').val('');
	$('#pro_requester').val('');
	$('#pro_approval').val('');
	$('#pro_name').val('');
	$('#pro_designation').val('');
	$('#pro_projectCost').val('');
	$('#pro_supplier').val('');
	$('#pro_prices').val('');
	$('#bidding_period').val('');
	$('#pro_clarifications').val('');

	$('#payment_terms').val('');
	$('#quotation').val('');
	$('#delivery_period').val('');
	$('#warranty_period').val('');
	$('#market_contact').val('');
	$('#important_noted').val('');
	$('#service_category').val('');
	
//	$('#pro_date').val('');
	$('#purchase_date').val('');
		
	$('#budgeted').val('');
	$('#expenditure').val('');
	$('#type').val('');
	$('#sample_equirement').val('');
	$('#bid_meeting').val('');

}
	

	
	
