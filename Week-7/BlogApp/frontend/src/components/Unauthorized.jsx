

import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

const Unauthorized = ({ delay = 5000 }) => {
  console.log("unauthorized");
  const navigate = useNavigate();
  const location = useLocation();

  // Get redirectTo from state
  const redirectTo = location.state?.redirectTo || "/login";
  console.log("redirect",redirectTo)

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(redirectTo, { replace: true });
    }, delay);

    return () => clearTimeout(timer);
  }, [navigate, redirectTo, delay]);

  return (
  <div className="min-h-screen flex flex-col justify-center items-center bg-[#f7f8fa]">

    <div className="bg-white shadow-sm rounded-lg px-12 py-10 text-center border border-slate-200">

      <h1 className="text-4xl font-semibold text-slate-900 mb-5">
        403 - Unauthorized
      </h1>

      <p className="text-lg text-gray-600 mb-3">
        You don’t have permission to access this page.
      </p>

      <p className="text-sm text-slate-500">
        Redirecting...
      </p>

    </div>

  </div>
);
};

export default Unauthorized;
