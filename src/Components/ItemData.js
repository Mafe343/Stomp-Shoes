// ESTE ES UN JS QUE ME SIRVE COMO GUIA

export const Users = [
    { id: 1, name:"Diego Alejandro", price:'$300'},
    { id: 2, name:"Huawei", price:'$600'},
    { id: 3, name:"Renault", price:'$3300'},
    { id: 4, name:"Dorito", price:'$30'},
    { id: 5, name:"Gasolina", price:'$120'}  
]

//USAR MAP
// Primera manera 
const infoUser = Users.map(function(Dato) {
    return Dato.price;
});

console.log(infoUser + " UNO");

// Segunda manera

const InfoUsuarios = Users.map((datos) => datos.name);

console.log(InfoUsuarios + " DOS");

// Tercera forma con indice

const InfoUsuarios3 = Users.map ((datoDiferente, indice) => `El nombre del usuario es: ${datoDiferente.name} y su número de indice es: ${indice} TRES`);

console.log(InfoUsuarios3 + " TRES");