import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SocialMediaSignuplogin from "../components/SocialMediaSignuplogin";
import HaveAnAccountLogin from "../components/HaveAnAccountLogin";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const onSocialButtonContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="login">
      <main className="image4">
        <div className="sign-up-overlay">
          <div className="social-login">
            <div className="credentials">
              <div className="welcome-content-wrapper">
                <div className="welcome-content">
                  <img
                    className="image-11-icon"
                    loading="lazy"
                    alt=""
                    src="/image-11@2x.png"
                  />
                  <h3 className="welcome-to-training-container">
                    <p className="welcome-to-training">{`Welcome to Training `}</p>
                    <p className="welcome-to-training">Performance tracker</p>
                  </h3>
                  <div className="have-an-account-login">
                    <div className="already-have-an">Sign up to see more</div>
                  </div>
                </div>
              </div>
              <div className="login-button">
                <div className="password-input">
                  <div className="username">{`   Username `}</div>
                </div>
              </div>
              <div className="login-button">
                <div className="password-input">
                  <div className="username">{`   Password `}</div>
                </div>
              </div>
              <div className="username-input">
                <div className="login-container">
                  <div className="login-button">
                    <button className="login-wrapper">
                      <div className="login1">
                        <span className="span1">{`   `}</span>
                        <span className="login2">Login</span>
                      </div>
                    </button>
                  </div>
                  <div className="forget-password-parent">
                    <div className="forget-password">Forget password ?</div>
                    <div className="separator">
                      ---------------------------------
                    </div>
                  </div>
                </div>
              </div>
              <div className="username-input1">
                <div
                  className="social-button"
                  onClick={onSocialButtonContainerClick}
                >
                  <SocialMediaSignuplogin />
                </div>
              </div>
              <div className="login-actions">
                <HaveAnAccountLogin />
              </div>
            </div>
          </div>
          <img className="icons" loading="lazy" alt="" src="/icons.svg" />
        </div>
      </main>
    </div>
  );
};

export default Login;
