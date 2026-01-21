const express = require("express");
const  Recipe = require("../models/recipe.js")

const router = express.Router();


// Create Recipe
router.post("/", async(req,res)=>{
    try {
        //req.body.author = req.user._id;
        const recipe = await Recipe.create(req.body);
        //recipe._doc.author = req.user;
        res.status(201).json(recipe);
    }catch (err){
        res.status(500).json({err: err.message})
    }
})

module.exports = router