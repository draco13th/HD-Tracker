//Variables
var chrome_points = 0;
var test_loc = document.getElementById("demo");

//Functions
function test_chromepoints() {
	chrome_points = chrome_points + 1;
}

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		test_loc.innerHTML = "Geolocation is not supported by this browser.";
	}
}

function showPosition(position) {
	test_loc.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

//HTML Updates
window.setInterval(function(){
	
	document.getElementById("chrome_points").innerHTML = chrome_points;
	
}, 1000);