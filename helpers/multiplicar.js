const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        
        let salida, consola = '';
        
        for (let i = 1; i <= hasta ; i++) {
            const resultado = base * i;
            salida += `${base} X ${i} = ${resultado}\n`;
            consola += `${base} ${'X'.red} ${i} ${'='.red} ${resultado}\n`;
        }
        
        if(listar){
            console.log('=================================='.green);
            console.log('           TABLA DEL'.green, colors.blue(base));
            console.log('=================================='.green);    
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    
        return `tabla-${base} creada`.red;
        
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}