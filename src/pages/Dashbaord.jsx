import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {

  const { logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="p-10 bg-white shadow rounded-2xl">

        <h1 className="mb-5 text-3xl font-bold">
          Dashboard
        </h1>

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