$(document).ready(function() {

	TenderOpenTable = undefined;
	EligibleSupTable = undefined;
	console.log("Ready");
	tenderOpen();
	
	

});



console.log("init");

function tenderOpen() {
	if (TenderOpenTable == undefined) {
		console.log("Inside tender open")
		console.log(globalUrl+"/tender/tenderopen")


		TenderOpenTable = $('#tender_open').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
				url:globalUrl+"/tender/tenderopen",
				type:'GET',
				headers: { 'Authorization': 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [


				{"data":"bidno"},
				{"data":"tendername"},
				{"data":"tenderdescription"},
				{"data":"CategortName"},
				{"data":"eligibleSubcatName"},
				{"data":"eligiblesubcatProdname"},
				{"data":"tenderID",
					orderable: false,
					render: function(data,type,row,meta) {
						return'<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="viewEligibleVenders('+data+')">Open</button>'
					},
					
					},
					
					
					{"className": 'details-control',
					"orderable": false,
					"data": null,
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
		
	}else {
		TenderOpenTable.ajax.url(globalUrl+"/tender/tenderopen").load();
	}
	}
	

$('#tender_open tbody').on('click','td.details-control',function() {
		var tr = $(this).closest('tr');
		var row = TenderOpenTable.row(tr);

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
							
			'<td>Created Date</td>' +				
			'<td>Closing Date</td>' +
			'<td>Closing Time</td>' +

			'</tr>' +
			'<tr>' +
			
			'<td>' + d.created_date + '</td>' +
			'<td>' + d.closingdate + '</td>' +
			'<td>' + d.closingtime + '</td>' +
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
	
	function viewEligibleVenders(tenderID){
		//show modal
		EligibleSup(tenderID);
		$('#my_Modal').modal('toggle')
}



console.log("init");

var selectedTenderID = 0;

function EligibleSup(tenderID) {
	console.log("EligibleSupTable "+EligibleSupTable);
	selectedTenderID = tenderID;
	if (EligibleSupTable == undefined) {
		console.log("Inside Eligible Suppliers "+tenderID)
	//	console.log(globalUrl+"/tender/get-eligible-supplier")


		EligibleSupTable = $('#eligible_sup_1').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
				url:globalUrl+"/tender/get-eligible-supplier/"+tenderID,
				type:'GET',
				headers: { 'Authorization': 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [

				{"data":"supplierID"},
				{"data":"subcompanyName"},
				{"data":"scemailadmin",
				//{"data":"tenderID",
				//	orderable: false,
				//	render: function(data,type,row,meta) {
				//			return'<div class="modal-footer">'+
				//			'<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="Confirm('+row.tenderID+','+row.supplierID+')">Confirm</button>'
							
				//		},
						
							
				},
			
			],
			
			'select': {
			             'style': 'multi',
			             'selector': 'td:first-child'
			          },
			          'order': [[1, 'asc']]
	  
	                
		});
		
	}else {
		EligibleSupTable.ajax.url(globalUrl+"/tender/get-eligible-supplier/"+tenderID).load();
	}
}


$('#invite_all_btn').on('click', function() {	
	//function Confirm(tenderId,supplierId) {
		console.log("Inside Invite_all_btn" +selectedTenderID);
		Swal.fire({
			title: 'Are you sure?',
			text: "Do you want to confirm?",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, I do'
		}).then((result) => {
			if (result.value) {
				console.log(selectedTenderID);

				let Object = {
					
					"tenderID": selectedTenderID,
					"confirmEligibleSupplier": "Yes",
					

				};
				
				//getAsyncDataPOST("/tender/"+tenderId+"/eligible-supplier-confirm",Object, function(res) {
					
				var responseCode = getAsyncDataPOST("/tender/eligible-supplier-confirm/"+selectedTenderID,Object, function(res) {
					console.log(res);
					console.log(res.responseJSON.code);
					if (res.responseJSON.code == "01") {
						Swal.fire(
							'Confirm',
							'Tender has been Success and Email has been Sent Successfully.',
							'success'
						)
						$('#my_Modal').modal('toggle')
						TenderOpenTable.ajax.url(globalUrl+"/tender/tenderopen").load();
			
					} else if (res.responseJSON.code == "02") {
						Swal.fire(
							'Failed',
							'Tender has been Failed.',
							'error'
						)
					} else {
						Swal.fire(
							'Confirm',
							'Tender has been Already confirmed.',
							'success'
						)
					}


				})
				
					if(responseCode == undefined){
							Swal.fire({
							  title: 'Sending Invitations...',
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
	
	});
	

	$('#invite_all_btn').on('click', function() {
		console.log("Selected -- "+selectedTenderID);	
		
});

	
/*
$('#send_notice_btn').on('click', function() {

	console.log("Inside sendNotice " + selectedTenderID);
	Swal.fire({
		title: 'Are you sure?',
		text: "Do you want to send?",
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, I do'
	}).then((result) => {
		if (result.value) {
			console.log(selectedTenderID);

			let Obj = {
				"tenderID": selectedTenderID,
				"emailNotify": "Send",
			};

			getAsyncDataPUT("/tender/sendnotify", Obj, function(res) {
				console.log(res);
				console.log(res.responseJSON.code);
				if (res.responseJSON.code == "00") {
					Swal.fire(
						'Confirm',
						'Email send successfully.',
						'success'
					)
				} else if (res.responseJSON.code == "01") {
					Swal.fire(
						'Failed',
						'Email send has been Failed.',
						'success'
					)
					
				} else if (res.responseJSON.code == "02") {
					Swal.fire(
						'Success',
						'Email has been already send.',
						'success'
					)
					
					
                } else if (res.responseJSON.code == "03") {
					Swal.fire(
						'Failed',
						'Email send has been Failed.',
						'success'
					)				
					
				} 
				
				

			});

		}
	});

});

*/
