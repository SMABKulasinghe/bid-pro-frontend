

$("#titleAssetSW").text("Asset Transfer");
console.log("Inside Asset Transfer JS");


$("#subCategorySet").hide();
$("#assetTableDiv").hide();
$("#footerDiv").hide();

$("#search_asset_button").prop("disabled",true);

var contractTable;

var contractArray = {};

var userCompanyType;


$(document).ready(function(){
	var user = JSON.parse(sessionStorage.getItem('User'));
	
	// transfer ID
	var assetTransferID = undefined;
	
	console.log(user.companyCode);
	
	getAsyncData("/users/statusCheckForCS/"+user.companyCode, confirmedCallBack);
	 
	 function confirmedCallBack(responseCode){
			console.log(responseCode);
			if(responseCode.responseJSON != null){
				console.log(responseCode.responseJSON.subCompanyBool);
				userCompanyType = responseCode.responseJSON.subCompanyBool;
			//	loadContractDetailsTable();
				
			}
			
	 }
	 
		contractTable = undefined;
		console.log("RR");

		$('#example tbody').on( 'click', 'tr', function () {
		    $(this).toggleClass('selected');
		} );

		
		$('#assetCategory').select2({
			  placeholder: 'Select a province'
		  });
		  

		 getAsyncData("/asset/getassetcategory/"+user.companyCode, confirmedCallBack2);
		 
		 function confirmedCallBack2(responseCode){
				console.log(responseCode);
				if(responseCode.responseJSON != null){
					console.log(responseCode.responseJSON);
					console.log(responseCode.responseJSON.subCategory);
					 var json = responseCode.responseJSON.subCategory;
					for(var i = 0; i < json.length; i++) {
					    var obj = json[i];

					    console.log(obj);
					    
					    $('#assetCategory').append(new Option(obj.categoryName, obj.categoryID))
					}
				}
		 }
		
		 

			$('#assetCategory').on('change', function() {
				console.log("assetCategory Changed "+this.value);
				$('#assetSubCategory').find('option').remove().end();
				getAsyncData("/asset/getassetsubcategory/"+this.value, confirmedCallBack3);
				 
				 function confirmedCallBack3(responseCode){
						console.log(responseCode);
						if(responseCode.responseJSON != null){
							console.log(responseCode.responseJSON);
							console.log(responseCode.responseJSON.subCategory);
							 var json = responseCode.responseJSON.subCategory;
							for(var i = 0; i < json.length; i++) {
							    var obj = json[i];

							    console.log(obj);
							    
							    $('#assetSubCategory').append(new Option(obj.subCategoryName, obj.subCategoryID))
							}
						}
				 }
				// $("#subCategorySet").show();
				 
				 if(this.value=="0"){
					 $("#search_asset_button").prop("disabled",true);
					 $('#subCategorySet').fadeOut(1000,function() {});
					 $('#footerDiv').fadeOut(1000,function() {});
					 $('#assetTableDiv').fadeOut(1000,function() {});
				 }else{
					 $('#subCategorySet').fadeIn(1000, function() {
						 //$("#selectionDiv").hide();
						 $("#search_asset_button").prop("disabled",false);
						 $('#footerDiv').fadeIn(1100,function() {});
						});
				 }
				 $("#search_asset_button").prop("disabled",false);
				
			});
		 
			$('#assetSubCategory').on('change', function() {
				const cat = $('#assetCategory').val();
				const subCat = $('#assetSubCategory').val();
				
				console.log("assetSubCategory Changed "+this.value);
				loadContractDetailsTable(cat, subCat);
				
				//$("#assetTableDiv").show();
				// $('#assetTableDiv').fadeIn(1000,function() {});
				$("#search_asset_button").prop("disabled",false);
			});
	 
});





$('#search_asset_button').on('click', function() {
	
console.log("Search "+" "+$('#assetCategory').val()+" "+$('#assetSubCategory').val());
	
	var cat = $('#assetCategory').val();
	var subCat = $('#assetSubCategory').val();
	
	
	if(cat){
		
		
	}
	
	loadContractDetailsTable(cat, subCat);
});
	 

function loadContractDetailsTable(cat, subCat){
 

	/*if(userCompanyType){
		parameter = "viewall";
	}else{
		parameter = "supplier";
	}
	*/
	//console.log(parameter);
	console.log("/asset/assettransfer/category/"+cat+"/subcategory/"+subCat);

	$("#contractTableDiv").fadeIn(1000,function() {});
	$("#assetTableDiv").fadeIn(1000,function() {});
//	console.log(contractTable);
	if(contractTable == undefined){
	//	console.log("Inside");
		contractTable = $('#example').DataTable({
			
			processing: true,
			 serverSide: true,
			
		     ajax: {
		    	 url:globalUrl+"/asset/assettransfer/category/"+cat+"/subcategory/"+subCat,
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		            { "data": "supplierName", orderable: false,}, 			            	 		            	 
		            { "data": "currentLocation" },
		            { "data": "transferedFrom" },
		            { "data": "brnad" },		            
		            { "data": "model" },
		            { "data": "currentMarketValue",				            	
		            	className: "text-right",
		            	 render: function(data,type,row,meta) {
		            		 return currencyFormat(data);
		            	 }
		            },
		            /*{ "data": "disposableAmount",				            	
		            	className: "text-right",
		            	render: function(data,type,row,meta) {
		            		return currencyFormat(data);
		            	}
		            },*/
		            { "data": "serialNo"},
		            { "data": "color", orderable: false,},
		            { "data": "assetCode",				            	
		            	className: "text-right",
		            	 render: function(data,type,row,meta) {
		            		 return '<Button type="button" class="btn btn-info" onclick="transferAsset('+data+')">Transfer</Button>';
		            	 }
		            }, 
		            {
	                     "className":      'details-control',
	                     "orderable":      false,
	                     "data":           null,
	                     "defaultContent": ''
	                 }
		            
		        ],
			
		//	dom: 'Bfrtip',
		    dom:"<'row'<'col-sm-12'B>>" +  
	        	"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
	        "<'row'<'col-sm-12'tr>>" +
	        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			
			buttons: [
				'copy', 'csv', 'excel', 'pdf', 'print'
			],
			'columnDefs': [			            
	            /*{ "width": "50%", "targets": 7 },
	            { "width": "50%", "targets": 8 }*/
	            
	         ],			         
	          'order': [[1, 'asc']]
		
		});
		
	}else{
		console.log("TableElse");
		contractTable.ajax.url(globalUrl+"/asset/assettransfer/category/"+cat+"/subcategory/"+subCat).load();
		
	}
	
	$("#search_asset_button").prop("disabled",true);
}


$('#example tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = contractTable.row( tr );

    if ( row.child.isShown() ) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
    }
    else {
        // Open this row
        row.child( format(row.data()) ).show();
        tr.addClass('shown');
    }
} );



function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
        '<tr>'+           
        	'<td class="text-yellow">Transfered To Location</td>'+
        	'<td class="text-yellow">Transfer Comment</td>'+
            '<td class="text-yellow">Disposable Amount</td>'+
            '<td class="text-yellow">Deprication Amount</td>'+
            '<td class="text-yellow">Deprication Method</td>'+
            '<td class="text-yellow">Current Condition Code</td>'+
            '<td class="text-yellow">Last Inspected By</td>'+
            '<td class="text-yellow">Last Repair Date</td>'+
            
            /*  '<td>Signed Supplier</td>'+
            '<td>PO Date</td>'+
            '<td>Created By</td>'+
            '<td>Expiration Date</td>'+
            '<td>Modified By</td>'+*/
            
        '</tr>'+
        '<tr>'+
          //  '<td>'+new Date(d.expiryDate).toLocaleString()+'</td>'+
          //  '<td>'+new Date(d.buyingDate).toLocaleString()+'</td>'+
        	'<td>'+d.transferedToLocation+'</td>'+ 
        	'<td>'+d.transferComment+'</td>'+ 
            '<td class="text-right">'+currencyFormat(d.disposableAmount)+'</td>'+            
            '<td class="text-right">'+currencyFormat(d.depricationAmount)+'</td>'+
            '<td>'+d.depricationMethod+'</td>'+
            '<td>'+d.currentConditionCode+'</td>'+ 
            '<td>'+d.lastInspectedBy+'</td>'+
            '<td>'+getDateFormat(d.lastRepairDate)+'</td>'+ 
            
            /*'<td>'+d.signedBySupplier+'</td>'+
            '<td>'+d.PODate+'</td>'+
            '<td>'+d.createdBy+'</td>'+
            '<td>'+d.boardApprovalNo+'</td>'+
            '<td>'+d.modifiedBy+'</td>'+*/
           
        '</tr>'+       
               
        
        '</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+
        '<tr>'+
        '<td class="text-yellow">Buying Date</td>'+
        '<td class="text-yellow">Asset Movement Status</td>'+
        '<td class="text-yellow">Transferred Date</td>'+
        '<td class="text-yellow">Transfered From</td>'+
        '<td class="text-yellow">Current Location</td>'+
        '<td class="text-yellow">Supplier Email</td>'+
        
        
        '<tr>'+
        '<td>'+getDateFormat(d.buyingDate)+'</td>'+
        '<td>'+d.assetmovementStatus+'</td>'+
        '<td>'+getDateFormat(d.transferredDate)+'</td>'+
        '<td>'+d.transferedFrom+'</td>'+
        '<td>'+d.currentLocation+'</td>'+
        '<td>'+d.email+'</td>'+
        
        
        '</table>'+
        
        '</tr>'+       
        
        
        '</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+
        '<tr>'+
        '<td class="text-yellow">Last Inspected By</td>'+
        '<td class="text-yellow">Registration No</td>'+
        '<td class="text-yellow">Serial No</td>'+
        '<td class="text-yellow">Color</td>'+
        '<td class="text-yellow">Last Repair Date</td>'+
        '<td class="text-yellow">RAM(GB)</td>'+
        '<td class="text-yellow">HDD(GB)</td>'+
        '<td class="text-yellow">Processor(GHz)</td>'+
        
        
        '<tr>'+
        '<td>'+d.lastInspectedBy+'</td>'+
        '<td>'+d.registrationNo+'</td>'+
        '<td>'+d.serialNo+'</td>'+
        '<td>'+d.color+'</td>'+
        '<td>'+getDateFormat(d.lastRepairDate)+'</td>'+
        '<td>'+d.RAM+' GB</td>'+
        '<td>'+d.HDD+' GB</td>'+
        '<td>'+d.processor+' GHz</td>'+
        
        
        '</table>'+
        
    '</table>'/*+
    '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
    '<tr>'+
    '<td class="text-green">View Image</td>'+
    '<td class="text-blue">Edit</td>'+
    '<td class="text-red">Remove</td>'+
    
    
    '<tr>'+
    '<td><Button type="button" class="btn btn-success" onclick="viewImage(\'CONimg\','+d.currentMarketValue+','+d.currentMarketValue+')">View Image</Button></td>'+
    '<td><Button type="button" class="btn btn-info" onclick="editAsset('+d.assetCode+')">Transfer</Button></td>'+ 
    
    
    '</table>'*/;
}

function viewImage(buttonID, ContractID, ContractNo){
	console.log(buttonID+" "+ ContractID+" "+ContractNo);
	//$("#imgLocation").attr("src", path);
	
	if(buttonID=="CONimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/contract/'+ContractID+'/con');
		 $('#mdl_ar_com_name').text("Asset Image");
		 $('#mdl_ii_contract_no').text(ContractNo);
	}else if(buttonID=="BAimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/contract/'+ContractID+'/ba');
		 $('#mdl_ar_com_name').text("Board Approval Image");
		 $('#mdl_ii_contract_no').text(ContractNo);
	}else if(buttonID=="POimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/contract/'+ContractID+'/po');
		 $('#mdl_ar_com_name').text("Purchase Order Image");
		 $('#mdl_ii_contract_no').text(ContractNo);
	}
	
	$('#mdl_issue_invoice').modal('toggle');
	
}



function getDateFormat(date){
	let current_datetime = new Date(date)
	let monthFormated = current_datetime.getMonth();
	let dateFormated = current_datetime.getDate();
	
	if((current_datetime.getMonth() + 1)<10){
		monthFormated = "0"+(current_datetime.getMonth()+1);
	}
	
	if((current_datetime.getDate())<10){
		dateFormated = "0"+(current_datetime.getDate());
	}
	
	let formatted_date = dateFormated + "-" + (monthFormated) + "-" + current_datetime.getFullYear()
	console.log(formatted_date)
	return formatted_date;
}



function transferAsset(assetID){
	
	var data = {};
	data.assetCode = assetID;
	console.log(assetID);


	Swal.fire({
		  title: 'Are you sure?',
		  text: "You want to transfer this asset!",
		  type: 'info',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Yes, Transfer!'
		}).then((result) => {
		  if (result.value) {
			  getAsyncData("/asset/getasset/"+assetID, confirmedCallBack);
				 
				 function confirmedCallBack(responseCode){
						//console.log(responseCode);
						if(responseCode.responseJSON != null){
							console.log(responseCode.responseJSON);
							

							var data = responseCode.responseJSON;
							
							  $("#mdl_ii_contract_no").text(data.serialNo);
								
							  
							  $("#currentLocation_edit").val(data.currentLocation);
							//  $("#destination_edit").val(data.transferedFrom );
							  
							  assetTransferID = assetID;
							
							$('#mdl_issue_invoice').modal('toggle');
							
						}
						
				 }
				 
				 
				 
			/* if(responseCode.responseText =="success"){
				 Swal.fire(
					      'Asset Edited!',
					      'Asset Edited successfully.',
					      'success'
					    ); 				
				 
				 $('#selectionDiv').fadeOut(1000, function() {
					 //$("#selectionDiv").hide();
					});
				 
				
			 }else{
				 Swal.fire(
					      'Asset Edit Failed!',
					      'Please Try Again.',
					      'error'
					    );
			 }*/
		    
		  }
		});
	
	
	//sw end
	
}






$('#update_asset_button').on('click', function() {
	console.log("update_asset_button");
	
status = 0;
	
	if ($('#destination_edit').val().length==0) {
		status+=1;
		$('#destination_edit').parent().parent().addClass('has-error')
	}
	
	if ($('#move_comment').val().length==0) {
		status+=1;
		$('#move_comment').parent().parent().addClass('has-error')
	}
	
	
	if(!$('#acceptTerms').prop("checked")){
		Swal.fire(
				  'Confirm',
				  'Please confirm the asset information update!',
				  'warning'
				);
	}else{
	if (status==0) {
			console.log("Update OK");
			var data = {};
			
			data.assetCode = assetTransferID;
			data.transferedToLocation = $("#destination_edit").val();
			data.transferComment = $("#move_comment").val();
			
			console.log(data);
			

			Swal.fire({
				  title: 'Are you sure?',
				  text: "You want to transfer this asset!",
				  type: 'info',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, Upadte!'
				}).then((result) => {
				  if (result.value) {
					var responseCode =  postFunction("/asset/transferAsset", data)		
					//console.log(responseCode);
					 if(responseCode.responseText =="success"){
						 Swal.fire(
							      'Asset Information Updated!',
							      'Asset Information Updated successfully.',
							      'success'
							    ); 				
						 /*clearForm();*/
						 $('#mdl_issue_invoice').modal('toggle');
					//	 loadContractDetailsTable()
						 $("#search_asset_button").prop("disabled",false);
						 $("#search_asset_button").click();
						 
						 $('#selectionDiv').fadeOut(1000, function() {
							 //$("#selectionDiv").hide();
							});
						 
						
					 }else{
						 Swal.fire(
							      'Asset Transfer Failed!',
							      'Please Try Again.',
							      'error'
							    );
					 }
				    
				  }
				});
			
			
			//sw end
			
	
	}else{
		 Swal.fire(
			      'Please fill all fields!',
			      'Please Try Again.',
			      'error'
			    );
	}
		
		
	}
	
	
});
