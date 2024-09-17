$(document).ready(function() {
$('#submit_button').prop("disabled",true);
$('#tenderDetailsDiv').hide();



});
	
	$('#tenderno').select2({
    });

 getAsyncData('/tender/submitted', function(res) {
        console.log(res);
        console.log(res.responseJSON);

          for (let item of res.responseJSON) {
              $('#tenderno').append(new Option(item.bidno+" - "+ item.tendername, item.trnderid))
        }
    });
    
 
/*	$("body").on('change', '#bidno', function(e){
	console.log($(this).val());	
});

$('#tenderno').on('change', function(selectedTenderID) {
		console.log("Selected -- "+selectedTenderID);	
*/
$("body").on('change', '#tenderno', function(){
    console.log($(this).val())
//	console.log("Selected tenderId -- "+tenderno);	
		
	let tenderno = $(this).val();
     getAsyncData('/tender/financial-response/'+tenderno, function(res) {
        console.log(res);
        console.log(res.responseJSON);	
        console.log(res.responseJSON.data.CategortName);	
        console.log(res.responseJSON.fieldList);	
        $('#tender_name').val(res.responseJSON.data.tendername);
        $('#tender_description').val(res.responseJSON.data.tenderdesc);
        $('#cat').val(res.responseJSON.data.CategortName);
        $('#esub').val(res.responseJSON.data.eligibleSubcatName);
        $('#vender_id').val(res.responseJSON.data.vendorId);
        $('#rfp_file').val(res.responseJSON.data.fileName);
        $('#rfp_No').val(res.responseJSON.data.rfpNo);
        
    	
		$("#CapexFieldArray input").remove();
		$("#CapexFieldArray label").remove();
		$("#CapexFieldArray div").remove();
		
		$("#OppexFieldArray input").remove();
		$("#OppexFieldArray label").remove();
		$("#OppexFieldArray div").remove();

        for(let i=0; i<res.responseJSON.fieldList.length; i++){
	
			if(res.responseJSON.fieldList[i].isCappex == "Yes"){
				let inputComp = "<div class='form-group row cappexParent'>" +
					"<label for='amount' class='col-sm-2 control-label'> " + res.responseJSON.fieldList[i].decription + " </label>" +
					"<div class='col-sm-4 cappex_cost'>" +
					"<input id='" + res.responseJSON.fieldList[i].financialCodeId + "' name='amount' type='number'" +
					"class='form-control inputItems' style='text-align:right'>" +
					"</div>" +
					
					"<div class='col-sm-4 cappex_dest'>" +
					"<input id='cappex_descrip'" + "Cappex_des" + res.responseJSON.fieldList[i].financialCodeId + "' name='description' placeholder='Enter Description' type='text'" +
					"class='form-control inputItemDescriptionsCapex'>" +
					"</div>"
			   
				"</div>";
				
				$('#CapexFieldArray').append(inputComp);
				
			}else{
				let inputListOppex = "<div class='form-group row opexParent'>" +
					"<label for='amount' class='col-sm-3 control-label'> " + res.responseJSON.fieldList[i].decription + " </label>" +
					"<div class='col-sm-4 cost'>" +
					"<input id='oppex_cost " + res.responseJSON.fieldList[i].financialCodeId + "' name='amount' type='number'" +
					"class='form-control inputItemsOppex' style='text-align:right'>" +
					"</div>" +
					
					"<div class='col-sm-4 dest'>" +
					"<input id='oppex_descrip "+res.responseJSON.fieldList[i].financialCodeId+"' name='description' placeholder='Enter Description' type='text'" +
					"class='form-control inputItemDescriptionsOppex''>" +
					"</div>"
			   	
				"</div>";
				
				$('#OppexFieldArray').append(inputListOppex);

			}
	
		}
        }); 	
        
        $('#tenderDetailsDiv').show();	
});



$("body").on('focusout', '.inputItems', function(){
	console.log(this.value);
});


var cappexsubtotal = 0;
var opexsubtotal = 0;
function getOPPEXTotal (nmArray){
	var total = parseFloat(0);
	nmArray.forEach(function(num){
    total += parseFloat(num);
    console.log(total);
    opexsubtotal = total;
   
});
	
	 $('#capex_sub_total').val(opexsubtotal);		
}

function getCAPPEXTotal (nmArray){
	var total = parseFloat(0);
	nmArray.forEach(function(num){
    total += parseFloat(num);
    console.log(total);
    cappexsubtotal = total;
    
});
	$('#sub_total').val(cappexsubtotal);
		
}

var allItems;
$('#confirm_button_fr').on('click', function() {
	//console.log("confirm_button");
	const myArray = [];
	const myArray2 = [];
	const capexNumbersArray = [];
	subtotal = 0;
//	var myArray = [];
	/*var tt = $("#OppexFieldArray :input").val();
	console.log(tt);*/
	
	$.each($('#OppexFieldArray div.form-group').children(), function(){ 
		//console.log($(this).find('.cost').val());
		//console.log($(this).find('.dest').val());
		
		$.each($('#OppexFieldArray div.form-group div.row').children(), function(){ 
			console.log("INPUT--> "+$(this).attr('id') +" --> "+ $(this).val());
		});
		
	});
		
//		var myArray = [];
		var myDestArray = [];
		var myIDList = [];
		var OppexItemList = [];
		$.each($('.opexParent div.cost :input'), function() {
			const currentID = $(this).val();
			//console.log("value" + currentID);
			
			myArray.push($(this).val());
			myIDList.push($(this).attr('id'));
			
		});
		
		$.each($('.opexParent div.dest :input'), function() {
			const currentID = $(this).val();
			console.log("value" + currentID);
			
			myDestArray.push($(this).val());
			
		});
		
		console.log(myDestArray);
		console.log(myArray);
		console.log(myIDList);
		
		for(i =0; i < myIDList.length; i++){
				var itemObject = {};
				itemObject["cappex"] = "No";
				itemObject["cost_decription"] = myDestArray[i];
				itemObject["ID"] = myIDList[i].split(" ")[1];
				itemObject["cost"] = myArray[i];
				console.log(itemObject);
				OppexItemList.push(itemObject);
		}		

	$.each($('#CapexFieldArray div.form-group').children(), function(){ 
		
		$.each($('#CapexFieldArray div.form-group div.row').children(), function(){ 
			console.log("INPUT cappex--> "+$(this).attr('id') +" --> "+ $(this).val());
		});
		
	});
	
	
		var capexArray = [];
		var myDestArray = [];
		var myIDList = [];
		var CappexItemList = [];
		$.each($('.cappexParent div.cappex_cost :input'), function() {
			const currentID = $(this).val();
			
			myArray2.push($(this).val());

            capexArray.push($(this).val());
			myIDList.push($(this).attr('id'));
			
			
			});
		
		$.each($('.cappexParent div.cappex_dest :input'), function() {
			const currentID = $(this).val();
			console.log("value" + currentID);
			
			myDestArray.push($(this).val());
			
		});
		
		console.log(myDestArray);
		console.log(capexArray);
		console.log(myIDList);
		
		for(i =0; i < myIDList.length; i++){
				var itemObject = {};
				itemObject["cappex"] = "Yes";
				itemObject["cost_decription"] = myDestArray[i];
				itemObject["ID"] = myIDList[i];
				itemObject["cost"] = myArray2[i];
				console.log(itemObject);
				CappexItemList.push(itemObject);
		}
		
		

	


/*			
$.each($('#CapexFieldArray div.form-group div.cappex_dest').children(), function(){ 
		console.log("ID dest--> "+$(this).attr('id') +" --> "+ $(this).val());
	});
	
	$.each($('#CapexFieldArray div.form-group div.cappex_cost').children(), function(){ 
    //Here you can ask for the id of the object: $(this).attr('id');
    console.log("ID --> "+$(this).attr('id'));

	// change to capex
	//console.log($('#CapexFieldArray div.form-group div.cappex_cost').children());
	//$.each($('#CapexFieldArray div.form-group div.col-sm-4').children(), function(){ 
    //Here you can ask for the id of the object: $(this).attr('id');
     var value = $(this).attr('id') +" --> "+ $(this).val();
    console.log(value);
    if(!value==""){
		capexNumbersArray.push(this.value);
		
		var itemObject = {};
		itemObject["cappex"] = "Yes";
		itemObject["ID"] = this.id;
		itemObject["cost"] = this.value;
	    itemObject["cost_decription"] =$(this).attr('id') +" --> "+ $(cappex_descrip).val();
		items.push(itemObject);
		
		console.log(itemObject);
	}else{
		//console.log("Empty value")
	}
	});
	*/
	console.log(myArray);


	getOPPEXTotal(myArray);
	getCAPPEXTotal(capexArray);
	$('#grand_total').val(parseFloat(opexsubtotal+cappexsubtotal));
	console.log(parseFloat(opexsubtotal+cappexsubtotal))
	
	
	
	$('#submit_button').prop("disabled",false);
	
	allItems = OppexItemList.concat(CappexItemList);
    console.log(allItems)

});





/*
$("body").on('change', '#amount', function(){
	
	total= 0;
	total+= parseInt($(this).val());
	
	 console.log($(this).val())

	let summation= ($(this).val());
	summation="<div class='form-group row'>"+
						"<label for='summation' class='col-sm-2 control-label'> ' Total ' </label>"+
						"<div class='col-sm-4'>"+
							"<input id='summation' name='summation' type='summation'"+
								"class='form-control'>"+
						"</div>"+
					"</div>";
			$('#total').append(summation);

	});
*/

function changeClassUpload(hashtag) {
	if ($(hashtag).val().length > 0) {
		$(hashtag).parent().parent().parent().addClass('has-success')
		$(hashtag).parent().parent().parent().removeClass('has-error')
	} else {
		$(hashtag).parent().parent().parent().addClass('has-error')
		$(hashtag).parent().parent().parent().removeClass('has-success')
	}

} 

$('#upload_doc').on('focusout', function() {
	changeClassUpload('#upload_doc');
});

	
	
function fileValidationDoc() {
            var fileInput =
                document.getElementById('upload_doc');
             
            var filePath = fileInput.value;
         
            // Allowing file type
            var allowedExtensions =
                    /(\.pdf)$/i;

			//var allowedExtensionsPdf = /()$/i;
             
            if (!allowedExtensions.exec(filePath)) {
				Swal.fire({
					type: 'error',
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

	
//console.log(JSON.stringify(items));

$('#submit_button').on('click', function() {
	//$('#confirm_button').click();
	
	var status = 0;
	//var getSelectedValue = document.querySelector( 'input[name="currency_type"]:checked');   
	/*var getSelectedValue = $('input[name="currency_type"]:checked').val();   
	console.log(getSelectedValue);
	if(getSelectedValue == undefined) {   
        
		Swal.fire(
			'Missing',
			'Please check the Currency!',
			'warning'
		);
	}*/
	
	var checkBox1 = document.getElementById("radio_btn_1");
	var checkBox2 = document.getElementById("radio_btn_2");
	
	if (checkBox1.checked == false || checkBox2.checked == false){
		alert("Select Currency")
	} 
	
	if ($('#tenderno').val().length == 0) {
		status += 1;
		$('#tenderno').parent().parent().addClass('has-error')
	}


	if ($('#comment').val().length == 0) {
		status += 1;
		$('#comment').parent().parent().addClass('has-error')
	}
	
	
	console.log('Clicked');
	
	

	if (status != 0) {
		Swal.fire(
			'Missing',
			'Please check the required fields!',
			'warning'
		);

	} else {
		console.log('All Fine');
		console.log($('input[name="currency_type"]:checked').val());

		var tendersub = {

			"tenderID": $('#tenderno').val(),
			"currency": $('input[name="currency_type"]:checked').val(),
			"comment": $('#comment').val(),
			"items" : allItems, 		
			
					};
					

		console.log(JSON.stringify(tendersub));

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
				console.log("result");
				
		/*
				var responseCode = getAsyncDataPOST("/tender/values",tendersub, confirmedCallBack)
				//$(this).prop("disabled", true);
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
		*/		
		
		var responseCode = differentialAsync("/tender/values", tendersub, [$('#upload_doc')[0]], confirmedCallBack)
			//	$(this).prop("disabled", true);
				
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
			
		});

	}

});
	
	function confirmedCallBack(responseCode) {
	console.log(responseCode);
	$("#submit_button").prop("disabled", false);


	if (responseCode.responseText != null & responseCode.responseText == "Success") {
		formclear();
		Swal.fire(
			'Success',
			'Financial response has been successfully submitted.',
			'success'
		)
		// call file upload method
		location.reload();
	} else if(responseCode.responseText != null & responseCode.responseText == "Already submited"){ 
		Swal.fire(
			'Already Submited',
			'Financial response has been already submitted.',
			'info'
		)
	} else if(responseCode.responseText != null & responseCode.responseText == "TenderExpired"){ 
		Swal.fire(
			'Tender Expired',
			'Financial response has been Fails.',
			'info'
		)
	}else{
		console.log(responseCode.responseText);
		Swal.fire({
			type: 'error',
			title: 'Failed',
			text: 'Error occured !',
			footer: '<a href>Supplier Management V1.0</a>'
		});
	}

}

function formclear() {
	
	$('#amount').val('');
	$('#amount_usd').val('');
	$('#comment').val('');
	
	}
	
	
