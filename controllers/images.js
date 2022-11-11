const Image = require('../models/image');

const createImage = (req, res) => {
  const { prompt, link } = req.body;

  Image.create({ prompt, link })
    .then(image => res.status(200).send({ image }))
    .catch(() => res.status(500).send({ message: "there was an error validating your request"}))
};

const getImages = (req, res) => {
  Image.find({})
    .then(images => res.status(200).send({ images }))
    .catch(() => res.status(500).send({ message: "there was an error validating your request"}))
}

module.exports = { createImage, getImages };