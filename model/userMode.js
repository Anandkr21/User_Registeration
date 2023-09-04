const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
}, {
    versionKey: false
});

const User = new mongoose.model('users', userSchema);

module.exports = { User };

