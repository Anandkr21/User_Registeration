const mongoose = require('mongoose');

// Define the Address schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
}, {
    versionKey: false
});

// Create the Address model
const User = new mongoose.model('user', userSchema);

module.exports = { User };

