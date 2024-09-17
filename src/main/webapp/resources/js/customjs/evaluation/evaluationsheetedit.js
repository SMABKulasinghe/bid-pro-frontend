
$('#table_div_edit').hide();
var reloadtender_ID;

$(document).ready(function() {
	edit_table = undefined;
	EditSheetTable = undefined;

	$('#reg_date').datepicker({
		autoclose: true
	});

	$('#edit_trnderid').select2({
		placeholder: 'Select a Tender No & Tender Name'
	});

	getAsyncData('/evaluation/trnderId', function(res) {
		console.log(res);
		console.log(res.responseJSON);

		$('#edit_trnderid').append(new Option('Select a tender no', ''))
		for (let item of res.responseJSON) {
			$('#edit_trnderid').append(new Option(item.bidno + " - " + item.tendername, item.trnderid))
		}
	});
});



$("body").on('change', '#edit_trnderid', function(e) {
	let tender_ID = $('#edit_trnderid').val();
	console.log(tender_ID);
	loadTable(tender_ID)
});



var currentrnTotal = 0;
function loadTable(tender_ID) {
	reloadtender_ID = tender_ID;
	$('#table_div_edit').show();
	if (edit_table == undefined) {
		edit_table = undefined;
		console.log("Inside");
		edit_table = $('#edit_table').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			pageLength: 50,
			ajax: {
				url: globalUrl + "/evaluation/editsheet/tendrID/" + tender_ID,
				type: 'GET',
				headers: { 'Authorization': 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
				{ "data": "index", className: "text-right" },
				{ "data": "criteria" },
				{ "data": "maxMark" },
				{ "data": "evMarkSheetID",
					orderable: false,
					render: function(data, type, row, meta) {
						return '<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="editSheet(\'' + data + '\',\'' + row.criteria + '\', \'' + row.maxMark + '\',\'' + row.index + '\',\'' + row.tenderName + '\', \'' + row.tenderid + '\',)">Edit</button>'
					}, 
				},
			],
			'select': {
				'style': 'multi',
				'selector': 'td:first-child'
			},
			'order': [[0, 'desc']],
			"drawCallback": function(settings) {
		//		var sum = edit_table.column(2).data().reduce(function(a, b) { return a + b; });
		var sum1 = edit_table.column(1).data().reduce( (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue), parseFloat(0));
				// Output the data for the visible rows to the browser's console
				console.log(sum1);
				$('#running_currentTotal').text('Total Mark : ' + parseFloat(sum1));
			}
		});
	} else {
		console.log("Else me");
		if (!(tender_ID == "")) {
			edit_table.ajax.url(globalUrl+"/evaluation/editsheet/tendrID/"+ tender_ID).load();
		}
	}
}


var tenderName;
var selectedMarkSheetID, criteriaNew, maxMarkNew, maxMarkOut, finalMaxValue, selectedTID;
function editSheet(evMarkSheetID, criteria, maxMark, index, d1, evTenderID) {
	console.log(index + " " + "evMarkSheetID " + evMarkSheetID + " " + criteria + " " + maxMark);
	$('#edit_Modal').modal('show');
	$("#mdl_ii_tender_Name").text(d1);
	$('#eva_criteria_name').text(criteria);
	$('#eva_maxmark').text(maxMark);
	$('#ev_hash').text(index);
	$('#ev_hash_o').text(index);
	selectedMarkSheetID = evMarkSheetID;
	maxMarkOut = maxMark;
	tenderName = d1;
	selectedTID = evTenderID;

	let currentTotal1 = edit_table.column(2).data().reduce(function(a, b) { return a + b; });
	$('#currentTotal').text('Current Total : ' + currentTotal1);
	const grandTotal = parseFloat(100);
	const remainder = parseFloat(grandTotal) - parseFloat(currentTotal1);
	const allowedMaxValue = parseFloat(remainder) + parseFloat(maxMark);
	console.log(allowedMaxValue);
	finalMaxValue = allowedMaxValue;
	if (parseFloat(currentTotal1) <= parseFloat(grandTotal)) {
		//		alert("less than or equal to 100");
		$('#allowedValue').text('Allowed Value : ' + parseFloat(allowedMaxValue));
	} else {
		$('#allowedValue').text('Allowed Value : ' + parseFloat(grandTotal) - parseFloat(allowedMaxValue));
	}
}



$('#confirm_button').on('click', function() {
	console.log(selectedMarkSheetID);

	const grandTotal = parseFloat(100);

	var currentTotal = edit_table.column(2).data().reduce(function(a, b) { return a + b; });
	criteriaNew = $('#ecc_e_criteria_name').val();
	maxMarkNew = $('#ecc_e_max_mark').val();

	const runningtotal = parseFloat(grandTotal) - parseFloat(finalMaxValue) + parseFloat(maxMarkNew);
//	alert('Running Total: ' + runningtotal);

	var totalApproved = false;
	if (runningtotal <= grandTotal) {
		totalApproved = true;
	} else {
		Swal.fire(
			'Invalid Total!',
			'Total Cannot be Larger Than 100.',
			'error'
		)
	}

	var edit = {
		"criteria": criteriaNew,
		"maxMark": maxMarkNew,
		"selectedMarkSheetID": selectedMarkSheetID,
	};
	console.log(JSON.stringify(edit));

	if (totalApproved) {
		getAsyncDataPOST("/evaluation/" + selectedMarkSheetID + "/editsheet", edit, function(res) {
			console.log(res);
			console.log(res.responseJSON);

			if (res.responseJSON.code == "00") {
				Swal.fire(
					'Accepted!',
					'Update success.',
					'success'
				)
				$('#ecc_e_criteria_name').val("");
				$('#ecc_e_max_mark').val("");
				$('#edit_Modal').modal("hide");
				edit_table.ajax.url(globalUrl + "/evaluation/editsheet/tendrID/" + reloadtender_ID).load();
			} else {
				Swal.fire(
					'Failed!',
					'Update failed.',
					'error'
				)
			}
		});
	} else {
		console.log("Total larger than 100");
	}
});



$("body").on('click', '#add_new_criteria_btn', function(e) {
//	console.log(selectedTenderID);
 //if total is 100 don't allow to add  a new critera;


/*	const grandTotal2 = parseFloat(100);
	var newCurrentTotal = edit_table.column(2).data().reduce(function(a, b) { return a + b; });

	const runningtotal2 = parseFloat(grandTotal2) - parseFloat(finalMaxValue) + parseFloat(maxMarkNew);
	criteriaNew = $('#new_criteria_name').val();
	maxMarkNew = $('#e_max_mark').val();

	var totalApproved1 = false;
	if (runningtotal2 <= grandTotal2) {
		totalApproved1 = true;
	} else {
		Swal.fire(
			'Invalid Total!',
			'Total is 100 do not allow to add a New Critera.',
			'error'
		)
	}	*/
	
//	const selectedTID = $('#edit_trnderid').val();
//	alert(selectedTID);

	$('#newCriteria_Modal').modal('toggle');

	let currentTotal1 = edit_table.column(2).data().reduce(function(a, b) { return a + b; });
	$('#newCurrentTotal').text('Current Total : ' + currentTotal1);
	const grandTotal = parseFloat(100);
	/*const remainder = parseFloat(grandTotal) - parseFloat(currentTotal1);
	const allowedMaxValue = parseFloat(remainder) + parseFloat(maxMarkOut);*/
	let allowedMax = grandTotal - parseFloat(currentTotal1);
	$('#newAllowedValue').text('Allowed Value : ' + parseFloat(allowedMax));
});



var criteriaSet = new Set([]);

$('#insert_button').on('click', function() {
//	console.log(selectedTID);
		const criteria = $('#ev_crdiv1').find('input').val();
		const maxmark = $('#ev_venderdiv1').find('input').val();

	if (criteria == "" || maxmark == "") {
		Swal.fire({
			type: 'error',
			title: 'Please enter the Criteria Name & Maximum Mark*',
			text: 'All inputs are mandotory !',
		});
	} else {
		let myArray = edit_table.column(1).data().toArray();
		console.log(myArray);
		myArray.map(adToSet);

		function adToSet(item) {
			criteriaSet.add(item.toUpperCase());
		}
		console.log(criteriaSet);

		const hasInSet = criteriaSet.has(criteria.toUpperCase());
		console.log(criteria.toUpperCase());
		console.log(hasInSet);

		if (hasInSet) {
//			alert("test");
			Swal.fire({
				type: 'error',
				title: 'Duplicates found',
				text: 'Criteria Name cannot be duplicated !',
			});
		} else {
			
			// allow to add
			
			
	const grandTotal = parseFloat(100);
	var newCurrentTotal = edit_table.column(2).data().reduce(function(a, b) { return a + b; });

	criteriaNew = $('#new_criteria_name').val();
	maxMarkNew = $('#e_max_mark').val();
		
	let currentTotal1 = edit_table.column(2).data().reduce(function(a, b) { return a + b; });
	let allowedMax = grandTotal - parseFloat(currentTotal1);
		
	const finalMaxValue = allowedMax;
	const runningtotal = parseFloat(grandTotal) - parseFloat(finalMaxValue) + parseFloat(maxMarkNew);
	console.log(grandTotal+" "+ finalMaxValue+" "+ maxMarkNew);
//	alert('Running Total: ' + runningtotal+ "grand total "+ grandTotal);
	var totalApproved = false;
	if (runningtotal <= grandTotal) {
		totalApproved = true;
	} else {
		Swal.fire(
			'Invalid Total!',
			'Total Cannot be Larger Than 100.',
			'error'
		)
	}	
	
	if(totalApproved){
		const selectedTID = $('#edit_trnderid').val();
//	alert(selectedTID);

	
	var addcriteria = {
		"newCriteria": criteriaNew,
		"newMaxMark": maxMarkNew,
		"selectedMarkSheetID": selectedMarkSheetID,
		"selectedTID" : $('#edit_trnderid').val(),
	};

	console.log(JSON.stringify(addcriteria));	
	
		getAsyncDataPOST("/evaluation/" + selectedTID + "/newcriteria", addcriteria, function(res) {
			console.log(res);
			console.log(res.responseJSON);

			if (res.responseJSON.code == "00") {
				Swal.fire(
					'Accepted!',
					'Add Criteria & Maximum Mark (%) success.',
					'success'
				)
				$('#new_criteria_name').val("");
				$('#e_max_mark').val("");
				$('#newCriteria_Modal').modal("hide");
				edit_table.ajax.url(globalUrl + "/evaluation/editsheet/tendrID/" + $('#edit_trnderid').val()).load();
			} else if(res.responseJSON.code == "01"){
				Swal.fire(
					'Already Exists!',
					'This Criteria already exists. Please use a different name',
					'info'
				)
			} else{
				Swal.fire(
					'Failed!',
					'Add Criteria & Maximum Mark (%) failed.',
					'error'
				)
			}							
		console.log("Total larger than 100");	
	})
		
	}		
		}
	}
	
});











