const mongoose = require('mongoose');
require('dotenv').config();

// Connecting with MongoDB database using the provided URL in .env file
const connection = mongoose.connect(process.env.mongoURL);

module.exports = { connection }