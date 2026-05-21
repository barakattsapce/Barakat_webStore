export default function StatCard({ title, value }) {
  return (
    <div className="p-5 bg-white rounded shadow">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}