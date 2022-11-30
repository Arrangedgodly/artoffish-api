const Image = require('../models/image');

module.exports.createImage = (req, res) => {
  const { prompt, link } = req.body;

  Image.create({ prompt, link })
    .then(image => res.status(200).send({ image }))
    .catch(() => res.status(500).send({ message: "there was an error validating your request"}))
};

module.exports.getImages = (req, res) => {
  Image.find({})
    .then(images => res.status(200).send({ images }))
    .catch(() => res.status(500).send({ message: "there was an error validating your request"}))
}