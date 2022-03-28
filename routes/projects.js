//const { json } = require("express/lib/response");
const express = require('express');

const router = express.Router();

// now use `router.<method>` instead of `app.<method>`

// --- all the following routes works with `/project` as prefix in url
router.get(
    '/',
    (req,res) => {
        res.send('<h1>Projects</h1>');
    }
);

router.get(
    '/projecta',
    (req, res) => {
        res.send('<h1>Projects</h1><h2>Project A</h2>');
    }
);

router.get(
    '/projectb',
    (req, res) => {
        res.send('<h1>Projects</h1><h2>Project B</h2>');
    }
);

router.get(
    '/*',
    (req, res) => {
        res.send('<h1>So sorry,<br>This Project has not been found</h1>');
    }
);

module.exports = router;