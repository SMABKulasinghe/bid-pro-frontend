$(document).ready(function() {
	supCategoryTable = undefined;
	  $('#reg_date').datepicker({
	      autoclose: true
	 });
	categoryTable = undefined;
	categoryView();
});


var categorySet = new Set([]);

$('#submit_button').click(function(){
	
	const catname = $('#sup_catnamediv').find('input').val();
	const catdescription = $('#sup_catdisdiv').find('input').val();
	const catcode = $('#sup_catcodediv').find('input').val();
	const catfee = $('#sup_catfeediv').find('input').val();
	
	const hasInSet = categorySet.has(catname.toUpperCase());
	console.log(catname.toUpperCase());
	console.log(hasInSet);
	if(hasInSet){
		Swal.fire({
			type : 'error',
			title : 'Duplicates found',
			text : 'Category Name cannot be duplicated !',
		});
	}else if(catname=="" || catdescription=="" || catcode=="" || catfee==""){
		Swal.fire(
				  'Missing',
				  'Please check the required fields is empty!',
				  'warning'
				);		
	}else{
		var catHeadingAndFieldsObject = {};
		catHeadingAndFieldsObject["categoryname"] = catname;
		catHeadingAndFieldsObject["categorydescription"] = catdescription;
		catHeadingAndFieldsObject["categorycode"] = catcode;
		catHeadingAndFieldsObject["categoryfee"] = catfee;
		
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
					  
						var	 responseCode = getAsyncDataPOST("/supplier/createcategory",catHeadingAndFieldsObject,confirmedCallBack)
						if(responseCode == undefined){
							Swal.fire({
							  title: 'Sending...',
							  html: 'Please wait...',
							  allowEscapeKey: true,
							  allowOutsideClick: false,
							  imageUrl: 'http://cdn.home-designing.com/wp-content/uploads/2018/03/loading.gif',
  							  imageHeight: 120,
							  imageWidth: 120,
							  //hideOnOverlayClick: false,
							  //hideOnContentClick: false,
							  showConfirmButton: false,
							 
							});
						}
				  }
				});
		}
});



function categoryView(){
	if(categoryTable == undefined){
		categoryTable = $('#categoryTable').DataTable({
			
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
			   	url:globalUrl+"/supplier/category-view",
			    type: 'GET',
			    headers: { 'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
					 {"data":"index", className: "text-right"},
					 {"data":"categoryCode", className: "text-right"},
			    	 {"data":"categoryName"},
					 {"data":"categoryDescription"},
					 {"data":"categoryFee", className: "text-right"},
					 {"data":"eligiblecatId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							
							return '<button data-categoryName="'+row.categoryName+'" data-categoryDescription="'+row.categoryDescription+'" data-categoryCode="'+row.categoryCode+'" data-categoryFee="'+row.categoryFee+'" class="btn btn-primary" style="margin-right: 10px" onclick="edit('+data+',event)">Edit</button>'
							  
						  },	
					},
					 {"data":"eligiblecatId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.status == 3){
								return '<span class="badge badge-success">Active</span>'
								
							}else if(row.status == 4){
								return '<span class="badge badge-danger">Deactive</span>'
							}
						  },	
					},
					{"data":"eligiblecatId",
						orderable: false,
		            	 render: function(data,type,row,meta) {
							if(row.status == 3){
								return '<button type="button"  class="btn btn-danger" style="margin-right: 10px" onclick="deactive('+data+')">Deactive</button>'
							}else if(row.status == 4){
								return '<button type="button"  class="btn btn-success" style="margin-right: 10px" onclick="active('+data+')">Active</button>'
							}
						  },	
					},					
			     ],
			order: [[1, 'desc']],
		})
		
	}else{
		categoryTable.ajax.url(globalUrl+"/supplier/category-view").load();
	}
}



function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);
	    
	   if(responseCode.responseText!= null || responseCode.responseText=="Success"){
		   Swal.fire(
				      'Accepted!',
				      'Category has been created successfully.',
				      'success'
				    )
			formclear();
			categoryTable.ajax.url(globalUrl+"/supplier/category-view").load();
			$('#md_submit_category').modal('toggle');
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Category creation failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 
	   formclear();
}	



function active(data){
	console.log(data);
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
			
			  getAsyncData("/supplier/category-status/"+ data+"/active", function(res) {
			  categoryTable.ajax.url(globalUrl+"/supplier/category-view").load();
			 	})
		  }
		})
}


function deactive(data){
	console.log(data);
	//alert(data);
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
			
			  getAsyncData("/supplier/category-status/"+ data+"/deactive", function(res) {
			  categoryTable.ajax.url(globalUrl+"/supplier/category-view").load();
			 	})		  
		  }
		})
}


function disable(data){
	console.log(data);
	//alert(data);
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
			
			  getAsyncData("/supplier/category-status/"+ data+"/disable", function(res) {
			  categoryTable.ajax.url(globalUrl+"/supplier/category-view").load();
			 	})		  
		  }
		})
}



function edit(data,event){
	$("#catNameDiv input").remove();
	$("#catDescriptionDiv input").remove();
	$("#catCodeDiv input").remove();
	$("#catFeeDiv input").remove();
	
	$('#catNameDiv').append(`<input class="form-control" type="text" id="nameVal" value="${event.target.getAttribute('data-categoryName')}" />`);
	$('#catDescriptionDiv').append(`<input class="form-control" type="text" id="descriptionVal" value="${event.target.getAttribute('data-categoryDescription')}" />`);
	$('#catCodeDiv').append(`<input class="form-control" type="text" id="codeVal" value="${event.target.getAttribute('data-categoryCode')}" />`);
	$('#catFeeDiv').append(`<input class="form-control" type="text" id="feeVal" value="${event.target.getAttribute('data-categoryFee')}" />`);
	
//	$('#catCodeDiv').append(`<input type="hidden" id="eligiblecatId" name="eligiblecatId" value=${data} />`);
	$('#catFeeDiv').append(`<input type="hidden" id="eligiblecatId" name="eligiblecatId" value=${data} />`);
	$('#md_submit_category').modal('toggle');
}



$('#edit_sub_btn').on('click', function() {
	if ($('#nameVal').val().length!=0) {
		getAsyncData("/supplier/isexists-category/by/" + "categoryname" + "/"+ $("#nameVal").val(), existsCallBack);
	}
	if ($('#nameVal').val().length==0) {
		status+=1;
		$('#nameVal').parent().parent().addClass('has-error')
	}if ($('#descriptionVal').val().length==0) {
		status+=1;
		$('#descriptionVal').parent().parent().addClass('has-error')
	}if ($('#codeVal').val().length==0) {
		status+=1;
		$('#codeVal').parent().parent().addClass('has-error')
	}if ($('#feeVal').val().length==0) {
		status+=1;
		$('#feeVal').parent().parent().addClass('has-error')
	}else{
		var categoryRes = {
		"eligiblecatId" : $('#eligiblecatId').val(),
		"nameVal" : $('#nameVal').val(),
		"descriptionVal" : $('#descriptionVal').val(),
		"codeVal" : $('#codeVal').val(),
		"feeVal" : $('#feeVal').val(),				
	};
	
	Swal.fire({
	  title: 'Are you sure?',
	  text: "You won't be able to revert this!",
	  type: 'warning',
	  showCancelButton: true,
	  confirmButtonColor: '#3085d6',
	  cancelButtonColor: '#d33',
	  confirmButtonText: 'Yes!'
		}).then((result) => {
		  if (result.value) {
		
				  var	 responseCode = getAsyncDataPUT("/supplier/edit-category-view",categoryRes,confirmedCallBack)
						
						if(responseCode == undefined){
							Swal.fire({
							  title: 'Uploading...',
							  html: 'Please wait...',
							  allowEscapeKey: true,
							  allowOutsideClick: false,
							  imageUrl: 'http://cdn.home-designing.com/wp-content/uploads/2018/03/loading.gif',
  							  imageHeight: 120,
							  imageWidth: 120,
							  //hideOnOverlayClick: false,
							  //hideOnContentClick: false,
							  showConfirmButton: false,
							 
							});
						}	
			  	}
			})
	}	
})



$('#catname').on('focusout', function() {
			if ($("#catname").val() == "") {
			} else { 				
				getAsyncData("/supplier/isexists-category/by/" + "categoryname" + "/"+ $("#catname").val(), existsCallBack);				
			}
});


$('#nameVal').on('focusout', function() {
			if ($("#nameVal").val() == "") {
			} else { 				
				getAsyncData("/supplier/isexists-category/by/" + "categoryname" + "/"+ $("#nameVal").val(), existsCallBack);				
			}
});


$('#catdescription').on('focusout', function() {
			if ($("#catname").val() == "") {
			} else { 				
				getAsyncData("/supplier/isexists-category/by/" + "categorydescription" + "/"+ $("#catdescription").val(), existsCallBack1);				
			}
});


$('#catcode').on('focusout', function() {
			if ($("#catname").val() == "") {
			} else { 				
				getAsyncData("/supplier/isexists-category/by/" + "categorycode" + "/"+ $("#catcode").val(), existsCallBack1);				
			}
});


$('#catfee').on('focusout', function() {
			if ($("#catname").val() == "") {
			} else { 				
				getAsyncData("/supplier/isexists-category/by/" + "categoryfee" + "/"+ $("#catfee").val(), existsCallBack1);				
			}
});



function existsCallBack(res) {
	console.log(res);

	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "categoryname") {
		console.log(res.responseText);
		$('#catname').val("");
		$('#nameVal').val("");
		Swal.fire({
			type : 'error',
			title : 'Please use a different Category Name*',
			text : 'Category Name is already taken !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
	} 	
}


function existsCallBack1(res) {
	console.log(res);

	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "categorydescription") {
		console.log(res.responseText);
		//$('#financial_code').val("");
		$('#catdescription').val('');
		Swal.fire({
			type : 'error',
			title : 'Please use a different Category Description*',
			text : 'Category Description is already taken !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
	} 	
}


function existsCallBack2(res) {
	console.log(res);

	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "categorycode") {
		console.log(res.responseText);
		//$('#financial_code').val("");
		$('#catcode').val('');
		Swal.fire({
			type : 'error',
			title : 'Please use a different Category Code*',
			text : 'Category Code is already taken !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
	} 	
}


function existsCallBack3(res) {
	console.log(res);

	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true
			&& res.responseJSON.idtype == "categoryfee") {
		console.log(res.responseText);
		//$('#financial_code').val("");
		$('#catcode').val('');
		Swal.fire({
			type : 'error',
			title : 'Please use a different Category Code*',
			text : 'Category Code is already taken !',
			//footer : '<a href>Supplier Portal V1.0</a>'
		});
	} 	
}


function formclear() {
	$('#cat_name').val('');
	$('#cat_description').val('');
	$('#cat_code').val('');
	$('#cat_fee').val('');
}	


		