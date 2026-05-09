import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/v1/register",
        {
          name,
          email,
          password,
        }
      );

      alert("Account Created");

      // رفتن به Home
      navigate("/home");

    } catch (error) {
      console.log(error);
      alert("Signup Failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">

      <div className="w-full max-w-sm p-6 bg-white shadow rounded-2xl">

        <h1 className="mb-6 text-3xl font-semibold text-center">
          Sign Up
        </h1>

        <form onSubmit={handleSignup} className="space-y-5">

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full py-2 border-b outline-none"
          />

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

          <button className="w-full py-2 text-white bg-blue-600 rounded-lg">
            Sign Up
          </button>

          <p className="text-sm text-center">
            Already have account?
            <Link to="/" className="ml-1 text-blue-600">
              Login
            </Link>
          </p>

        </form>

      </div>
    </div>
  );
};

export default Signup;