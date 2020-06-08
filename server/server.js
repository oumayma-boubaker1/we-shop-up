require('express-async-errors');
const error = require('./middlewares/error');
const config = require('config');
const winston = require('winston');
winston.add(winston.transports.File,{filename:'loggers/logfile.log'});

// if(!process.env.secret_jwt || !process.env.secret_mongo){
//     console.log('Variables are not set');
//     process.exit(0);
// }

const db_url ="mongodb+srv://WeShopUp:WeShopUp@weshopup-kc46s.mongodb.net/test?retryWrites=true&w=majority";
require('./db/connection')(db_url);
const express = require('express');
const app_debug = require('debug')('app:debug');
const app = express();
// body-parser (it's Express middleware modules): Parse HTTP request body. See also: body, co-body, and raw-body.
const bodyParser = require('body-parser');
// morgan (it's Express middleware modules): HTTP request logger.
const morgan = require('morgan');
const port = 3000;
const cors = require('cors')
const path = require('path');
const api = require('./routes/api');
const product_router = require('./routes/products');
const category_router = require('./routes/categories');

app.use(cors())

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
  
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

app.use(express.json());
app.use(morgan('dev'));

process.on('uncaughtException', (err) =>{
    console.log('Something failed in the Server "error" : '+err.message);
});

process.on('unhandledRejection', (ex) =>{
    console.log('Something rejected in the Server. '+ex.message);
});


// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });

// throw new Error('Something');

// app.options('*', cors())

app.use('/api', api);
app.use('/products',product_router);
app.use('/categories',category_router);


app.use(error);


app.listen(port, function(){
    console.log("Server running on localhost:" + port);
    winston.info("Server running on localhost:" + port);
});