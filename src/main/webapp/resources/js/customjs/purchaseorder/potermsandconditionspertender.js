$('#trmsAndConTblDiv').hide()

$( document ).ready(function() {
	//alert("ssssss");
	console.log('contractCreationJS Ready');
	trmsAndConTable = undefined;
	trmsAndConTable1 = undefined;
	getTenders();
	getTendersTable();
	getTermsAndConditions();
	termsAndConditionsTble();
});

function getTenders(){
	getAsyncData('/po/get-tender-ids', function(res) {
	    console.log(res);
	    console.log(res.responseJSON.data);
	    $('#tenderIddd').find('option').remove().end();
	      $('#tenderIddd').append(new Option('Select a tender no', ''))
	      for (let tender of res.responseJSON.data) {
	        
				$('#tenderIddd').append(new Option(tender.tBidNumber+"-"+tender.tenderName,tender.tenderId))
	    }
			
	});
}

function getTermsAndConditions(){
	getAsyncData('/po/get-terms-and-con', function(res) {
	    console.log(res);
	    console.log(res.responseJSON.data);
	    $('#trms_n_con').find('option').remove().end();
	      $('#trms_n_con').append(new Option('Select a Term or Condition', ''))
	      for (let trmCon of res.responseJSON.data) {
	        
				$('#trms_n_con').append(new Option(trmCon.trmAndCon,trmCon.trmAndConId))
	    }
			
	});
}

function getTendersTable(){
	getAsyncData('/po/get-tender-ids', function(res) {
	    console.log(res);
	    console.log(res.responseJSON.data);
	    $('#tenderDetailsTable').find('option').remove().end();
	      $('#tenderDetailsTable').append(new Option('Select a tender no', ''))
	      for (let tender of res.responseJSON.data) {
	        
				$('#tenderDetailsTable').append(new Option(tender.tBidNumber+"-"+tender.tenderName,tender.tenderId))
	    }
			
	});
}
	
$('#submit_button_for_tender').on('click', function() {
	 var status = 0;
	let count = 1;
	if(count == 1){
		getAsyncData("/po/terms-con/isexists/by/" +$("#tenderIddd").val()+"/"+$("#trms_n_con").val(), existsCallBack2);
	}
	if ($('#tenderIddd').val().length==0) {
		status+=1;
		$('#tenderIddd').parent().parent().addClass('has-error')
	}
	if ($('#trms_n_con').val().length==0) {
		status+=1;
		$('#trms_n_con').parent().parent().addClass('has-error')
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
		
		var termAndConditions = {
				"tenderId" : $('#tenderIddd').val(),
				"trmAndCon" : $('#trms_n_con').val(),
			};
			
			console.log(JSON.stringify(termAndConditions));
			
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
						var responseCode =  getAsyncDataPOST("/po/add-term-and-conditions-to-trans-tbl", termAndConditions, confirmedCallBack2)
						
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



function confirmedCallBack3(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);

	    
	   if(responseCode.responseText!= null || responseCode.responseText=="Success"){
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'Term or Condtion has been created successfully.',
				      'success'
				    )
		trmsAndConTable1.ajax.url(globalUrl+"/po/view-terms-and-conditions").load();
		$('#submit_terms_condition_edit').modal('hide');
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Term or Condtion creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	    
}

function confirmedCallBack2(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);

	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'Terms and Conditions has been created successfully for tender.',
				      'success'
				    )
		trmsAndConTable.ajax.url(globalUrl+"/po/terms-and-conditions-table/"+$('#getTenderIdVal').find('select').val()).load();
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Terms and Conditions creation failed for tender',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	    
}


$("#searchUserIDButton").click(function(){
	
	var $tenderId= $('#getTenderIdVal').find('select').val();
	console.log($tenderId);
	//alert($('#getTenderIdVal').find('select').val())
	if($('#getTenderIdVal').find('select').val() == null || $('#getTenderIdVal').find('select').val() == ""){
		
		Swal.fire({
			type : 'error',
			title : 'Please select Tender number*',
			//text : 'Tender number is already taken !',
			
		});
		
	}else{
		
		if(trmsAndConTable == undefined){
			trmsAndConTable = $('#trms_and_con_tbl').DataTable({
				
				processing: true,
				serverSide: true,
				responsive: true,
				ajax: {
				   	url:globalUrl+"/po/terms-and-conditions-table/"+$('#getTenderIdVal').find('select').val(),
				    type: 'GET',
				    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
				},
				columns: [
						 {"data":"index"},
				    	 {"data":"trmsAndCon"},
						 {"data":"status",
							orderable: false,
			            	 render: function(data,type,row,meta) {
								if(row.status == 3){
									return '<span class="badge badge-success">Active</span>'
									
								}else if(row.status == 6){
									return '<span class="badge badge-info">Disabled</span>'
									
								}
								  
								  
							  },	
						},
						{"data":"trmsAndConTransId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.status == 3){
								return '<button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="deactive('+data+')">Disabled</button>'
							}else if(row.status == 6){
								return '<button type="button"  class="btn btn-success" style="margin-right: 10px" onclick="active('+data+')">Active</button>'
							}
							  
							  
						  },	
					},
						
						
				     ],
				order: [[1, 'asc']],
			})
			
		}else{
			trmsAndConTable.ajax.url(globalUrl+"/po/terms-and-conditions-table/"+$('#getTenderIdVal').find('select').val()).load();
		}
		
	}
	$('#trmsAndConTblDiv').show()
	$('#getTenderIdVal').val('').trigger("change");
})

function active(data){
	console.log(data);
	//alert(data);
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes! Active'
		}).then((result) => {
		  if (result.value) {
			
			  getAsyncData("/po/terms-and-conditions-status/"+ data+"/active", function(res) {
			  trmsAndConTable.ajax.url(globalUrl+"/po/terms-and-conditions-table/"+$('#getTenderIdVal').find('select').val()).load();
			 	})
		  
		  }
		})
}

function deactive(data){
	console.log(data);
	//alert(data);
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, Disabled!'
		}).then((result) => {
		  if (result.value) {
			
			  getAsyncData("/po/terms-and-conditions-status/"+ data+"/deactive", function(res) {
			  trmsAndConTable.ajax.url(globalUrl+"/po/terms-and-conditions-table/"+$('#getTenderIdVal').find('select').val()).load();
			 	})
		  
		  }
		})
}


function existsCallBack2(res){
	console.log(res);

	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "termsConTure") {
		console.log(res.responseText);
		
		formclear();   
		
		Swal.fire({
			type : 'error',
			title : 'Please use a different Tender number and Term or Conditions*',
			text : 'Tender number and Committee member is already taken !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
	} 
}

function formclear() {
	$('#terms_and_conditions').val('');
	$('#tenderIddd').val('');
	$('#trms_n_con').val('');
}