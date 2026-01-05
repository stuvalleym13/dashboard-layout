export default function OverviewPage() {
    return (
        <>

            <h1 className="text-3xl font-bold mb-6">Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-red-300 p-6 rounded-lg shadow ">
                    <h3 className="font-semibold text-gray-600">Total Users</h3>
                    <p className="text-3xl font-bold mt-2">1,234</p>
                </div>
                <div className="bg-green-300 p-6 rounded-lg shadow">
                    <h3 className="font-semibold text-gray-600">Revenue</h3>
                    <p className="text-3xl font-bold mt-2">$45,678</p>
                </div>
                <div className="bg-blue-300 p-6 rounded-lg shadow">
                    <h3 className="font-semibold text-gray-600">Active Now</h3>
                    <p className="text-3xl font-bold mt-2">89</p>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                <p className="text-gray-600">Welcome to your dashboard overview!</p>
            </div>
        </>
    );
}