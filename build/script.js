mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhYmFkMjIiLCJhIjoiY2s5M3kwczFhMDAyMjNtb2JqNnA1MDIzdyJ9.9fcn_MbnztSQeU5vSX4rPg';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

function successLocation(position) {
    console.log(position)
    setUpMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setUpMap([82.7792, 21.1290])
}

function setUpMap(center) {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 3
    });

    var nav = new mapboxgl.NavigationControl()
    map.addControl(nav, 'top-right')

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });

    map.addControl(directions, 'top-left');
}
