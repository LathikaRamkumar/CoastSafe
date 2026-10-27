const Beach=require('../models/Beach');
exports.list=async(req,res)=>{try{const q=req.query.search?.trim();const filter=q?{$or:[{name:new RegExp(q,'i')},{city:new RegExp(q,'i')},{state:new RegExp(q,'i')}]}:{};res.json(await Beach.find(filter).sort({rating:-1}));}catch(e){res.status(500).json({message:'Unable to load beaches'});}};
exports.get=async(req,res)=>{try{const b=await Beach.findById(req.params.id);if(!b)return res.status(404).json({message:'Beach not found'});res.json(b);}catch(e){res.status(400).json({message:'Invalid beach id'});}};
exports.create=async(req,res)=>{try{res.status(201).json(await Beach.create(req.body));}catch(e){res.status(400).json({message:e.message});}};
exports.update=async(req,res)=>{try{res.json(await Beach.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true}));}catch(e){res.status(400).json({message:e.message});}};
exports.remove=async(req,res)=>{try{await Beach.findByIdAndDelete(req.params.id);res.json({message:'Beach deleted'});}catch(e){res.status(400).json({message:e.message});}};
