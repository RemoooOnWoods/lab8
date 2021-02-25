function initMap() {
	// add your code here
	L.mapquest.key = 'IkhaUIpAbI3xnWCtrWBZIMow5HvJBKvi';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
  		center: [32.87872751824317, -117.2358645447225],
  		layers: L.mapquest.tileLayer('map'),
  		zoom: 12,
  		zoomControl: false
	});

	// Add a marker to the map
	L.marker([32.87872751824317, -117.2358645447225]).addTo(map);
}