const mongoose = require('mongoose');
const reportSchema = new mongoose.Schema({
  user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}, beach:{type:mongoose.Schema.Types.ObjectId,ref:'Beach',required:true},
  category:{type:String,enum:['Lost Item','Safety Hazard','Pollution','Medical Emergency','Other'],required:true},
  description:{type:String,required:true}, status:{type:String,enum:['Open','In Review','Resolved'],default:'Open'}
},{timestamps:true});
module.exports=mongoose.model('Report',reportSchema);
