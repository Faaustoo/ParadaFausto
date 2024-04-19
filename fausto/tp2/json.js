function Personajes() {
    const idPersonaje1 = document.getElementById('BuscarID').value;
    const idPersonaje2 = document.getElementById('BuscarID2').value;
    
    fetch(`https://rickandmortyapi.com/api/character/${idPersonaje1},${idPersonaje2}`)
    .then(response => response.json())
    .then(data => {
        const infoPersonaje1 = document.getElementById('infoPersonaje');
        const infoPersonaje2 = document.getElementById('infoPersonaje2');
        if (idPersonaje1!=idPersonaje2){
            infoPersonaje1.innerHTML = `
                <h2>${data[0].name}</h2>
                <p>Género: ${data[0].gender}</p>
                <img src="${data[0].image}" alt="${data[0].name}">
            `;
            infoPersonaje2.innerHTML = `
                <h2>${data[1].name}</h2>
                <p>Género: ${data[1].gender}</p>
                <img src="${data[1].image}" alt="${data[1].name}">
            `;
            verificarGeneros(data[0].gender, data[1].gender);
        } else {
            
                infoPersonaje1.innerHTML = `
                <h2>${data[0].name}</h2>
                <p>Género: ${data[0].gender}</p>
                <img src="${data[0].image}" alt="${data[0].name}">
            `;
            infoPersonaje2.innerHTML = `
                <h2>${data[0].name}</h2>
                <p>Género: ${data[0].gender}</p>
                <img src="${data[0].image}" alt="${data[0].name}">
            `;
            verificarGeneros(data[0].gender, data[0].gender);
            }
        
        verificarGeneros(data[0].gender, data[1].gender);
})
    .catch(error => {
        console.error('Error al obtener los personajes:', error);
    });}

function verificarGeneros(genero1, genero2) {
    const iconoGenero = document.getElementById('iconoGenero');
    if (genero1 === genero2) {
        iconoGenero.innerHTML = '<img src="imagen/img1.png" >';
    } else {
        iconoGenero.innerHTML = '<img src="imagen/img2.png"  >';
    }
}
