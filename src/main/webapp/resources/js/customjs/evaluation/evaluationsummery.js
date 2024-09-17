$('#evaluationMarkSummery').hide()

$(document).ready(function() {
	evaluationSummeryTable = undefined;;
	
	$('#tenderIddd').select2({
		placeholder: 'Select a Tender No'
	});
	
	getAsyncData('/evaluation/get-tender-ids', function(res) {
	    console.log(res);
	    console.log(res.responseJSON.data);
	    
	      $('#tenderIddd').append(new Option('Select a tender no', ''))
	      for (let tender of res.responseJSON.data) {
	        
				$('#tenderIddd').append(new Option(tender.tBidNumber+"-"+tender.tenderName,tender.tenderId))
	    }
			
	});
	

});	





	

$("body").on('change', '#tenderIddd', function(e){
	
	
	//loadMyTable($("#tenderIddd").val());
	
	var $tenderId= $(this).val();
	
	
	if(evaluationSummeryTable == undefined){
		console.log("5");
		evaluationSummeryTable = $('#evaluationMarkSummery').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			
			
			ajax: {
			   	url:globalUrl+"/evaluation/get-evaluation-all-marks/"+$tenderId,
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 
			    	 {"data":"venderName",},
					 {"data":"mark"},
					 {"data":"place", "orderable": false},
					
					
			     ],
			order: [[1, 'asc']],
			//pageLength : 5,
			
    		
		})
		
		}else{
			console.log("Else part");
			
			evaluationSummeryTable.ajax.url(globalUrl+"/evaluation/get-evaluation-all-marks/"+$tenderId).load();
			
		}
		$('#evaluationMarkSummery').show()
});



