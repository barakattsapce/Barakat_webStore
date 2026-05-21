export default function Feedback() {
  const feedbacks = [
    { id: 1, user: "Ali", comment: "Great product!", rating: 5 },
    { id: 2, user: "Sara", comment: "Good service", rating: 4 },
    { id: 3, user: "John", comment: "Not bad", rating: 3 },
  ];

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Feedback Management</h1>

      <div className="overflow-hidden bg-white rounded shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">User</th>
              <th className="p-3">Comment</th>
              <th className="p-3">Rating</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {feedbacks.map((f) => (
              <tr key={f.id} className="border-b">
                <td className="p-3">{f.user}</td>
                <td className="p-3">{f.comment}</td>
                <td className="p-3">{f.rating} ⭐</td>
                <td className="p-3 space-x-2">
                  <button className="px-2 py-1 text-white bg-green-500 rounded">
                    Approve
                  </button>

                  <button className="px-2 py-1 text-white bg-red-500 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}