const express = require('express');
const app = express();

const aboutusRouter = require('./routes/aboutus');

app.set('view engine', 'ejs');

// add middleware
app.use(aboutusRouter.router);


app.listen(3000, ()=>{

    console.log("Server is running...")
});