const router = require('express').Router();
const { createImage, getImages } = require('../controllers/images');

router.post('/', createImage);

router.get('/', getImages);

module.exports = router;