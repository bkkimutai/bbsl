const express = require ('express');
const homeRouter = require('./routes/home');

const app = express(); 

app.set('view engine', 'ejs');

app.use(homeRouter.router);
app.use(express.static('public'));

app.listen(5502, ()=>{
    console.log("Server is running...")
});