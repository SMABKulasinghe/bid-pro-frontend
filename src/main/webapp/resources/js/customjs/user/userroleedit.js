console.log("Redesign");
var userTable;
jQuery(document).ready(function($) {
	$("#userTableDiv").hide();
	$("#clickUserIDButton").hide();

	

	$('#acceptTerms').on('change', function() {

		

		if ($(this).prop('checked') === true) {

			if ($(this).attr('value') == "Yes") {

				$("#userTableDiv").show();

			}

		} else {

			$('#userTableDiv').hide();
			console.log("Hide Table Div Here")
		}
	});
});