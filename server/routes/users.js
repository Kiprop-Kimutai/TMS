var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var ApiResponse = require('../models/response');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.get('/test', (req,res,next) =>{
    res.send("ok...");
})

app.get('/fetchusers',(req,res,next) =>{
  new Promise((resolve,reject) =>{
    User.find({},(err,data)=>{
      if(err){
        console.error(err);
        reject(new ApiResponse(false,"error fetching users"));
      }
      else{
        resolve(new ApiResponse(true,data));
      }
    })
  }).then((response)=>{
    res.status(201).send(response);
  },(err)=>{
    res.status(201).send(err);
  })

})
module.exports = app;
