// --- constants and imports

const express = require('express');

const app = express();
// NOTE: port set on 5000 instead of 3000 to avoid conflict with react who uses 3000.
const PORT = 5000;

const path = require('path');


// --- router  for projects
const projectRouter = require('./routes/projects');
app.use('/projects', projectRouter);

// --- make public folder accessible for client
// app.use('/public', express.static('public'));
// -- or
app.use('/public', express.static('client/public'));


// --- set index|home page
    // before react was active
        /*app.get(
            '/',
            (req,res) => {
                res.send('<h1>Homepage</h1>');
            }
        );*/

    // since react is active
        app.get(
            '/',
            (req,res) => {
                res.sendFile(path.join(__dirname, 'client','public','index.html'));
            }
        );
        // LINK: https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b


// --- set contact page  
app.get(
    '/contact',
    (req,res) => {
        res.send('<h1>Contact</h1>');
    }
);

app.listen(PORT);