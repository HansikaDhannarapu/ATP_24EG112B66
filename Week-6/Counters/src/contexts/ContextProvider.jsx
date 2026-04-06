import {createContext,useState} from 'react'

//create context provider object
export const Context = createContext()

function ContextProvider({children}) {
 //state - instead of one number, we hold state for 4 different counters
 const [counters,setCounters] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0
 })

 //functions - now they accept an id to know which counter to change
 const increment = (id) => {
    setCounters(prev => ({ ...prev, [id]: prev[id] + 1 }))
 }

 const decrement = (id) => {
    setCounters(prev => ({ ...prev, [id]: prev[id] - 1 }))
 }

 //return context provider object
 return (
    <Context.Provider value={{counters, increment, decrement}}>
        {children}
    </Context.Provider>
 )
}

export default ContextProvider