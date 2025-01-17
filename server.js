require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const API_KEY = process.env.API_KEY;

app.get('/api-key', (req, res) => {
    res.json({ key: API_KEY });
});

app.listen(3000, () => console.log('Server running on port 3000'));
