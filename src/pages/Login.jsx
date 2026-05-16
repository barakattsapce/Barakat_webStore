import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/login", {
        email,
        password,
      });

      // Save token
      localStorage.setItem("token", res.data.token);

      alert("Login Success");

      navigate("/home");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white shadow rounded-2xl">
        <h1 className="mb-6 text-3xl font-semibold text-center">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-2 border-b outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full py-2 border-b outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 text-white bg-blue-600 rounded-lg disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-sm text-center">
            Don’t have account?
            <Link to="/signup" className="ml-1 text-blue-600">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;