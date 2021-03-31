const fs = require('fs');

const updateGuiaDios = async(req, res) =>{
    try {
        // Guardar archivos en el servidor= 

        let archivos= [req.files.upload];    
        //se trae el array de archivos

        for (let i=0; i<archivos.length; ++i){
            
            // Reescribe el archivo
            // fs.rename(archivos[i].path, `./uploads/prueba1.mp4`, () => { 
                fs.rename(archivos[i].path, `uploads/guiaDios.jpg`, () => { 
                console.log("\nFile Renamed!\n"); 
            }); 
         }       
        
        // console.log("Archivo: ",archivos1);
        res.status(200).send({status:'ok', message:'Guia Dios actualzado'})
        // res.send("Todo bien")
    } catch (error) {
        res.status(500).send({estatus:'error', message:error.message})
    }
}

const updateDespertador = async(req, res) =>{
    try {
        // Guardar archivos en el servidor= 

        let archivos= [req.files.upload];    
        //se trae el array de archivos

        for (let i=0; i<archivos.length; ++i){
            
            // Reescribe el archivo
            // fs.rename(archivos[i].path, `./uploads/prueba1.mp4`, () => { 
                fs.rename(archivos[i].path, `uploads/despertador.jpg`, () => { 
                console.log("\nFile Renamed!\n"); 
            }); 
         }       
        
        // console.log("Archivo: ",archivos1);
        res.status(200).send({status:'ok', message:'Despertador actualzado'})
        // res.send("Todo bien")
    } catch (error) {
        res.status(500).send({estatus:'error', message:error.message})
    }
}

const updateReflexiones = async(req, res) =>{
    try {
        // Guardar archivos en el servidor= 

        let archivos= [req.files.upload];    
        //se trae el array de archivos

        for (let i=0; i<archivos.length; ++i){
            
            // Reescribe el archivo
            // fs.rename(archivos[i].path, `./uploads/prueba1.mp4`, () => { 
                fs.rename(archivos[i].path, `uploads/reflexion.jpg`, () => { 
                console.log("\nFile Renamed!\n"); 
            }); 
         }       
        
        // console.log("Archivo: ",archivos1);
        res.status(200).send({status:'ok', message:'Reflexion actualzado'})
        // res.send("Todo bien")
    } catch (error) {
        res.status(500).send({estatus:'error', message:error.message})
    }
}

const getImagenes = async(req, res)=>{
    try {
        //Proceso de envio de datos al servidor
        const file_path = './uploads/prueba1.jpg';

        // let data = fs.open('./uploads/prueba1.mp4');
        let encoded=[];    
        let resultado=[];
        let dataVideo=[];
        
        dataVideo[0] = fs.readFileSync('./uploads/guiaDios.jpg');
        dataVideo[1] = fs.readFileSync('./uploads/despertador.jpg');
        dataVideo[2] = fs.readFileSync('./uploads/reflexion.jpg');

        for(let i=0 ; i< dataVideo.length; i++){
            encoded[i] = dataVideo[i].toString('base64');
             // console.log(encoded);
            resultado[i] = "data:image/jpeg;base64," + encoded[i];
        }

        

        res.status(200).send({resultado});
    } catch (error) {
        res.status(500).send({estatus:'error', message:error.message})
    }
}

module.exports ={
    updateGuiaDios,
    updateDespertador,
    updateReflexiones,
    getImagenes
}