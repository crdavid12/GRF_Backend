const express = require('express');
const reflexionesControllers = require('../../controllers/v1/reflexiones-controllers');

const router = express.Router();

router.post('/create', reflexionesControllers.createReflexion),
router.get('/getAll', reflexionesControllers.getAllReflexion),
router.get('/getid/:id', reflexionesControllers.getIdReflexion),
router.get('/getPublicacion', reflexionesControllers.getPublicacionReflexion),
router.delete('/delete/:id', reflexionesControllers.deleteReflexion),
router.post('/update', reflexionesControllers.updateReflexion),

module.exports = router;    
