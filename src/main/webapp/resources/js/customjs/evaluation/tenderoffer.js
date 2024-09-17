$('#tenderOfferTable').hide()

$(document).ready(function() {
	tenderOfferTable = undefined;;
	
	$('#tenderIdd').select2({
		placeholder: 'Select a Tender No'
	});
	
	getAsyncData('/evaluation/get-tender-ids', function(res) {
	    console.log(res);
	    console.log(res.responseJSON.data);
	    
	      $('#tenderIdd').append(new Option('Select a tender no', ''))
	      for (let tender of res.responseJSON.data) {
	        
				$('#tenderIdd').append(new Option(tender.tBidNumber+"-"+tender.tenderName,tender.tenderId))
	    }
			
	});
	

});	





	

$("body").on('change', '#tenderIdd', function(e){
	
	/*$('#evaluationMarkSummeryTableBody').find('tr td:eq(1)').css('color', 'red');*/
	//loadMyTable($("#tenderIdd").val());
	
	var $tenderId= $(this).val();
	
	
	if(tenderOfferTable == undefined){
		console.log("5");
		tenderOfferTable = $('#tenderOfferTable').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			
			
            
			
			ajax: {
			   	url:globalUrl+"/evaluation/get-evaluation-all-marks/"+$tenderId,
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 
			    	 {"data":"venderName",class:"text-white"},
					 {"data":"mark",class:"text-white"},
					 {"data":"place", "orderable": false,class:"text-white"},
					 {"data":"votes",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.votes >= 3){
								return '<span class="badge badge-success">Vote count - '+row.votes+'</span>'
							}else if(row.votes <= 3){
								//return '<button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="active('+data+')">Already voted</button>'
								if(row.votes == null){
									return '<span class="badge badge-danger">Vote count - 0</span>'
								}else{
									return '<span class="badge badge-danger">Vote count - '+row.votes+'</span>'
								}
								
							}
							  
							  
						  },	class:"text-white"	
					 },
					 {"data":"id",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.status == 2){
								return '<button type="button" data-venderName="'+row.venderName+'" data-date="'+row.date+'" data-tenderName="'+row.tenderName+'" data-cordinatorName1="'+row.cordinatorName1+'" data-cordinatorTP1="'+row.cordinatorTP1+'" class="btn btn-success" style="margin-right: 10px" onclick="offerTender('+data+', '+row.tenderId+','+row.companyCode+',event)">Select Vendor</button>'
							}else if(row.status == 10){
								return '<span class="badge badge-success">Qualified Vender</span>'
							}else{
								return '<span class="badge badge-primary">Disqualified Vender</span>'
							}
							  
							  
						  },class:"text-white"	
					},
					
					
			     ],
			order: [[1, 'asc']],
			//pageLength : 5,
			
    		
		})
		
		}else{
			console.log("Else part");
			
			tenderOfferTable.ajax.url(globalUrl+"/evaluation/get-evaluation-all-marks/"+$tenderId).load();
			
		}
		$('#tenderOfferTable').show()
});

function offerTender(id,tenderId,companyCode,event){
	//alert(id);
	console.log(event.target.getAttribute('data-venderName'))
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes!'
		}).then((result) => {
		  if (result.value) {
			$('#mdl_tender_offer_div').find('#allMarksId').remove()
			$('#mdl_tender_offer_div').find('#tenderId').remove()
			$('#mdl_tender_offer_div').find('#companyCode').remove()
			//$('#mdl_tender_offer_div').find('#mdl_ar_com_name').append('Offer tender to this '+venderName+'')
			$('#mdl_tender_offer_div').append('<input type="hidden" id="allMarksId" name="allMarksId" value="'+id+'">')
			$('#mdl_tender_offer_div').append('<input type="hidden" id="tenderId" name="tenderId" value="'+tenderId+'">')
			$('#mdl_tender_offer_div').append('<input type="hidden" id="companyCode" name="companyCode" value="'+companyCode+'">')
			
			$('#supplierNameDiv input').remove()
			$('#supplierNameDiv').append(`<input id="supplierName" name="supplierName"
								type="text" class="form-control" value="`+event.target.getAttribute('data-venderName')+`" disabled="disabled">`)
			
			$('#divClassDate span').remove()
			$('#divSuppilerName span').remove()
			$('#divTenderName span').remove()
			$('#divCordinatorName span').remove()
			$('#divCorContactNum span').remove()
			
			$('#divClassDate').append('<span>'+event.target.getAttribute('data-date')+'</span>')
			$('#divSuppilerName').append('<span>'+event.target.getAttribute('data-venderName')+'</span>')
			$('#divTenderName').append('<span>'+event.target.getAttribute('data-tenderName')+'</span>')
			$('#divCordinatorName').append('<span>'+event.target.getAttribute('data-cordinatorName1')+'</span>')
			$('#divCorContactNum').append('<span>'+event.target.getAttribute('data-cordinatorTP1')+'</span>')
			
			$('#mdl_tender_offer').modal('toggle');
		  
		  }
		})
	
}

$('#Submit').on('click', function() {
	
	if ($('#allMarksId').val().length==0) {
		status+=1;
		$('#allMarksId').parent().parent().addClass('has-error')
	}if ($('#tenderId').val().length==0) {
		status+=1;
		$('#tenderId').parent().parent().addClass('has-error')
	}if ($('#name').val().length==0) {
		status+=1;
		$('#name').parent().parent().addClass('has-error')
	}if ($('#description').val().length==0) {
		status+=1;
		$('#description').parent().parent().addClass('has-error')
	}if ($('#companyCode').val().length==0) {
		status+=1;
		$('#companyCode').parent().parent().addClass('has-error')
	}else{
		var data = {
		"allMarksId" : $('#allMarksId').val(),
		"tenderId" : $('#tenderId').val(),
		"companyCode" : $('#companyCode').val(),
		"name" : $('#name').val(),
		"description" : $('#description').val(),
				}
				
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
					
					var responseCode =  getAsyncDataPUT("/evaluation/submit-evaluation-all-marks", data, confirmedCallBack)		
					console.log("Response CODE 1"+responseCode);
					if(responseCode == undefined){
							Swal.fire({
							  title: 'Sending emails...',
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
	};
	
	
	
	
});

function formclear(){
	$('#allMarksId').val('');
	$('#tenderId').val('');
	$('#name').val('');
	$('#description').val('');
	
}

function confirmedCallBack(responseCode){
	//console.log(responseCode);
	console.log("Response CODE 2"+responseCode);
	$("#submit_button").prop("disabled",false);

	    
	   if(responseCode.responseText!= null){
		   
		   Swal.fire(
				      'Accepted!',
				      'Tender Offer has been created successfully.',
				      'success'
				    )
			tenderOfferTable.ajax.url(globalUrl+"/evaluation/get-evaluation-all-marks/"+$('#tenderId').val()).load();
			$('#mdl_tender_offer').modal('hide');
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Tender Offer creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
			tenderOfferTable.ajax.url(globalUrl+"/evaluation/get-evaluation-all-marks/"+$('#tenderId').val()).load();
			$('#mdl_tender_offer').modal('hide');
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










































$('#emailTestButton').on('click', function() {

	var testMail = {
				"email" : "sending",
			};
			
			
			console.log(JSON.stringify(testMail));
			
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
					  
						var	 responseCode = getAsyncDataPOST("/tender/test-emails",testMail,confirmedCallBack)
						
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
