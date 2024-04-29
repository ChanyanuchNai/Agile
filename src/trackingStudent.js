import React from 'react';
import './style/styles.css';
// import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';

const trackingStudent = () => {
  return (
    <div>
      <nav className="my-navbar">
        <div className="container">
          <div className="logo">
            <a href="#">
              <img src="1111.png" alt="Logo" />
            </a>
          </div>
          <div className="nav-items">
            <a href="#" className="nav-item">
              Home
            </a>
            <a href="#" className="nav-item">
              History
            </a>
            <a href="#" className="nav-item">
              Tracking
            </a>
          </div>
        </div>
      </nav>
      <main>
        <div className="container2">
          <div className="row">
            <div className="col-xs-8 col-xs-offset-2">
              <div className="input-group">
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">
                    <span className="glyphicon glyphicon-search" />
                  </button>
                </span>
                <input
                  type="hidden"
                  name="search_param"
                  value="all"
                  id="search_param"
                />
                <input
                  type="text"
                  className="form-control"
                  name="x"
                  id="search"
                  placeholder="Search"
                />
                <div className="input-group-btn search-panel">
                  <button
                    type="button"
                    className="btn btn-default dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <span id="search_concept">All</span> <span className="caret" />
                  </button>
                  <ul className="dropdown-menu scrollable-dropdown" role="menu">
                    <li>
                      <a href="#">Request for Examination Review</a>
                    </li>
                    <li>
                      <a href="#">Request form for Borrowing ICT's Equipment</a>
                    </li>
                    <li>
                      <a href="#">Request for Make Up Examination Form</a>
                    </li>
                    <li>
                      <a href="#">General Request Form</a>
                    </li>
                    <li>
                      <a href="#">Request for in-Class Absence form</a>
                    </li>
                    <li>
                      <a href="#">
                        Section / English Group Changing / Inform Schedule'
                        Request Form
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-container">
          <div className="form-header">
            <div className="field-label general-form-text">
              Request for Examination Review
            </div>
            <div className="field-label2 submitted-at-text">
              Submitted at: 20/3/67
            </div>
            <div className="container3">
              <div className="step-1" id="checkout-progress" data-current-step="1">
                <div className="progress-bar">
                  <div className="step step-1 active">
                    <span> 1</span>
                    <div className="fa fa-check opaque" />
                    <div className="step-label">Request</div>
                  </div>
                  <div className="step step-2">
                    <span> 2</span>
                    <div className="fa fa-check opaque" />
                    <div className="step-label">Pending</div>
                  </div>
                  <div className="step step-3">
                    <span> 3</span>
                    <div className="fa fa-check opaque" />
                    <div className="step-label">Completed</div>
                  </div>
                  <div className="step step-4">
                    <span> 4</span>
                    <div className="fa fa-check opaque" />
                    <div className="step-label">Approve</div>
                  </div>
                  <div className="step step-5">
                    <span> 5</span>
                    <div className="fa fa-check opaque" />
                    <div className="step-label">Success</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-details">
              <div className="field-label1">
                Expected date of receipt the form: 23/3/67
              </div>
              {/* <div className="download-button">Cancel</div> */}
            </div>
            <div className="button-container">
              <div className="btn btn-Cancel">Cancel</div>
              <div className="btn btn-download" style={{ display: 'none' }}>
                Download
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default trackingStudent;