import React, { useContext } from "react";
import { counterContextObj } from "../contexts/ContextProvider";

function Home() {
  const {
    counter1,
    counter2,
    counter3,
    changeCounter1,
    changeCounter2,
    changeCounter3,
  } = useContext(counterContextObj);

return (
  <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-10">
    
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Counter 1 */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
        <h2 className="text-sm font-medium text-slate-500 mb-2">
          Counter 1
        </h2>

        <h1 className="text-5xl font-bold text-slate-800 mb-8">
          {counter1}
        </h1>

        <button
          onClick={changeCounter1}
          className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-2xl font-medium transition-all duration-300"
        >
          Change Counter1
        </button>
      </div>

      {/* Counter 2 */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
        <h2 className="text-sm font-medium text-slate-500 mb-2">
          Counter 2
        </h2>

        <h1 className="text-5xl font-bold text-slate-800 mb-8">
          {counter2}
        </h1>

        <button
          onClick={changeCounter2}
          className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-2xl font-medium transition-all duration-300"
        >
          Change Counter2
        </button>
      </div>

      {/* Counter 3 */}
      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
        <h2 className="text-sm font-medium text-slate-500 mb-2">
          Counter 3
        </h2>

        <h1 className="text-5xl font-bold text-slate-800 mb-8">
          {counter3}
        </h1>

        <button
          onClick={changeCounter3}
          className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-2xl font-medium transition-all duration-300"
        >
          Change Counter3
        </button>
      </div>

    </div>
  </div>
);
}
export default Home;