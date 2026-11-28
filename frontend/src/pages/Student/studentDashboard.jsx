import API from "../../components/api";

function StudentDashboard() {
    const checkendpoint = async ()=>{
        const response = await API.get("/api/get")
        console.log(response.data);
    }
    return (
        <div className="min-h-screen bg-slate-100 p-6">

            <div className="bg-white max-w-3xl mx-auto p-8 rounded-2xl shadow-lg">

                <h2 className="text-3xl font-bold text-teal-700 text-center mb-3">Welcome, Student!</h2>

            <p className="text-slate-600 text-center mb-6">Welcome to MessMate Student Dashboard.</p>

            <h3 className="text-xl font-bold text-slate-800 mb-4">Student Activities</h3>

            <ul className="list-disc pl-6 space-y-3 text-slate-700">
                <li>View Weekly Mess Menu</li>
                <li>Submit Meal Feedback</li>
                <li>Update Personal Details</li>
            </ul><br />
            <button onClick={checkendpoint}>Button1 for checking backend connection</button>
            </div>
        </div>
    );
}

export default StudentDashboard;