const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (base = 5, listar, hasta)=>{
    try {
        let header = "====================================================\n".green
            header += `               T A B L A   D E L   ${base}          \n`. rainbow
            header += "===================================================\n".green;
        
        let salida = "";
        let salidaArchivo = "";
        for(let i=1; i<=hasta; i++){
            salida += `${base} ${'X'.red} ${i} ${'='.blue} ${base*i} \n`;
            salidaArchivo += `${base} X ${i} = ${base*i} \n`;
        }
        dir = './salida';
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir);  
        }
        

        fs.writeFileSync(`${dir}/tabla-${base}.txt`, salidaArchivo) 

        
            
        return listar? header+salida+`El archivo tabla-${base}.txt ha sido creado`:`El archivo tabla-${base}.txt ha sido creado`
    } catch (error) {
        throw error
    }
    
}

const crearArchivo2 = async(base = 5)=>{

}

module.exports = {
    crearArchivo
}
