const fs = require('fs')

const crearArchivo = async (base = 5)=>{
    try {
        let header = "====================================================\n"
            header += `               T A B L A   D E L  ${base}          \n`
            header += "===================================================\n"
        
        let salida = "";
        for(let i=1; i<=10; i++){
            salida += `${base} X ${i} = ${base*i} \n`;
        }
        
        /* fs.writeFile(`tabla-${tabla}.txt`, salida, (err)=>{
            if(err) throw err

            console.log("El archivo tabla-5.txt ha sido creado")
        }) */

        fs.writeFileSync(`tabla-${base}.txt`, salida) 
            
        return header+salida+`El archivo tabla-${base}.txt ha sido creado`    
    } catch (error) {
        throw error
    }
    
}

const crearArchivo2 = async(base = 5)=>{

}

module.exports = {
    crearArchivo
}
