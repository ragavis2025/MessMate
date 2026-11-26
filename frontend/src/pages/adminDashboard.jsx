import { useNavigate } from "react-router-dom";

function AdminDashboard() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>MessMate - Admin Dashboard</h1>
            <button onClick={() => navigate("/addMenu")}>Add Menu</button><br />
            <button onClick={() => navigate("/editMenu")}>Edit Menu</button><br />
            <button onClick={() => navigate("/viewFeedback")}>View Student Feedback</button><br />
        </div>
    );
}

export default AdminDashboard;
