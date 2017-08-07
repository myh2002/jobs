var markers = [];

function getSearchResults(b) {
	removeMarkers(markers);
  var lat1 = b.f.b;
  var lat2 = b.f.f;
  var lat_diff = lat2-lat1;
  var lng1 = b.b.b;
  var lng2 = b.b.f;
  var lng_diff = lng2-lng1;
  var icon_img = 'https://maps.gstatic.com/intl/en_us/mapfiles/markers2/measle_blue.png';
  generateResults(20);
  
  for(var j = 0; j < 10; j++) {
    var newLat = lat1 + lat_diff*Math.random();
    var newLng = lng1 + lng_diff*Math.random();
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(newLat,newLng),
      icon: icon_img
    });
    markers.push(marker);
  }
  plotMarkers(markers);
}

function plotMarkers(m) {
	for(var i = 0; i < m.length; i++) {
  	m[i].setMap(map);
  }
}

function removeMarkers(m) {
	console.log(m);
	for(var i = 0; i < m.length; i++) {
  	m[i].setMap(null);
  }
  markers = [];
}