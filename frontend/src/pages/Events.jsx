import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress, Alert, Button } from "@mui/material";
import { Event, Refresh } from "@mui/icons-material";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchEvents = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await axios.get("http://localhost:8000/api/events/");
            setEvents(response.data);
        } catch (err) {
            setError(err.response?.data?.message ||
                err.message ||
                "Failed to fetch events. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <CircularProgress />
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto p-4">
                <Alert
                    severity="error"
                    className="mb-4"
                    action={
                        <Button
                            color="inherit"
                            size="small"
                            startIcon={<Refresh />}
                            onClick={fetchEvents}
                        >
                            Retry
                        </Button>
                    }
                >
                    {error}
                </Alert>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Upcoming Events
                </h2>
                <Button
                    variant="outlined"
                    startIcon={<Refresh />}
                    onClick={fetchEvents}
                    disabled={loading}
                >
                    Refresh
                </Button>
            </div>

            {events.length === 0 ? (
                <div className="text-center py-12">
                    <Event className="text-4xl mb-4 text-gray-400" />
                    <p className="text-gray-500 dark:text-gray-400">
                        No events scheduled yet.
                    </p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow
                        bg-white dark:bg-gray-800 dark:border-gray-700"
                        >
                            <div className="p-5">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                                        {event.title}
                                    </h3>
                                    <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                        {new Date(event.date).toLocaleDateString()}
                                    </span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {event.description}
                                </p>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                    <svg
                                        className="w-4 h-4 mr-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    {event.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Events;