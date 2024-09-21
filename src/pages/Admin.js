import { useCallback, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaChartBar, FaCog } from "react-icons/fa";
import "./Admin.css";

const studentsData = [
  { rollNo: "7376222IT210", name: "Naveen Kumar P", level: 7 },
  { rollNo: "7376221EC113", name: "Aravind Chidambaram R", level: 7 },
  { rollNo: "7376221CS262", name: "Prasanna Kumar M", level: 6 },
  { rollNo: "7376221EC196", name: "Kavibharathi M S", level: 5 },
  { rollNo: "7376221AG106", name: "Harish R", level: 5 },
  { rollNo: "7376221BT167", name: "Selvahareesh K", level: 4 },
  { rollNo: "7376221CS263", name: "Praveen Kumar S", level: 4 },
  { rollNo: "7376222IT237", name: "Sabarish", level: 5 },
];

const Admin = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const onSelectionClick = useCallback((rollNo) => {
    navigate(`/`);
  }, [navigate]);

  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin">
      <main className="image">
        <NavBar />
        <section className="students-header-wrapper">
          <div className="students-header">
            <div className="students-header-wrapper">
              <h1 className="a-title">Students List</h1>
              <div className="search-bar">
                <div className="search-container">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  /><FaSearch />
                </div>
              </div>
            </div>
          </div>
          <div className="students-list">
            <div className="student-records">
              {/* Table Headings */}
              <div className="student-header">
                <span className="student-header-item">Roll No</span>
                <span className="student-header-item">Name</span>
                <span className="student-header-item">Level</span>
              </div>
              {/* Student Records */}
              {filteredStudents.map((student, index) => (
                <div key={index} className="student-row" onClick={() => onSelectionClick(student.rollNo)}>
                  <div className="student-details">
                    <span className="student-roll">{student.rollNo}</span>
                    <span className="student-name">{student.name}</span>
                    <span className="student-level">{student.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;
