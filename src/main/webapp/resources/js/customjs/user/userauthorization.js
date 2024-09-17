/**
 * 
 */
console.log("AuthuserRole");
$("#userTableDiv").hide();


if (typeof selectData !== 'undefined') {
	let selectData1;
	}

if (typeof selectData !== 'undefined') {
	let selectData;
//	let tbl_companies
}


var userTable;

var userListArray = {};



$(document).ready(function(){
	userTable = undefined;
	console.log("rr");
	
function getSelecteduserids(){
		//console.log(getSelecteduserids$('#exampletable').DataTable().column(0).checkboxes.selected());
		return rows_selected = $('#userTable').DataTable().column(0).checkboxes.selected();
	}
	
	function getSelectetedAction(){
		//console.log($('#exampletable').DataTable().column(0).checkboxes.selected().data());
		return rows_selected = $('#userTable').DataTable().column(0).checkboxes.selected();
	}
	
	function getSelecteduserid(){
		var rows_selected = $('#userTable').DataTable().column(0).checkboxes.selected();
		
		 var userid = rows_selected.join(",");	
		 console.log(userid);
		 return userid;
	}
	
	
	function getLengthOfuserTable(){
		 var rows_selected = $('#userTable').DataTable().column(0).checkboxes.selected();
		 //console.log(contractTable);
		 var lengthOfuserTable = rows_selected.length;
		 console.log("length of Current table "+lengthOfuserTable);
		 return lengthOfuserTable;
	}
		
	
	$('#AuthorizeButton').on('click', function() {
		getSelectetedAction();
		//var leng = 1;
		var leng = getLengthOfuserTable()
		if(leng!==0 && leng == 1){
			console.log("Len "+ leng+" Selection "+getSelecteduserid());
			var userIDArray = getSelecteduserid();
			
			var statusofusertemp = $('#'+userIDArray).parent().parent().children().eq(8).children().eq(0).val();
			var statusReason = $('#'+userIDArray).parent().parent().children().eq(7).children().eq(0).val();
			var usertempNoforSA = $('#'+userIDArray).parent().parent().children().eq(2).text();
    		
			console.log(statusReason);
			if(statusReason.length == 0){
				console.log("Empty Reason at "+userIDArray);
				Swal.fire(
					      'Please provide a reason to authorize!',
					      'User ID: '+usertempNoforSA,
					      'warning'
					    );
			}
			
			userWithStatus = {
					"userid": userIDArray,
					"statusofusertemp": statusofusertemp,
					"statusReason": statusReason,
					"status" : "3"
				};
		
			console.log(userWithStatus);
		}else if(leng > 1){	
			var userIDArray = getSelecteduserid();
			console.log(userIDArray);
			var userWithStatusArray=[];
			for(var i=0; i<userIDArray.length; i++){
				console.log($('#'+userIDArray[i]).parent().parent().children().eq(8).children().eq(0).val());
				var statusofusertemp = $('#'+userIDArray[i]).parent().parent().children().eq(8).children().eq(0).val();
				var statusReason = $('#'+userIDArray[i]).parent().parent().children().eq(7).children().eq(0).val();
				
				userWithStatus = {
						"userid": userIDArray[i],
						"statusofusertemp": statusofusertemp,
						"statusReason": statusReason,
						"status" : "3"
					};
				userWithStatusArray.push(userWithStatus);
				//console.log(contractWithStatus);
			}
			console.log(userWithStatusArray);
			for (let item of userWithStatusArray) {
				//console.log($('#'+item.contractid).parent().parent().children().eq(8).children().eq(0).val());
			}
			
		}else{
			Swal.fire(
				      'Please select a contract!',
				      'And try again.',
				      'warning'
				    );
		}
		
		var rows_selected = userTable.column(0).checkboxes.selected();
		$.each(rows_selected, function(index, rowId){
	         // Create a hidden element
			var statusofusertemp = $('#'+rowId).parent().parent().children().eq(8).children().eq(0).val();
			var statusReason = $('#'+rowId).parent().parent().children().eq(7).children().eq(0).val();
			
	         
			userWithStatus = {
	 				"userid":rowId,
	 				"statusofusertemp": statusofusertemp,
	 				"statusReason": statusReason, 
	 				"status" : "3"
	 			};
	         
	         console.log(userWithStatus);
	         console.log(index+ " "+ rowId);
	         
	      });
		
		console.log(userListArray);
		var count = Object.keys(userListArray).length;
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
					  
					
					var responseCode =  getAsyncDataPOST("/users/approve", userListArray, confirmedCallBack)	

	
						$(this).prop("disabled",true);
			
				  }
				});
			
			
			
		}else{
			console.log("Empty");
			
		}
		
		 
	});
	
	
	$('#userTable tbody').on( 'click', 'tr', function () {
	    $(this).toggleClass('selected');
	} ); 
	

	$("#user_ID").select2({
		  ajax: {
		    url: globalUrl+'/users/getuserforautho',
			
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
		  placeholder: 'Search for a User Name',
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
	
	
	
	
});//-----------END (document).ready(function()---------------------------//

function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#AuthorizeButton").prop("disabled",false);

	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
		   Swal.fire(
				      'Accepted!',
				      'User ID actions has been proceed successfully.',
				      'success'
				    )
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'User ID action failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 

	}


$('#userTable').on( 'draw.dt', function (e) {
	userTable.rows().eq(0).each( function ( index ) {
       var row = userTable.row( index );
    
       var data = row.data();
       // ... do something with data(), or row.node(), etc
       console.log(data);
       
       if(userListArray.hasOwnProperty(data.userid)){
    	   console.log(data.userid);
    	  let d = userListArray[data.userid]
    	  console.log(d);
    	   $('#'+data.userid).prop('checked', true);
    	   $('#'+data.userid).parent().parent().children().eq(8).children().eq(0).val(userListArray[data.userid].userOfuserid);
    	   $('#'+data.userid).parent().parent().children().eq(7).children().eq(0).val(userListArray[data.userid].statusReason);
    	   
    	   
    	  

       }
       
   } );
} );

$('#userTable tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = userTable.row( tr );

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


function loadUserDatatable(para){



	var times = [
		"Accept", 
		"Reject" 
		//"Hold"
	];
	

	$("#userTableDiv").show();

	if(userTable == undefined){
		console.log("1111111111111111111");
		userTable = $('#userTable').DataTable({
		
			processing: true,
			 serverSide: true,

		     ajax: {
		    	// url:globalUrl+"/users/authouserlist/",
		    	 url:globalUrl+"/users/authlist/"+para,
		    	 type: 'GET',
		         headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
		     },
		     columns: [
		            { "data": "userid",
		            	orderable: false,				            
		            	render: function(data,type,row,meta) {	
		            		//console.log(row);
	            		 return '<input type="checkbox" id="'+row.userid+'" name="'+row.userid+'" value="'+row+'"><label for="'+row.userid+'"></label>'
						
		            	}, 
	            	 },			            	 
		            { "data": "userid" },
		            { "data": "username" },
		            { "data": "companyCode"},
		            { "data": "userRoleInBussiness"},
		           	{ "data": "createdDateTime",
		            	"render": function ( data, type, row, meta ) {
		            		  var mydate=getDateFormat(data);
		            		      return mydate;	
		            		      }},
		            { "data": "status"},
		            		
		            { "data": "userid",
		            	 orderable: false,
		            	 render: function(data,type,row,meta) {
		            		 return '<input type="text" class="form-control" id="'+row.userid+'"  placeholder ="Reason" disabled = "disabled"/ autocomplete="off">';
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
			
		//	dom: 'Bfrtip',
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
	                	  
//	                	  console.log(e[0])
	                	   var checkboxID = e[0].children[0].attributes[1].nodeValue; 
	                	  if($('#'+e[0].children[0].attributes[1].nodeValue).prop('checked')){
//	                		  console.log("Selected");
	                		
	                		 console.log(checkboxID);
	                		$('#'+checkboxID).parent().parent().children().eq(7).children().eq(0).prop('disabled', false);
	                		$('#'+checkboxID).parent().parent().children().eq(8).children().eq(0).prop('disabled', false);
	                		
	                		var statusReason = $('#'+checkboxID).parent().parent().children().eq(7).children().eq(0);
	                		var userOfuserid = $('#'+checkboxID).parent().parent().children().eq(8).children().eq(0);
	                		var userNoforSA = $('#'+checkboxID).parent().parent().children().eq(2).text();
	                		console.log(statusReason);
	                		console.log("userNoforSA "+userNoforSA);
	                		console.log("checkboxIdforSA "+checkboxID);
	                		
	                		statusReason.focus();
	                		//statusReason.css('border-color','#FC0')
	                		
	                		statusReason.on('focusout', function() {
	                			console.log(statusReason.val()+" "+statusReason.val().length);
	                			if(statusReason.val().length <= 0){
	            					console.log("Zero");
	            					Swal.fire(
	            						      'Please provide a reason to authorize!',
	            						      'User ID: '+userNoforSA,
	            						      'warning'
	            						    );
	            					$('#'+checkboxID).prop('checked', false);
	            				}else{
	            					userWithStatus = {
	            			 				"userid":checkboxID,
	            			 				"userOfuserid": userOfuserid.val(),
	            			 				"statusReason": statusReason.val(),
	            			 				"status" : "3"
	            			 			};
	            					//console.log(userWithStatus);
	            					$('#'+checkboxID).prop('checked', true);
	            					
	            					addtoArrayList(userWithStatus);
	            					console.log(userListArray);
	            				}
	                			
	                		});
	                		
	                		
	                		userOfuserid.on('change', function() {
	                			
	                			userWithStatus = {
            			 				"userid":checkboxID,
            			 				"userOfuserid": userOfuserid.val(),
            			 				"statusReason": statusReason.val(),
            			 				"status" : "3"
            			 			};
	                			
	                			addtoArrayList(userWithStatus);
	                			console.log(userListArray);
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
	

	
	
	
}



$('#user_ID').on('select2:select', function (e) {
	
	console.log("2222222")
	selectData = e.params.data;
	console.log(selectData.id);
	loadUserDatatable("all");(selectData.id);    	
   
});


	
	
	$('#acceptTerms').on('change', function() {
		
		console.log("Htikre")

		if ($(this).prop('checked') === true && $(this).attr('value') == "Yes") {
			console.log("Htikre")
			loadUserDatatable("all");
			
		} else {
		
			console.log("Hide Table Div Here")
			
		}
		
		
		
		
	});	

function addtoArrayList(userWithStatus){
	
	userListArray[userWithStatus.userid] = userWithStatus;
	console.log(userWithStatus);
	
}
function removeFromArrayList(userWithStatus){
	console.log(userWithStatus);
	
	delete userListArray[userWithStatus];
	
	console.log(userListArray);

}