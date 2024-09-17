/**
 * Naveen
 */


$(document).ready(function() {
	
	tbl_contracts = undefined;
	tbl_uploaded_invoices = undefined;
	tbl_uploaded_invoices_details = undefined;
	tbl_contracts_manual = undefined;
	
	$("#slc_ii_company").select2({
		  ajax: {
		    url: globalUrl+'/supplier/partners',
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
	
	$("#slc_ii_upload_company").select2({
		  ajax: {
		    url: globalUrl+'/supplier/partners',
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
		  width: '100%',
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
	

});


$('#btn_search').on('click', function() {
	

	if ($('#slc_ii_company').val()==null) {
		 Swal.fire(
				   'Please select company',
				   '',
				   'error'
				 );
	}else if ($('#slc_ii_type').val()=='') {
//		console.log($('#slc_ii_type').val());
		 Swal.fire(
				   'Please select type',
				   '',
				   'error'
				 );
	}else if ($('#slc_ii_type').val()=='recurring') {
		 if (tbl_contracts_manual == undefined) {
			 
			 tbl_contracts_manual = $('#tbl_contracts_manual').DataTable({
				  processing: true,
					 serverSide: true,
					 responsive: true,
				     ajax: {
				    	 url:globalUrl+"/contract/company/"+$('#slc_ii_company').val()+"/contracts",
				         type: 'GET',
				         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
				     },
				     columns: [
				    	 	{ "data": "contractNo" },
				            { "data": "desc" },
				            { "data": "category" },
				            { "data": "paymentType" },
				            { "data": "amount",
				            	orderable: false,
				            	className: "text-right",
				            	 render: function(data,type,row,meta) {
									  return currencyFormat(data);
								  },	
				            },
				            { "data": "annualPayment",
				            	orderable: false,
				            	className: "text-right",
				            	render: function(data,type,row,meta) {
				            		return currencyFormat(data);
				            	},	
				            },
				            { "data": "view",
				            	orderable: false,
				            	render: function(data,type,row,meta) {
//				            		console.log(data.status);
				            		if (data.status == 1) {
				            			return '<button id="'+data.contractId+'" onclick="Manual('+data.contractId+','+data.contractNumber+','+data.mapid+')" class="btn btn-blue">Process</button>';
									}else{
										return '<button id="'+data.contractId+'" onclick="Manual('+data.contractId+','+data.contractNumber+','+data.mapid+')" class="btn btn-blue" disabled>Process</button>';
									}
				            		
				            	},
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
			 
		} else {
			tbl_contracts_manual.ajax.url(globalUrl+"/contract/company/"+$('#slc_ii_company').val()+"/contracts" ).load();
		}
		 $('#tbl_contract_invoice_manual').show();
	}else{
//		console.log($('#slc_ii_type').val());
		console.log('else');
	}
	

	

	
});

$('#mdl_ii_uploaded_invoice_header').on('change', function (e) {

	var fileName = e.target.files[0].name;
	$('#mdl_ii_uploaded_invoice_header_lbl').text('The file "' + fileName + '" has selected.')
});

$('#mdl_ii_uploaded_invoice_body').on('change', function (e) {

	var fileName = e.target.files[0].name;
	$('#mdl_ii_uploaded_invoice_body_lbl').text('The file "' + fileName + '" has selected.')
});
function Process(id,number,mapping) {
	
	$('#mdl_contract_comment').val('');
	$('#mdl_ii_uploaded_invoice_header').val('');
	$('#mdl_ii_uploaded_invoice_body').val('');
	$('#mdl_ii_uploaded_invoice_copy').val('');
	$('#mdl_ii_uploaded_invoice_header_lbl').text('');
	$('#mdl_ii_uploaded_invoice_body_lbl').text('');
	
	$('#mdl_contract_id').val(id);
	$('#mdl_mapping_id').val(mapping);
	$('#mdl_ii_contract_no').text(number);
//	console.log('contractId'+id);
	
	$('#mdl_issue_invoice').modal('toggle');
}

$('#sendInvoices').on('click', function() {
	$('#overlay').show();
	files=[]
//	console.log($('#mdl_ii_uploaded_invoice_header').val()=='');
	
	if ($('#mdl_ii_uploaded_invoice_header').val()!='') {
		files.push($('#mdl_ii_uploaded_invoice_header')[0]);
	}
	if ($('#mdl_ii_uploaded_invoice_body').val()!='') {
		files.push($('#mdl_ii_uploaded_invoice_body')[0]);
	}
	
	data={
			'comments':$('#mdl_contract_comment').val(),
			'mapping':$('#mdl_mapping_id').val(),
			'contractNumber': $('#mdl_ii_contract_no').text(),
			'contractId': $('#mdl_contract_id').val(),
	};
	if (files.length == 0) {
		$('#overlay').hide();
		Swal.fire(
				  'No Files Selected',
				  'Please Select Invoice Files!',
				  'warning'
				)
	}else{
		
		if ($('#mdl_ii_uploaded_invoice_copy').val()!='') {
			files.push($('#mdl_ii_uploaded_invoice_copy')[0]);
		}
		
		differentialAsync('/invoice',data,files, function(res) {
			if (res.status == 406) {
				$('#overlay').hide();
				Swal.fire(
						  'Files Not Accepted',
						  'Please Select correct Invoice Files!',
						  'error'
						)
			}else{
				$("#slc_ii_company").prop('disabled', true);
				$("#slc_ii_type").prop('disabled', true);
				$("#btn_search").prop('disabled', true);
				$('#tbl_contract_invoice').hide();
				if (tbl_uploaded_invoices == undefined) {
					tbl_uploaded_invoices = $('#tbl_uploaded_invoice_data').DataTable({
						 processing: true,
						 serverSide: true,
						 responsive: true,
					     ajax: {
					    	 url:globalUrl+"/invoice/uploaded",
					         type: 'GET',
					         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
					     },
					     columns: [
					    	 	{ "data": "contractNo" },
					            { "data": "invoiceNo" },
					            { "data": "invoiceDate",
					            	className: "dt-nowrap",
					            },
					            { "data": "discount" },
					            { "data": "total",
					            	orderable: false,
					            	className: "text-right",
					            	 render: function(data,type,row,meta) {
										  return currencyFormat(data);
									  },	
					            },
					            { "data": "totaltax",
					            	className: "text-right",
					            	 render: function(data,type,row,meta) {
										  return currencyFormat(data);
									  },	
					            },
					            { "data": "netAmount",
					            	className: "text-right",
					            	render: function(data,type,row,meta) {
					            		return currencyFormat(data);
					            	},	
					            },
					            { "data": "btch" },
					            { "data": "status",
					            	orderable: false,
					            	render: function(data,type,row,meta) {
					            		if (data.status == 'R') {
					            			return '<label class="btn btn-danger btn-flat margin" data-toggle="tooltip" data-placement="top" title="'+data.reason+'">Rejected</label>';
										}else{
											return '<label class="btn bg-olive btn-flat margin" >Accepted</label>';
										}
					            		
					            	},
					            },
					            { "data": "view",
					            	orderable: false,
					            	render: function(data,type,row,meta) {
					            			return '<button id="'+data+'" onclick="ViewDetails('+data+')" class="btn btn-blue btn-flat margin">View</button>';
										
					            		
					            	},
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
					tbl_uploaded_invoices.ajax.url(globalUrl+"/invoice/uploaded" ).load();
				}
				
				$('#overlay').hide();
				$('#mdl_issue_invoice').modal('toggle');
				$('#tbl_contract_invoice_accepted').show();
			}
			
		})
	}
	
});

function ViewDetails(invoiceId) {
	console.log(invoiceId)
	if (tbl_uploaded_invoices_details == undefined) {
		tbl_uploaded_invoices_details = $('#tbl_uploaded_invoice_details').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/invoice/uploaded/invoice/"+invoiceId+"/details",
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		    	 	{ "data": "itemCode" },
		            { "data": "unitPrice" },
		            { "data": "qty"},
		            { "data": "amount" },
		            { "data": "serviceCharge",
		            	orderable: false,
		            	className: "text-right",
		            	 render: function(data,type,row,meta) {
							  return currencyFormat(data);
						  },	
		            },
		            { "data": "discount",
		            	className: "text-right",
		            	 render: function(data,type,row,meta) {
							  return currencyFormat(data);
						  },	
		            },
		            { "data": "value",
		            	className: "text-right",
		            	render: function(data,type,row,meta) {
		            		return currencyFormat(data);
		            	},	
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
		tbl_uploaded_invoices_details.ajax.url(globalUrl+"/invoice/uploaded/invoice/"+invoiceId+"/details" ).load();
	}
	
	
	
	
	$('#mdl_invoice_details').modal('toggle');
}


$('#_btn_ii_Approve').on('click', function() {
	getAsyncData("/invoice/uploaded/invoice/approve", function(res) {
		Swal.fire(
				  'Approved',
				  'Your Data Successfully Updated',
				  'success'
				)
		$('#tbl_contract_invoice_accepted').hide();
		$("#slc_ii_company").prop('disabled', false);
		$("#slc_ii_type").prop('disabled', false);
		$("#btn_search").prop('disabled', false);
	})
});

$('#_btn_ii_reject').on('click', function() {
	getAsyncData("/invoice/uploaded/invoice/reject", function(res) {
		Swal.fire(
				  'Rejected',
				  'Your Data Successfully Updated',
				  'success'
				)
		$('#tbl_contract_invoice_accepted').hide();
		$("#slc_ii_company").prop('disabled', false);
		$("#slc_ii_type").prop('disabled', false);
		$("#btn_search").prop('disabled', false);
	})
});

$("#ii_tabs").tabs({
    activate: function (event, ui) {
    	if (ui.newTab[0].innerText != 'Manual Enter') {
    		$('#tbl_contract_invoice_accepted').hide();
    		$('#tbl_contract_invoice').hide();
		}
    }
});

$('#btn_upload_search').on('click', function() {

	if ($('#slc_ii_upload_company').val()==null) {
		 Swal.fire(
				   'Please select company',
				   '',
				   'error'
				 );
	}else if ($('#slc_ii_upload_type').val()=='') {
//		console.log($('#slc_ii_type').val());
		 Swal.fire(
				   'Please select type',
				   '',
				   'error'
				 );
	}else if ($('#slc_ii_upload_type').val()=='recurring') {
		 if (tbl_contracts == undefined) {
			 
			 tbl_contracts = $('#tbl_contracts').DataTable({
				  processing: true,
					 serverSide: true,
					 responsive: true,
				     ajax: {
				    	 url:globalUrl+"/contract/company/"+$('#slc_ii_upload_company').val()+"/contracts",
				         type: 'GET',
				         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
				     },
				     columns: [
				    	 	{ "data": "contractNo" },
				            { "data": "desc" },
				            { "data": "category" },
				            { "data": "paymentType" },
				            { "data": "amount",
				            	orderable: false,
				            	className: "text-right",
				            	 render: function(data,type,row,meta) {
									  return currencyFormat(data);
								  },	
				            },
				            { "data": "annualPayment",
				            	orderable: false,
				            	className: "text-right",
				            	render: function(data,type,row,meta) {
				            		return currencyFormat(data);
				            	},	
				            },
				            { "data": "view",
				            	orderable: false,
				            	render: function(data,type,row,meta) {
//				            		console.log(data.status);
				            		if (data.status == 1) {
				            			return '<button id="'+data.contractId+'" onclick="Process('+data.contractId+','+data.contractNumber+','+data.mapid+')" class="btn btn-blue">Process</button>';
									}else{
										return '<button id="'+data.contractId+'" onclick="Process('+data.contractId+','+data.contractNumber+','+data.mapid+')" class="btn btn-blue" disabled>Process</button>';
									}
				            		
				            	},
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
			 
		} else {
			tbl_contracts.ajax.url(globalUrl+"/contract/company/"+$('#slc_ii_company').val()+"/contracts" ).load();
		}
		 $('#tbl_contract_invoice').show();
	}else{
//		console.log($('#slc_ii_type').val());
		console.log('else');
	}
	
})

function Manual(id,number,mapping) {
	console.log(id);
}



/*
 * Download File formats ZIP file
 */

$('#download_fileformats_btn').on('click', function() {
	console.log("download_fileformats_btn");
	var urlHeader = "/invoice/downloadinvfileformats";
	downloadFile(urlHeader);
	
	
	
});
