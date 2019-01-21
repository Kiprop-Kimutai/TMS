var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{type:String,required:true},
    email:{type:String,unique:true},
    role:{type:String},
    password:{type:String},
    status:{type:Boolean,required:true},
    hash:String,
    salt:String
})

userSchema.methods.logger  = function() {
    console.log("logging....");
}
userSchema.methods.setCode = function(){
    this.code = new Date().getTime().toString().substr(8,5);
}
userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password,this.salt,1000,64,'sha512').toString('hex');

}
userSchema.methods.validPassword = function(password){
    var hash = crypto.pbkdf2Sync(password,this.salt,1000,64,'sha512').toString('hex');
    return this.hash == hash;
}
userSchema.methods.generateJwt = function(){
    var expiry = new Date();
    expiry.setDate(expiry.getDate()+7);//set expiry to seven days after
    return jwt.sign({
        _id:this._id,
        email:this.email,
        name:this.username,
        exp:parseInt(expiry.getTime()/1000)
    },"MY_SECRET") //do not keep secret key in code
}
mongoose.model('User',userSchema);
