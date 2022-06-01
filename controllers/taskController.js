const Task=require('../models/Task');
const asyncHandler=require('express-async-handler');
exports.getAllTasks=asyncHandler(async(req,res,next)=>{
    const tasks=await Task.find();
    res.status(200).json({tasks});
})

exports.createTask=asyncHandler(async(req,res,next)=>{
    const {name}=req.body;
    await Task.create({name});
    res.status(201).json('Created');
})

exports.getSingleTask=asyncHandler(async(req,res,next)=>{
    const {id}=req.params;
    const task=await Task.findById(id);
    res.json({task});
})

exports.editTask=asyncHandler(async(req,res,next)=>{
    const {id}=req.params;
    const task=await Task.findByIdAndUpdate(id,{$set:req.body},{new:true});
    res.json({task});
})
exports.deleteTask=asyncHandler(async(req,res,next)=>{
    const {id}=req.params;
    const task=await Task.findByIdAndDelete(id);
    res.json({task});
})

