const mongoose = require('mongoose');

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

const User = new mongoose.model('users', userSchema);

module.exports = { User };

