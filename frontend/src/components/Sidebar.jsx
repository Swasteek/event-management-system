import { Link } from "react-router-dom";
import { Close, Event, Home, Login, PersonAdd } from "@mui/icons-material";

const Sidebar = ({ isOpen, setIsOpen, darkMode }) => {
    return (
        <aside className={`fixed top-0 left-0 h-full w-64 z-20 shadow-lg transform transition-transform duration-300 ease-in-out
            ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}
            ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>

            {/* Sidebar Header */}
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-bold flex items-center">
                    <Event className="mr-2" /> Menu
                </h2>
                <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                    <Close />
                </button>
            </div>

            {/* Navigation Links */}
            <nav className="p-4">
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                            <Home className="mr-3" /> Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/events"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                            <Event className="mr-3" /> Events
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                            <Login className="mr-3" /> Login
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/register"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        >
                            <PersonAdd className="mr-3" /> Register
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;