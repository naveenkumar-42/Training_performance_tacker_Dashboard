import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./PlacementSummary.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const PlacementSummary = () => {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/placement-summary")
      .then((res) => res.json())
      .then((data) => setPlacements(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  // Pie chart: count of students per status
  const statusCounts = placements.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: ["#2ECC71", "#E74C3C", "#F1C40F"], // Passed / Failed / Pending
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <NavBar />
      <h1 className="summary-title">Placement Summary</h1>
    <section className="placement-summary">
      <div className="table-section">
        <h2>Detailed Placement Records</h2>
        <table className="placement-table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Role</th>
              <th>Date of Drive</th>
              <th>Package</th>
              <th>Total Rounds</th>
              <th>Completed Rounds</th>
              <th>Last Round</th>
              <th>Status</th>
              <th>Reason</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {placements.map((p, index) => (
              <tr key={index}>
                <td>{p.company_name}</td>
                <td>{p.role}</td>
                <td>{p.date_of_drive}</td>
                <td>{p.package}</td>
                <td>{p.total_rounds}</td>
                <td>{p.completed_rounds}</td>
                <td>{p.last_round}</td>
                <td
                  className={`status ${
                    p.status === "Passed"
                      ? "passed"
                      : p.status === "Failed"
                      ? "failed"
                      : "pending"
                  }`}
                >
                  {p.status}
                </td>
                <td>{p.reason || "—"}</td>
                <td>{p.feedback || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            <div className="chart-section-pie">
        <h2>Overall Status Distribution</h2>
        <div className="chart-container-pie">
          {placements.length > 0 ? (
            <Pie data={chartData} />
          ) : (
            <p>Loading chart...</p>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default PlacementSummary;
