const fs = require('fs')
console.clear();
console.log("====================================================")
console.log("               T A B L A   D E L   5                ")
console.log("====================================================")
const tabla= 4
let salida = "";
for(let i=1; i<=10; i++){
    salida += `${tabla} X ${i} = ${tabla*i} \n`;
}
console.log(salida)
fs.writeFile(`tabla-${tabla}.txt`, salida, (err)=>{
    if(err) throw err

    console.log("El archivo tabla-5.txt ha sido creado")
})

