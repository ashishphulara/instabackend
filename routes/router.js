const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const User = mongoose.model("User");

router.get("/newData", async (req, res) => {
    User.find().sort({createdAt: -1}).then(posts=>{res.json(posts)}).catch(err=>{console.log(err)});

})

router.post("/user", async ( req ,res)=>{
    const {userName , location ,description, file } = req.body;

if(!userName ||!location ||!description ||!file){
    return res.json({message : "Please fill all the fields"})

}
const newUser = new User({
    userName,
    location,
    description,
    file
})
 await newUser.save().then((result)=>{
    return res.json({newUser : result})
}).catch((err)=>{console.log(err);})

res.json("ok")

})
module.exports = router;


