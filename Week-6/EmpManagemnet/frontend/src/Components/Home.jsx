import React from 'react'
import { useContext } from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import Test from './Test'
import { useCounterStore } from '../store/CounterStore'


function Home() {
  //call useCounterSrore hook to get the state of of zustand store
let newCounter=useCounterStore((state)=>state.newCounter)
let incrementCounter=useCounterStore((state)=>state.incrementCounter+1)
  const {counter,changeCounter}=useContext(counterContextObj)
  return (
    <div>
      <h1 className='text-4xl'>Counter:{counter}</h1>
      <button onClick={changeCounter} className='bg-amber-300 p-5'>Change</button>
      <h1 className='text-4xl'>New Counter:{newCounter}</h1>
      <button onClick={incrementCounter} className='bg-blue-300 p-5'>Increment New Counter</button>
      <Test/>
    </div>
  )
}

export default Home