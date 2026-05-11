import { NavLink } from "react-router";
import { useAuth } from "../store/authStore";
import {
  navbarClass,
  navContainerClass,
  navBrandClass,
  navLinksClass,
  navLinkClass,
  navLinkActiveClass,
} from "../styles/common";

function Header() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const user = useAuth((state) => state.currentUser);

  // decide profile route based on role
  const getProfilePath = () => {
    if (!user) return "/";

    switch (user.role) {
      case "AUTHOR":
        return "/author-profile";
      case "ADMIN":
        return "/admin-profile";
      default:
        return "/user-profile";
    }
  };

  return (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-purple-100">

    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

      {/* LOGO */}
      <NavLink
        to="/"
        className="text-3xl font-bold text-purple-700 tracking-wide hover:text-purple-500 transition-all duration-300"
      >
        MyBlog
      </NavLink>

      <ul className="flex items-center gap-5 text-lg font-medium">

        {/* HOME */}
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-5 py-2 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-purple-100 text-purple-700 shadow-sm"
                  : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
              }`
            }
          >
            Home
          </NavLink>
        </li>

        {/* NOT LOGGED IN */}
        {!isAuthenticated && (
          <>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `px-5 py-2 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-purple-100 text-purple-700 shadow-sm"
                      : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                  }`
                }
              >
                Register
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-5 py-2 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-purple-100 text-purple-700 shadow-sm"
                      : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                  }`
                }
              >
                Login
              </NavLink>
            </li>
          </>
        )}

        {/* LOGGED IN */}
        {isAuthenticated && (
          <li>
            <NavLink
              to={getProfilePath()}
              className={({ isActive }) =>
                `px-5 py-2 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-purple-100 text-purple-700 shadow-sm"
                    : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                }`
              }
            >
              Profile
            </NavLink>
          </li>
        )}

      </ul>
    </div>
  </nav>
);
}

export default Header;