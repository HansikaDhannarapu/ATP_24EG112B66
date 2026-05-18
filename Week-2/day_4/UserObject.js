//💡 Exercise 2: Update User Object
//Goal: Learn object cloning & adding new property
 let user = {
      name: "Ravi",
      city: "Hyderabad"
   };
/* -> Create a new object updatedUser
  -> Copy all properties from user
                              
  -> Add a new property age: 25
                              
  -> Print both objects
*/
let updatedUser={...user,age:25}
console.log(user)
console.log(updatedUser)
//                        ✅ Expected Output
//                              { name: "Ravi", city: "Hyderabad" }
//                             { name: "Ravi", city: "Hyderabad", age: 25 }
//                     
//                   👉 Original object should remain unchanged.*/


/*💡 Exercise 3: Create a function that receives any number of args as arguments and return their sum using REST parameter
*/
const findSum=(...numbers)=>{
    return numbers.reduce((sum,el)=>sum+el) //we should use 0 in case of objects only
}
let result=findSum(10,20,30)
console.log(result)