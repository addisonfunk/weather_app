$(document).ready(function() {
	var lat, lon, api_url; 
	if ("geolocation" in navigator) {
		$('#showTemp').on('click', function() {
			navigator.geolocation.getCurrentPosition(gotLocation); 

			function gotLocation(position) {
				lat = position.coords.latitude; // get latitude
				lon = position.coords.longitude; // get longitude
				console.log(position);

				api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
                  lat + '&lon=' + 
                  lon + '&units=metric&appid=44db6a862fba0b067b1930da0d769e98';

                  $.ajax({
                  	url: api_url,
                  	method: 'GET',
                  	success: function(data) {
                  		var tempr = data.main.temp;
                  		$('#result').text(tempr + '°'); 
                  	}
                  })
			}
		});
	} else {
		alert("Your browser doesn't support geolocation!"); 
	}
});