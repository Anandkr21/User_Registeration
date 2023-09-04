const express = require('express');
const { connection } = require('./config/db');
const app = express()
app.use(express.json())
require('dotenv').config()

const Port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Welcome to User-Registration portal')
})

app.listen(Port, async () => {
    try {
        await connection
        console.log("Connected to Database!");
    } catch (error) {
        console.log("Unable to connect DB", error);
    }
    console.log(`Server is running at http://localhost:${Port}`);
})