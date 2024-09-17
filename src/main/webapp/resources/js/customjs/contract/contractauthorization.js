console.log("AuthContract");
$("#contractTableDiv").hide();


if (typeof selectData !== 'undefined') {
	let selectData1;
	}

if (typeof contractTable !== 'undefined') {
	var contractTable;
	}



var contractArray = {};

$(document).ready(function(){
	contractTable = undefined;
	console.log("RR");
	
	function getSelectedContractIDs(){
		//console.log($('#example').DataTable().column(0).checkboxes.selected());
		return rows_selected = $('#example').DataTable().column(0).checkboxes.selected();
	}
	
	function getSelectetedAction(){
		//console.log($('#example').DataTable().column(0).checkboxes.selected().data());
		return rows_selected = $('#example').DataTable().column(0).checkboxes.selected();
	}
	
	function getSelectedContractID(){
		var rows_selected = $('#example').DataTable().column(0).checkboxes.selected();
		// $('#example-console-rows').text(rows_selected.join(","));
		 var contractID = rows_selected.join(",");	
		 console.log(contractID);
		 return contractID;
	}
	
	
	function getLengthOfContractTable(){
		 var rows_selected = $('#example').DataTable().column(0).checkboxes.selected();
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
			console.log("/users/"+getSelectedContractID());
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
				      'Please select a contract and enter the reason!',
				      'Only contracts with the reason will Authorize',
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
		
		 $.each(contractArray, function (i, item) {
			// console.log(item.statusReason);
	            if (item.statusReason==="") {
	            	console.log(item);
	            	Swal.fire(
	  				      'Please enter the reason for selected contract(s)!',
	  				      'And try again.',
	  				      'warning'
	  				    );
	            }else{
	            	console.log(item);
	            }
		 });
		
		if(count>=1){
			Swal.fire({
				  title: 'Only contracts with the reason will be Authorized',
				  text: "Do you want to proceed?",
				  type: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, process it!'
				}).then((result) => {
				  if (result.value) {
					  console.log("TT");
					  
					var responseCode =  getAsyncDataPOST("/contract/approve", contractArray, confirmedCallBack)	
					//	var responseCode =  differentialAsync("/contract/addcontract", contract,[$('#upload_board_approval')[0],$('#upload_contract')[0],$('#upload_purchase_order')[0]], confirmedCallBack)	
						$(this).prop("disabled",true);
						


				  }
				});
			
			
			
		}else{
			console.log("Empty");

			Swal.fire(
				      'Please select a contract and enter the reason!',
				      'Only contracts with the reason will Authorize',
				      'warning'
				    );
		
		}
		
		 
	});
	
	
	$('#example tbody').on( 'click', 'tr', function () {
	    $(this).toggleClass('selected');
	} );


	
// Select2-- Start
	
	$("#contract_id").select2({
		  ajax: {
		    url: globalUrl+'/contract/contractlist',
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
	 contractArray = {};
	console.log(responseCode);
	$("#AuthorizeButton").prop("disabled",false);

	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   Swal.fire(
				      'Accepted!',
				      'Contract(s) actions has been proceed successfully.',
				      'success'
				    )
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Contract(s) action failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	   contractTable.ajax.reload();
	    /*$('html, body').animate({
	        scrollTop: $("#Uploading_div").offset().top
	    }, 1500);
		setTimeout(function(){ 
			$('#uploaded_po_Veryfication').hide();
		}, 2000);
		 $('#overlay').hide();*/
	}


/*$('#example').on( 'page.dt', function () {
    var info = contractTable.page.info();
    console.log( 'Showing page: '+info.page+' of '+info.pages );
    
    contractTable.rows().eq(0).each( function ( index ) {
        var row = contractTable.row( index );
     
        var data = row.data();
        // ... do something with data(), or row.node(), etc
        console.log(data+" "+index);
    } );
    
} );*/


$('#example').on( 'draw.dt', function (e) {
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
});

//contractTable.on( 'preInit', function () {
//    console.log( 'Redraw occurred at: '+new Date().getTime() );
//    contractTable.rows().eq(0).each( function ( index ) {
//        var row = contractTable.row( index );
//     
//        var data = row.data();
//        // ... do something with data(), or row.node(), etc
//        console.log(data+" "+index);
//    } );
//    
//    
//} );

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
            '<td>Expiration Date</td>'+            
            '<td>BA No</td>'+
            '<td>Board Paper Date</td>'+
            '<td>Board Paper Originated Date</td>'+
            '<td>Board Approval No</td>'+
            '<td>Payment Type</td>'+
            '<td>Signed Company</td>'+
            '<td>CPID</td>'+
            /*  '<td>Signed Supplier</td>'+
            '<td>PO Date</td>'+
            '<td>Created By</td>'+
            '<td>Expiration Date</td>'+
            '<td>Modified By</td>'+*/
            
        '</tr>'+
        '<tr>'+
          //  '<td>'+new Date(d.expiryDate).toLocaleString()+'</td>'+
            '<td>'+getDateFormat(d.expiryDate)+'</td>'+
            '<td>'+d.boardApprovalNo+'</td>'+            
            '<td>'+d.boardpaperDate+'</td>'+
            '<td>'+d.boardpaperOriginatedBy+'</td>'+
            '<td>'+d.boardApprovalNo+'</td>'+
            '<td>'+d.paymentType+'</td>'+
            '<td>'+d.signedByCompany+'</td>'+ 
            '<td>'+d.supplierID+'</td>'+ 
            /*'<td>'+d.signedBySupplier+'</td>'+
            '<td>'+d.PODate+'</td>'+
            '<td>'+d.createdBy+'</td>'+
            '<td>'+d.boardApprovalNo+'</td>'+
            '<td>'+d.modifiedBy+'</td>'+*/
           
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
    
    
    '</table>';
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
	
	var times = [
		"Accept", 
		"Reject", 
		"Hold"
	];

	if ($(this).prop('checked') === true && $(this).attr('value') == "Yes") {

		

			$("#contractTableDiv").show();
		//	console.log(contractTable);
			if(contractTable == undefined){
			//	console.log("Inside");
				contractTable = $('#example').DataTable({
					
					processing: true,
					 serverSide: true,
					

				     ajax: {
				    	 url:globalUrl+"/contract/all",
				         type: 'GET',
				         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
				     },
				     columns: [
				            { 	"data": "supplierID",
				            	orderable: false,				            
				            	render: function(data,type,row,meta) {	
				            		//console.log(row);
			            		 return '<input type="checkbox" id="'+row.supplierID+'" name="'+row.supplierID+'" value="'+row+'"><label for="'+row.supplierID+'"></label>'
								
				            	}, 
			            	 },			            	 
				            { "data": "supplierName" },
				            { "data": "ContractNo" },
				            { "data": "BoardApprovalDate",
				            	className: "text-right dt-body-nowrap",
				            	 render: function(data,type,row,meta) {
				            		 return data;
				            },	
				            },
				            { "data": "Amount",				            	
				            	className: "text-right",
				            	 render: function(data,type,row,meta) {
				            		 return currencyFormat(data);
				            },	
				            },
				            {"data": "PODate",
			            	className: "text-right dt-body-nowrap",
			            	 render: function(data,type,row,meta) {
			            		 return data;
			            	 },	
			            	},
				            { "data": "Category"},
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
				                className:'text-center dt-body-nowrap'
				            },				            
			/*	            { "data": "details",
				            	 orderable: false,
				            	 render: function(data,type,row,meta) {
				            		 return '<button class="btn btn-success btn-xs"  onclick="ViewPoDetails('+data[0]+',\''+data[3]+'\',\''+data[4]+'\')"><strong>VIEW DETAILS</strong></button>';
				            	 },
									className:'text-center'
				            },*/				            
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
			                	  
//			                	  console.log(e[0])
			                	   var checkboxID = e[0].children[0].attributes[1].nodeValue; 
			                	  if($('#'+e[0].children[0].attributes[1].nodeValue).prop('checked')){/*
//			                		  console.log("Selected");
			                		
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
			            						      'Contract No: '+contractNoforSA,
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

			                		 
			                	  */}else{/*
			                		  console.log()
			                		$('#'+checkboxID).parent().parent().children().eq(7).children().eq(0).prop('disabled', true);
				                	$('#'+checkboxID).parent().parent().children().eq(8).children().eq(0).prop('disabled', true);
				                	var statusReason = $('#'+checkboxID).parent().parent().children().eq(7).children().eq(0);
				                	removeFromArrayList(checkboxID);
				                	statusReason.val("");
			                	  */}
			                	  
			                	  
			                  // console.log("ER "+JSON.stringify(this));
			                  }
			               }
			            },
			            { "width": "50%", "targets": 7 },
			            { "width": "50%", "targets": 8 }
			            
			         ],
			         'select': {
			             'style': 'multi',
			             'selector': 'td:first-child'
			          },
			          'order': [[1, 'asc']]
				
				});
				
			}else{
				
				console.log("Else");
				

				console.log("Inside Else");
//				contractTable = $('#example').DataTable({
//					
//					dom: 'Bfrtip',
//					buttons: [
//						'copy', 'csv', 'excel', 'pdf', 'print'
//					]
//				
//				});
				
			
				
			}
			
			

		

	} else {
		

		$('#contractTableDiv').hide();
		console.log("Hide Table Div Here")
	}
	
	
	
	
});



function addtoArrayList(contractWithStatus){
	
	contractArray[contractWithStatus.contractid] = contractWithStatus;
	

	
//	if(contractArray.length>0){
//		for (var i = 0; i < contractArray.length; i++) {
//			var array_element = contractArray[i].contractid;
//			if(array_element.contractid == contractWithStatus.contractid){
//				console.log("Ex");
//			}else{
//				console.log("fa");
//				//contractArray.push(contractWithStatus);
//				console.log(contractArray);
//			}
//		}
//	}else{
//		contractArray.push(contractWithStatus);
//	}
	
	
}

function removeFromArrayList(contractWithStatus){
	console.log(contractWithStatus);
	
	delete contractArray[contractWithStatus];
	
	console.log(contractArray);
//	if(contractArray.length>0){
//		for (var i = 0; i < contractArray.length; i++) {
//			var array_element = contractArray[i].contractid;
//			if(array_element.contractid == contractWithStatus.contractid){
//				console.log("Ex");
//				
//				var index = contractArray.indexOf(contractWithStatus.contractid);
//				console.log(index);
//				if (index > -1) {
//					contractArray.splice(index, 1);
//				}
//				// array = [2, 9]
//				console.log(contractArray);
//				
//				
//			}else{
//				console.log("fa");
//				//contractArray.push(contractWithStatus);
//				console.log(contractArray);
//			}
//		}
//	}else{
//		//contractArray.push(contractWithStatus);
//	}
	
}



function loadContractDatatable(para){

	$("#contractTableDiv").show();
//	console.log(contractTable);
	if(contractTable == undefined){
	//	console.log("Inside");
		  tbl_companies = $('#tbl_companies').DataTable({
			  processing: true,
				 serverSide: true,
				 responsive: true,
			     ajax: {
			    	 url:globalUrl+"/contract/"+para,
			         type: 'GET',
			         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			     },
			     columns: [
			    	 	{ "data": "supplierName" },
			            { "data": "ContractNo" },
			            { "data": "BoardApprovalDate" },
			            { "data": "Amount"},
			            { "data": "PODate" },
			            { "data": "Category"},
			            { "data": "supplierID",
			            	 orderable: false,
			            	 render: function(data,type,row,meta) {
			            		 return '<input type="text" class="form-control" id="'+row.supplierID+'"  placeholder ="Reason" disabled = "disabled"/ autocomplete="off">';
			            	 },
								className:'text-center'
			            },
			        ],
			        dom:"<'row'<'col-sm-12'B>>" +  
			        	"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
			        "<'row'<'col-sm-12'tr>>" +
			        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
	                buttons: [
	                    { extend: 'copy'},
	                    {extend: 'csv'},
	                    {extend: 'excel', title: ''},
	                    {extend: 'pdf', title: ''},

	                    {extend: 'print',
	                     customize: function (win){
	                            $(win.document.body).addClass('white-bg');
	                            $(win.document.body).css('font-size', '10px');

	                            $(win.document.body).find('table')
	                                    .addClass('compact')
	                                    .css('font-size', 'inherit');
	                    }
	                    }
	                ]
		  });
	} else {
		tbl_companies.ajax.url( globalUrl+"/contract/"+para ).load();
	}
	  
	  
	$('#example').DataTable({
		dom : 'Bfrtip',
		buttons : [ 'copy', 'csv', 'excel', 'pdf', 'print' ]
	});
	
}



$('#contract_id').on('select2:select', function (e) {
	selectData = e.params.data;
  
	loadContractDatatable(selectData.id);    	
   
});

//$('#searchUserIDButton').on('select2:select', function (e) {
//	selectData = e.params.data;  
//	loadContractDatatable(selectData.id);  
//	
//});


//event handler for individual rows
$("#example").on("click", "td input[type=checkbox]", function () {
	console.log("New Method");
    var isChecked = this.checked;

    // set the data item associated with the row to match the checkbox
    var dtRow = contractTable.rows($(this).closest("tr"));
    dtRow.data()[0].isChecked = isChecked;
    
    console.log("New Method");

    // determine if the over all checkbox should be checked or unchecked
    if (!isChecked) {
    	console.log("NOT CHECKED");
        // if one is unchecked, then checkall cannot be checked
        $("th input[type=checkbox]").prop("checked", false);
    } else {
    	console.log("CHECKED");
        $("th input[type=checkbox]").prop("checked", true);
        $.each(contractTable.data(), function (i, item) {
            if (!item.isChecked) {
            	console.log("CheckBy User");
            	console.log(item);
            	console.log(i);
            	
                $("th input[type=checkbox]").prop("checked", false);
                return false;
            }
        });
    }
    contractTable.data().sum();
});


// Add function for summing salaries for rows that are checked
$.fn.dataTable.Api.register('sum()', function () {
    var dtData = this;
    var total = 0;
    $.each(dtData, function (i, it) {
        if (it.isChecked) {
            console.log(i);
            console.log(it);
            
            
            checkMeProperly(it.ContractID)
            
        }else{
        	elseFunForCheckBox(it.ContractID)
        }
    });
    $("#total").val(total);
});


function checkMeProperly(checkboxID){

//	  console.log("Selected");
	
	 console.log(checkboxID);
	$('#'+checkboxID).parent().parent().children().eq(7).children().eq(0).prop('disabled', false);
	$('#'+checkboxID).parent().parent().children().eq(8).children().eq(0).prop('disabled', false);
	
	var statusReason = $('#'+checkboxID).parent().parent().children().eq(7).children().eq(0);
	var statusOfContract = $('#'+checkboxID).parent().parent().children().eq(8).children().eq(0);
	var contractNoforSA = $('#'+checkboxID).parent().parent().children().eq(2).text();
	console.log(statusReason);
	console.log("contractNoforSA "+contractNoforSA);
	console.log("checkboxIdforSA "+checkboxID);
	
	//statusReason.focus();
	statusReason.css('border-color','#FC0')
	
	statusReason.on('focusout', function() {
		console.log(statusReason.val()+" "+statusReason.val().length);
		if(statusReason.val().length <= 0){
			console.log("Zero");
			/*Swal.fire(
				      'Please provide a reason to authorize!',
				      'Contract No: '+contractNoforSA,
				      'warning'
				    );*/
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
		statusReason.css('border-color','#666')
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
}

function elseFunForCheckBox(checkboxID){

	  console.log()
	$('#'+checkboxID).parent().parent().children().eq(7).children().eq(0).prop('disabled', true);
	$('#'+checkboxID).parent().parent().children().eq(8).children().eq(0).prop('disabled', true);
	var statusReason = $('#'+checkboxID).parent().parent().children().eq(7).children().eq(0);
	removeFromArrayList(checkboxID);
	statusReason.val("");

}


//This is the event handler for the check all checkbox
$("th input[type=checkbox]").on("click", function () {
    var isChecked = this.checked;
    var ld = $('#example').DataTable().rows().data();
    $.each(ld, function (i, item) {
        item.isChecked = isChecked;
    });
    $(".cbcell input").prop("checked", isChecked);
    dtapi.data().sum();
});
