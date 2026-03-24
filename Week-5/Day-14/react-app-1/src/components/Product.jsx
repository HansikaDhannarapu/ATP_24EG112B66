function Product(props){
    //{productObj:{}}
    const {productObj}=props;
    //state
    //return a react element
    return(
    
        <div className="bg-pink-100 box-border border-2 border-violet-500 shadow-md shadow-red-400 rounded-2xl p-4">
        <h1>Product Component</h1>
        <h2 className="text-2xl text-amber-700">{productObj.title}</h2>
        <p className="font-bold">{productObj.price}</p>
        <p className="font-light">{productObj.description}</p>
        
        </div>
    )
}
export default Product