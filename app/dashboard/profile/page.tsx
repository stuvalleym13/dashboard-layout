export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Profile</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              defaultValue="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              defaultValue="john@example.com"
            />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}