const principal = require('../../modules/v1/principal-module')
const fs = require('fs');

const createvideo = async (req, res)=>{

    try {
        const{Urlvideo}=req.body;
        //Se reemplaza la url en el id del registro de la bases de datos
        await principal.findByIdAndUpdate("60417a633371ee23884947e5",{
            Urlvideo
        })

        res.status(200).send({status:'ok', message:'Video publicado'});

    //Guardar archivos en el servidor= 

    // let archivos=req.files.upload;
    // // se trae el array de archivos

    // for (let i=0; i<archivos.length; ++i){
    //     // Reescribe el archivo
    //     // fs.rename(archivos[i].path, `./uploads/prueba1.mp4`, () => { 
    //         fs.rename(archivos[i].path, `../../../estudio/angular/GRF/`, () => { 
    //         console.log("\nFile Renamed!\n"); 
    //     }); 
    // }    
    // console.log("Archivo: ",archivos);
    // // await principal.create({
    // //     video:"/uploads/prueba1.mp4"
    // // });
    } catch (error) {
        res.status(500).send({status:'error', message:error.message})
    }
    
}

const getVideo = async (req, res)=>{
    try {
        let videoPrincipal =  await principal.find()

        res.status(200).send(videoPrincipal)
    } catch (error) {
        res.status(500).send({status:'error', message:error.message});
    }
}

module.exports ={
    createvideo,
    getVideo,
}