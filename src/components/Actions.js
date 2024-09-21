import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Actions.css";

const Actions = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLogoutButtonsContainerClick = useCallback(() => {
    navigate("/typeoflogin");
  }, [navigate]);

  return (
    <div className={`actions ${className}`}>
      <div className="action-buttons">
        <button className="logout-buttons">
          <img className="gear-icon1" alt="" src="/gear2@2x.png" />
          <div className="settings-wrapper">
            <a className="settings1">Settings</a>
          </div>
        </button>
        <div
          className="logout-buttons1"
          onClick={onLogoutButtonsContainerClick}
        >
          <img className="gear-icon1" alt="" src="/logout2@2x.png" />
          <div className="settings-wrapper">
            <div className="logout1">Logout</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Actions.propTypes = {
  className: PropTypes.string,
};

export default Actions;
