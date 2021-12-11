const inquirer = require('inquirer')
require('colors')

const menuOpt = [
    {
        type:'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: [
            {value:'1', name: `${'1'.green}. Crear tareas`},
            {value:'2', name: `${'2'.green}. Listar tareas`},
            {value:'3', name: `${'3'.green}. Listar tareas completadas`},
            {value:'4', name: `${'4'.green}. Listar tareas pendientes`},
            {value:'5', name: `${'5'.green}. Completar tarea(s)`},
            {value:'6', name: `${'6'.green}. Borrar tareas`},
            {value:'0', name: `${'0'.green}. Salir`},
        ]
    }
]

const optionPause = [
    {
        type: 'input',
        name: 'enter',
        message: `Presione ${'enter'.green} para continuar `
    }
]

const leerInput = async (message)=>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if(value.length ===0){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const {desc}= await inquirer.prompt(question);
    return desc;
}


const inquirerMenu = async()=>{
    console.clear();
    console.log("===============================".green)
    console.log("     seleccione una opcion     ".white)
    console.log("===============================\n".green)

    const {opcion} = await inquirer.prompt(menuOpt)
    return opcion
}

const pause = async()=>{
    console.log('\n');
    await inquirer.prompt(optionPause)
}

module.exports ={
    inquirerMenu,
    pause,
    leerInput
}