const express = require('express');
const allowCors = require('./config/cors');
const routes = require('./routes');

require('./database');

const app = express();

app.use(allowCors);
app.use(express.json());
app.use(routes);


app.listen(4000);

module.exports = app;