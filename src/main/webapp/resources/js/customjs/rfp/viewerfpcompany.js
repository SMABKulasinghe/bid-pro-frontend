$( document ).ready(function() {
	
	$("#userTableDiv").hide();
	rfpViewTable = undefined;
	tenderDetailsView  = undefined;
	rfpView();
/*$('#searchUserIDButton').on('click', function() {
	$("#userTableDiv").show();
		
	});*/

});


function rfpView(){
	if(rfpViewTable == undefined){
		rfpViewTable = $('#viewRfpTable').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
			   	url:globalUrl+"/rfp/rfp-view-data-for-company",
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 {"data":"index"},
			    	 {"data":"rfpNumber"},
					 {"data":"fileName"},
					 {"data":"createdDateTime"},
					 {"data":"createdUser"},
					{"data":"rfpId",
						orderable: false,
		            	render: function(data,type,row,meta) {
								
							 return '<button type="button" data-rfpId="'+row.rfpId+'" class="btn btn-success" style="margin-right: 10px" onclick="uploadedFileRfp(event)">View Uploaded File</button>'
										  
						},	
					},
					{"data":"rfpId",
						orderable: false,
		            	render: function(data,type,row,meta) {
								
							return '<button type="button" data-rfpNumber="'+row.rfpNumber+'" data-fileName="'+row.fileName+'" data-rfpId="'+row.rfpId+'"  class="btn btn-success" style="margin-right: 10px" onclick="tenderDetails(event)">View Tender Details</button>';
										  
						},	
					},
					{"data":"rfpId",
						orderable: false,
		            	render: function(data,type,row,meta) {
								
							return '<button type="button" data-rfpNumber="'+row.rfpNumber+'" data-fileName="'+row.fileName+'" data-rfpId="'+row.rfpId+'"  class="btn btn-success" style="margin-right: 10px" onclick="getMore(event)">View</button>';
										  
						},	
					},
					{"data":"status",
						orderable: false,
						
		            	 render: function(data,type,row,meta) {
			
								if(row.status == 3){
									return '<span class="badge badge-success">Approved</span>';
								}else if(row.status == 2){
									return '<span class="badge badge-warning">Pending</span>';
								}else if(row.status == 1){
									return '<span class="badge badge-danger">Rejected</span>';
								}
							  
						  },	
					},
					
					
			   
			    	 
			     ],
			order: [[1, 'asc']],
		})
		
	}else{
		rfpViewTable.ajax.url(globalUrl+"/rfp/rfp-view-data").load();
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

function uploadedFileRfp(event){
	console.log(event.target.getAttribute('data-rfpId'))
	var fileView = event.target.getAttribute('data-rfpId');
	var globlelink = sessionStorage.getItem("GlobleUrl");
	window.open(globlelink+"/rfp/rfp-file-view/"+fileView);
}

function tenderDetails(event){
	console.log(event.target.getAttribute('data-rfpId'))
	var rfpId = event.target.getAttribute('data-rfpId');
	
	if(tenderDetailsView == undefined){
		tenderDetailsView = $('#tender_details_table').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
			   	url:globalUrl+"/rfp/tender-details-for-rfp/"+rfpId,
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [

				{ "data": "bidno" },
				{ "data": "tendername" },
				/*{ "data": "tenderdescription" },*/
				{ "data": "CategortName" },
				{ "data": "eligibleSubcatName" },
				{ "data": "closingdate" },
				{ "data": "closingtime" },
				{"data": "Tender_status_name"},
				
			],
			        
			          'order': [[3, 'asc']]
		})
		
	}else{
		tenderDetailsView.ajax.url(globalUrl+"/rfp/tender-details-for-rfp/"+rfpId).load();
	}
	$('#mdl_tender_details').modal('toggle');
}



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
		
		//downloadFile(str);
		deleteFile(str)		
	});
	
}

function deleteFile(file){
	getAsyncData("/rfp/delete-rfp-csv/"+file, function(res) {
		console.log("Done----------->");
	});
}