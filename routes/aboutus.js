const express = require('express');

const router = express.Router();

router.get("/aboutus", (req, res) =>{
    console.log("about-us page accessed");
    res.render("aboutus", {title : "Aboutus"});

});

// module.exports = router;
exports.router = router;