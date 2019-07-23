const express = require('express');
const router = express.Router();

//homepage
router.get('/',(req, res) => res.render('welkom'));

module.exports = router;