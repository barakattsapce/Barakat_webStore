import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard title="Sales" value="$1200" />
        <StatCard title="Orders" value="45" />
        <StatCard title="Users" value="300" />
      </div>

      <div className="p-5 mt-6 bg-white rounded shadow">
        <h2 className="mb-2 font-bold">Recent Activity</h2>
        <p className="text-gray-500">No recent updates</p>
      </div>
    </div>
  );
}