import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Admin1.css";

const Admin1 = ({ className = "", management, aDMIN, propMinWidth }) => {
  const aDMINStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const navigate = useNavigate();

  const onAdminContainerClick = useCallback(() => {
    navigate("/admin");
  }, [navigate]);

  return (
    <div className={`admin1 ${className}`} onClick={onAdminContainerClick}>
      <button className="rectangle-parent">
        <div className="rectangle-div" />
        <img className="management-icon" alt="" src={management} />
        <div className="admin-parents-label">
          <i className="admin2" style={aDMINStyle}>
            {aDMIN}
          </i>
        </div>
      </button>
    </div>
  );
};

Admin1.propTypes = {
  className: PropTypes.string,
  management: PropTypes.string,
  aDMIN: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
};

export default Admin1;
