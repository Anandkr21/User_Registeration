const {User} = require('../model/userModel');
const {Address } = require('../model/addressModel');

const userRegistration = async(req,res) =>{
    const {username, email,street, landmark,city,postalCode,mobileNumber, country} = req.body;

    try {
        const user = new User({username,email});
        await user.save()

        const userAddress = Address({street, landmark,city,postalCode,mobileNumber, country});
        await userAddress.save()
        res.status(200).send({
            status: true,
            message: `${username}, you are registerd successfully!`,
            data : user
        })
    } catch (error) {
        res.status(500).send({
            status: false,
            message: "Internal server error",
            error: error.message
        })
    }
}

module.exports = {userRegistration}