import { useState } from "react";
import { useForm } from "react-hook-form";
 function CreateUserForm(){

    const {
        register,  
        handleSubmit, 
        formState:{errors} 
    }=useForm()
    const [userList,setUserList]=useState([])
    const onFormSubmit=(newObj)=>{
       setUserList(prev=>[...prev,newObj])
    }
    return(
        <div className="bg-blue-300 p-2">
        <div className="bg-orange-400 m-5">
            <h1 className="text-center text-5xl">Create User Form</h1>
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                    <label htmlFor="firstName">firstName</label>
                    <input type="text"
                     {...register("firstName",
                        {
                            required:"FirstName is required",
                            validate:(v)=>v.trim().length!=0 ||"White space is not valid",
                            minLength:5

                        }
                     )}
                     id="firstName"
                     className="border w-full p-3"/>
                        {errors.firstName?.type==="required"&& <p className="text-white">{errors.firstName.message}</p>}
                        {errors.firstName?.type==="minLength"&& <p className="text-white">Min length of firstName is 5</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email">email</label>
                    <input type="email"
                     {...register("email",
                        {
                            required:"email is required",
                            validate:(v)=>v.trim().length!=0 ||"White space is not valid"
                        }
                     )}
                     id="email"
                     className="border w-full p-3"/>
                        {errors.username?.type==="required"&& <p className="text-white">{errors.email.message}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="dateOfBirth">dateOfBirth</label>
                    <input type="date"
                     {...register("dateOfBirth",
                        {
                            required:"dateOfBirth is required",
                            validate:(v)=>v.trim().length!=0 ||"White space is not valid"
                        }
                     )}
                     id="dateOfBirth"
                     className="border w-full p-3"/>
                        {errors.dateOfBirth?.type==="required"&& <p className="text-white">{errors.dateOfBirth.message}</p>}
                </div>
                <button type="submit" className="bg-pink-600 block mx-auto">Add User</button>

            </form>
        </div>
        <div className="bg-pink-400 m-5 p-10">
            <h2 className="text-center text-white text-4xl">List of Users</h2>
            <table className="mx-auto">
            <thead>
                        <tr className="">
                            <th className="p-2 border">FirstName</th>
                            <th className="p-2 border">Email</th>
                            <th className="p-2 border">DateOfBirth</th>
                        </tr>
                    </thead>
                    <tbody>
                    {userList.map((user, index) => (
                        <tr key={index}>
                        <td className="p-2 border">{user.firstName}</td>
                        <td className="p-2 border">{user.email}</td>
                        <td className="p-2 border">{user.dateOfBirth}</td>
                        </tr>
                    ))}
                    </tbody> 
            </table>
            
        </div>
     </div>
    )
 }
 export default CreateUserForm