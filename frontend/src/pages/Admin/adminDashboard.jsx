function AdminDashboard() {
    return (
        <div className="min-h-screen bg-slate-100 p-6">
            <div className="bg-white max-w-3xl mx-auto p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-teal-700 text-center mb-3">Welcome, Admin!</h2>
                <p className="text-slate-600 text-center mb-6">Welcome to MessMate Admin Dashboard.</p>
                <hr className="border-t-2 border-teal-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-800 mb-4">Admin Responsibilities</h3>
                <ul className="list-disc pl-6 space-y-3 text-slate-700">
                    <li>Manage Weekly Menu</li>
                    <li>Edit Existing Menu</li>
                    <li>View Student Feedback</li>
                </ul>
            </div>
        </div>
    );
}

export default AdminDashboard;
