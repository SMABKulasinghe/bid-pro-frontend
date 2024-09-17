/**
 * Naveen
 */



if (typeof supplierTable !== 'undefined') {
	var supplierTable;
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
});
	
	
	/*$('#tbl_supplier_auth tbody').on( 'click', 'tr', function () {
	    $(this).toggleClass('selected');
	} );*/












$('#tbl_supplier_auth tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = supplierTable.row( tr );

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


/*function getDateFormat(date){
	let current_datetime = new Date(date)
	let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
	console.log(formatted_date)
	return formatted_date;
} */

function format ( d ) {
    // `d` is the original data object for the row
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
        '<tr>'+           
            '<td>Province</td>'+            
            '<td>Address Line 1</td>'+
            '<td>Address Line 2</td>'+
            '<td>Address Line 3</td>'+
            '<td>One-Time Fee (LKR)</td>'+
            '<td>Category Fee (LKR)</td>'+
            '<td>Total Payment Due</td>'+

			'</tr>'+
			
        '<tr>'+
          //  '<td>'+new Date(d.expiryDate).toLocaleString()+'</td>'+
			'<td>'+d.province+'</td>'+
            '<td>'+d.address1+'</td>'+            
            '<td>'+d.address2+'</td>'+
            '<td>'+d.address3+'</td>'+
            '<td>'+d.onetimeFee+'</td>'+
            '<td>'+d.categoryFee+'</td>'+
            '<td>'+d.totalPayment+'</td>'+ 

           
        '</tr>'+       

		'</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+

			'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">'+
			'<tr>'+  
//				'<td>Total Payment Due</td>'+
				'<td>Bank</td>'+
			    '<td>Branch</td>'+
			    '<td>Address</td>'+
			    '<td>Phone</td>'+
				
			'</tr>'+
        '<tr>'+	
//                '<td>'+d.totalPayment+'</td>'+ 
				'<td>'+d.bank+'</td>'+ 
			    '<td>'+d.branch+'</td>'+
			    '<td>'+d.address+'</td>'+
			    '<td>'+d.phone+'</td>'+
		'</tr>'+

		 

        
    '</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+
    '<tr>'+
    '<td>Green Policy Image</td>'+
    '<td>ICTAD Registration Image</td>'+
    '<td>KYC Form Image</td>'+
	'<td>List of Services Image</td>'+
	'<td>Company Profile Image</td>'+
	'<td>Current Account Last 06 months Image</td>'+
	'<td>List of Top 15 Clients Image</td>'+

	'<tr>'+
    '<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'GPimg\','+d.supplierID+','+d.Code+')">View Image</Button></td>'+
    '<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'ICTADimg\','+d.supplierID+','+d.Code+')">View Image</Button></td>'+
    '<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'KYCFimg\','+d.supplierID+','+d.Code+')">View Image</Button></td>'+
	'<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'LOSimg\','+d.supplierID+','+d.Code+')">View Image</Button></td>'+
	'<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'CPimg\','+d.supplierID+','+d.Code+')">View Image</Button></td>'+
	'<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'CALSimg\','+d.supplierID+','+d.Code+')">View Image</Button></td>'+
	'<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'LOTCimg\','+d.supplierID+','+d.Code+')">View Image</Button></td>'+


	 '</table>'+'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">'+
     '<tr>'+
	'<td>Certificate of Incorporation Image</td>'+
	'<td>Certified List of Directors Image</td>'+
	'<td>Articles of Association Image</td>'+
	'<td>Latest Audited Financial Accounts Image</td>'+

	'<td>Company Logo Image</td>'+
	'<td>Registration Form Image</td>'+
	'<td>Address Proof Image</td>'+

	'<tr>'+
	'<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'COIimg\','+d.supplierID+','+d.Code+')">View Image</Button></td>'+
	'<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'CLDimg\','+d.supplierID+','+d.Code+')">View Image</Button></td>'+
	'<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'AOAimg\','+d.supplierID+','+d.Code+')">View Image</Button></td>'+
	'<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'LAFAimg\','+d.supplierID+','+d.Code+')">View Image</Button></td>'+

 	'<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'CLimg\','+d.supplierID+','+d.Code+')">View Image</Button></td>'+
    '<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'RFimg\','+d.supplierID+','+d.Code+')">View Image</Button></td>'+
    '<td><Button type="button" class="btn btn-primary" onclick="viewImage(\'APimg\','+d.supplierID+','+d.Code+')">View Image</Button></td>'+

     '</table>';
}


function viewImage(buttonID, supplierID, Code){
	console.log(buttonID+" "+ supplierID+" "+Code);
	//$("#imgLocation").attr("src", path);
	
	if(buttonID=="GPimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/gp');
		 $('#mdl_ar_com_name').text("Green Policy Image");
		 $('#mdl_ii_code').text(Code);
	}else if(buttonID=="ICTADimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/ictad');
		 $('#mdl_ar_com_name').text("ICTAD Registration Image");
		 $('#mdl_ii_code').text(Code);
	}else if(buttonID=="KYCFimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/kycf');
		 $('#mdl_ar_com_name').text("KYC Form Image");
		 $('#mdl_ii_code').text(Code);
	}else if(buttonID=="LOSimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/los');
		 $('#mdl_ar_com_name').text("List of Services Image");
		 $('#mdl_ii_code').text(Code);
	}else if(buttonID=="CPimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/cp');
		 $('#mdl_ar_com_name').text("Company Profile Image");
		 $('#mdl_ii_code').text(Code);
	}else if(buttonID=="CALSimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/cals');
		 $('#mdl_ar_com_name').text("Current Account Last 06 months Image");
		 $('#mdl_ii_code').text(Code);
	}else if(buttonID=="LOTCimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/lotc');
		 $('#mdl_ar_com_name').text("List of Top15 Clients Image");
		 $('#mdl_ii_code').text(Code);
	}else if(buttonID=="COICimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/cot');
		 $('#mdl_ar_com_name').text("Certificate of Incorporation Image");
		 $('#mdl_ii_code').text(Code);
	}else if(buttonID=="CLDimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/cld');
		 $('#mdl_ar_com_name').text("Certified List of Directors Image");
		 $('#mdl_ii_code').text(Code);
	}else if(buttonID=="AOAimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/aoa');
		 $('#mdl_ar_com_name').text("Articles of Association Image");
		 $('#mdl_ii_code').text(Code);
	}else if(buttonID=="LAFAimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/lafa');
		 $('#mdl_ar_com_name').text("Latest Audited Financial Accounts Image");
		 $('#mdl_ii_code').text(Code);
	
    }else if(buttonID=="CLimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/cl');
		 $('#mdl_ar_com_name').text("Company Logo Image");
		 $('#mdl_ii_code').text(Code);
	}else if(buttonID=="RFimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/rf');
		 $('#mdl_ar_com_name').text("Registration Form Image");
		 $('#mdl_ii_code').text(Code);
	}else if(buttonID=="APimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/supplier/'+supplierID+'/ap');
		 $('#mdl_ar_com_name').text("Address Proof Image");
		 $('#mdl_ii_code').text(Code);
	
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

		

			$("#userTableDiv").show();
		//	console.log(contractTable);
			if(supplierTable == undefined){
			//	console.log("Inside");
				supplierTable = $('#tbl_supplier_auth').DataTable({
					
					processing: true,
					 serverSide: true,
					

				     ajax: {
				    	 url:globalUrl+"/supplier/auth",
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
				            { "data": "Code" },
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
			                	  
//			                	  console.log(e[0])
			                	   var checkboxID = e[0].children[0].attributes[1].nodeValue; 
			                	  if($('#'+e[0].children[0].attributes[1].nodeValue).prop('checked')){
				
									}else{
										
									}
			                	  
			                	  
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
		
		$('#userTableDiv').hide();
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


console.log("Outside");
$(document).ready(function() {
	tbl_supplier_auth = undefined;
	console.log('in Table');
	if (tbl_supplier_auth == undefined) {
		console.log('in Table');
		tbl_supplier_auth = $('#tbl_supplier_auth').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/supplier/auth",
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		    	 	{ "data": "code" },
		            { "data": "supName" },
		            { "data": "RegNo"},
		            { "data": "supMailAdmin" },
		            { "data": "supPhone1"},
					{ "data": "district"},
					{ "data": "city"},
		            { "data": "auth",
		            	 orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="Approve('+data+')">Authorize</button>'+
							  '<button type="button" class="btn btn-danger" onclick="Reject('+data+')">Reject</button>'  
					
						//	return '<input type="text" class="form-control" id="'+row.supplierID+'"  placeholder ="Reason" disabled = "disabled"/ autocomplete="off">';
						  },	
								className:'text-center'
		            },
					{
			                     "className":      'details-control',
			                     "orderable":      false,
			                     "data":           null,
			                     "defaultContent": ''
			         }
				            
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
	}else{
		console.log('else in Table');
		tbl_supplier_auth.ajax.url(globalUrl+"/supplier"/auth ).load();
	}
});


$('#supplier_id').on('select2:select', function (e) {
	selectData = e.params.data;
  
	loadSupplierDatatable(selectData.id);    	
   
});

//$('#searchUserIDButton').on('select2:select', function (e) {
//	selectData = e.params.data;  
//	loadContractDatatable(selectData.id);  
//	
//});


//event handler for individual rows
$("#tbl_supplier_auth").on("click", "td input[type=checkbox]", function () {
	console.log("New Method");
    var isChecked = this.checked;

    // set the data item associated with the row to match the checkbox
    var dtRow = supplierTable.rows($(this).closest("tr"));
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
        $.each(supplierTable.data(), function (i, item) {
            if (!item.isChecked) {
            	console.log("CheckBy User");
            	console.log(item);
            	console.log(i);
            	
                $("th input[type=checkbox]").prop("checked", false);
                return false;
            }
        });
    }
    supplierTable.data().sum();
});


// Add function for summing salaries for rows that are checked
$.fn.dataTable.Api.register('sum()', function () {
    var dtData = this;
    var total = 0;
    $.each(dtData, function (i, it) {
        if (it.isChecked) {
            console.log(i);
            console.log(it);
            
            
            checkMeProperly(it.SupplierID)
            
        }else{
        	elseFunForCheckBox(it.SupplierID)
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
	var statusOfSupplier = $('#'+checkboxID).parent().parent().children().eq(8).children().eq(0);
	var supplierNoforSA = $('#'+checkboxID).parent().parent().children().eq(2).text();
	console.log(statusReason);
	console.log("supplierNoforSA "+supplierNoforSA);
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
	 				"supplierid":checkboxID,
	 				"statusOfSupplier": statusOfSupplier.val(),
	 				"statusReason": statusReason.val(),
	 				"status" : "3"
	 			};
			//console.log(contractWithStatus);
			$('#'+checkboxID).prop('checked', true);
			
			addtoArrayList(supplierWithStatus);
			console.log(supplierArray);
		}
		statusReason.css('border-color','#666')
	});
	
	
	statusOfSupplier.on('change', function() {
		
		supplierWithStatus = {
				"supplierid":checkboxID,
				"statusOfContract": statusOfContract.val(),
				"statusReason": statusReason.val(),
				"status" : "3"
			};
		
		addtoArrayList(supplierWithStatus);
		console.log(supplierArray);
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
    var ld = $('#tbl_supplier_auth').DataTable().rows().data();
    $.each(ld, function (i, item) {
        item.isChecked = isChecked;
    });
    $(".cbcell input").prop("checked", isChecked);
    dtapi.data().sum();
});



 function Approve(data) {
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, Approve!'
		}).then((result) => {
		  if (result.value) {
			  
			  getAsyncData("/supplier/"+data+"/approve", function(res) {
				  tbl_supplier_auth.ajax.url(globalUrl+"/supplier/auth" ).load();
				  Swal.fire(
					      'Approved!',
					      'New supplier has been authorized.',
					      'success'
					    )
				})
		  
		  }
		})
}
 function Reject(data) {
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, Reject!'
		}).then((result) => {
		  if (result.value) {
			  
			  getAsyncData("/supplier/"+data+"/reject", function(res) {
				  tbl_supplier_auth.ajax.url(globalUrl+"/supplier/auth" ).load();
				  Swal.fire(
					      'Removed!',
					      'New supplier has been Removed.',
					      'success'
					    )
				})
		  
		  }
		})
} 