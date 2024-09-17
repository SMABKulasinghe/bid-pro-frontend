var user = JSON.parse(sessionStorage.getItem('User'))
	var loggedUserID = sessionStorage.getItem('loggedUserID');
	var roleid =user.userRoll.userRoleID
	var userCompany = user.userCompanyCode;
	var loggeduserID = user.userid;

	console.table(user.userRoll.options);
	console.table(user.userRoll);
	console.table(user);
	
	
$('#user_name_profile_view').text(user.username);
$('#user_ap_name').text(user.username);
$('#user_cr_name').text(user.username);
$('#company_name_profile_view').text(user.mmiddlenname);
$('#user_id_profile_view').text(user.userid);
$('#user_type').text(user.username);
$('#user_email_view').text(user.email);
$('#user_phone_view').text(user.email);
$('#user_address_view').text(user.email);



//$('#company_name').text(user.username);
$('#company_name').val(user.mmiddlenname);
$('#user_id').val(user.userid);
$('#user_name').val(user.username);
$('#user_type').val(user.userRoll.userRoleName);
$('#user_creation_date').val(new Date(user.createdDateTime).toDateString());
$('#user_expire_date').val(new Date(user.expireDate).toDateString());
$('#user_password_expire_date').val(new Date(user.expireDate).toDateString());



$('#createdDateTime').text(new Date(user.createdDateTime).toDateString());
$('#approvedDateTime').text(new Date(user.createdDateTime).toDateString());
$('#user_expiry_view').text(new Date(user.expireDate).toDateString());


var diffMs = (new Date(user.expireDate) - new Date());
var diffDays = Math.floor(diffMs / 86400000);
console.log(diffDays);

$('#user_remaining_dates_view').text(diffDays);


var diffMs = ( new Date() - new Date(user.createdDateTime));
var diffDays = Math.floor(diffMs / 86400000);
console.log(diffDays);

$('#user_created_before').html('<i class="fa fa-clock-o"></i> '+ diffDays +' days ago');

var diffMs = ( new Date() - new Date(user.createdDateTime));
var diffDays = Math.floor(diffMs / 86400000);
console.log(diffDays);

$('#user_approved_before').html('<i class="fa fa-clock-o"></i> '+ diffDays +' days ago');



$('#user_creation_date_view').text(getDateFormat(user.createdDateTime));
$('#user_expire_date_view').text(getDateFormat(user.expireDate));
$('#user_password_expire_date_view').text(getDateFormat(user.expireDate));


function getDateFormat(date){
	let current_datetime = new Date(date)
	let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
	console.log(formatted_date)
	return formatted_date;
}

function navigate(location){
	if (CurrentLocation != location) {
		CurrentLocation = location;
		$('#loadDiv').load('../portal/'+location);
	}
	
}


$('#loadProfileBtn').on('click', function(){
	console.log("Profile More Clicked");
	//$('#loadDiv').load('../portal/userprofile');
	navigate("userprofile")
	console.log("user.userCompanyCode "+user.companyCode)
	getAsyncData("/company/"+user.companyCode, function(res) {
		console.log(res);
		var address1 = res.responseJSON.scaddress1;
		var address2 = res.responseJSON.scaddress2;
		var address3 = res.responseJSON.scaddress3;
		$("#user_address_view").text(address1+" "+address2+" "+address3);
		
		$("#use_company_phone").text(res.responseJSON.scphoneno1);
		$("#user_email_address").text(user.email);
		
		$('#abc_frame').attr('src', res.responseJSON.scemailbusinesshead);
	
});
	
});


function navigate(location){
	if (CurrentLocation != location) {
		CurrentLocation = location;
		$('#loadDiv').load('../portal/'+location);
		
	}
	
}

/*$('#access_Table').append("<tr><td>1</td><td>Thomas</td></tr>");*/

addRowsToAccessTable();
function addRowsToAccessTable(){
	console.log("Yes");
	
	for (var i = 0; i < user.userRoll.options.length; i++) {
		var menu_status = "";
		var menu_status_color = "";
		
		var menu_sclass_color = "";
		var percentage = "10%";
		if(user.userRoll.options[i].status == "3"){
			menu_status = "Active";		
			menu_status_color = "green";
		}else{
			menu_status = "Deactivated";
			menu_status_color = "red";
		}
		
		if(user.userRoll.options[i].userRoleOptionsCode == "6000"){
			menu_sclass_color = "success";
			percentage = "75%";			
		}else if(user.userRoll.options[i].userRoleOptionsCode == "1000"){
			menu_sclass_color = "warning";
			percentage = "35%";	
		}else if(user.userRoll.options[i].userRoleOptionsCode == "0000"){
			menu_sclass_color = "info";
			percentage = "85%";	
		}
		
	var mm = '<tr><td>1.</td></tr>';
	var markup = '<tr>'
	+'<td>'+(i+1)+'</td>'
	+'<td>'+user.userRoll.options[i].userRoleOptionsName+'</td>'
	+'<td>'
		+'<div class="progress progress-xs">'
			+'<div class="progress-bar progress-bar-'+menu_sclass_color+'" style="width: '+percentage+'"></div>'
		+'</div>'
	+'</td>'
	+'<td><span class="badge bg-'+menu_status_color+'">'+menu_status+'</span></td>'
	+'</tr>'
	//console.log("Yes "+mm);
	
	
	
	if(user.userRoll.options[i].museroptionstype == "M"){
		$(markup).appendTo($("#pageaccess"));
	}else{
		$(markup).appendTo($("#pageaccess_bellow"));
	}
	
	
	}
	
}


$('#tab_settings_uploaded_profile_image').on('change', function (e) {

	var fileName = e.target.files[0].name;
	$('#tab_settings_uploaded_profile_image_lbl').text('The file "' + fileName + '" has selected.')
});


$('#activityTab').on('click', function(){
	console.log("activity-- Clicked");
	
	
	let fromDate = '02-02-2020';
	let toDate = '04-02-2020';
	
	let companyId = user.userCompanyCode;
	//let roleid = userRoleInBussiness;
	fromDate = fromDate.replace(/[^a-zA-Z0-9]/g,'-');
	toDate = toDate.replace(/[^a-zA-Z0-9]/g,'-');
	
	let type = "ceb";
	let userCode = "ceb";
	let activityCode ="Login";
	console.log(fromDate+" to "+toDate);
	
	
	var pp =  "/useractivity/getlogentry/from/"+fromDate+"/to/"+toDate+"/type/"+type+"/user/"+userCode+"/action/"+activityCode
	console.log(pp);
	
	getAsyncData(pp, function(res) {
		console.log(res);
		
	});
		
});


