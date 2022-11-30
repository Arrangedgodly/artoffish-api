const mongoose = require('mongoose');
const validator = require('validator');

const imageSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return validator.isURL(value);
      },
      message: 'You must enter a valid URL'
    }
  }
})

module.exports = mongoose.model('image', imageSchema);