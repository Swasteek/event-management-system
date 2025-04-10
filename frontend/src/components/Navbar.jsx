import { Link } from "react-router-dom";
import { DarkMode, LightMode } from "@mui/icons-material";

const Navbar = ({ darkMode, setDarkMode, setSidebarOpen }) => {
    return (
        <nav
            className={`
        relative  /* Removed fixed positioning */
        ${darkMode
                    ? "bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100"
                    : "bg-gradient-to-r from-white to-gray-100 text-gray-900"}
        shadow-md py-2 px-4
        h-14
        flex items-center justify-between
        mx-auto max-w-7xl  /* Centered with maximum width constraint */
        transition-all duration-300
      `}
        >
            <div className="flex items-center space-x-4">
                {/* Logo/Title - More compact with icon */}
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="lg:hidden p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                <Link
                    to="/"
                    className={`text-lg font-bold flex items-center ${darkMode ? "hover:text-blue-300" : "hover:text-blue-700"} transition`}
                >
                    <svg
                        className="w-6 h-6 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                    Event Manager
                </Link>
            </div>

            {/* Navigation Links and Toggle - Right-aligned */}
            <div className="flex items-center space-x-4">
                <div className="hidden lg:flex items-center space-x-4">
                    <NavLink to="/" darkMode={darkMode}>Home</NavLink>
                    <NavLink to="/events" darkMode={darkMode}>Events</NavLink>
                    <NavLink to="/login" darkMode={darkMode}>Login</NavLink>
                    <NavLink to="/register" darkMode={darkMode}>Register</NavLink>
                </div>
                {/* Dark Mode Toggle - Smaller and right-aligned */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`p-1.5 rounded-full ${darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-200 hover:bg-gray-300"} transition`}
                    aria-label="Toggle dark mode"
                >
                    {darkMode ? (
                        <LightMode className="text-yellow-300 text-lg" />
                    ) : (
                        <DarkMode className="text-gray-800 text-lg" />
                    )}
                </button>
            </div>
        </nav>
    );
};

// Optimized NavLink component
const NavLink = ({ to, children, darkMode }) => (
    <Link
        to={to}
        className={`
      text-sm font-medium px-3 py-2 rounded
      ${darkMode
                ? "text-gray-300 hover:text-blue-400 hover:bg-gray-700"
                : "text-gray-900 hover:text-blue-700 hover:bg-gray-100"}
      transition-colors duration-200
    `}
    >
        {children}
    </Link>
);

export default Navbar;