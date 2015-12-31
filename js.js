//Variables
var chrome_points = 0;

//Functions
function test_chromepoints() {
	chrome_points = chrome_points + 1;
}

//Snag the user's location data
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		document.getElementById("error").innerHTML = "Geolocation not supported in this browser :("
	}
}

//Display the user's location data
function showPosition(position) {
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	latlon = new google.maps.LatLng(lat, lon)
	mapholder = document.getElementById('mapholder')
	mapholder.style.height = "250px";
	mapholder.style.width = "500px";
	
	var myOptions = {
	center:latlon,zoom:14,
	mapTypeId:google.maps.MapTypeId.ROADMAP,
	mapTypeControl:false,
	navigationControlOptions:{style:google.maps.NavigationControLStyle.SMALL}
	}
	
	var map = new google.maps.Map(document.getElementById("mapholder"), myOptions);
	var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
}

//If there's an error, explain it
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            document.getElementById("error").innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            document.getElementById("error").innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            document.getElementById("error").innerHTML = "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            document.getElementById("error").innerHTML = "An unknown error occurred."
            break;
    }
}

//HTML Updates
window.setInterval(function(){
	
	document.getElementById("chrome_points").innerHTML = chrome_points;
	
}, 1000);