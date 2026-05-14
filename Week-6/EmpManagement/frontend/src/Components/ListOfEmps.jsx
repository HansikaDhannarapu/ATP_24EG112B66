import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { counterContextObj } from "../contexts/ContextProvider";

function ListOfEmps() {

  const { counter2, changeCounter2 } =
    useContext(counterContextObj);

  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee = (empObj) => {
    //navigate to /employee along with selected emp obj
    navigate("/employee", { state: empObj });
  };

  const gotoEditEmployee = (empObj) => {
    //navigate to /edit-emp along with selected emp obj
    navigate("/edit-emp", { state: empObj });
  };

  const deleteEmpById = async (id) => {
    let res = await axios.delete(
      `https://atp-24eg112b66-1.onrender.com/emp-api/employees/${id}`
    );

    if (res.status === 200) {
      //get latest emps data
      getEmps();
    }
  };

  //get all employees
  async function getEmps() {
    let res = await fetch(
      "https://atp-24eg112b66-1.onrender.com/emp-api/employees"
    );

    if (res.status === 200) {
      let resObj = await res.json();
      setEmps(resObj.payload);
    }
  }

  //Get all emps on component loading
  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div className="flex flex-col items-center">

      {/* Counter Section */}
      <div className="text-center bg-purple-200 px-10 py-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-10">
        
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

      {/* Heading */}
      <h1 className="text-5xl text-center text-blue-300 font-bold mb-10">
        List of Employees
      </h1>

      {/* Employee Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">

        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="bg-white/70 backdrop-blur-md p-6 text-center rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >

            <p className="text-lg text-gray-600 mb-2 break-words">
              {empObj.email}
            </p>

            <p className="text-2xl font-bold text-purple-700 mb-6">
              {empObj.name}
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-3 flex-wrap">

              <button
                onClick={() => gotoEmployee(empObj)}
                className="bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-2xl text-white font-semibold transition-all duration-300"
              >
                View
              </button>

              <button
                onClick={() => gotoEditEmployee(empObj)}
                className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-2xl text-white font-semibold transition-all duration-300"
              >
                Edit
              </button>

              <button
                onClick={() => deleteEmpById(empObj._id)}
                className="bg-pink-400 hover:bg-pink-500 px-4 py-2 rounded-2xl text-white font-semibold transition-all duration-300"
              >
                Delete
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;