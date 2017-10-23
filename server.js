// Part of the backend for Mobile Apps Development project 'Tax Calculator'
// Used for creating requests to the database which will return tax brackets/rates
// Author: Dillonward2017@gmail.com

var express = require('express')
var app = express()
var router = express.Router();


// HTTP request to POST credentials to the database


// HTTP request to GET tax bracket from database
app.get('/', function(req, res){

});

router.route('/', function(req, res){

    // app.get(function(req, res){
    //     Rate.find(function(err, Rates){
    //         if (err)
    //             res.send(err);
    //         res.json(rate);
    //     });
    // }); 
});

app.listen(3000)
console.log("Connected to Port 3000")