const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const imagesRouter = require('./routes/images');

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/artoffish_db');

app.use('/images', imagesRouter);