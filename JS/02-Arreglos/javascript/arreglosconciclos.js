const paises = ["Mexico","Nigeria","Vietnam","Colombia"];
const inverso = [];

console.log(paises[0]);
console.log(paises[1]);

//for(inicio; condicion; incremento/decremento)

for(let i = 0; i < paises.length;i++){
    console.log(paises[i]);
}

paises.forEach((pais)=>console.log(pais));

///
for(let i=10; i>=0; i--){
    console.log(i);
    inverso.push(i);
    console.log(inverso);

}//for