/*$array = ['pera','manzana','frutilla','banana','naranja']

/*mostrando un elemento del array directamente con la posicion*/
/*console.log($array[1])

/*recorriendo el array y mostrandolo completo(primera forma)*/
/*for(i=0; i<$array.length; i++){
    console.log($array[i])
} 
 */


let frutas = ['pera','manzana','frutilla','banana','naranja']
/*recorriendo array con foreach (segunda forma) */
frutas.forEach(fruta => {
    console.log(fruta);
});

/*  recorriendo array (tercera forma) */
for(const fruta of frutas){
    if (fruta=='manzana') {
    console.log(fruta)
    }
}