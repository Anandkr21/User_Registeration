const express = require('express');
const {userRegistration} = require('../controllers/user')
const userRoute = express.Router()

userRoute.post('/register', userRegistration)

module.exports = {userRoute}