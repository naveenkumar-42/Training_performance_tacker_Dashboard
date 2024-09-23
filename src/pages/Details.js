import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './Details.css';
import NavBar from '../components/NavBar';
import Table from '../components/table'; // Import the Table component

const Dashboard = () => {
  const [skills, setSkills] = useState([]);
  const [fullStackRankData, setFullStackRankData] = useState([]);
  const [personalizedSkillData, setPersonalizedSkillData] = useState([]);
  const [placementAssessmentData, setPlacementAssessmentData] = useState([]);
  const [githubProjectsData, setGithubProjectsData] = useState([]);
  const [achievementsData, setAchievementsData] = useState([]);

  // Fetch data from APIs
  useEffect(() => {
    const fetchData = async () => {
      try {
        const skillsResponse = await fetch('http://localhost:3001/s_skill');
        const skillsData = await skillsResponse.json();
        setSkills(skillsData);

        const fullStackRankResponse = await fetch('http://localhost:3001/full_stack_rank');
        const fullStackRankData = await fullStackRankResponse.json();
        setFullStackRankData(fullStackRankData);

        const personalizedSkillResponse = await fetch('http://localhost:3001/personalized_skills');
        const personalizedSkillData = await personalizedSkillResponse.json();
        setPersonalizedSkillData(personalizedSkillData);

        const placementAssessmentResponse = await fetch('http://localhost:3001/placement_assessments');
        const placementAssessmentData = await placementAssessmentResponse.json();
        setPlacementAssessmentData(placementAssessmentData);

        const githubProjectsResponse = await fetch('http://localhost:3001/github_projects');
        const githubProjectsData = await githubProjectsResponse.json();
        setGithubProjectsData(githubProjectsData);

        const achievementsResponse = await fetch('http://localhost:3001/achievements');
        const achievementsData = await achievementsResponse.json();
        setAchievementsData(achievementsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Define the table headers
  const headers = ['Semester', 'Skill Code', 'Skill Name', 'Skill Type', 'Skill Mark', 'Total Mark'];

  // Map the skills data into an array of arrays (for each row)
  const tableData = skills.map(skill => [
    skill.c_sem,
    skill.s_code,
    skill.s_name,
    skill.s_type,
    skill.s_mark,
    skill.t_mark
  ]);

  // Map data for each section
  const fullStackRankHeaders = ['Progression Point', 'Stage Point', 'Level Completion Point', 'Overall Point'];
  const fullStackRankMapped = fullStackRankData.map(data => [
    data.progression_point,
    data.stage_point,
    data.level_completion_point,
    data.overall_point
  ]);

  const personalizedSkillHeaders = ['Name', 'Level', 'Status', 'Points'];
  const personalizedSkillMapped = personalizedSkillData.map(data => [
    data.name,
    data.level,
    data.status,
    data.points
  ]);

  const placementAssessmentHeaders = ['Test Name', 'Training Name', 'Mark'];
  const placementAssessmentMapped = placementAssessmentData.map(data => [
    data.test_name,
    data.training_name,
    data.mark
  ]);

  const githubProjectsHeaders = ['Project', 'Stars', 'Stack', 'Overall Point'];
  const githubProjectsMapped = githubProjectsData.map(data => [
    data.project,
    data.stars,
    data.stack,
    data.overall_point
  ]);

  const achievementsHeaders = ['Event Name', 'Position', 'Date','Status'];
  const achievementsMapped = achievementsData.map(data => [
    data.event_name,
    data.position,
    data.date,
    data.status
  ]);

  return (
    <div className="details">
      <NavBar />
      <div className="dashboard-container">
        <div className="section">
          <h3>Full-Stack Rank</h3>
          <Table headers={fullStackRankHeaders} data={fullStackRankMapped} />
          {/* Provide a link for the "More Details" button */}
          <a href="https://bip.bitsathy.ac.in/dashboard/placements" target="_blank" rel="noopener noreferrer">
            <button className="more-details">More Details</button>
          </a>
        </div>

        <div className="section">
          <h3>Personalized Skill</h3>
          <Table headers={personalizedSkillHeaders} data={personalizedSkillMapped} />
          <a href="https://ps.bitsathy.ac.in/dashboard" target="_blank" rel="noopener noreferrer">
            <button className="more-details">More Details</button>
          </a>
        </div>

        <div className="section">
          <h3>Placement Training Assessment</h3>
          <Table headers={placementAssessmentHeaders} data={placementAssessmentMapped} />
          <a href="https://bip.bitsathy.ac.in/dashboard/placements" target="_blank" rel="noopener noreferrer">
            <button className="more-details">More Details</button>
          </a>
        </div>

        <div className="section">
          <h3>Git Hub</h3>
          <Table headers={githubProjectsHeaders} data={githubProjectsMapped} />
          <a href="https://github.com/naveenkumar-42" target="_blank" rel="noopener noreferrer">
            <button className="more-details">More Details</button>
          </a>
        </div>

        <div className="section full-width">
          <h3>Achievements</h3>
          <Table headers={achievementsHeaders} data={achievementsMapped} />
          <a href="https://bip.bitsathy.ac.in/dashboard/achievements" target="_blank" rel="noopener noreferrer">
            <button className="more-details">More Details</button>
          </a>
        </div>

        <div className="section">
          <h3>Overall Skills Acquired</h3>
            <Table headers={headers} data={tableData} customClasses="overall-skills-table"  />
          <a href="https://bip.bitsathy.ac.in/dashboard/achievements" target="_blank" rel="noopener noreferrer">
            <button className="more-details">More Details</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
