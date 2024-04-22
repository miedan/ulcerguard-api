const express = require('express');
const app = express();

// Import Routes
// const authRoute = require('./routes/index');

const auth =(req, res, next)=>{
    console.log("Auth incorrect.")
    const email = req.body.email;
    const password = req.body.password;

    // Search he email in the database
    // Fetch user data 
    // Extract password
    // Decrpt

    res.send()
}

const history =(req, res, next)=>{
    console.log('Here is your history');
    res.send();
}

// Route Middlewares
app.use('/history', auth, history);

const port = 3000;
app.listen(port, function(){console.log("Server running on localhost:" + port);});
