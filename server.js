const express = require('express');
const cors = require("cors")
const fs = require("fs");
const path = require('path');
const paths= require('node:path')
const app = express();
app.use(express.json(),cors());
port = 4080;
app.listen(port, () => {
    console.log(`Port::${port}`);
});



app.post('/ex1', (req, res) => {
    function llista(carpeta) {
        const arxius = fs.readdirSync(carpeta);
        arxius.forEach((arxiu) => {
            const rutaarxiu = path.join(carpeta, arxiu);
            if (fs.statSync(rutaarxiu).isDirectory()) {
                var ruta= path.resolve(rutaarxiu)
                console.log(ruta)
                llista(rutaarxiu);
            } else {
                var resultat = path.resolve(rutaarxiu)
                console.log(resultat)
            }
        });
        // const directori = 'C:\\Users\\Dani Gelabert\\Desktop\\UF1_ExamenAaD';

    }
    llista('C:\\Users\\Dani Gelabert\\Desktop\\UF1_ExamenAaD');

})

app.post('/ex2', (req, res) => {
    const readableStream=fs.createReadStream("C:\\Users\\Dani Gelabert\\Desktop\\UF1_ExamenAaD\\Documents\\FitxerOrigen.txt","utf-8");
    const writeableStream = fs.createWriteStream("C:\\Users\\Dani Gelabert\\Desktop\\UF1_ExamenAaD\\Documents\\Docs1\\FitxerDesti.txt", {flags:'a+'})
    readableStream.pipe(writeableStream)
    console.log("Escrit")
});


app.post('/ex3', (req, res) => {
    const ruta='C:\\Users\\Dani Gelabert\\Desktop\\UF1_ExamenAaD\\Imatges\\Imatge2.png';
    const fitxer=fs.readFile(ruta,
    (err,buf) =>{
        if (err) console.log("Al loro, no hi ha res per llegir!") //exercici 4
        else{
            console.log(paths.basename(ruta))
            console.log(Buffer.alloc(8192, buf));
        }
    })
})

