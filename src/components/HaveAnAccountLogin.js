import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./HaveAnAccountLogin.css";

const HaveAnAccountLogin = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHaveAnAccountLoginClick = useCallback(() => {
    navigate("/typeoflogin");
  }, [navigate]);

  return (
    <div
      className={`have-an-account-login2 ${className}`}
      onClick={onHaveAnAccountLoginClick}
    >
      <div className="already-have-an-container">
        <span className="already">Already</span>
        <span className="span2">{` `}</span>
        <span className="already">a</span>
        <span className="span2">{` `}</span>
        <span className="remember">remember?</span>
        <span className="span4">{` `}</span>
        <span className="log-in">{`Log in  `}</span>
      </div>
    </div>
  );
};

HaveAnAccountLogin.propTypes = {
  className: PropTypes.string,
};

export default HaveAnAccountLogin;
