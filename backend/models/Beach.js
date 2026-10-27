const mongoose = require('mongoose');
const beachSchema = new mongoose.Schema({
  name:{type:String,required:true,trim:true}, city:{type:String,required:true}, state:{type:String,required:true},
  description:{type:String,required:true}, image:{type:String,default:''}, rating:{type:Number,min:0,max:5,default:4},
  safetyLevel:{type:String,enum:['Safe','Moderate','Caution'],default:'Safe'}, bestTime:{type:String,default:'October - March'},
  facilities:[String], activities:[String], latitude:Number, longitude:Number
},{timestamps:true});
module.exports=mongoose.model('Beach',beachSchema);
