const principal = require('../../modules/v1/principal-module')

const createApoyame = async(req, res)=>{
    try {
        const{titulo, descripcion, citaBiblica, descripcionBiblica} = req.body;

        await principal.create({
            titulo,
            descripcion,
            citaBiblica,
            descripcionBiblica
        })

        res.status(200).send({estatus:'ok', message:"create ok"})
    } catch (error) {
        res.status(500).send({estatus:'error', message:error.message})
    }
}

const updateApoyame = async(req, res)=>{
    try {
        const{titulo, descripcion, citaBiblica, descripcionBiblica} = req.body;
        if(titulo != ""){
            await principal.findByIdAndUpdate(_id="604a3e5ca788b075a48530e0",{
                titulo
            })
        }
        if(descripcion != ""){
            await principal.findByIdAndUpdate(_id="604a3e5ca788b075a48530e0",{
                descripcion
            })
        }
        if(citaBiblica != ""){
            await principal.findByIdAndUpdate(_id="604a3e5ca788b075a48530e0",{
                citaBiblica
            })
        }
        if(descripcionBiblica != ""){
            await principal.findByIdAndUpdate(_id="604a3e5ca788b075a48530e0",{
                descripcionBiblica
            })
        }
        // await principal.findByIdAndUpdate(_id="604a3e5ca788b075a48530e0",{
        //     titulo,
        //     descripcion,
        //     citaBiblica,
        //     descripcionBiblica
        // })
        res.status(200).send({estatus:'ok', message:"update ok"})
    } catch (error) {
        res.status(500).send({estatus:'error', message:error.message})
    }
}

const getApoyame = async(req, res)=>{
    try {

        const resultado = await principal.find({_id:"604a3e5ca788b075a48530e0"});

        res.status(200).send(resultado)
    } catch (error) {
        res.status(500).send({estatus:'error', message:error.message})
    }
}

module.exports ={
    createApoyame,
    updateApoyame,
    getApoyame
}