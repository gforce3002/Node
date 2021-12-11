
const fs = require('fs');


const guardarDB = (data)=>{
    const archivo = './db/data.json';
    fs.writeFileSync(archivo, JSON.stringify(data)) //JSON.stringify(data))
}

module.exports = {
    guardarDB
}