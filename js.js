//Variables
var chrome_points = 0;

//Functions
function test_chromepoints() {
	chrome_points = chrome_points + 1;
}
//HTML Updates
window.setInterval(function(){
	
	document.getElementById("chrome_points").innerHTML = chrome_points;
	
}, 1000);