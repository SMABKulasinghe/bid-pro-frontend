
/*var table = $('#categoryFee').DataTable({
			aaSorting:[],
			"pageLength": 25
});*/
	
var userTable = $('#userTable').DataTable({
			aaSorting:[],
			"pageLength": 25,
			
			"drawCallback": function( settings ) {
    }
});


var categories;
var subcategories;
var catFee;
$(document).ready(function() {
	  $('#reg_date').datepicker({
	      autoclose: true
	    });
	  
	  getAsyncData('/locationdetails/getprovince', function(res) {
		  $('#province').append(new Option('Select a Province', ''))
		  for (let item of res.responseJSON) {
			  $('#province').append(new Option(item.englishName, item.id))
		}
	});
	  	
	  getAsyncData('/category', function(res) {
//  $('#productCategory').append(new Option('Select a category', ''))
		categories = res.responseJSON;
		  for (let item of res.responseJSON) {
			  $('#productCategory').append(new Option(item.eligibleCategortName, item.eligibleCategortID))
		  }
	  });

		 /*getAsyncData('/category/'+this.value+'/subcategory/', function(res) {
			subcategories = res.responseJSON;
			 for (let item of res.responseJSON) {
				$('#productSubCategory').append(new Option(item.eligibleSubcatname, item.eligibleSubcatId))
			 }
		});	*/	  
	  $('#productTableDiv').hide();
	  console.log("ready");	
});


/*getAsyncData('supplier/updatesupplier', function(res) {
		  //$('#suplierID').append(new Option('Select a province', ''))
		  for (let item of res.responseJSON) {
			  $('#suplierID').append(new Option(item.englishName, item.id))
		}
	});*/	  


console.log("outside");

$("body").on('change', '#province', function(e){
	console.log($(this).val());
	
	$('#district').find('option').remove().end();
	$('#city').find('option').remove().end();
	$('#district').select2({
		placeholder: 'Select a district'
	});
	
	if($(this).val() ===null || $(this).val() == ""){}else{
		getAsyncData('/locationdetails/getdistrict/'+$(this).val(), function(res) {
		  for (let item of res.responseJSON) {
			  $('#district').append(new Option(item.englishName, item.id)).trigger('change');
		}
		  $( "#district" ).prop( "disabled", false );
	  });
	}
});



$("body").on('change', '#district', function(e){
	console.log($(this).val());
	
	console.log($(this).val());
	$('#city').find('option').remove().end();
	$('#city').select2({
		placeholder: 'Select a city'
	});
	
	if($(this).val() === null){
		console.log("Empty ");
	}else{
		getAsyncData('/locationdetails/getcity/'+$(this).val(), function(res) {
		  for (let item of res.responseJSON) {
			  $('#city').append(new Option(item.englishName, item.id)).trigger('change');
		}
		  $( "#city" ).prop( "disabled", false );
	});
	}
});



$("body").on('click', '.addproductNow', function(e){
	var url = $(this).attr('data-url');
	var row_index = $(this).closest("tr").index();
	console.log(row_index);
	myDeleteFunction(row_index)
});


/*var index = Number(0);
$("body").on('change', '#product', function(e){
	
	console.log($("#productCategory option:selected" ).text());
	console.log($("#totalPaymentDue" ).val());
	 $('#productTableDiv').show();
	 var count = $('#userTable tr').length;
	 myCreateFunction(count);
	 
	 function myCreateFunction(count) {
		  var table = document.getElementById("userTable");
		  var row = table.insertRow(count);
		  var cell0 = row.insertCell(0);
		  var cell1 = row.insertCell(1);
		  var cell2 = row.insertCell(2);
		  var cell3 = row.insertCell(3);
		  var cell4 = row.insertCell(4);
		  var cell5 = row.insertCell(5);

var sVal = $('#productCategory option:selected').val();

			console.log("catFee--> "+catFee); 
		    cell0.innerHTML = '<p>'+ ++index+ '</p>';
		    cell1.innerHTML = '<p procat="'+$("#productCategory option:selected" ).val()+'">'+$("#productCategory option:selected" ).text()+'</p>';
		    cell2.innerHTML =  '<p class="text-right">'+currencyFormat(catFee)+'</p>';
		    cell3.innerHTML = '<p prosubcat="'+$("#productSubCategory option:selected" ).val()+'">'+$("#productSubCategory option:selected" ).text()+'</p>';
			cell4.innerHTML = '<p pro="'+$("#product option:selected" ).val()+'">'+$("#product option:selected" ).text()+'</p>';			
		    cell5.innerHTML = '<button class="btn bg-danger pull-center addproductNow" id="addproductNow" data-url="'+count+'">Remove</button>';
		  
		  if(count>=2){
			  $('html, body').animate({
			        scrollTop: $("#productTableDiv").offset().top
			    }, 2000);
		  }
		  
		  if($("#productTableDiv").hasClass("fadeOutUpBig")){
			  console.log("Yesss");
			  $("#productTableDiv").addClass("fadeInDownBig").removeClass("fadeOutUpBig");
		  } 
	 }     
});*/


var evaArray = [];
var criteriaSet = new Set([]);
var criteriaSetCategory = new Set([]);
var totalCatgeoryFee = Number(0);

var index = Number(0);
//$('#onetimefee').val(currencyFormat(4500));

const onetimefee = 4500;
const categoryFee = 4500;

var subCategoryFee;
var totcategoryFee;
var grandTottoSend = Number(0);

function setCategoryFee(catgeoryID){
	let IsexistsCat = criteriaSet.has(Number(catgeoryID));
	
	if(!IsexistsCat){
		criteriaSetCategory.add(Number(catgeoryID));
		//console.log(criteriaSetCategory);
		totalCatgeoryFee = categoryFee * criteriaSetCategory.size;
		console.log(totalCatgeoryFee);
		$('#onetimefee').val(totalCatgeoryFee);
	}
}


function findCategoryFee(catgeoryID, subcatgeoryID){
	//let arr = categories;
	console.log(categories);
	console.log(subcategories);
	console.log(catgeoryID);
	console.log(subcatgeoryID);

	let obj = categories.find(o => o.eligibleCategortID === Number(catgeoryID));
	let objj = subcategories.find(o => o.eligibleSubcatId === Number(subcatgeoryID));
	console.log(obj);
	console.log(obj.eligibleCategoryFee);
	console.log(objj);
	console.log(objj.eligibleSubcatId);
	catFee = obj.eligibleCategoryFee;
	catID = obj.eligibleCategortID;
	subcatID = objj.eligibleSubcatId;
	
	//setCategoryFee(catgeoryID);
	
	
	let Isexists = criteriaSet.has(Number(subcatgeoryID));
	
	if(!Isexists){
		//alert("New");
		criteriaSet.add(Number(subcatgeoryID));
		
		console.log(criteriaSet); 		
		
		var tableArray = [];
		//tableArray.push( ++index);
		tableArray.push(obj.eligibleCategortID);
		tableArray.push(objj.eligibleSubcatId);
		tableArray.push(obj.eligibleCategortName);
		tableArray.push(objj.eligibleSubcatname);
		//tableArray.push(objj.eligibleSubcatFee);
		//tableArray.push(obj.eligibleCategoryFee);
		//tableArray.push(currencyFormat(obj.eligibleCategoryFee));
		tableArray.push(currencyFormat(objj.eligibleSubcatFee));
		tableArray.push('<button class="btn bg-danger pull-center removeField" id="removeField">Remove</button>');
		userTable.row.add(tableArray).draw();
		userTable.columns([0,1]).visible(false);
		userTable.draw();
//		var sum = userTable.column(1).data().reduce( (catID, catFee) => parseFloat(catID) + parseFloat(catFee), parseFloat(0));
		var sum = userTable.column(4).data().reduce( (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue), parseFloat(0));

		console.log(sum);
		const grandTot = parseFloat(sum) + parseFloat(totalCatgeoryFee);
		grandTottoSend = grandTot;
		//setGrandTotal(sum)
		$('#totCategoryFee').val(currencyFormat(sum));
		$('#grandTotal').val(currencyFormat(grandTot));
		$('#productTableDiv').show();
	}else{
		//alert("Duplicate")
		console.log(criteriaSet); 
	}		
}


$('#userTable tbody').on('click', '.removeField', function () {
        var data = userTable.row($(this).parents('tr')).data();
      //  alert(data[0] + "'s salary is: " + data[0]);
		const array = Array.from(criteriaSetCategory);
		console.log(array+" "+data[0]);
		const index = array.indexOf(parseFloat(data[0]));
		console.log(array+ " "+index);
		if (index > -1) { // only splice array when item is found
			array.splice(index, 1); // 2nd parameter means remove one item only
			console.log(array);
			//criteriaSet = null;
			criteriaSetCategory = new Set(array);
		//	console.log(criteriaSetCategory);
		//	totalCatgeoryFee = criteriaSetCategory.size * categoryFee;
		//	$('#onetimefee').val(totalCatgeoryFee);
		}
});



// Remove from table
$("#userTable").on('click', '.removeField', function(e){
	var removeRow =  $(this).closest('tr');
	userTable.row(removeRow).remove().draw();
	var sum = userTable.column(4).data().reduce( (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue), parseFloat(0));
	console.log(sum);
	const grandTot = parseFloat(sum) + parseFloat(totalCatgeoryFee);
	$('#totCategoryFee').val(currencyFormat(sum));
	$('#grandTotal').val(currencyFormat(grandTot));
	//setGrandTotal(sum);
	var categoryArray = userTable.column(0).data().toArray();
	console.log(categoryArray+" "+categoryArray.length);
	var unique = categoryArray.filter(onlyUnique);
	console.log(unique); 
	setCategoryFee();
	
});

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}
var totalCatgeoryFeeVar;
function setCategoryFee(){
	let categoryArray = userTable.column(0).data().toArray();
	console.log(categoryArray+" "+categoryArray.length);
	let unique = categoryArray.filter(onlyUnique);
	console.log(unique); 
	console.log(unique.length); 
	
	let totalCatgeoryFee =  Number(unique.length) *  Number(4500);
	console.log(totalCatgeoryFee); 
	totalCatgeoryFeeVar = totalCatgeoryFee;
	$('#onetimefee').val(totalCatgeoryFee);
	
	var sum = userTable.column(4).data().reduce( (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue), parseFloat(0));
	console.log(sum);
	
	setGrandTotal(sum, totalCatgeoryFeeVar)
	
	
}

function setGrandTotal(sum, totalCatgeoryFeeVar){
	const grandTot = parseFloat(sum) + parseFloat(totalCatgeoryFeeVar);
		$('#grandTotal').val(currencyFormat(grandTot));
		grandTottoSend = grandTot;
		totcategoryFee = totalCatgeoryFeeVar;
		subCategoryFee = sum;		
}



$('#userTable tbody').on('click', 'button', function() {
	var data = userTable.row($(this).parents('tr')).data();
	//alert(data[0] + "'s mark is: " + data[1]);
	console.log(criteriaSet);
	const array = Array.from(criteriaSet);
	console.log(array+" "+data[1]);
	const index = array.indexOf(parseFloat(data[1]));
	console.log(array+ " "+index);
	if (index > -1) { // only splice array when item is found
		array.splice(index, 1); // 2nd parameter means remove one item only
		console.log(array);
		//criteriaSet = null;
		criteriaSet = new Set(array);
		console.log(criteriaSet);
	}
});



var cateIDForM;
$("body").on('change', '#productCategory', function(e){	
	 $('#productSubCategory').prop("disabled", false);
	 $('#product').prop("disabled", false);	 

	 console.log($("#productCategory option:selected" ).text());
	$('#productSubCategory').empty();
	$('#productSubCategory').append(new Option("Select Sub Category", "0"));
	cateIDForM = this.value;
	
	getAsyncData('/category/'+this.value+'/subcategory/', function(res) {
			subcategories = res.responseJSON;
			console.log(res.responseJSON);
			 for (let item of res.responseJSON) {
				$('#productSubCategory').append(new Option(item.eligibleSubcatname, item.eligibleSubcatId))
			 }
		});
	// findCategoryFee(this.value);			 		     
});



/*$("body").on('change', '#productCategory', function(e){
	console.log(this.value);
	$('#productSubCategory').empty();
	$('#product').empty();
	$('#productSubCategory').append(new Option("Select Sub Category", "0"));
	$('#productTableDiv').show();
	findCategoryFee(this.value);		
});*/


 function myCreateFunction(count) {
		  var table = document.getElementById("userTable");
		  var row = table.insertRow(count);
		  var cell0 = row.insertCell(0);
		  var cell1 = row.insertCell(1);
		  var cell2 = row.insertCell(2);
		  var cell3 = row.insertCell(3);
		  var cell4 = row.insertCell(4);

var sVal = $('#productCategory option:selected').val();
var sVal = $('#productSubCategory option:selected').val();

			console.log("catFee--> "+catFee); 
		    cell0.innerHTML = '<p>'+ ++index+ '</p>';
		    cell1.innerHTML = '<p procat="'+$("#productCategory option:selected" ).val()+'">'+$("#productCategory option:selected" ).text()+'</p>';
			cell2.innerHTML = '<p prosubcat="'+$("#productSubCategory option:selected" ).val()+'">'+$("#productSubCategory option:selected" ).text()+'</p>';
		    cell3.innerHTML = '<p class="text-right">'+currencyFormat(catFee)+'</p>';
//		    cell3.innerHTML = '<p prosubcat="'+$("#productSubCategory option:selected" ).val()+'">'+$("#productSubCategory option:selected" ).text()+'</p>';
//			cell4.innerHTML = '<p pro="'+$("#product option:selected" ).val()+'">'+$("#product option:selected" ).text()+'</p>';			
		    cell4.innerHTML = '<button class="btn bg-danger pull-center addproductNow" id="addproductNow" data-url="'+count+'">Remove</button>';
		  
		  if(count>=2){
			  $('html, body').animate({
			        scrollTop: $("#productTableDiv").offset().top
			    }, 2000);
		  }		  
		  if($("#productTableDiv").hasClass("fadeOutUpBig")){
			  console.log("Yesss");
			  $("#productTableDiv").addClass("fadeInDownBig").removeClass("fadeOutUpBig");
		  }		
}



$("body").on('click', '#confirmButton', function(e){
	
	 $( "#productTableDiv" ).removeClass("fadeInDownBig").addClass("fadeOutUpBig");
});


//ProductCategory
/*$("body").on('change', '#productCategory', function(e){
	console.log(this.value);
	$('#productSubCategory').empty();
	$('#product').empty();
	$('#productSubCategory').append(new Option("Select Sub Category", "0"));
	findCategoryFee(this.value);	
	 getAsyncData('/category/'+this.value+'/subcategory/', function(res) {
			  for (let item of res.responseJSON) {
				  $('#productSubCategory').append(new Option(item.eligibleSubcatname, item.eligibleSubcatId))
			  }
		});	
});*/


//ProductSubCategory
$("body").on('change', '#productSubCategory', function(e){
	console.log(this.value);
	//$('#product').empty();
	//$('#product').append(new Option("Select Product", "0"));
	 /*getAsyncData('/category/'+this.value+'/subcategory/'+this.value+'/product', function(res) {
			//  $('#productCategory').append(new Option('Select a category', ''))
			  for (let item of res.responseJSON) {
				  $('#product').append(new Option(item.eligibleSubcatProddescription, item.eligiblesubcatProdid));
			  }
	  });*/
findCategoryFee(cateIDForM ,this.value);
setCategoryFee();
});


function myDeleteFunction(index) {
	  document.getElementById("userTable").deleteRow(index);
}



// Download File formats ZIP file

$('#download_all_files_btn').on('click', function() {
	console.log("download_all_files_btn");
	var urlHeader = "/supplier/downloadallfiles";
	downloadFile(urlHeader);
});



// upload PDF files
function fileValidationBRForm() {
            var fileInput =
                document.getElementById('input_BR');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
             //       /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
						/(\.pdf)$/i;

			//var allowedExtensionsPdf = /()$/i;
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
			//		title: "Please use Image or PDF",
					title: "Please use PDF",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                //alert('Invalid file type');
                fileInput.value = '';
				//filePath.value = '';
                return false;
         }
}


function fileValidationKYCForm() {
            var fileInput =
                document.getElementById('input_KYC');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
             //       /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
					/(\.pdf)$/i;

			//var allowedExtensionsPdf = /()$/i;
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
			//		title: "Please use Image or PDF",
					title: "Please use PDF",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                //alert('Invalid file type');
                fileInput.value = '';
				//filePath.value = '';
                return false;
         }
}


function fileValidationBCIForm() {
            var fileInput =
                document.getElementById('input_BCI');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
               //     /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
						/(\.pdf)$/i;

			//var allowedExtensionsPdf = /()$/i;
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
				//	title: "Please use Image or PDF",
					title: "Please use PDF",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                //alert('Invalid file type');
                fileInput.value = '';
				//filePath.value = '';
                return false;
         }
}


function fileValidationAuditedReports() {
            var fileInput =
                document.getElementById('input_Audited_Reports');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
               //     /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
						/(\.pdf)$/i;

			//var allowedExtensionsPdf = /()$/i;
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
				//	title: "Please use Image or PDF",
					title: "Please use PDF",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                //alert('Invalid file type');
                fileInput.value = '';
				//filePath.value = '';
                return false;
         }
}


function fileValidationDirectorDetails() {
            var fileInput =
                document.getElementById('input_directordetails');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
               //     /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
						/(\.pdf)$/i;

			//var allowedExtensionsPdf = /()$/i;
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
				//	title: "Please use Image or PDF",
					title: "Please use PDF",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                //alert('Invalid file type');
                fileInput.value = '';
				//filePath.value = '';
                return false;
         }
}


function fileValidationCompanyProfile() {
            var fileInput =
                document.getElementById('input_CompanyProfile');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
               //     /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
						/(\.pdf)$/i;

			//var allowedExtensionsPdf = /()$/i;
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
				//	title: "Please use Image or PDF",
					title: "Please use PDF",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                //alert('Invalid file type');
                fileInput.value = '';
				//filePath.value = '';
                return false;
         }
}


function fileValidationMainApplication() {
            var fileInput =
                document.getElementById('input_Application');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
             //       /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
						/(\.pdf)$/i;

			//var allowedExtensionsPdf = /()$/i;
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
				//	title: "Please use Image or PDF",
					title: "Please use PDF",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                //alert('Invalid file type');
                fileInput.value = '';
				//filePath.value = '';
                return false;
         }
}


function fileValidationCodeConduct() {
            var fileInput =
                document.getElementById('input_CodeConduct');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
            //        /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
						/(\.pdf)$/i;

			//var allowedExtensionsPdf = /()$/i;
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
				//	title: "Please use Image or PDF",
					title: "Please use PDF",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                //alert('Invalid file type');
                fileInput.value = '';
				//filePath.value = '';
                return false;
         }
}


function fileValidationESquestions() {
            var fileInput =
                document.getElementById('input_ESQuestions');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
            //        /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
						/(\.pdf)$/i;

			//var allowedExtensionsPdf = /()$/i;
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
				//	title: "Please use Image or PDF",
					title: "Please use PDF",
					text: "Invalid file type",
					footer: '<a href>Supplier Management V1.0</a>'
				});
                //alert('Invalid file type');
                fileInput.value = '';
				//filePath.value = '';
                return false;
         }
}



$('#reg_no').on('focusout', function() {
	changeClass('#reg_no');	
});

$('#s_contact_no').on('focusout', function() {
	changeClass('#s_contact_no');
});

$('#s_email').on('focusout', function() {
	changeClass('#s_email');
});


$('#reg_no').on('focusout', function() {
	console.log($("#reg_no").val());
		if ($("#reg_no").val() == "") {
	} else {
			getAsyncData("/supplier/isexists/by/" + "regno" + "/"+ $('#reg_no').val(), existsCallBack);
		  }
});


$('#s_contact_no').on('focusout', function() {
	console.log($("#s_contact_no").val());
		if ($("#s_contact_no").val() == "") {
	} else {
			getAsyncData("/supplier/isexists/by/" + "contactno" + "/"+ $('#s_contact_no').val(), existsCallBack);
		  }
});	


$('#s_email').on('focusout', function() {
	console.log($("#s_email").val());
		if ($("#s_email").val() == "") {
	} else {
			getAsyncData("/supplier/isexists/by/" + "conemail" + "/"+ $('#s_email').val(), existsCallBack);
		  }
});


/*function validateRegisNo(regno){
	var isValid = /^(\+\d{2,4})?\s?(\d{10})$/.test(regno);
	return isValid;
}*/

function validatePhoneNo(phone){
	var isValid = /^(\+\d{2,4})?\s?(\d{10})$/.test(phone);
	return isValid;
}


function validateEmail(email){
	var isValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	return isValid;
}


/*$('#reg_no').on('focusout', function() {
			console.log($("#reg_no").val());
			if ($("#reg_no").val() == "") {
			} else {
				var bol = validateRegisNo($("#reg_no").val());
				console.log(bol);
				if (!bol) {
					Swal.fire({
						type : 'error',
						title : 'Invalid Registration Number format',
						text : 'Please enter a valid registration number!',
					});
				} 
				else{
					getAsyncData("/supplier/isexists/by/" + "regno" + "/"+ $('#reg_no').val(), existsCallBack);
				}
			}
});*/


$('#s_contact_no').on('focusout', function() {
			console.log($("#s_contact_no").val());
			if ($("#s_contact_no").val() == "") {
			} else {
				var bol = validatePhoneNo($("#s_contact_no").val());
				console.log(bol);
				if (!bol) {
					Swal.fire({
						type : 'error',
						title : 'Invalid Phone Number format',
						text : 'Please enter a valid phone number!',
					});
				} 
				else{
					getAsyncData("/supplier/isexists/by/" + "contactno" + "/"+ $('#s_contact_no').val(), existsCallBack);
				}
			}
});


$('#s_email').on('focusout', function() {
			console.log($("#s_email").val());
			if ($("#s_email").val() == "") {
			} else {
				var bol = validateEmail($("#s_email").val());
				console.log(bol);
				if (!bol) {
					Swal.fire({
						type : 'error',
						title : 'Invalid email',
						text : 'Please enter a valid email address!',
					});
					$(this).parent().parent().addClass('has-error')
					$(this).parent().parent().removeClass('has-success')
				}else{
						getAsyncData("/supplier/isexists/by/" + "conemail" + "/"+ $('#s_email').val(), existsCallBack);
				}
			}
});


function existsCallBack(res) {
	console.log(res);
	
	console.log(res.responseJSON.msg);
	if (res.responseJSON != null && res.responseJSON.msg == true && res.responseJSON.idtype == "regno") {
		console.log(res.responseText);
		$('#reg_no').val("");
		Swal.fire({
			type : 'error',
			title : 'Please use a different Business Registration(BR) Number*',
			text : 'Business Registration(BR) Number is already taken !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
	}else if (res.responseJSON != null && res.responseJSON.msg == true && res.responseJSON.idtype == "contactno") {
		console.log(res.responseText);
		$('#s_contact_no').val("");
		Swal.fire({
			type : 'error',
			title : 'Contact Number already used*',
			text : 'Please use a different Contact Number !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
	}else if (res.responseJSON != null && res.responseJSON.msg == true && res.responseJSON.idtype == "conemail") {
		console.log(res.responseText);
		$('#s_email').val("");
		Swal.fire({
			type : 'error',
			title : 'Please use a different Email*',
			text : 'This Email address is associated with another user !',
			footer : '<a href>Supplier Portal V1.0</a>'
		});
	}
}


function changeClass(hashtag) {
	if ($(hashtag).val().length > 0) {
		$(hashtag).parent().parent().addClass('has-success')
		$(hashtag).parent().parent().removeClass('has-error')
	}else{
		$(hashtag).parent().parent().addClass('has-error')
		$(hashtag).parent().parent().removeClass('has-success')
	}
}



var  supplier;

$("body").on('click', '#submit_button', function(e){
	console.log("Clicked submit button");
	if(!$('#acceptTerms').prop("checked")){		
		Swal.fire(
				  'Confirm',
				  'Please confirm the supplier creation!',
				  'warning'
				);
	}
	console.log("inside method")	
	
var catArray = [];
var data1 = userTable.rows().data();
 data1.each(function (value, index) {
//   console.log(`For index ${index}, data value is ${value}`);
     console.log(value[0]+"-"+value[2]);

	var categoryObject = {};
		categoryObject["catId"] = value[0];
		categoryObject["subcatId"] = value[1];
//		categoryObject["catfee"] = value[2];
//		categoryObject["subcatfee"] = value[4];
		
		catArray.push(categoryObject);
		
		console.log(JSON.stringify(catArray));
 });
		console.log(catArray);
	
		
	var status = 0;

    if ($('#province').val()=='empty') {
		status+=1;
		$('#province').parent().parent().addClass('has-error')
	}else{
		$('#province').parent().parent().addClass('has-success')
	}
	
	if ($('#district').val()=='empty') {
		status+=1;
		$('#district').parent().parent().addClass('has-error')
	}else{
		$('#district').parent().parent().addClass('has-success')
	}
	
	if ($('#city').val()=='empty') {
		status+=1;
		$('#city').parent().parent().addClass('has-error')
	}else{
		$('#city').parent().parent().addClass('has-success')
	}
	
	if ($('#address_line1').val().length==0) {
		status+=1;
		$('#address_line1').parent().parent().addClass('has-error')
	}
	
/*	if ($('#address_line2').val().length==0) {
		status+=1;
		$('#address_line2').parent().parent().addClass('has-error')
	}
	
	if ($('#address_line3').val().length==0) {
		status+=1;
		$('#address_line3').parent().parent().addClass('has-error')
	}*/
	
/*	if ($('#onetimefee').val().length==0) {
		status+=1;
		$('#onetimefee').parent().parent().addClass('has-error')
	}
	
	if ($('#input_categoryFee').val().length==0) {
		status+=1;
		$('#input_categoryFee').parent().parent().addClass('has-error')
	}
	
	if ($('#totalPaymentDue').val().length==0) {
		status+=1;
		$('#totalPaymentDue').parent().parent().addClass('has-error')
	}*/
	
	if ($('#totCategoryFee').val().length==0) {
		status+=1;
		$('#totCategoryFee').parent().parent().addClass('has-error')
	}
	
	if ($('#grandTotal').val().length==0) {
		status+=1;
		$('#grandTotal').parent().parent().addClass('has-error')
	}
	
	if ($('#reg_no').val().length==0) { 
		status+=1;
		$('#reg_no').parent().parent().addClass('has-error')
	}
	
	if ($('#s_name').val().length==0) {
		status+=1;
		$('#s_name').parent().parent().addClass('has-error')
	}
	
	if ($('#s_designation').val().length==0) {
		status+=1;
		$('#s_designation').parent().parent().addClass('has-error')
	}
	
	if ($('#s_contact_no').val().length==0) {
		status+=1;
		$('#s_contact_no').parent().parent().addClass('has-error')
	}
	
	if ($('#s_email').val().length==0) {
		status+=1;
		$('#s_email').parent().parent().addClass('has-error')
	}
	
	if ($('#productCategory').val()=='empty') {
		status+=1;
		$('#productCategory').parent().parent().addClass('has-error')
	}else{
		$('#productCategory').parent().parent().addClass('has-success')
	}
	
	if ($('#productSubCategory').val()=='empty') {
		status+=1;
		$('#productSubCategory').parent().parent().addClass('has-error')
	}else{
		$('#productSubCategory').parent().parent().addClass('has-success')
	}
		

	//image uploading
	if ($('#inputImage_logo').val()=='empty') {
		status+=1;
		$('#inputImage_logo').parent().parent().addClass('has-error')
	}else{
		$('#inputImage_logo').parent().parent().addClass('has-success')
	}


	console.log('Clicked');
	
	var inputBR = document.getElementById('input_BR');
	var inputKYC = document.getElementById('input_KYC');
	var inputBCI = document.getElementById('input_BCI');
	var inputAuditedReports = document.getElementById('input_Audited_Reports');
	var inputDirectorDetails = document.getElementById('input_directordetails');
	var inputCompanyProfile = document.getElementById('input_CompanyProfile');
	var inputApplication = document.getElementById('input_Application');
	var inputCodeConduct = document.getElementById('input_CodeConduct');
	var inputESQuestions = document.getElementById('input_ESQuestions');
	

	 var files = inputBR.files;
	 var files = inputKYC.files;
	 var files = inputBCI.files;
	 var files = inputAuditedReports.files;
	 var files = inputDirectorDetails.files;
	 var files = inputCompanyProfile.files;
	 var files = inputApplication.files;
 	 var files = inputCodeConduct.files;
	 var files = inputESQuestions.files;


		if(files.length==0){
            Swal.fire(
				  'Missing',
				  'Please check the required fields!',
				  'warning'
				);
            return false;
        }


	if(!$('#acceptTerms').prop("checked")){		
		Swal.fire(
				  'Confirm',
				  'Please confirm the supplier Registration!',
				  'warning'
				);		
	}else if (status != 0) {
		Swal.fire(
				  'Missing',
				  'Please check the required fields!',
				  'warning'
				);		
	}else{
		console.log('All Fine');
		var user = JSON.parse(sessionStorage.getItem("User"));	
	  		
		 supplier= {
				"province" : $('#province').val(),
				"district" : $('#district').val(),
				"city" : $('#city').val(),
				"addressLine1" : $('#address_line1').val(),
				"addressLine2" : $('#address_line2').val(),
				"addressLine3" : $('#address_line3').val(),				
				"RegNo" : $('#reg_no').val(),
				"Bank" : $('#bank_name').val(),
				"Branch" : $('#bank_branch').val(),
				"bankAccountNo" : $('#bank_account_no').val(),
				"bankCode" : $('#bank_code').val(),
				"name" : $('#s_name').val(),
				"designation" : $('#s_designation').val(),
				"contactno" : $('#s_contact_no').val(),
				"email" : $('#s_email').val(),
				
				"supplierID" :user.companyCode, 
				"regType" : "", 
//				"products" : products, 	
				"catArray" : catArray,
				"grandTottoSend" : grandTottoSend,
				"catfee" : totcategoryFee,
				"subcatfee" : subCategoryFee,						
		};
			
			console.log(JSON.stringify(supplier));								
			
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
						   
					// var responseCode =  getAsyncDataPOST("/supplier/addsupplier/1", supplier, confirmedCallBack)	
					
					// working method bellow
					//	var responseCode =  differentialAsync("/supplier/addsupplier/self", supplier,[$('#inputImage_logo')[0],$('#inputImage_Registration')[0],$('#inputImage_Address')[0],
						var responseCode =  getAsyncDataPUT("/supplier/updatesupplier", supplier, confirmedCallBack1)
						$(this).prop("disabled",true);
						
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



function confirmedCallBack1(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);
	    
	   if(responseCode.responseJSON!= null & responseCode.responseJSON.msg == "Success"){
		   //formclear();
		   Swal.fire(
				      'Accepted!',
				      'Supplier has been registration successfully.',
				      'success'
				    )
//		location.reload();

		var responseCode;
					responseCode =  putFilesUploadSubmitTender("/supplier/submit/imagelogo", supplier,$('#inputImage_logo')[0], confirmedCallBack)
					responseCode =  putFilesUploadSubmitTender("/supplier/submit/br", supplier,$('#input_BR')[0], confirmedCallBack)
					responseCode =  putFilesUploadSubmitTender("/supplier/submit/kyc", supplier,$('#input_KYC')[0], confirmedCallBack)
					responseCode =  putFilesUploadSubmitTender("/supplier/submit/bci", supplier,$('#input_BCI')[0], confirmedCallBack)
					responseCode =  putFilesUploadSubmitTender("/supplier/submit/auditedreports", supplier,$('#input_Audited_Reports')[0], confirmedCallBack)
					responseCode =  putFilesUploadSubmitTender("/supplier/submit/directordetails", supplier,$('#input_directordetails')[0], confirmedCallBack)
					responseCode =  putFilesUploadSubmitTender("/supplier/submit/companyprofile", supplier,$('#input_CompanyProfile')[0], confirmedCallBack)
					responseCode =  putFilesUploadSubmitTender("/supplier/submit/application", supplier,$('#input_Application')[0], confirmedCallBack)
					responseCode =  putFilesUploadSubmitTender("/supplier/submit/codeconduct", supplier,$('#input_CodeConduct')[0], confirmedCallBack)
					responseCode =  putFilesUploadSubmitTender("/supplier/submit/esquestions", supplier,$('#input_ESQuestions')[0], confirmedCallBack)
					responseCode =  putFilesUploadSubmitTender("/supplier/submit/imagelogo", supplier,$('#inputImage_logo')[0], confirmedCallBack)

						
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
	   }else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Supplier registration failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 	    
}



function confirmedCallBack(responseCode){
	$("#submit_button").prop("disabled",false);
	    
	   if(responseCode.responseText!= null & responseCode.responseText=="Success"){
//		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'Supplier has been registration successfully.',
				      'success'
				    )
		goBack()
		}else{
		   console.log(responseCode.responseText);
		   Swal.fire({
				type: 'error',
				title: 'Supplier registration failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});	
	}
}


function goBack(){
		Swal.fire({
				  title: 'Completed',
				  text: "Addtional information submission is completed",
				  type: 'success',
				  showCancelButton: false,
				  confirmButtonColor: '#3085d6',
				  cancelButtonColor: '#d33',
				  confirmButtonText: 'OK'
				}).then((result) => {
				  if (result.value) {
					  console.log("goback");
					location.reload();
				  }
			});
}	
	
	
function formclear(){
	$("#acceptTerms").prop("checked", false);
	$("#province").val('').trigger("change");
	$('#address_line1').val('');
	$('#address_line2').val('');
	$('#address_line3').val('');	
	$('#reg_no').val('');
	$('#bank_name').val('');
	$('#bank_branch').val('');
	$('#bank_account_no').val('');
	$('#bank_code').val('');
	$('#s_name').val('');
	$('#s_designation').val('');
	$('#s_contact_no').val('');
	$('#s_email').val('');
	userTable.clear().draw();
	
	// upload files remove
	$('#input_BR').val('');
	$('#input_KYC').val('');
	$('#input_BCI').val('');
	$('#input_Audited_Reports').val('');
	$('#input_directordetails').val('');
	$('#input_CompanyProfile').val('');	
	$('#input_Application').val('');
	$('#input_CodeConduct').val('');
	$('#input_ESQuestions').val('');
}	

	

