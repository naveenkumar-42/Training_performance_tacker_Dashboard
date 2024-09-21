import { useCallback } from "react";
import Admin1 from "./Admin1";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Signup.css";

const Signup = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={`signup ${className}`}>
      <div className="signup-inner">
        <div className="ega-parent">
          <div className="ega">
            <div className="ega-inner">
              <div className="image-11-parent">
                <img
                  className="image-11-icon1"
                  loading="lazy"
                  alt=""
                  src="/image-11@2x.png"
                />
                <i className="welcome-to-training-container1">
                  <p className="welcome-to-training1">{`Welcome to Training `}</p>
                  <p className="welcome-to-training1">Performance tracker</p>
                </i>
                <div className="have-an-account-login1">
                  <i className="already-have-an1">Log in as</i>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper3">
            <div className="admin-parent">
              <Admin1 management="/management@2x.png" aDMIN="ADMIN" />
              <div className="frame-wrapper4">
                <button
                  className="rectangle-group"
                  onClick={onGroupButtonClick}
                >
                  <div className="frame-child4" />
                  <img
                    className="student-male-icon"
                    alt=""
                    src="/student-male@2x.png"
                  />
                  <div className="student-wrapper">
                    <i className="student">Student</i>
                  </div>
                </button>
              </div>
              <Admin1
                management="/user-account@2x.png"
                aDMIN="Parents"
                propMinWidth="96px"
              />
            </div>
          </div>
        </div>
      </div>
      <img className="icons1" loading="lazy" alt="" src="/icons.svg" />
      <div className="content" />
    </div>
  );
};

Signup.propTypes = {
  className: PropTypes.string,
};

export default Signup;
