// load the things we need
var express = require('express');
var app = express();
const bodyParser  = require('body-parser');

// required module to make calls to a REST API
const axios = require('axios');

var selectedID = "";
app.use(bodyParser.urlencoded());

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs vi'ew file

// login page 
app.get('/', function(req, res) {
    
    // this will render our new example spage 
    res.render("pages/login.ejs");
});

app.post('/process_form', function(req, res){
    // create a variable to hold the username parsed from the request body
    let username = req.body.username
    // create a variable to hold ....
    let password = req.body.password

    let alert = require('alert');

  if (username === "admin" && password === "admin123"){
    res.render('pages/thanks.ejs', {body: req.body})
  }
  else {
    alert("Unsuccessful Login Attempt")
    res.redirect('back');
  }

  })


app.listen(8080);
console.log('8080 is the magic port');