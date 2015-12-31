//Variables
var chrome_points = 0;

//Functions
function test_chromepoints() {
	chrome_points = chrome_points + 1;
}

//Get current position
function getLocation() {
	navigator.geolocation.getCurrentPosition(Initialize);
}
//Initialize Mapping
function Initialize(position) {
	//Set the canvas as the Div element
	var mapCanvas = document.getElementById('map');
	//Setup the latitude/longitude pair as the current positon
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	latlon = new google.maps.LatLng(lat, lon);
	//Set map options
	var mapOptions = {
		center: latlon,
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	//Loads the map options into the map
	var map = new google.maps.Map(mapCanvas, mapOptions);
}

//HTML Updates
window.setInterval(function(){
	
	document.getElementById("chrome_points").innerHTML = chrome_points;
	
}, 1000);