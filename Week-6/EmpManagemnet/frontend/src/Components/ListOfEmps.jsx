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
    <div className="w-full max-w-sm bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 mb-10 text-center">

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

    {/* Heading */}
    <div className="text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
        List of Employees
      </h1>

      <p className="text-slate-500 mt-3">
        Manage employee details and actions
      </p>
    </div>

    {/* Employee Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">

      {emps.map((empObj) => (
        <div
          key={empObj._id}
          className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
        >

          <div className="mb-6">
            <p className="text-sm text-slate-500 break-words mb-2">
              {empObj.email}
            </p>

            <h2 className="text-2xl font-bold text-slate-800">
              {empObj.name}
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3">

            <button
              onClick={() => gotoEmployee(empObj)}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 py-2.5 rounded-2xl font-medium transition-all duration-300"
            >
              View
            </button>

            <button
              onClick={() => gotoEditEmployee(empObj)}
              className="flex-1 bg-slate-800 hover:bg-slate-900 text-white py-2.5 rounded-2xl font-medium transition-all duration-300"
            >
              Edit
            </button>

            <button
              onClick={() => deleteEmpById(empObj._id)}
              className="w-full bg-red-50 hover:bg-red-100 text-red-600 py-2.5 rounded-2xl font-medium transition-all duration-300"
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