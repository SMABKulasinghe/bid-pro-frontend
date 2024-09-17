$(document).ready(function() {

	TenderViewTable = undefined;
	console.log("Ready");
	tenderView();

});

console.log("init");

function tenderView() {
	if (TenderViewTable == undefined) {
		console.log("inside tender view")
		console.log(globalUrl+"/tender/para")


		TenderViewTable = $('#tender_view').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
				url:globalUrl+"/tender/para",
				type:'GET',
				headers: { 'Authorization': 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [

				{ "data": "bidno" },
				{ "data": "tendername" },
				{ "data": "tenderdescription" },
				{ "data": "CategortName" },
				{ "data": "eligibleSubcatName" },
//				{"data": "eligiblesubcatProdName"},
				{"data": "Tender_status_name"},
				{"data":"tenderID",
				

					"className": 'details-control',
					"orderable": false,
					"data": null,
					"defaultContent": '' 

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
	                ],
	                
			      'select': {
			             'style': 'multi',
			             'selector': 'td:first-child'
			          },
			          'order': [[3, 'asc']]
	  
	                
		});
		
	}else {
		TenderViewTable.ajax.url(globalUrl+"/tender/para").load();
	}
	}
	

$('#tender_view tbody').on('click','td.details-control',function() {
		var tr = $(this).closest('tr');
		var row = TenderViewTable.row(tr);

		if (row.child.isShown()) {
			
			row.child.hide();
			tr.removeClass('shown');
		}
		else {
			// Open this row
			row.child(format(row.data())).show();
			tr.addClass('shown');
		}
	});


	function format(d) {
		// `d` is the original data object for the row
		return '</table>'+ '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">' +
			
			'<tr class="text-yellow">'+
							
			'<td>Authorize reason</td>' +
			'<td>RFP File Name</td>' +
			'<td>Created Date</td>' +				
			'<td>Closing Date</td>' +
			'<td>Closing Time</td>' +
			'<td>Authorize Date</td>' +
			'<td>Authorized By</td>' +

			'</tr>' +
			'<tr>' +
			
			'<td>' + d.reason + '</td>' +
			'<td>' + d.rfp + '</td>' +
			'<td>' + d.created_date + '</td>' +
			'<td>' + d.closingdate + '</td>' +
			'<td>' + d.closingtime + '</td>' +
			'<td>' + d.authorizedate + '</td>' +
			'<td>' + d.authorizedby + '</td>' +
			'</tr>' +
			
			'<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInDown">' +
			'<tr class="text-yellow">'+
			'<td>Cordinator 1 Name</td>' +
			'<td>Cordinator 1 Designation</td>' +
			'<td>Cordinator 1 Email</td>' +
			'<td>Cordinator 1 Contact No</td>' +

			'</tr>' +

			'<tr>' +
			 
			'<td>' + d.cordinator1name + '</td>' +
			'<td>' + d.cordinator1designation + '</td>' +
			'<td>' + d.cordinator1email + '</td>' +
			'<td>' + d.cordinator1contactno + '</td>' +

			'</tr>' +

			'</table>'+ '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">' +
			
			'<tr class="text-yellow">'+
							
			'<td>Cordinator 2 Name</td>' +
			'<td>Cordinator 2 Designation</td>' +
			'<td>Cordinator 2 Email</td>' +
			'<td>Cordinator 2 Contact No</td>' +

			'</tr>' +
			'<tr>' +
			                
			'<td>' + d.cordinator2name + '</td>' +
			'<td>' + d.cordinator2designation + '</td>' +
			'<td>' + d.cordinator2email + '</td>' +
			'<td>' + d.cordinator2contactno + '</td>' +
			'</tr>' +


			'</table>' + '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">' +
			'<tr class="text-yellow">'+
			
			'<td>Support Document 1</td>' +
			'<td>Support Document 2</td>' +

			'<tr>' +

			
			'<td><Button type="button" data-supportdoc1="'+d.supportdoc1+'" class="btn btn-primary" onclick="download(event)">View Document</Button></td>' +
			'<td><Button type="button" data-supportdoc1="'+d.supportdoc2+'" class="btn btn-primary" onclick="download(event)">View Document</Button></td>' +

			'</table>';
	}


	function viewImage(buttonID,bidno,tenderNumber) {
		console.log(buttonID+" "+bidno+" "+tenderNumber);
		//$("#imgLocation").attr("src", path);

		  if (buttonID == "SD1img") {
			$('#imgLocation').attr('src',globalUrl+'/image/tender/'+bidno+'/sd1');
			$('#mdl_ar_com_name').text("Support Document 1");
			$('#mdl_ii_bid_no').text(tenderNumber);
		} else if (buttonID == "SD2img") {
			$('#imgLocation').attr('src',globalUrl+'/image/tender/'+bidno+'/sd2');
			$('#mdl_ar_com_name').text("Support Document 2");
			$('#mdl_ii_bid_no').text(tenderNumber);
		}
		
		$('#mdl_issue_invoice').modal('toggle');
	}
	
	function download(event){
	console.log(event.target.getAttribute('data-supportdoc1'));
	
	let filePath = event.target.getAttribute('data-supportdoc1');
	const myArray = filePath.split("/");
	var fileId = myArray[5]
	var fileName = myArray[6]
	const fileNameSplit = fileName.split(".");
	var fileNameSplitForUrl = fileNameSplit[0]
	var fileNameForUrl = fileId +"/"+fileNameSplitForUrl;
	console.log(fileId);
	console.log(fileNameSplitForUrl);
	//let urlHeader = "/tender/download-bidded-tender-files/"+fileNameForUrl;
	//console.log(urlHeader);
	
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink)
	window.open(globlelink+"/tender/tender-auth-file-upload/"+fileNameForUrl);
	
}
	
		



