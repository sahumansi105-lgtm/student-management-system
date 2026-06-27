import { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

function StudentForm({ fetchStudents, editStudent, setEditStudent }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [loading, setLoading] = useState(false);

  // Fill form when editing
  useEffect(() => {
    if (editStudent) {
      setFormData({
        name: editStudent.name || "",
        email: editStudent.email || "",
        age: editStudent.age || "",
      });
    }
  }, [editStudent]);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form (ADD or UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.age) {
      toast.error("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      // UPDATE STUDENT
      if (editStudent) {
        await api.put(`/students/${editStudent.id}`, formData);

        toast.success("Student updated successfully!");
        setEditStudent(null);
      } 
      // ADD STUDENT
      else {
        await api.post("/students", formData);

        toast.success("Student added successfully!");
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        age: "",
      });

      fetchStudents();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      age: "",
    });

    setEditStudent(null);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>{editStudent ? "Edit Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Enter Age"
          value={formData.age}
          onChange={handleChange}
        />
        <br /><br />

        {/* Submit Button */}
        <button type="submit" disabled={loading}>
          {loading
            ? "Saving..."
            : editStudent
            ? "Update Student"
            : "Add Student"}
        </button>

        {/* Reset Button */}
        <button
          type="button"
          onClick={handleReset}
          style={{ marginLeft: "10px" }}
        >
          Reset
        </button>

        {/* Cancel Edit */}
        {editStudent && (
          <button
            type="button"
            onClick={() => setEditStudent(null)}
            style={{ marginLeft: "10px" }}
          >
            Cancel Edit
          </button>
        )}
      </form>
    </div>
  );
}

export default StudentForm;