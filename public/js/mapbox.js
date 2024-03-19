export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic211Z3NtaWciLCJhIjoiY2x0d2p1ZWh4MDBhajJxcGVlZ28xMXRoeSJ9.Porj2ApNYYHBVPK15pLgbw';

  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v11', // style URL
    scrollZoom: false,
    // center: [-118.11745, 34.111745], // starting position [lng, lat]
    // zoom: 9, // starting zoom
    // interactive: false,
  });
  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((locations) => {
    //Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    //Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(locations.coordinates)
      .addTo(map);
    //add popup
    new mapboxgl.Popup({
      offset: 40,
    })
      .setLngLat(locations.coordinates)
      .setHTML(
        `<p>Day ${locations.day} Description  ${locations.description}</p>`,
      )
      .addTo(map);

    //Extend map bound to includ location
    bounds.extend(locations.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 200,
    },
  });
};
