import PropTypes from "prop-types";
import "./ProfileTypes.css";

const ProfileTypes = ({ className = "" }) => {
  return (
    <div className={`profile-types ${className}`}>
      <img className="calendar-icon1" alt="" src="/calendar2@2x.png" />
      <div className="event-wrapper5">
        <div className="event14">Event</div>
      </div>
    </div>
  );
};

ProfileTypes.propTypes = {
  className: PropTypes.string,
};

export default ProfileTypes;
