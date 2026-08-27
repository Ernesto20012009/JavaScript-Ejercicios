const colores = ["Rojo","Verde","Azul","Amarillo"];
const numerosPares = [0,2,4,6,8,10];
const personas = ["Ana","Pablo","Mauricio","Juana","Ana","Ana"];

//AGREGAR ELEMENTOS

//push -> Agrega un elemento al final de la array
colores.push("Cafe");
console.log(colores);

//unshift -> Agrega un elemento al inicio del array
colores.unshift("Violeta");
console.log(colores);

//pop -> Elimina el ultimo elemento del array
colores.pop();
console.log(colores);

//shift -> Elimina el primer elemento del array
colores.shift();
colores.shift();
console.log(colores);
/*
//METODOS ITERATIVOS

//forEach -> Ejecuta una operacion sobre todos los elemetos del array
//Sintaxis similar a una funcion comun
colores.forEach(function (element){
    console.log(element.toUpperCase());
});

//Funcion flecha aplicada a arrays con forEach
personas.forEach((persona) => console.log(persona.toUpperCase()));*/


/*
//Metodo map -> Hace lo mimsmo que forEach, pero devuelve ujn arreglo nuevo

const numerosImpares = numerosPares.map((numero)=> numero+1);
console.log(numerosImpares);*/


//Metodo filter -> Evalua cada elemento con una condicion y guarda cada elemento que cumpla con esa condicion en un arreglo nuevo
//arreglo.metodo(()+> instrucciones); 
const filtro = personas.filter((persona)=> persona === "Ana" );
 console.log(filtro);
 console.log("Total de veces que se repite Ana: "+filtro.length);