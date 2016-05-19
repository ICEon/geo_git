// JavaScript Document
$(document).ready(function(e) {
 document.addEventListener("deviceready", onDeviceReady, false);
 function onDeviceReady() {
	 
	function onSuccess(position) {
    alert ("dentro");
    $('#localizacion').html ( 'Latitude: '  + position.coords.latitude      + '<br />' +
                        'Longitude: ' + position.coords.longitude     + '<br />' +
                        '<hr />'      + element.innerHTML);
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}

// Options: throw an error if no update is received every 30 seconds.
//
var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });

		}
 
});