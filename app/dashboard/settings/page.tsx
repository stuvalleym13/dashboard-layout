export default function SettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Notifications</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                Email notifications
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Push notifications
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}