const express =require("express");
const app = express();
const User = require("./user/user");
const conn = require("./connection/connection");
conn();
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/router");

mongoose.set('strictQuery', true)
app.use(express.json());
app.use(cors());
mongoose.connection.on("connected",()=>console.log("connected to mongoDB"))
mongoose.connection.on("error",()=>console.log("failed to connect mongoDB"))
app.use(require("./routes/router"))


const PORT = 6969 || process.env.PORT ;
app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)
})

