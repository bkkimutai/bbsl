const express = require ('express');
const router = express.Router();

router.get("/products", (req, res) =>{
    console.log("products page accessed");
    res.render("products", {title : "products"});
})

exports.router = router;