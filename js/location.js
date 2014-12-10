
 var mapCanvas = document.getElementById('map-canvas');

      function initialize() {
       
        var mapOptions = {
          center: new google.maps.LatLng(lat, lng),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }


      google.maps.event.addDomListener(window, 'load', initialize);


var hashl;

var info = document.getElementsByClassName("info");

var lat = 43.7277739;
var lng = -79.6164443;
info[0].style.display = "block";

function hashChange(i){

	if (i == 1){
		lat = 43.7277739;
		 lng = -79.6164443;
		 initialize();

		 for(var j = 0; j<info.length;j++){
		 	info[j].style.display = "none";
		 }
		 info[i-1].style.display = "block";


		 

	}
	else if (i ==2){
		lat = 43.705578;
		 lng = -79.737571;
		 initialize();
		for(var j = 0; j<info.length;j++){
		 	info[j].style.display = "none";
		 }
		 info[i-1].style.display = "block";
		

	}

	else if (i ==3){
		lat = 43.637612;
		 lng = -79.492386;
		 initialize();
		for(var j = 0; j<info.length;j++){
		 	info[j].style.display = "none";
		 }
		 info[i-1].style.display = "block";

	}

	else if (i ==4){
		lat = 43.597736;
		 lng = -79.656263;
		 initialize();
		 for(var j = 0; j<info.length;j++){
		 	info[j].style.display = "none";
		 }
		 info[i-1].style.display = "block";

	}

}



document.getElementById("hashlinks1").onclick = function(){ hashChange(1); }
document.getElementById("hashlinks2").onclick = function(){hashChange(2);}
document.getElementById("hashlinks3").onclick = function(){hashChange(3);}
document.getElementById("hashlinks4").onclick = function(){hashChange(4);}





