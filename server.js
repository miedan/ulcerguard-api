const express = require('express');
const router = require('./Router');
const app = express();

// Import Routes
// const authRoute = require('./routes/index');

// Route Middlewares
app.use('/', router);

const port = 3000;
app.listen(port, function(){console.log("Server running on localhost:" + port);});
