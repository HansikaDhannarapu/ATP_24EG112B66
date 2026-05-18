import { NavLink } from "react-router";
import { useAuth } from "../store/authStore";
import {
  navbarClass,
  navContainerClass,
  navBrandClass,
  navLinksClass,
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

  const linkClasses = ({ isActive }) =>
    `px-4 py-2 rounded-md transition-colors duration-200 ${
      isActive
        ? "bg-slate-100 text-slate-950"
        : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
    }`;

  return (
  <nav className={navbarClass}>

    <div className={navContainerClass}>

      {/* LOGO */}
      <NavLink
        to="/"
        className={navBrandClass}
      >
        MyBlog
      </NavLink>

      <ul className={navLinksClass}>

        {/* HOME */}
        <li>
          <NavLink
            to="/"
            end
            className={linkClasses}
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
                className={linkClasses}
              >
                Register
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className={linkClasses}
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
              className={linkClasses}
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
