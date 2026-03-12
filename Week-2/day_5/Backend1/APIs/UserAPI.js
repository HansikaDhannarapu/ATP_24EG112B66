
//create mini-express application as we already created actuall application in server(Seperate Route)
import exp from 'express'
export const Userapp=exp.Router()

//test data 
let users=[]
   Userapp.get('/users',(req,res)=>{
    res.json({message:"All Users",payload:users})
})
   Userapp.get('/users/:id',(req,res)=>{
    let idOfUrl=Number(req.params.id)
    let user=users.find(userObj=>userObj.id===idOfUrl)

    if(user===undefined){
        return res.json({mesaage:"User not found"})
    }
   return res.json({mesaage:"User found"})
   })

   Userapp.post('/users',(req,res)=>{
    //get new user from client
    const newUser=req.body 
    //push user into users
    users.push(newUser)
    //send res
    res.json({message:"User Created"})
})
  Userapp.put('/users',(req,res)=>{
    //get modify user from client{}
    let modifiedUser=req.body
    //get index of existing user in users array
    let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
    //if user not found
    if(index===-1){
        return res.json({mesaage:"User not found"})
    }
    //update user with index
    users.splice(index,1,modifiedUser)
    //send res
    res.json({message:"User modified"})
  })
  Userapp.delete('/users/:id',(req,res)=>{ //we need to keep the : afters users so that it becomes a url parameter otherwise it becomes the url path
    //get the id of user from url parameter
    let idOfUrl =Number(req.params.id) //{id:1}
    //find index of the user
    let index=users.findIndex(userObj=>userObj.id===idOfUrl)
    //if user not found
    if(index===-1)
                return res.json({mesaage:"User not found to delete"})

    //delete user by index
    users.splice(index,1)
    //send res
    res.json({message:"User removed"})
  })
