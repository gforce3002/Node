const {crearArchivo} = require('./helpers/multiplicar') 
console.clear();

const tabla= 3
//console.log(process.argv)
const [,,arg3='base=5'] = process.argv
const [, base=5] = arg3.split('=')

console.log(base)
crearArchivo(base)
    .then(resp => console.log(resp))
    .catch(error => console.log(error))

