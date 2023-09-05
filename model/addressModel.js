const mongoose = require('mongoose');

// Define the Address schema
const addressSchema = mongoose.Schema({
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
        ref: "user" // Reference to the User model
    },
}, {
    versionKey: false 
});

// Create the Address model
const Address = new mongoose.model('address', addressSchema);

module.exports = { Address };
