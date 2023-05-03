const express = require ('express');
const router = express.Router();

router.get('/login', (req, res)=>{
    console.log('Login page accessed');
    let payload = {isLoggedIn: true}
    res.render("login", {});
});
router.post('/login', (req, res)=>{
    console.log('Form submited');
    let payload = {isLoggedIn: true}
    res.render("products", payload);
});
exports.router = router;