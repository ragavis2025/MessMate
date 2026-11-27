import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Authentication/login";
import Register from "./pages/Authentication/register";
import AdminDashboard from "./pages/Admin/adminDashboard";
import StudentDashboard from "./pages/Student/studentDashboard";
import Menu from "./pages/Student/menu";
import AddMenu from "./pages/Admin/addMenu";
import EditMenu from "./pages/Admin/editMenu";
import FeedBack from "./pages/Student/feedback";
import ViewFeedback from "./pages/Admin/viewFeedback";
import Profile from "./pages/Student/profile";
import AdminLayout from "./pages/Admin/adminlayout";
import StudentLayout from "./pages/Student/studentlayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
         <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="addMenu" element={<AddMenu />} />
          <Route path="editMenu" element={<EditMenu />} />
          <Route path="viewFeedback" element={<ViewFeedback />} />
        </Route>
        <Route path="/student" element={<StudentLayout />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="menu" element={<Menu />} />
          <Route path="feedback" element={<FeedBack />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
