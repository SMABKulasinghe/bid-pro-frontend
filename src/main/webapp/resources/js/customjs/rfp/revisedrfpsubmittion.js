var headingincrement;
var dd;
$('#rfpdiv').hide()
/*var table = $('#rfpTable').DataTable({
			aaSorting:[],
			"pageLength": 200,
			"bPaginate": false,
			"select": {
            style:    'os',
            selector: 'td:first-child'
       		 },
});*/
		
var arrHeadingNames = [];	
var arrFieldNames = [];	

rfpDetails = undefined;

$(document).ready(function() {
	
	$('#rfp_id_details').select2({
		placeholder: 'Select a RFP No'
	});
	
	$('#rfp_id_for_tender_update').select2({
		placeholder: 'Select a RFP No'
	});
	
	$('#tender_id_details').select2({
		placeholder: 'Select a Tender No'
	});
	
	getAsyncData('/rfp/rfp-id-for-revised-rfp-submittion', function(res) {
		console.log(res);
		console.log(res.responseJSON);

		$('#rfp_id_details').append(new Option('Select a RFP No', ''))
		for (let item of res.responseJSON) {
			$('#rfp_id_details').append(new Option(item.rfpNo + " - " + item.fileName, item.rfpID))
		}
	});
	
	
	
	getAsyncData('/rfp/tendeid-for-rfp-change-id', function(res) {
		console.log(res);
		console.log(res.responseJSON);

		$('#tender_id_details').append(new Option('Select a tender no', ''))
		for (let item of res.responseJSON) {
			$('#tender_id_details').append(new Option(item.bidno + " - " + item.tendername, item.trnderid))
		}
	});
	
	
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

	
});

var rfpIdglobVar;
var subCatId;
$("body").on('change', '#tender_id_details', function(e){
	
	getAsyncData('/rfp/rfp-for-select/'+$('#tender_id_details').val(), function(res) {
		$('#rfp_id_for_tender_update').val(res.responseJSON.rfpId).trigger("change");
	});
	
	getAsyncData('/rfp/rfp-id-for-revised-rfp-submittion', function(res) {
		console.log(res);
		console.log(res.responseJSON);

		$('#rfp_id_for_tender_update').append(new Option('Select a RFP No', ''))
		for (let item of res.responseJSON) {
			$('#rfp_id_for_tender_update').append(new Option(item.rfpNo + " - " + item.fileName, item.rfpID))
		}
	});
	
})


$("#rfpDiv").on('change', '#rfp_id_details', function(e){
	
	
	
	var $rfpId= $(this).val();
	rfpIdglobVar = $(this).val();
	console.log("rfp id -"+$rfpId);
	
	getAsyncData('/category', function(res) {
		
		console.log("category res-"+res);
		
		$('#productCategory').select2({
    		placeholder: 'Select a Category'
		});
		
		 $('#productCategory').find('option').remove().end();
		 for (let item of res.responseJSON) {
			 $('#productCategory').append(new Option(item.eligibleCategortName, item.eligibleCategortID))
		 }

 	});
	
	getAsyncData('/rfp/prID', function(res) {
		
		console.log("rfp res -"+res);
		
		console.log(res.responseJSON);
		
		$('#procurementRequest').select2({
    		placeholder: 'Select a Procurement Request'
		});
		
		$('#procurementRequest').append(new Option('Select a Procurement Request', ''))
		for (let item of res.responseJSON) {
			  $('#procurementRequest').append(new Option(item.requester, item.prID))
		}
	});	
	
	getAsyncData("/rfp/get-rfp-details-for-edit/"+$rfpId, function(res) {
		
		console.log("rfp details get-"+res);
		
		//res.responseJSON;
		
		$('#rfp_filename').val(res.responseJSON.fileName);
		$('#rfp_prId').val(res.responseJSON.prId);
		
		
		$('#productCategory').val('').trigger("change");
		$('#productCategory').val(res.responseJSON.catId).trigger("change");
		
		$('#procurementRequest').val('').trigger("change");
		$('#procurementRequest').val(res.responseJSON.prId).trigger("change");
		
		console.log("subCat "+res.responseJSON.eligibleSubCatId)
		subCatId = res.responseJSON.eligibleSubCatId;
		
		//$('#productSubCategory').find('option').remove().end();
		//$('#productSubCategory').val('').trigger("change");
		//$('#productSubCategory').val(res.responseJSON.eligibleSubCatId).trigger("change");
		
		$("#currentFile button").remove();
		$('#currentFile').append('<button type="button" data-rfpId="'+$rfpId+'" class="btn btn-success" style="margin-right: 10px" onclick="uploadedFileRfp(event)">View Uploaded File</button>')
		
	});
	rfpTableDetails(rfpIdglobVar);

})

$("#catDiv").on('change', '#productCategory', function(e) {
		$('#productSubCategory').select2({
    		placeholder: 'Select a Sub Category'
		});
		getAsyncData('/tender/sub-category/'+$(this).val(), function(res) {
		    console.log(res);
		  	$('#productSubCategory').find('option').remove().end();
			//$('#productSubCategory').val('').trigger("change");
			//$('#productSubCategory').val(res.responseJSON.eligibleSubCatId).trigger("change");
		    for (let cat of res.responseJSON) {
				$('#productSubCategory').append(new Option(cat.eligibleSubcatname,cat.eligibleSubcatId))
		    }

			$('#productSubCategory').val('').trigger("change");
			$('#productSubCategory').val(subCatId).trigger("change");

		});
		
	//let catid = $(this).val();
	
});

function rfpTableDetails(rfpIdglobVar){
	
	if(rfpDetails == undefined){
		
		rfpDetails = $('#rfpTable').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			aaSorting:[],
			"pageLength": 200,
			
			ajax: {
			   	url:globalUrl+"/rfp/rfp-details-for-edit-table/"+rfpIdglobVar,
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			
			columns: [
					 /*{"data":"index"},*/
					 {"data":"rfpHeaderName"},
					 {"data":"rfpDetailsName"},
			    	 {"data":"rfpID",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button" class="btn btn-primary edit" style="margin-right: 10px" id="edit">Edit</button><button type="button" class="btn btn-success save" style="margin-right: 10px" id="save">Save</button><button class="btn bg-danger pull-center removeField" id="removeField">Remove</button>'
						  },
					},
					/*Read this carefully. Don't put any buttons or inputs after this.'*/
						
								   			    	 
			     ],
			select: {
            style:    'os',
            selector: 'td:first-child'
        	},
			order: [[1, 'asc']],
			
		});
		console.log("Programe");
	}else{
		rfpDetails.ajax.url(globalUrl+"/rfp/rfp-details-for-edit-table/"+rfpIdglobVar).load();
	}
	
	$('#rfpdiv').show()
}


function uploadedFileRfp(event){
	console.log(event.target.getAttribute('data-rfpId'))
	var fileView = event.target.getAttribute('data-rfpId');
	var globlelink = sessionStorage.getItem("GlobleUrl");
	window.open(globlelink+"/rfp/rfp-file-view/"+fileView);
}



$("#rfpTable").on('click', '.removeField', function(e){
	
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
					 	
				$(this).closest('tr').remove();
				var removeRow =  $(this).closest('tr');
				table.row(removeRow).remove().draw();	
								
			}
		});
	
		
});


$(document).on('click', '.edit', function() {

	$(this).parent().siblings('td').each(function() {
		var content = $(this).html();
		$(this).html('<input class="form-control" value="' + content + '" />');
	});						
								
				  
  	/*$(this).siblings('.save').show();*/
	/*$(this).hide();*/
	
});

$(document).on('click', '.save', function() {
	
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
					 	
						$('.rfpTable input').each(function() {
						    var content = $(this).val();
						    $(this).html(content);
						    $(this).contents().unwrap();
						 });
								
				  }
				});
  
  

  /*$(this).siblings('.edit').show();*/
  /*$(this).hide();*/
  
});

function editRfp(event){
	console.log(event.target.getAttribute('data-rfpId'))
	
}

$("#rfpTable").on('click', '.editRfp', function(e){
	console.log(event.target.getAttribute('data-rfpId'))
});

/*var tableData = $('#rfpTable').DataTable();	*/
$("#submit_fields").click(function(){	
		
		var arr = [];		
		let heading = $('#headingNamediv').find('input').val();				
		$('#addedfiledlist1').find('li').each(function(index){			
			arr.push($(this).text());			
		})	
		
		if(heading == "" || arr.length == 0){
			Swal.fire('Please fill heading and field name')
		}else{
			$headingName = $('#headingNamediv').find('input').val();
			tableData.row.add([
			$headingName,
			arr,
				'<button type="button" class="btn btn-primary edit" style="margin-right: 10px" id="edit">Edit</button><button type="button" class="btn btn-success save" style="margin-right: 10px" id="save">Save</button><button class="btn bg-danger pull-center removeField" id="removeField">Remove</button>'
				]			
			).draw();
		}				
		
		$('#addedfiledlist1').empty();
		$('#rfpheadingFields').find('input:text').val(''); 
		
});

$('.add').click(function() {
  $(this).parents('table').append('<tr><td class="data"></td><td class="data"></td><td><button type="button" class="btn btn-primary edit" style="margin-right: 10px" id="edit">Edit</button><button type="button" class="btn btn-success save" style="margin-right: 10px" id="save">Save</button><button class="btn bg-danger pull-center removeField" id="removeField">Remove</button></td></tr>');
});

$('#submit_button').on('click', function() {
	var uploadFile = document.getElementById('upload_file');
	var files = uploadFile.files;
	
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
	if(files.length==0){
            Swal.fire(
				  'Missing',
				  'Please check the required fields!',
				  'warning'
				);
            return false;
     }	
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

$('#submit_button_update_rfp').on('click', function() {
	
	if ($('#tender_id_details').val().length==0) {
		status+=1;
		$('#tender_id_details').parent().parent().addClass('has-error')
	}
	if ($('#rfp_id_for_tender_update').val().length==0) {
		status+=1;
		$('#rfp_id_for_tender_update').parent().parent().addClass('has-error')
	}

	if (status != 0) {
		Swal.fire(
				  'Missing',
				  'Please check the required fields or table is empty!',
				  'warning'
				);		
	}else{
	
	var rfp = {
				"tenderId" : $('#tender_id_details').val(),
				"rfpId" : $('#rfp_id_for_tender_update').val(),
								
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
					  
						var	 responseCode = getAsyncDataPOST("/rfp/tender-rfp-changed",rfp,confirmedCallBack)
						
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

function confirmedCallBack(responseCode){
	
	   if(responseCode.responseText!= null || responseCode.responseText=="Success"){
		   Swal.fire(
				      'Accepted!',
				      'RFP change has been created successfully.',
				      'success'
				    )
			formclear();
			
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'RFP change creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	   formclear();
}	

function formclear(){
	/*$('#rfp_no').val('');*/
	$('#rfp_filename').val('');
	$('#rfp_filename').val('');
	$('#rfp_fieldName').val('');		
	$('#tender_id_details').val('').trigger("change");
	$('#rfp_id_for_tender_update').val('').trigger("change");
}