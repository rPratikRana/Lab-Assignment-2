const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let messages = [];

// Endpoint to get messages
app.get('/messages', (req, res) => {
    res.json(messages);
});

// Endpoint to send a new message
app.post('/messages', (req, res) => {
    messages.push(req.body);
    res.status(201).send();
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
