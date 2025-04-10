import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Apply dark mode class to body
  useEffect(() => {
    document.body.className = darkMode ? "dark bg-gray-900" : "bg-gray-50";
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
        {/* Navbar */}
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Main content area with Sidebar */}
        <div className="flex"> {/* Removed pt-14 since Navbar is not fixed */}
          <Sidebar
            isOpen={sidebarOpen}
            setIsOpen={setSidebarOpen}
            darkMode={darkMode}
          />

          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;