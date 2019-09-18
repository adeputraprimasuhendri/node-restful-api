const express = require('express');
const app = express();
const mongoose = require('mongoose');
const BodyParser = require('body-parser');
const cors = require('cors');

//IMPORT ROUTES
const postsRoute = require('./routes/posts');
require('dotenv').config();

//MIDDLEWARE
app.use(cors());
app.use(BodyParser.json());
app.use('/posts', postsRoute);

//ROUTE
app.get('/', (req, res) => {
    res.send('Server running...');
});

//CONNECT TO MONGGODB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Database Connected');
});

app.listen(3000);