const express = require ('express');
const app = express();

const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
app.use(loginRouter.router);
app.use(registerRouter.router);
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.listen(8500,()=>{
    console.log('Server is running');
});
