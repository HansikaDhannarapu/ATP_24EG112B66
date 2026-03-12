import jwt from 'jsonwebtoken'
const {verify}=jwt
export function verifyToken(req,res,next){
    //token verification logic
   const token= req.cookies?.token
   if(!token){
    return res.status(401).json({message:"please login"})
   }
   try{
    //if token is existed
   const decodedToken=verify(token,'abcdef')
   console.log(decodedToken)
   //attach 
   req.user=decodedToken
   next()
  }catch(err){
   res.status(400).json({message:"session expired, please relogin"})
   }
    
} 