$('#marksheetTable').hide();


$(document).ready(function() {
	mark_sheet_table = undefined;
	viewMarksTable = undefined;
	$('#reg_date').datepicker({
		autoclose: true
	});

	$('#ems_tenderid').select2({
		placeholder: 'Select a Tender No'
	});
	
	$('#vender_ID').select2({
		placeholder: 'Select a Vender'
	});

	getAsyncData('/tender/trnderid', function(res) {
		console.log(res);
		console.log(res.responseJSON);

		$('#ems_tenderid').append(new Option('Select a tender no', ''))
		for (let item of res.responseJSON) {
			$('#ems_tenderid').append(new Option(item.bidno + " - " + item.tendername, item.trnderid))
		}
	});
	console.log("ready");
});



$("body").on('change', '#ems_tenderid', function(e) {
	console.log($(this).val());

	//$('#vender_ID').find('option').remove().end();
	

	let trnderid = $(this).val();
	if(trnderid !=null){
		getAsyncData('/tender/tenderId/' + trnderid, function(res) {
		console.log(res);
		console.log(res.responseJSON);
  		$('#vender_ID').find('option').remove().end();
		$('#vender_ID').append(new Option('Select a vender', ''))
		for (let item of res.responseJSON) {
			$('#vender_ID').append(new Option(item.scname, item.subCompanyID))
		}
		$("#vender_ID").prop("disabled", false);
	});
	}
	
	
	/*let IsMarksProvided = false;
	
	if(IsMarksProvided){
		alert("Your have already sumited marks for this tender & vender");
	}else{
		loadTable(trnderid, 0);
	}*/
});

// add this to 2nd
//$('#vender_ID_1').find('option').remove().end();


//var mark_sheet_table;
var isSubmited = false;
$("body").on('change', '#vender_ID', function(e) {
	console.log($(this).val());

	//$('#vender_ID').find('option').remove().end();
	

	let vender_ID = $('#vender_ID').val();
	let tender_ID = $('#ems_tenderid').val();
	console.log(vender_ID + " " + tender_ID + " " + vender_ID);
	
	if(vender_ID !="" && tender_ID!=""){
		getAsyncData("/tender/validated/tenderId/" + tender_ID + "/venderID/" + vender_ID, function(res) {
		console.log(res);
		console.log(res.responseJSON);
		if(res.responseJSON.isSubmited == true){
			isSubmited = res.responseJSON.isSubmited;
			//alert("You have already submited mark for this");
			Swal.fire(
				      'Completed Earlier!',
				      'You have already submited mark for this',
				      'success'
				    )
			$('#submit_button').hide();
		}else{
		//	alert("New marksheet");
		Swal.fire(
				      'New Marksheet!',
				      'You have a new marksheet to fill',
				      'info'
				    )
			$('#submit_button').show();
		}
		
	});
	loadTable(tender_ID, vender_ID);
	}
});



// load data to the datatable
function loadTable(tender_ID, vender_ID) {
	console.log(tender_ID+ " " + vender_ID);
	$('#marksheetTable').show();
	if (mark_sheet_table == undefined) {
		console.log("Inside");
		mark_sheet_table = $('#mark_sheet_table').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			pageLength: 50,
			ajax: {
				url: globalUrl + "/tender/marksheet/tenderID/" + tender_ID + "/venderID/" + vender_ID,
				type: 'GET',
				headers: { 'Authorization': 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
				{ "data": "index", className: "text-right"},
				{ "data": "criteria" },
				{ "data": "maximumMark" },
//				{ "data": "comment" },
				{
					"data": "tenderID",
					"'orderable": false,
					render: function(data, type, row, meta) {
						console.log(row.isSubmited);
						if(!row.isSubmited == true){
							return '<input type="number" max = "100" min="0" class="form-control" id="' + row.evID + '"  placeholder ="Given Mark" autocomplete="off" />'
						}else{
							return 'Already Sumited';
						}
					},
					"className": 'text-center'
				},
				{
					"data": "tenderID",
					"'orderable": false,
					render: function(data, type, row, meta) {
						console.log(row.isSubmited);
						if(!row.isSubmited == true){
							return '<input type="text" class="form-control" id="' + row.evID + '"  placeholder ="Comment" autocomplete="off" />';
						}else{
							return 'Already Sumited';
						}
					},
					"className": 'text-center'
				},
			],
			'order': [[0, 'desc']]
		});
	} else {
		console.log("Else me");
		
		if(!(tender_ID =="" && vender_ID=="")){
			mark_sheet_table.ajax.url(globalUrl + "/tender/marksheet/tenderID/" + tender_ID + "/venderID/" + vender_ID).load();
		}
	}
}



function getSelectetedAction() {
	return rows_selected = $('#mark_sheet_table').DataTable();
}



function getLengthOfContractTable() {
	var rows_selected = $('#mark_sheet_table').DataTable().column(0);
	//console.log(marksheetTable);
	var lengthOfContractTable = rows_selected.length;
	console.log("length of Current table " + lengthOfContractTable);
	return lengthOfContractTable;
}



$('#test_button').on('click', function(e) {
	e.preventDefault();
	console.log("Test");
	formclear();
	
});



$('#submit_button').on('click', function() {
	
	console.log("Submit click");

	var table = $('#mark_sheet_table').DataTable();
	var data = table.rows().data();

	console.log('The table has ' + data.length + ' records');
	var rows = table.rows( 0 ).data();
	var dataset =table.rows().data().toArray();
 



var marksArray = [];
let bool = 0;
for(var i=0; i<data.length; i++){
	console.log(table.cell(i,3).nodes().to$().find('input').val());
	console.log(table.rows( i ).data()[0]);
	console.log(table.rows( i ).data()[0].maximumMark);
	
	let maxMark = table.rows( i ).data()[0].maximumMark;
	let evID = table.rows( i ).data()[0].evID;
	let criteria = table.rows( i ).data()[0].criteria;
	let enteredMark = table.cell(i,3).nodes().to$().find('input').val();
	let enteredComment = table.cell(i,4).nodes().to$().find('input').val();
	console.log("maxMark "+maxMark + ", enteredMark "+ enteredMark+" "+enteredComment);
	
	
	
	if(enteredMark>maxMark){
		//alert("Cannot exceed the max mark for "+criteria+" more than "+maxMark);
		Swal.fire(
				      'Error!',
				      'Cannot exceed the max mark for '+criteria+' more than '+maxMark,
				      'error'
				    )
		table.cell(i,3).nodes().to$().find('input').val("");
		 ++bool;
	}else if(enteredMark==""){
		++bool;
		//alert("Please enter a value for "+criteria);
		Swal.fire(
				      'Error!',
				      'Please enter a value for '+criteria,
				      'error'
				    )
	}
	
	console.log("bool "+bool);

		var marksObject = {};
		marksObject["evID"] = evID;
		marksObject["maxMark"] = maxMark;
		marksObject["enteredMark"] = enteredMark;
		marksObject["enteredComment"] = enteredComment;
	
		marksArray.push(marksObject);
		
		console.log(JSON.stringify(marksArray));
	}
	
	
	if ($('#ems_tenderid').val()=='empty') {
		status+=1;
		$('#ems_tenderid').parent().parent().addClass('has-error')
	}else{
		$('#ems_tenderid').parent().parent().addClass('has-success')
	}
	
	console.log('Clicked');
	
	
	
	var markSheet = {
		"tenderID" : $('#ems_tenderid').val(),
		"vendorID" : $('#vender_ID').val(),
		"marksArray" : marksArray
	};
	
	console.log(JSON.stringify(markSheet));
	
	if(bool==0){ //true
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
			
				var responseCode =  getAsyncDataPOST("/evaluation/addmarksheet", markSheet, confirmedCallBack);
				if(responseCode == undefined){
							Swal.fire({
							  title: 'Sending...',
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
		//$("#mark_sheet_table td").remove();
});




function confirmedCallBack(responseCode){
//	 marksArray = {};
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);

		if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'Evaluation Mark Sheet has been created successfully.',
				      'success'
				    )
	   }else{
		   console.log(responseCode.responseJSON);
		   Swal.fire({
				type: 'error',
				title: 'Evaluation Mark Sheet creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
		 formclear();
}



$("body").on('click', '#view_mark_sheet', function(e){

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();

console.log(today.toLocaleDateString("en-US")); // 9/17/2016
console.log(today.toLocaleDateString("en-US", options)); // Saturday, September 17, 2016
console.log(today.toLocaleDateString("hi-IN", options));  


	$('#markSheet_Modal').modal('toggle');
	if (viewMarksTable == undefined) {
	///	console.log("Inside View Mark Sheets "+tenderID)
		
		viewMarksTable = $('#eve_marksheet').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
				url:globalUrl+"/evaluation/viewmarks/",
				type:'GET',
				headers: { 'Authorization': 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [					
				{"data": "index", className: "text-right"},
				{"data":"tenderNo"},
				{"data":"tenderName"},
//				{"data":"supplierId"},
				{"data":"supplierName"},
				{"data":"createdDateTime"},
				{"data":"isMarked",
				
				 render: function(data,type,row,meta) {
				if(row.isMarked){
					return '<span class="badge badge-success">Yes</span>'
				}else{
					return '<span class="badge badge-primary">No</span>'
				}
					}
				}
			],
		})
	}else {
		viewMarksTable.ajax.url(globalUrl+"/evaluation/viewmarks/").load();
	}
});



function formclear() {
	console.log("formclear");
	$('#ems_tenderid').val('').trigger("change");
	$('#vender_ID').val('').trigger("change");
	/*$('#maxMark').val('');
	$('#enteredMark').val('');
	$('#enteredComment').val('');*/
	//$('#ems_tenderid').find('option').remove().end();
	
}



