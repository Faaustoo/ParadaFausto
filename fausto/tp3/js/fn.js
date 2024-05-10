let valores1 = [];
let valores2 = [];

function capture(){

    const numero = document.getElementById('input1').value;
    const numeroEntero = parseInt(numero);

    if (valores1.length<4) {
        if (numeroEntero<=0 || numeroEntero>827 || isNaN(numeroEntero)){
            alert('Ingresar numero mayor a 0 y menor a 827');
        } else if (valores1.includes(numeroEntero)) {
            alert('Numero ya ingresado');
            } 
            else{
                valores1.push(numeroEntero);
                console.log(valores1);
                document.getElementById('input1').value= '';
                }
    }
    if (valores1.length==3){
        document.getElementById('boton1').disabled = true ;
        document.getElementById('input1').disabled = true ;
    }
    if (valores1.length ==3 && valores2.length==3){
        buscarpersonajes();  
    }
}
function capturedos(){

    const numero1 =document.getElementById('input2').value;
    const numeroEntero2 = parseInt(numero1);
    
    if (valores2.length<4) {
        if (numeroEntero2<0 || numeroEntero2>827 || isNaN(numeroEntero2)){
            alert('Ingresar numero mayor a 0 y menor a 827');
            } else if (valores1.includes(numeroEntero2)|| valores2.includes(numeroEntero2)){
                alert('Numero ya ingresado')
                } 
                else{
                    valores2.push(numeroEntero2);
                    console.log(valores2);
                    document.getElementById('input2').value= '';
                    }
    }
    if (valores2.length==3){
        document.getElementById('boton2').disabled = true ;
        document.getElementById('input2').disabled = true ;
    }
    if (valores1.length ==3 && valores2.length==3){
        buscarpersonajes();   
    }

}
function buscarpersonajes() {
    fetch(`https://rickandmortyapi.com/api/character/${valores1},${valores2}`)
        .then(res => res.json())
        .then(data => {
            const informacion1 = document.getElementById('info-boton1');
            const informacion2 = document.getElementById('info-boton2');
            console.log(data);
            data.forEach(personaje => {
                if (valores1.includes(personaje.id)) {
                    informacion1.innerHTML += `
                    <img src="${personaje.image}">
                    `;
                } else if (valores2.includes(personaje.id)) {
                    informacion2.innerHTML +=`
                    <img src="${personaje.image}">
                    `;
                }
            });
        })
        .catch(error => {
            document.getElementById('error').innerHTML = 'Error: ' + error;
        });
}



