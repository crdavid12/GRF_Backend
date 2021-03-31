const reflexiones = require('../../modules/v1/reflexiones-modules')

const createReflexion = async (req, res) =>{
    try {
        //Se almacenan las variables del body
        const {url, titulo, descripcion} = req.body;

        //Se verifica  los registros con publicacion true
        const reflexion= await reflexiones.find({publicacion:true})
        //se modifica la publicacion a false
        if(reflexion[0]){
            await reflexiones.findByIdAndUpdate(reflexion[0]._id,{
                url: reflexion[0].url,
                titulo: reflexion[0].titulo,
                descripcion: reflexion[0].descripcion,
                publicacion : false
            });
        }
        //Se crea la Guia, publicacion inicia con default en true
        await reflexiones.create({
            url,
            titulo,
            descripcion
        });

        res.status(200).send({status:'ok', message:'reflexion creada'});
    } catch (error) {
        console.log(error);

        res.status(500).send({status:'error', message:error.message})
    }
}

const getAllReflexion = async (req, res)=>{
    try {
        const reflexion = await reflexiones.find();

        res.status(200).send(reflexion)


    } catch (error) {
        console.log(error);
        res.status(500).send({status:'error', message:error.message});
    }
};

const getIdReflexion = async (req, res)=>{
    try {
        
        const reflexion = await reflexiones.findById(req.params.id);

        res.status(200).send(reflexion)

    } catch (error) {
        console.log(error);

        res.status(500).send({status:'error', message:error.message});
    }
}

const getPublicacionReflexion = async (req, res)=>{
    try {
        const reflexion = await reflexiones.find({publicacion:true})

        res.status(200).send(reflexion)
        // return guia;
    } catch (error) {
        console.log(error);
        res.status(500)
        .send({status:'error', message:error.message})
    }
}

const deleteReflexion= async (req, res)=>{
    try {

        const result =  await reflexiones.findById(req.params.id)
        console.log(result);

        //verificamos si la publicacion es true
        if(result.publicacion){
            await reflexiones.findByIdAndDelete(req.params.id);
            //consultamos todas las publicaciones false
            const resulReflexiones = await reflexiones.find({publicacion:false});
            //almacenamos la ultima
            const reflexion = resulReflexiones[resulReflexiones.length - 1];
            //actualizamos el ultio registro con publicacion true
            await reflexiones.findByIdAndUpdate(reflexion._id,{
            // url,
            // titulo,
            // descripcion,
            publicacion : true
        });
        }

        await reflexiones.findByIdAndDelete(req.params.id);
 
        console.log("Guia eliminada");

        res.status(200).send({status:'ok', message:'reflexion eliminada'})
        
    } catch (error) {
        console.log("error");
        res.status(500).send({status:'Error', message:error.message})
    }
}

const updateReflexion = async (req, res)=>{
    try {
        const{url, titulo, descripcion, publicacion, _id} = req.body;
        console.log(req.body.url);
        //buscamos el registro publicacion true
        const result = await reflexiones.find({publicacion:true})

        //se valida si el Id ingresado es igual al del primero get de busqueda para realizar
        //el cambio de la publicacion a false
        if(result[0]._id == req.body._id){
            console.log("es igual");
            //actualizamos datos
            await reflexiones.findByIdAndUpdate(req.body._id,{
            url,
            titulo,
            descripcion,
            publicacion 
            })
        }else{
            console.log("no es igual");
            await reflexiones.findByIdAndUpdate(req.body._id,{
                url,
                titulo,
                descripcion,
                publicacion 
            });
            //almacenamos en una variable la modificacion realizada
            const reflexionResul = await reflexiones.findById(req.body._id)

            //se verifica si la publicacion es true modificamos a false el registro co publicacion true anterior
            if(reflexionResul.publicacion == true){
                await reflexiones.findByIdAndUpdate(result[0]._id,{
                
                    publicacion : false
                });
            }
            
        }
        console.log("reflexion modificado");

        res.status(200).send({status:'OK', message:'reflexion modificado'});    

    } catch (error) {
        console.log(error);
        res.status(500).send({status:'error', message:error.message})
    }
}


module.exports ={
    createReflexion,
    getAllReflexion,
    getIdReflexion,
    getPublicacionReflexion,
    deleteReflexion,
    updateReflexion
}