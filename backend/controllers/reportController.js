const Report=require('../models/Report');
exports.create=async(req,res)=>{try{const {beach,category,description}=req.body;if(!beach||!category||!description)return res.status(400).json({message:'Beach, category and description are required'});res.status(201).json(await Report.create({user:req.user._id,beach,category,description}));}catch(e){res.status(400).json({message:e.message});}};
exports.mine=async(req,res)=>res.json(await Report.find({user:req.user._id}).populate('beach','name city').sort({createdAt:-1}));
exports.all=async(req,res)=>res.json(await Report.find().populate('user','name email').populate('beach','name city').sort({createdAt:-1}));
exports.update=async(req,res)=>res.json(await Report.findByIdAndUpdate(req.params.id,{status:req.body.status},{new:true}));
