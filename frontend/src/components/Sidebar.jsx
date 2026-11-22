
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClass = ({ isActive }) =>
    `block rounded-lg px-4 py-3 text-sm font-medium transition ${
      isActive
        ? "bg-blue-600 text-white shadow-sm"
        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-5">
      <p className="mb-5 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Main Menu
      </p>

      <nav className="space-y-2">
        <NavLink to="/" end className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/leads" className={linkClass}>
          Manage Leads
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
