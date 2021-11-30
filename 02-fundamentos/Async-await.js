const empleados = [
    {
        id:1,
        empleado:"Jorge"
    },
    {
        id:2,
        empleado:"Jesus"
    },
    {
        id:3,
        empleado:"Daniel"
    },
    {
        id:4,
        empleado:"Jonathan"
    }
]

const salarios = [
    {
        id:1,
        salario:3700
    },
    {
        id:2,
        salario:4500
    },
    {
        id:3,
        salario:4500
    },
]

const id = 4;
const getEmpleado = (id)=>{
    return new Promise((resolve, reject)=>{
        const empleado = empleados.find(e=> e.id === id)
        empleado ? resolve(empleado): reject(`El empleado con el id ${id} no existe`);
       })
}

const getSalario = (id)=>{
    return new Promise ((resolve, reject)=>{
        const result = salarios.find(e=>e.id === id)
        result ? resolve(result.salario): reject(`El salario para el empleado ${id} no existe`)
    })
}


const getinfousuario =  async (id) =>{
    try{
        const empleado = await(getEmpleado(id))
        const salario = await(getSalario(id))
        return `El salario del empleado ${empleado.empleado} es de : ${salario}`
    }catch(error){
        throw error
    }
    
}

getinfousuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))