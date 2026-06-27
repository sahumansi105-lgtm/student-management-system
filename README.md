# 🎓 Student Management System - Frontend

## 📌 Overview
This is the frontend for the Student Management System built using **React.js**.  
It interacts with the backend APIs to perform full CRUD operations with search and pagination features.

---

## ⚙️ Features
- ➕ Add Student
- ✏️ Edit Student
- ❌ Delete Student
- 🔍 Search Students by name
- 📄 Pagination support
- 🔔 Toast notifications for actions
- 📱 Responsive UI design

---

## 🛠️ Tech Stack
- React.js
- Axios (API calls)
- JavaScript (ES6)
- CSS (Custom styling)

---

## 📁 Project Structure

src/
├── components/
│ ├── StudentForm.jsx
│ ├── StudentTable.jsx
│ └── Pagination.jsx
├── services/
│ └── api.js
├── App.jsx
├── main.jsx
└── index.css


---

## 🚀 Setup Instructions

### 1️⃣ Clone Repository

git clone https://github.com/sahumansi105-lgtm/student-management-system
cd student-management-frontend
2️⃣ Install Dependencies
npm install
3️⃣ Run Project
npm run dev
🔗 Backend Connection

Make sure backend is running on:

http://localhost:5000

Update API base URL inside:

src/services/api.js

Example:

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default api;
🧠 Architecture Explanation
Components → UI parts like form, table, pagination
Services → Handles API calls using Axios
App.jsx → Main logic (state management, fetch data)
Backend API → Provides student data

Flow:
User → React UI → Axios → Backend API → Database

📌 Assumptions Made
Backend runs locally on port 5000
Pagination limit is 5 students per page
Search is based only on student name
Basic UI styling using CSS (no Tailwind)
👨‍💻 Author

Built as part of Frontend Developer Assignment

🚀 Conclusion

This frontend provides a simple, clean, and responsive interface for managing student data with full backend integration.
