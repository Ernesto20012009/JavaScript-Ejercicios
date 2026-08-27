
function verificarPassword(){
    let intentos = 3;
    do{
        const password = "admin123";
        let ingresar = prompt("Ingresa tu password: ");
        if (ingresar === password){
            console.log("Acceso concedido");
            break; // <--- 1. Te saca del ciclo de inmediato al acertar
        } else {
            console.log("Error intenta otra vez");
            intentos--;
        }
    } while(intentos > 0); // Recomendación: usa > 0 por seguridad

    //Validacion
    if(intentos === 0){
        console.log("Cuenta bloqueada");
    }
}

verificarPassword();