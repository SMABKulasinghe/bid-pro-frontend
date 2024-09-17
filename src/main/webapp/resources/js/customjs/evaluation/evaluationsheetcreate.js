var table = $('#evaddedtable').DataTable({
			aaSorting:[],
			 "pageLength": 50
	});

$("#table_ST_Div").hide();

var evaArray = [];
var criteriaSet = new Set([]);


$('#ev_addcr').click(function(){
	
	const tenderno = $('#ev_trnderdiv').find('input').val();
	const criteria = $('#ev_crnamediv').find('input').val();
	const maxmark = $('#ev_maxmarkdiv').find('input').val();
	
	const hasInSet = criteriaSet.has(criteria.toUpperCase());
	console.log(criteria.toUpperCase());
	console.log(hasInSet);
	if(hasInSet){
		Swal.fire({
			type : 'error',
			title : 'Duplicates found',
			text : 'Criteria Name cannot be duplicated !',
		});
	}else if(tenderno=="" || criteria=="" || maxmark==""){
		Swal.fire({
			type : 'error',
			title : 'Please enter the Criteria Name & Maximum Mark*',
			text : 'All inputs are mandotory !',
		});
	}else{
		
		
	const grandTotal = parseFloat(100);
		
	let currentTotal1 = table.column(1).data().reduce( (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue), parseFloat(0));
	console.log(currentTotal1);
	//let currentTotal1 = evaddedtable;
	let allowedMax = grandTotal - parseFloat(currentTotal1);
		
	const finalMaxValue = allowedMax;
	const runningtotal = parseFloat(grandTotal) - parseFloat(finalMaxValue) + parseFloat(maxmark);
	console.log(grandTotal+" "+ finalMaxValue+" "+ maxmark);
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
			criteriaSet.add(criteria.toUpperCase());
		var tableArray = [];
		tableArray.push(criteria);
		tableArray.push(maxmark);
		tableArray.push('<button class="btn bg-danger pull-center removeField" id="removeField">Remove</button>');
		
		var evaHeadingAndFieldsObject = {};
		evaHeadingAndFieldsObject["evesheet_trnderid"] = tenderno;
		evaHeadingAndFieldsObject["evcrname"] = criteria;
		evaHeadingAndFieldsObject["evmaxmark"] = maxmark;
	
		evaArray.push(evaHeadingAndFieldsObject);
		
		console.log(JSON.stringify(evaArray));
	
		table.row.add(tableArray).draw();
			
		}else{
			
		}
		
	}
		console.log(criteriaSet);
			$('#ev_crname').val("");
			$('#ev_maxmark').val("");
});



// Remove from table
$("#evaddedtable").on('click', '.removeField', function(e){
	var removeRow =  $(this).closest('tr');
	table.row(removeRow).remove().draw();
});	


$('#evaddedtable tbody').on('click', 'button', function() {
	var data = table.row($(this).parents('tr')).data();
	//alert(data[0] + "'s mark is: " + data[1]);
	console.log(criteriaSet);
	const array = Array.from(criteriaSet);
	console.log(array+" "+data[0]);
	const index = array.indexOf(data[0].toUpperCase());
	console.log(array+ " "+index);
	if (index > -1) { // only splice array when item is found
		array.splice(index, 1); // 2nd parameter means remove one item only
		console.log(array);
		//criteriaSet = null;
		criteriaSet = new Set(array);
		console.log(criteriaSet);
	}
});


$(document).ready(function() {
	evaSheetTable = undefined;
	  $('#reg_date').datepicker({
	      autoclose: true
	 });

$('#evesheet_trnderid').select2({
		placeholder: 'Select a Tender No'
	});
	
	
$('#evesheet_tenderNo').select2({
		placeholder: 'Select a Tender No & Tender Name',
		dropdownAutoWidth : true,
    	width: '100%'
	});
	loadTableData();
	loadTenderNumbers();
});


	function loadTableData(){
		getAsyncData('/evaluation/trnderid', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		$('#evesheet_trnderid').find('option').remove().end();
		$('#evesheet_trnderid').append(new Option('Select a tender no', ''))
		  for (let item of res.responseJSON) {
			  $('#evesheet_trnderid').append(new Option(item.bidno+" - "+ item.tendername, item.trnderid))
		}
	});
}
	
	
	function loadTenderNumbers(){
		getAsyncData('/evaluation/tenderid', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		$('#evesheet_tenderNo').find('option').remove().end();
		$('#evesheet_tenderNo').append(new Option('Select a tender no', ''))
		  for (let item of res.responseJSON) {
			  $('#evesheet_tenderNo').append(new Option(item.bidno+" - "+ item.tendername, item.trnderid))
		}
	});
}
	
	
	
$("body").on('change', '#evesheet_tenderNo', function(e) {
	
	const tender_ID = $('#evesheet_tenderNo').val();
	console.log(tender_ID);

	if (evaSheetTable == undefined) {
		
		evaSheetTable = $('#eve_sheetcreate').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			language: {
				emptyTable: "No Evalution Details for the selected tender",
			},
			ajax: {
				url:globalUrl+"/evaluation/viewcreatedSheets/"+tender_ID,
				type:'GET',
				headers: { 'Authorization': 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [					
				{"data": "index", className: "text-right"},
				{"data":"criteria"},
				{"data":"maximumMark"},
			],
		});
		$("#table_ST_Div").show();
	}else {
		evaSheetTable.ajax.url(globalUrl+"/evaluation/viewcreatedSheets/"+tender_ID).load();
	}
	$('#eve_sheetcreate').show()
});	


var evaArrayNew = [];
$('#submit_button').on('click', function() {
	let status = 0;
	let tableTotal = table.column(1).data().reduce( (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue), parseFloat(0));
	//console.log(tableTotal);
	
	
	let dataList0 = table.rows().data(); 
	//let dataList1 = table.rows().data(); 
	//console.log(dataList0);
	//console.log(dataList1);
	
	for(let i = 0; i<dataList0.length; i++){
		console.log(dataList0[i]);
		console.log(dataList0[i][0]);
		console.log(dataList0[i][1]);
		
		const tenderID = $('#evesheet_trnderid').val();
		
		let evaHeadingAndFieldsObject = {};
		evaHeadingAndFieldsObject["evesheet_trnderid"] = tenderID;
		evaHeadingAndFieldsObject["evcrname"] = dataList0[i][0];
		evaHeadingAndFieldsObject["evmaxmark"] = dataList0[i][1];
	
		evaArrayNew.push(evaHeadingAndFieldsObject);
		
		console.log(JSON.stringify(evaArrayNew));
	
		
	}
	
	console.log($('#evesheet_trnderid').val().length);
	
	if($('#evesheet_trnderid').val().length === 0){
			alert("Please select a tender");
			status+=1;
		$('#evesheet_trnderid').parent().parent().addClass('has-error')
	}else{
		console.log("Tender selected");
		$('#evesheet_trnderid').parent().parent().removeClass('has-error')
	}
	
	if(tableTotal === parseFloat(100)){
		
		
	}else if(tableTotal < 100){
//		alert("less than 100 in table")
		status+=1;
	}else{
//		alert("larger than 100 in table")
		status+=1;
	}
	
	if(status === 0){
		
//		alert("OK")
		
		var evaluation = {
				"trnderid" : $('#evesheet_trnderid').val(),
			//	"evaArray" : evaArray
				"evaArray" : evaArrayNew
			};
			console.log(evaArrayNew);
			console.log(JSON.stringify(evaluation));

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
					  
						var	 responseCode = getAsyncDataPOST("/evaluation/addevaluation",evaluation,confirmedCallBack)
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
	console.log("after validation");	
});


	
function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);
	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   Swal.fire(
				      'Accepted!',
				      'Evaluation sheet has been created successfully.',
				      'success'
				    )
			loadTableData();
			loadTenderNumbers();
			table.clear().draw();
	   }else if(responseCode.responseText!= null & responseCode.responseText=="Already created"){
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'info',
				title: 'Already Created',
				text: 'Skipped !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   }else{
		console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Evaluation sheet creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	}
	   formclear();
}	
	
	

$("body").on('click', '.removesection', function(e){
	console.log('ok');
	 $(this).closest('div').remove();
});	



$("body").on('click', '#view_eva_sheet', function(e){

	$('#sheetCreate_Modal').modal('toggle');

});

	

function formclear(){
	//$('#evesheet_trnderid').val('').trigger("change");
	$('#ev_crname').val('');
	$('#ev_maxmark').val('');
}	
	

	
	