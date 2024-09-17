
$('#userTableDiv').hide()
$(document).ready(function() {
	tenderSbumissionsViewTable = undefined;
	cappexTable = undefined;
	oppexTable = undefined;
	$('#tenderId').select2({
    placeholder: 'Select a Tender'
	});

	getAsyncData('/tender/get-tender-ids-for-tender-participators', function(res) {
	    console.log(res);
	    console.log(res.responseJSON.data);
	    
	      $('#tenderId').append(new Option('Select a tender no', ''))
	      for (let tender of res.responseJSON.data) {
	         // $('#tenderId').append(new Option(tender.tenderNo+" - "+ item.tendername, item.trnderid))
				$('#tenderId').append(new Option(tender.tBidNumber+"-"+tender.tenderName,tender.tenderId))
	    }
	});
	
	
});

$("#searchUserIDButton").click(function(){
	
	
	$("#btnMore").remove();
	var $tenderId= $('#getTenderIdVal').find('select').val();
	if($('#getTenderIdVal').find('select').val() == null){
		
		Swal.fire({
			type : 'error',
			title : 'Please use a different Tender number*',
			text : 'Tender number is already taken !',
			
		});
		
	}else{
			getAsyncData("/tender/get-tender-details-for-view-tender-participators/"+$('#getTenderIdVal').find('select').val(), function(res) {
			console.log(res);
			console.log(res.responseJSON.tendername);
			
				$('#tenderName').val(res.responseJSON.TenderName);
				$('#bidNo').val(res.responseJSON.BidNo);
				$('#createdBy').val(res.responseJSON.CreatedBy);
				$('#categories').val(res.responseJSON.Categories);
				$('#closing_date').val(res.responseJSON.ClosingDate +" "+ res.responseJSON.ClosingTime);
				$('#comment').val(res.responseJSON.Description);
				
				$('#cordinate_name').val(res.responseJSON.CordinatorName1);
				$('#cordinate_destination').val(res.responseJSON.CordinatorDesignation1);
				$('#cordinate_email').val(res.responseJSON.CordinatorEmail1);
				$('#cordinate_phon').val(res.responseJSON.CordinatorTP1);
				
				$('#cordinate2_name').val(res.responseJSON.CordinatorName2);
				$('#cordinate2_destination').val(res.responseJSON.CordinatorDesignation2);
				$('#cordinate2_email').val(res.responseJSON.CordinatorEmail2);
				$('#cordinate2_phon').val(res.responseJSON.CordinatorTP2);
				
				$("#rfpDetailsDiv").append('<button type="button" id="btnMore"  class="btn btn-success" style="margin-right: 10px" onclick="getMore('+res.responseJSON.RfpID+')">View</button>');
				
			$('#userTableDiv').show()
			
			
			 
			
		});
	}
	
	
	
	
});

//var tenderSbumissionsViewTable;

$("#searchUserIDButton").click(function(){
	
	if($('#getTenderIdVal').find('select').val() == ""){
		Swal.fire({
			type : 'error',
			title : 'Please select Tender number*',
			text : 'You have not selected the tender number !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
	}else{
		
		if(tenderSbumissionsViewTable == undefined){
		tenderSbumissionsViewTable = $('#tenderSubmissionsTable').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
			   	url:globalUrl+"/tender/get-tender-details-for-view-table-for-participators/"+$('#getTenderIdVal').find('select').val(),
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 {"data":"Index"},
			    	 {"data":"UserName"},
					 {"data":"TpNumber"},
					 {"data":"Email"},
					 /*{"data":"status",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.status == 5){
								return '<span class="badge badge-success">Participate</span>'
							}else if(row.status == 6){
								return '<span class="badge badge-warning">Not Participating</span>'
							}else if(row.status == 7){
								return '<span class="badge badge-secondary">Not Intersted</span>'
							}else if(row.status == 8){
								return '<span class="badge badge-primary">Tender Submitted</span>'
							}
							  
							  
						  },	
					}*/
				
			     ],
			order: [[1, 'asc']],
		})
		
		}else{
			tenderSbumissionsViewTable.ajax.url(globalUrl+"/tender/get-tender-details-for-view-table-for-participators/"+$('#getTenderIdVal').find('select').val()).load();
		}
	}
	//$('#userTableDiv').show()
	
});




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
				//console.log("Approve response 111- "+res);
				console.table(res.responseJSON.data);
		
	});
	
	$('#mdl_issue_invoice').modal('toggle');
}



