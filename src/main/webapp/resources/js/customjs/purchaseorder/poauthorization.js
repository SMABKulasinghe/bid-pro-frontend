$(document).ready(function() {
	
	PoAuthorizationTable = undefined;
	console.log("Ready");
	poAuthorization();

});

console.log("init");

function poAuthorization() {
	if(PoAuthorizationTable == undefined){
		console.log("inside po authorization")
		console.log(globalUrl+"po/poauthorization")
		
		
	PoAuthorizationTable = $('#po_authorization').DataTable({
			  processing: true,
				 serverSide: true,
				 responsive: true,
			     ajax: {
			    	 url:globalUrl+"/po/poauthorization",
			         type: 'GET',
			         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			     },
			     columns: [
					 {"data":"SupplierName"},
			    	 {"data":"TenderName"},
					 {"data":"Qty"},
			    	 {"data":"RfpFileName"},
					 
					 
					 {"data":"RfpId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="getMore('+data+')">View RFP Details</button>'
							  
						  },	
					},
					
					{"data":"BatchFile",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							 return '<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="downloadBatchFile(\''+row.BatchFile+'\')">Download File</button>'
							  //return '<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="downloadBatchFile('+row.BatchFile+')">Download File</button>'
						  },	
					},
					
					/*{"data":"TenderId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							 return '<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="downloadEmailPdf('+data+')">View</button>'
							  
						  },	
					},*/
					
					{"data":"FilePath",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							 return '<button type="button" data-FilePath="'+row.FilePath+'" class="btn btn-primary" style="margin-right: 10px" onclick="downloadEmailPdf1(event)">View pdf</button>'
							  //return '<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="downloadBatchFile('+row.BatchFile+')">Download File</button>'
						  },	
					},
					
					{"data":"PoId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="getMoreTermsAndCon('+data+')">View Details</button>'
							  
						  },	
					},
					
					{"data":"TenderSubmissionId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							/*if(row.TenderEligibility == "16"){
								return '<button type="button" class="btn btn-success" style="margin-right: 10px" onclick="sendMail('+data+','+row.CompanyCode+')">Apporove and Send email</button>'+
								'<button type="button" class="btn btn-danger" style="margin-right: 10px" onclick="reject('+data+','+row.CompanyCode+')">Reject</button>'
							}else if(row.TenderEligibility == "17"){
								return '<span class="badge badge-success">Success</span>'
							}else if(row.TenderEligibility == "18"){
								return '<span class="badge badge-danger">Rejected</span>'
							}*/
							 return '<button type="button" class="btn btn-success" style="margin-right: 10px" onclick="sendMail('+data+','+row.CompanyCode+','+row.TenderId+','+row.Qty+','+row.PoId+')">Apporove and Send email</button>'+
								'<button type="button" class="btn btn-danger" style="margin-right: 10px" onclick="reject('+data+','+row.CompanyCode+')">Reject</button>'
							  
						  },	
					},
			    	 
			    	 
			     ]
		});
	}else{
		PoAuthorizationTable.ajax.url(globalUrl+"po/poauthorization").load();
	}
}

function sendMail(data,CompanyCode,TenderId,Qty,PoId) {
	console.log(data);
	console.log(CompanyCode);
	/*Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes, Approve!'
		}).then((result) => {
		  if (result.value) {
			  
			  getAsyncData("/po/send-email-and-auth/"+data+"/"+CompanyCode, function(res) {
				  PoAuthorizationTable.ajax.url(globalUrl+"/po/poauthorization" ).load();
				  Swal.fire(
					      'Approved!',
					      'PO has been authorized.',
					      'success'
					    )
				})
		  
		  }
		})*/
		
		var data = {
		"tenderSubmissionId" : data,
		"companyCode" : CompanyCode,
		"tenderId" : TenderId,
		"qty" : Qty,
		"poId" : PoId,
		
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
					
					var responseCode =  getAsyncDataPUT("/po/send-email-and-auth", data, confirmedCallBack)		
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
}


function reject(data,CompanyCode) {
		var data = {
		"tenderSubmissionId" : data,
		"companyCode" : CompanyCode,
		
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
					
					var responseCode =  getAsyncDataPUT("/po/po-reject", data, confirmedCallBack)		
					console.log("Response CODE 1"+responseCode);
					if(responseCode == undefined){
							Swal.fire({
							  title: 'Rejecting...',
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
			PoAuthorizationTable.ajax.url(globalUrl+"/po/poauthorization" ).load();
			//$('#mdl_tender_offer').modal('hide');
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Tender Offer creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
			PoAuthorizationTable.ajax.url(globalUrl+"/po/poauthorization" ).load();
			//$('#mdl_tender_offer').modal('hide');
	   } 
	   //formclear();
	    /*$('html, body').animate({
	        scrollTop: $("#Uploading_div").offset().top
	    }, 1500);
		setTimeout(function(){ 
			$('#uploaded_po_Veryfication').hide();
		}, 2000);
		 $('#overlay').hide();*/
}

function downloadEmailPdf(data){
	alert(data);
}

function downloadEmailPdf1(event){
	console.log(event.target.getAttribute('data-FilePath'));
	let filePath = event.target.getAttribute('data-FilePath');
	const myArray = filePath.split("/");
	//var fileId = myArray[5]
	var fileName6 = myArray[6]
	const fileNameSplit = fileName6.split(".");
	var fileNameSplitForUrl = fileNameSplit[0]
	var fileNameForUrl = fileNameSplitForUrl;
	//console.log(fileId);
	console.log(fileNameSplitForUrl);
	
	
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink)
	window.open(globlelink+"/po/download-email-attachment/"+fileNameForUrl);
}


function getMore(data){
	
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

function getMoreTermsAndCon(data){
	
	getAsyncData("/po/get-terms-and-con-for-view/"+data, function(res) {
				let row = "";
				let table = "";
				$("#termsAndConditionTbl td").remove();
				var n = 1;
				for(var i in res.responseJSON.data){
					
					
					row = `<tr>
								<td>${[n]}</td>
								<td>${res.responseJSON.data[i].termAndCon } </td>
								<td>${res.responseJSON.data[i].termAndConDetails } </td>
								
							</tr>`
					table = $('#termsAndConditionTbl').find('tbody')
					table.append(row);
					
					n++;
				}
				
				str = JSON.stringify(res);
				console.log("Approve response- "+str);
				//console.log("Approve response 111- "+res);
				console.table(res.responseJSON.data);
		
	});
	
	$('#mdl_terms_and_con').modal('toggle');
}

function downloadBatchFile(data){
	console.log(data);
	var link = data
	//console.log("Link"+link);
	let strLink = link.toString();
	//console.log("String Link"+strLink);
	let filePath = strLink;
	const myArray = filePath.split("/");
	var fileId = myArray[5]
	let fileName = myArray[6]
	const fileNameSplit = fileName.split(".");
	var fileNameSplitForUrl = fileNameSplit[0]
	var fileNameForUrl = fileId +"/"+fileNameSplitForUrl;
	var extention = fileNameSplit[1]
	
	console.log("String Link"+fileNameForUrl);
	window.open("http://localhost:9222/po/download-batch-file/"+fileNameSplitForUrl+"/"+extention);
	
}