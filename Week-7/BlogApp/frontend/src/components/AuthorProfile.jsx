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
    <div className="bg-white shadow-sm rounded-lg p-6 mb-8 flex items-center justify-between border border-slate-200">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        {/* Avatar */}
        {currentUser?.profileImageUrl ? (
          <img
            src={currentUser.profileImageUrl}
            className="w-16 h-16 rounded-full object-cover border border-slate-200"
            alt="profile"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xl font-semibold">
            {currentUser?.firstName?.charAt(0).toUpperCase()}
          </div>
        )}

        {/* Name */}
        <div>
          <p className="text-sm text-slate-500">
            Welcome back
          </p>

          <h2 className="text-xl font-semibold text-slate-900">
            {currentUser?.firstName}
          </h2>
        </div>

      </div>

      {/* LOGOUT */}
      <button
        className="bg-slate-900 text-white text-sm px-5 py-2 rounded-md hover:bg-slate-700 transition-colors"
        onClick={onLogout}
      >
        Logout
      </button>

    </div>

    {/* NAVIGATION (TABS STYLE) */}
    <div className="flex gap-2 mb-6 bg-white p-1.5 rounded-lg w-fit border border-slate-200">

      <NavLink
        to="articles"
        className={({ isActive }) =>
          isActive
            ? "bg-slate-100 px-5 py-2 rounded-md text-slate-950 text-sm font-medium transition-colors"
            : `${navLinkClass} px-5 py-2 rounded-md text-slate-600 hover:text-slate-950 transition-colors`
        }
      >
        Articles
      </NavLink>

      <NavLink
        to="write-article"
        className={({ isActive }) =>
          isActive
            ? "bg-slate-100 px-5 py-2 rounded-md text-slate-950 text-sm font-medium transition-colors"
            : `${navLinkClass} px-5 py-2 rounded-md text-slate-600 hover:text-slate-950 transition-colors`
        }
      >
        Write Article
      </NavLink>

    </div>

    <div className={divider}></div>

    {/* CONTENT */}
    <div className="mt-6">
      <Outlet />
    </div>

  </div>
);
}

export default AuthorProfile;
