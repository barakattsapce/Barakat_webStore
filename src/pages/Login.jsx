import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { useState, useContext } from "react";

import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
=======
import { useState } from "react";
import api from "../api/axios";
>>>>>>> 7e99d36dd2516ded5ee34ed14e97e9c9d964fc3b

const Login = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {

    e.preventDefault();

<<<<<<< HEAD
    // validation
    if (!email || !password) {
      alert("All fields required");
      return;
    }

    // email format
    if (!email.includes("@")) {
      alert("Invalid email format");
      return;
    }

    try {

      setLoading(true);

=======
    if (!email || !password) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    try {
>>>>>>> 7e99d36dd2516ded5ee34ed14e97e9c9d964fc3b
      const res = await api.post("/login", {
        email,
        password,
      });

<<<<<<< HEAD
      login(res.data.token);

      alert("Login Success");

      navigate("/dashboard");

=======
      // Save token
      localStorage.setItem("token", res.data.token);

      alert("Login Success");

      navigate("/home");
>>>>>>> 7e99d36dd2516ded5ee34ed14e97e9c9d964fc3b
    } catch (error) {

      console.log(error);

<<<<<<< HEAD
      alert("Login Failed");

    } finally {

=======
      alert(
        error.response?.data?.message || "Login Failed"
      );
    } finally {
>>>>>>> 7e99d36dd2516ded5ee34ed14e97e9c9d964fc3b
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

<<<<<<< HEAD
          <button className="w-full py-2 text-white bg-blue-600 rounded-lg">

            {loading ? "Loading..." : "Login"}

=======
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 text-white bg-blue-600 rounded-lg disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
>>>>>>> 7e99d36dd2516ded5ee34ed14e97e9c9d964fc3b
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