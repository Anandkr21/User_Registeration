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
    addresses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'address', // Reference to the Address model
    },
}, {
    versionKey: false
});

// Create the Address model
const User = new mongoose.model('user', userSchema);

module.exports = { User };

