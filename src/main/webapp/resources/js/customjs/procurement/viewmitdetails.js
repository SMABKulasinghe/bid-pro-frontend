
$('#table_div_mit').hide();
var reloadtender_ID;

$(document).ready(function() {
	mit_table = undefined;

$('#viewMit_tenderid').select2({
		placeholder: 'Select a Tender No'
	});	

 getAsyncData('/evaluation/trnderiD', function(res) {
		console.log(res);
		console.log(res.responseJSON);
		
		  $('#viewMit_tenderid').append(new Option('Select a tender no', ''))
		  for (let item of res.responseJSON) {
			  $('#viewMit_tenderid').append(new Option(item.bidno+" - "+ item.tendername, item.trnderid))
		}
	});
});	


$("body").on('change', '#viewMit_tenderid', function(e) {
	let tender_ID = $('#viewMit_tenderid').val();
	console.log(tender_ID);
	loadTable(tender_ID)
});


function loadTable(tender_ID) {
	reloadtender_ID = tender_ID;
	$('#table_div_mit').show();
	if (mit_table == undefined) {
		mit_table = undefined;
		console.log("Inside");
		mit_table = $('#mit_table').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/evaluation/view-mit-details/mitID/" + tender_ID,
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		    	 		{"data": "index", className: "text-right"},
		            	{"data": "viewPicture",
							orderable: false,
		            		render: function(data,type,row,meta) {
							   return '<button type="button" class="btn btn-success" style="margin-right: 10px" onclick="viewImage(\'MITimg\', \''+row.mitID +'\' ,\''+row.tendername+'\')">View</button>'
						 	},	
						},
					
						{"data": "viewFile",
						 	 orderable: false,
		            		 render: function(data,type,row,meta) {
						 	   return '<button type="file" id="download_fileformats_btn" class="btn btn-success" onclick="download(\''+row.uploadFile+'\')">View</button>'
							},	

						},
					
		            	{"data": "description"},
		        	 ],

				'select': {
			             'style': 'multi',
			             'selector': 'td:first-child'
			          },
			          'order': [[3, 'desc']]  
		});
	} else {
		console.log("Else me");
		if (!(tender_ID == "")) {
			mit_table.ajax.url(globalUrl+"/evaluation/view-mit-details/mitID/" + tender_ID).load();
		}
	}
}


function viewImage(buttonID, mitID, name){
	console.log(buttonID+" "+ mitID+" "+name);
	
	 if(buttonID=="MITimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/viewmitpicture/'+mitID+'/mit');
		 $('#mdl_com_name').text("View Picture");
		 $('#mdl_ii_sup_no').text(name);
	}
	$('#mdl_view_Picture').modal('toggle');
}


//PDF Download
function download(fileName){
	console.log(fileName);
	let filePath = fileName;
	const myArray = filePath.split("/");
	var fileId = myArray[5]
	var fileName5 = myArray[6]
	const fileNameSplit = fileName5.split(".");
	var fileNameSplitForUrl = fileNameSplit[0]
	var fileNameForUrl = fileId +"/"+fileNameSplitForUrl;
	console.log(fileId);
	console.log(fileNameSplitForUrl);
	console.log(fileNameForUrl);
	//let urlHeader = "/tender/download-bidded-tender-files/"+fileNameForUrl;
	//console.log(urlHeader);
	
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink)
	window.open(globlelink+"/evaluation/download-MITdetails-view-files/"+fileNameForUrl);
}





