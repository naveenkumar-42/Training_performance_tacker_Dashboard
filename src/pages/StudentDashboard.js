import React, { useEffect, useState, useCallback } from "react";
import SideBar from "../components/SideBar";
import LangChart from "../components/langChart";
import { useNavigate } from "react-router-dom";
import BarChart from "../components/barChart";
import "./StudentDashboard.css";
import PresentChart from "../components/PresentChart";
import HbarChart from "../components/hbarChart";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: '',
    id: '',
    image: '',
    status: '',
    email: '',
    phone: '',
    semester: '',
    mentor: '',
    spl_lab: '',
    boarding: '',
    warden: ''
  });

  useEffect(() => {
    fetch('http://localhost:3001/profile')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched profile data:', data); // Debugging log
        if (data.length > 0) {
          const base64Image = `data:image/jpeg;base64,${data[0].image}`;
          setProfile({
            name: data[0].name,
            id: data[0].id,
            image: base64Image,
            status: data[0].status,
            email: data[0].email,
            semester: data[0].semester,
            phone: data[0].phone,
            mentor: data[0].mentor,
            spl_lab: data[0].spl_lab,
            boarding: data[0].boarding,
            warden: data[0].warden
          });
        }
      })
      .catch(error => console.error('Error fetching profile:', error));
  }, []);

  const onBackgroundClick = useCallback(() => {
    navigate("/details");
  }, [navigate]);

  return (
    <section className="student-dashboard">
        {/* <SideBar /> */}
      {/* Top Section */}
      <section className="top">
        <div className="p_img_detail">
          <img
            className="p_image"
            loading="lazy"
            alt="Profile"
            src={profile.image}
          />
          <div className="status">{profile.status}</div>
        </div>
        <div className="p_img_detail">
          <div className="p_details">
            <h3>{profile.name}</h3>
            <p>{profile.id}</p>
            <p>{profile.semester}</p>
            <p>{profile.department}</p>
            <p>{profile.mentor}</p>
            <p>{profile.spl_lab}</p>
            <p>{profile.boarding}</p>
            <p>{profile.warden}</p>
          </div>
        </div>
        <div className="p_img_detail">
          <div className="placement-details">
      
              <h1 className="heading-title">Placement Profile</h1>
           
            <div className="rank-points">
              <div className="rank-details">
                <div className="rank-labels">
                  <div className="pp-head">
                    <a className="rank">Full-Stack Rank</a>
                  </div>
                  <div className="pp-head">
                    <a className="rank">Placement Cumulative</a>
                  </div>
                </div>
                <div className="improvement-section">
                  <div className="improvement-details">
                    <div className="pp-head">
                      <div className="rank">Eligibility</div>
                    </div>
                  </div>
                  <div className="improvement-note">
                    <div className="note">Need Improvement</div>
                  </div>
                </div>
              </div>
              <div className="separator">
                <div className="score">
                  <a className="score-value">66</a>
                </div>
                <div className="score">
                  <a className="score-value">64.2</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Top-Mid Section */}
      <section className="attendance-container">
  <div className="attendance-card">
    <div className="attendance-info">
      <div className="attendance-heading">Present Days</div>
      <div className="attendance-value">58</div>
      <div className="attendance-remarks">Good</div>
    </div>
    <div className="attendance-chart">
      <PresentChart pd={58} td={100} />
    </div>
  </div>

  <div className="attendance-card">
    <div className="attendance-info">
      <div className="attendance-heading">T&P - FA</div>
      <div className="attendance-value">80</div>
      <div className="attendance-remarks">Need Improvement</div>
    </div>
    <div className="attendance-chart">
      <PresentChart pd={80} td={100} />
    </div>
  </div>

  <div className="attendance-card">
    <div className="attendance-info">
      <div className="attendance-heading">Training Assessment</div>
      <div className="attendance-value">99</div>
      <div className="attendance-remarks">Attended: 99</div>
    </div>
    <div className="attendance-chart">
      <PresentChart pd={99} td={100} />
    </div>
  </div>
</section>

      
      {/* Middle Section */}
    <section className="middle">
      <div className="bar-chart-container">
        <BarChart />
      </div>
      <div className="hbar-chart-container">
        <HbarChart />
      </div>
    </section>
      
      {/* Bottom Section */}
      <section className="skills-section">
  <div className="skills-wrapper">
    <div className="skill-chart">
      <div className="skill-graph">
        <div className="chart-item">
          <LangChart value={3} valueMax={6} title="C" />
        </div>
      </div>
      <div className="skill-graph">
        <div className="chart-item">
          <LangChart value={2} valueMax={4} title="JAVA" />
        </div>
      </div>
      <div className="skill-graph">
        <div className="chart-item">
          <LangChart value={1} valueMax={10} title="DSA" />
        </div>
      </div>
      <div className="skill-graph">
        <div className="chart-item">
          <LangChart value={4} valueMax={10} title="SQL" />
        </div>
      </div>
    </div>
  </div>
</section>
    </section>
  );
};

export default StudentDashboard;