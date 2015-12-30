//Variables
var chrome_points = 0;

//Functions
function test_chromepoints() {
	chrome_points = chrome_points + 1;
}

//Snag the user's location data
function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		document.getElementById("location_data").innerHTML = "Geolocation not supported in this browser :("
	}
}

//Display the user's location data
function showPosition(position) {
	document.getElementById("location_data").innerHTML = "Latitude: " + position.coords.latitude + " | " + "Longitude: " + position.coords.longitude;
}

//HTML Updates
window.setInterval(function(){
	
	document.getElementById("chrome_points").innerHTML = chrome_points;
	
}, 1000);