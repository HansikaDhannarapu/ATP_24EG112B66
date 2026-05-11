

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
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-white via-purple-50 to-purple-100">

    <div className="bg-white shadow-xl rounded-3xl px-12 py-10 text-center border border-purple-100">

      <h1 className="text-5xl font-bold text-purple-700 mb-5">
        403 - Unauthorized
      </h1>

      <p className="text-lg text-gray-600 mb-3">
        You don’t have permission to access this page.
      </p>

      <p className="text-sm text-purple-400">
        Redirecting...
      </p>

    </div>

  </div>
);
};

export default Unauthorized;