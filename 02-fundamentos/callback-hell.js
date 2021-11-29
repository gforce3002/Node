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
//const getEmpleado = (id)=> empleados.find(e => e.id === id);

const getEmpleado = (id, callback)=>{
    const empleado = empleados.find(e=> e.id === id)
    empleado? callback(null, empleado):callback(`El empleado con el id ${id} no existe`);
}

const getSalario = (id, callback)=>{
    const salario = salarios.find(e => e.id === id)
    salario? callback(null, salario):callback(`El salario para el empleado ${id} no existe`)
}

getEmpleado(id, (err, empleado)=>{
   if(err){
        return console.log(err)
   }else{
       console.log(empleado)
   }
})

getSalario(id, (err, salario)=>{
    if(err){
        return console.log(err)
    }
    console.log(salario)
})