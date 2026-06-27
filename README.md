🎓 Student Management System
📌 Overview

A full-stack Student Management System built using React.js for frontend and Node.js + Express for backend.
It performs full CRUD operations with search, pagination, and toast notifications for better user experience.

⚙️ Features
➕ Add Student
✏️ Edit Student
❌ Delete Student
🔍 Search Students
📄 Pagination
🔔 Toast Notifications
📱 Responsive UI

🛠️ Tech Stack
Frontend:
React.js
Axios
CSS (Custom Styling)
Backend:
Node.js
Express.js
Prisma ORM
PostgreSQL / MySQL

🚀 Setup Instructions

🔹 Frontend Setup
npm install
npm run dev

🔹 Backend Setup
npm install
npx prisma generate
npx prisma migrate dev
npm run dev


📁 Project Structure (Frontend)
src/
├── components/
│   ├── StudentForm.jsx
│   ├── StudentTable.jsx
│   └── Pagination.jsx
├── services/
│   └── api.js
├── App.jsx
├── main.jsx
└── index.css
📌 Backend Link

👉 https://github.com/sahumansi105-lgtm/student-management-backend

📌 Assumptions Made
Pagination limit is fixed to 5 students per page
Search is based only on student name
Simple CRUD system without authentication roles
Backend runs separately from frontend


👨‍💻 Author
Built as part of Frontend Developer Assignment.
