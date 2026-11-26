import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import AdminDashboard from "./pages/adminDashboard";
import StudentDashboard from "./pages/studentDashboard";
import Menu from "./pages/menu";
import AddMenu from "./pages/addMenu";
import EditMenu from "./pages/editMenu";
import FeedBack from "./pages/feedback";
import ViewFeedback from "./pages/viewFeedback";
import Profile from "./pages/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/studentDashboard" element={<StudentDashboard />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/addMenu" element={<AddMenu />} />
        <Route path="/editMenu" element={<EditMenu />} />
        <Route path="/feedback" element={<FeedBack />} />
        <Route path="/viewFeedback" element={<ViewFeedback />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
