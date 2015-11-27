var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile('index.html', {
        root: __dirname + '/../client/src/'
    }); // load the single view file (angular will handle the page changes on the front-end)
});

module.exports = router;