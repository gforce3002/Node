const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: "Regeneracion",
    
}

//Desestructurando un objeto de la manera tradicional

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;
// console.log(nombre, apellido, poder);

//Desdestructurando un objeto de la manera correcta

const {nombre, apellido, poder} = deadpool
console.log(nombre, apellido, poder);

//Desestructuracion de un objeto como parametros de una funcion
imprimirHeroe = ({nombre, apellido, poder, edad=0})=>{
    console.log(nombre, apellido, poder, edad);
}

imprimirHeroe(deadpool);

//Desestructurando un objeto y solamente tomando un elemento
imprimirHeroe = ({  poder })=>{
    console.log( poder);
}

imprimirHeroe(deadpool);

//Desestructuracion de un array
const Heroes = ['Deadpool','Wolworine', 'Venon']

const [h1, h2, h3] = Heroes
console.log(h1,h2,h3)

//Tomando solo un elemento de la desestructuracion
const [, , hx] = Heroes
console.log(hx)

