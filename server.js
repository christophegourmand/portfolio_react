const express = require('express');
const app = express();
// NOTE: port set on 5000 instead of 3000 to avoid conflict with react who uses 3000.
const PORT = 5000; 

app.get(
    '/',
    (req,res) => {
        res.send('<h1>Sent from server.js</h1>');
    }
);

app.listen(PORT);