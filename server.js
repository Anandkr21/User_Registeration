const express = require('express');
const { connection } = require('./config/db');
const { userRoute } = require('./routes/userRoute');

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

require('dotenv').config(); // Load environment variables from .env file
const Port = process.env.PORT || 8080; // Connecting with port


// A simple route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to User-Registration Portal.');
});


// Mount the userRoute under '/user'
app.use('/user', userRoute);


// Connecting with server
app.listen(Port, async () => {
    try {
        await connection; // Database connection established
        console.log("Connected to Database !");
    } catch (error) {
        // Error handling
        console.log("Unable to connect DB", error);
        console.error(error);
    }
    // Start the server and log the port
    console.log(`Server is running at http://localhost:${Port}`);
});

