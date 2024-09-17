$('#authEvalusheetTable').hide();
$('#authEvaCommitteeTable').hide();


$(document).ready(function() {
	evaAuthtable = undefined;
	evaCommitteetable = undefined;

$('#euth_trnderid').select2({
		placeholder: 'Select a Tender No'
	});

 getAsyncData('/evaluation/tenderID', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		  $('#euth_trnderid').append(new Option('Select a tender no', ''))
		  for (let item of res.responseJSON) {
			  $('#euth_trnderid').append(new Option(item.bidno+" - "+ item.tendername, item.trnderid))
		}
	});
});


var selectedTendderIDfor;
$("body").on('change', '#euth_trnderid', function(e) {
	
	let tender_ID = $('#euth_trnderid').val();
	console.log(tender_ID);
	loadTable(tender_ID)
	loadTable2(tender_ID)
	selectedTendderIDfor = tender_ID;
});


function loadTable(tender_ID) {
	$('#authEvalusheetTable').show();
	if (evaAuthtable == undefined) {
		evaAuthtable = undefined;
		console.log("Inside");
	evaAuthtable = $('#evaAuthtable').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/evaluation/authorizeevaluation/tendrID/"+tender_ID,
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		    	 	{ "data": "index", className: "text-right"},
		            { "data": "criteriaName"},
					{ "data": "maximumMark"} 
		        ],
				'select': {
			             'style': 'multi',
			             'selector': 'td:first-child'
			          },
			          'order': [[0, 'desc']]
	});
	}else{
		console.log("Else me");
		console.log("tender_ID "+tender_ID);
		
		if(!(tender_ID =="")){
			evaAuthtable.ajax.url(globalUrl + "/evaluation/authorizeevaluation/tendrID/"+tender_ID).load();
		}
	}
}


function loadTable2(tender_ID) {
	$('#authEvaCommitteeTable').show();
	if (evaCommitteetable == undefined) {
		evaCommitteetable = undefined;
		console.log("Inside");
	evaCommitteetable = $('#evaCommitteetable').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/evaluation/authorizeevcommittee/tendrID/"+tender_ID,
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		    	 	{ "data": "index", className: "text-right"},
		            { "data": "tenderName"},
					{ "data": "committeeMember"} 
		        ],
				'select': {
			             'style': 'multi',
			             'selector': 'td:first-child'
			          },
			          'order': [[0, 'desc']]
	});
	}else{
		console.log("Else me");
		console.log("tender_ID "+tender_ID);
		
		if(!(tender_ID =="")){
			evaCommitteetable.ajax.url(globalUrl + "/evaluation/authorizeevcommittee/tendrID/"+tender_ID).load();
		}
	}
}

































