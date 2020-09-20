const http = require('http');
const PORT = process.env.PORT || 7050;
const express = require('express');

const app = express();

const appRoutes = require('./routes/appRoutes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.connect('mongodb://localhost/meanDb', { useUnifiedTopology: true });
mongoose.connection
  .once('open', function () {
    console.log('Mongoose Connected!!!');
  })
  .on('error', function (error) {
    console.log('Connection error', error);
  });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', appRoutes);

http.createServer(app).listen(PORT);

console.log('Port is running on:', PORT);
