const express = require('express');
const app = express();
// const allowCors = require('./config/cors');
const privateRoutes = require('./privateRoutes');
const publicRoutes = require('./publicRoutes');

require('./database');

// app.use(allowCors);
app.use(express.json());
app.use('/oapi', publicRoutes);
app.use('/api', privateRoutes);

app.listen(4000);