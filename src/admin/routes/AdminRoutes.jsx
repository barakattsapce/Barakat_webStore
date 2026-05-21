import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Feedback from "../pages/Feedback";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Users from "../pages/Users";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="users" element={<Users />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="feedback" element={<Feedback />} />
      </Route>
    </Routes>
  );
}