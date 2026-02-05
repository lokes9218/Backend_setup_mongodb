const express = require('express');
const router=express.Router();

const {loginuser,registeruser} = require('../controller/user-auth');
router.post('/register',registeruser);
router.post('/login',loginuser);

module.exports = router;