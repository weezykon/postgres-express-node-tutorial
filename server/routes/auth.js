/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();

const authCtrl = require('../controllers/authCtrl');

router.post('/login', authCtrl.login);
// router.post('/register', authCtrl.login);

module.exports = router;
