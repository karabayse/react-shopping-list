// REQUIRES
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// USES
app.use(bodyParser.json());

// Database
const db = require('./config/keys').mongoURI;

// Connect to database
mongoose.connect(db).then(() => console.log('MongoDB Connected')).catch(err => console.log(err));

const port = process.env.PORT || 5123;

app.listen(port, () => console.log(`Server started on port ${port}`));
