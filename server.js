const express = require('express');
const { connection } = require('./config/db');
const { userRoute } = require('./routes/userRoute');
const { addressRoute } = require('./routes/addressRoute');
const app = express()
app.use(express.json())
require('dotenv').config()

const Port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send('Welcome to User-Registration portal')
})

app.use('/user', userRoute);
app.use('/address', addressRoute)
app.listen(Port, async () => {
    try {
        await connection
        console.log("Connected to Database!");
    } catch (error) {
        console.log("Unable to connect DB", error);
    }
    console.log(`Server is running at http://localhost:${Port}`);
})