const express = require('express');
const app = express();

const aboutusRouter = require('./routes/aboutus');
const servicesRouter = require('./routes/services');

app.set('view engine', 'ejs');

// add middleware & static files
app.use(aboutusRouter.router);
app.use(servicesRouter.router);
app.use(express.static('public'));



//listen to requests
app.listen(3000, ()=>{

    console.log("Server is running...")
});