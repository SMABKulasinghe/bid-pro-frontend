//$('#marktableDiv').hide();
$('#MarksTable').hide();

$(document).ready(function() {
	
	console.log("ready")
	console.log($("body #trnderid_1"))
	
	$("#evaluationMainTable").remove();
	$('#vender_ID').val("");
	let tableText ="";
	$("#marktableDiv").append('');
	
 getAsyncData('/tender/trnderid', function(res) {
		//console.log(res);
		//console.log(res.responseJSON);
		$('#trnderid_1').find('option').remove().end();
		  $('#trnderid_1').append(new Option('Select a tender no', ''))
		  for (let item of res.responseJSON) {
			  $('#trnderid_1').append(new Option(item.bidno+" - "+ item.tendername, item.trnderid))
		}
		
		$('#vender_ID').empty();
		//$('#vender_ID').val("");
		console.log("111")
	});
	

//let tableDiv = <div class='col-md-12' id="marktableDiv">

 tableText = "<table id='evaluationMainTable' class='table table-bordered table-hover display nowrap margin-top-10 table-responsive dataTable no-footer dt-checkboxes-select'>"+
					"<thead id='MarkSheetTableHeader'>"+
						"<tr id='MarkSheetTableHeaderTableRow'>"+
						"</tr>"+
					"</thead>"+
					"<tbody id='MarkSheetTableBody'>"+
					"</tbody>"+
					"</table>";
					
	$("#marktableDiv").append(tableText);
$('#vender_ID_1').find('option').remove().end();

$('#vender_ID_1').select2({
		placeholder: 'Select a Vender'
	});

});	



$("body").on('change', '#trnderid_1', function(e){
	console.log("blaaa");
	console.log($(this).val());
	
	
	
	let trnderid = $(this).val();
	//$('#vender_ID').val(null).trigger('change');
	
	//$('#vender_ID').append(new Option(item.scname, item.subCompanyID))
	
 	getAsyncData('/tender/tenderId/'+trnderid, function(res) {
		console.log(res);
		console.log(res.responseJSON);
		$('#vender_ID_1').find('option').remove().end();
		  $('#vender_ID_1').append(new Option('Select a vender', ''))
		  for (let item of res.responseJSON) {
			  $('#vender_ID_1').append(new Option(item.scname, item.subCompanyID))
		}
		$( "#vender_ID_1" ).prop( "disabled", false );
		//$('#vender_ID').val("");
	});
	
});

$("body").on('change','#vender_ID_1', function(e){
	console.log("test")
})

$("body").on('change','#vender_ID_1', function(e){
	console.log("hi hi")
	let venderId = $(this).val();
	let tenderId = $('#trnderid_1').val();
	
	$("#MarkSheetTableBody tr").remove();
	$("#MarkSheetTableHeaderTableRow th").remove();
	
	getAsyncData('/evaluation/get-evaluatioed-marks/'+tenderId+'/'+venderId, function(res) {
		
		
		console.log(res.responseJSON.dataMarkSheet);
		console.log(res.responseJSON.UserNames);
		console.log(res.responseJSON.avarage);
		
		var n = 1;
		$('#MarkSheetTableBody').empty()
		$('#MarkSheetTableHeaderTableRow').empty()
		
		for (let item of res.responseJSON.dataMarkSheet) {
			$('#MarkSheetTableBody').append("<tr id='"+n+"'> <td>"+n+"</td><td>"+item.criteriaName+"</td><td>"+item.maxMark+"</td></tr>")
			
			for(let mark of item.eveMarks){
				$('#'+n).append("<td>"+mark.eveMark+"</td>")
				
			}
			$('#'+n).append("<td>"+item.avgMark+"</td>")
			n++
			
		}
		
		$('#MarkSheetTableBody').append("<tr id='avgSum'> </tr>")
		
		for(var i=0;i<res.responseJSON.UserNames.length;i++){
			$('#avgSum').append("<td> </td>")
		}
		$('#avgSum').append("<td> </td>")
		$('#avgSum').append("<td> </td>")
		
		$('#avgSum').append("<td>Total</td><td>"+res.responseJSON.avgSum+"</td>")
		
		
		$('#MarkSheetTableHeaderTableRow').append("<th >No</th>")
		$('#MarkSheetTableHeaderTableRow').append("<th >Criteria</th>")
		$('#MarkSheetTableHeaderTableRow').append("<th >Max Marks (%)</th>")
		for(var i=0;i<res.responseJSON.UserNames.length;i++){
		      console.log(res.responseJSON.UserNames[i]);
			$('#MarkSheetTableHeaderTableRow').append("<th >"+res.responseJSON.UserNames[i]+"</th>")
		}
		$('#MarkSheetTableHeaderTableRow').append("<th >"+res.responseJSON.avarage+"</th>")
		
		$('#MarksTable').show();
		//x.remove(x.selectedIndex);  
	});
});




