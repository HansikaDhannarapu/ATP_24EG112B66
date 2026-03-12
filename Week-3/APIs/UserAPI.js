//cretate min-express app(Seperate route)
import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import {hash,compare} from 'bcryptjs' 
import jwt from 'jsonwebtoken' //choose a variable to import and then destruct it as below
const {sign}=jwt // to encode we use this fxn from jsonwebtoken
import {verifyToken} from '../middlewares/verifyToken.js'
export const userApp = exp.Router()

//Define USER REST API Roiutes
  //CREATE NEW USER
  userApp.post("/users",verifyToken,async(req,res)=>{
    //get new user obj fro req
    const newUser=req.body


    //hash the password
    const hashedPassword=await hash(newUser.password,10)
    //replace the plain password with hashed pass
    newUser.password=hashedPassword


    //create new user document (db)
    const newUserDocument= new UserModel(newUser)
    //save
   const result= await newUserDocument.save()
    console.log("result:",result)
   
    //send req
    res.status(201).json({message:"user created",result})
    // we need try catch block for this upto version 4 but from version 5 it is not needed
  })

  //read all users
  userApp.get("/users",verifyToken,async(req,res)=>{ //as we mentioned verifyToken it becomes a protected route

    //red al users from db 
   let usersList=await UserModel.find()
   //send res
   res.status(200).json({message:"users",payload:usersList})
  })

  //read a user by objID
  userApp.get("/user",verifyToken,async(req,res)=>{
    //read user email from req
    const emailOfUser=req.user?.email
  //read obj id from req params
        // const uid=req.params.id
  //find user by id
              //const userObj=await UserModel.findById(uid)
    const userObj=await UserModel.findOne({email:emailOfUser}).populate("cart.product") //this below line and also the const emailOfUser line will make sure that the details of only loggined user details will be shown
    // later we have added the populate method so that we can see the entire product document, whereas before when we didnt add populate method we used to get only productId in the nested doc
    // this is nothing but creating a reference type doc


  //if user not found
  if(!userObj){
     //if userobj is null 
   return res.status(404).json({message:"user not found"})
  }
  //send res
  res.status(200).json({message:"user found ",payload:userObj})
})

// update user id
userApp.put("/users/:id",verifyToken,async(req,res)=>{
  //get modified user from req
  const modifiedUser=req.body
  const uid=req.params.id
  //find user by id & update
  const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{new:true,runValidators:true})
  res.status(200).json({message:"user modified",payload:updatedUser})
  
  //send res
})


 //delete user by id
 userApp.delete("/users/:id",verifyToken,async(req,res)=>{
  //get the iser id from req params to delete
  const uid=req.params.id
  //to delete the user
  const deletedUser=await UserModel.findByIdAndDelete(uid)
  //if deleted user is not present
  if(!deletedUser)
    res.status(404).json({message:"User not found"})
  //send res
  res.status(200).json({message:"user deleted",payload:deletedUser})
 })


 //user login
 userApp.post("/auth",async(req,res)=>{
  //get user cred obj from client
  const {email,password}=req.body
  //verify email
  let user=await UserModel.findOne({email:email})
  //if email not existed
  if(!user){
    return res.status(400).json({message:"Invalid email"})
  }
  //compare passwords
  let result=await compare(password,user.password)
  //if passwords not matched
  if(!result){
    return res.status(400).json({message:"Invalid password"})
  }
  //if passwors are matched
   //create token (jsonwebtoken -jwt --jaat)
     //install jsonebtoken so that it can encode
   const signedToken=sign({email:user.email},process.env.SECRET_KEY,{expiresIn:1000}) 
   //time in millisec:"",w for weeks, nrml no. will be considered as secs
  
   // store token as httpOnly cookie
   res.cookie("token",signedToken,{
    httpOnly:true,
    sameSite:"lax",  //if that belongs to same domain or not(strict,none,lax these are the 3 diff types)
    secure:false
   })

   //send token in res
  res.status(200).json({message:"login success",payload:user})
 })
 //app.use(verifyToken) ->every req
 //userApp.get(path,verifyToken,req-handler) ->specific route

/*

 //add product to the cart and 
 userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
  //get product if from url params
  let productId=req.params.pid;
  //get current user details
  const emailOfUser=req.user?.email
  //get user from db
   <<  const user=await UserModel.findOne({email:emailOfUser})
  //if user is not found
  if(!emailOfUser){
    return res.status(404).json({message:"User not found"})
}  >>
//add product to cart

let result=await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
if(!result){
  return res.status(404).json({message:"User not found"})
}
//console.log(result)
res.status(200).json({message:"Product added to cart"})
 })

 */
// the above commented lines are for normal product property 
//but now before add.first it should check that product is already in the cart 
//if the product is in the cart ,then increment the count by 1,if not add that product to cart

 userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
  let productId=req.params.pid;
  const emailOfUser=req.user?.email
  let result=await UserModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}})
  if(!result){
  return res.status(404).json({message:"User not found"})
}
res.status(200).json({message:"Product added to cart"})


 })