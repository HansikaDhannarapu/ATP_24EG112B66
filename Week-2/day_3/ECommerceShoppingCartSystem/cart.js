//ii. cart.js - Shopping cart operations
import { getProductById, checkStock } from './product.js';
                          
  let cartItems = [];
                          
 // TODO: Implement these functions
                          
  export function addToCart(productId, quantity) {
    // 1. Get product details
    // 2. Check stock availability
    // 3. Check if product already in cart
    //    - If yes, update quantity
    //    - If no, add new item
    // 4. Return success/error message
    let prod=getProductById(productId)
    if(!prod){
        return "Product not found"
    }
    if(!checkStock(productId,quantity)){
        return "Stoct is not enough"
    }
    for(let i of cartItems){
        if(i.productId==productId){
            i.quantity+=quantity
            return "Quantity Updated"
        }
    }
    cartItems.push({productId,quantity})
    return "Added new item"
  }
                          
  export function removeFromCart(productId) {
    // Remove product from cart
    cartItems=cartItems.filter(i=>i.productId!=productId)
    return "Item removed"
  }
  
  export function updateQuantity(productId, newQuantity) {
    // Update quantity of product in cart
    // Check stock before updating
    if(!checkStock(productId,newQuantity)){
        return "Stock not available"
    }
    for(let i of cartItems){
        if(i.productId==productId){
            i.quantity=newQuantity
            return "Quantity Updated" 
        }
    }
    return "Item is not found"
  }
                          
  export function getCartItems() {
    // Return all cart items with product details
    let items=[]
    for(let i of cartItems){
        let product=getProductById(i.productId);
        items.push({
            name:product.name,
            price:product.price,
            quantity:i.quantity
        })
    }
    return items
  }
                          
  export function getCartTotal() {
    // Calculate total price of all items in cart
    // Return total
    let total=0
    for(let i of cartItems){
        let prod=getProductById(i.productId)
        total+=prod.price*i.quantity
    }
    return total
  }
                          
  export function clearCart() {
    //Empty the cart
    cartItems=[]
  }
