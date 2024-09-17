var globalUrl = "http://localhost:9222";
var globalToken = sessionStorage.getItem("GlobalToken");

//Supplier DIV---

function getFunction(url, token) { // this data param can be removed, edit method call in used places
	console.log(globalUrl + url);
	// alert("First");
//	globalToken = token;
//	alert("get from method :"+token);
//	alert("get from local storage :"+sessionStorage.getItem("GlobalToken"));
	var resData = [ "", "" ];
	if (token == "N") {
//		alert("without token in");
		$.ajax({
			url : globalUrl + url,
			contentType : "application/json",
			type : 'GET',
			dataType : "json",
			async : false,
			complete: function(xhr, textStatus) {
		        console.log("Completed without Token "+xhr.status+" "+textStatus);
		        if(xhr.status=="200"){ 
		        	var getData=xhr.responseJSON;
		        	resData[0]="S";
		        	resData[1]=getData;	
		        }
		        else {
		        	resData[0]="E";
		        	resData[1]=xhr.status;	
		        }
		    },
			success : function(j) { // StatusCode 200 is success On GET

				resData[0] = "S";
				resData[1] = j;

			},
			error : function(e) {
				// alert("error");
				resData[0] = "E";
				resData[1] = e;
				console.log(e);
			}
			
		});
		//console.log(globalUrl + url)

	}else {

//		 alert("with token"+token);
		var tokenNow = sessionStorage.getItem("GlobalToken");
		console.log('Basic '+sessionStorage.getItem("GlobalToken"));

//		$.ajax({
//	         url: "http://192.168.8.100:9099/users/F001",
////	         data: { signature: authHeader },
//	         type: "GET",
//	         beforeSend: function(xhr){xhr.setRequestHeader('Authorization', 'Basic RjAwMTpTYUAxMjM0NTY=');},
//	         xhrFields: {
//	             withCredentials: true
//	         },
//	         success: function(res) { console.log(res); }
//	      });
		
		$.ajax({

			url : globalUrl + url,
			contentType : "application/json",
			async : false,
			headers : {"Authorization" : 'Basic '+globalToken},
			type : 'GET',
			dataType : "json",
			complete: function(xhr, textStatus) {
		        console.log("Completed with Token "+xhr.status+" "+textStatus);
		        console.log(xhr);
		        if(xhr.status=="200"){ 
		        	var getData=xhr.responseJSON;
		        	resData[0]="S";
		        	resData[1]=getData;	
		        	console.log(xhr.responseText)
		        }
		        else {
		        	resData[0]="E";
		        	resData[1]=xhr.status;	
		        }
		    },
//			success : function(j) {
//				// alert("in success in comman 1");
//				resData[0] = "S";
//				resData[1] = j;
//
//				// alert("in success in comman");
//
//				//            
//			},
//			error : function(e) {
//				// alert("in error in comman 1");
//				resData[0] = "E";
//				resData[1] = e;
//				// alert("error");
//				console.log(e);
//			}
		});
		
		
//		  var xhttp = new XMLHttpRequest();
//		  xhttp.onreadystatechange = function() {
//		    if (this.readyState == 4 && this.status == 200) {
//		     console.log('in')
//		    }
//		  };
//		  xhttp.open("GET", "http://192.168.8.100:9099/users/F001", true);
//		  xhttp.setRequestHeader("Authorization", "Basic RjAwMTpTYUAxMjM0NTY=");
//		  xhttp.send();
		
		
		
	}
	// alert("before return-----"+resData[0]);
	return resData;

}
// ======================================================================================================================

/* READ ME FIRST!

 ~ Post Method: Use this method for all future AJAX Post calls in this project
 ~ Parameters: (url, data)
 		url = controller you're trying to call (ex="/user")
 		data = must be JSON format
 ~ resData = response data sending back which is an array, contains
 			 first element as a letter for message and second element for response data
 
 */

function postFunction(url, data) {
//	alert(globalToken);
//	alert(data);
	var resData = "";
	console.log('test')
	$.ajax({
		url : globalUrl + url,
		contentType : "application/json",
		async : false,
		type : 'POST',
		dataType : "json",
		data : JSON.stringify(data),
		headers : {
			'Authorization' : 'Basic ' + sessionStorage.getItem("GlobalToken")
		},
		success : function(res) {
			console.log(res)
			resData = res;
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log(jqXHR.status);
			//console.log(jqXHR.headers);
			//console.log(textStatus);
		//	console.log(errorThrown);

			if (jqXHR.status == "201") {
				resData = "success";
				///alert("Data saved");
			}else if(jqXHR.status == "200"){
				resData = jqXHR;
				console.log(jqXHR)
			}else if(jqXHR.status == "400"){
				resData = jqXHR;
				console.log(jqXHR)
			}

			// alert(textStatus);
			// alert(errorThrown);
			// alert("Error");
		}

	});

	return resData;
}

function putFunction(url, data) {
	//alert(globalToken);
	//alert(data);
	var resData = "";

	$.ajax({
		url : globalUrl + url,
		contentType : "application/json",
		async : false,
		type : 'PUT',
		dataType : "json",
		data : JSON.stringify(data),
		headers : {
			'Authorization' : 'Basic ' + globalToken
		},
		success : function(res) {
			// alert("success");
			console.log("200 - Success "+url+" Status "+ JSON.stringify(data.status));
			resData = "Success";
		},
		error : function(jqXHR, textStatus, errorThrown) {
			console.log(jqXHR.status);
			console.log(textStatus);
			console.log(errorThrown);
			
			console.log(jqXHR.status+" Check Request(URL,DATA) & REST Doc");

			if (jqXHR.status == "500") {
				//alert("Data saved");
				console.log("500 - Check Request(URL,DATA) & REST Doc");
			}else if(jqXHR.status == "0"){
				console.log("401 - Not Authorized");
			}else if(jqXHR.status == "200"){
				//resData = "Success";
			}

			// alert(textStatus);
			// alert(errorThrown);
			// alert("Error");

		}

	});

	return resData;
}

//*********************** move to dashboard.js **** don'nt code dash bord code in here ****


//var user = JSON.parse(sessionStorage.getItem('User'))
//var roleid =user.userRoll.userRoleID
//
//if(roleid==1){ //superuser
//	jQuery("#superuserheader").show();
//	jQuery("#superadmin1").show();
//	jQuery("#admindashcount").show();
//}
//else if(roleid==2){ //company
//	
//	jQuery("#companydashcount").show();
//	jQuery("#companyheader").show();
//	jQuery("#companydashtable1").show();
//	jQuery("#companydashtable2").show();
//	jQuery("#companydashtable3").show();
//	
//	
//}
//else if(roleid==3){//supplier
//	
//	jQuery("#supplierdashcount").show();
//	jQuery("#supplierheader").show();
//	jQuery("#supplierdashtable1").show();
//	jQuery("#supplierdashtable2").show();
//	jQuery("#supplierdashtable3").show();
//	jQuery("#supllierdashtable4").hide();
//}

//alert("test"+roleid);
//console.log(user.userRoll.userRoleID);


function uploadingFiles(url, data, headfile,bodyfile, image,callbackfun) {
	console.log("in upload");
	var reader = new FileReader();
	var resdata="";
	reader.readAsDataURL(headfile);
	console.log('testing------------------')
	reader.onload = function() {
		
		str_file = reader.result;
		console.log(str_file);
		data['file'] = str_file;
		reader.readAsDataURL(image);
		reader.onload = function() {
			str_image = reader.result;
			data['image'] = str_image;
			console.log(data);
			console.log("In body read length----------->"+bodyfile.length == 0);
				if(bodyfile.length != 0){
					reader.readAsDataURL(bodyfile);
					reader.onload = function() {
						str_bodyfile = reader.result;
						data['bodyfile'] = str_bodyfile;
						console.log(data);
						resdata = postFunction(url, data);
						console.log("Retrun Inside");
						callbackfun(resdata);
					}
					}else{
						data['bodyfile'] = "";
						resdata = postFunction(url, data);
					}
				
				}
//			resdata = postFunction(url, data);
		}
	reader.onerror = function(error) {
		console.log('Error: ', error);
	}
	console.log("Retrun Me");

	}

function uploadingFilesOnly(url, data, headfile,bodyfile,callbackfun) {
	console.log("in upload");
	var reader = new FileReader();
	var resdata="";
	reader.readAsDataURL(headfile);
	console.log('testing------------------')
	reader.onload = function() {
		
		str_file = reader.result;
		console.log(str_file);
		data['file'] = str_file;
		if(bodyfile.length != 0){
			reader.readAsDataURL(bodyfile);
			reader.onload = function() {
				str_bodyfile = reader.result;
				data['bodyfile'] = str_bodyfile;
				console.log(data);
				resdata = postFunction(url, data);
				console.log("Retrun Inside"+ resdata);
				callbackfun(resdata);
			}
			}else{
				
				data['bodyfile'] = "";
				resdata = postFunction(url, data);
			}
		}
	reader.onerror = function(error) {
		console.log('Error: ', error);
	}
	console.log("Retrun Me");

	}


function uploadingimageFiles(url, data, logoImage,regFormImg, proofImg) {
	console.log("in upload");
	var reader = new FileReader();
	var resdata="";
	reader.readAsDataURL(logoImage);
	reader.onload = function() {

		str_file = reader.result;
		console.log(str_file);
		data['file'] = str_file;
		reader.readAsDataURL(proofImg);
		reader.onload = function() {
			str_proofImg = reader.result;
			data['proofImg'] = str_proofImg;
			console.log(data);
			console.log("In body read length----------->"+regFormImg.length == 0);
				if(regFormImg.length != 0){
					reader.readAsDataURL(regFormImg);
					reader.onload = function() {
						str_regFormImg = reader.result;
						data['regFormImg'] = str_regFormImg;
						console.log(data);
						resdata = postFunction(url, data);
					}
					}else{
						
						data['regFormImg'] = "";
						resdata = postFunction(url, data);
					}
				
				}
//			resdata = postFunction(url, data);
		}
	reader.onerror = function(error) {
		console.log('uploadingimageFiles Error: ', error);
	}
	}

function downloadFile(url){
	var a = document.createElement('a');
	a.href =globalUrl+ url;
	//a.download = 'V1.csv';
	a.click(function(e){
		e.preventDefault();
	});
	
}


function uploadingPayment(url, data, payment,callbackfun) {
	console.log("in upload");
	var reader = new FileReader();
	var resdata="";
	reader.readAsDataURL(payment);
	
	reader.onload = function() {
		
		str_file = reader.result;
		console.log(str_file);
		data['payment'] = str_file;
		
		console.log('data--------->'+data);
		resdata = postFunction(url, data);
		console.log("Retrun Inside"+ resdata);
		callbackfun(resdata);
		
		}
	reader.onerror = function(error) {
		console.log('Error: ', error);
	}
	console.log("Retrun Me");

	}


function getAsyncData(url,callBackName) {
	
	console.log(globalUrl + url);
		
		$.ajax({

			url : globalUrl + url,
			contentType : "application/json",			
			headers : {"Authorization" : 'Basic '+globalToken},
			type : 'GET',
			dataType : "json",
			complete: function(xhr, textStatus) {
				if (xhr.readyState == 4) {
					 console.log("Completed with Token "+xhr.status+" "+textStatus);
//				        console.log(xhr);
//				        console.log(xhr.responseText);
//				        console.log(xhr.responseJSON);
					 if(callBackName!=null){
						 callBackName(xhr);
					 }
					 
				}         
		    },
		});
}


function getAsyncDataPOST(url,data,callBackName) {
	
	console.log(globalUrl + url);
		
		$.ajax({

			url : globalUrl + url,
			contentType : "application/json",			
			headers : {"Authorization" : 'Basic '+globalToken},
			data : JSON.stringify(data),
			type : 'POST',
			dataType : "json",
			complete: function(xhr, textStatus) {
				if (xhr.readyState == 4) {
					 console.log("Completed with Token "+xhr.status+" "+textStatus);
//				        console.log(xhr);
//				        console.log(xhr.responseText);
//				        console.log(xhr.responseJSON);
					 if (callBackName != null) {
						 callBackName(xhr);
					}
					 
				}         
		    },
		});
}


function getAsyncDataPUT(url,data,callBackName) {
	
	console.log(globalUrl + url);
	console.log('put-data '+JSON.stringify(data));
		
		$.ajax({

			url : globalUrl + url,
			contentType : "application/json",			
			headers : {"Authorization" : 'Basic '+globalToken},
			data : JSON.stringify(data),
			type : 'PUT',
			dataType : "json",
			complete: function(xhr, textStatus) {
				if (xhr.readyState == 4) {
					 console.log("Completed with Token "+xhr.status+" "+textStatus);
//				        console.log(xhr);
//				        console.log(xhr.responseText);
//				        console.log(xhr.responseJSON);
					 if (callBackName != null) {
						 callBackName(xhr);
					}
					 
				}         
		    },
		});
}


// in purpose of creating the log --- Start 





function createLog(location, action, user){
	var user = JSON.parse(sessionStorage.getItem('User'));
	userRoleInBussiness =user.userRoleInBussiness;
	userCompany = user.userCompanyCode;
	
	console.log(location+" "+action);
	
	getAsyncData('/useractivity/addlogentry/'+user.userid+'/roleid/'+user.userRoll.userRoleID+'/location/'+location+'/action/'+action, function(res) {
		console.log(res.responseText);
	});
	
}



// in purpose of creating the log --- End 


function differentialAsync(url, data, file, callbackfun) {

	if (data.length == 0) {
		getAsyncDataPOST(url, data, callbackfun)
	} else {
		for ( let up in file) {
			if (file[up].files.length != 0) {

				let reader = new FileReader();
				reader.readAsDataURL(file[up].files[0]);
				reader.onload = function() {

					file_data = reader.result;
					data[file[up].id] = file_data;

					if (file.length == (parseInt(up) + 1)) {
						getAsyncDataPOST(url, data, callbackfun)
					}
				}

			}else{
				if (file.length == (parseInt(up) + 1)) {
					getAsyncDataPOST(url, data, callbackfun)
				}
			}

		}

	}

}

function putFilesUpload(url, data, file, callbackfun) {

	if (data.length == 0) {
		getAsyncDataPUT(url, data, callbackfun)
	} else {
		for ( let up in file) {
			
			if (file[up].files.length != 0) {
				console.log(file[up].files.length)
				let reader = new FileReader();
				reader.readAsDataURL(file[up].files[0]);
				reader.onload = function() {

					file_data = reader.result;
					data[file[up].id] = file_data;
						console.log(up)
					if (file.length == (parseInt(up) + 1)) {
						console.log((parseInt(up) + 1))
						console.log("commanAjax------------------->>>"+data)
						getAsyncDataPUT(url, data, callbackfun)
					}
				}

			}else{
				if (file.length == (parseInt(up) + 1)) {
					getAsyncDataPUT(url, data, callbackfun)
				}
			}

		}

	}

}


function putFilesUploadSubmitTender(url, data, filesss,callbackfun) {

		
        let file = filesss.files[0]; 
        let fileReader = new FileReader(); 
        fileReader.readAsDataURL(file); 
        fileReader.onload = function() {
	
          //alert(fileReader.result);
		  //alert(JSON.stringify(file));
		  file_data = fileReader.result;
		  data[file.id] = file_data;
		  getAsyncDataPUT(url, data, callbackfun)

        }; 
        fileReader.onerror = function() {
          alert(fileReader.error);
        }; 
    

}

function postFilesUploadNew(url, data, filesss,callbackfun) {

		
        let file = filesss.files[0]; 
        let fileReader = new FileReader(); 
        fileReader.readAsDataURL(file); 
        fileReader.onload = function() {
	
          //alert(fileReader.result);
		  //alert(JSON.stringify(file));
		  file_data = fileReader.result;
		  data[file.id] = file_data;
		  getAsyncDataPOST(url, data, callbackfun)

        }; 
        fileReader.onerror = function() {
          alert(fileReader.error);
        }; 
    

}

/*function sampleFile(thiss){
	let file = thiss.files[0]; 
        let fileReader = new FileReader(); 
        fileReader.readAsText(file); 
        fileReader.onload = function() {
          alert(fileReader.result);
        }; 
        fileReader.onerror = function() {
          alert(fileReader.error);
        }; 
}*/
