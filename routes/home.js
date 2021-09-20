const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(JSON.stringify({ title: config.get('name'), message: `Welcome to ${config.get('name')}` }));
});

module.exports = router;