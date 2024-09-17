$(document).ready(function() {
$('#submit_button').prop("disabled",true);
$('#tenderDetailsDiv').hide();
	
	$('#tenderno_for_resubmit').select2({
    placeholder: 'Select a Tender'
	});
	
	$('#supplier_for_resubmit').select2({
    placeholder: 'Select a Supplier'
	});

	getAsyncData('/tender/resubmit-financial-details-allow-option', function(res) {
	    console.log(res);
	    console.log(res.responseJSON.data);
	    
	      $('#tenderno_for_resubmit').append(new Option('Select a tender no', ''))
	      for (let tender of res.responseJSON.data) {
	         // $('#tenderId').append(new Option(tender.tenderNo+" - "+ item.tendername, item.trnderid))
				$('#tenderno_for_resubmit').append(new Option(tender.tBidNumber+"-"+tender.tenderName,tender.tenderId))
	    }
	});
	
	


});

$("body").on('change', '#tenderno_for_resubmit', function(e){
	
	getAsyncData('/tender/resubmit-financial-details-allow-option-supplier/'+$('#tenderno_for_resubmit').val(), function(res) {
	    console.log(res);
	    console.log(res.responseJSON.data);
	    $('#supplier_for_resubmit').val('').trigger("change");
		$('#supplier_for_resubmit').find('option').remove().end();
	      $('#supplier_for_resubmit').append(new Option('Select a supplier', ''))
	      for (let supplier of res.responseJSON.data) {
	         // $('#tenderId').append(new Option(tender.tenderNo+" - "+ item.tendername, item.trnderid))
				$('#supplier_for_resubmit').append(new Option(supplier.supplierName+"-"+supplier.votes+" Votes",supplier.supplierId))
	    }
	});
})

$('#invite_to_resubmit_financial_details').on('click', function() {
	 var status = 0;
	
	if ($('#tenderno_for_resubmit').val().length==0) {
		status+=1;
		$('#tenderno_for_resubmit').parent().parent().addClass('has-error')
	}
	if ($('#supplier_for_resubmit').val().length==0) {
		status+=1;
		$('#supplier_for_resubmit').parent().parent().addClass('has-error')
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
		
		var fin = {
				"tenderId" : $('#tenderno_for_resubmit').val(),
				"supplierId" : $('#supplier_for_resubmit').val(),
			};
			
			console.log(JSON.stringify(fin));
			
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
					var responseCode;
					responseCode =  getAsyncDataPOST("/tender/financial-resubmit-creation", fin, confirmedCallBackFileUpload)

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

function confirmedCallBackFileUpload(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);

	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   formclear();

		   Swal.fire(
				      'Accepted!',
				      'Resubmit Financial Details has been created successfully.',
				      'success'
				    )
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Resubmit Financial Details creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	    
}
	

function formclear() {
	
	$('#tenderno_for_resubmit').val('');
	
}
	
	
