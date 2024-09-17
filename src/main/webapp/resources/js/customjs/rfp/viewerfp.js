$( document ).ready(function() {
	
	$("#userTableDiv").hide();
	rfpViewTable = undefined;
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
			   	url:globalUrl+"/rfp/rfp-view-data",
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 {"data":"rfpNumber"},
			    	 {"data":"tenderNo"},
					 {"data":"fileName"},
					 {"data":"tenderDescription"},
					 {"data":"openingDate"},
					 /*{"data":"closingTime"},*/
			    	 /*{"data":"rfpDetails"},*/
					 
					 {"data":"rfpID",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button"  class="btn btn-success" style="margin-right: 10px" onclick="getMore('+data+')">More</button><button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="downloadRfpFile('+data+')">Download</button>'
							  
						  },	
					},
					
					/*{"data":"tenderId",
						orderable: false,
						
		            	 render: function(data,type,row,meta) {
			
								if(!row.tenderSubmissions){
									return '<button type="button" class="btn btn-success" style="margin-right: 10px" onclick="submitRFPDetails('+data+', '+row.rfpID+')">Submit your Details</button>';
								}else{
									return "Already submitted"
								}
							  
						  },	
					},*/
					
					//{"data":"tenderSubmissions"},
					/*{"data":"tenderId"},*/
					/*{"data":"rfpID",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="Approve('+data+')">Authorize</button>'+
							  '<button type="button" class="btn btn-danger" onclick="Reject('+data+')">Reject</button>'
						  },	
					}*/
			   
			    	 
			     ],
			order: [[1, 'asc']],
		})
		
	}else{
		rfpViewTable.ajax.url(globalUrl+"/rfp/rfp-view-data").load();
	}
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
				console.table(res.responseJSON.data);
	});
	
	$('#mdl_issue_invoice').modal('toggle');
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