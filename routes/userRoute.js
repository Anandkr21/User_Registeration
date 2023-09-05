const express = require('express');

// Import the user registration controller
const { userRegistration, getAllUser } = require('../controllers/user');
const userRoute = express.Router()

// POST route for user registration
userRoute.post('/register', userRegistration);
userRoute.get('/all', getAllUser);

module.exports = { userRoute }