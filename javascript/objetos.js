// Eliminar propiedades de un objeto

// delete person.peso;


// iterar sobre los objetos
// var persona = {
//     nombre: "Germán",
//     apellido: "Escobar",
//     edad: 35,
//     estatura: 1.8
//   }

//   for (var llave in persona) {
//     if (persona.hasOwnProperty(llave)) {
//       console.log(persona[llave])
//     }
//   }




// var llaves = Object.keys(persona);
// console.log(llaves);
// for (var i=0; i < llaves.length; i++) {
//   var llave = llaves[i];
//   console.log(persona[llave]);
// }

// // por fin una puta explicacion de this que puedo enternder
// // Los métodos pueden utilizar otras propiedades del objeto utilizando la palabra clave this:

// var person = {
//     name: "Pedro",
//     sayHi: function() {
//       console.log("Hola, me llamo " + this.name);
//     }
// }


// array de objetos

// var products = [
//     { id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"] },
//     { id: 2, name: "Arroz", price: 80, categories: ["familiar", "comida"] },
//     { id: 3, name: "Lavadora", price: 7800, categories: ["electrodomésticos"] }
//   ];
  
//   for (var i=0; i < products.length; i++) {
//     var product = products[i];
//     console.log(product.name);
//     console.log("  Id: " + product.id);
//     console.log("  Precio: " + product.price);
//     console.log("  Categorías: " + product.categories.join(", "));
//   }

var recipe = {
    'leche en polvo':'1 litro',
    'chocolate en barra': '3 barras',
    'azúcar' : '3 gramos',
}

recipe.mixIngredients = function() {
    return('Mezclando los ingredientes ...');
}

// var cantidades = Object.keys(recipe);
// console.log(cantidades);
// for (var i=0; i < cantidades.length; i++) {
//     console.log(cantidades[i])
// }
// console.log('agrega ' recipe.0 );

// for (var llave in recipe) {
//     if (recipe.hasOwnProperty(llave))
//     {
//         console.log('Agrega ' + recipe[llave] + ' de ' + llave)
//     }
// }

console.log(recipe.mixIngredients());