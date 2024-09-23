import { useCallback, useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaUser, FaChartBar, FaCog } from "react-icons/fa";
import "./Admin.css";

const Admin = () => {
  const navigate = useNavigate();
  const [studentsData, setStudentsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/admin_page");
        const data = await response.json();
        setStudentsData(data);
      } catch (error) {
        console.error("Error fetching students data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to fetch data once on component mount

  const onSelectionClick = useCallback((rollNo) => {
    navigate(`/profile`); // Navigate to the selected student's profile
  }, [navigate]);

  // Filter and sort students based on the search term
  const filteredStudents = studentsData.filter(student => {
    const term = searchTerm.toLowerCase();
    if (term === "c" || term === "java" || term === "python" || term === "dsa" || term === "mysql" || term === "ui") {
      return student[term] !== undefined;
    }
    return student.name.toLowerCase().includes(term);
  }).sort((a, b) => {
    const term = searchTerm.toLowerCase();
    if (term === "c" || term === "java" || term === "python" || term === "dsa" || term === "mysql" || term === "ui") {
      return b[term] - a[term]; // Sort by highest to lowest marks
    }
    return 0; // No sorting if searching by name
  });

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
                    placeholder="Search by Name or Subject..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <FaSearch />
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
                <span className="student-header-item">C</span>
                <span className="student-header-item">JAVA</span>
                <span className="student-header-item">MYSQL</span>
                <span className="student-header-item">PYTHON</span>
                <span className="student-header-item">UI/UX</span>
                <span className="student-header-item">DSA</span>
              </div>
              {/* Student Records */}
              {filteredStudents.map((student, index) => (
                <div key={index} className="student-row" onClick={() => onSelectionClick(student.roll_no)}>
                  <div className="student-details">
                    <span className="student-roll">{student.roll_no || '-'}</span>
                    <span className="student-name">{student.name || '-'}</span>
                    <span className="student-level">{student.c || '-'}</span>
                    <span className="student-level">{student.java || '-'}</span>
                    <span className="student-level">{student.mysql || '-'}</span>
                    <span className="student-level">{student.python || '-'}</span>
                    <span className="student-level">{student.ui || '-'}</span>
                    <span className="student-level">{student.dsa || '-'}</span>
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
