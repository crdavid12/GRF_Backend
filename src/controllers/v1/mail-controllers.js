const {transporter} = require ('../../config/mailer')

const postCorreo = async (req, res) =>{
    try {

        const{correo, nombre, contacto, motivo} = req.body;

        await transporter.sendMail({
            // from: '"Fred Foo 👻" <crdavid12@hotmail.com>', // sender address
            from: 'crdavid12@hotmail.com', // sender address
            to: "davidherre03@gmail.com", // list of receivers
            subject: "Mensaje GRF", // Subject line
            text: "Hello world?", // plain text body
            html:   `<strong>Nombre=</strong> ${nombre} <br/>
                     <strong>Correo=</strong> ${correo} <br/>
                     <strong>Número de contacto=</strong> ${contacto}<br/>
                     <strong>motivo=</strong> ${motivo}`, // html body
          });
          res.status(200).send({status:'ok', message:'Guia creada'});
    } catch (error) {
        res.status(500).send({status:'error', message:error.message})
    }
}

module.exports={
    postCorreo
}