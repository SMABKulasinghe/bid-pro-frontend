$(document).ready(function() {

	TenderAuthorizationTable = undefined;
	console.log("Ready");
	tenderAuthorization();

});

console.log("init");

function tenderAuthorization() {
	if (TenderAuthorizationTable == undefined) {
		console.log("inside tender authorization")
		console.log(globalUrl+"/tender/tenderauthorization")


		TenderAuthorizationTable = $('#tender_authorization').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
				url:globalUrl+"/tender/tenderauthorization",
				type:'GET',
				headers: { 'Authorization': 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [

				
				{"data":"bidno"},
				{"data":"tendername"},
				{"data":"tenderdescription"},
				{"data":"CategortName"},
				{"data":"rfp"},
				//{"data":"reason",
				//orderable: false,
					//render: function(data,type,row,meta) {
				//return'<input id="descriptioninput" class="form-control" name="description" autocomplete="off" placeholder="Reason" type="text"/>'
				//},
				//
				{"data":"tenderID",
					orderable: false,
					render: function(data,type,row,meta) {
						//return'<button type="button" class="btn btn-primary" style="margin : 5px" onclick="Approve('+data+')">Authorize</button>&emsp;<strong></strong>'+
							//'<button type="button" class="btn btn-danger" style="margin : 5px" onclick="Reject('+data+')">Reject</button> &nbsp; &nbsp;'
							
							 return '<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="viewModle('+data+')" class="btn btn-primary" style="margin-right: 10px">Go to Authorization</button>';
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
	                ],
	                
	                'select': {
			             'style': 'multi',
			             'selector': 'td:first-child'
			          },
			          'order': [[3, 'asc']]
	  
	                
		});
		
	}/*else {
		TenderAuthorizationTable.ajax.url(globalUrl+"/tender/tenderauthorization").load();
	}*/
	}
	

$('#tender_authorization tbody').on('click','td.details-control',function() {
		var tr = $(this).closest('tr');
		var row = TenderAuthorizationTable.row(tr);

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
			
			'<td>Sub Catergory</td>' +
			'<td>Product Catergory</td>' +
			'<td>Created Date</td>' +				
			'<td>Closing Date</td>' +
			'<td>Closing Time</td>' +

			'</tr>' +
			
			'<tr>' +
			
			'<td>' + d.eligibleSubcatName + '</td>' +   
			'<td>' + d.eligiblesubcatProdname + '</td>' +             
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

			'<tr>'+
			 
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
			
			'<tr>'+
			                
			'<td>' + d.cordinator2name + '</td>' +
			'<td>' + d.cordinator2designation + '</td>' +
			'<td>' + d.cordinator2email + '</td>' +
			'<td>' + d.cordinator2contactno + '</td>' +
			'</tr>' +


			'</table>' + '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;" class="box box-info animated fadeInUp">' +
			'<tr class="text-yellow">'+
			
			'<td>Support Document 1 </td>' +
			'<td>Support Document 2 </td>' +

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
			$('#mdl_ar_com_name').text("Support Document 1");
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

	
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink)
	window.open(globlelink+"/tender/tender-auth-file-upload/"+fileNameForUrl);
	
}
	
		function Approve(data) {
		console.log(data);
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			type: 'warning',
			showCancelButton:true,
			confirmButtonColor:'#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Approve!'
		}).then((result) => {
			if (result.value) {
	
	getAsyncDataPUT("/tender/add-tender-auth-reason/approve",data, function(res) {
				console.log(res);
				console.log(res.responseJSON);
		
				  if(res.responseJSON.code == "01"){
						Swal.fire(
						'Approved!',
						'New supplier has been Authorized.',
						'success'
					)
					TenderAuthorizationTable.ajax.url(globalUrl + "/tender/tenderauthorization").load();
					}else{
						Swal.fire(
						'Failed!',
						'New supplier has been Failed.',
						'error'
						)
					}
				})
		  }
	});
}

/*
				getAsyncData("/tender/"+data+"/approve",function(res) {
					TenderAuthorizationTable.ajax.url(globalUrl+"/tender/tenderauthorization").load();
					Swal.fire(
						'Approved!',
						'Tender has been authorized.',
						'success'
					)
				})

			}
		});
	}
	*/
	
	

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
				
				getAsyncDataPUT("/tender/add-tender-auth-reason/reject",data, function(res) {
				  console.log(res);
				  console.log(res.responseJSON);
		
				  if (res.responseJSON.code == "02") {
				  Swal.fire(
					      'Rejected!',
					      'Tender has been rejected.',
					      'success'
					    )
					TenderAuthorizationTable.ajax.url(globalUrl + "/tender/tenderauthorization").load();
				 	}else{
						Swal.fire(
						'Failed!',
						'Action failed, try again.',
						'error'
						)
					}
					$('#tender_auth_Modal').modal('toggle');
		
				})
		  }
	});
}

				/*getAsyncData("/tender/"+data+"/reject", function(res) {
					TenderAuthorizationTable.ajax.url(globalUrl+"/tender/tenderauthorization").load();
					Swal.fire(
						'Removed!',
						'Tender has been Removed.',
						'success'
					)
				})

			}
		});
	}
	*/
	
var selectedTenderID;
var tenderID;
var tenderName;

function viewModle(data, d1, d2){
	$("#tender_auth_Modal").modal();
	$("#mdl_ii_tenderName").text(d2);
	console.log(data+" "+d1+" "+d2+" ");
	selectedTenderID = data;
	tenderID = d1;
	tenderName = d2;
}


$('#td_reject_button').on('click', function() {
	var dataObj = {
		"selectedTenderID" : selectedTenderID,
		"comment" : $('#comment_tenderauth').val(),
		"isApproved" : false,
	};
	Reject(dataObj);
});


$('#td_authorize_button').on('click', function() {
	var dataObj = {
		"selectedTenderID" : selectedTenderID,
		"comment" : $('#comment_tenderauth').val(),
		"isApproved" : true,
	};
	Approve(dataObj);
});



	