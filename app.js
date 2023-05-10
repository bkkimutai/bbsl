const express = require('express');
const app = express();

const aboutusRouter = require('./routes/aboutus');
const servicesRouter = require('./routes/services');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const productsRouter = require('./routes/products');

app.set('view engine', 'ejs');

// add middleware & static files
app.use(aboutusRouter.router);
app.use(servicesRouter.router);
app.use(loginRouter.router);
app.use(registerRouter.router);
app.use(express.static('public'));
app.use(productsRouter.router);



//listen to requests
app.listen(8500,()=>{
    console.log('Server is running');
});

