import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashbaord.jsx";

import ProtectedRoute from "./routes/ProtectedRoute..jsx";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* login */}

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        {/* signup */}

        <Route
          path="/signup"
          element={<Signup />}
        />

        {/* dashboard */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;