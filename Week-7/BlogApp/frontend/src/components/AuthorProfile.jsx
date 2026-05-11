import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../store/authStore";

import { pageWrapper, navLinkClass, divider } from "../styles/common";

function AuthorProfile() {
  const currentUser = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  //call t6his function on logout
  const onLogout = async () => {
    //call login route
    await logout();
    //navigate to login component
    navigate("/login");
  };

  return (
  <div className={pageWrapper}>

    {/* PROFILE HEADER */}
    <div className="bg-white shadow-lg rounded-3xl p-6 mb-8 flex items-center justify-between border border-purple-100">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        {/* Avatar */}
        {currentUser?.profileImageUrl ? (
          <img
            src={currentUser.profileImageUrl}
            className="w-16 h-16 rounded-full object-cover border-2 border-purple-200 shadow-sm"
            alt="profile"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-semibold">
            {currentUser?.firstName?.charAt(0).toUpperCase()}
          </div>
        )}

        {/* Name */}
        <div>
          <p className="text-sm text-purple-400">
            Welcome back
          </p>

          <h2 className="text-xl font-semibold text-purple-700">
            {currentUser?.firstName}
          </h2>
        </div>

      </div>

      {/* LOGOUT */}
      <button
        className="bg-purple-500 text-white text-sm px-5 py-2 rounded-full hover:bg-purple-600 transition-all duration-300 shadow-md"
        onClick={onLogout}
      >
        Logout
      </button>

    </div>

    {/* NAVIGATION (TABS STYLE) */}
    <div className="flex gap-3 mb-6 bg-purple-100 p-2 rounded-full w-fit shadow-sm">

      <NavLink
        to="articles"
        className={({ isActive }) =>
          isActive
            ? "bg-white px-5 py-2 rounded-full text-purple-700 text-sm font-medium shadow-md transition-all duration-300"
            : `${navLinkClass} px-5 py-2 text-purple-500 hover:text-purple-700 transition-all duration-300`
        }
      >
        Articles
      </NavLink>

      <NavLink
        to="write-article"
        className={({ isActive }) =>
          isActive
            ? "bg-white px-5 py-2 rounded-full text-purple-700 text-sm font-medium shadow-md transition-all duration-300"
            : `${navLinkClass} px-5 py-2 text-purple-500 hover:text-purple-700 transition-all duration-300`
        }
      >
        Write Article
      </NavLink>

    </div>

    <div className={`${divider} border-purple-100`}></div>

    {/* CONTENT */}
    <div className="mt-6">
      <Outlet />
    </div>

  </div>
);
}

export default AuthorProfile;