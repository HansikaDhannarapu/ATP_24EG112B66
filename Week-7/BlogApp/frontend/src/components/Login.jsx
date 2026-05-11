import {
  pageBackground,
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  mutedText,
  linkClass,
} from "../styles/common";
import { useEffect, useRef } from "react";
import { NavLink, useNavigate, useLocation } from "react-router";
import { useForm } from "react-hook-form";
import { useAuth } from "../store/authStore";
import { toast } from "react-hot-toast";

 
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { login, currentUser, loading, isAuthenticated, error } = useAuth((state) => state);

  const onUserLogin = (userCredObj) => {
    login(userCredObj)
  };
   console.log("current user",currentUser) 
   
  
   const hasToasted = useRef(false);

   useEffect(() => {
    if (isAuthenticated === true && !hasToasted.current) {
      hasToasted.current = true;
      if (currentUser.role === "USER") {
        toast.success("Login successfull redirecting to user profile", { duration: 2000 });
        navigate("/user-profile");
      }
      else if (currentUser.role === "AUTHOR") {
        toast.success("Login successfull redirecting to author profile", { duration: 2000 });
        navigate("/author-profile");
      }
      else if (currentUser.role === "ADMIN") {
        toast.success("Login successfull redirecting to admin profile", { duration: 2000 });
        navigate("/admin-profile");
      }
    }
   }, [currentUser, isAuthenticated, navigate]);

   if(loading){
    return <p className="loadingclass">loading...</p>
   }
  return (
  <div className={`${pageBackground} flex items-center justify-center py-16 px-4 bg-purple-50`}>
    
    <div className={`${formCard} bg-white shadow-xl rounded-3xl p-8`}>
      
      {/* Title */}
      <h2 className={`${formTitle} text-center text-purple-700`}>
        Sign In
      </h2>

      {/* API error */}
      {error && (
        <p className={`${errorClass} text-center`}>
          {typeof error === "string"
            ? error
            : error.message || "Something went wrong"}
        </p>
      )}

      <form onSubmit={handleSubmit(onUserLogin)}>

        {/* Email */}
        <div className={formGroup}>
          <label className={`${labelClass} text-purple-700`}>
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            className={`${inputClass} bg-purple-50 border border-purple-100 rounded-2xl focus:ring-2 focus:ring-purple-300 outline-none`}
            {...register("email", {
              required: "Email is required",

              validate: (value) =>
                value.trim().length > 0 || "Email cannot be empty",
            })}
          />

          {errors.email && (
            <p className={errorClass}>{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className={formGroup}>
          <label className={`${labelClass} text-purple-700`}>
            Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            className={`${inputClass} bg-purple-50 border border-purple-100 rounded-2xl focus:ring-2 focus:ring-purple-300 outline-none`}
            {...register("password", {
              required: "Password is required",
              validate: (value) =>
                value.trim().length > 0 || "Password cannot be empty",
            })}
          />

          {errors.password && (
            <p className={errorClass}>{errors.password.message}</p>
          )}
        </div>

        {/* Forgot password */}
        <div className="text-right -mt-2 mb-4">
          <a
            href="/forgot-password"
            className={`${linkClass} text-xs text-purple-600 hover:text-purple-800 transition-all duration-300`}
          >
            Forgot password?
          </a>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={`${submitBtn} bg-purple-500 hover:bg-purple-600 transition-all duration-300 rounded-2xl`}
        >
          Sign In
        </button>

      </form>

      {/* Footer */}
      <p className={`${mutedText} text-center mt-5`}>
        Don't have an account?{" "}
        <NavLink
          to="/register"
          className={`${linkClass} text-purple-600 hover:text-purple-800`}
        >
          Create one
        </NavLink>
      </p>

    </div>
  </div>
);
}

export default Login;
