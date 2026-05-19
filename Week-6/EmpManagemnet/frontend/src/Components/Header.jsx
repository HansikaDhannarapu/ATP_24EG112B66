import { NavLink } from "react-router";

function Header() {
  return (
  <nav className="sticky top-0 z-50 bg-slate-50 border-b border-slate-200 shadow-sm">

    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center md:justify-end items-center gap-3 md:gap-5">

      <NavLink
        to=""
        className={({ isActive }) =>
          `px-5 py-2.5 rounded-2xl text-sm md:text-base font-medium transition-all duration-300 ${
            isActive
              ? "bg-slate-800 text-white shadow-md"
              : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="create-emp"
        className={({ isActive }) =>
          `px-5 py-2.5 rounded-2xl text-sm md:text-base font-medium transition-all duration-300 ${
            isActive
              ? "bg-slate-800 text-white shadow-md"
              : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
          }`
        }
      >
        Create Employee
      </NavLink>

      <NavLink
        to="list"
        className={({ isActive }) =>
          `px-5 py-2.5 rounded-2xl text-sm md:text-base font-medium transition-all duration-300 ${
            isActive
              ? "bg-slate-800 text-white shadow-md"
              : "text-slate-600 hover:bg-slate-200 hover:text-slate-900"
          }`
        }
      >
        Employees List
      </NavLink>

    </div>

  </nav>
);
}

export default Header;