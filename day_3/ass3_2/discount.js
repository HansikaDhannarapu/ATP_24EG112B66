//iii. discount.js - Coupon and discount logic
  // Available coupons
  const coupons = {
    'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
    'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
    'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
  };
                          
  // TODO: Implement these functions
                          
  export function validateCoupon(couponCode, cartTotal, cartItems) {
    // 1. Check if coupon exists
    // 2. Check minimum amount requirement
    // 3. Check category requirement (if any)
    // Return { valid: true/false, message: '...' }
    let coupon=coupons[couponCode]
    if(!coupon){
        return{valid:false,message:"Invalid Coupon"}
    }
    if(cartTotal<coupon.minAmount){
        return{valid:false,message:"Minimum amount not reached"}
    }
    return{valid:true,message:"Coupon applied"}
  }
                          
  export function calculateDiscount(couponCode, cartTotal) {
    // Calculate discount amount based on coupon type
    // Return discount amount
    let coupon=coupons[couponCode]
    if(coupon.type=="percentage"){
        return (cartTotal*coupon.value)/10
    }
    if(coupon.type=="flat"){
        return coupon.value
    }
    return 0
  }
                          
  export function applyDiscount(cartTotal, couponCode, cartItems) {
    // 1. Validate coupon
    // 2. If valid, calculate discount
    // 3. Return final and discount details
    // Return { 
    //   originalTotal: ..., 
    //   discount: ..., 
    //   finalTotal: ...,
    //   message: '...'
    // }
    let v=validateCoupon(couponCode,cartTotal,cartItems)
    if(!v.valid){
        return{
            originalTotal:cartTotal,
            discount:0,
            finalTotal:cartTotal,
            message:v.message
        }
    }
    let discount=calculateDiscount(couponCode,cartTotal)
    return{
        originalTotal:cartTotal,
        discount:discount,
        finalTotal:cartTotal-discount,
        message:"Discount applied"
       }

  }

