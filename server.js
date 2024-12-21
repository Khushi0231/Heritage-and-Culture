// filepath: /C:/Users/khush/OneDrive/Desktop/Heritage and Culture/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/heritage', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Define a schema and model
const placeSchema = new mongoose.Schema({
    name: String,
    description: String
});
const Place = mongoose.model('Place', placeSchema);

// API endpoint to get places
app.get('/api/places', async (req, res) => {
    const places = await Place.find();
    res.json(places);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});