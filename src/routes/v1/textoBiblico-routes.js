const express = require('express');
const textoBiblicoControllers = require('../../controllers/v1/textoBiblico-controllers')
const multipart = require('connect-multiparty')
const router = express.Router();
const multer = require('multer');


const multipartMiddleware = multipart({
    // uploadDir: 'uploads/',
    // uploadDir: '../../../estudio/angular/GRF/src/assets/videos/',

    uploadDir: 'uploads/',
    name: "filename"
})

router.get("/inicio", (req, res)=>{
    console.log(__dirname);
    res.sendFile(__dirname + "/view/index.html")
})
router.post('/create', textoBiblicoControllers.createTextoBiblico);
router.post('/updateImagen', multipartMiddleware,textoBiblicoControllers.updateTextoBiblicoImagen);
router.post('/update', textoBiblicoControllers.update);
router.get('/getimagen', textoBiblicoControllers.getTextoBiblicoImagen);
router.get('/get', textoBiblicoControllers.getTextoBiblico);


module.exports = router;