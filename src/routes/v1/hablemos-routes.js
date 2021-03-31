const express = require('express');
const hablemosControllers = require('../../controllers/hablemos-controllers')

const router = express.Router();

router.post('/create', hablemosControllers.createHablemos),
router.get('/getHablemos', hablemosControllers.getHablemos),
router.post('/update', hablemosControllers.updateHablemos),

module.exports = router;    