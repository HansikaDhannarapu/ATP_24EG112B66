import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { counterContextObj } from "../contexts/ContextProvider";

function CreateEmp() {

  const { counter1, changeCounter1 } =
    useContext(counterContextObj);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //form submit
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);

      //make HTTP POST req
      let res = await fetch(
        "https://atp-24eg112b66-1.onrender.com/emp-api/employees",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newEmpObj),
        }
      );

      if (res.status === 201) {
        //navigate to employees component programatically
        navigate("/list");
      } else {
        let errorRes = await res.json();
        console.log("error responce is ", errorRes);
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      console.log("err in catch", err);

      //deal with err
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(error);

  if (loading) {
    return (
      <p className="text-center text-4xl text-purple-600 font-semibold mt-20">
        Loading....
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 text-center text-3xl font-semibold mt-20">
        {error}
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center">

      {/* Counter Section */}
      <div className="text-center bg-pink-200 px-10 py-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-10">
        
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

      {/* Heading */}
      <h1 className="text-5xl text-center text-purple-700 font-bold mb-10">
        Create New Employee
      </h1>

      {/* Form */}
      <form
        className="w-full max-w-xl bg-white/60 backdrop-blur-md p-10 rounded-3xl shadow-2xl"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <input
          type="text"
          placeholder="Enter name"
          {...register("name")}
          className="mb-5 p-4 w-full rounded-2xl bg-pink-100 outline-none focus:ring-4 focus:ring-pink-300 text-lg"
        />

        <input
          type="email"
          placeholder="Enter Email"
          {...register("email")}
          className="mb-5 p-4 w-full rounded-2xl bg-purple-100 outline-none focus:ring-4 focus:ring-purple-300 text-lg"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-5 p-4 w-full rounded-2xl bg-blue-100 outline-none focus:ring-4 focus:ring-blue-300 text-lg"
        />

        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-5 p-4 w-full rounded-2xl bg-pink-100 outline-none focus:ring-4 focus:ring-pink-300 text-lg"
        />

        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-8 p-4 w-full rounded-2xl bg-purple-100 outline-none focus:ring-4 focus:ring-purple-300 text-lg"
        />

        <button
          type="submit"
          className="text-2xl rounded-2xl bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:scale-105 hover:shadow-xl transition-all duration-300 text-white block mx-auto px-10 py-4 font-semibold"
        >
          Add Emp
        </button>
      </form>
    </div>
  );
}

export default CreateEmp;