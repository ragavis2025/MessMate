import { useNavigate } from "react-router-dom";

function StudentDashboard() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>MessMate - Student Dashboard</h1>
            <button onClick={() => navigate("/menu")}>View Weekly Menu</button><br />
            <button onClick={() => navigate("/feedback")}>Submit Feedback</button><br />
        </div>
    );
}

export default StudentDashboard;