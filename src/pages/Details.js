import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const navigate = useNavigate();

  const onProfileInfoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGearLogoutContainerClick = useCallback(() => {
    navigate("/typeoflogin");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    window.open("https://bip.bitsathy.ac.in/dashboard/placements");
  }, []);

  const onFrameContainerClick1 = useCallback(() => {
    window.open(
      "https://ps.bitsathy.ac.in/course/VTJGc2RHVmtYMStpM0RzNjFiNk5La3NienIzaVBjcnczUVdKQnRLK2xSZz0=",
    );
  }, []);

  const onEventContainerClick = useCallback(() => {
    window.open("https://github.com/naveenkumar-42");
  }, []);

  return (
    <div className="details">
      <main className="image1">
        <div className="image-item" />
        <section className="image-wrapper">
          <div className="image2">
            <div className="left-container">
              <div className="left" />
              <div className="image-12-parent">
                <img
                  className="image-12-icon"
                  loading="lazy"
                  alt=""
                  src="/image-121@2x.png"
                />
                <div className="student-dashboard-wrapper">
                  <a className="student-dashboard">STUDENT DASHBOARD</a>
                </div>
              </div>
              <div className="profile-info-wrapper">
                <div
                  className="profile-info"
                  onClick={onProfileInfoContainerClick}
                >
                  <img className="person-icon" alt="" src="/person1@2x.png" />
                  <div className="profile-wrapper">
                    <a className="profile">Profile</a>
                  </div>
                </div>
              </div>
              <div className="detail-wrapper">
                <div className="detail">
                  <div className="detail1">
                    <img
                      className="nas-icon"
                      loading="lazy"
                      alt=""
                      src="/nas1@2x.png"
                    />
                    <h3 className="resource">{`Resource `}</h3>
                  </div>
                  <div className="detail-content">
                    <img
                      className="calendar-icon"
                      alt=""
                      src="/calendar1@2x.png"
                    />
                    <div className="event-wrapper">
                      <div className="event">Event</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-info-wrapper">
                <div className="gear">
                  <div className="gear-logout">
                    <img className="gear-icon" alt="" src="/gear1@2x.png" />
                    <div className="event-wrapper">
                      <a className="settings">Settings</a>
                    </div>
                  </div>
                  <div
                    className="gear-logout1"
                    onClick={onGearLogoutContainerClick}
                  >
                    <img className="gear-icon" alt="" src="/logout1@2x.png" />
                    <div className="event-wrapper">
                      <div className="logout">Logout</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="skill-progress-wrapper">
              <div className="skill-progress">
                <div className="skill-progress-content">
                  <div className="skill-progression">
                    <div className="full-stack-rank-wrapper">
                      <a className="full-stack-rank">Full-Stack Rank</a>
                    </div>
                    <div className="progression">
                      <div className="progression-details">
                        <div className="progression-point">
                          Progression Point
                        </div>
                        <a className="stage-point">Stage Point</a>
                        <div className="level-completion-point">
                          Level Completion Point
                        </div>
                        <div className="overall-point">Overall Point</div>
                        <img className="week-icon" loading="lazy" alt="" />
                      </div>
                      <div className="c-progression-wrapper">
                        <div className="c-progression">
                          <div className="c-details">
                            <img
                              className="c-details-child"
                              loading="lazy"
                              alt=""
                            />
                            <div className="c-details-inner">
                              <div className="week-parent">
                                <a className="week">50</a>
                                <div className="container">
                                  <div className="div1">100</div>
                                </div>
                                <div className="container">
                                  <a className="a">120</a>
                                </div>
                                <div className="d-s-a">270</div>
                              </div>
                            </div>
                          </div>
                          <div className="line-parent">
                            <img
                              className="c-details-child"
                              loading="lazy"
                              alt=""
                            />
                            <div className="frame-container">
                              <div className="week-parent">
                                <div className="empty-skill-name">50</div>
                                <div className="frame-div">
                                  <div className="div3">50</div>
                                </div>
                                <div className="week-wrapper">
                                  <div className="week2">120</div>
                                </div>
                                <div className="d-s-a">220</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-parent1">
                        <div className="line-wrapper">
                          <img className="frame-inner" loading="lazy" alt="" />
                        </div>
                        <div className="empty-skill">
                          <div className="week-parent">
                            <div className="empty-skill-name">30</div>
                            <div className="empty-skill-stage">
                              <div className="div3">50</div>
                            </div>
                            <div className="empty-skill-status">
                              <div className="week2">120</div>
                            </div>
                            <div className="empty-skill-overall">200</div>
                          </div>
                        </div>
                        <div className="line-container">
                          <img className="frame-inner" loading="lazy" alt="" />
                        </div>
                        <div className="empty-skill-empty">
                          <div className="week-parent">
                            <div className="empty-skill-name">20</div>
                            <div className="empty-skill-empty-stage">
                              <div className="div1">100</div>
                            </div>
                            <div className="empty-skill-empty-status">
                              <div className="week2">120</div>
                            </div>
                            <div className="d-s-a">240</div>
                          </div>
                        </div>
                        <img
                          className="c-details-child"
                          loading="lazy"
                          alt=""
                        />
                        <div className="completed-skill-empty">
                          <div className="week-parent">
                            <div className="empty-skill-name">20</div>
                            <div className="frame-div">
                              <div className="div1">100</div>
                            </div>
                            <div className="completed-skill-empty-status">
                              <div className="week2">120</div>
                            </div>
                            <div className="d-s-a">240</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="more-details-button">
                      <img className="c-details-child" loading="lazy" alt="" />
                      <div className="more-details-button-inner">
                        <div
                          className="more-details-wrapper"
                          onClick={onFrameContainerClick}
                        >
                          <div className="more-details">More Details</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="skill-progression1">
                    <div className="inner-stack-wrapper">
                      <div className="inner-stack">
                        <a className="full-stack-rank">Personalized Skill</a>
                      </div>
                    </div>
                    <div className="frame-parent2">
                      <div className="project-details">
                        <div className="name-parent">
                          <a className="name1">Name</a>
                          <div className="level-wrapper">
                            <a className="level">Level</a>
                          </div>
                          <div className="status-wrapper">
                            <a className="status">Status</a>
                          </div>
                          <div className="overall-point">Overall Point</div>
                        </div>
                        <img className="end-icon" loading="lazy" alt="" />
                      </div>
                      <div className="line-wrapper">
                        <div className="c-completed-details-parent">
                          <div className="c-completed-details">
                            <nav className="c-parent">
                              <div className="c2">
                                <div className="day">C</div>
                              </div>
                              <div className="c-completed">
                                <div className="day">5</div>
                              </div>
                              <div className="sun">
                                <a className="completed">Completed</a>
                              </div>
                              <div className="s-q-l-overall">
                                <div className="d-s-a">270</div>
                              </div>
                            </nav>
                          </div>
                          <img
                            className="c-details-child"
                            loading="lazy"
                            alt=""
                          />
                          <div className="c-completed-details">
                            <div className="week-parent">
                              <div className="c4">
                                <div className="day">C</div>
                              </div>
                              <div className="c-completed1">
                                <div className="day">4</div>
                              </div>
                              <div className="day1">
                                <div className="completed1">Completed</div>
                                <div className="day2">
                                  <div className="test-name">Completed</div>
                                </div>
                              </div>
                              <div className="c-completed2">
                                <div className="d-s-a">220</div>
                              </div>
                            </div>
                          </div>
                          <img
                            className="c-details-child"
                            loading="lazy"
                            alt=""
                          />
                          <div className="java-details-wrapper">
                            <div className="java-details">
                              <div className="java-info">
                                <div className="java">JAVA</div>
                              </div>
                              <div className="java-on-going">
                                <div className="day">3</div>
                              </div>
                              <div className="est-gmt">
                                <div className="on-going">On Going</div>
                              </div>
                              <div className="s-q-l-overall">
                                <div className="empty-skill-overall">200</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="s-q-l-skill">
                        <div className="videocamera-parent">
                          <img
                            className="c-details-child"
                            loading="lazy"
                            alt=""
                          />
                          <div className="d-s-a-skill">
                            <div className="week-parent">
                              <div className="d-s-a-name">
                                <div className="empty-skill-overall">DSA</div>
                              </div>
                              <div className="d-s-a-stage">
                                <div className="day">3</div>
                              </div>
                              <div className="est-gmt">
                                <div className="on-going">On Going</div>
                              </div>
                              <div className="d-s-a-overall">
                                <div className="d-s-a">240</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="project-divider">
                        <div className="s-q-l-skill-details">
                          <img
                            className="c-details-child"
                            loading="lazy"
                            alt=""
                          />
                          <div className="s-q-l-skill-name">
                            <div className="week-parent">
                              <div className="s-q-l-name">
                                <div className="sql"> SQL</div>
                              </div>
                              <div className="s-q-l-stage">
                                <div className="day">2</div>
                              </div>
                              <div className="sun">
                                <div className="test-name">Completed</div>
                              </div>
                              <div className="s-q-l-overall">
                                <div className="d-s-a">240</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="end-wrapper">
                        <img className="frame-inner" loading="lazy" alt="" />
                      </div>
                    </div>
                    <div
                      className="more-details-container"
                      onClick={onFrameContainerClick1}
                    >
                      <div className="more-details">More Details</div>
                    </div>
                  </div>
                </div>
                <div className="training">
                  <div className="training-container">
                    <div className="full-stack-rank-wrapper">
                      <h3 className="placement-training-assessment">
                        Placement Training Assessment
                      </h3>
                    </div>
                    <div className="training-mark">
                      <div className="test-name-container">
                        <div className="test-name">Test Name</div>
                      </div>
                      <div className="training-name">Training Name</div>
                      <div className="mark">Mark</div>
                    </div>
                    <div className="training-list">
                      <div className="training-list-container">
                        <div className="training-item">
                          <div className="training-item-header">
                            <div className="career-growth">CAREER GROWTH</div>
                          </div>
                          <div className="level-completion-point">
                            2026_S2_MID TERM ASSESSMENT 1
                          </div>
                          <div className="level-completion-point">
                            2026_S2_MOCK INTERVIEW 1
                          </div>
                          <div className="level-completion-point">
                            2026_S2_MOCK INTERVIEW 2
                          </div>
                          <div className="training-item-header">
                            <div className="level-completion-point">
                              2026_S3_MOCK INTERVIEW 3
                            </div>
                          </div>
                        </div>
                        <div className="midterm-test">
                          <div className="midterm-test-container">
                            <div className="midterm-test-name">
                              <div className="growth-training">
                                GROWTH TRAINING
                              </div>
                            </div>
                            <div className="mock-interview">
                              <div className="mid-term-test">MID TERM TEST</div>
                              <div className="mock-interview-header">
                                <div className="mock-interview1">
                                  MOCK INTERVIEW
                                </div>
                                <div className="midterm-test-name">
                                  <div className="mock-interview1">
                                    MOCK INTERVIEW
                                  </div>
                                </div>
                                <div className="mock-interview1">
                                  MOCK INTERVIEW
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="frame-parent4">
                            <div className="wrapper3">
                              <div className="div3">83</div>
                            </div>
                            <div className="wrapper4">
                              <div className="div11">75</div>
                            </div>
                            <div className="wrapper3">
                              <div className="div3">84</div>
                            </div>
                            <div className="wrapper3">
                              <div className="div3">95</div>
                            </div>
                            <div className="wrapper7">
                              <div className="div14">86</div>
                            </div>
                            <div
                              className="more-details-wrapper1"
                              onClick={onFrameContainerClick}
                            >
                              <div className="more-details">More Details</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="github">
                    <div className="inner-stack">
                      <h3 className="git-hub">Git Hub</h3>
                    </div>
                    <div className="github-projects">
                      <div className="project-details">
                        <div className="name-parent">
                          <div className="project">Project</div>
                          <div className="metrics">
                            <div className="java">stars</div>
                          </div>
                          <div className="empty-skill-stage">
                            <div className="stack">Stack</div>
                          </div>
                          <div className="overall-point">Overall Point</div>
                        </div>
                        <img className="end-icon" loading="lazy" alt="" />
                      </div>
                      <div className="github-project-list">
                        <div className="github-project-item">
                          <div className="level-completion-point">
                            <a
                              className="contextual-chatbot"
                              href="https://github.com/naveenkumar-42/dashboard_forntend"
                              target="_blank"
                            >
                              <span className="dashboard-forntend2">
                                dashboard_forntend
                              </span>
                            </a>
                             
                          </div>
                          <div className="empty-project-names">
                            <div className="day">5</div>
                          </div>
                          <div className="project-stacks">
                            <div className="stack">MERN</div>
                          </div>
                          <div className="s-q-l-overall">
                            <div className="div1">100</div>
                          </div>
                        </div>
                      </div>
                      <div className="s-q-l-skill">
                        <img className="frame-inner" loading="lazy" alt="" />
                      </div>
                      <div className="github-project-list2">
                        <div className="event-parent">
                          <div className="event4">
                            <a
                              className="contextual-chatbot"
                              href="https://github.com/naveenkumar-42/Contextual_Chatbot"
                              target="_blank"
                            >
                              <span className="dashboard-forntend2">
                                Contextual_Chatbot
                              </span>
                            </a>
                             
                          </div>
                          <div className="event-container">
                            <div className="event5">9</div>
                          </div>
                          <div className="django-wrapper">
                            <div className="django">DJANGO</div>
                          </div>
                          <div className="s-q-l-overall">
                            <div className="div1">100</div>
                          </div>
                        </div>
                      </div>
                      <div className="github-project-list3">
                        <img className="frame-inner" loading="lazy" alt="" />
                      </div>
                      <div className="github-project-list4">
                        <div className="week-parent">
                          <a
                            className="bit-frontend"
                            href="https://github.com/naveenkumar-42/bit_frontend"
                            target="_blank"
                          >
                            bit_frontend
                          </a>
                          <div className="event-wrapper1">
                            <div className="event7">10</div>
                          </div>
                          <div className="htmlcssjs-wrapper">
                            <div className="more-details">HTML,CSS,JS</div>
                          </div>
                          <div className="event-wrapper2">
                            <div className="div1">100</div>
                          </div>
                        </div>
                      </div>
                      <div className="s-q-l-skill">
                        <img className="frame-inner" loading="lazy" alt="" />
                      </div>
                      <div className="project-title">
                        <div className="project-name">
                          <div className="student-dashboard1">
                            <a
                              className="contextual-chatbot"
                              href="https://github.com/naveenkumar-42/Training_performance_tacker"
                              target="_blank"
                            >
                              <span className="dashboard-forntend2">
                                Training Tracker
                              </span>
                            </a>
                             
                          </div>
                          <div className="project-type">
                            <div className="event5">6</div>
                          </div>
                          <div className="project-technology">
                            <div className="stack">Spring Boot</div>
                          </div>
                          <div className="event-wrapper2">
                            <div className="div14">100</div>
                          </div>
                        </div>
                      </div>
                      <div className="project-divider">
                        <img className="frame-inner" loading="lazy" alt="" />
                      </div>
                      <div className="github-project-list6">
                        <div className="week-parent">
                          <div className="it-web-wrapper">
                            <div className="sql">
                              <a
                                className="contextual-chatbot"
                                href="https://github.com/naveenkumar-42/iT_web"
                                target="_blank"
                              >
                                <span className="dashboard-forntend2">
                                  iT_web
                                </span>
                              </a>
                               
                            </div>
                          </div>
                          <div className="event-wrapper3">
                            <div className="event11">12</div>
                          </div>
                          <div className="react-wrapper">
                            <div className="react">REACT</div>
                          </div>
                          <div className="s-q-l-overall">
                            <div className="div1">100</div>
                          </div>
                        </div>
                      </div>
                      <div className="project-link">
                        <img className="frame-inner" loading="lazy" alt="" />
                      </div>
                      <div className="project-link-button">
                        <div
                          className="event13"
                          onClick={onEventContainerClick}
                        >
                          <div className="more-details">More Details</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="achievements-wrapper">
                  <div className="achievements">
                    <div className="achievement-list">
                      <h3 className="achivements">Achivements</h3>
                    </div>
                    <div className="calendar-base">
                      <div className="event-header">
                        <div className="event-name">Event Name</div>
                      </div>
                      <div className="submission-details">
                        <div className="category">Category</div>
                        <div className="report-proof">{`Report Proof `}</div>
                      </div>
                      <div className="mid-term-test">Guide Approval</div>
                    </div>
                    <div className="achievements-content">
                      <div className="achievement-rows">
                        <div className="first-achievement">
                          <div className="hackathon-details">
                            <div className="hackathon-name">
                              <div className="training-item-header">
                                <div className="level-completion-point">
                                  DARK PATTERNS BUSTER HACKATHON - 2024
                                </div>
                              </div>
                              <div className="crackthon-20">CRACKTHON 2.0</div>
                              <div className="bit-hack23">BIT HACK’23</div>
                              <div className="smock-interview">
                                <div className="smock-interview-container">
                                  <div className="smock-interview-title">
                                    <div className="sql">
                                      2026_S2_MOCK INTERVIEW 2
                                    </div>
                                  </div>
                                  <div className="mock-interview4">
                                    MOCK INTERVIEW
                                  </div>
                                </div>
                                <div className="smock-interview-two">
                                  <div className="s3-mock-interview-31">
                                    2026_S3_MOCK INTERVIEW 3
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="categories">
                              <div className="software">SOFTWARE</div>
                              <div className="software">SOFTWARE</div>
                              <div className="hardware">HARDWARE</div>
                              <div className="category1">
                                <div className="s3-mock-interview-31">95</div>
                              </div>
                              <div className="category2">
                                <div className="s3-mock-interview-31">86</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="itstr-details-parent">
                          <div className="s-q-l-overall">
                            <div className="itstr-name">
                              <div className="level-completion-point">
                                7376222IT210-STR-20.08.2024
                              </div>
                              <div className="level-completion-point">
                                7376222IT210-STR-20.08.2024
                              </div>
                              <div className="level-completion-point">
                                7376222IT210-STR-20.08.2024
                              </div>
                            </div>
                          </div>
                          <div className="status1">
                            <div className="icon-button">
                              <div className="test-name">APPROVED</div>
                            </div>
                            <div className="button">
                              <div className="regected">REGECTED</div>
                            </div>
                            <div className="icon-button">
                              <div className="test-name">APPROVED</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Details;
