$('#financialCodeTableDiv').hide()
$(document).ready(function() {
	  $('#reg_date').datepicker({
	      autoclose: true
	    });
	financialCodeTable = undefined;
	//financialCodeView();
	
	$('#financialPertenderId').select2({
		placeholder: 'Select a Tender No'
	});
	
	$('#fin_tenderid').select2({
		placeholder: 'Select a Tender No'
	});
	
	$('#fin_financialCode').select2({
		placeholder: 'Select a Financial code'
	});
	
	getAsyncData('/tender/tendeid-for-financial-per-tender', function(res) {
		console.log(res);
		console.log(res.responseJSON);

		$('#financialPertenderId').append(new Option('Select a tender no', ''))
		for (let item of res.responseJSON) {
			$('#financialPertenderId').append(new Option(item.bidno + " - " + item.tendername, item.trnderid))
		}
	});
	
	getAsyncData('/tender/tendeid-for-financial-per-tender', function(res) {
		console.log(res);
		console.log(res.responseJSON);

		$('#fin_tenderid').append(new Option('Select a tender no', ''))
		for (let item of res.responseJSON) {
			$('#fin_tenderid').append(new Option(item.bidno + " - " + item.tendername, item.trnderid))
		}
	});
	
	getAsyncData('/tender/financialid-for-financial-per-tender', function(res) {
		console.log(res);
		console.log(res.responseJSON);

		$('#fin_financialCode').append(new Option('Select a Financial code', ''))
		for (let item of res.responseJSON) {
			$('#fin_financialCode').append(new Option(item.code + " - " + item.description, item.financialCodeId))
		}
	});
});


$('#submit_button').on('click', function() {
	
	console.log($('.radio_btn').val())
	console.log($('#fin_tenderid').val())
	console.log($('#fin_financialCode').val())
	//input[name="currency_type"]:checked
	if ($('#fin_tenderid').val().length==0) {
		status+=1;
		$('#fin_tenderid').parent().parent().addClass('has-error')
	}if ($('#fin_financialCode').val().length==0) {
		status+=1;
		$('#fin_financialCode').parent().parent().addClass('has-error')
	}if ($('.radio_btn').val().length==0) {
		status+=1;
		$('.radio_btn').parent().parent().addClass('has-error')
	if (status != 0) {
		Swal.fire(
				  'Missing',
				  'Please check the required fields is empty!',
				  'warning'
				);
		
	}}else{
	//console.log("after validation");
	
	var code = {
				"tenderId" : $('#fin_tenderid').val(),
				"financialCodeId" : $('#fin_financialCode').val(),
				"cappex" : $('input[name="radio_btn"]:checked').val(),
			};
			//console.log(evaArray);
			console.log(JSON.stringify(code));

			
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
					  
						var	 responseCode = getAsyncDataPOST("/tender/financial-code-per-tender-submit",code,confirmedCallBack)
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
	$("#financial_code td").remove();
	}
});


$("#searchUserIDButton").click(function(){
	
	var $tenderId= $('#getTenderIdVal').find('select').val();
	//alert($('#getTenderIdVal').find('select').val())
	if($('#getTenderIdVal').find('select').val() == null || $('#getTenderIdVal').find('select').val() == ""){
		
		Swal.fire({
			type : 'error',
			title : 'Please select Tender number*',
			//text : 'Tender number is already taken !',
			
		});
		
	}else{
		
		if(financialCodeTable == undefined){
			financialCodeTable = $('#financialCodeTable').DataTable({
				
				processing: true,
				serverSide: true,
				responsive: true,
				ajax: {
				   	url:globalUrl+"/tender/financial-per-tender-view/"+$('#getTenderIdVal').find('select').val(),
				    type: 'GET',
				    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
				},
				columns: [
						 {"data":"index"},
				    	 {"data":"financialCode"},
						/* {"data":"tenderNumber"},
						 {"data":"tenderName"}, */
						 {"data":"cappex",
							orderable: false,
			            	 render: function(data,type,row,meta) {
								if(row.cappex == "Yes"){
									return '<span class="badge badge-success">Cappex</span>'
									
								}else if(row.cappex == "No"){
									return '<span class="badge badge-info">Oppex</span>'
									
								}
								  
								  
							  },	
						},
						
						
				     ],
				order: [[1, 'asc']],
			})
			
		}else{
			financialCodeTable.ajax.url(globalUrl+"/tender/financial-per-tender-view/"+$('#getTenderIdVal').find('select').val()).load();
		}
		
	}
	$('#financialCodeTableDiv').show()
	$('#getTenderIdVal').val('').trigger("change");
})
	
function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);
	    
	   if(responseCode.responseText!= null || responseCode.responseText=="Success"){
		   Swal.fire(
				      'Accepted!',
				      'Financial code has been created successfully.',
				      'success'
				    )
			formclear();
			financialCodeTable.ajax.url(globalUrl+"/tender/financial-per-tender-view/"+$('#getTenderIdVal').find('select').val()).load();
			$('#submit_financial_code').modal('hide');
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Financial code creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	   formclear();
}	

function formclear(){
	$('#fin_tenderid').val('').trigger("change");
	$('#fin_financialCode').val('').trigger("change");
	$('input[name="radio_btn"]:checked').attr('checked',false);
	
	var ele = document.getElementsByName("radio_btn");
   	for(var i=0;i<ele.length;i++)
      ele[i].checked = false;
}	
	

	

