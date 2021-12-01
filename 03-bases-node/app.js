const colors = require('colors')
const {crearArchivo} = require('./helpers/multiplicar') 
const argv = require('./config/yargs')

console.clear();

console.log(argv)
console.log('la base es ', argv.base, )
crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(resp => console.log(resp))
    .catch(error => console.log(error))

