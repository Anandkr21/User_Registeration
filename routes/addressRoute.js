const express = require('express')
const addressRoute = express.Router()

const { userAddress } = require('../controllers/address')


addressRoute.get('/user-address', userAddress)

module.exports = {addressRoute}