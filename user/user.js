const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName:{type:String},
    location:{type:String},
    description:{type:String},
    file :{type:String,default : "no image"}
},{timestamps : true})
mongoose.model("User",userSchema);




