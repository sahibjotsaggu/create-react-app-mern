const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());

const mongoURL = mongoose.connect('mongodb://localhost/CRAMERN');

const apiRoutes = require('./routes')(app, express);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

