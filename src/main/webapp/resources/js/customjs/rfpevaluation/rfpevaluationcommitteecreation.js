$('#eveCommitteeTable').hide();

$(document).ready(function() {
	tbl_committee = undefined;
	
	  $('#reg_date').datepicker({
	      autoclose: true
	    });

	$('#ecc_tenderid').select2({
		placeholder: 'Select a Tender No'
	});

 	getAsyncData('/rfp/tenderids-for-rfp-eva-com-creation', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		$('#ecc_tenderid').append(new Option('Select a tender no', ''))
		for (let item of res.responseJSON.data) {
			$('#ecc_tenderid').append(new Option(item.tBidNumber+" - "+ item.tenderName, item.tenderId))
		}
		
	});
	
});

var selectedTendderIDfor;
$("body").on('change', '#ecc_tenderid', function(e) {
	
	let tender_ID = $('#ecc_tenderid').val();
	console.log(tender_ID);
	loadTable(tender_ID)
	selectedTendderIDfor = tender_ID;
});

function loadTable(tender_ID) {
	$('#eveCommitteeTable').show();
	if (tbl_committee == undefined) {
		tbl_committee = undefined;
		console.log("Inside");
	tbl_committee = $('#tbl_committee').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/rfp/rfp-committeeview/"+tender_ID,
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		    	 	{ "data": "index", className: "text-right"},
		            { "data": "tenderNo" },
		            { "data": "tenderName"},
					{ "data": "committeMember"} 
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
			tbl_committee.ajax.url(globalUrl + "/rfp/rfp-committeeview/"+tender_ID).load();
		}
	}
}


$('#committee_member').select2({
		placeholder: 'Select a Committee Member'
	});

 getAsyncData('/evaluation/committeememberId', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		  $('#committee_member').append(new Option('Select a committee member', ''))
		  for (let item of res.responseJSON) {
			  $('#committee_member').append(new Option(item.companyCode+" - "+ item.userid, item.userid))
		}
});



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
		$('#committee_member').parent().parent().addClass('has-error')
		}
		else{
		$('#committee_member').parent().parent().addClass('has-success')
		}
	
		console.log('Clicked');
	
	var committee = {
		"tenderID" : $('#ecc_tenderid').val(),
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
					  
						var	 responseCode = getAsyncDataPOST("/rfp/addrfpevaluationcommittee",committee,confirmedCallBack)
						
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
	    
	   if(responseCode.responseJSON.code == "00"){
		   Swal.fire(
				      'Accepted!',
				      'RFP Evaluation Committee Member Creation successful.',
				      'success'
				    )			
	  tbl_committee.ajax.url(globalUrl + "/rfp/rfp-committeeview/"+selectedTendderIDfor).load();	
	   }else if(responseCode.responseJSON.code == "01"){
		   Swal.fire({
				type: 'info',
				title: 'RFP Evaluation Committee Member Already Exists',
				text: 'Please select a different Committee Member !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
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