const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const noteRoutes = require('./routes/noteRoutes');

app.use(noteRoutes);

const dbConfig = require("./config/database.config");

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url,{
    useNewUrlParser:true
}).then(()=>{
    console.log('Successfully connected to the database')
}).catch(err=>{
    console.log('Could not connect to the database');
    process.exit();
})



app.listen(5000,()=>{
    console.log("Server is listening on port 5000");
})