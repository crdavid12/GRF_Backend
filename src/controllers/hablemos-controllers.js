const principal = require('../modules/v1/principal-module');

const createHablemos = async(req, res)=>{
    try {
        const{descripcion} = req.body;

        await principal.create({
            descripcion,
            titulo: "hablemos"
        });
        res.status(200).send({status:'ok', message:'hablemos creado'})
    } catch (error) {
        res.status(500).send({estatus:'error', message:error.message})
    }
}

const updateHablemos = async(req, res)=>{
    try {
        const{descripcion} = req.body;

        await principal.findByIdAndUpdate(_id = "60477a9a043f7f0344206934",{
            descripcion
        });
        res.status(200).send({status:'OK', message:'Hablemos modificado'});
        
    } catch (error) {
        res.status(500).send({status:'error', message:error.message})
    }
}

const getHablemos = async(req, res)=>{
    try {
        const resultado = await principal.find({titulo:"hablemos"});

        res.status(200).send(resultado)
    } catch (error) {
        res.status(500).send({status:'error', message:error.message})
    }
}

module.exports={
    createHablemos,
    updateHablemos,
    getHablemos
}