const express = require('express');
const despertadorControllers = require('../../controllers/v1/despertador-controllers');

const router = express.Router();

router.post('/create', despertadorControllers.createDepertador);
router.get('/getAll', despertadorControllers.getAllDesperatdores);
router.get('/getId/:id', despertadorControllers.getIdDespertador);
router.delete('/delete/:id', despertadorControllers.deletedespertador);
router.post('/update', despertadorControllers.updateDespertador);

module.exports = router;