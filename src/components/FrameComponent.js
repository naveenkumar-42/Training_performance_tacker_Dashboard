import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ProfileTypes from "./ProfileTypes";
import Actions from "./Actions";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onNavigationIconsClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavigationIconsContainerClick = useCallback(() => {
    navigate("/details");
  }, [navigate]);

  return (
    <div className={`left-parent ${className}`}>
      <div className="left1" />
      <div className="student-details-container">
        <img
          className="image-12-icon1"
          loading="lazy"
          alt=""
          src="/image-12@2x.png"
        />
        <div className="student-detail-content">
          <a className="student-dashboard5">STUDENT DASHBOARD</a>
        </div>
      </div>
      <div className="level-header">
        <div className="navigation-icons-parent">
          <button className="navigation-icons" onClick={onNavigationIconsClick}>
            <img className="person-icon1" alt="" src="/person@2x.png" />
            <div className="icon-labels">
              <a className="profile1">Profile</a>
            </div>
          </button>
          <div
            className="navigation-icons1"
            onClick={onNavigationIconsContainerClick}
          >
            <img className="nas-icon1" alt="" src="/nas@2x.png" />
            <div className="resource1">{`Resource `}</div>
          </div>
          <ProfileTypes />
          <button className="navigation-icons2">
            <img className="icon-search" alt="" src="/-icon-search.svg" />
            <div className="search-wrapper">
              <div className="search">Search</div>
            </div>
          </button>
        </div>
      </div>
      <Actions />
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
