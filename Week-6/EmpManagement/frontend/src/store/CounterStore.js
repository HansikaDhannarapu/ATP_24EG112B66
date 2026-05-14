import {create} from 'zustand'

//create store
export const useCounterStore=create((set)=>({
    //state
    newCounter:0,
    newCounter1:100,


    //add user state (name,age,email)
    user:{name:"hansika",email:"hansika@mail.com",age:19},
    //function to change email
    changeEmail:()=>set({...user,email:"honey@mail.com"}),
    //function to change name and age
    changeNameAndAge:()=>set({...user,name:"honey",age:20}),


    //fxns to modify the state
    incrementCounter:()=>set((state)=>({newCounter:state.newCounter+1})),
    incrementCounter1:()=>set((state)=>({newCounter:state.newCounter+1})),
    decrementCounter:()=>set((state)=>({newCounter:state.newCounter-1})),

    //fxn to change newCounter to 500
    reset:()=>set({newCounter:500}),
    //function to decrement the newCounter1 by 20
    decrementCounter1:()=>set((state)=>({newCounter1:state.newCounter1-1}))


}))