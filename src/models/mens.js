const express=require('express');
const mongoose = require('mongoose');
const menSchema=mongoose.Schema(
    {
        ranking:{
            type:Number,
            required:true,
            unique:true
        },
        name:{
            type:String,
            required:true,
            trim:true
        }

    }
)
const MensRanking=new mongoose.model("MenRanking",menSchema)
module.exports = MenRanking;