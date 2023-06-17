const express = require('express');

const router = express.Router();

router.get("/home", (req, res)=>{
    
    res.render("home", {});
})

router.post("/home", (req, res)=>{
    console.log("home page accessed");
});

exports.router = router;