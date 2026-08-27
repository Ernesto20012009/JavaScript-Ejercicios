
//funciones
function totalcalificaciones(){
    const calificaciones = [4.3,5.0,4.1,3.1,4.0];
     console.log(calificaciones);
     return calificaciones;
}
function promediarCalificaciones(total){
    let suma = 0;
    for(let i =0; i < total.length; i++){
        suma += total[i]; 
    }
    let promedio = suma/total.length;
    return promedio;
}
function mostrarPromedio(resultado){
    console.log(`El promedio es de ${resultado.toFixed(1)}`);
}

//Llamada de funciones
let total = totalcalificaciones();
let resultado = promediarCalificaciones(total);
mostrarPromedio(resultado);