import React from 'react';
import './Details.css';
import NavBar from '../components/NavBar';

const Dashboard = () => {
  return (
    <div className="details">
    <NavBar />
    <div className="dashboard-container">
      
      <div className="section full-stack-rank">
        <h3>Full-Stack Rank</h3>
        <table>
          <thead>
            <tr>
              <th>Progression Point</th>
              <th>Stage Point</th>
              <th>Level Completion Point</th>
              <th>Overall Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>50</td>
              <td>100</td>
              <td>120</td>
              <td>270</td>
            </tr>
            <tr>
              <td>50</td>
              <td>120</td>
              <td>220</td>
              <td>270</td>
            </tr>
            <tr>
              <td>30</td>
              <td>50</td>
              <td>120</td>
              <td>200</td>
            </tr>
            <tr>
              <td>20</td>
              <td>100</td>
              <td>120</td>
              <td>240</td>
            </tr>
          </tbody>
        </table>
        <button className="more-details">More Details</button>
      </div>

      <div className="section personalized-skill">
        <h3>Personalized Skill</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Level</th>
              <th>Status</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>C</td>
              <td>5</td>
              <td className="completed">Completed</td>
              <td>270</td>
            </tr>
            <tr>
              <td>C</td>
              <td>4</td>
              <td className="completed">Completed</td>
              <td>220</td>
            </tr>
            <tr>
              <td>JAVA</td>
              <td>3</td>
              <td className="ongoing">On Going</td>
              <td>200</td>
            </tr>
            <tr>
              <td>DSA</td>
              <td>3</td>
              <td className="ongoing">On Going</td>
              <td>240</td>
            </tr>
            <tr>
              <td>SQL</td>
              <td>2</td>
              <td className="completed">Completed</td>
              <td>240</td>
            </tr>
          </tbody>
        </table>
        <button className="more-details">More Details</button>
      </div>

      <div className="section placement-assessment">
        <h3>Placement Training Assessment</h3>
        <table>
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Training Name</th>
              <th>Mark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CAREER GROWTH</td>
              <td>GROWTH TRAINING</td>
              <td>83</td>
            </tr>
            <tr>
              <td>2026_S2_MID TERM ASSESSMENT 1</td>
              <td>MID TERM TEST</td>
              <td>75</td>
            </tr>
            <tr>
              <td>2026_S2_MOCK INTERVIEW 1</td>
              <td>MOCK INTERVIEW</td>
              <td>84</td>
            </tr>
            <tr>
              <td>2026_S2_MOCK INTERVIEW 2</td>
              <td>MOCK INTERVIEW</td>
              <td>95</td>
            </tr>
            <tr>
              <td>2026_S3_MOCK INTERVIEW 3</td>
              <td>MOCK INTERVIEW</td>
              <td>86</td>
            </tr>
          </tbody>
        </table>
        <button className="more-details">More Details</button>
      </div>

      <div className="section github-projects">
        <h3>Git Hub</h3>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Stars</th>
              <th>Stack</th>
              <th>Overall Point</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>dashboard_frontend</td>
              <td>5</td>
              <td>MERN</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Contextual_Chatbot</td>
              <td>9</td>
              <td>DJANGO</td>
              <td>100</td>
            </tr>
            <tr>
              <td>bit_frontend</td>
              <td>10</td>
              <td>HTML,CSS,JS</td>
              <td>100</td>
            </tr>
            <tr>
              <td>Training Tracker</td>
              <td>6</td>
              <td>Spring Boot</td>
              <td>100</td>
            </tr>
            <tr>
              <td>iT_web</td>
              <td>12</td>
              <td>REACT</td>
              <td>100</td>
            </tr>
          </tbody>
        </table>
        <button className="more-details">More Details</button>
      </div>

      <div className="section achievements full-width"> {/* Add full-width class here */}
        <h3>Achievements</h3>
        <table>
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Position</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hackathon</td>
              <td>1st Place</td>
              <td>July 2023</td>
            </tr>
            <tr>
              <td>Codefest</td>
              <td>2nd Place</td>
              <td>August 2023</td>
            </tr>
            <tr>
              <td>Tech Challenge</td>
              <td>Finalist</td>
              <td>June 2023</td>
            </tr>
          </tbody>
        </table>
        <button className="more-details">More Details</button>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
