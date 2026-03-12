import {Schema,model} from 'mongoose'
 const productSchema=new Schema({
    productId:{
        type:String,
        required:[true,"ProductId is required"]
    },
    productName:{
        type:String,
        required:[true,"ProductName is required"]
    },
    price:{
        type:Number,
        min:[10000,"Min price is 10000"],
        max:[50000,"Max price is 50000"]
    },
    brand:{
        type:String,
        required:[true,"Brand is required"]
    }},
    {
      versionKey:false,
      timestamps:true
    }
 )

 export const ProductModel=model("product",productSchema)