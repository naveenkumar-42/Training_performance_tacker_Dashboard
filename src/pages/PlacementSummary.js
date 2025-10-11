import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import "./PlacementSummary.css";

const PlacementSummary = () => {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/placement_summary")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch placement summary");
        return res.json();
      })
      .then((data) => {
        console.log("Fetched placement summary:", data);
        setPlacements(data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <section className="placement-summary">
      <NavBar />
      <h1 className="summary-title">Placement Summary</h1>

      <div className="placement-container">
        {placements.length > 0 ? (
          placements.map((company, index) => (
            <div className="placement-card" key={index}>
              <div className="placement-header">
                <h2>{company.company_name}</h2>
                <p className={`status-tag ${company.status.toLowerCase()}`}>
                  {company.status}
                </p>
              </div>

              <div className="placement-details">
                <p><strong>Role:</strong> {company.role}</p>
                <p><strong>Date of Drive:</strong> {company.date}</p>
                <p><strong>Package:</strong> {company.package}</p>
                <p><strong>Total Rounds:</strong> {company.total_rounds}</p>
                <p><strong>Completed Rounds:</strong> {company.completed_rounds}</p>
                <p><strong>Last Round Cleared:</strong> {company.last_round}</p>
                <p><strong>Reason for Failure:</strong> {company.reason || "N/A"}</p>
                <p><strong>Feedback:</strong> {company.feedback || "No feedback available"}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-data">No placement data available.</div>
        )}
      </div>
    </section>
  );
};

export default PlacementSummary;
