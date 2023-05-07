const express = require('express');

const router = express.Router();

router.get("/services", (req, res) =>{
    console.log("services page accessed");
    res.render("services", {title : "Services"});
})

// module.exports = router;
exports.router = router;