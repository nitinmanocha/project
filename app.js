const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const users = require('./models/user');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/NodeDB');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(req,res) => {
  res.send('Welcome to my code!'); 
})

app.get('/random',(req,res) => {
    res.sendfile('random.html'); 
  })

  app.get('/random_success',(req,res) => {
    res.sendfile('random_success.html'); 
  })

app.get('/login',(req,res) =>{
res.sendfile('index.html');
})

app.get('/registration',(req,res) =>{
    res.sendfile('registration.html');
})

app.post('/registration_success',(req,res) =>{
    new users({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    }).save(function(err,doc){
        if(err) res.json(err);
        else res.send('Successfully inserted!')

    });
})

app.listen('3000');

console.log("server listening at port 3000"); 