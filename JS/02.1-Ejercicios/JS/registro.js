/*Crea un programa que RECIBA un NUMERO N(cantidad de registros a procesar)
a traves de un PROMPT, y muestre en consola 1 MENSAJE por cada REGISTRO procesado de la siguiente manera:

*PROCESO 1 REGISTRADO...
*PROCESO N REGISTRADO...

Cuando se hayn completado todos los registro, MOSTRAR en consola:
!TODOS LOS PROCESSOS HAN SIDO REGISTRADOS CON EXITO*/

function cantidadRegistros(numero){
    numero = parseFloat(prompt("Cuantos registros deseas ingresar"));
    console.log(`Ingresaras: ${numero} registro(s)`);
    return numero;
}

function matrizRegistros(totalRegistro){
    for(let i = 1; i<=totalRegistro;i++){
        console.log(`Proceso ${i} registrado`);
    }
    console.log("Todos los porocesos han sido registrados");
}

////////////////////////////Llamada de funciones
let totalRegistro = cantidadRegistros();
matrizRegistros(totalRegistro);

