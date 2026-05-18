// iv. payment.js - Payment processing
  import { reduceStock } from './product.js';
  import { getCartItems, getCartTotal, clearCart } from './cart.js';
  import { applyDiscount } from './discount.js';
                          
  // TODO: Implement these functions
                          
  export function processPayment(paymentMethod, couponCode = null) {
    // 1. Get cart items and total
    // 2. Apply discount if coupon provided
    // 3. Validate payment method (card/upi/cod)
    // 4. Process payment (simulate)
    // 5. Reduce stock for all items
    // 6. Clear cart
    // 7. Generate order summary
    let items=getCartItems()
    let subtotal=getCartTotal()
    if(!validatePaymentMethod(paymentMethod)){
        return{
            status:"failed",
            message:"Invalid payment method"
        }
    }
    let discountResult;
    if(couponCode){
        discountResult=applyDiscount(subtotal,couponCode,items)
    }
    else{
        discountResult={
            originalTotal:subtotal,
            discount:0,
            finalTotal:subtotal
        }
    }
    for(let i of items){
        reduceStock(i.productId,i.quantity)
    }
    clearCart()
                            
    // Return order summary:
    // {
    //   orderId: ...,
    //   items: [...],
    //   subtotal: ...,
    //   discount: ...,
    //   total: ...,
    //   paymentMethod: ...,
    //   status: 'success/failed',
    //   message: '...'
    // }
    return{
        orderId:generateOrderId(),
        items:items,
        subtotal: subtotal,
        discount: discountResult.discount,
        total: discountResult.finalTotal,
        paymentMethod: paymentMethod,
        status: "success",
        message: "Order placed successfully"
    }
  }
                          
  export function validatePaymentMethod(method) {
    // Check if method is valid (card/upi/cod)
    if(method=="card"||method=="upi"||method=="cod"){
        return true
    }
    return false
  }
                          
  function generateOrderId() {
    // Generate random order ID
    return 'ORD' + Date.now();
  }
