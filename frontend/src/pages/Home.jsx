import { Link } from "react-router-dom";
import { Event, Login, PersonAdd } from "@mui/icons-material";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-4 text-center">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                    Manage Your Events <span className="text-blue-500">Effortlessly</span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                    Organize, track, and analyze all your events in one place. Perfect for event planners,
                    organizers, and anyone who wants to stay on top of their schedule.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                    <Link
                        to="/register"
                        className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition"
                    >
                        <PersonAdd /> Get Started
                    </Link>
                    <Link
                        to="/events"
                        className="flex items-center justify-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg font-medium transition"
                    >
                        <Event /> Browse Events
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <Event className="text-4xl mb-4 text-blue-500" />
                        <h3 className="text-xl font-semibold mb-2">Event Management</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Create and manage all your events in one centralized platform.
                        </p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <Login className="text-4xl mb-4 text-blue-500" />
                        <h3 className="text-xl font-semibold mb-2">User Accounts</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Secure login and personalized event tracking for all users.
                        </p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                        <PersonAdd className="text-4xl mb-4 text-blue-500" />
                        <h3 className="text-xl font-semibold mb-2">Easy Registration</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Simple sign-up process to get started in minutes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;