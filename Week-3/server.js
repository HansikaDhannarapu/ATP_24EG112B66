//create express app (main app contains the http server and min contains the api routes)
import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './APIs/UserAPI.js'
import {productApp} from './APIs/ProductAPI.js'
import cookieParser from 'cookie-parser'
import { config }   from 'dotenv'     
config() //process.env.port,process.env.DB_URL (will expose all the enviromental variables)   

const app=exp()

//add body parser
app.use(exp.json())
//add cookie parser middleware
app.use(cookieParser())

//forward request to UserApp if path starts with /user-api
app.use("/user-api",userApp)
app.use("/product-api",productApp) 

const port=process.env.PORT || 4000

//connect to DB server
//connect("").then().catch()
async function connectDB() {
    try{

        await connect(process.env.DB_URL)
        console.log("DB connection success")

        //start server
         app.listen(4000,()=>console.log("server on port 4000..."))

    }catch(err){
        console.log("err in DB connection:",err)
    }
    
}
connectDB();

// error handling middleware (nrml middleware contains 3 parameters but ,middleware will also take the err as parameter which is called error handling middleware)



/*app.use((err,req,res,next)=>{
    res.status().json({message:"error occured",error:err.message})
})*/ //it is for sample but for actual application we use redefined one
app.use((err,req,res,next)=>{
    
    
    //validation error
    if((err.name==="ValidatorError")){
        return res.status(400).json({message:"error occured",error:err.message})
    }

    //cast error
    if((err.name==="CastError")){
        return res.status(400).json({message:"error occured",error:err.message})
    }

    //send server side error
    res.status(500).json({message:"error occured",error:err.message})
    

})

//error =>{name,message,callstack} these are the 3 props of an error