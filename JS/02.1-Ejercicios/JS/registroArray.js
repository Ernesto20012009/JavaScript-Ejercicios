
function cantidadElementos(){
 let cantidad = Number(prompt("Cuantos registros desesas hacer: "));
 return cantidad;
}
function mostrarElementos(total){
    for(let i= 1; i<=total;i++){
        console.log("elemento "+i);
    }
}

function crearMatriz(totalRegistro){
    //creamos la matriz vacia
    const matriz=[];
    //1.-Guardar los procesos en la matriz
    for (let i = 1; i<=totalRegistro; i++){
        matriz.push(`Proceso ${i} Registrado`);
    }
    return matriz; //Guardamos el valor de la matriz
}
function mostrarMatriz(matriz){
    //2.- Recorremos el arreglo ya creado en la funcion crearMatriz
    for(let i=0; i<matriz.length;i++){
        console.log(matriz[i]);
    }
    console.log("!Todos los procesos han sido registrados con exito");
}

total = cantidadElementos();// se ejecuta una sola vez y guarda el valor
mostrarElementos(total);// muestra los elementos usando ese valor

////Array/////////
let misRegistros = crearMatriz(total);
mostrarMatriz(misRegistros);