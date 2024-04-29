import React from "react";
import { NavLink, useNavigate } from "react-router-dom"; // ใช้ Link แทน a

import "./style/Navbar.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

function Navbar() {
  let navigate = useNavigate();
  return (
    <>
      <nav>
        <div className="container">
          <aside>
            {/* <div class="top">
          <img
            loading="lazy"
            src={images["icon_admin.png"]}
            className="icon_admin"
            alt="Admin Icon"
          />
          <h2> Hi, Admin ! </h2>
        </div> */}

            <div className="sidebar">
              <span>
                <img
                  loading="lazy"
                  src={images["icon_admin.png"]}
                  className="icon_admin"
                  alt="Admin Icon"
                />
                <h2> Hi, Admin ! </h2>
                <br></br>
                <br></br>
              </span>

              <div className="nav-bar">
                <img
                  loading="lazy"
                  src={images["icon_dashboard.png"]}
                  className="icon_dashboard"
                  alt="Dashboard Icon"
                />
                <h3> Form </h3>
              </div>

              <div className="nav-bar">
                {/* <NavLink to="/adminTrack"> */}
                <img
                  loading="lazy"
                  src={images["icon_approve.png"]}
                  className="icon_approve"
                  alt="Approve Icon"
                />
                <h3> Approve </h3>
                {/* </NavLink> */}
              </div>

              <div className="nav-bar" onClick={() => navigate("/adminTrack")}>
                <img
                  loading="lazy"
                  src={images["icon_tracking.png"]}
                  className="icon_tracking"
                  alt="Tracking Icon"
                />
                <h3> Tracking </h3>
              </div>

              <div className="nav-bar">
                <img
                  loading="lazy"
                  src={images["icon_history.png"]}
                  className="icon_history"
                  alt="History Icon"
                />
                <h3> History </h3>
              </div>

              <div className="nav-bar" onClick={() => navigate("/ManagePermission")}>
                <img
                  // loading="lazy"
                  src={images["icon_permission.png"]}
                  className="icon_permission"
                  alt="Permission Icon"
                />
                <h3> Permission </h3>
              </div>

              <div className="nav-bar" onClick={() => navigate("/stuTrack")}>
                <img
                  loading="lazy"
                  src={images["icon_logout_white.png"]}
                  className="icon_logout"
                  alt="Logout Icon"
                />
                <h3> Logout </h3>
              </div>
            </div>
          </aside>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
