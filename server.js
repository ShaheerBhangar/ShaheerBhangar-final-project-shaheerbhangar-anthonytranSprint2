// load the things we need
var express = require('express');
var app = express();
const bodyParser  = require('body-parser');

// required module to make calls to a REST API
const axios = require('axios');

var selectedID = "";
app.use(bodyParser.urlencoded({ extended: true}));

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

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

  if (username === "shaheer" && password === "shaheer123"){
    res.render('pages/thanks.ejs', {body: req.body})
  }
  else {
    alert("Unsuccessful Login Attempt")
    res.redirect('back');
  }

  })

app.get('/thanks', function(req, res) {
    
    axios.get(`http://127.0.0.1:5000/api/trip/all`)
    .then((response)=>{
        
        var cars = response.data;
        var tagline = "Currently planned trips:";
        console.log(cars);
         // use res.render to load up an ejs view file
        res.render('pages/about.ejs', {
            cars: cars,
            tagline: tagline
        });
    });


});

app.get('/choose', function(req, res) {
    
    // this will render our new example spage 
    res.render("pages/choose.ejs");
});

app.listen(8080);
console.log('8080 is the magic port');
