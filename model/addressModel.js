const mongoose = require('mongoose');

const addresSchema = mongoose.Schema({
    
    street: {
        type: String,
    },
    landMark:{
        type:String
    },
    city: {
        type: String,
    },
    postalCode: {
        type: Number,
    },
    mobileNumber: {
        type: Number,
    },
    country: {
        type: String,
    },
    userDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },

}, {
    versionKey: false
});

const Address = new mongoose.model('address', addresSchema);

module.exports = { Address }