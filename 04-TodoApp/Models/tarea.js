const {v4: uuidv4} = require('uuid') //Renombramos una constante de un required
class Tarea{
    id = '';
    desc = '';
    compleadoEn = null;
    
    constructor(desc){
        this.id = uuidv4();
        this.desc = desc;
    }
}

module.exports = Tarea;