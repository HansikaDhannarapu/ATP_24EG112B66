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
  <div className="min-h-screen flex flex-col items-center justify-center gap-8 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-10">

    {/* Counter 1 */}
    <div className="text-center bg-pink-200 px-12 py-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <h1 className="text-4xl font-bold text-pink-700 mb-5">
        Counter1: {counter1}
      </h1>

      <button
        onClick={changeCounter1}
        className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
      >
        Change Counter1
      </button>
    </div>

    {/* Counter 2 */}
    <div className="text-center bg-purple-200 px-12 py-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <h1 className="text-4xl font-bold text-purple-700 mb-5">
        Counter2: {counter2}
      </h1>

      <button
        onClick={changeCounter2}
        className="bg-purple-400 hover:bg-purple-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
      >
        Change Counter2
      </button>
    </div>

    {/* Counter 3 */}
    <div className="text-center bg-blue-200 px-12 py-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
      <h1 className="text-4xl font-bold text-blue-700 mb-5">
        Counter3: {counter3}
      </h1>

      <button
        onClick={changeCounter3}
        className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
      >
        Change Counter3
      </button>
    </div>

  </div>
);
}

export default Home;