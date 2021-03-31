const express = require('express');
const multer = require('multer');
const multipart = require('connect-multiparty')
const principalControllers = require('../../controllers/v1/principal-controllers');


const router = express.Router();


// router.get("/inicio", (req, res)=>{
//     console.log(__dirname);
//     res.sendFile(__dirname + "/view/index.html")
// })

const multipartMiddleware = multipart({
    // uploadDir: 'uploads/',
    // uploadDir: '../../../estudio/angular/GRF/src/assets/videos/',

    uploadDir: '../../../estudio/angular/GRF/src/   ',
    name: "prueba1"
})

router.post('/createVideo', principalControllers.createvideo);
router.get('/getVideo', principalControllers.getVideo);

module.exports = router;