console.log("AuthContract");
$("#contractTableDiv").hide();


if (typeof selectData !== 'undefined') {
	let selectData1;
	}

if (typeof selectData !== 'undefined') {
	let selectData;
//	let tbl_companies
}

//var contractTable;

var contractArray = {};

$(document).ready(function(){
	contractTable = undefined;
	console.log("RR");
	
	function getSelectedContractIDs(){
		//console.log($('#paymentAuthTbl').DataTable().column(0).checkboxes.selected());
		return rows_selected = $('#paymentAuthTbl').DataTable().column(0).checkboxes.selected();
	}
	
	function getSelectetedAction(){
		//console.log($('#paymentAuthTbl').DataTable().column(0).checkboxes.selected().data());
		return rows_selected = $('#paymentAuthTbl').DataTable().column(0).checkboxes.selected();
	}
	
	function getSelectedContractID(){
		var rows_selected = $('#paymentAuthTbl').DataTable().column(0).checkboxes.selected();
		// $('#paymentAuthTbl-console-rows').text(rows_selected.join(","));
		 var contractID = rows_selected.join(",");	
		 console.log(contractID);
		 return contractID;
	}
	
	
	function getLengthOfContractTable(){
		 var rows_selected = $('#paymentAuthTbl').DataTable().column(0).checkboxes.selected();
		 //console.log(contractTable);
		 var lengthOfContractTable = rows_selected.length;
		 console.log("length of Current table "+lengthOfContractTable);
		 return lengthOfContractTable;
	}
	
	
	$('#AuthorizeButton').on('click', function() {
		getSelectetedAction();
		
		var leng = getLengthOfContractTable()
		if(leng!==0 && leng == 1){
			console.log("Len "+ leng+" Selection "+getSelectedContractID());
			var contractIDArray = getSelectedContractID();
			
			var statusOfContract = $('#'+contractIDArray).parent().parent().children().eq(8).children().eq(0).val();
			var statusReason = $('#'+contractIDArray).parent().parent().children().eq(7).children().eq(0).val();
			var contractNoforSA = $('#'+contractIDArray).parent().parent().children().eq(2).text();
    		
			console.log(statusReason);
			if(statusReason.length == 0){
				console.log("Empty Reason at "+contractIDArray);
				Swal.fire(
					      'Please provide a reason to authorize!',
					      'Contract No: '+contractNoforSA,
					      'warning'
					    );
			}
			
			contractWithStatus = {
					"contractid": contractIDArray,
					"statusOfContract": statusOfContract,
					"statusReason": statusReason,
					"status" : "3"
				};
			console.log("/payment/"+getSelectedContractID());
			console.log(contractWithStatus);
		}else if(leng > 1){	
			var contractIDArray = getSelectedContractIDs();
			//console.log(contractIDArray);
			var contractWithStatusArray=[];
			for(var i=0; i<contractIDArray.length; i++){
				//console.log($('#'+contractIDArray[i]).parent().parent().children().eq(8).children().eq(0).val());
				var statusOfContract = $('#'+contractIDArray[i]).parent().parent().children().eq(8).children().eq(0).val();
				var statusReason = $('#'+contractIDArray[i]).parent().parent().children().eq(7).children().eq(0).val();
				/*if(statusReason.length == 0){
					console.log("Zero");
					Swal.fire(
						      'Please provide a reason to authorize!',
						      'Contract No: '+contractIDArray[i],
						      'warning'
						    );
				}*/
				//console.log($('#'+contractIDArray[i]).parent().parent().children().eq(7).children().eq(0).val());
				contractWithStatus = {
						"contractid": contractIDArray[i],
						"statusOfContract": statusOfContract,
						"statusReason": statusReason,
						"status" : "3"
					};
				contractWithStatusArray.push(contractWithStatus);
				//console.log(contractWithStatus);
			}
			console.log(contractWithStatusArray);
			for (let item of contractWithStatusArray) {
				//console.log($('#'+item.contractid).parent().parent().children().eq(8).children().eq(0).val());
			}
			
		}else{
			Swal.fire(
				      'Please select a contract!',
				      'And try again.',
				      'warning'
				    );
		}
		
		var rows_selected = contractTable.column(0).checkboxes.selected();
		$.each(rows_selected, function(index, rowId){
	         // Create a hidden element
			var statusOfContract = $('#'+rowId).parent().parent().children().eq(8).children().eq(0).val();
			var statusReason = $('#'+rowId).parent().parent().children().eq(7).children().eq(0).val();
			
	         
	         contractWithStatus = {
	 				"contractid":rowId,
	 				"statusOfContract": statusOfContract,
	 				"statusReason": statusReason,
	 				"status" : "3"
	 			};
	         
	         console.log(contractWithStatus);
	         console.log(index+ " "+ rowId);
	         
	      });
		
		console.log(contractArray);
		var count = Object.keys(contractArray).length;
		console.log(count);
		
		if(count>=1){
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
					  
					var responseCode =  getAsyncDataPOST("/payment/approve", contractArray, confirmedCallBack)	
					//	var responseCode =  differentialAsync("/contract/addcontract", contract,[$('#upload_board_approval')[0],$('#upload_contract')[0],$('#upload_purchase_order')[0]], confirmedCallBack)	
						$(this).prop("disabled",true);
						


				  }
				});
			
			
			
		}else{
			console.log("Empty");
			
		}
		
		 
	});
	
	
	$('#paymentAuthTbl tbody').on( 'click', 'tr', function () {
	    $(this).toggleClass('selected');
	} );
	
	
	// Select2-- Start
	
	$("#suppliers_payment").select2({
		  ajax: {
		    url: globalUrl+'/supplier/getsuppliersforpayment',
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
		  placeholder: 'Search for a company',
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
	
	
	
	// Select2-- End


});

function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#AuthorizeButton").prop("disabled",false);

	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   Swal.fire(
				      'Accepted!',
				      'Invoice(s) actions has been proceed successfully.',
				      'success'
				    )
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Invoice(s) action failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	   contractTable.ajax.reload();
	   getNotification();

	}



$('#paymentAuthTbl').on( 'draw.dt', function (e) {
	 contractTable.rows().eq(0).each( function ( index ) {
       var row = contractTable.row( index );
    
       var data = row.data();
       // ... do something with data(), or row.node(), etc
       console.log(data);
       
       if(contractArray.hasOwnProperty(data.supplierID)){
    	   console.log(data.supplierID);
    	  let d = contractArray[data.supplierID]
    	  console.log(d);
    	   $('#'+data.supplierID).prop('checked', true);
    	   $('#'+data.supplierID).parent().parent().children().eq(8).children().eq(0).val(contractArray[data.supplierID].statusOfContract);
    	   $('#'+data.supplierID).parent().parent().children().eq(7).children().eq(0).val(contractArray[data.supplierID].statusReason);
    	   
    	   
    	  

       }
       
   } );
} );



$('#paymentAuthTbl tbody').on('click', 'td.details-control', function () {
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



function getDateFormat(date){
	let current_datetime = new Date(date)
	let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
	console.log(formatted_date)
	return formatted_date;
}

function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
        '<tr>'+           
            '<td>Net Amount</td>'+            
            '<td>Location Code</td>'+
            '<td>Location Name</td>'+
            '<td>Line Discount</td>'+
            '<td>Total Tax</td>'+          
            '<td>Status</td>'+
            '<td>No of Lines</td>'+
            '<td>Sign</td>'+
           
            
        '</tr>'+
        '<tr>'+
          //  '<td>'+new Date(d.expiryDate).toLocaleString()+'</td>'+
          //  '<td>'+getDateFormat(d.expirationDate)+'</td>'+
        	'<td>'+currencyFormat(d.NetAmount)+'</td>'+
            '<td>'+d.LocationCode+'</td>'+            
            '<td>'+d.LocationName+'</td>'+           
            '<td>'+currencyFormat(d.LineDiscount)+'</td>'+           
            '<td>'+currencyFormat(d.TotalTax)+'</td>'+           
            '<td>'+d.Status+'</td>'+ 
            '<td>'+d.NumberofLines+'</td>'+ 
            '<td><i class="fa fa-check-circle" aria-hidden="true"></i></td>'+ 
           
           
        '</tr>'+       
        
    '</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+
    '<tr>'+
    '<td>Contract Image</td>'+
    '<td>Board Approval Image</td>'+
    '<td>Purchase Order Image</td>'+
    
    
    '<tr>'+
    '<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'CONimg\','+d.ContractID+','+d.ContractNo+')">View Image</Button></td>'+
    '<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'BAimg\','+d.ContractID+','+d.ContractNo+')">View Image</Button></td>'+
    '<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'POimg\','+d.ContractID+','+d.ContractNo+')">View Image</Button></td>'+
    
    
    '</table>'/*+       
        
    '</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+
    '<tr>'+
    '<td>Approval Level 1</td>'+
    '<td>Approval Level 2</td>'+
    '<td>Approval Level 3</td>'+
    
    
    '<tr>'+
    '<td><h3><i class="fa fa-check-circle" aria-hidden="true"></h3></i>  '+d.boardpaperDate+'</td>'+
    '<td><i class="fa fa-check-circle" aria-hidden="true">  '+d.boardpaperDate+'</td>'+
    '<td><i class="fa fa-check-circle" aria-hidden="true">  '+d.boardpaperDate+'</td>'+
    
    
    '</table>'*/;
}

function viewImage(buttonID, ContractID, ContractNo){
	console.log(buttonID+" "+ ContractID+" "+ContractNo);
	//$("#imgLocation").attr("src", path);
	
	if(buttonID=="CONimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/contract/'+ContractID+'/con');
		 $('#mdl_ar_com_name').text("Contract Image");
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



$('#acceptTerms').on('change', function() {

	// contractTable.destroy();
	
	

	if ($(this).prop('checked') === true && $(this).attr('value') == "Yes") {
		loadPaymentDatatable("all");
		
	} else {
		//contractTable.ajax.url( globalUrl+"/invoice/all" ).load();

		//$('#userTableDiv').hide();
		console.log("Hide Table Div Here")
		
	}
	
	
	
	
});



function addtoArrayList(contractWithStatus){
	
	contractArray[contractWithStatus.contractid] = contractWithStatus;

	
	
}

function removeFromArrayList(contractWithStatus){
	console.log(contractWithStatus);
	
	delete contractArray[contractWithStatus];
	
	console.log(contractArray);

	
}


function loadPaymentDatatable(para){
	


	var times = [
		"Accept", 
		"Reject", 
		"Hold"
	];

	$("#userTableDiv").show();
//	console.log(contractTable);
	if(contractTable == undefined){
	//	console.log("Inside");
		contractTable = $('#paymentAuthTbl').DataTable({
			
			processing: true,
			 serverSide: true,
			

		     ajax: {
		    	 url:globalUrl+"/payment/"+para,
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		            { "data": "supplierID",
		            	orderable: false,				            
		            	render: function(data,type,row,meta) {	
		            		//console.log(row);
	            		 return '<input type="checkbox" id="'+row.supplierID+'" name="'+row.supplierID+'" value="'+row+'"><label for="'+row.supplierID+'"></label>'
						
		            	}, 
	            	 },			            	 
		            { "data": "supplierName" },
		            { "data": "ContractNo" },
		           // { "data": "InvoiceDate" },
		            { "data": "InvoiceDate",
		            	className: "text-right dt-body-nowrap",
		            	 render: function(data,type,row,meta) {
		            		 return data;
		            },	
		            },
		            { "data": "InvoiceNumber"},
		           // { "data": "TotalAmount" },
		            { "data": "TotalAmount",				            	
		            	className: "text-right",
		            	 render: function(data,type,row,meta) {
		            		 return currencyFormat(data);
		            },	
		            },
		            { "data": "BatchNumber"},
		            { "data": "supplierID",
		            	 orderable: false,
		            	 render: function(data,type,row,meta) {
		            		 return '<input type="text" class="form-control" id="'+row.supplierID+'"  placeholder ="Reason" disabled = "disabled"/ autocomplete="off">';
		            	 },
							className:'text-center'
		            },
		            {
		            	 orderable: false,
		            	"render": function(d,t,r){
		                	var $select = $("<select class='form-control m-b' disabled></select>", {
		                    	"id": r[0]+"start",
		                        "value": d
		                    });
		                	$.each(times, function(k,v){
		                    	var $option = $("<option></option>", {
		                        	"text": v,
		                            "value": v
		                        });
		                        if(d === v){
		                        	$option.attr("selected", "selected")
		                        }
		                    	$select.append($option);
		                    });				                	
		                    return $select.prop("outerHTML");
		                },
		                className:'text-centers'
		            },				            
		            /*{ "data": "details",
		            	 orderable: false,
		            	 render: function(data,type,row,meta) {
		            		 return '<button class="btn btn-success btn-xs"  onclick="ViewPoDetails('+data[0]+',\''+data[3]+'\',\''+data[4]+'\')"><strong>VIEW DETAILS</strong></button>';
		            	 },
							className:'text-center'
		            }*/				            
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
	            {
	               'targets': 0,
	               'className': 'select-checkbox',
	               'checkboxes': {
	                  'selectRow': true,
	                  'selectCallback': function(e){
	                	  console.log(e[0].children[0].attributes[1].nodeValue);
	                	  console.log($('#'+e[0].children[0].attributes[1].nodeValue).prop('checked'))
	                	  
//	                	  console.log(e[0])
	                	   var checkboxID = e[0].children[0].attributes[1].nodeValue; 
	                	  if($('#'+e[0].children[0].attributes[1].nodeValue).prop('checked')){
//	                		  console.log("Selected");
	                		
	                		 console.log(checkboxID);
	                		$('#'+checkboxID).parent().parent().children().eq(7).children().eq(0).prop('disabled', false);
	                		$('#'+checkboxID).parent().parent().children().eq(8).children().eq(0).prop('disabled', false);
	                		
	                		var statusReason = $('#'+checkboxID).parent().parent().children().eq(7).children().eq(0);
	                		var statusOfContract = $('#'+checkboxID).parent().parent().children().eq(8).children().eq(0);
	                		var contractNoforSA = $('#'+checkboxID).parent().parent().children().eq(2).text();
	                		console.log(statusReason);
	                		console.log("contractNoforSA "+contractNoforSA);
	                		console.log("checkboxIdforSA "+checkboxID);
	                		
	                		statusReason.focus();
	                		//statusReason.css('border-color','#FC0')
	                		
	                		statusReason.on('focusout', function() {
	                			console.log(statusReason.val()+" "+statusReason.val().length);
	                			if(statusReason.val().length <= 0){
	            					console.log("Zero");
	            					Swal.fire(
	            						      'Please provide a reason to authorize!',
	            						      'Invoice No: '+contractNoforSA,
	            						      'warning'
	            						    );
	            					$('#'+checkboxID).prop('checked', false);
	            				}else{
	            					contractWithStatus = {
	            			 				"contractid":checkboxID,
	            			 				"statusOfContract": statusOfContract.val(),
	            			 				"statusReason": statusReason.val(),
	            			 				"status" : "3"
	            			 			};
	            					//console.log(contractWithStatus);
	            					$('#'+checkboxID).prop('checked', true);
	            					
	            					addtoArrayList(contractWithStatus);
	            					console.log(contractArray);
	            				}
	                			
	                		});
	                		
	                		
	                		statusOfContract.on('change', function() {
	                			
	                			contractWithStatus = {
            			 				"contractid":checkboxID,
            			 				"statusOfContract": statusOfContract.val(),
            			 				"statusReason": statusReason.val(),
            			 				"status" : "3"
            			 			};
	                			
	                			addtoArrayList(contractWithStatus);
	                			console.log(contractArray);
	                		});

	                		 
	                	  }else{
	                		  console.log()
	                		$('#'+checkboxID).parent().parent().children().eq(7).children().eq(0).prop('disabled', true);
		                	$('#'+checkboxID).parent().parent().children().eq(8).children().eq(0).prop('disabled', true);
		                	var statusReason = $('#'+checkboxID).parent().parent().children().eq(7).children().eq(0);
		                	removeFromArrayList(checkboxID);
		                	statusReason.val("");
	                	  }
	                	  
	                	  
	                  // console.log("ER "+JSON.stringify(this));
	                  }
	               }
	            },
	            { "width": "50%", "targets": 7 },
	            { "width": "50%", "targets": 8 }
	            
	         ],
	         "language": {
	             "emptyTable": "No payments available for this company"
	           },
	         'select': {
	             'style': 'multi',
	             'selector': 'td:first-child'
	          },
	          'order': [[1, 'asc']]
		
		});
		
		$('#userTableDiv').addClass("fadeInDownBig");
		$('#userTableDiv').removeClass("fadeOutUpBig");

		
	}else{
		$("#userTableDiv").show();
		console.log("Inside Else");
		
		contractTable.ajax.url( globalUrl+"/payment/"+para ).load();
	
		
	}
	
	
}


$('#suppliers_payment').on('select2:select', function (e) {
	selectData = e.params.data;
  
	loadPaymentDatatable(selectData.id);    	
   
});





