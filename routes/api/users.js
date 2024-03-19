const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/users');

// These are prefixed with /api/users
router.post('/', usersController.create);
router.post('/login', usersController.login);

module.exports = router;