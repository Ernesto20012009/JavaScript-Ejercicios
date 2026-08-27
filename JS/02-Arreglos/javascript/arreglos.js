//ARRAYS

/* 
Los elementos dentro de un arreglo tienen una realcion entre si

Los elementos dentro de un arreglo usan el mismo tipo de dato

Un arreglo tiene longitud y posiciones.
*/

// Como declarar un arreglo
const colores = ["Rojo","Verde","Azul","Amarillo"];
const numerosPares = [0,2,4,6,8,10];
const validaciones = [true, true, true, false];
const nulo = [null, null, null];

const matriz = [[1,2,3],
                [4,5,6],
                [7,8,9]];

const canciones = [{
    nombre: "cancion1",
    duracion: 1.44
},
  {nombre: "cancion2",
    duracion: 4.41
},
  {nombre: "cancion3",
    duracion: 5.27
}];

// Como conocer la longitud de un arreglo
console.log(colores.length);

//Mostrar un elemento dentro de mi arerglo en consola
console.log(colores[3]);

//Modificar un elemento dentro del arreglo
colores[3] = "Morado";
console.log(colores[3]);

console.log(colores);
console.log(matriz);

//posicion de arerglos dentro de un arreglo
console.log(matriz[2][1]);

///
console.log(canciones);
console.log(canciones[0]);