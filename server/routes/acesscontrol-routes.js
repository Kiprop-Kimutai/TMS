const express = require('express');
const mongoose = require('mongoose');
var AccessControl = mongoose.model('AccessControl');
const ApiResponse = require('../models/response');
const app = express();

app.post('/newaccessgroup',(req,res,next) =>{
  console.log(req.body.usergroup);
  var accessControl = new AccessControl(req.body.usergroup);
  console.log(accessControl);
  new Promise((resolve,reject) =>{
    accessControl.save((err) =>{
      if(err)
        reject(new ApiResponse(false,"error creating user group"));
      else
        resolve(new ApiResponse(true,"user group created successfully"));
    })
  }).then((success)=>{
    res.status(201).send(success);
  },(fail)=>{
    res.status(201).send(fail);
  })

})

app.post('/fetchaccessgroupbyrole',(req,res,next) =>{
  new Promise((resolve,reject)=>{
    AccessControl.findOne({role:req.body.role},(err,data) =>{
      if(err)
          reject(new ApiResponse(false,"error fetching access group"));
      else if(data.length == 0){
          reject(new ApiResponse(false,"no access group for role"));
      }
      else
          resolve(new ApiResponse(true,data));
    })
  }).then((success)=>{
    res.status(201).send(success);
  },(failure)=>{
    res.status(201).send(failure);
  })
})

app.get('/fetchallaccessgroups',(req,res,next) =>{
  new Promise((resolve,reject) =>{
    AccessControl.find({},(err,data)=>{
      if(err)
        reject(new ApiResponse(false,"error fetching access groups"));
      else
        resolve(new ApiResponse(true,data));
    })
  }).then((success) =>{
    res.status(201).send(success);
  },(failure)=>{
    res.status(201).send(failure);
  })
})

module.exports = app;
