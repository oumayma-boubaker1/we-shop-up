require('express-async-errors');
const error = require('./middlewares/error');
// const config = require('config');
const winston = require('winston');
winston.add(winston.transports.File,{filename:'loggers/logfile.log'});

if(!process.env.secret_jwt || !process.env.secret_mongo){
    console.log('Variables are not set');
    process.exit(0);
}

const db_url ="mongodb+srv://WeShopUp:WeShopUp@weshopup-kc46s.mongodb.net/test?retryWrites=true&w=majority";
require('./db/connection')(db_url);
const express = require('express');
const app_debug = require('debug')('app:debug');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;
const cors = require('cors')
const path = require('path');

const api = require('./routes/api');
const product_router = require('./routers/products');

app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

app.use(express.json());
app.use(morgan('dev'));

process.on('uncaughtException', (err) =>{
    console.log('Something failed in the Server.'+err.message);
});

process.on('unhandledRejection', (ex) =>{
    console.log('Something rejected in the Server.'+ex.message);
});


// throw new Error('Something');

app.use('/api', api);
app.use('/api/products',product_router);
app.use('/api/users',user_router);
app.use(error);




app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});