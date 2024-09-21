import { useCallback } from "react";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const Admin = () => {
  const navigate = useNavigate();

  const onSelectionClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="admin">
      <main className="image">
        <FrameComponent />
        <div className="image-child" />
        <section className="students-header-wrapper">
          <div className="students-header">
            <div className="e-c-department">
              <div className="table-row">
                <header className="search-bar">
                  <div className="table-header-item">
                    <a className="students">Students</a>
                  </div>
                  <div className="ellipse-parent">
                    <div className="frame-child" />
                    <img
                      className="moon-symbol-icon"
                      loading="lazy"
                      alt=""
                      src="/moon-symbol@2x.png"
                    />
                  </div>
                </header>
              </div>
              <div className="search-container">
                <div className="search-row">
                  <div className="c-wrapper">
                    <div className="c">
                      <span className="span">{`               `}</span>
                      <span className="c1">C</span>
                    </div>
                  </div>
                  <img className="search-icon" alt="" src="/search@2x.png" />
                </div>
              </div>
            </div>
            <div className="students-list">
              <div className="table-header-cell">
                <div className="list-header-row">
                  <div className="c-s-student-row">
                    <div className="table-header-row">
                      <div className="e-c-student-item">
                        <div className="select-all-toggle" />
                      </div>
                      <div className="select-all">Select all</div>
                    </div>
                    <div className="filter-wrapper">
                      <img
                        className="filter-icon"
                        loading="lazy"
                        alt=""
                        src="/filter@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="student-record">
                  <div className="record-fields">
                    <div className="e-c-department-row">
                      <img
                        className="e-c-department-row-child"
                        loading="lazy"
                        alt=""
                        src="/line-1.svg"
                      />
                      <div className="b-t-department">
                        <div className="e-c-department-item">
                          <div className="c-s-student-details">
                            <div className="roll-no">Roll no</div>
                          </div>
                          <div className="name-label">
                            <div className="name">Name</div>
                          </div>
                          <div className="c-s-student-cell">
                            <div className="levels">Levels</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="e-c-department-row-child"
                      loading="lazy"
                      alt=""
                      src="/line-2.svg"
                    />
                    <div className="a-g-student-row-wrapper">
                      <div className="a-g-student-row">
                        <div className="c-s-student-content">
                          <div className="e-c-department-value">
                            <div className="e-c-student-item">
                              <div
                                className="selection"
                                onClick={onSelectionClick}
                              />
                            </div>
                            <div
                              className="naveen-kumar-p"
                              onClick={onSelectionClick}
                            >
                              7376222IT210
                            </div>
                          </div>
                          <div
                            className="naveen-kumar-p"
                            onClick={onSelectionClick}
                          >
                            Naveen Kumar P
                          </div>
                        </div>
                        <div className="placeholder" onClick={onSelectionClick}>
                          
                          7
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="student-row">
                    <img
                      className="e-c-department-row-child"
                      loading="lazy"
                      alt=""
                      src="/line-1.svg"
                    />
                    <div className="filter-item">
                      <div className="e-c-department-cell-parent">
                        <div className="e-c-department-cell">
                          <div className="e-c-department-details">
                            <div className="selection-icon" />
                            <div className="aravind-chidambaram-r">
                              7376221EC113
                            </div>
                          </div>
                        </div>
                        <div className="aravind-chidambaram-r-wrapper">
                          <div className="aravind-chidambaram-r">
                            Aravind Chidambaram R
                          </div>
                        </div>
                        <div className="placeholder-name">7</div>
                      </div>
                    </div>
                    <img
                      className="e-c-department-row-child"
                      loading="lazy"
                      alt=""
                      src="/line-2.svg"
                    />
                    <div className="filter-item">
                      <div className="a-g-student-row">
                        <div className="frame-parent">
                          <div className="frame-wrapper">
                            <div className="e-c-department-details">
                              <div className="c-s-student-cell">
                                <div className="select-all-toggle" />
                              </div>
                              <div className="aravind-chidambaram-r">
                                7376221CS262
                              </div>
                            </div>
                          </div>
                          <div className="aravind-chidambaram-r">
                            Prasanna Kumar M
                          </div>
                        </div>
                        <div className="c-s-student-cell">
                          <div className="c-s-department">6</div>
                        </div>
                      </div>
                    </div>
                    <div className="row-components">
                      <img
                        className="e-c-department-row-child"
                        loading="lazy"
                        alt=""
                        src="/line-1.svg"
                      />
                      <div className="filter-item">
                        <div className="a-g-student-row">
                          <div className="a-g-student-item">
                            <div className="c-s-student">
                              <div className="e-c-department-details">
                                <div className="selection-icon" />
                                <div className="c-s-student-cell">
                                  <div className="aravind-chidambaram-r">
                                    7376221EC196
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="aravind-chidambaram-r">{`Kavibharathi M S `}</div>
                          </div>
                          <div className="a-g-student">
                            <div className="placeholder-item">5</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="e-c-department-row-child"
                      loading="lazy"
                      alt=""
                      src="/line-2.svg"
                    />
                    <div className="row-components-inner">
                      <div className="a-g-student-row">
                        <div className="filter-row">
                          <div className="table">
                            <div className="filter-container">
                              <div className="select-all-toggle" />
                            </div>
                            <div className="aravind-chidambaram-r">
                              7376221AG106
                            </div>
                          </div>
                          <div className="harish-r">Harish R</div>
                        </div>
                        <div className="placeholder-item">5</div>
                      </div>
                    </div>
                    <div className="row-components1">
                      <img
                        className="e-c-department-row-child"
                        loading="lazy"
                        alt=""
                        src="/line-1.svg"
                      />
                      <div className="row-components-inner">
                        <div className="a-g-student-row">
                          <div className="filter-content">
                            <div className="student-details">
                              <div className="e-c-department-details">
                                <div className="selection-icon" />
                                <div className="aravind-chidambaram-r">
                                  7376221BT167
                                </div>
                              </div>
                            </div>
                            <div className="aravind-chidambaram-r">
                              Selvahareesh K
                            </div>
                          </div>
                          <div className="wrapper">
                            <div className="placeholder-item">4</div>
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

export default Admin;
