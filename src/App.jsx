import { useEffect, useState } from "react";
import api from "./services/api";

import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import Pagination from "./components/Pagination";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";

function App() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [editStudent, setEditStudent] = useState(null);
  const [search, setSearch] = useState("");

  // FETCH STUDENTS
  const fetchStudents = async () => {
    try {
      const response = await api.get(
        `/students?page=${page}&limit=5&search=${search}`
      );

      setStudents(response.data.data);
      setTotalPages(response.data.pagination.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  // Re-fetch when page or search changes
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchStudents();
    }, 300);

    return () => clearTimeout(timer);
  }, [page, search]);

  return (
    <div className="container">
      <h1>Student Management System</h1>

      {/* SEARCH BOX */}
      <input
        type="text"
        placeholder="Search student by name..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        style={{
          padding: "10px",
          marginBottom: "15px",
          width: "250px",
        }}
      />

      {/* FORM */}
      <StudentForm
        fetchStudents={fetchStudents}
        editStudent={editStudent}
        setEditStudent={setEditStudent}
      />

      {/* TABLE */}
      <StudentTable
        students={students}
        fetchStudents={fetchStudents}
        setEditStudent={setEditStudent}
      />

      {/* PAGINATION */}
      <Pagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />

      {/* ⭐ TOAST CONTAINER (IMPORTANT) */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;