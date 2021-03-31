const express = require('express');
const userControllers = require('../../controllers/v1/users-controllers')

const router = express.Router();

router.post('/create', userControllers.createUser);
router.post('/update', userControllers.updateUser);
router.post('/delete', userControllers.deleteUser);
router.post('/login', userControllers.login);
router.get('/get', userControllers.getAllUser)

module.exports = router;