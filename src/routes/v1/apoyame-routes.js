const express = require('express');
const apoyameControllers = require('../../controllers/v1/apoyame-controllers')

const router = express.Router();

router.post('/create', apoyameControllers.createApoyame);
router.get('/getAll', apoyameControllers.getApoyame);
router.post('/update', apoyameControllers.updateApoyame);

module.exports = router;