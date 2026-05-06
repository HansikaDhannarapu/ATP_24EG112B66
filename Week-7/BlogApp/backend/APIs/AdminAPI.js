import exp from 'express'
import { verifyToken } from '../middlewares/VerifyToken.js'
import { UserModel } from '../models/UserModel.js'

export const adminApp = exp.Router()

//Read all articles(optional)
//Block  users
//  Unblock user 

//get all users and authors
adminApp.get("/users", verifyToken("ADMIN"), async (req, res) => {
    const users = await UserModel.find({ role: { $in: ["USER", "AUTHOR"] } }).select("-password");
    res.status(200).json({ message: "Users fetched successfully", payload: users })
})

//view article
adminApp.get("/article", verifyToken("ADMIN"), async (req, res) => {
    //get all articles
    const articles = await ArticleModel.find()
    res.status(200).json({ message: "Articles fetched successfully", payload: articles })
})

//block user
adminApp.put("/user/:id", verifyToken("ADMIN"), async (req, res) => {
    const { id } = req.params
    const user = await UserModel.findByIdAndUpdate(id, { isUserActive: false })
    res.status(200).json({ message: "User blocked successfully", payload: user })
})

//unblock user
adminApp.put("/user-unblock/:id", verifyToken("ADMIN"), async (req, res) => {
    const { id } = req.params
    const user = await UserModel.findByIdAndUpdate(id, { isUserActive: true })
    res.status(200).json({ message: "User unblocked successfully", payload: user })

})