const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const items = require('./routes/api/items');

const app = express();
  
// Bodyparser Middleware
app.use(cors());
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Srever started on port ${port}`));

