# User Registration Portal

This Node.js application provides a User Registration Portal, allowing users to register with their details and associated addresses. The application utilizes Express.js for handling HTTP requests, MongoDB as the database, and Mongoose as the ODM (Object Data Modeling) library.

## Table of Contents

- [User Registration Portal](#user-registration-portal)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Database Schema](#database-schema)
    - [User Schema](#user-schema)
    - [Address Schema](#address-schema)
  - [Author](#author)
  - [Feedback](#feedback)

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/Anandkr21/User_Registeration.git
   ```

2. Navigate to the project directory:

   ```shell
   cd User_Registeration
   ```

3. Install dependencies:

   ```shell
   npm install
   ```

4. Create a `.env` file in the project root directory and specify your MongoDB URI as follows:

   ```env
   MONGODB_URI=your-mongodb-uri
   PORT=8080
   ```

5. Start the application:

   ```shell
   npm start
   ```

The application will run on `http://localhost:8080` (or the specified port).

## Usage

Once the application is running, you can access it by navigating to `http://localhost:8080` in your web browser or using API clients like `curl` or Postman.

## API Endpoints

- **Register a User:** `POST /user/register`

  Register a new user with associated address details.

- **Get All Users with Addresses:** `GET /user/all`

  Retrieve a list of all users.

## Database Schema

### User Schema

- `username` (String, required): User's username.
- `email` (String, required, unique): User's email address.
- `addresses` (Array of ObjectId, ref: 'Address'): Array of associated addresses.

### Address Schema

- `street` (String): Street address.
- `landMark` (String): Landmark.
- `city` (String): City.
- `postalCode` (Number): Postal code.
- `mobileNumber` (String): Mobile number.
- `country` (String): Country.
- `userDetail` (ObjectId, ref: 'User'): Reference to the User.

---
## Author

- [@Anandkr21](https://www.github.com/Anandkr21)
- 
## Feedback

If you have any feedback, please reach out to me at 📭 anandkumargupta.akg15@gmail.com