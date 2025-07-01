const express = require('express');
const cors = require('cors');
const app = express();


const parcelleRoutes = require('./routes/parcelleRoutes');
app.use(cors());
app.use(express.json());
app.use('/parcelles', parcelleRoutes);

module.exports = app;
