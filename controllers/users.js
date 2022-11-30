const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.createUser = (req, res) => {
  const { email, password } = req.body;
  bcrypt(password, 10)
    .then(hash => {
      User.create({
        email,
        password: hash
      })
    })
    .catch(err => res.status(500).send({ message: `${err.message}`}))
}

module.exports.login = (req, res) => {
  
}