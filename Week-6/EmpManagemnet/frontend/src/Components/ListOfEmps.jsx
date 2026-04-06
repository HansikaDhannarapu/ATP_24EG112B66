import { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { counterContextObj } from "../contexts/ContextProvider";


function ListOfEmps() {

    const {counter,changeCounter}=useContext(counterContextObj)


  const [emps, setEmps] = useState([]);
  const navigate=useNavigate()


  const gotoEmployee=(empObj)=>{
    //navigate to /employee along with selected emp obj
    navigate("/employee",{state:empObj}) //to transfer the data we use the 2nd parameter
  }

    const gotoEditEmployee=(empObj)=>{
    //navigate to /employee along with selected emp obj
    navigate("/edit-emp",{state:empObj}) //to transfer the data we use the 2nd parameter
  }
  
  const deleteEmpById=async(id)=>{
    let res=await axios.delete(`http://localhost:4000/emp-api/employees/${id}`)
  if(res.status===200){
     //get latest emps data
     getEmps()
  }
  }
  //get all employees
    async function getEmps() {
      let res = await fetch("http://localhost:4000/emp-api/employees");
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
    <div>
              <div>
      <h1 className='text-4xl'>Counter:{counter}</h1>
      <button onClick={changeCounter} className='bg-amber-300 p-5'>Change</button>
    </div>

      <h1 className="text-4xl text-center mb-5">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 text-center text-2xl rounded-2xl">
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            {/*3 buttons*/}
            <div className="flex justify-around shadow-amber-100">
              <button onClick={()=>gotoEmployee(empObj)} className="bg-green-600 p-2 rounded-2xl text-white">View</button>
              <button onClick={()=>gotoEditEmployee(empObj)} className="bg-yellow-600 p-2 rounded-2xl text-white">Edit</button>
              <button onClick={()=>deleteEmpById(empObj._id)} className="bg-red-600 p-2 rounded-2xl text-white">Delete</button>

          </div>
        </div>
        ))}
    </div>
    </div>
  );
}

export default ListOfEmps;