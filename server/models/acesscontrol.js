var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var acessControlSchema = new Schema({
  role:{type:String,required:true,unique:true},
  menus:{type:Object,required:true}
})

mongoose.model('AccessControl',acessControlSchema);
