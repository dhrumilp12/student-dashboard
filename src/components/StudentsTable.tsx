import React from "react";

// Sample data model
interface Student {
  id: string;
  name: string;
  cohort: string;
  courses: {
    name: string;
    icon: string;
  }[];
  dateJoined: string;
  lastLogin: string;
  status: "ACTIVE" | "INACTIVE";
}

const sampleStudents: Student[] = [
  {
    id: "1",
    name: "Anshuman Kashyap",
    cohort: "AY 2024-25",
    courses: [
      { name: "CBSE 9 Science", icon: "/images/avatar-male.png" },
      { name: "CBSE 9 Math", icon: "/images/avatar-female.png" },
    ],
    dateJoined: "17. Nov. 2024",
    lastLogin: "17. Nov. 2024 4:16 PM",
    status: "ACTIVE",
  },
  {
    id: "2",
    name: "Bansi Dadhaniya",
    cohort: "AY 2024-25",
    courses: [
      { name: "CBSE 9 Science", icon: "/images/avatar-male.png" },
      { name: "CBSE 9 Math", icon: "/images/avatar-female.png" },
    ],
    dateJoined: "17. Nov. 2024",
    lastLogin: "17. Nov. 2024 4:16 PM",
    status: "ACTIVE",
  },
  {
    id: "3",
    name: "Chandrika Valotia",
    cohort: "AY 2024-25",
    courses: [
      { name: "CBSE 9 Science", icon: "/images/avatar-male.png" },
      { name: "CBSE 9 Math", icon: "/images/avatar-female.png" },
    ],
    dateJoined: "17. Nov. 2024",
    lastLogin: "17. Nov. 2024 4:16 PM",
    status: "INACTIVE",
  },
  // ... (add more if you want)
];

export function StudentsTable() {
  return (
    <div className="table-container">
      {/* Top filters + Add student */}
      <div className="table-controls">
        <div className="dropdowns">
          <select>
            <option>AY 2024-25</option>
            <option>AY 2025-26</option>
          </select>
          <select>
            <option>CBSE 9</option>
            <option>CBSE 10</option>
          </select>
        </div>
        <button className="btn-add-student">+ Add new Student</button>
      </div>

      <table className="students-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Cohort</th>
            <th>Courses</th>
            <th>Date Joined</th>
            <th>Last login</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sampleStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.cohort}</td>
              <td>
                {student.courses.map((course, i) => (
                  <span key={i} className="course-badge">
                    <img src={course.icon} alt={course.name} />
                    <span>{course.name}</span>
                  </span>
                ))}
              </td>
              <td>{student.dateJoined}</td>
              <td>{student.lastLogin}</td>
              <td>
                {student.status === "ACTIVE" ? (
                  <span className="status-dot status-dot--active" />
                ) : (
                  <span className="status-dot status-dot--inactive" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}