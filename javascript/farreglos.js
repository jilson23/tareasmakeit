// var array = ["Pedro"];
// array.push("Germán"); // ["Pedro", "Germán"]
// array.push("Diana");

// var array = ["Pedro", "Germán", "Diana"];
// array.splice(1, 0, "nik");

// var array = ["Pedro", "Germán", "Diana"];
// array.splice(1, 1); para eliminar un elemento del indice 1 en adelante


// let array = ["Simón", "Natalia", "Nayib", "Diana", "Germán"]

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element); 
// }

// let array = [1, 2, 3, 4, 5];
// elemAtIndexOne = array[1]
// elemAtIndexThree = array[3]

// let mensaje = `Los elementos a imprimir son ${elemAtIndexOne} y ${elemAtIndexThree}`

// console.log(mensaje);

// let array = [ "Primero", "Segundo", "Tercero", "Cuarto"];
// array.push('Soy el último elemento');

// for (const i in array) {
//     const element = array[i]
//     console.log(element);
// }



// var arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];
// var newArray = ["Quinto", "Sexto"];

// for (const i in newArray) {
//     const elemento = newArray[i]
//     // arr.push(elemento);
//     // arr.unshift(elemento);
//     arr.splice(-1, 0, elemento);
// }

// for (const i in arr) {
//     const elemento = arr[i]
//     console.log(elemento);
// }

//esa era la solucion de make it real, lo que hicieron fue quitar el ultimo elemento, agregar los nuevos y al final poner el ultimo
// array.splice(posicion, howmany, item1, ....., itemX)
// var arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];
// var newArray = ["Quinto", "Sexto"];
// var elem = arr.splice(4, 1)[0];
// console.log(elem, arr);


// var ages = [12, 3, 5, 44, 18, 2, 55, 26];

// for (const i in ages) {
//     const elemento = ages[i]
//     if(elemento >= 18){
//         console.log(elemento);
//     }
// }