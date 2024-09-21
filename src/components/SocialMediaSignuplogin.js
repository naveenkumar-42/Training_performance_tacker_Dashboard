import PropTypes from "prop-types";
import "./SocialMediaSignuplogin.css";

const SocialMediaSignuplogin = ({ className = "" }) => {
  return (
    <div className={`social-media-signuplogin ${className}`}>
      <div className="google-button">
        <div className="google-button1">
          <img
            className="social-media-logo"
            loading="lazy"
            alt=""
            src="/social-media-logo.svg"
          />
        </div>
        <div className="continue-with-google">Continue with Google</div>
      </div>
    </div>
  );
};

SocialMediaSignuplogin.propTypes = {
  className: PropTypes.string,
};

export default SocialMediaSignuplogin;
