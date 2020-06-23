const express = require('express');
const app = express();
const privateRoutes = require('./privateRoutes');
const publicRoutes = require('./publicRoutes');

require('./database');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json());
app.use('/oapi', publicRoutes);
app.use('/api', privateRoutes);

app.listen(4000);