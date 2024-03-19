const jwt = require('jsonwebtoken');
const User = require('../../models/user');


// V3
async function create(req, res) {
    try {
      // Add the user to the database
      const user = await User.create(req.body);
      console.log(user);
      // token will be a string
      const token = createJWT(user);
      // Yes, we can use res.json to send back just a string
      // The client code needs to take this into consideration
      res.json(token);
    } catch (err) {
      // Client will check for non-2xx status code 
      // 400 = Bad Request
      console.log(err);
      res.status(400).json(err);
    }
  }

  // helper functions
  function createJWT(user) {
    return jwt.sign(
      // data payload
      { user },
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }

  module.exports = {
    create
};