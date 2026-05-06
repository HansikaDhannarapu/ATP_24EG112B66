import exp from 'express'
import { config } from 'dotenv'
import { connect } from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import { authorApp } from './APIs/AuthorAPI.js'
import { adminApp } from './APIs/AdminAPI.js'
import { commonApp } from './APIs/commonAPI.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
config()

const app = exp()

//add cookie parser middleware
app.use(cookieParser())
//body paser middleware
app.use(exp.json())

app.use(cors({
  origin:['http://localhost:5137','https://atp-24-eg-112-b66.vercel.app'],
  credentials:true
}))

app.get("/test-route", (req, res) => {
  res.send("NEW CODE IS RUNNING");
});

app.use("/user", userApp)
app.use("/author", authorApp)
app.use("/admin", adminApp)
console.log("COMMON APP:", commonApp);
app.use("/auth", commonApp)

const connectDB = async () => {
    try {
        await connect(process.env.DB_URL)
        console.log("database connected")
        const port = process.env.PORT || 4000
        app.listen(port, () => {
            console.log(`server is running on port ${port}`)
        })
    }
    catch (error) {
        console.log("error is db connect ",error)
    }
}

connectDB()


//handle invalid path
app.use((req, res, next) => {
  console.log(req.url);
  res.status(404).json({ message: `path ${req.url} is invalid` });
});
app.get("/",(req,res)=>{
  res.send("hello world")
})
//to handle eerrors
app.use((err, req, res, next) => {
  console.log("error is ",err)
  console.log("Full error:", JSON.stringify(err, null, 2));
  //ValidationError
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  //CastError
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`,
    });
  }

  //send server side error
  res.status(500).json({ message: "error occurred", error: "Server side error" });
});
/*import exp from 'express'
import {config} from 'dotenv'
import {connect} from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import {authorApp} from './APIs/AuthorAPI.js'
import {adminApp} from './APIs/AdminAPI.js'
import { commonApp } from './APIs/commonAPI.js'
import cors from 'cors'

import cookieParser from 'cookie-parser'
config()
const app=exp()

//cookie parser middleware
app.use(cookieParser())

//cors
app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true
}))

//body parser middleware
app.use(exp.json())


//path level middleware
app.use("/user-api",userApp)
app.use("/author-api",authorApp)
app.use("/admin-api",adminApp)
app.use("/auth",commonApp)


//connect to db
const connectDB=async()=>{
    try{
        await connect(process.env.DB_URL)
        console.log("DB Connected")
        //assign port
        const port=process.env.PORT  || 5000
        app.listen(port,()=>console.log(`server listening to ${port}...`))
    }catch(err){
        console.log("Error in DB Connect",err)
    }
}

connectDB()

//to handle invalid path
app.use((req,res,next)=>{
    console.log(req.url)
    res.status(404).json({message:`Path ${req.url} is Invalid path`})
})

//Error handling middleware
app.use((err, req, res, next) => {
  console.log("Error name:", err.name);
  console.log("Error code:", err.code);
  console.log("Error cause:", err.cause);
  console.log("Full error:", JSON.stringify(err, null, 2));
  //ValidationError
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  //CastError
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} "${value}" already exists`
    });
  }

  //send server side error
  res.status(500).json({ message: "error occurred", error: "Server side error" });
}); */




