const db_url ="mongodb+srv://WeShopUp:WeShopUp@weshopup-kc46s.mongodb.net/test?retryWrites=true&w=majority";
require('./db/connection')(db_url);
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path');

const api = require('./routes/api');
const port = 3000;

const app = express();
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json()); 

app.use('/api', api);



app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});