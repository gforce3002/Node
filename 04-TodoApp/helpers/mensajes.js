const { resolve } = require('path');

require('colors');

const mostrarMenu = ()=>{
    return new Promise( resolve => {
        console.clear()
        console.log("===============================".green)
        console.log("     seleccione una opcion     ".green)
        console.log("===============================\n".green)


        console.log(`${"1.".magenta} Crear tarea`)
        console.log(`${"2.".magenta} Listar tarea`)
        console.log(`${"3.".magenta} Listar tarea completadas`)
        console.log(`${"4.".magenta} Listar tarea pendientes`)
        console.log(`${"5.".magenta} Completar tarea(s)`)
        console.log(`${"6.".magenta} Borrar tarea`)
        console.log(`${"0.".magenta} Salir`)

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Seleccione una opcion: ', (opc)=>{
            readline.close();
            resolve(opc)
        })
    })
    
}

const pausa = ()=>{
    return new Promise(resolve =>{
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`Presione ${'Enter'.green} para continuar`, (opc)=>{
            readline.close();
            resolve(opc)
        })
    })
    
}

module.exports = {
    mostrarMenu,
    pausa
}