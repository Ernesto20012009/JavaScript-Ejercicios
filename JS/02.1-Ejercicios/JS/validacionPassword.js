/**Dado un arreglo de passwords, recorre cada una de ellas y muestra en consola 
 * si cumple con la regla:
 * El password contiene al menos 8 caracteres
 * 
 * EJEMPLO: 
 * arreglo = ["admin","clave1234","pass","supersegura123"];
 * 
 * Password 1 no es valida
 * Password 2 es valida
 * ...
  */
 function password(){
    const arreglo = ["admin","clave1234","pass","supersegura123"];
    for(let i = 0; i<=3; i++){
        console.log(arreglo[i].length);
        if (arreglo[i].length>=8){
            console.log("Tu password "+i +" cumple con las condicinoes");
        }else {
             console.log("Tu password "+i+" NO cumple con las condiciones");
        }
    }

}

password();
 