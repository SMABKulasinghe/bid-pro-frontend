
/*var table = $('#categoryFee').DataTable({
			aaSorting:[],
			"pageLength": 25
});*/
	
var userTable = $('#userTable').DataTable({
			aaSorting:[],
			"pageLength": 25
});


var categories;
var catFee;
$(document).ready(function() {
	  $('#reg_date').datepicker({
	      autoclose: true
	    });
	  
	  getAsyncData('/locationdetails/getprovince', function(res) {
		  $('#province').append(new Option('Select a province', ''))
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
//console.log(categories);
	  });	  
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

var index = Number(0);
$('#onetimefee').val(currencyFormat(10000));
const onetimefee = 10000;
var grandTottoSend = Number(0);

function findCategoryFee(catgeoryID){
	//let arr = categories;
	console.log(categories);
	console.log(catgeoryID);

	let obj = categories.find(o => o.eligibleCategortID === Number(catgeoryID));
	console.log(obj);
	console.log(obj.eligibleCategoryFee);
	catFee = obj.eligibleCategoryFee;
	catID = obj.eligibleCategortID;
	
	let Isexists = criteriaSet.has(Number(catgeoryID));
	
	if(!Isexists){
		//alert("New");
		criteriaSet.add(Number(catgeoryID));
		
		console.log(criteriaSet); 		
		
		var tableArray = [];
		//tableArray.push( ++index);
		tableArray.push(obj.eligibleCategortID);
		tableArray.push(obj.eligibleCategortName);
		tableArray.push(obj.eligibleCategoryFee);
		tableArray.push(currencyFormat(obj.eligibleCategoryFee));
		tableArray.push('<button class="btn bg-danger pull-center removeField" id="removeField">Remove</button>');
		userTable.row.add(tableArray).draw();
		userTable.columns([0,2]).visible(false);
		userTable.draw();
//		var sum = userTable.column(1).data().reduce( (catID, catFee) => parseFloat(catID) + parseFloat(catFee), parseFloat(0));
		var sum = userTable.column(2).data().reduce( (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue), parseFloat(0));

		console.log(sum);
		const grandTot = parseFloat(sum) + parseFloat(onetimefee);
		grandTottoSend = grandTot;
		$('#totCategoryFee').val(currencyFormat(sum));
		$('#grandTotal').val(currencyFormat(grandTot));
	}else{
		//alert("Duplicate")
		console.log(criteriaSet); 
	}		
}


// Remove from table
$("#userTable").on('click', '.removeField', function(e){
	var removeRow =  $(this).closest('tr');
	userTable.row(removeRow).remove().draw();
	var sum = userTable.column(2).data().reduce( (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue), parseFloat(0));
	console.log(sum);
	const grandTot = parseFloat(sum) + parseFloat(onetimefee);
	$('#totCategoryFee').val(currencyFormat(sum));
	$('#grandTotal').val(currencyFormat(grandTot));
});


$('#userTable tbody').on('click', 'button', function() {
	var data = userTable.row($(this).parents('tr')).data();
	//alert(data[0] + "'s mark is: " + data[1]);
	console.log(criteriaSet);
	const array = Array.from(criteriaSet);
	console.log(array+" "+data[0]);
	const index = array.indexOf(parseFloat(data[0]));
	console.log(array+ " "+index);
	if (index > -1) { // only splice array when item is found
		array.splice(index, 1); // 2nd parameter means remove one item only
		console.log(array);
		//criteriaSet = null;
		criteriaSet = new Set(array);
		console.log(criteriaSet);
	}
});


$("body").on('change', '#productCategory', function(e){	
	 $('#productSubCategory').prop("disabled", false);
	 $('#product').prop("disabled", false);	 

	 console.log($("#productCategory option:selected" ).text());
	 $('#productTableDiv').show();
	 findCategoryFee(this.value);			 		     
});


 function myCreateFunction(count) {
		  var table = document.getElementById("userTable");
		  var row = table.insertRow(count);
		  var cell0 = row.insertCell(0);
		  var cell1 = row.insertCell(1);
		  var cell2 = row.insertCell(2);
//	      var cell3 = row.insertCell(3);
//		  var cell4 = row.insertCell(4);
		  var cell3 = row.insertCell(3);

var sVal = $('#productCategory option:selected').val();

			console.log("catFee--> "+catFee); 
		    cell0.innerHTML = '<p>'+ ++index+ '</p>';
		    cell1.innerHTML = '<p procat="'+$("#productCategory option:selected" ).val()+'">'+$("#productCategory option:selected" ).text()+'</p>';
		    cell2.innerHTML = '<p class="text-right">'+currencyFormat(catFee)+'</p>';
//		    cell3.innerHTML = '<p prosubcat="'+$("#productSubCategory option:selected" ).val()+'">'+$("#productSubCategory option:selected" ).text()+'</p>';
//			cell4.innerHTML = '<p pro="'+$("#product option:selected" ).val()+'">'+$("#product option:selected" ).text()+'</p>';			
		    cell3.innerHTML = '<button class="btn bg-danger pull-center addproductNow" id="addproductNow" data-url="'+count+'">Remove</button>';
		  
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
/*$("body").on('change', '#productSubCategory', function(e){
	console.log(this.value);
	$('#product').empty();
	$('#product').append(new Option("Select Product", "0"));
	 getAsyncData('/category/'+this.value+'/subcategory/'+this.value+'/product', function(res) {
			//  $('#productCategory').append(new Option('Select a category', ''))
			  for (let item of res.responseJSON) {
				  $('#product').append(new Option(item.eligibleSubcatProddescription, item.eligiblesubcatProdid));
			  }
	  });
});*/


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

/*function fileValidationCompanyLogo() {
            var fileInput =
                document.getElementById('inputImage_logo');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
              //      /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
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
}*/


function fileValidationRegistrationFormUpload() {
            var fileInput =
                document.getElementById('inputImage_Registration');
             
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


function fileValidationAddressProofload() {
            var fileInput =
                document.getElementById('inputImage_Address');
             
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


function fileValidationGreenPolicy() { //(onchange="fileValidationGreenPolicy()")
            var fileInput =
                document.getElementById('input_GreenPolicy');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
           //         /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
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
	
	
function fileValidationICTADregistration() {
            var fileInput =
                document.getElementById('input_ICTAD');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
              //      /(\.jpg|\.jpeg|\.png|\.gif|\.pdf)$/i;
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


function fileValidationKYCForm() {
            var fileInput =
                document.getElementById('input_KYC');
             
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


function fileValidationListofGoods() {
            var fileInput =
                document.getElementById('input_listOfServices');
             
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


function fileValidationCurrentAccountStatement() {
            var fileInput =
                document.getElementById('input_lastsixmonths');
             
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


function fileValidationListofTop15() {
            var fileInput =
                document.getElementById('input_listoftopfifteenclients');
             
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


function fileValidationCertificateofIncorporation() {
            var fileInput =
                document.getElementById('input_certificationOfIncorp');
             
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


function fileValidationCertifiedlistofDirectors() {
            var fileInput =
                document.getElementById('input_listofdirectors');
             
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


function fileValidationArticlesofAssociation() {
            var fileInput =
                document.getElementById('input_articalofassociation');
             
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


function fileValidationLatestAuditedFinancial() {
            var fileInput =
                document.getElementById('input_lastAuditedFinAcc');
             
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


function fileValidationMainSupplierCode() {
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
		categoryObject["catfee"] = value[2];
		
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
	
	if ($('#green').val().length==0) {
		status+=1;
		$('#green').parent().parent().addClass('has-error')
	}
	
	if ($('#age').val().length==0) {
		status+=1;
		$('#age').parent().parent().addClass('has-error')
	}
	
	if ($('#productCategory').val()=='empty') {
		status+=1;
		$('#productCategory').parent().parent().addClass('has-error')
	}else{
		$('#productCategory').parent().parent().addClass('has-success')
	}
		
	
	//image uploading
	
/*	if ($('#input_GreenPolicy').val()=='empty') {
		status+=1;
		$('#input_GreenPolicy').parent().parent().addClass('has-error')
	}else{
		$('#input_GreenPolicy').parent().parent().addClass('has-success')
	}
	if ($('#input_ICTAD').val()=='empty') {
		status+=1;
		$('#input_ICTAD').parent().parent().addClass('has-error')
	}else{
		$('#input_ICTAD').parent().parent().addClass('has-success')
	}
	if ($('#input_KYC').val()=='empty') {
		status+=1;
		$('#input_KYC').parent().parent().addClass('has-error')
	}else{
		$('#input_KYC').parent().parent().addClass('has-success')
	}
	if ($('#input_listOfServices').val()=='empty') {
		status+=1;
		$('#input_listOfServices').parent().parent().addClass('has-error')
	}else{
		$('#input_listOfServices').parent().parent().addClass('has-success')
	}
	if ($('#input_CompanyProfile').val()=='empty') {
		status+=1;
		$('#input_CompanyProfile').parent().parent().addClass('has-error')
	}else{
		$('#input_CompanyProfile').parent().parent().addClass('has-success')
	}
	if ($('#input_lastsixmonths').val()=='empty') {
		status+=1;
		$('#input_lastsixmonths').parent().parent().addClass('has-error')
	}else{
		$('#input_lastsixmonths').parent().parent().addClass('has-success')
	}
	if ($('#input_listoftopfifteenclients').val()=='empty') {
		status+=1;
		$('#input_listoftopfifteenclients').parent().parent().addClass('has-error')
	}else{
		$('#input_listoftopfifteenclients').parent().parent().addClass('has-success')
	}
	if ($('#input_certificationOfIncorp').val()=='empty') {
		status+=1;
		$('#input_certificationOfIncorp').parent().parent().addClass('has-error')
	}else{
		$('#input_certificationOfIncorp').parent().parent().addClass('has-success')
	}
	if ($('#input_listofdirectors').val()=='empty') {
		status+=1;
		$('#input_listofdirectors').parent().parent().addClass('has-error')
	}else{
		$('#input_listofdirectors').parent().parent().addClass('has-success')
	}
	if ($('#input_articalofassociation').val()=='empty') {
		status+=1;
		$('#input_articalofassociation').parent().parent().addClass('has-error')
	}else{
		$('#input_articalofassociation').parent().parent().addClass('has-success')
	}
	if ($('#input_lastAuditedFinAcc').val()=='empty') {
		status+=1;
		$('#input_lastAuditedFinAcc').parent().parent().addClass('has-error')
	}else{
		$('#input_lastAuditedFinAcc').parent().parent().addClass('has-success')
	}*/
	if ($('#inputImage_logo').val()=='empty') {
		status+=1;
		$('#inputImage_logo').parent().parent().addClass('has-error')
	}else{
		$('#inputImage_logo').parent().parent().addClass('has-success')
	}
	/*if ($('#inputImage_Registration').val()=='empty') {
		status+=1;
		$('#inputImage_Registration').parent().parent().addClass('has-error')
	}else{
		$('#inputImage_Registration').parent().parent().addClass('has-success')
	}
	if ($('#inputImage_Address').val()=='empty') {
		status+=1;
		$('#inputImage_Address').parent().parent().addClass('has-error')
	}else{
		$('#inputImage_Address').parent().parent().addClass('has-success')
	}*/
	
	//console.log($('#upload_board_approval').val());

	
	console.log('Clicked');
	
//	var inputImagelogo = document.getElementById('inputImage_logo');
//	var inputImageRegistration = document.getElementById('inputImage_Registration');
	var inputImageAddress = document.getElementById('inputImage_Address');
//	var inputGreenPolicy = document.getElementById('input_GreenPolicy');
//	var inputICTAD = document.getElementById('input_ICTAD');
//	var inputKYC = document.getElementById('input_KYC');
//	var inputListOfServices = document.getElementById('input_listOfServices');
	var inputCompanyProfile = document.getElementById('input_CompanyProfile');
//	var inputlastsixmonths = document.getElementById('input_lastsixmonths');
//	var inputlistoftopfifteenclients = document.getElementById('input_listoftopfifteenclients');
//	var inputCertificationOfIncorp = document.getElementById('input_certificationOfIncorp');
	var inputListofdirectors = document.getElementById('input_listofdirectors');
//	var inputArticalofassociation = document.getElementById('input_articalofassociation');
//	var inputLastAuditedFinAcc = document.getElementById('input_lastAuditedFinAcc');
	var inputApplication = document.getElementById('input_Application');
	var inputCodeConduct = document.getElementById('input_CodeConduct');
	var inputESQuestions = document.getElementById('input_ESQuestions');
	
	
//	 var files = inputImagelogo.files;
//	 var files = inputImageRegistration.files;
	 var files = inputImageAddress.files;
//	 var files = inputGreenPolicy.files;
//	 var files = inputICTAD.files;
//	 var files = inputKYC.files;
//	 var files = inputListOfServices.files;
	 var files = inputCompanyProfile.files;
//	 var files = inputlastsixmonths.files;
//	 var files = inputlistoftopfifteenclients.files;
//	 var files = inputCertificationOfIncorp.files;
	 var files = inputListofdirectors.files;
//	 var files = inputArticalofassociation.files;
//	 var files = inputLastAuditedFinAcc.files;
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
	  		
		var  supplier= {
				"province" : $('#province').val(),
				"district" : $('#district').val(),
				"city" : $('#city').val(),
				"addressLine1" : $('#address_line1').val(),
				"addressLine2" : $('#address_line2').val(),
				"addressLine3" : $('#address_line3').val(),
//				"oneTimeFeeLKR" : $('#onetimefee').val(),
//				"categoryFeeLKR" : $('#input_categoryFee').val(),
//				"totalPaymentdue" : $('#totalPaymentDue').val(),				
				"RegNo" : $('#reg_no').val(),
				"doYouAdaptedAGreenPolicy" : $('#green').val(),
				"doYouEmployPersonsUnderTheAgeOf18Years" : $('#age').val(),
				"Bank" : $('#bank_name').val(),
				"Branch" : $('#bank_branch').val(),
				"Address" : $('#bank_address_lines').val(),
				"Phone" : $('#bank_phone_number').val(),
				"supplierID" :user.companyCode, 
				"regType" : "", 
//				"products" : products, 	
		
				"catArray" : catArray,
				"grandTottoSend" : grandTottoSend,						
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
					//	var responseCode =  differentialAsync("/supplier/addsupplier/self", supplier,[$('#inputImage_logo')[0],$('#inputImage_Registration')[0],$('#inputImage_Address')[0],$('#inputImage_Address')[0],$('#input_GreenPolicy')[0],$('#input_ICTAD')[0],$('#input_KYC')[0],$('#input_listOfServices')[0],
						var responseCode =  putFilesUpload("/supplier/updatesupplier", supplier,[$('#inputImage_logo')[0],$('#inputImage_Registration')[0],$('#inputImage_Address')[0],$('#inputImage_Address')[0],$('#input_GreenPolicy')[0],$('#input_ICTAD')[0],$('#input_KYC')[0],$('#input_listOfServices')[0],
						$('#input_CompanyProfile')[0],$('#input_lastsixmonths')[0],$('#input_listoftopfifteenclients')[0],$('#input_certificationOfIncorp')[0],$('#input_listofdirectors')[0],$('#input_articalofassociation')[0],$('#input_lastAuditedFinAcc')[0],
						$('#inputImage_logo')[0],$('#inputImage_Registration')[0],$('#inputImage_Address')[0],
						$('#input_Application')[0],$('#input_CodeConduct')[0],$('#input_ESQuestions')[0]], confirmedCallBack)
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



function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#submit_button").prop("disabled",false);
	    
	   if(responseCode.responseJSON!= null & responseCode.responseJSON.code=="00"){
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'Supplier has been registration successfully.',
				      'success'
				    )
		location.reload();
		
	   }else{
		   console.log(responseCode.responseJSON);
		   Swal.fire({
				type: 'error',
				title: 'Supplier registration failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 	    
}
	
	
	
function formclear(){
	$("#acceptTerms").prop("checked", false);
	$("#province").val('').trigger("change");
//  $("#district").val('').trigger("change");
//  $("#city").val('').trigger("change");
	$('#address_line1').val('');
	$('#address_line2').val('');
	$('#address_line3').val('');
//	$('#onetimefee').val('');
//	$('#input_categoryFee').val('');
//	$('#totalPaymentDue').val('');
	
	$('#reg_no').val('');
	$('#green').val('');
	$('#age').val('');
	$('#bank_name').val('');
	$('#bank_branch').val('');
	$('#bank_address_lines').val('');
	$('#bank_phone_number').val('');
	userTable.clear().draw();
	
	// upload files remove
	$('#input_GreenPolicy').val('');
	$('#input_ICTAD').val('');
	$('#input_KYC').val('');
	$('#input_listOfServices').val('');
	$('#input_CompanyProfile').val('');
	$('#input_lastsixmonths').val('');
	$('#input_listoftopfifteenclients').val('');
	$('#input_certificationOfIncorp').val('');
	$('#input_listofdirectors').val('');
	$('#input_articalofassociation').val('');
	$('#input_lastAuditedFinAcc').val('');
	$('#inputImage_logo').val('');
	$('#inputImage_Registration').val('');
	$('#inputImage_Address').val('');
	
	$('#input_Application').val('');
	$('#input_CodeConduct').val('');
	$('#input_ESQuestions').val('');	
}	


