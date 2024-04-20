function BuscarPersonaje() {
    const  Url = 'https://randomuser.me/api/'
    fetch(Url)
    .then (response => response.json())
    .then (data => {
        const infoPersonaje = document.getElementById('infoPersonaje');
        console.log(data);
        infoPersonaje.innerHTML = `
        <h2>Nombre</h2>
        <p> ${data.results[0].name.first} ${data.results[0].name.last}<p>
        <h2>Ubicacion</h2>
        <p>Longitud: ${data.results[0].location.coordinates.latitude}</p>
        <p>Latitud: ${data.results[0].location.coordinates.longitude}</p>
        <img src="${data.results[0].picture.large}" >
        `;
        map(data.results[0].location.coordinates.latitude, data.results[0].location.coordinates.longitude);
        document.getElementById('infoFieldset').style.display = 'block'

        container = L.DomUtil.get('map');
        if (container != null) {
            container._leaflet_id = null;
        } 
    })
    .catch(error => {
    console.error('Error al obtener los personajes:', error);
    });
}


function map(latitude,longitude) {
    var map = L.map('map').setView([latitude,longitude], 5);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);

        var marker = L.marker([latitude,longitude]).addTo(map);
}
    

