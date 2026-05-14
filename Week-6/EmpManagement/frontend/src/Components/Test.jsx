import React from 'react'
import { useContext } from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import { useCounterStore } from '../store/CounterStore'

function Test() {
  
  const {counter1,changeCounter1}=useContext(counterContextObj)
  let newCounter1=useCounterStore((state)=>state.newCounter1)
  let incrementCounter1=useCounterStore((state)=>state.in)
  return (
    <div>
      <h1 className='text-4xl'>Counter1:{counter1}</h1>
      <button onClick={changeCounter1} className='bg-amber-300 p-5'>Change</button>
            <h1 className='text-4xl'>New Counter1:{newCounter1}</h1>
      <button onClick={incrementCounter1} className='bg-pink-300 p-5'>Change</button>

    </div>
    

  )
}

export default Test