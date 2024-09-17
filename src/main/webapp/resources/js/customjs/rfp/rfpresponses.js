
$(document).ready(function() {
	
	rfpResponsesTable = undefined;
	rfpDetailsResponsesTable = undefined;
	console.log("Ready");
	rfpResponses();
});

function rfpResponses(){
	if(rfpResponsesTable == undefined){
		rfpResponsesTable = $('#rfpResponses').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			//scrollX: true,
			ajax: {
			   	url:globalUrl+"/rfp/rfpresponses",
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			
			columns: [
					 {"data":"index"},
					 {"data":"rfpNumber"},
					 {"data":"rfpCreatedDateTime"},
			    	 {"data":"fileName"},
					 {"data":"createdUser"},
					 {"data":"category"},
					 {"data":"department"},
			    	{"data":"rfpID",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button" data-rfpId="'+row.rfpID+'" class="btn btn-success" style="margin-right: 10px" onclick="uploadedFileRfp(event)">View Uploaded File</button>'
						  },
					},
					 {"data":"rfpID",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button" data-rfpNumber="'+row.rfpNumber+'" data-fileName="'+row.fileName+'" data-rfpId="'+row.rfpID+'"  class="btn btn-success" style="margin-right: 10px" onclick="getMore(event)">View</button><br><br><button type="button"  class="btn btn-success" style="margin-right: 10px" onclick="downloadRfpFile('+data+')">Download</button>'
						  },
					},
						
					{"data":"prID",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button" data-rfpNumber="'+row.rfpNumber+'" data-catName="'+row.category+'" data-fileName="'+row.fileName+'" data-prId="'+row.prID+'"  class="btn btn-success" style="margin-right: 10px" onclick="getProDetails(event)">View<br> Procurement</button>'
						  },
					},
					
					
			/*		{"data":"prID",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button" data-rfpNumber="'+row.rfpNumber+'" data-department="'+row.department+'" data-requester="'+row.requester+'" data-approval="'+row.approval+'" data-datePro="'+row.datePro+'" data-designation="'+row.designation+'" data-name="'+row.name+'" data-supplier="'+row.supplier+'" data-purchaseDate="'+row.purchaseDate+'" data-biddingPeriod="'+row.biddingPeriod+'" data-deliveryPeriod="'+row.deliveryPeriod+'" data-importantNoted="'+row.importantNoted+'" data-clarifications="'+row.clarifications+'" data-quotationValidity="'+row.quotationValidity+'" data-warrantyPeriod="'+row.warrantyPeriod+'" data-marketContact="'+row.marketContact+'" data-serviceCategory="'+row.serviceCategory+'" data-budgeted="'+row.budgeted+'" data-prId="'+row.prID+'"  class="btn btn-success" style="margin-right: 10px" onclick="getProDetails(event)">View Procurement</button>'
						  },
					},*/
					
						
					{"data":"rfpID",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button" data-rfpNumber="'+row.rfpNumber+'" data-fileName="'+row.fileName+'" data-rfpId="'+row.rfpID+'" class="btn btn-primary" style="margin-right: 10px" onclick="submitRfpComment(event)">Authorization</button>'+
							/*'<br><br><button type="button" class="btn btn-danger" onclick="Reject('+data+')">Reject</button>'+*/
								/*'<br>'+*/
							  ''
						  },	
					}			   			    	 
			     ],
			order: [[1, 'asc']],
			
		});
		console.log("Programe");
	}else{
		rfpResponsesTable.ajax.url(globalUrl+"/rfp/rfpresponses").load();
	}
}

function getMore(event){
	console.log(event.target.getAttribute('data-rfpNumber'))
	console.log(event.target.getAttribute('data-fileName'))
	console.log(event.target.getAttribute('data-rfpId'))
	
	var data = event.target.getAttribute('data-rfpId')
	
	$('#rfp_number').val(event.target.getAttribute('data-rfpNumber'));
	$('#rfp_fileName').val(event.target.getAttribute('data-fileName'));
	
	getAsyncData("/rfp/rfpdetail/"+data, function(res) {
				let row = "";
				let table = "";
				$("#rfpDetailsResponses td").remove();
				var n = 1;
				for(var i in res.responseJSON.data){

					row = `<tr>
								<td>${[n]}</td>
								<td>${res.responseJSON.data[i].rfpHeaderName } </td>
								<td>${res.responseJSON.data[i].rfpDetailsName } </td>
								
							</tr>`
					table = $('#rfpDetailsResponses').find('tbody')
					table.append(row);					
					n++;
				}				
				str = JSON.stringify(res);
				console.log("Approve response- "+str);
				//console.log("Approve response 111- "+res);
				console.table(res.responseJSON.data);	
	});	
	$('#mdl_issue_invoice').modal('toggle');
}


// Procurement Request Details


function getProDetails(event){	
	var data = event.target.getAttribute('data-prId')
	console.log( event.target.getAttribute('data-prId'));
	
	var RFPNo = event.target.getAttribute('data-rfpNumber')
	console.log( RFPNo);
	var CategoryName = event.target.getAttribute('data-catName')
	console.log( CategoryName);
	
	if(event.target.getAttribute('data-prId') == null || event.target.getAttribute('data-prId') == undefined || event.target.getAttribute('data-prId') == ""
		|| event.target.getAttribute('data-prId') === "null") {
		console.log("empty");
		Swal.fire(
			'No PR Data!',
			'Purchase Request is not available.',
			'info'
		)

	}else{
		console.log("Have");
		
		getAsyncData("/rfp/viewprocurement/"+data, function(res) {
		console.log(res);
				
				const PRItem = res.responseJSON.data[0];
				console.log(PRItem.approval);
				
				 $('#mdl_ii_rfpNumber').text(RFPNo);
				 $('#mdl_ii_category').text(CategoryName);

				
				$('#department_pro').val(PRItem.department);
				$('#requester_pro').val(PRItem.requester);
				$('#approval_pro').val(PRItem.approval);
				$('#name_pro').val(PRItem.name);
				$('#designation_pro').val(PRItem.designation);
				$('#tech_evolution_team').val(PRItem.evolutionTeam);
				let timeCreated = new Date(PRItem.datePro).toLocaleTimeString()
				let dateCreated = new Date(PRItem.datePro).toISOString().split('T')[0]
				$('#date_pro').val (dateCreated+" "+ timeCreated);
				$('#purchase_date_pro').val(PRItem.purchaseDate);
				
				$('#projectCost_pro').val(PRItem.projectCost);
				$('#prices_pro').val(PRItem.prices);
				$('#bidding_period_pro').val(PRItem.biddingPeriod);
				$('#delivery_period_pro').val(PRItem.deliveryPeriod);
				$('#important_noted_pro').val(PRItem.importantNoted);
				$('#supplier_pro').val(PRItem.supplier);
				$('#clarifications_pro').val(PRItem.clarifications);
				$('#payment_terms_pro').val(PRItem.paymentTerms);
				$('#quotation_validity').val(PRItem.quotationValidity);
				$('#warranty_period_pro').val(PRItem.warrantyPeriod);
				$('#market_contact_pro').val(PRItem.marketContact);
				
				$('#service_category_pro').val(PRItem.serviceCategory);
				
				$('#budgeted').val(PRItem.budgeted);
				$('#type').val(PRItem.type);
				$('#sample_equirement').val(PRItem.sampleEquirement);
				$('#bid_meeting').val(PRItem.bidMeeting);
				$('#expenditure').val(PRItem.expenditure);	
				
				
				$('#mdl_procurement').modal('toggle');			
	});
	}
}



function submitRfpComment(event){
	//console.log(data);
	//formclear();
	console.log(event.target.getAttribute('data-rfpNumber'))
	console.log(event.target.getAttribute('data-fileName'))
	console.log(event.target.getAttribute('data-rfpId'))
	$("#appendData input").remove();
	$("#rfpNumberDiv input").remove();
	$("#rfpFileNameDiv input").remove();
	
	$('#appendData').append(`<input type="hidden" id="rfpId" name="rfpId" value="${event.target.getAttribute('data-rfpId')}" />`);
	$('#rfpNumberDiv').append(`<input class="form-control" type="text" disabled value="${event.target.getAttribute('data-rfpNumber')}" />`);
	$('#rfpFileNameDiv').append(`<input class="form-control" type="text" disabled value="${event.target.getAttribute('data-fileName')}" />`);
	
	$('#rfpcommentDiv textarea').remove();
	$('#rfpcommentDiv').append(`<textarea id="rfpComment" class="form-control" rows="2" ></textarea>`);
	$('#submit_rfp_comment').modal('toggle');
	
}

$('#authrized').on('click', function() {
	
	if ($('#rfpComment').val().length==0) {
		status+=1;
		$('#rfpComment').parent().parent().addClass('has-error')
	}else{
		
		var rfp = {
		"rfpId" : $('#rfpId').val(),
		"rfpComment" : $('#rfpComment').val(),	
	};
	
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
						
				var res;
			  	console.log("before res"+res);
			  	getAsyncData("/rfp/"+ $('#rfpId').val()+"/approve", function(res) {
					console.log("after res"+res);
					var	 responseCode = getAsyncDataPUT("/rfp/add-rfp-comment",rfp,confirmedCallBack)
				  	//rfpResponsesTable.ajax.url(globalUrl+"/rfp/rfpresponses" ).load();
				 
					if(responseCode == undefined ){
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
				})
				
				
		  
		  }
		})
		
	}
		
	
	
});

$('#rejected').on('click', function() {
	
	if ($('#rfpComment').val().length==0) {
		status+=1;
		$('#rfpComment').parent().parent().addClass('has-error')
	}else{
		var rfp = {
		"rfpId" : $('#rfpId').val(),
		"rfpComment" : $('#rfpComment').val(),
				
	};
	
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
			
					
			  
			  getAsyncData("/rfp/"+ $('#rfpId').val()+"/reject", function(res) {
			  //rfpResponsesTable.ajax.url(globalUrl+"/rfp/rfpresponses" ).load();
		
				  var	 responseCode = getAsyncDataPUT("/rfp/add-rfp-comment",rfp,confirmedCallBack)
						
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
		
				})
		  
		  }
		})
	}
	
		
	
});



$('#cancel_rfp_details').on('click', function() {
	$("#rfpDetailsResponses td").remove();
});

/*$('#create_pdf').on('click', function() {
	alert("ha ha")
});*/
function createPDF() {
        var sTable = document.getElementById('for_pdf').innerHTML;

        var style = "<style>";
        style = style + "table {width: 100%;font: 17px Calibri;}";
        style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px;}";
        style = style + "</style>";
		//text-align: center;
        // CREATE A WINDOW OBJECT.
        var win = window.open('', '', 'height=700,width=700');

        win.document.write('<html><head>');
        win.document.write('<title>RFP Details</title>');   // <title> FOR PDF HEADER.
        win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
        win.document.write('</body></html>');

        win.document.close(); 	// CLOSE THE CURRENT WINDOW.

        win.print();    // PRINT THE CONTENTS.
    }

function downloadRfpFile(data){
	
	getAsyncData("/rfp/download-rfp/"+data, function(res) {
		let str = res.responseJSON.data;
		var urlHeader = "/rfp/download-rfp-csv/"+str;
		downloadFile(urlHeader);
		
		
		console.log("Approve response- "+str);
		
		
		deleteFile(str)		
	});
	
}

function uploadedFileRfp(event){
	console.log(event.target.getAttribute('data-rfpId'))
	var fileView = event.target.getAttribute('data-rfpId');
	var globlelink = sessionStorage.getItem("GlobleUrl");
	window.open(globlelink+"/rfp/rfp-file-view/"+fileView);
}


function confirmedCallBack(responseCode){
	console.log("responseCode"+responseCode);
	console.log("responseCode.responseText"+responseCode.responseText.responseText);
	$("#submit_button").prop("disabled",false);
		
	   if(responseCode.responseText != null){
		   rfpResponsesTable.ajax.url(globalUrl+"/rfp/rfpresponses").load();
		   Swal.fire(
				      'Accepted!',
				      'RFP Authorized.',
				      'success'
				    )
		$('#submit_rfp_comment').modal('hide');
		//rfpResponsesTable.ajax.url(globalUrl+"/rfp/rfpresponses").load();
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'RFP Authorized Failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	  
}