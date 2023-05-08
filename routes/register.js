const express = require ('express');
const router = express.Router();
router.get('/register', (req, res)=>{
    console.log('register page accessed');
    let payload = {isLoggedIn: true}
    res.render("register", {});
});
router.post('/register', (req, res)=>{
    console.log('Form submited');
    let payload = {isLoggedIn: true}
    res.render("products", payload);
});
exports.router = router;