import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import { hash, compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/VerifyToken.js'
import { upload } from '../config/multer.js'
const { sign } = jwt
export const commonApp = exp.Router()
import { uploadToCloudinary } from '../config/cloudinaryUpload.js'



//in express no need try catch it handles error automatically
let allowedRoles = ["USER", "AUTHOR"]
//route for register
commonApp.post("/users", upload.single("profileImageUrl"), async (req, res) => {
    //get user from req
    const newUser = req.body

    // add profileImageUrl if file is uploaded
    if (req.file) {
        newUser.profileImageUrl = req.file.path;
    }
    //check role
    if (!newUser.role || !allowedRoles.includes(newUser.role.toUpperCase())) {
        return res.status(400).json({ message: "Invalid role" })
    }
    //check if user already exists
    const existingUser = await UserModel.findOne({ email: newUser.email })
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" })
    }
    let cloudinaryReslt;
//upload image to cloudinary from memory storage
if(req.file){
    cloudinaryReslt = await uploadToCloudinary(req.file.buffer)
}
//add CDN link to the user obj
if(cloudinaryReslt){
    newUser.profileImageUrl = cloudinaryReslt.secure_url
}
    //run validation password it should not be empty 
    
    //hash password and replaace it with plain password
    newUser.password = await hash(newUser.password, 12)
    //normalize role to uppercase
    newUser.role = newUser.role.toUpperCase()
    const newUserDoc = new UserModel(newUser)
    //save user
    await newUserDoc.save()
    //resend res 
    res.status(201).json({ message: "User registered successfully" })

})


// route for login
commonApp.post("/login", async (req, res) => {
    //get user cred obj
    const { email, password } = req.body
    //find user bt email
    const user = await UserModel.findOne({ email: email })
    //if user not found
    if (!user) {
        return res.status(401).json({ message: "Invalid email" })
    }
    if (user.isUserActive === false) {
        return res.status(403).json({ message: "Your account has been blocked by the admin." })
    }
    //compare password
    const isMatched = await compare(password, user.password)
    if (!isMatched) {
        return res.status(401).json({ message: "Invalid password" })
    }


    //create jwt
    const signedToken = sign({id:user._id, email: email, role: user.role,firstName:user.firstName,lastName:user.lastName,profileImg:user.profileImg}, process.env.SECRET_KEY,{expiresIn:"1H"})

    //set token in cookie
    res.cookie("token", signedToken, { httpOnly: true, secure: true, sameSite: "none",maxAge:60*60*1000 })

    //remove password from user obj
    let userObj = user.toObject()
    delete userObj.password


    //send 
    res.status(200).json({ message: "login successfull", payload: userObj, user: userObj })
})

//route for logout
commonApp.get("/logout", async (req, res) => {
    
    res.clearCookie("token", { httpOnly: true, secure: true, sameSite: "none" })
    res.status(200).json({ message: "logout successfull" })

})
//page refresh check
commonApp.get("/check-auth",verifyToken("USER","AUTHOR","ADMIN"),async(req,res)=>{
    res.status(200).json({message:"authenticated",payload:req.user})
})
//change password
commonApp.put("/password",verifyToken("USER","AUTHOR","ADMIN"),async(req,res)=>{
    const {currentPassword,newPassword}=req.body
    const user = await UserModel.findById(req.user?.id)
    if(user.password !== await hash(currentPassword,12)){
        return res.status(401).json({message:"Invalid current password"})
    }
    user.password = await hash(newPassword,12)
    await user.save()
    res.status(200).json({message:"Password changed successfully",payload:user})
})
/*import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import jwt from 'jsonwebtoken'
const {sign}=jwt
import {hash,compare} from 'bcryptjs'
import {verifyToken} from '../middleware/verifyToken.js'
import {config} from 'dotenv'
config()
export const commonApp=exp.Router()

//ROUTE FOR REGISTER
commonApp.post("/users",async(req,res)=>{
    let allowedRoles=["USER","AUTHOR"]

    //get user from req
    const newUser=req.body
    console.log(newUser);

    //check roles
    if(!allowedRoles.includes(newUser.role))
        return res.status(400).json({message:"Invalid role"})

    //new added line to run validators 
    //run validators manually
    

    //hash password and replace plain with hashed one
    newUser.password=await hash(newUser.password,12)

    //create New user Document
    const newUserDoc=new UserModel(newUser)

    //save document
    await newUserDoc.save() //Validators will run only when call save fxn

    //send res
    res.status(201).json({message:"User created"})
})

//ROUTE FOR LOGIN (USER,AUTHOR,ADMIN)
commonApp.post("/login",async(req,res)=>{

    //get user credentials object
    const {email,password}=req.body

    //find user by email
    const user=await UserModel.findOne({email:email})

    //if not user
    if(!user)
        return req.status().json({message:"Invalid email"})

    //compare password
    const isMatched=compare(password,user.password)
    if(!isMatched)
        return res.status(400).json({message:"Invalid Password"})

    //create jwt
    const signedToken=sign({id:user._id,email:email,role:user.role,firstName:user.firstName,lastName:user.lastName,profileImageUrl:user.profileImageUrl},process.env.SECRET_KEY,{expiresIn:"1h"})

    //set token to res header as httpOnly cookie
    res.cookie("token",signedToken,{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })

    //remove password form user document
    const userObj=user.toObject()
    delete user.password

    //send res
    res.status(200).json({message:"Login Success",payload:userObj})
    
})



//ROUTE FOR LOGOUT
commonApp.get("/logout",(req,res)=>{
    //delete token from cookie storage
    res.clearCookie("token",{
        httpOnly:true,
        secure:false,
        sameSite:"lax"
    })

    //send res
    res.status(200).json({message:"Logout success"})
})


//ROUTE FOR PAGE REFRESH
commonApp.get("/check-auth",verifyToken("USER","AUTHOR","ADMIN"),(req,res)=>{
    res.status(200).json({
        message:"authenticated",
        payload:req.user
    })
})


/*need to be changeddddd(prob server error)
//change password
commonApp.put("/password",verifyToken("USER","AUTHOR","ADMIN"),async(req,res)=>{
    //check current password and new password are same
    //get current password of user/admin/author
    //check the current password of req and user are not same

    const {currentPassword,newPassword}=req.body
    const pass=await UserModel.findOne({password:currentPassword})
    if(!pass){
        return res.status().json({message:"Entered password is wrong"})
    }
    if(currentPassword===newPassword){
        return res.status().json({message:"New password cannot be same as Old password"})
    }
    //hash new password   
    //replace current password of user with hashed new password
    newPassword=await hash(newPassword,12)
    //save
    await newPassword.save()

    //send res
    res.status().json({message:"Password is changed",payload:newPassword})

})
*/
    


