var express = require('express');
var mongoose = require('mongoose');
var TMSUploadFiles = mongoose.model('tms_upload_files');
var ApiResponse = require('../models/response');
var app = express();

app.get('/', (req,res,next) =>{
    res.send("tms_upload_files routes working.....");
})

app.get('/fetchall',(req,res,next) =>{
    console.log("Query init...");
    TMSUploadFiles.find({},(err,data) =>{
        if(err){
            console.error(err);
            res.json(JSON.stringify(new ApiResponse(400,"Error querying TS files")));
        }
        else{
            console.log("Query executed successfully");
            res.json(new ApiResponse(201,data));

        }
    })
})

app.post("/post",(req,res,next)=>{
  TMSUploadFiles.insertMany(req.body.response_message, (err,docs) =>{
    if(err){
      console.error(err);
      res.status(201).send("failed to insert records");
    }
    else{
      res.status(201).send("ok..");
    }
  })
})

app.post('/update',(req,res,next) =>{
  var tms_upload_files = new TMSUploadFiles(req.body);
  console.log(req.body);
  new Promise((resolve,reject) =>{
    TMSUploadFiles.findOneAndUpdate({filename:req.body.filename},req.body,(err,res) =>{
      if(err){
        console.error(err);
        reject(new ApiResponse(false,"error updating user"));
      }
      else{
        console.log("tick..")
      resolve(new ApiResponse(true,res));
      }
    })
  }).then((resp) =>{
    res.status(201).send(resp);
  },(err)=>{
    res.status(201).send(err);
  })
})


module.exports = app;
