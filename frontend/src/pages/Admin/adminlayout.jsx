import { Outlet, Link } from "react-router-dom";

function AdminLayout() {
    return (
        <div className="min-h-screen bg-slate-100">
            <header className="bg-teal-700 text-white p-6">
                <h1 className="text-3xl font-bold text-center">MessMate Admin</h1>
            </header>
            <nav className="bg-white shadow-md p-4 flex justify-center gap-8 flex-wrap">
                <Link to="/admin/dashboard" className="text-slate-700 font-semibold hover:text-teal-700"> Dashboard </Link>
                <Link to="/admin/addMenu" className="text-slate-700 font-semibold hover:text-teal-700"> Add Menu</Link>
                <Link to="/admin/editMenu" className="text-slate-700 font-semibold hover:text-teal-700">Edit Menu</Link>
                <Link to="/admin/viewFeedback" className="text-slate-700 font-semibold hover:text-teal-700"> View Feedback</Link>
            </nav>
            <main className="p-6">
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
