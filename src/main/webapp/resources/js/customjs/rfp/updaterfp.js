$(document).ready(function() {
	
	rfpUpdateTable = undefined;
	rfpDetailsUpdateTable = undefined;
	console.log("Ready");
	rfpUpdates();
});

function rfpUpdates(){
	if(rfpUpdateTable == undefined){
		rfpUpdateTable = $('#updateRfpTable').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
			   	url:globalUrl+"/rfp/rfp-update-data",
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
							  return '<button type="button"  class="btn btn-success" style="margin-right: 10px" onclick="getMore('+data+')">More</button>'
							  
						  },	
					},
					{"data":"tenderId",
						orderable: false,
						
		            	 render: function(data,type,row,meta) {
			
								if(!row.tenderSubmissions){
									return '<button type="button" class="btn btn-success" style="margin-right: 10px" onclick="submitRFPDetails('+data+', '+row.rfpID+')">Submit your Details</button>';
								}else{
									return "Already submitted"
								}
							  
						  },	
					},
					
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
		rfpUpdateTable.ajax.url(globalUrl+"/rfp/rfp-update-data").load();
	}
}

function submitRFPDetails(data,rfpid){
	//console.log(data);
	formclear();
	$("#appendData input").remove();
	$('#appendData').append(`<input type="hidden" id="tender_id" name="tender_id" value="${data}" />`);
	$('#appendData').append(`<input type="hidden" id="rfp_id" name="rfp_id" value="${rfpid}" />`);
	$('#submit_tender_form').modal('toggle');
	
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

$('#submit_button').on('click', function() {
	 var status = 0;
	
	if ($('#upload_doc').val().length==0) {
		status+=1;
		$('#upload_doc').parent().parent().addClass('has-error')
	}
	if ($('#description').val().length==0) {
		status+=1;
		$('#description').parent().parent().addClass('has-error')
	}
	if ($('#tender_id').val().length==0) {
		status+=1;
		$('#tender_id').parent().parent().addClass('has-error')
	}
	if ($('#rfp_id').val().length==0) {
		status+=1;
		$('#rfp_id').parent().parent().addClass('has-error')
	}
	
	/*if ($('#tender_id').val().length!=0) {
		getAsyncData("/rfp/isexists/by/" + "tenderId" + "/"+ $("#tender_id").val(), existsCallBack);
	}*/
	
	
	
	
	console.log('Clicked');
	
	if (status != 0) {
		Swal.fire(
				  'Missing',
				  'Please check the required fields!',
				  'warning'
				);
		
	}else{
		console.log('All Fine');
		
		var contract = {
				"tenderId" : $('#tender_id').val(),
				"rfpId" : $('#rfp_id').val(),
				"description" : $('#description').val(),
				/*"mSupplierCode" : $('#m_supplier_code').val(),*/
			};
			
			
			console.log(JSON.stringify(contract));
			
			
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
					//var responseCode =  differentialAsync("/tender/submit", contract,[$('#upload_company_profile')[0],$('#upload_financial_file')[0],$('#upload_rfp_file')[0],$('#upload_support_doc1')[0],$('#upload_support_doc2')[0],$('#upload_support_doc3')[0]], confirmedCallBack)	
					
					var responseCode =  differentialAsync("/rfp/update-submit", contract,[$('#upload_doc')[0]], confirmedCallBack)	
				  	
		}
				});
			
	}
	
});

function existsCallBack(res) {
	console.log(res);

	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "tenderId") {
		console.log(res.responseText);
		$('#rfp_no').val("");
		Swal.fire({
			type : 'error',
			title : 'Please check another RFP*',
			text : 'You already update this RFP !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
		formclear();
		$('#submit_tender_form').modal('hide');
	} 
}

function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);

	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'RFP has been update successfully.',
				      'success'
				    )
		rfpUpdates();
		$('#submit_tender_form').modal('hide');
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'RFP update failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	    
	    /*$('html, body').animate({
	        scrollTop: $("#Uploading_div").offset().top
	    }, 1500);
		setTimeout(function(){ 
			$('#uploaded_po_Veryfication').hide();
		}, 2000);
		 $('#overlay').hide();*/
}
