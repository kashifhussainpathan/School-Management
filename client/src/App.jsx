import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import ClassView from "./pages/classView/ClassView";
import SchoolView from "./pages/schoolView/SchoolView";
import TeachersList from "./components/teacherManagement/TeachersList";
import StudentsList from "./components/studentsManagement/StudentsList";
import TeacherDetails from "./components/teacherManagement/TeacherDetails";
import StudentsDetails from "./components/studentsManagement/StudentsDetails";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classView" element={<ClassView />} />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/teachers" element={<TeachersList />} />
        <Route path="/schoolView" element={<SchoolView />} />
        <Route path="/teachers/:teacherId" element={<TeacherDetails />} />
        <Route path="/students/:studentId" element={<StudentsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
