export default function Table({ columns, data }) {
  return (
    <div className="overflow-hidden bg-white rounded shadow">
      <table className="w-full text-left">
        <thead className="bg-gray-200">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="p-3">{col}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              {Object.values(row).map((val, j) => (
                <td key={j} className="p-3">{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}