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
    <div className="w-full max-w-sm bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 mb-10 text-center">

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

    {/* Heading */}
    <div className="text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
        Create New Employee
      </h1>

      <p className="text-slate-500 mt-3">
        Fill in the employee details below
      </p>
    </div>

    {/* Form */}
    <form
      className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-sm p-8 md:p-10"
      onSubmit={handleSubmit(onFormSubmit)}
    >

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <input
          type="text"
          placeholder="Enter name"
          {...register("name")}
          className="p-4 w-full rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-slate-300"
        />

        <input
          type="email"
          placeholder="Enter Email"
          {...register("email")}
          className="p-4 w-full rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-slate-300"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="p-4 w-full rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-slate-300"
        />

        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="p-4 w-full rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-slate-300"
        />

      </div>

      <input
        type="text"
        placeholder="Enter company name"
        {...register("companyName")}
        className="mt-5 p-4 w-full rounded-2xl border border-slate-200 bg-slate-50 outline-none focus:ring-2 focus:ring-slate-300"
      />

      <button
        type="submit"
        className="mt-8 w-full bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300"
      >
        Add Employee
      </button>

    </form>
  </div>
);
}

export default CreateEmp;