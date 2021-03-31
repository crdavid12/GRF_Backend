const despertadores = require('../../modules/v1/despertador-module');

const createDepertador = async (req, res)=>{
    try {
        const {imagen} = req.body;

        //verificar si existe registros anteriores
        const resulDespertadores = await despertadores.find();
        
        //si se encuentra datos se modifica los valores
        if(resulDespertadores){
            if(resulDespertadores[2]){
                
                await despertadores.findByIdAndUpdate(resulDespertadores[1]._id,{
                    imagen: resulDespertadores[1].imagen,
                    momento: "Despertador de hace 2 días",
                });
                await despertadores.findByIdAndUpdate(resulDespertadores[2]._id,{
                    imagen: resulDespertadores[2].imagen,
                    momento: "Despertador de ayer",
                });

                await despertadores.findByIdAndDelete(resulDespertadores[0]._id);
            }else{
                if(resulDespertadores[1]){
                    await despertadores.findByIdAndUpdate(resulDespertadores[0]._id,{
                        imagen: resulDespertadores[0].imagen,
                        momento: "despertador de hace 2 días",
                    });
                    await despertadores.findByIdAndUpdate(resulDespertadores[1]._id,{
                        imagen: resulDespertadores[1].imagen,
                        momento: "despertador de ayer",
                    });
                }else{
                    if(resulDespertadores[0]){
                        await despertadores.findByIdAndUpdate(resulDespertadores[0]._id,{
                            imagen: resulDespertadores[0].imagen,
                            momento: "despertador de ayer",
                        });
                    }
                }
            } 
        }
            
        // se crea el despertador
        await despertadores.create({
            imagen
        });

        res.status(200).send({status:'ok', message:'despertador creado'})

    } catch (error) {
        console.log(error);
        res.status(500).send({estatus:'error', message:error.message})
    }
};

const getAllDesperatdores = async (req, res) =>{
    try {
        resultDespertadores = await despertadores.find();

        res.status(200).send(resultDespertadores);
    } catch (error) {
        console.log(error);

        res.status(500).send({status:'error', message:error.message})
    }
}

const getIdDespertador = async (req, res)=>{
    try {
        
        const despertador = await despertadores.findById(req.params.id);

        res.status(200).send(despertador)

    } catch (error) {
        console.log(error);

        res.status(500).send({status:'error', message:error.message});
    }
}

const deletedespertador= async (req, res)=>{
    try {

        await despertadores.findByIdAndDelete(req.params.id);
 
        console.log("despertador eliminado");

        res.status(200).send({status:'ok', message:'despertador eliminado'})
        
    } catch (error) {
        console.log("error");
        res.status(500).send({status:'Error', message:error.message})
    }
}

const updateDespertador = async(req, res)=>{
    try {
        const{imagen, id} = req.body;

        await despertadores.findByIdAndUpdate(req.body.id,{
            imagen
        });

        res.status(200).send({status:'ok', message:'Despertador actualizado'})

    } catch (error) {
        console.log(error);

        res.status(500).send({status:'error', message:error.message});
    }
}

module.exports={
    createDepertador,
    getAllDesperatdores,
    getIdDespertador,
    deletedespertador,
    updateDespertador
}