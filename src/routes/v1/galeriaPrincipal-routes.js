const express = require('express');
const galeriaPrincipalControllers = require('../../controllers/v1/galeriaPincipal-controllers')
const multipart = require('connect-multiparty')
const router = express.Router();


const multipartMiddleware = multipart({
    // uploadDir: 'uploads/',
    // uploadDir: '../../../estudio/angular/GRF/src/assets/videos/',

    uploadDir: 'uploads/',
    name: "filename"
})

router.post('/updateGuiaDios', multipartMiddleware,galeriaPrincipalControllers.updateGuiaDios);
router.post('/updateDespertador', multipartMiddleware,galeriaPrincipalControllers.updateDespertador);
router.post('/updateReflexiones', multipartMiddleware,galeriaPrincipalControllers.updateReflexiones);
router.get('/getGaleria', galeriaPrincipalControllers.getImagenes);

module.exports = router;