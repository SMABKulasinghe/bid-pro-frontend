

$( document ).ready(function() {
	
	$("#userTableDiv").hide();
	
	tbl_tender_details = undefined;
	
	if (tbl_tender_details == undefined) {
		console.log('in Table');
		tbl_tender_details = $('#tbl_tender_details').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/tender/all",
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		    	 	{ "data": "tenderno" },
		            { "data": "tenderdesc" },
		            { "data": "open"},
		            { "data": "close" },
		            { "data": "view",
		            	 render: function(data,type,row,meta) {
							  return '<button type="submit" id="searchUserIDButton" class="btn btn-info ">Select Vender</button>';
						  },
		            },
		            /*{ "data": "auth",
		            	 orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="Approve('+data+')">Authorize</button>'+
							  '<button type="button" class="btn btn-danger" onclick="Reject('+data+')">Reject</button>'
						  },	
		            }*/
		        ],
		        dom:"<'row'<'col-sm-12'B>>" +  
		        	"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
		        "<'row'<'col-sm-12'tr>>" +
		        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
              buttons: [
                  {extend: 'copy'},
                  {extend: 'csv'},
                  {extend: 'excel', title: ''},
                  {extend: 'pdf', title: ''},
                  {extend: 'print',
                   customize: function (win){
                          $(win.document.body).addClass('white-bg');
                          $(win.document.body).css('font-size', '10px');

                          $(win.document.body).find('table')
                                  .addClass('compact')
                                  .css('font-size', 'inherit');
                  }
                  }
              ]
	  
	});
	}else{
		console.log('else in Table');
		tbl_tender_details.ajax.url(globalUrl+"/tender/all" ).load();
	}
});

$("body").on('click', '#searchUserIDButton', function(e){
	
	$("#userTableDiv").show();
	
});

