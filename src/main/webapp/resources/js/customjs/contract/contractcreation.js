$( document ).ready(function() {
	//alert("ssssss");
	console.log('contractCreationJS Ready');

	$('#start_date').datepicker({
	      autoclose: true
	});
	
	$('#expiration_date').datepicker({
		autoclose: true
	});
	
	$('#board_paper_date').datepicker({
		autoclose: true
	});
	
	$('#board_a_date').datepicker({
		autoclose: true
	});
	
	/*$('#board_approval_date').datepicker({
		autoclose: true
	});*/
	
	$('#purchase_order_date').datepicker({
		autoclose: true
	});
	
	
	$("#supplier_code").select2({
		  ajax: {
		    url: globalUrl+'/company/company',
		    headers : {
				'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken"),
				'Content-Type' : 'application/json'
			},
		    dataType: 'json',
		    delay: 250,
		    data: function (params) {
		      return {
		        search: params.term, // search term
		        page: params.page
		      };
		    },
		    processResults: function (data, params) {
		      // parse the results into the format expected by Select2
		      // since we are using custom formatting functions we do not need to
		      // alter the remote JSON data, except to indicate that infinite
		      // scrolling can be used
		      params.page = params.page || 1;

		      return {
		        results: data.items,
		        pagination: {
		          more: (params.page * 30) < data.total_count
		        }
		      };
		    },
		    cache: true
		  },
		  placeholder: 'Search for a Supplier Name',
		  minimumInputLength: 1,
		  templateResult: function(repo) {
			  if (repo.loading) {
				    return repo.text;
				  }

				  var $container = $(
				    "<div class='select2-result-repository clearfix'>" +
				      "<div class='select2-result-repository__meta'>" +
				        "<div class='select2-result-repository__title'></div>" +
				      "</div>" +
				    "</div>"
				  );

				  $container.find(".select2-result-repository__title").text(repo.name);

				  return $container;
		},
		  templateSelection: function(repo) {
			  return repo.name || repo.text;
		}
		});
	
	
	 $('#acceptTerms').on('change', function() {
		  	if(!$('#acceptTerms').prop("checked")){
			  document.getElementById("submit_button").disabled = true;	
		  	}
		  else{
			  document.getElementById("submit_button").disabled = false;	
		  }
		});
	
});


$('#supplier_code').on('focusout', function() {
	/* 
	if ($(this).val().length>0) {
		$(this).parent().parent().addClass('has-success')
		$(this).parent().parent().removeClass('has-error')
	}else{
		$(this).parent().parent().addClass('has-error')
		$(this).parent().parent().removeClass('has-success')
	}*/
	
	changeClass('#supplier_code');
	
});

$('#contract_no').on('focusout', function() {
	changeClass('#contract_no');
});

$('#contract_description').on('focusout', function() {
	changeClass('#contract_description');
});

$('#contract_description').on('focusout', function() {
	changeClass('#contract_description');
});

$('#start_date').on('change', function() {
	changeClass('#start_date');
});
$('#start_date').on('focusout', function() {
	changeClass('#start_date');
});

$('#expiration_date').on('change', function() {
	changeClass('#expiration_date');
});
$('#expiration_date').on('focusout', function() {
	changeClass('#expiration_date');
});

$('#board_approval_no').on('focusout', function() {
	changeClass('#board_approval_no');
});

$('#board_paper_date').on('change', function() {
	changeClass('#board_paper_date');
});
$('#board_paper_date').on('focusout', function() {
	changeClass('#board_paper_date');
});

$('#board_a_date').on('change', function() {
	changeClass('#board_a_date');
});
$('#board_a_date').on('focusout', function() {
	changeClass('#board_a_date');
});

/*$('#board_approval_date').on('change', function() {
	changeClass('#board_approval_date');
});*/
/*$('#board_approval_date').on('focusout', function() {
	changeClass('#board_approval_date');
});*/

$('#board_paper_originated_by').on('change', function() {
	changeClass('#board_paper_originated_by');
});
$('#board_paper_originated_date').on('focusout', function() {
	changeClass('#board_paper_originated_date');
});

$('#special_remarks').on('focusout', function() {
	changeClass('#special_remarks');
});

$('#amount').on('focusout', function() {
	changeClass('#amount');
});

$('#annual_payment_amount').on('focusout', function() {
	changeClass('#annual_payment_amount');
});

/*$('#conversion_rate').on('focusout', function() {
	changeClass('#conversion_rate');
});*/



$('#purchase_order_date').on('change', function() {
	changeClass('#purchase_order_date');
});
$('#purchase_order_date').on('focusout', function() {
	changeClass('#purchase_order_date');
});

$('#purchase_order_date').on('focusout', function() {
	changeClass('#purchase_order_date');
});



$('#purchase_order_number').on('focusout', function() {
	changeClass('#purchase_order_number');
});

$('#contract_signed_company').on('focusout', function() {
	changeClass('#contract_signed_company');
});

$('#designation_company').on('focusout', function() {
	changeClass('#designation_company');
});

$('#contract_signed_supplier').on('focusout', function() {
	changeClass('#contract_signed_supplier');
});

$('#designation_supplier').on('focusout', function() {
	changeClass('#designation_supplier');
});



$('#upload_purchase_order').on('focusout', function() {
	changeClassUpload('#upload_purchase_order');
});

$('#upload_board_approval').on('focusout', function() {
	changeClassUpload('#upload_board_approval');
});

$('#upload_contract').on('focusout', function() {
	changeClassUpload('#upload_contract');
});

$('#category').on('change', function() {
	changeClass('#category');
	if ($('#category').val()=='empty') {
		
		$('#category').parent().parent().addClass('has-error')
	}else{
		$('#category').parent().parent().addClass('has-success')
	}
});

$('#payment_type').on('change', function() {
	changeClass('#payment_type');
	if ($('#payment_type').val()=='empty') {
		status+=1;
		$('#payment_type').parent().parent().addClass('has-error')
	}else{
		$('#payment_type').parent().parent().addClass('has-success')
	}
});



function changeClassUpload(hashtag){
	if ($(hashtag).val().length>0) {
		$(hashtag).parent().parent().parent().addClass('has-success')
		$(hashtag).parent().parent().parent().removeClass('has-error')
	}else{
		$(hashtag).parent().parent().parent().addClass('has-error')
		$(hashtag).parent().parent().parent().removeClass('has-success')
	}
	
}

function changeClass(hashtag){
	if ($(hashtag).val().length>0) {
		$(hashtag).parent().parent().addClass('has-success')
		$(hashtag).parent().parent().removeClass('has-error')
	}else{
		$(hashtag).parent().parent().addClass('has-error')
		$(hashtag).parent().parent().removeClass('has-success')
	}
	
}

$('#acceptTerms').on('change', function() {

	
	/*if($('#acceptTerms').prop("checked")){
		$('input:text').val("ContractCreation Test Data");
		$(':input[type="number"]').val("123");
			
	}else{
		$('input:text').val("");
		$(':input[type="number"]').val("");
	}*/
	
	
	
});

$('#submit_button').on('click', function() {
if(!$('#acceptTerms').prop("checked")){
		
	
		Swal.fire(
				  'Confirm',
				  'Please confirm the supplier creation!',
				  'warning'
				);
		
	}
	
	 var status = 0;
	
	if ($('#supplier_code').val().length==0) {
		status+=1;
		$('#supplier_code').parent().parent().addClass('has-error')
	}
	
	if ($('#contract_no').val().length==0) {
		status+=1;
		$('#contract_no').parent().parent().addClass('has-error')
	}
	
	if ($('#contract_description').val().length==0) {
		status+=1;
		$('#contract_description').parent().parent().addClass('has-error')
	}
	
	if ($('#start_date').val().length==0) {
		status+=1;
		$('#start_date').parent().parent().addClass('has-error')
	}
	
	if ($('#expiration_date').val().length==0) {
		status+=1;
		$('#expiration_date').parent().parent().addClass('has-error')
	}
	
	if ($('#board_approval_no').val().length==0) {
		status+=1;
		$('#board_approval_no').parent().parent().addClass('has-error')
	}
	
	if ($('#board_paper_date').val().length==0) {
		status+=1;
		$('#board_paper_date').parent().parent().addClass('has-error')
	}
	
	if ($('#board_a_date').val().length==0) {
		status+=1;
		$('#board_a_date').parent().parent().addClass('has-error')
	}
	
/*	if ($('#board_approval_date').val().length==0) {
		status+=1;
		$('#board_approval_date').parent().parent().addClass('has-error')
	}*/
	
	if ($('#board_paper_originated_by').val().length==0) {
		status+=1;
		$('#board_paper_originated_by').parent().parent().addClass('has-error')
	}
	
	if ($('#special_remarks').val().length==0) {
		status+=1;
		$('#special_remarks').parent().parent().addClass('has-error')
	}
	
	if ($('#amount').val().length==0) {
		status+=1;
		$('#amount').parent().parent().addClass('has-error')
	}
	
	if ($('#annual_payment_amount').val().length==0) {
		status+=1;
		$('#annual_payment_amount').parent().parent().addClass('has-error')
	}
	
	/*if ($('#conversion_rate').val().length==0) {
		status+=1;
		$('#conversion_rate').parent().parent().addClass('has-error')
	}*/
	
	if ($('#purchase_order_date').val().length==0) {
		status+=1;
		$('#purchase_order_date').parent().parent().addClass('has-error')
	}
	
	if ($('#purchase_order_number').val().length==0) {
		status+=1;
		$('#purchase_order_number').parent().parent().addClass('has-error')
	}
	
	if ($('#contract_signed_company').val().length==0) {
		status+=1;
		$('#contract_signed_company').parent().parent().addClass('has-error')
	}
	
	if ($('#designation_company').val().length==0) {
		status+=1;
		$('#designation_company').parent().parent().addClass('has-error')
	}
	
	if ($('#contract_signed_supplier').val().length==0) {
		status+=1;
		$('#contract_signed_supplier').parent().parent().addClass('has-error')
	}
	
	if ($('#designation_supplier').val().length==0) {
		status+=1;
		$('#designation_supplier').parent().parent().addClass('has-error')
	}
	
	if ($('#category').val()=='empty') {
		status+=1;
		$('#category').parent().parent().addClass('has-error')
	}else{
		$('#category').parent().parent().addClass('has-success')
	}
	
	if ($('#payment_type').val()=='empty') {
		status+=1;
		$('#payment_type').parent().parent().addClass('has-error')
	}else{
		$('#payment_type').parent().parent().addClass('has-success')
	}
	
	//console.log($('#upload_board_approval').val());
	
	// upload files
	
	if ($('#upload_board_approval').val()=='') {
		status+=1;
		$('#upload_board_approval').parent().parent().parent().addClass('has-error')
	}
	
	if ($('#upload_contract').val()=='') {
		status+=1;
		$('#upload_contract').parent().parent().parent().addClass('has-error')
	}
	
	if ($('#upload_purchase_order').val()=='') {
		status+=1;
		$('#upload_purchase_order').parent().parent().parent().addClass('has-error')
	}
	
	console.log('Clicked');
	
/*	if(!$('#acceptTerms').prop("checked")){
		Swal.fire(
				  'Confirm',
				  'Please confirm the contract creation!',
				  'warning'
				);*/
	if(!$('#acceptTerms').prop("checked")){
		
		//alert("sss");
		Swal.fire(
				  'Confirm',
				  'Please confirm the supplier creation!',
				  'warning'
				);
		
	}else if (status != 0) {
		Swal.fire(
				  'Missing',
				  'Please check the required fields!',
				  'warning'
				);
		
	}else{
		console.log('All Fine');
		
		var contract = {
				"mappingCode" : $('#supplier_code').val(),
				"contractNo" : $('#contract_no').val(),
				"contractDetails" : $('#contract_description').val(),
				"category" : $('#category').val(),
				"startDatePeriod" : Date.parse($('#start_date').val()),
				"expiryDate" : Date.parse($('#expiration_date').val()),
				"boardApprovalNumber" : $('#board_approval_no').val(),
				"boardPaperDate" : Date.parse($('#board_paper_date').val()),
				"boardApprovalDate" : Date.parse($('#board_a_date').val()),
				/*"boardApprovalDate" : Date.parse($('#board_approval_date').val()),*/
				"boardApprovalOriginatedDateBy" : $('#board_paper_originated_by').val(),
				"specialRemarksInTheApprovalPaper" : $('#special_remarks').val(),						
				"paymentType" : $('#payment_type').val(),						
				"contractAmount" : $('#amount').val(),
				"annualPaymentAmountLKR" : $('#annual_payment_amount').val(),
				"amcusd" : $('#amc_usd').val(),
				"conversionRateUSD" : $('#conversion_rate').val(),
				"purchaseOrderDate" : Date.parse($('#purchase_order_date').val()),
				"purchaseOrderNumber" : $('#purchase_order_number').val(),				
				"contractSignByCompany" : $('#contract_signed_company').val(),
				"designationcompany" : $('#designation_company').val(),
				"contractSignBySupplier" : $('#contract_signed_supplier').val(),
				"designationsupplier" : $('#designation_supplier').val()
			};

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
					  
					//var responseCode =  getAsyncDataPOST("/contract/addcontract", contract, confirmedCallBack)	
						var responseCode =  differentialAsync("/contract/addcontract", contract,[$('#upload_board_approval')[0],$('#upload_contract')[0],$('#upload_purchase_order')[0]], confirmedCallBack)	
						$(this).prop("disabled",true);
						


				  }
				});
			
	}
	
});

function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);

	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'Contract has been created successfully.',
				      'success'
				    )
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Contract creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	    
	    /*$('html, body').animate({
	        scrollTop: $("#Uploading_div").offset().top
	    }, 1500);
		setTimeout(function(){ 
			$('#uploaded_po_Veryfication').hide();
		}, 2000);
		 $('#overlay').hide();*/
	}

function formclear(){
	$("#acceptTerms").prop("checked", false);
	$('#supplier_code').val('');
	$('#contract_no').val('');
	$('#contract_description').val('');
	$('#category').val('');
	$('#start_date').val('');
	$('#expiration_date').val('');
	$('#board_approval_no').val('');
	$('#board_paper_date').val('');
	$('#board_a_date').val('');
	/*$('#board_approval_date').val('');*/
	/*$('#board_approval_date').val('');*/
	$('#board_paper_originated_by').val('');
	$('#special_remarks').val('');
	$('#payment_type').val('');
	$('#amount').val('');
	$('#annual_payment_amount').val('');
	$('#amc_usd').val('');
	$('#conversion_rate').val('');
	$('#purchase_order_date').val('');
	$('#purchase_order_number').val('');
	$('#contract_signed_company').val('');
	$('#designation_company').val('');
	$('#contract_signed_supplier').val('');
	$('#designation_supplier').val('');
}
