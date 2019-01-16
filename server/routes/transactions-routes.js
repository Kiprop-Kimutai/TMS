var Transactions = require('../models/transactions');
var ApiResponse = require('../models/response');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var lineReader = require('readline');
const express = require('express');
const app = express();
var transactions = [];
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:false}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
//app.use(express.static('public'))
app.get('/', (req,res,next) =>{
    res.send("baas");
})
app.post('/batchtransactions', (req,res,next) =>{
    console.log(__dirname);
    console.log(req.body.filename);
    transactions = [];
    var lineReader = require('readline').createInterface({
        input: require('fs').createReadStream('server/uploads/00_25_7E_03_98_3E#180528053922')
      });
      new Promise((resolve,reject) =>{
        lineReader.on('line', function (line) {
            //console.log(line.split('&').toString());
            var str = (line.split('&').toString().split(','));
            console.log(new Transactions(str));
            transactions.push(new Transactions(str));
            resolve(transactions);
            });
      }).then((done) =>{
            //console.log(transactions);
            console.log(transactions.length);
            res.json(new ApiResponse(201,transactions));
            //res.send(transactions);
      })    
})
module.exports = app;