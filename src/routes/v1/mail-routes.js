const express = require('express');
const configMensaje = require('../../controllers/v1/mail-controllers');

const router = express.Router();

router.post('/formulario', configMensaje.postCorreo)


module.exports = router;    