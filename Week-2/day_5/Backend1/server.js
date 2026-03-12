/*
//create http server
import exp from 'express'
const app=exp() //it creates an express application and holds 
//to hold the express application use app as variable for storing every time

//set a port number
const port=1003
//assign port number to HTTP server
app.listen(port,()=>console.log(`server listening port ${port} ...`)) //port listen
// the above 3 lines of code will be enough to create a powerfull web server 

//Create API //purpose of APIs are to enable interacton btw applications
             //REST :: Representational state transfer (Use nouns for path)
             //api contains routes
  
  
  */
            //API is present to handle the request
 //Route to handle GET req of client //sample endpoint:(http://localhost:1003/users)
 /*

   app.get('/users',(req,res)=>{
    //send response to client
    res.json({message:"This is res for get users req"})
   })
//Route to handle POST req of client
  app.post('/users',(req,res)=>{
    res.json({message:"This res for create user"})
  })
 //Route to handle PUTreq of client
  app.put('/users',(req,res)=>{
    res.json({message:"This res for put server"})
  })
//Route to handle DELETE req of client
  app.delete('/users',(req,res)=>{
    res.json({message:"This res for delete server"})
  })
// THE ABOVE IS A SAMPLE TO UNDERSTAND HOW THIS WORKS BY USING DUMMY MESSAGES 
 
*/
 
import exp from 'express'

const app=exp() //it creates an express application and holds 

import {Userapp} from "./APIs/UserAPI.js";

import {productapp} from "./APIs/ProductAPI.js";

//use body parser middleware
app.use(exp.json())// will be explained later(it can pass the request on the body of the object)(it also converts the json into js)
// this ep.json is in-buit middleware , without this it is difficult to handle the post and put requests//
//this method returns a new function

//create custom middleware
//thhe below middleware has the parameters which can recieve the request , it can give the response and it can also forward it to next one
function middleware1(req,res,next){
  //send res from middleware1
      // res.json({message:"this is res from middleware1"})
console.log("Middleware1 executed") //if we write only this line without next ,it holds the res 
next()
}
function middleware2(req,res,next){
        // res.json({message:"this is res from middleware2"})
         console.log("Middleware2 executed") //if we write only this line without next ,it holds the res 
         next()

}
app.use(middleware1)
app.use(middleware2)


const port=1003
app.listen(port,()=>console.log(`server listening port ${port} ...`)) //port listen

//forward req to userAPI if path starts with /user-api
app.use('/user-api',Userapp)

//forward req to userAPI if path starts with /product-api
app.use('/product-api',productapp)






