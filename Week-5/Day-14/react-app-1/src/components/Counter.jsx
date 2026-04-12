import { useState } from "react";

function Counter(){
    //state 
    const[count,setCount]=useState(0);//[state,fxn to modify state]
    //functions to modify the state
    const increment =()=>{
        setCount(count+1)
    }
    const decrement=()=>{
        setCount(count-1)
    }
    console.log("counter componet")
    return(
        <div className="text-center p-10 border">
            <h1 className="text-6xl">Count:{counnt}</h1>
            <button className="bg-green-500 text-white px-4 py-2 m-2" onClick={increment}>+</button>
            <button className="bg-red-500 text-white px-4 py-2 m-2" onClick={decrement}>-</button>
        </div>
    )
}
export default Counter