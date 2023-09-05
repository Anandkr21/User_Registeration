const express = require('express');

// Import the user registration controller
const { userRegistration } = require('../controllers/user');
const userRoute = express.Router()

// POST route for user registration
userRoute.post('/register', userRegistration);

module.exports = { userRoute }