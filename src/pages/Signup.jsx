import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
<<<<<<< HEAD

=======
>>>>>>> 7e99d36dd2516ded5ee34ed14e97e9c9d964fc3b
import api from "../api/axios";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [loading, setLoading] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {

    e.preventDefault();

<<<<<<< HEAD
    // empty fields
    if (!name || !email || !password || !confirmPassword) {
      alert("All fields required");
      return;
    }

    // email format
    if (!email.includes("@")) {
      alert("Invalid email format");
      return;
    }

    // password matching
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {

      setLoading(true);

      await api.post("/register", {
        name,
        email,
        password,
=======
    if (!name || !email || !password || !passwordConfirmation) {
      alert("All fields are required");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/register", {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
>>>>>>> 7e99d36dd2516ded5ee34ed14e97e9c9d964fc3b
      });

      alert("Account Created Successfully");

<<<<<<< HEAD
      navigate("/");

=======
      navigate("/home");
>>>>>>> 7e99d36dd2516ded5ee34ed14e97e9c9d964fc3b
    } catch (error) {

      console.log(error);
<<<<<<< HEAD

      alert("Signup Failed");

    } finally {

=======
      alert(error.response?.data?.message || "Signup Failed");
    } finally {
>>>>>>> 7e99d36dd2516ded5ee34ed14e97e9c9d964fc3b
      setLoading(false);
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            className="w-full py-2 border-b outline-none"
          />

<<<<<<< HEAD
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full py-2 border-b outline-none"
          />

          <button className="w-full py-2 text-white bg-blue-600 rounded-lg">

            {loading ? "Loading..." : "Sign Up"}

=======
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 text-white bg-blue-600 rounded-lg disabled:opacity-50"
          >
            {loading ? "Creating..." : "Sign Up"}
>>>>>>> 7e99d36dd2516ded5ee34ed14e97e9c9d964fc3b
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