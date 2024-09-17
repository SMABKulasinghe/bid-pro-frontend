/**
 * Naveen
 */

//let tbl_companies;

if (typeof selectData !== 'undefined') {
	let selectData;
//	let tbl_companies
}
//if (typeof tbl_companies !== 'undefined') {
//	console.log('in')
//	let tbl_companies;
//}

$( document ).ready(function() {
	
	console.log(typeof tbl_companies);
	
	tbl_companies = undefined;
	$("#suppliers").select2({
		  ajax: {
		    url: globalUrl+'/supplier/supplier',
		    headers : {
				'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken"),
				'Content-Type' : 'application/json'
			},
		    dataType: 'json',
		    delay: 250,
		    data: function (params) {
		      return {
		        search: params.term, // search term
		        page: params.page
		      };
		    },
		    processResults: function (data, params) {
		      // parse the results into the format expected by Select2
		      // since we are using custom formatting functions we do not need to
		      // alter the remote JSON data, except to indicate that infinite
		      // scrolling can be used
		      params.page = params.page || 1;

		      return {
		        results: data.items,
		        pagination: {
		          more: (params.page * 30) < data.total_count
		        }
		      };
		    },
		    cache: true
		  },
		  placeholder: 'Search for a company',
		  minimumInputLength: 1,
		  templateResult: function(repo) {
			  if (repo.loading) {
				    return repo.text;
				  }

				  var $container = $(
				    "<div class='select2-result-repository clearfix'>" +
				      "<div class='select2-result-repository__meta'>" +
				        "<div class='select2-result-repository__title'></div>" +
				      "</div>" +
				    "</div>"
				  );

				  $container.find(".select2-result-repository__title").text(repo.name);

				  return $container;
		},
		  templateSelection: function(repo) {
			  return repo.name || repo.text;
		}
		});

	
	  if (tbl_companies == undefined) {
		  tbl_companies = $('#tbl_companies').DataTable({
			  processing: true,
				 serverSide: true,
				 responsive: true,
			     ajax: {
			    	 url:globalUrl+"/supplier/all",
			         type: 'GET',
			         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			     },
			     columns: [
			    	 	{ "data": "companyCode" },
			            { "data": "name" },
			            { "data": "regNumber" },
			            { "data": "email" },
			            { "data": "partnershipDate",
			            	orderable: false,
			            	 render: function(data,type,row,meta) {
			            		 console.log(data);
								  return data;
							  },	
			            },
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
	} else {
		tbl_companies.ajax.url( globalUrl+"/supplier/all" ).load();
	}
	  
	  
	$('#example').DataTable({
		dom : 'Bfrtip',
		buttons : [ 'copy', 'csv', 'excel', 'pdf', 'print' ]
	});

});

$('#mdl_ViewSupplierDetails').on('hidden.bs.modal', function () {
	$('#suppliers').val(null).trigger('change');
});

$('#suppliers').on('select2:select', function (e) {
	selectData = e.params.data;
  
    
    getAsyncData('/supplier/supplier/'+selectData.id, function(res) {
    	console.log(res);
    	if (res.status == 200) {
    		
    		if (res.responseJSON.status == 'A') {
    			console.log('A');
    			$('#sendPartnership').attr("disabled", true);
    			$("#sendPartnership").text("Request Accepted");
    			$("#sendPartnership").addClass('btn-primary');
    			$("#sendPartnership").removeClass('bg-olive btn-warning btn-danger');
    			$("#partnership_1").show()
    			let date = new Date(res.responseJSON.date);
    			$("#partnership_2").text(date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate());
    			$("#partnership_2").show()
    			
    			
			}else if (res.responseJSON.status == 'R') {
				console.log('R');
				$('#sendPartnership').attr("disabled", true);
				$("#sendPartnership").text("Request Rejected");
				$("#sendPartnership").addClass('btn-danger');
    			$("#sendPartnership").removeClass('bg-olive btn-warning btn-primary');
    			$("#partnership_1").hide()
    			$("#partnership_2").hide()
			}else if (res.responseJSON.status == 'P') {
				console.log('P');
				$('#sendPartnership').attr("disabled", true);
				$("#sendPartnership").text("Pending Request");
				$("#sendPartnership").addClass('btn-warning');
    			$("#sendPartnership").removeClass('bg-olive btn-danger btn-primary');
    			$("#partnership_1").hide()
    			$("#partnership_2").hide()
			}else{
				console.log('else');
				$('#sendPartnership').attr("disabled", false);
				$("#sendPartnership").text("Partnership Request");
				$("#partnership_1").hide()
    			$("#partnership_2").hide()
    			$("#sendPartnership").removeClass('btn-primary btn-danger btn-warning');
				$("#sendPartnership").addClass('bg-olive');
			}
    		$('#mdl_com_name').text(res.responseJSON.name)
    		$('#add1').text(res.responseJSON.add1+' '+res.responseJSON.add2)
    		$('#add2').text(res.responseJSON.add3)
    		
    		$('#company_code').text(res.responseJSON.code)
    		$('#company_contact').text(res.responseJSON.contact)
    		$('#company_email').text(res.responseJSON.email)
    		 $('#companyImage').attr('src',globalUrl+'/image/company/'+selectData.id+'/logo');
    		
  		  $("#mdl_ViewSupplierDetails").modal();
		}
		
	})
    console.log(selectData.id);
});

$('#sendPartnership').on('click', function() {
	
	let data = sessionStorage.getItem("User")
	console.log(data.companyCode);
	
	 getAsyncData('/company/partner/0/supplier/'+selectData.id, function(res) {
	    	console.log(res);
	    	if (res.status == 200) {
	    		 Swal.fire(
	  				   'Partnership Accepted',
	  				   'You are joined with'+$('#mdl_ar_com_name').text(),
	  				   'success'
	  				 );
	  				 Swal.fire({
	  					  title: 'Partnership Requested',
	  					  text: 'Your request sended',
	  					  icon: 'success',
	  					  showCancelButton: false,
	  					  confirmButtonColor: '#3085d6',
	  					  cancelButtonColor: '#d33',
	  					  confirmButtonText: 'OK'
	  					}).then((result) => {
	  					  if (result.value) {
	  						  selectData = null;
	  						  $('#mdl_ViewSupplierDetails').modal('toggle');
	  					  }
	  					})
	    		
			}
			
		})
})


