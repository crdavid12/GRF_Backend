const guiaDios = require('../../modules/v1/guiaDios-module');

const createGuia = async (req, res) =>{
    try {
        //Se almacenan las variables del body
        const {url, titulo, descripcion} = req.body;

        //Se verifica  los registros con publicacion true
        const guia= await guiaDios.find({publicacion:true})
        //se modifica la publicacion a false
        if(guia[0]){
            await guiaDios.findByIdAndUpdate(guia[0]._id,{
                url: guia[0].url,
                titulo: guia[0].titulo,
                descripcion: guia[0].descripcion,
                publicacion : false
            });
        }
        //Se crea la Guia, publicacion inicia con default en true
        await guiaDios.create({
            url,
            titulo,
            descripcion
        });

        res.status(200).send({status:'ok', message:'Guia creada'});
    } catch (error) {
        console.log(error);

        res.status(500).send({status:'error', message:error.message})
    }
}

const getAllGuia = async (req, res)=>{
    try {
        const guias = await guiaDios.find();

        res.status(200).send(guias)


    } catch (error) {
        console.log(error);
        res.status(500).send({status:'error', message:error.message});
    }
};

const getId = async (req, res)=>{
    try {
        
        const guia = await guiaDios.findById(req.params.id);

        res.status(200).send(guia)

    } catch (error) {
        console.log(error);

        res.status(500).send({status:'error', message:error.message});
    }
}

const getPublicacion = async (req, res)=>{
    try {
        const guia = await guiaDios.find({publicacion:true})

        res.status(200).send(guia)
        return guia;
    } catch (error) {
        console.log(error);
        res.status(500)
        .send({status:'error', message:error.message})
    }
}

const deleteGuia= async (req, res)=>{
    try {

        const result =  await guiaDios.findById(req.params.id)
        console.log(result);

        //verificamos si la publicacion es true
        if(result.publicacion){
            //se elimina el registro
            await guiaDios.findByIdAndDelete(req.params.id);

            //consultamos todas las publicaciones false
            const guias = await guiaDios.find({publicacion:false});
            //almacenamos la ultima
            const guia = guias[guias.length - 1];
            //actualizamos el ultio registro con publicacion true
            await guiaDios.findByIdAndUpdate(guia._id,{
            // url,
            // titulo,
            // descripcion,
            publicacion : true
        });
        }

        await guiaDios.findByIdAndDelete(req.params.id);
 
        console.log("Guia eliminada");

        res.status(200).send({status:'ok', message:'Guia eliminada'})
        
    } catch (error) {
        console.log("error");
        res.status(500).send({status:'Error', message:error.message})
    }
}


const updateGuia = async (req, res)=>{
    try {
        const{url, titulo, descripcion, publicacion, _id} = req.body;
        console.log(req.body.url);
        //buscamos el registro publicacion true
        const result = await guiaDios.find({publicacion:true})

        //se valida si el Id ingresado es igual al del primero get de busqueda para realizar
        //el cambio de la publicacion a false
        if(result[0]._id == req.body._id){
            console.log("es igual");
            //actualizamos datos
            await guiaDios.findByIdAndUpdate(req.body._id,{
            url,
            titulo,
            descripcion,
            publicacion 
            })
        }else{
            console.log("no es igual");
            await guiaDios.findByIdAndUpdate(req.body._id,{
                url,
                titulo,
                descripcion,
                publicacion 
            });
            //almacenamos en una variable la modificacion realizada
            const guiaDiosResul = await guiaDios.findById(req.body._id)

            //se verifica si la publicacion es true modificamos a false el registro co publicacion true anterior
            if(guiaDiosResul.publicacion == true){
                await guiaDios.findByIdAndUpdate(result[0]._id,{
                
                    publicacion : false
                });
            }
            
        }
        console.log("Guia modificado");

        res.status(200).send({status:'OK', message:'Guia modificado'});    

    } catch (error) {
        console.log(error);
        res.status(500).send({status:'error', message:error.message})
    }
}

module.exports ={
    createGuia,
    getAllGuia,
    getId,
    deleteGuia,
    updateGuia,
    getPublicacion
}