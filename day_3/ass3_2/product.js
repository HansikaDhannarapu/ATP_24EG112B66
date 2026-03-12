/*Assignment 2: 
-------------
E-Commerce Shopping Cart System :
      Building a shopping cart like Amazon or Flipkart

Requirements:
      Create a modular shopping system with 5 files:

           i. product.js - Product catalog
           */
  // Product database (simulated)
  const products = [
    { id: 1, name: 'Laptop', price: 50000, stock: 10, category: 'electronics' },
    { id: 2, name: 'Phone', price: 30000, stock: 15, category: 'electronics' },
    { id: 3, name: 'Headphones', price: 2000, stock: 25, category: 'accessories' },
    { id: 4, name: 'Mouse', price: 500, stock: 50, category: 'accessories' },
    { id: 5, name: 'Keyboard', price: 1500, stock: 30, category: 'accessories' }
  ];
                          
 // TODO: Implement these functions
                          
  export function getProductById(id) {
    // Find and return product by ID
    for (let p of products) {
    if (p.id==id) {
      return p;
    }
  }
  return null;
                   

  }
   export function getAllProducts() {
    // Return all products
    return products
  }
   
  
  export function getProductsByCategory(category) {
    // Filter products by category
    let prod=[];
    for (let p of products) {
      if (p.category==category) {
         prod.push(p);
    }
  }
  return prod;
  }
   
  
  export function searchProducts(query) {
    // Search products by name (case-insensitive)
     let sProd=[];
     query = query.toLowerCase();
     for (let p of products) {
       if (p.name.toLowerCase().includes(query)) {
         sProd.push(p);
    }
  }
  return sProd;
  }
                          
  export function checkStock(productId, quantity) {
    // Check if product has enough stock
    // Return true/false
      let product=getProductById(productId);
      if (product && product.stock>=quantity) {
        return true;
      }
     return false;
  }
                          
  export function reduceStock(productId, quantity) {
    // Reduce product stock after purchase
    let red=getProductById(productId);
    if(red){
      red.stock=red.stock-quantity;
    }
}

