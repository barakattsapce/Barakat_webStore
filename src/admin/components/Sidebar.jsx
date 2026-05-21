import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen p-5 text-white bg-gray-900">
      <h2 className="mb-6 text-2xl font-bold">Admin Panel</h2>

      <nav className="space-y-2">
        <Link className="block p-2 rounded hover:bg-gray-700" to="/admin/dashboard">Dashboard</Link>
        <Link className="block p-2 rounded hover:bg-gray-700" to="/admin/products">Products</Link>
        <Link className="block p-2 rounded hover:bg-gray-700" to="/admin/orders">Orders</Link>
        <Link className="block p-2 rounded hover:bg-gray-700" to="/admin/users">Users</Link>
        <Link className="block p-2 rounded hover:bg-gray-700" to="/admin/feedback">
  Feedback
</Link>
        <Link className="block p-2 rounded hover:bg-gray-700" to="/admin/reports">Reports</Link>
        <Link className="block p-2 rounded hover:bg-gray-700" to="/admin/settings">Settings</Link>
      </nav>
    </div>
  );
}