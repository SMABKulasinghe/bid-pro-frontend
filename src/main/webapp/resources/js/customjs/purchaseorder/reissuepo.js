$('#forHide').hide()
$( document ).ready(function() {
	
	console.log('reIssuePo JS Ready');
	getTenders();
});



function getTenders(){
	getAsyncData('/po/get-tenders', function(res) {
	    console.log(res);
	    console.log(res.responseJSON.data);
	    $('#tenderIdd').find('option').remove().end();
	      $('#tenderIdd').append(new Option('Select a tender no', ''))
	      for (let tender of res.responseJSON.data) {
	        
				$('#tenderIdd').append(new Option(tender.tBidNumber+"-"+tender.t_tenderName,tender.tenderId))
	    }
			
	});
}

$("body").on('change', '#tenderIdd', function() {
	console.log($(this).val())
	var tenderId = $(this).val();

	getAsyncData("/po/get-tender-details-for-reissuepo/" + tenderId, function(res) {
		console.log(res);
		console.log(res.responseJSON);
		console.log(res.responseJSON.data[0].Category);

		$('#t_tendername').val(res.responseJSON.data[0].Tendername);
		$('#t_category').val(res.responseJSON.data[0].Category);
		$('#unitPriceLkr').val(res.responseJSON.data[0].amountLkr);		
			
	});
	
	$('#forHide').show()
	
});
	

$('#submit_button').on('click', function() {

	 var status = 0;
	
	
	
	if ($('#qty').val().length==0) {
		status+=1;
		$('#qty').parent().parent().addClass('has-error')
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
	
		var po = {
				
				"qty" : $('#qty').val(),
				"category" : $('#t_category').val(),
				"tenderIdd" : $('#tenderIdd').val(),
				"unitPriceLkr" : $('#unitPriceLkr').val(),
				
				
			};
			
			console.log(JSON.stringify(po));
			
			
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
						var responseCode =  getAsyncDataPOST("/po/addreissuepo", po, confirmedCallBack)
				  		
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

	console.log(responseCode.responseJSON.code);
	//console.log(responseCode.responseJSON.poNo);
	formclear();
	$('#poForm').hide();
	getTenders();

	if (responseCode.responseJSON.code === "01") {
		console.log(responseCode.responseJSON.poNo);
		Swal.fire({
			icon: 'success',
			title: 'Re-issue PO has been created successfully.',
			html:
				'<input disabled id="swal-input1" class="swal2-input" value="Re-issue PO No: ' +responseCode.responseJSON.poNo+ '">',


		})


	} else
	Swal.fire({
		type: 'error',
		title: 'Re-issue PO creation failed',
		text: 'Error occured !',
		footer: '<a href>Supplier Management V1.0</a>'
	});
}




