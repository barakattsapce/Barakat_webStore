import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext.jsx";

import Navbar from "../components/Navabr/Navabr.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Features from "../components/Features/Feature.jsx";

const Dashboard = () => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Hero />
      <Features />

      {/* Logout Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleLogout}
          className="px-5 py-2 text-white bg-red-500 rounded-lg"
        >
          Logout
        </button>
      </div>

    </div>
  );
};

export default Dashboard;