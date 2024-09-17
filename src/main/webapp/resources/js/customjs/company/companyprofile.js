//console.log("1");

var addcatTable = $('#addcatTable').DataTable({
	aaSorting: [],
	"aoColumnDefs": [

      { "sClass": "text-right", "aTargets": [0, 3 ] }           
    ]
});


var categories;
var catFee;

$(document).ready(function() {
	supplierViewFilesTable = undefined;
	viewCategoriesTable = undefined;
	additonalCategoriesTable = undefined;
	
	const USJ = JSON.parse(sessionStorage.getItem("User"));
	console.log(USJ.companyCode);
	loadCompanyDetails(USJ.companyCode);
	//console.log("3");
	
	getAsyncData('/category/getCategoryForRegistration', function(res) {
	categories = res.responseJSON;
	for (let item of res.responseJSON) {
			$('#additionalCategory').append(new Option(item.eligibleCategortName, item.eligibleCategortID))
	}
});	 	
	
	 $('#addCategoriesTableDiv').hide();
	  console.log("ready");		
});
//console.log("2");


function loadCompanyDetails(companyID){
	 getAsyncData('/supplier/company-profile/'+companyID, function(res) {
        console.log(res);
        console.log(res.responseJSON);	
	
        $('#supplier_name').val(res.responseJSON.data.supplierName);
        $('#company_type').val(res.responseJSON.data.companyType);
        $('#registration_no').val(res.responseJSON.data.registrationNo);
        $('#contact_no').val(res.responseJSON.data.contactNo);
        $('#district').val(res.responseJSON.data.district);
        $('#city').val(res.responseJSON.data.city);
        $('#province').val(res.responseJSON.data.province);

		$('#address_1').val(res.responseJSON.data.address1);
        $('#address_2').val(res.responseJSON.data.address2);
        $('#address_3').val(res.responseJSON.data.address3);
//      $('#one_time_fee').val(res.responseJSON.data.oneTimeFee);
        $('#email').val(res.responseJSON.data.emailAdmin);
                   
		$('#bank').val(res.responseJSON.data.bank);
        $('#branch').val(res.responseJSON.data.branch);
        $('#account_no').val(res.responseJSON.data.accountNo);
        $('#bank_code').val(res.responseJSON.data.bankCode);

		$('#su_name').val(res.responseJSON.data.name);
        $('#su_designation').val(res.responseJSON.data.designation);
        $('#su_contactNo').val(res.responseJSON.data.contactNumber);
        $('#su_email').val(res.responseJSON.data.email);      


		$("#brformDiv").append('<button type="file" id="download_fileformats_btn"  class="btn btn-success" style="margin-right: 10px" onclick="download(\''+res.responseJSON.data.BRForm+'\')">View</button>');
		$("#auditedReportsDiv").append('<button type="file" id="download_fileformats_btn"  class="btn btn-success" style="margin-right: 10px" onclick="download(\''+res.responseJSON.data.auditedReports+'\')">View</button>');
		
		$("#kycFormDiv").append('<button type="file" id="download_fileformats_btn"  class="btn btn-success" style="margin-right: 10px" onclick="download(\''+res.responseJSON.data.kycForm+'\')">View</button>');
		$("#directorDetailsDiv").append('<button type="file" id="download_fileformats_btn"  class="btn btn-success" style="margin-right: 10px" onclick="download(\''+res.responseJSON.data.directorDetails+'\')">View</button>');

		$("#bciformDiv").append('<button type="file" id="download_fileformats_btn"  class="btn btn-success" style="margin-right: 10px" onclick="download(\''+res.responseJSON.data.bciForm+'\')">View</button>');
		$("#companyProfileDiv").append('<button type="file" id="download_fileformats_btn"  class="btn btn-success" style="margin-right: 10px" onclick="download(\''+res.responseJSON.data.companyProfile+'\')">View</button>');
		
		$("#supCodeofConductDiv").append('<button type="file" id="download_fileformats_btn"  class="btn btn-success" style="margin-right: 10px" onclick="download(\''+res.responseJSON.data.supCodeofConduct+'\')">View</button>');
		$("#supEsQuestionsDiv").append('<button type="file" id="download_fileformats_btn"  class="btn btn-success" style="margin-right: 10px" onclick="download(\''+res.responseJSON.data.supEsQuestions+'\')">View</button>');
		$("#mainApplicationDiv").append('<button type="file" id="download_fileformats_btn"  class="btn btn-success" style="margin-right: 10px" onclick="download(\''+res.responseJSON.data.mainApplication+'\')">View</button>');

				
		$("#companyLogoDiv").append('<button type="button" class="btn btn-success" style="margin-right: 10px" onclick="viewImage(\'CLimg\',\''+companyID+'\',\''+res.responseJSON.data.supplierName+'\')">View</button>');
	
		$("#viewCat").append('<button type="button" id="viewCatbtn" class="btn btn-success" style="margin-right: 10px" onclick="viewCategories1('+companyID+')">View Categories</button>');

		$("#additionalCats").append('<button type="button" id="addCatbtn" class="btn btn-info" style="margin-right: 10px" onclick="showModal('+companyID+')">Register for Additional Categories</button>');

        });
}


function viewImage(buttonID, companyID, name){
	console.log(buttonID+" "+ companyID+" "+name);
	
	 if(buttonID=="CLimg"){
		 $('#imgLocation').attr('src',globalUrl+'/image/companysupplier/'+companyID+'/cl');
		 $('#mdl_com_name').text("Company Logo");
		 $('#mdl_ii_sup_no').text(name);
	}
	$('#mdl_view_comLogo').modal('toggle');
}


//PDF Download
function download(fileName){
	if(fileName == "null"){
		console.log(fileName);
		
		Swal.fire({
		  type: 'warning',
		  title: 'Not Uploaded',
		  text: 'This file is not uploaded by Supplier',
	//	  footer: '<a href="">Why do I have this issue?</a>'
		})
		
	}else{
	console.log(fileName);
	let filePath = fileName;
	const myArray = filePath.split("/");
	var fileId = myArray[6]
	var fileName = myArray[7]
	const fileNameSplit = fileName.split(".");
	var fileNameSplitForUrl = fileNameSplit[0]
	var fileNameForUrl = fileId +"/"+fileNameSplitForUrl;
	console.log(fileId);
	console.log(fileNameSplitForUrl);
	console.log(fileNameForUrl);
	//let urlHeader = "/tender/download-bidded-tender-files/"+fileNameForUrl;
	//console.log(urlHeader);
	
	var globlelink = sessionStorage.getItem("GlobleUrl");
	console.log(globlelink)
	window.open(globlelink+"/supplier/download-companydetails-view-files/"+fileNameForUrl);
	}
}



var grandTOT = 0;
function viewCategories1(companyID) {
	console.log("viewCategoriesTable "+companyID);
	$('#companyCat_Modal').modal('toggle');
	if (viewCategoriesTable == undefined) {
		console.log("Inside Category Suppliers "+companyID)
		
		viewCategoriesTable = $('#company_view_categories').DataTable({
			processing: true,
			serverSide: true,
			responsive: true,
			ajax: {
				url:globalUrl+"/supplier/company-view-category/"+companyID,
				type:'GET',
				headers: { 'Authorization': 'Basic ' + sessionStorage.getItem("GlobalToken") },
			},
			columns: [
				{"data": "index", className: "text-right"},
				{"data":"eligibleSubCategoryName"},
				{"data":"eligibleCategortName"}, 
			],
			columnDefs: [
        ],
		});
		
	}else {
		viewCategoriesTable.ajax.url(globalUrl+"/supplier/company-view-category/"+companyID).load();
	}
	
	viewCategoriesTable.on( 'xhr', function () {
    var json = viewCategoriesTable.ajax.json();
//  alert( json.data.length +' row(s) were loaded' );
//  alert( json.prices.grandTotal +' Prices Loaded' );
    $('#onetime_fee').text("Grand Total (LKR): "+doCurrencyFormat(json.prices.grandTotal));
    $('#category_fee').text("Cargory Fee (LKR): "+doCurrencyFormat(json.prices.categoryTotal));
    $('#subCargory_total').text("Sub Category Fee (LKR): "+doCurrencyFormat(json.prices.subCategoryTotal));
	});
}



$("body").on('click', '.addproductNow', function(e){
	var url = $(this).attr('data-url');
	var row_index = $(this).closest("tr").index();
	console.log(row_index);
	myDeleteFunction(row_index)
});


var criteriaSet = new Set([]);
var index = Number(0);
$('#one_time_fee').val(currencyFormat(10000));
const onetimefee = 10000;
var grandTottoSend = Number(0);

let comapnyID = 0;
function showModal(comapnyID){
	$('#additionalCategories_Modal').modal('toggle');
	comapnyID = comapnyID;
}


var newTot;
function additionalCategories(catgeoryID){
	console.log("additonalCategoriesTable "+catgeoryID);
	
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
//		tableArray.push( ++index);
		tableArray.push(obj.eligibleCategortID);
		tableArray.push(obj.eligibleCategortName);
		tableArray.push(obj.eligibleCategoryFee);
		tableArray.push(currencyFormat(obj.eligibleCategoryFee));
		addcatTable.row.add(tableArray).draw();
		addcatTable.columns([0,2]).visible(false);
		addcatTable.draw();
		var sum = addcatTable.column(2).data().reduce( (previousValue, currentValue) => parseFloat(previousValue) + parseFloat(currentValue), parseFloat(0));

		console.log(sum);
		const grandTot = parseFloat(sum);
		grandTottoSend = grandTot;
		newTot = grandTot;
//		$('#tot_category_fee').val(currencyFormat(sum));
		$('#grand_total').val(currencyFormat(grandTot));
	}else{
		//alert("Duplicate")
		console.log(criteriaSet); 
	}		
}


$('#addcatTable tbody').on('click', 'button', function() {
	var data = addcatTable.row($(this).parents('tr')).data();
	//alert(data[0] + "'s mark is: " + data[1]);
	console.log(criteriaSet);
	const array = Array.from(criteriaSet);
	console.log(array+" "+data[0]);
	const index = array.indexOf(parseFloat(data[0]));
	console.log(array+ " "+index);
	if (index > -1) { 
		array.splice(index, 1); 
		console.log(array);
		//criteriaSet = null;
		criteriaSet = new Set(array);
		console.log(criteriaSet);
	}
});


$("body").on('change', '#additionalCategory', function(e){	
	 console.log($("#additionalCategory option:selected" ).text());
	 $('#addCategoriesTableDiv').show();
	 console.log(this.value);
	 additionalCategories(this.value);			 		     
});



$('#cat_submit').on('click', function(e) {
	console.log("Clicked submit button");
	
var addcatArray = [];
var data1 = addcatTable.rows().data();
 data1.each(function (value, index) {
//	console.log(`For index ${index}, data value is ${value}`);
    console.log(value[0]+"-"+value[2]);

	var newCategoryObject = {};
		newCategoryObject["catId"] = value[0];
		newCategoryObject["catfee"] = value[2];
//		newCategoryObject["cattot"] = value[2];
		
		addcatArray.push(newCategoryObject);
		
		console.log(JSON.stringify(addcatArray));
		
		var  addcategories = {
			"grandTot" : newTot,
			"addcatArray" : addcatArray,			
		};				
			console.log(JSON.stringify(addcategories));
			
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
			
			var responseCode =  getAsyncDataPOST("/supplier/addnewcategories", addcategories, confirmedCallBack)	
			$(this).prop("disabled", true);
			
			 }
		});						
	});	
});



function confirmedCallBack(responseCode){
	console.log(responseCode);
	$("#cat_submit").prop("disabled",false);
	    
	   if(responseCode.responseJSON!= null & responseCode.responseJSON.code=="00"){
		   formclear();
		   Swal.fire(
				      'Accepted!',
				      'Category has been register successfully.',
				      'success'
				    )		
	   }else{
		   console.log(responseCode.responseJSON);
		   Swal.fire({
				type: 'error',
				title: 'Category register failed',
				text: 'Error occord !',
				footer: '<a href>Supplier Management V1.0</a>'
			});
	   } 	    
}


function formclear(){
	addcatTable.clear().draw();
	$('#additionalCategory').val('');
	$('#grand_total').val('');
}



