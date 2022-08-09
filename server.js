'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {
  response.send('test request received')
})

// requiring the bookSchema module
const { handleBookSchema } = require('./modules/BookSchema');

// getting the data
app.get('/books', handleBookSchema);


app.listen(PORT, () => console.log(`listening on ${PORT}`));
