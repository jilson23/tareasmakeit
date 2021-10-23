// recorrer una cadena e imprimirla en la consola
// var str = "Hola Mundo";

// for (var i = 0; i < str.length; i ++) {
//   console.log(str[i]);
// }

// partir una cadena
// var partida = "Hola mundo".split("")
// console.log(partida)

// el metodo split recibe el parametro por el cual se quiere partir la cadena, en este caso el espacio, pero puede ser cualquier caracter   
// var partida = "Hola mundo".split(" ")
// console.log(partida)


// join() es igual que split pero en vez de separar une, por default si se omite el caracter para unir el programa pone ,

// var unida = ["Hola", "mundo"].join(" ")
// console.log(unida)

// utilidades
/*
"Hola".toLowerCase()
"Hola".toUpperCase()


"Hola Mundo".startsWith("Hola") // analiza el string y retorna un boleano
"Hola Mundo".endsWith("Mundo")

"Hola Mundo".substr(0, 4) //obtener una porcion del string
"Hola Mundo".substr(5) // si se omite el segundo parametro, extrae hasta el final de la cadena
"Bienvenido!".substring(4, 6) // similar a substr pero el segundo parametro es hasta donde se va a extraer la cadena
"Hola Mundo".replace("Mundo", "Germán")
"Hola Mundo".includes("Hola") // validacion
*/


// RETOS

// function countingEs(cadena) {
//     let contador = 0;
//     for (let index = 0; index < cadena.length; index++) {
//         const element = cadena[index];
//         if(element === 'e'){
//             contador++
//         }
//     }
//     return contador;
// }

// console.log(countingEs("Estoy ejercitándome los miércoles y jueves") === 6);  // true
// console.log(countingEs("Eeeeh!, que alegría verlos amigos mios")  === 6); // true
// console.log(countingEs("Ejemplares son las personas de este hermoso pueblo")  === 8); // true
// console.log(countingEs("Ahora qué?") === 0); // true
// console.log(countingEs("Los elefantes son enormes") === 5)

// function message(arreglo) {
//     return arreglo.join(" ");
// }
// console.log(message(["Estoy", "aprendiendo", "Java", "Script"])); // Estoy aprendiendoJavaScript!
// console.log(message(["El", "método", "join", "me", "permite", "unir", "elementos"])); //  El método join me permite unir elementos
// console.log(message(["Java", "Script", "es", "muy", "útil"])) //JavaScript es muy útil



// function generatePassword(cadena) {
//     var cadena = cadena.toLowerCase();
//     var password = '';
//     for (i in cadena)
//     {
//         let char = cadena[i];
//         if(char === ' ')
//         {
//             char = ''; 
//         }
//         else if(char === 'a')
//         {
//             char = '4';    
//         }
//         else if(char === 'e')
//         {
//             char = '3';    
//         }
//         else if(char === 'i')
//         {
//             char = '1';    
//         }
//         else if(char === 'o')
//         {
//             char = '0';    
//         }
//         password += char;
//     }
//     return password;
// }


// console.log(generatePassword("Hola")); // "h0l4"
// console.log(generatePassword("esta es una prueba")); // "3st43sun4pru3b4"
// console.log(generatePassword("")); // ""


function capitalizar(cadena) {
    cadena = cadena.split(" ");
    // var cadenamayuscula;
    for( i in cadena)
    {
        var char = cadena[i].split('');
        char[0] = char[0].toUpperCase()
        cadena[i] = char.join('');
    }
    cadena = cadena.join(' ');
    return cadena;

}
console.log(capitalizar("pedro perez"));
console.log(capitalizar("make it real"));