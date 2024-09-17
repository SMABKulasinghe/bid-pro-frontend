$('#eveCommitteeTable').hide();

$(document).ready(function() {
	tbl_committee = undefined;
	
	  $('#reg_date').datepicker({
	      autoclose: true
	    });

	$('#ecc_tenderid').select2({
		placeholder: 'Select a Tender No'
	});

 	getAsyncData('/rfp/tenderids-for-rfp-eva-making', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		$('#ecc_tenderid').append(new Option('Select a tender no', ''))
		for (let item of res.responseJSON.data) {
			$('#ecc_tenderid').append(new Option(item.tBidNumber+" - "+ item.tenderName, item.tenderId))
		}
		
	});
	
});

$("body").on('change', '#ecc_tenderid', function(e) {
	console.log($(this).val());

	let trnderid = $(this).val();
	if(trnderid !=null){
		getAsyncData('/tender/tenderId/' + trnderid, function(res) {
		console.log(res);
		console.log(res.responseJSON);
  		$('#supplier_list').find('option').remove().end();
		$('#supplier_list').append(new Option('Select a vender', ''))
		for (let item of res.responseJSON) {
			$('#supplier_list').append(new Option(item.scname, item.subCompanyID))
		}
		$("#supplier_list").prop("disabled", false);
	});
	}
	
});

var selectedTendderIDfor;
$("body").on('change', '#supplier_list', function(e) {
	
	let tender_ID = $('#ecc_tenderid').val();
	let supplier_ID = $('#supplier_list').val();
	console.log(tender_ID);
	getRfpDetailsForSubmitButtonDisable(tender_ID,supplier_ID)
	loadTable(tender_ID,supplier_ID)
	
	selectedTendderIDfor = tender_ID;
});

function getRfpDetailsForSubmitButtonDisable(tender_ID,supplier_ID){
	getAsyncData("/rfp/get-rfp-details-for-submit-button/"+tender_ID+"/"+supplier_ID, function(res) {
		console.log(res);
		if(res.responseJSON.is_Submitted == true){
			/*$("#submitButtonFieldSet div").remove();
			$('#submitButtonFieldSet').append('<div id="submitButtonDiv"><button disabled type="button" id="create_button" class="btn btn-info pull-right"> Create </button></div>');*/
		}else if(res.responseJSON.is_Submitted == false){
			/*$("#submitButtonFieldSet div").remove();
			$('#submitButtonFieldSet').append('<div id="submitButtonDiv"><button  type="button" id="create_button" class="btn btn-info pull-right"> Create </button></div>');*/
		}
		
	})
}

function loadTable(tender_ID,supplier_ID) {
	console.log("tender_ID--"+tender_ID)
	console.log("supplier_ID--"+supplier_ID)
	$('#eveCommitteeTable').show();
	if (tbl_committee == undefined) {
		tbl_committee = undefined;
		console.log("Inside");
	tbl_committee = $('#tbl_committee').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/rfp/rfp-response-details/"+tender_ID+"/"+supplier_ID,
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		    	 	{ "data": "index", className: "text-right"},
		            { "data": "headerName" },
		            { "data": "fieldName"},
					{ "data": "venderResponse"},
					{ "data": "venderComment"}, 
					{ "data": "price"}, 
					{ "data": "qty"}, 
					{ "data": "unit"}, 
					{
						"data": "rfpResId",
						"'orderable": false,
						render: function(data, type, row, meta) {
							
							if(row.givenMarks == null){
								return '<input type="number" max = "100" min="0" class="form-control" id="'+row.rfpResId+'"  placeholder ="Given Mark" autocomplete="off"  />'+
								'<div><input type="hidden" value="'+row.rfpResId+'"></div>'
							}else{
								return '<input type="number" max = "100" min="0" class="form-control" id="'+row.rfpResId+'"  placeholder ="Given Mark" autocomplete="off" value="'+row.givenMarks+'" />'+
								'<div><input type="hidden" value="'+row.rfpResId+'"></div>'
							}
								
							
						},
						"className": 'text-center'
					},
					{
						"data": "rfpResId",
						"'orderable": false,
						render: function(data, type, row, meta) {
							
							if(row.givenMarks == null){
								return '<input type="text" min="0" class="form-control" id="Com-'+row.rfpResId+'"  placeholder ="Comment" autocomplete="off" />'
							}else{
								return '<input type="text" min="0" class="form-control" id="Com-'+row.rfpResId+'"  placeholder ="Comment" autocomplete="off" value="'+row.comment+'"/>'
							}
								
								
							
						},
						"className": 'text-center'
					},
		        ],
				'select': {
			             'style': 'multi',
			             'selector': 'td:first-child'
			          },
			          'order': [[0, 'desc']]
	});
	}else{
		console.log("Else me");
		console.log("tender_ID "+tender_ID);
		
		if(!(tender_ID =="")){
			tbl_committee.ajax.url(globalUrl + "/rfp/rfp-response-details/"+tender_ID+"/"+supplier_ID).load();
		}
	}
}

$('#create_button').on('click', function() {
	
		if ($('#ecc_tenderid').val()=='empty') {
		status+=1;
		$('#ecc_tenderid').parent().parent().addClass('has-error')
		}
		else{
		$('#ecc_tenderid').parent().parent().addClass('has-success')
		}
		if ($('#ecc_tenderid').val()=='empty') {
		status+=1;
		$('#supplier_list').parent().parent().addClass('has-error')
		}
		else{
		$('#supplier_list').parent().parent().addClass('has-success')
		}
	
		console.log('Clicked');
		
	const rfpArray = [];
	rfpArray.length = 0;
	rfpArray.splice(0, rfpArray.length)
	
	$('#tbl_committee > tbody > tr').each(function(){		
		let rfpMarksAndIdObject = {};		
		let heading = $(this).find('td:eq(0)').html();
		
		console.log($(this).find('td:eq(0)').html());
		
		if(heading === "" || heading === undefined){
			//alert("Cannot be empty");
		}else{
			rfpMarksAndIdObject["marks"] = $(this).find('td:eq(8)').find('input').val();
			rfpMarksAndIdObject["ids"] = $(this).find('td:eq(8)').find('div input').val();
			rfpMarksAndIdObject["comment"] = $(this).find('td:eq(9)').find('input').val();
			rfpArray.push(rfpMarksAndIdObject);
		}
		console.log(JSON.stringify(rfpArray));		
	});		
	
	var rfpMarks = {
		"tenderID" : $('#ecc_tenderid').val(),
		"supplierList" : $('#supplier_list').val(),
		"rfpArray" : rfpArray,
	};
		
		console.log(JSON.stringify(rfpMarks));
		
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
					  
						var	 responseCode = getAsyncDataPOST("/rfp/set-rfp-marks",rfpMarks,confirmedCallBack)
						
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



function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);
	    
	   if(responseCode.responseText == "00"){
		   Swal.fire(
				      'Accepted!',
				      'RFP Evaluation Committee Member Creation successful.',
				      'success'
				    )			
	  //tbl_committee.ajax.url(globalUrl + "/rfp/rfp-committeeview/"+selectedTendderIDfor).load();	
	   }else{
		   Swal.fire({
				type: 'error',
				title: 'Evaluation Committee Member Creation Faild',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   
	}
	   formclear();
}	



function formclear() {
	console.log("formclear");
	$('#ecc_tenderid').val('').trigger("change");
	$('#committee_member').val('').trigger("change");
	//$('#ems_tenderid').find('option').remove().end();
}