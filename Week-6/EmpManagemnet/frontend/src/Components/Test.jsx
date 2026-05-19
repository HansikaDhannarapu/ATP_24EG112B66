import React from 'react'
import { useContext } from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import { useCounterStore } from '../store/CounterStore'

function Test() {
  
  const {counter1,changeCounter1}=useContext(counterContextObj)
  let newCounter1=useCounterStore((state)=>state.newCounter1)
  let incrementCounter1=useCounterStore((state)=>state.in)
  return (
  <div className="flex items-center justify-center min-h-[70vh]">

    <div className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">

      {/* Counter 1 */}
      <div className="mb-8">

        <p className="text-sm font-medium text-slate-500 mb-2">
          Counter 1
        </p>

        <h1 className="text-5xl font-bold text-slate-800 mb-6">
          {counter1}
        </h1>

        <button
          onClick={changeCounter1}
          className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-2xl font-medium transition-all duration-300"
        >
          Change Counter1
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-200 my-8"></div>

      {/* New Counter 1 */}
      <div>

        <p className="text-sm font-medium text-slate-500 mb-2">
          New Counter 1
        </p>

        <h1 className="text-5xl font-bold text-slate-800 mb-6">
          {newCounter1}
        </h1>

        <button
          onClick={incrementCounter1}
          className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-2xl font-medium transition-all duration-300"
        >
          Increment Counter
        </button>
      </div>

    </div>
  </div>
)
}

export default Test