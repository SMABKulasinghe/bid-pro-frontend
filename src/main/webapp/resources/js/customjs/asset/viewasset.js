//navigate("userprofile");

function navigate(location){
	if (CurrentLocation != location) {
		CurrentLocation = location;
		$('#loadDiv').load('../portal/'+location);
		
		
		console.log(CurrentLocation);
		if(CurrentLocation == "viewsoftwareasset"){
			$(".card-subtitle").text("Software Asset");
			$("#titleAssetSW").text("Software Asset");
			console.log("Inside Software asset");
		}else if(CurrentLocation == "motorvehicleasset"){
			$("#titleAsset").text("Motor Vehicals");
			
		}else if(CurrentLocation == "electronicasset"){
			$("#titleAsset").text("Electronics");
			
		}else if(CurrentLocation == "furnitureasset"){
			$("#titleAsset").text("Furniture");
			
		}
		
	}
	
}
