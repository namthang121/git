var express = require('express');
var router = express.Router();
var app = express();
router.get("/index", (req, res) => {
    res.render("index")
})

module.exports = router;