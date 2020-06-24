const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const privateRoutes = require('./privateRoutes');
const publicRoutes = require('./publicRoutes');

require('./database');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


// app.use(express.json());
app.use('/oapi', publicRoutes);
app.use('/api', privateRoutes);

app.listen(4000);