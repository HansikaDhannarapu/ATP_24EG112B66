import exp from 'express'
import {ProductModel} from '../models/ProductModel.js'
import {hash} from 'bcryptjs'
import {verifyToken} from '../middlewares/verifyToken.js'
export const productApp=exp.Router()

//1.create product
productApp.post("/products",verifyToken,async(req,res)=>{
    const newProduct=req.body
    const newProductDocument=new ProductModel(newProduct)
    const result=await newProductDocument.save()
    console.log("result:",result)
    res.status(201).json({message:"Product Created",result})
})
//2.read all products
productApp.get("/products",verifyToken,async(req,res)=>{
    let productsList=await ProductModel.find()
    res.status(200).json({message:"Products",payload:productsList})
})
//3.read by productId
productApp.get("/products/:pid",verifyToken,async(req,res)=>{
    const pid=req.params.pid
    const productObj=await ProductModel.findOne({productId:pid})
    if(!productObj){
        return res.status(200).json({message:"Product not found"})
    }
    return res.status(200).json({message:"Product found",payload:productObj})
})
//4.update a product by productId
productApp.put("/products/:pid",verifyToken,async(req,res)=>{
    const modifiedProduct=req.body
    const pid=Number(req.params.pid)
    const updatedProduct=await ProductModel.findOneAndUpdate({productId:pid},{$set:{...modifiedProduct}},{new:true,runValidators:true})
    res.status(200).json({message:"Product modified",payload:updatedProduct})
})
//.delete a product by productId
productApp.delete("/products/:pid",verifyToken,async(req,res)=>{
    const pid=req.params.pid
    const deletedProduct=await ProductModel.findOneAndDelete(pid)
    if(!deletedProduct){
        return res.status(404).json({message:"Product not found to delete"})
    }
    res.status(200).json({message:"Product deleted",payload:deletedProduct})
})