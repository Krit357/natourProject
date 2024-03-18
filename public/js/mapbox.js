const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1Ijoic211Z3NtaWciLCJhIjoiY2x0d2p1ZWh4MDBhajJxcGVlZ28xMXRoeSJ9.Porj2ApNYYHBVPK15pLgbw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/jonasschmedtmann/cjvi9q8jd04mi1cpgmg7ev3dy',
  scrollZoom: false,
  // center: [-118.113491, 34.111745],
  // zoom: 10,
  // interactive: false
});
