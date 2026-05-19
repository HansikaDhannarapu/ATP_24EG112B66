import React from 'react'
import { useForm} from 'react-hook-form'
import {useLocation,useNavigate} from 'react-router'
import { useEffect } from "react";
import axios from 'axios'

function EditEmployee() {
  const{
    register,
    handleSubmit,
    formState:{errors},
    setValue
  }=useForm()

    //get empObj from navigate hook
  const {state}= useLocation()
  useEffect(()=>{
    setValue("name", state.name)
    setValue("email", state.email)
    setValue("mobile", state.mobile)
    setValue("designation", state.designation)
    setValue("companyName", state.companyName)
  },[])
    const navigate=useNavigate()

  const saveModifiedEmp=async (modifiedEmp)=>{
    //make http PUT req
    const res= await axios.put(`https://atp-24eg112b66-1.onrender.com/emp-api/employees/${state._id}`,modifiedEmp)
    if(res.status===200){
      //navigate to listOfEmps
      navigate("/list")
    }
  }

  return (
  <div className="flex flex-col items-center">

    {/* Heading */}
    <div className="text-center mb-10">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
        Edit Employee
      </h1>

      <p className="text-slate-500 mt-3">
        Update employee information below
      </p>
    </div>

    {/* Form */}
    <form
      className="w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-sm p-8 md:p-10"
      onSubmit={handleSubmit(saveModifiedEmp)}
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
        Save Changes
      </button>

    </form>
  </div>
)
}

export default EditEmployee