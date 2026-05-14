import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-center md:justify-end items-center gap-6 p-6 bg-pink-200 shadow-md text-xl md:text-2xl font-semibold">

      <NavLink
        to=""
        className={({ isActive }) =>
          `px-5 py-2 rounded-2xl transition-all duration-300 hover:bg-pink-300 hover:scale-105 ${
            isActive
              ? "bg-pink-400 text-white shadow-lg"
              : "text-pink-700"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="create-emp"
        className={({ isActive }) =>
          `px-5 py-2 rounded-2xl transition-all duration-300 hover:bg-purple-300 hover:scale-105 ${
            isActive
              ? "bg-purple-400 text-white shadow-lg"
              : "text-purple-700"
          }`
        }
      >
        CreateEmp
      </NavLink>

      <NavLink
        to="list"
        className={({ isActive }) =>
          `px-5 py-2 rounded-2xl transition-all duration-300 hover:bg-blue-300 hover:scale-105 ${
            isActive
              ? "bg-blue-400 text-white shadow-lg"
              : "text-blue-700"
          }`
        }
      >
        List of Employees
      </NavLink>

    </nav>
  );
}

export default Header;