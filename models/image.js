const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('image', imageSchema);