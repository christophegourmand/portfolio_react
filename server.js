const express = require('express');
const app = express();
// NOTE: port set on 5000 instead of 3000 to avoid conflict with react who uses 3000.
const PORT = 5000; 

// --- set index|home page
app.get(
    '/',
    (req,res) => {
        res.send('<h1>Homepage</h1>');
    }
);

// --- set projects page
app.get(
    '/projects',
    (req,res) => {
        res.send('<h1>Projects</h1>');
    }
);

// --- set contact page
app.get(
    '/contact',
    (req,res) => {
        res.send('<h1>Contact</h1>');
    }
);

app.listen(PORT);