//scope es un concepto muy importante  SCOPE = ALCANCE
/* El alcance (scope) de una variable se refiere a las partes de mi codigo donde puedo o NO puedo acceder,
leer o modificar una vairble.
Puedo acceder a una variable despues de su declaracion.

Existen 2 tipos de scope
1.- GLOBAL -> la variable puede ser accedida en cualquier parte del programa
2.- LOCAL -> por ejemplo, cuando declaramos una varible dentro de una funcion.*/
alert("Archivo scope.js");
//SCOPE GLOBAL: puedes acceder en cualquier parte del programa
let nombre = "Neto";
nombre = "Ernesto";//SCOPE GLOBAL
console.log(nombre); //SCOPE GLOBAL

//////////FUNCIONES//////////////////
function imprimirMayus(nombre){
    //FUNCION PARA IMPRIMIR SOLO MAYUSCULAS
    console.log(nombre.toUpperCase());
}

/////////////LLAMADA DE FUNCIONES///////////////////
imprimirMayus(nombre);
let num1=11;
//Scope local: solo se puee acceder en el bloque de codigo donde se declaro

function sumar(){
    console.log(num1);
    let num1 = 5;// SCOPE LOCAL
    let num2=10; //SCOPE LOCAL
    num2 = 20;
    console.log("La suma es: "+(num1+num2));
}
 sumar();