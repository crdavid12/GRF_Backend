const express = require('express');
const guiaDiosRoutes = require('../../controllers/v1/guiaDios-controllers');

const router = express.Router();

router.post('/create', guiaDiosRoutes.createGuia);
router.get('/getAll', guiaDiosRoutes.getAllGuia);
router.get('/getId/:id', guiaDiosRoutes.getId);
router.get('/getPublicacion', guiaDiosRoutes.getPublicacion);
router.delete('/delete/:id', guiaDiosRoutes.deleteGuia);
router.post('/update', guiaDiosRoutes.updateGuia);

module.exports = router;