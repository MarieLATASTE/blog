const express = require('express');
const app= express();
const artRoutes= require('./routes/article');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');

let monUrl = require('./config.json')

mongoose.connect(monUrl.url, () => 
console.log('connected to MongoDB!'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.static('../frontend'));

app.listen(3000, () => {
    console.log('j’écoute sur le port 3000 !')});

app.use('/article',artRoutes);