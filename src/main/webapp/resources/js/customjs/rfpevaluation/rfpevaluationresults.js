$('#MarksTable').hide();

$(document).ready(function() {
	tbl_committee = undefined;
	
	  $('#reg_date').datepicker({
	      autoclose: true
	    });

	$('#ecc_tenderid').select2({
		placeholder: 'Select a Tender No'
	});

 	getAsyncData('/rfp/tenderids-for-rfp-eva-making', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		$('#ecc_tenderid').append(new Option('Select a tender no', ''))
		for (let item of res.responseJSON.data) {
			$('#ecc_tenderid').append(new Option(item.tBidNumber+" - "+ item.tenderName, item.tenderId))
		}
		
	});
	
});


$("body").on('change','#ecc_tenderid', function(e){
	console.log("hi hi")
	
	let tenderId = $(this).val()
	
	$("#MarkSheetTableBody tr").remove();
	$("#MarkSheetTableHeaderTableRow th").remove();
	
	getAsyncData('/rfp/get-rfp-evaluated-results/'+tenderId, function(res) {
		
		
		console.log(res.responseJSON.dataOfRfp);
		console.log(res.responseJSON.UserNames);
		console.log(res.responseJSON.avarage);
		
		var n = 1;
		$('#MarkSheetTableBody').empty()
		$('#MarkSheetTableHeaderTableRow').empty()
		
		$('#MarkSheetTableHeaderTableRow').append(" <td>Index</td><td>Title (Heading)</td><td>Description (Details)</td>")
		
		for (let item of res.responseJSON.columns) {
			$('#MarkSheetTableHeaderTableRow').append(" <td>"+item.column+"</td>")
			
		}
		
		for (let item of res.responseJSON.dataOfRfp) {
			$('#MarkSheetTableBody').append("<tr id='"+n+"'> <td>"+n+"</td><td>"+item.rfpHeaderName+"</td><td>"+item.rfpDetailsName+"</td>"
			
			+"</tr>")
			
			
			for(let marks of item.marksArray){
				$('#'+n).append("<td> Marks - "+marks.mark+" / Comment - "+marks.comment+"</td>")
			}
			//"+marks.evaluatorName+"/"+marks.supplierName+"
			//"+marks.evaluatorName+"/"+marks.supplierName+"-
			//+marks.evaluatorName+"/"+marks.supplierName+"-"
			/*for(let mark of item.eveMarks){
				$('#'+n).append("<td>"+mark.eveMark+"</td>")
				
			}
			$('#'+n).append("<td>"+item.avgMark+"</td>")*/
			n++
			
		}
		
		
		
		$('#MarksTable').show();
		 
	});
});


function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);
	    
	   if(responseCode.responseText == "00"){
		   Swal.fire(
				      'Accepted!',
				      'RFP Evaluation Committee Member Creation successful.',
				      'success'
				    )			
	  //tbl_committee.ajax.url(globalUrl + "/rfp/rfp-committeeview/"+selectedTendderIDfor).load();	
	   }else{
		   Swal.fire({
				type: 'error',
				title: 'Evaluation Committee Member Creation Faild',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   
	}
	   formclear();
}	



function formclear() {
	console.log("formclear");
	$('#ecc_tenderid').val('').trigger("change");
	$('#committee_member').val('').trigger("change");
	//$('#ems_tenderid').find('option').remove().end();
}