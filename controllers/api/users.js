const jwt = require('jsonwebtoken');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

// async function create(req, res) {
//     try {
//       const user = await User.create(req.body); // Add the user to the database
//       console.log(user);
//       const token = createJWT(user); // Token will be a string
//       res.json(token);
//     } catch (err) {
//       console.log(err);
//       res.status(400).json(err);
//     }
//   }

const create = async (req, res) => {
    try {
        const user = await User.create(req.body); // Add the user to the database
        const token = createJWT(user); // Token will be a string
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        const match = await bcrypt.compare(req.body.password, user.password);

        if (!match) throw new Error('Invalid username or password');

        const token = createJWT(user);
        res.json(token);
    } catch (err) {
        res.status(400).json(err);
    }
};

  // helper functions
  function createJWT(user) {
    return jwt.sign(
      { user }, // data payload
      process.env.SECRET,
      { expiresIn: '24h' }
    );
  }

  module.exports = {
    create,
    login
};