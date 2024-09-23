import React, { useEffect, useState, useCallback } from "react";
import NavBar from "../components/NavBar";
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

  // Add state for p_profile
  const [p_profile, setPProfile] = useState({
    FsRank: '',
    PCumulative: '',
    Eligibility: ''
  });

  const [p_attendance, setPAttendance] = useState({
    p_p_days: '',
    p_t_days: '',
    p_remarks: '',
    fa_p_days: '',
    fa_t_days: '',
    fa_remarks: '',
    t_p_days: '',
    t_t_days: '',
    t_remarks: ''   
  });

  // Fetch profile data
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

  // Fetch p_profile data
  useEffect(() => {
    fetch('http://localhost:3001/p_profile')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched p_profile data:', data); // Debugging log
        if (data.length > 0) {
          setPProfile({
            FsRank: data[0].FsRank,
            PCumulative: data[0].PCumulative,
            Eligibility: data[0].Eligibility
          });
        }
      })
      .catch(error => console.error('Error fetching p_profile:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/p_attendance')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.length > 0) {
          setPAttendance({
            p_p_days: data[0].p_p_days,
            p_t_days: data[0].p_t_days,
            p_remarks: data[0].p_remarks,
            fa_p_days: data[0].fa_p_days,
            fa_t_days: data[0].fa_t_days,
            fa_remarks: data[0].fa_remarks,
            t_p_days: data[0].t_p_days,
            t_t_days: data[0].t_t_days,
            t_remarks: data[0].t_remarks
          });
        }
      })
      .catch(error => console.error('Error fetching p_attendance:', error));
  }, []);

  return (
    <section className="student-dashboard">
        <NavBar />
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
            <div className="p_head">
            <h3>{profile.name}</h3>
            <p>{profile.id}</p>
            </div>
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
                    <div className="note">{p_profile.Eligibility}</div>
                  </div>
                </div>
              </div>
              <div className="separator1">
                <div className="score">
                  <a className="score-value">{p_profile.FsRank}</a>
                </div>
                <div className="score">
                  <a className="score-value">{p_profile.PCumulative}</a>
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
            <div className="attendance-value">{p_attendance.p_p_days}</div>
            <div className="attendance-remarks">{p_attendance.p_remarks}</div>
          </div>
          <div className="attendance-chart">
            <PresentChart pd={p_attendance.p_p_days} td={p_attendance.p_t_days} />
          </div>
        </div>

        <div className="attendance-card">
          <div className="attendance-info">
            <div className="attendance-heading">T&P - FA</div>
            <div className="attendance-value">{p_attendance.fa_p_days}</div>
            <div className="attendance-remarks">{p_attendance.fa_remarks}</div>
          </div>
          <div className="attendance-chart">
            <PresentChart pd={p_attendance.fa_p_days} td={p_attendance.fa_t_days} />
          </div>
        </div>

        <div className="attendance-card">
          <div className="attendance-info">
            <div className="attendance-heading">Training Assessment</div>
            <div className="attendance-value">{p_attendance.t_p_days}</div>
            <div className="attendance-remarks">{p_attendance.t_remarks}</div>
          </div>
          <div className="attendance-chart">
            <PresentChart pd={p_attendance.t_p_days} td={p_attendance.t_t_days} />
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