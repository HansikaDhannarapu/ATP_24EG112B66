//ASSIGNMENT 1:You are building a shopping cart summary for an e-commerce website.

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
//    1. Use filter() to get only inStock products
let f=cart.filter((i)=>{
    if(i.inStock)
        return i
})
console.log(f)
//    2. Use map() to create a new array with:  { name, totalPrice }
let m=cart.map((i)=>({
    name:i.name,
    totalPrice:i.price*i.quantity
}))
console.log(m)
//    3. Use reduce() to calculate grand total cart value
let r=cart.reduce((i,j)=>i+j.price*j.quantity,0)
console.log(r)
//    4. Use find() to get details of "Mouse"
let fi=cart.find((i)=>i.name==="Mouse")
console.log(fi)
//    5. Use findIndex() to find the position of "Keyboard"
let fIndex=cart.findIndex((i)=>i.name==="Keyboard")
console.log(fIndex)










