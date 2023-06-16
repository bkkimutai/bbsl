const express = require('express');

const router = express.Router();

router.get("/", (req, res) =>{
    console.log("Home page accessed");
    res.render("home", {title : "home"});

});

// module.exports = router;
exports.router = router;