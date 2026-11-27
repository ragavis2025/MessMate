import { Outlet, Link } from "react-router-dom";

function StudentLayout() {
    return (
        <div className="min-h-screen bg-slate-100">
            <header className="bg-teal-700 text-white p-6">
                <h1 className="text-3xl font-bold text-center">MessMate Student</h1>
            </header>
            <nav className="bg-white shadow-md p-4 flex justify-center gap-8 flex-wrap">
                <Link to="/student/dashboard" className="text-slate-700 font-semibold hover:text-teal-700">Dashboard</Link><br />
                <Link to="/student/menu" className="text-slate-700 font-semibold hover:text-teal-700">View Menu</Link><br />
                <Link to="/student/feedback" className="text-slate-700 font-semibold hover:text-teal-700">Submit Feedback</Link><br />
                <Link to="/student/profile" className="text-slate-700 font-semibold hover:text-teal-700">My Profile</Link><br />
            </nav>
            <main className="p-6">
            <Outlet />
            </main>
        </div>
    );
}

export default StudentLayout;