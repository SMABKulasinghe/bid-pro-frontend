/**
 * Naveen 
 */

$(document).ready(function() {
	tbl_company_auth = undefined;
	if (tbl_company_auth == undefined) {
		tbl_company_auth = $('#tbl_company_auth').DataTable({
			 processing: true,
			 serverSide: true,
			 responsive: true,
		     ajax: {
		    	 url:globalUrl+"/company/auth",
		         type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		    	 	{ "data": "code" },
		            { "data": "name" },
		            { "data": "regNo"},
		            { "data": "email" },
		            { "data": "contact"},
		            { "data": "auth",
		            	 orderable: false,
		            	 render: function(data,type,row,meta) {
							  return '<button type="button" class="btn btn-primary" style="margin-right: 10px" onclick="Approve('+data+')">Authorize</button>'+
							  '<button type="button" class="btn btn-danger" onclick="Reject('+data+')">Reject</button>'
						  },	
		            }
		        ],
		        dom:"<'row'<'col-sm-12'B>>" +  
		        	"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
		        "<'row'<'col-sm-12'tr>>" +
		        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
              buttons: [
                  { extend: 'copy'},
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
		tbl_company_auth.ajax.url(globalUrl+"/supplier/auth" ).load();
	}
});

function Approve(id) {
	Swal.fire({
		  title: 'Are you sure?',
		  text: "You won't be able to revert this!",
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Yes, Approve!'
			}).then((result) => {
			  if (result.value) {
				  
				  getAsyncData("/company/"+id+"/auth/approve", function(res) {
					  tbl_company_auth.ajax.url(globalUrl+"/supplier/auth" ).load();
					  Swal.fire(
						      'Approved!',
						      'New Company has been created.',
						      'success'
						    )
					})
			  
			  }
			})
}

function Reject(id) {
	Swal.fire({
		  title: 'Are you sure?',
		  text: "You won't be able to revert this!",
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Yes, Reject!'
			}).then((result) => {
			  if (result.value) {
				  
				  getAsyncData("/company/"+id+"/auth/reject", function(res) {
					  tbl_company_auth.ajax.url(globalUrl+"/supplier/auth" ).load();
					  Swal.fire(
						      'Removed!',
						      'New Company has been Removed.',
						      'success'
						    )
					})
			  
			  }
			})
}