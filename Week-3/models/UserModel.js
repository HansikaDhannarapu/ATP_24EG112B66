import {Schema,model,Types} from 'mongoose'

//we add the below cartSchema to make a nrml doc into nested doc

const cartSchema= new Schema({   //cart schema is a doc of 2 prop
    product:{
        type:Types.ObjectId,
        ref:"product" //name of the product model
        //the above line will give the reference of the created collection
    
    },
    count:{
        type:Number,
        default:1
    }


})




//cretae User schema(username,pass,email,age) 
//            //import Schema method from mongoose       //string -0 is js datatype & String is 
const userSchema=new Schema({
    //structure of user resourse
    username:{
        type:String,
        required:[true,"Username is required"],  //we use this as username is mandatory
        minLength:[4,"Min length of username is 4 characters"],
           //this validations rules are not mandatory, this is for the applications which need some specific conditions to meet
        maxLength:[6,"Username size exceeds 6 chars"]
    },    //here all the rules we applied must be satisfiedthen only one can enter the username
    password:{
        type:String,
        required:[true,'Password required']
    } ,
    email:{
        type:String,
        required:[true,"email is required"],
        unique:[true,"Email already existed"] //here unique is not a validation rule, but it is zst a option 
    },
    age:{
        type:Number
    },
    cart:[cartSchema]
    },
    {
    versionKey:false,
    timestamps:true
    }


)


//Generate UserModel 
  //import model from mongoose
export const UserModel=model("user",userSchema) //here this line will create a user collection in mongodb
//here when we create a singular type model name,automatically collection with plural name of model will be created