/**
 * 
 */
console.log("AuthuserRole");
$("#userRoleDiv").hide();

if (typeof selectData !== 'undefined') {
	let selectData1;
	}

if (typeof selectData !== 'undefined') {
	let selectData;
//	let tbl_companies
}

var userRoleTable;

var userRoleArray = {};

$(document).ready(function(){
	userRoleTable = undefined;
	console.log("rr");
	
function getSelecteduseroleids(){
		// console.log(getSelecteduseroleids$('#exampletable').DataTable().column(0).checkboxes.selected());
		return rows_selected = $('#roleTable').DataTable().column(0).checkboxes.selected();
	}
	
	function getSelectetedAction(){
		// console.log($('#exampletable').DataTable().column(0).checkboxes.selected().data());
		return rows_selected = $('#roleTable').DataTable().column(0).checkboxes.selected();
	}
	
	function getSelecteduseroleid(){
		var rows_selected = $('#roleTable').DataTable().column(0).checkboxes.selected();
		
		 var useroleid = rows_selected.join(",");	
		 console.log(useroleid);
		 return useroleid;
	}
	
	
	function getLengthOfuserRoleTable(){
		 var rows_selected = $('#roleTable').DataTable().column(0).checkboxes.selected();
		 // console.log(contractTable);
		 var lengthOfuserRoleTable = rows_selected.length;
		 console.log("length of Current table "+lengthOfuserRoleTable);
		 return lengthOfuserRoleTable;
	}
		
	
	$('#AuthorizeButton').on('click', function() {
		getSelectetedAction();
		
		var leng = getLengthOfuserRoleTable()
		if(leng!==0 && leng == 1){
			console.log("Len "+ leng+" Selection "+getSelecteduseroleid());
			var userRoleIDArray = getSelecteduseroleid();
			
			var statusofRoletemp = $('#'+userRoleIDArray).parent().parent().children().eq(8).children().eq(0).val();
			var statusReason = $('#'+userRoleIDArray).parent().parent().children().eq(7).children().eq(0).val();
			var roletempNoforSA = $('#'+userRoleIDArray).parent().parent().children().eq(2).text();
    		
			console.log(statusReason);
			if(statusReason.length == 0){
				console.log("Empty Reason at "+userRoleIDArray);
				Swal.fire(
					      'Please provide a reason to authorize!',
					      'User Role ID: '+roletempNoforSA,
					      'warning'
					    );
			}
			
			roleWithStatus = {
					"roleid": userRoleIDArray,
					"statusofRoletemp": statusofRoletemp,
					"statusReason": statusReason,
					"status" : "3"
				};
		
			console.log(roleWithStatus);
		}else if(leng > 1){	
			var userRoleIDArray = getSelecteduseroleid();
			console.log(userRoleIDArray);
			var roleWithStatusArray=[];
			for(var i=0; i<userRoleIDArray.length; i++){
				console.log($('#'+userRoleIDArray[i]).parent().parent().children().eq(8).children().eq(0).val());
				var statusofRoletemp = $('#'+userRoleIDArray[i]).parent().parent().children().eq(8).children().eq(0).val();
				var statusReason = $('#'+userRoleIDArray[i]).parent().parent().children().eq(7).children().eq(0).val();
				
				roleWithStatus = {
						"roleid": userRoleIDArray[i],
						"statusofRoletemp": statusofRoletemp,
						"statusReason": statusReason,
						"status" : "3"
					};
				roleWithStatusArray.push(roleWithStatus);
				// console.log(contractWithStatus);
			}
			console.log(roleWithStatusArray);
			for (let item of roleWithStatusArray) {
				// console.log($('#'+item.contractid).parent().parent().children().eq(8).children().eq(0).val());
			}
			
		}else{
			Swal.fire(
				      'Please select a contract!',
				      'And try again.',
				      'warning'
				    );
		}
		
		var rows_selected = userRoleTable.column(0).checkboxes.selected();
		$.each(rows_selected, function(index, rowId){
	         // Create a hidden element
			var statusofRoletemp = $('#'+rowId).parent().parent().children().eq(8).children().eq(0).val();
			var statusReason = $('#'+rowId).parent().parent().children().eq(7).children().eq(0).val();
			
	         
			roleWithStatus = {
	 				"roleid":rowId,
	 				"statusofRoletemp": statusofRoletemp,
	 				"statusReason": statusReason, 
	 				"status" : "3"
	 			};
	         
	         console.log(roleWithStatus);
	         console.log(index+ " "+ rowId);
	         
	      });
		
		console.log(userRoleArray);
		var count = Object.keys(userRoleArray).length;
		console.log(count);
		
		if(count>=1){
			Swal.fire({
				  title: 'Are you sure?',
				  text: "Do you want to proceed?",
				  type: 'warning',
				  showCancelButton: true,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'Yes, process it!'
				}).then((result) => {
				  if (result.value) {
					  console.log("TT");
					  
					var responseCode =  getAsyncDataPOST("/userroles/approve", userRoleArray, confirmedCallBack)	

	
						$(this).prop("disabled",true);
			
				  }
				});
			
			
			
		}else{
			console.log("Empty");
			
		}
		
		 
	});
	
	
	$('#roleTable tbody').on( 'click', 'tr', function () {
	    $(this).toggleClass('selected');
	} ); 
	
	
	$("#rolecode").select2({
		  ajax: {
		    url: globalUrl+'/userroles/getuserRoleforautho',
			//  url: globalUrl+'/supplier/getsuppliersforpayment',
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
		  placeholder: 'Search for a User Role',
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
	
});// -----------END (document).ready(function()---------------------------//

function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#AuthorizeButton").prop("disabled",false);

	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   Swal.fire(
				      'Accepted!',
				      'User Role actions has been proceed successfully.',
				      'success'
				    )
			userRoleTable.ajax.url(globalUrl+"/userroles/all").load();
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'User Role action failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 

	}


$('#roleTable').on( 'draw.dt', function (e) {
	userRoleTable.rows().eq(0).each( function ( index ) {
       var row = userRoleTable.row( index );
    
       var data = row.data();
       // ... do something with data(), or row.node(), etc
       console.log(data);
       
       if(userRoleArray.hasOwnProperty(data.userRoleID)){
    	   console.log(data.userRoleID);
    	  let d = userRoleArray[data.userRoleID]
    	  console.log(d);
    	   $('#'+data.userRoleID).prop('checked', true);
    	   $('#'+data.userRoleID).parent().parent().children().eq(8).children().eq(0).val(userRoleArray[data.userRoleID].roleOfuserRole);
    	   $('#'+data.userRoleID).parent().parent().children().eq(7).children().eq(0).val(userRoleArray[data.userRoleID].statusReason);
    	   
    	   
    	  

       }
       
   } );
} );

$('#roleTable tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = userRoleTable.row( tr );

    if ( row.child.isShown() ) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
    }
    else {
        // Open this row
        row.child( format(row.data()) ).show();
        tr.addClass('shown');
    }
} );



function getDateFormat(date){
	let current_datetime = new Date(date)
	let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
	console.log(formatted_date)
	return formatted_date;
}



// $('#acceptTerms').on('change', function() {

function loadRoleDatatable(para){
	
	
	var times = [
		"Accept", 
		"Reject" 
		// "Hold"
	];



	$("#userRoleDiv").show();

	if(userRoleTable == undefined){
		
		console.log(para);
		
		userRoleTable = $('#roleTable').DataTable({
		
			processing: true,
			 serverSide: true,

		     ajax: {
		    	// url:globalUrl+"/userroles/authorolelist/",
		    	 url:globalUrl+"/userroles/"+para,
		    	
		    	 type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		            { "data": "userRoleID",
		            	orderable: false,				            
		            	render: function(data,type,row,meta) {	
		            		// console.log(row);
	            		 return '<input type="checkbox" id="'+row.userRoleID+'" name="'+row.userRoleID+'" value="'+row+'"><label for="'+row.userRoleID+'"></label>'
						
		            	}, 
	            	 },			            	 
		            { "data": "userRoleID" },
		            { "data": "userRoleName" },
		            { "data": "userRoleDescription",
		            	 orderable: false,
		            	 },
		            { "data": "userRoleStatus"},
		            { "data": "createdBy" ,
		            	 orderable: false,
		            	},
		            { "data": "createdAt",
		            	"render": function ( data, type, row, meta ) {
		            		  var mydate=getDateFormat(data);
		            		      return mydate;	
		            		      }},
		            		
		            { "data": "userRoleID",
		            	 orderable: false,
		            	 render: function(data,type,row,meta) {
		            		 return '<input type="text" class="form-control" id="'+row.userRoleID+'"  placeholder ="Reason" disabled = "disabled"/ autocomplete="off">';
		            	 },
							className:'text-center'
		            },
		            {
		            	 orderable: false,
		            	"render": function(d,t,r){
		                	var $select = $("<select class='form-control m-b' disabled></select>", {
		                    	"id": r[0]+"start",
		                        "value": d
		                    });
		                	$.each(times, function(k,v){
		                    	var $option = $("<option></option>", {
		                        	"text": v,
		                            "value": v
		                        });
		                        if(d === v){
		                        	$option.attr("selected", "selected")
		                        }
		                    	$select.append($option);
		                    });				                	
		                    return $select.prop("outerHTML");
		                },
		                className:'text-centers'
		            }			            
		    			            
		           
		            
		        ],
			
		// dom: 'Bfrtip',
		    dom:"<'row'<'col-sm-12'B>>" +  
	        	"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>" +
	        "<'row'<'col-sm-12'tr>>" +
	        "<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
			
			buttons: [
				'copy', 'csv', 'excel', 'pdf', 'print'
			],
			'columnDefs': [
	            {
	               'targets': 0,
	               'className': 'select-checkbox',
	               'checkboxes': {
	                  'selectRow': true,
	                  'selectCallback': function(e){
	                	  console.log(e[0].children[0].attributes[1].nodeValue);
	                	  console.log($('#'+e[0].children[0].attributes[1].nodeValue).prop('checked'))
	                	  
//console.log(e[0])
	                	   var checkboxID = e[0].children[0].attributes[1].nodeValue; 
	                	  if($('#'+e[0].children[0].attributes[1].nodeValue).prop('checked')){
//console.log("Selected");
	                		
	                		 console.log(checkboxID);
	                		$('#'+checkboxID).parent().parent().children().eq(7).children().eq(0).prop('disabled', false);
	                		$('#'+checkboxID).parent().parent().children().eq(8).children().eq(0).prop('disabled', false);
	                		
	                		var statusReason = $('#'+checkboxID).parent().parent().children().eq(7).children().eq(0);
	                		var roleOfuserRole = $('#'+checkboxID).parent().parent().children().eq(8).children().eq(0);
	                		var roleNoforSA = $('#'+checkboxID).parent().parent().children().eq(2).text();
	                		console.log(statusReason);
	                		console.log("roleNoforSA "+roleNoforSA);
	                		console.log("checkboxIdforSA "+checkboxID);
	                		
	                		statusReason.focus();
	                		// statusReason.css('border-color','#FC0')
	                		
	                		statusReason.on('focusout', function() {
	                			console.log(statusReason.val()+" "+statusReason.val().length);
	                			if(statusReason.val().length <= 0){
	            					console.log("Zero");
	            					Swal.fire(
	            						      'Please provide a reason to authorize!',
	            						      'Role ID: '+roleNoforSA,
	            						      'warning'
	            						    );
	            					$('#'+checkboxID).prop('checked', false);
	            				}else{
	            					roleWithStatus = {
	            			 				"roleid":checkboxID,
	            			 				"roleOfuserRole": roleOfuserRole.val(),
	            			 				"statusReason": statusReason.val(),
	            			 				"status" : "3"
	            			 			};
	            					// console.log(roleWithStatus);
	            					$('#'+checkboxID).prop('checked', true);
	            					
	            					addtoArrayList(roleWithStatus);
	            					console.log(userRoleArray);
	            				}
	                			
	                		});
	                		
	                		
	                		roleOfuserRole.on('change', function() {
	                			
	                			roleWithStatus = {
            			 				"roleid":checkboxID,
            			 				"roleOfuserRole": roleOfuserRole.val(),
            			 				"statusReason": statusReason.val(),
            			 				"status" : "3"
            			 			};
	                			
	                			addtoArrayList(roleWithStatus);
	                			console.log(userRoleArray);
	                		});

	                		 
	                	  }else{
	                		  console.log()
	                		$('#'+checkboxID).parent().parent().children().eq(7).children().eq(0).prop('disabled', true);
		                	$('#'+checkboxID).parent().parent().children().eq(8).children().eq(0).prop('disabled', true);
		                	var statusReason = $('#'+checkboxID).parent().parent().children().eq(7).children().eq(0);
		                	removeFromArrayList(checkboxID);
		                	statusReason.val("");
	                	  }
	                	  
	                	  
	                  // console.log("ER "+JSON.stringify(this));
	                  }
	               }
	            },
	            { "width": "50%", "targets": 7 },
	            { "width": "50%", "targets": 8 }
	            
	         ],
	         'select': {
	           'style': 'multi',
	             'selector': 'td:first-child'
	          },
	          'order': [[1, 'asc']]
		
		});
		
	}else{
		
		console.log("Else");
		

		console.log("Inside Else");

	
		
	}
	
	

	
	
	
}// ------------------------------------------------------------------------------

function addtoArrayList(roleWithStatus){
	
	userRoleArray[roleWithStatus.roleid] = roleWithStatus;
	console.log(roleWithStatus);
	
}
function removeFromArrayList(roleWithStatus){
	
	
	console.log(roleWithStatus);
	
	delete userRoleArray[roleWithStatus];
	
	console.log(userRoleArray);

}


$('#rolecode').on('select2:select', function (e) {
	
	console.log("2222222")
	selectData = e.params.data;
	console.log(selectData.id);
	loadRoleDatatable(selectData.id);    	
   
});



$('#acceptTerms').on('change', function() {
	

	if ($(this).prop('checked') === true /*&& $(this).attr('value') == "Yes"*/) {
		console.log("checked Yes")
		loadRoleDatatable("all");
		
	} else {
	
		console.log("Hide Table Div Here")
		
	}
	
	
	
	
});

