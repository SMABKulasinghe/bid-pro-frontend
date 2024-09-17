

$(document).ready(function() {
	
	submitTenderTable = undefined;
	console.log("Ready");
	submitTenderDetailsTable();
	
});

function submitTenderDetailsTable(){
	if(submitTenderTable == undefined){
		submitTenderTable = $('#tenderSubmission').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
			   	url:globalUrl+"/tender/get-tender-details-for-tender-details-view",
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 {"data":"bidNo"},
			    	 {"data":"closingDate"},
					 {"data":"closingTime"},
					 {"data":"designation"},
					
			    	 /*{"data":"rfpDetails"},*/
					 {"data":"tenderRespon",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.tenderEligibility == 5){
								return '<span class="badge badge-warning">You confirmed your participation</span>'
							}else if(row.tenderEligibility == 8){
								return '<span class="badge badge-success">Tender submitted</span>'
							}else if(row.tenderEligibility == 15){
								return '<span class="badge badge-danger">Tender Closed</span>'
							}else if(row.tenderEligibility == 10){
								return '<span class="badge badge-primary">Qulified</span>'
							}else if(row.tenderEligibility == 9){
								return '<span class="badge badge-dark">Desqulified</span>'
							}
							else{
								return '<span class="badge badge-primary">Disqualified Vender</span>'
							}
							  
						  },	
					},
			   
			     ],
			/*language:{
				emptyTable: "You have no other tenders to submit"
			},*/
			
			
		});
		console.log("Programe");
	}else{
		submitTenderTable.ajax.url(globalUrl+"/tender/get-tender-details").load();
	}
}

