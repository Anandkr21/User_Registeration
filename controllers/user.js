const { User } = require('../model/userModel');
const { Address } = require('../model/addressModel');

// Handling user registration
const userRegistration = async (req, res) => {
  const { username, email, street, landMark, city, postalCode, mobileNumber, country } = req.body;

  try {
    // Check if a user with the provided email already exists
    const userExist = await User.findOne({ email });

    if (userExist) {
      // If the user already exists, send a 409 Conflict response
      res.status(409).send({
        status: false,
        message: "User already exists, please login."
      });
    }

    // Create a new user
    const user = new User({ username, email });
    await user.save();

    // Create a new user address with the provided address details
    const userAddress = new Address({ street, landMark, city, postalCode, mobileNumber, country });
    await userAddress.save();

    // Send a 201 Created response with a success message and user data
    res.status(201).send({
      status: true,
      message: `${username}, you are registered successfully !`,
      data: user, userAddress
    });
  } catch (error) {
    // Handle any internal server errors and send a 500 Internal Server Error
    res.status(500).send({
      status: false,
      message: "Internal server error",
      error: error.message
    });
  }
}

const getAllUser = async (req, res) => {
  try {
    // Use aggregation to join User and Address data based on userId
    const usersWithAddresses = await User.find()

    res.status(200).send({
      status: true,
      data: usersWithAddresses,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: 'Internal Server Error',
    });
  }
}

module.exports = { userRegistration, getAllUser };

