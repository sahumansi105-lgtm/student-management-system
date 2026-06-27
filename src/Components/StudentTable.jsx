import api from "../services/api";

function StudentTable({ students, fetchStudents, setEditStudent }) {

  // Delete student
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/students/${id}`);

      alert("Student deleted successfully!");

      fetchStudents();
    } catch (error) {
      alert(error.response?.data?.message || "Delete failed");
    }
  };

  // Start editing student
  const handleEdit = (student) => {
    setEditStudent(student);
  };

  return (
    <div className="table-container" style={{ marginTop: "20px" }}>
      <h2>Student List</h2>

      <table border="1" cellPadding="10" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {students && students.length > 0 ? (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>

                <td>
                  {/* ✅ EDIT BUTTON */}
                  <button
                    onClick={() => handleEdit(student)}
                    style={{
                      marginRight: "10px",
                      backgroundColor: "blue",
                      color: "white",
                      padding: "5px 10px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>

                  {/* ❌ DELETE BUTTON */}
                  <button
                    onClick={() => handleDelete(student.id)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "5px 10px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;