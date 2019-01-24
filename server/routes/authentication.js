var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var ApiResponse = require('../models/response');

module.exports.register = function(req,res){
    var user = new User(req.body);
    console.log("====================");
    console.log(user);
    user.setCode();
    user.setPassword(req.body.password);

    //save user and generate jwt
    user.save((err)=>{
        if(err){
            console.error(err);
            res.status(201).json(err);
        }else{
            var token = user.generateJwt();
            res.status(201).json({"status":true, "token":token})
        }

    })
}

module.exports.update = function(req,res){
    console.log(req.body);
    var user = new User(req.body);
    //user.setCode();
    user.setPassword(req.body.password);

    User.findOneAndUpdate({code:req.body.code},{new:true},(err,rows)=>{
        if(err){
            console.error(err);
            res.status(250).json({"message":"user update failed"});
        }
        else{
            console.log(rows);
            console.log("%d collections affected",rows);
            var token = user.generateJwt();
            res.status(201).json({"token":token});
        }
    })
}

module.exports.login = function(req,res){
    console.log("Init....");
    passport.authenticate('local',function(err,user,info){
        console.log(JSON.stringify(user));
        var token;
        //if passport catches erro
        if(err){
            res.status(504).json(err);
        }
        //if a user is found
        else if(user){
            console.log(user);
            token =user.generateJwt();
            res.status(201).json({"token":token,"role":user.role,"status":user.status});
        }
        //else if no user is found
        else
        res.status(201).json(new ApiResponse(false,401,info));
    })(req,res);
}

