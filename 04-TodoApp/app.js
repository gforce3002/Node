require('colors')

const { mostrarMenu, pausa } =  require('./helpers/mensajes');
const { inquirerMenu, pause, leerInput } = require('./helpers/inquirer');
const Tarea = require('./Models/tarea');
const Tareas = require('./Models/tareas');
const { guardarDB } = require('./helpers/guadarArchivo');



console.clear();

const main = async ()=>{
    let opt = '';
    const tareas = new Tareas();
    do{
       opt =  await inquirerMenu()
       switch(opt){
           case '1':
            const desc = await leerInput("Descripcion: ")
            tareas.crearTarea(desc)
           break
           case '2':
            console.log(tareas.listadoArr)
           break;
       }
       //guardarDB(tareas.listadoArr)
       await pause();
    }while(opt !== '0')
}

main();