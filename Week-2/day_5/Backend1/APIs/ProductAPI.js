//create mini-express application as we already created actuall application in server(Seperate Route)
import exp from 'express'

export const productapp=exp.Router()

//Create product API with below operations
let products=[]
productapp.get('/products',(req,res)=>{
    res.json({message:"All products",payload:products})
})

 //Create new Product({productId,name,brand,price}
    productapp.post('/products',(req,res)=>{
    const newProduct=req.body 
    products.push(newProduct)
    res.json({message:"Product Created"})
})
 //Read all product by brand
 productapp.get('/products/:brand',(req,res)=>{
    let brandOfUrl=String(req.params.brand)
    let product=products.find(i=>i.brand===brandOfUrl)
        if(product===undefined){
        return res.json({mesaage:":Product not found"})
    }
   return res.json({mesaage:"Product found"})
 })
     //update a product
     productapp.put('/products',(req,res)=>{
        let modifiedProduct=req.body
        let ind=products.findIndex(i=>i.productId===modifiedProduct.productId)
            if(ind===-1){
        return res.json({mesaage:"User not found"})
        }
        products.splice(ind,1,modifiedProduct)
        res.json({message:"Product modifies"})

     })
     //delete a product by id
     productapp.delete('/products/:id',(req,res)=>{
       let idOfUrl =Number(req.params.id) //{id:1}
       let ind=products.findIndex(i=>i.productId===idOfUrl)
       if(ind===-1)
        return res.json({mesaage:"User not found to delete"})
       products.splice(ind,1)
       res.json({message:"Product removed"})

     })


