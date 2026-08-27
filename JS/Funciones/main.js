//FUNCIONES NORMALES
function velocidadObjeto(){
    let distancia = Number(prompt("Escriba la distancia: (m)"));
    let tiempo = Number(prompt("Escriba el tiempo: (s)"));
    let velocidad = distancia / tiempo;
    return velocidad;
}
function volumenEsfera(radio){
     return volumen = (4/3)*Math.PI*Math.pow(radio,3);
}
///////////////////////////////////////////////////////////////////////////////

//FUNCIONES FLECHA
const velocidadObjetoFlecha = (distancia,tiempo)=>distancia / tiempo;
const volumenEsferaFlecha = (radio) => (4 / 3) * Math.PI * Math.pow(radio, 3); 

/////////////////////////////////////////////////////////////////////////////////////

// Ejemplo 1: Usando la función comun/normal (con prompt) / sin prompt
let mostrarVelocidad = velocidadObjeto();
let mostrarVolumen = volumenEsfera(5);
alert(`La velocidad del objeto es de ${mostrarVelocidad} m/s`);
alert(`El volumen de la esfera es de: ${mostrarVolumen} cm^3`);
// Ejemplo 2: Usando la funcion flecha (con parametros)
let mostrarVelocidadFlecha = velocidadObjetoFlecha(100,10);
let mostrarVolumenFlecha = volumenEsferaFlecha (10);
alert(`la velocidad del objeto con la funcion tipo flecha es de ${mostrarVelocidadFlecha} m/s`);
alert(`El volumen de la esfera con la funcion tipo flecha es de ${mostrarVolumenFlecha} cm^3`);