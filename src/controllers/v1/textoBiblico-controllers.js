const principal = require('../../modules/v1/principal-module');
const fs = require('fs');

const createTextoBiblico = async(req, res) =>{
    try {
        const{titulo,descripcion, imagen, } = req.body;

        await principal.create({
            titulo,
            descripcion,
            
        })

        res.status(200).send({status:'ok', message:'Texto Biblico creado'})

    } catch (error) {
        res.status(500).send({estatus:'error', message:error.message})
    }
}

const updateTextoBiblicoImagen = async(req, res) =>{
    try {
        // Guardar archivos en el servidor= 

        let archivos= [req.files.upload];    
        //se trae el array de archivos

        for (let i=0; i<archivos.length; ++i){
            
            // Reescribe el archivo
            // fs.rename(archivos[i].path, `./uploads/prueba1.mp4`, () => { 
                fs.rename(archivos[i].path, `uploads/textoBiblico.jpg`, () => { 
                console.log("\nFile Renamed!\n"); 
            }); 
         }       
        
        // console.log("Archivo: ",archivos1);
        res.status(200).send({status:'ok', message:'Texto Biblico actualzado'})
        // res.send("Todo bien")

    } catch (error) {
        res.status(500).send({estatus:'error', message:error.message})
    }
}

const update = async(req, res) =>{
    try {
        const{titulo, descripcion, imagen} = req.body;

        console.log(req.body);

        if(titulo !== ""){
            await principal.findByIdAndUpdate(_id="60480c97d3fea2534022085b",{
                titulo : titulo
            })
        }
        if(descripcion !== ""){
            await principal.findByIdAndUpdate(_id="60480c97d3fea2534022085b",{
                descripcion
            })
        }

        res.status(200).send({status:'ok', message:'Texto Biblico actualzado'})

    } catch (error) {
        res.status(500).send({estatus:'error', message:error.message})
    }
}

const getTextoBiblico = async(req, res) =>{
    try {
        const resultado = await principal.find({_id:"60480c97d3fea2534022085b"});
        res.status(200).send(resultado)
    } catch (error) {
        res.status(500).send({estatus:'error', message:error.message})
    }
}

const getTextoBiblicoImagen = async(req, res) =>{
    try {
        //Proceso de envio de datos al servidor
        const file_path = './uploads/prueba1.jpg';
        
            // let data = fs.open('./uploads/prueba1.mp4');
            let datavideo = fs.readFileSync('./uploads/textoBiblico.jpg');
            const encoded = datavideo.toString('base64');
            // console.log(encoded);
            
            const resultado = "data:image/jpeg;base64," + encoded
            res.status(200).send({resultado});
        } catch (error) {
            res.status(500).send({status:'error', message:error.message});
        }
}

module.exports ={
    createTextoBiblico,
    updateTextoBiblicoImagen,
    update,
    getTextoBiblico,
    getTextoBiblicoImagen
}