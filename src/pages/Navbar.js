import React from 'react';
// import Navbar from './Navbar';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

function Navbar() {
  return (
    <div className="nav">
      <div className="div_admin">
        <img
          loading="lazy"
          src={images['icon_admin.png']}
          className="icon_admin"
          alt="Admin Icon"
        />
        <div className="title_welcome">Hi, Admin !</div>
      </div>
      <div className="div_dashboard">
        <img
          loading="lazy"
          src={images['icon_dashboard.png']}
          className="icon_dashboard"
          alt="Dashboard Icon"
        />
        <div className="dashboard"><a href="#">Dashboard</a></div>
      </div>
      <div className="div_approve">
        <img
          loading="lazy"
          src={images['icon_approve.png']}
          className="icon_approve"
          alt="Approve Icon"
        />
        <div className="approve"><a href="#">Approve</a></div>
      </div>
      <div className="div_tracking">
        <img
          loading="lazy"
          src={images['icon_tracking.png']}
          className="icon_tracking"
          alt="Tracking Icon"
        />
        <div className="tracking"><a href="#">Tracking</a></div>
      </div>
      <div className="div_history">
        <img
          loading="lazy"
          src={images['icon_history.png']}
          className="icon_history"
          alt="History Icon"
        />
        <div className="tab_history"><a href="#">History</a></div>
      </div>
      <div className="div_permission">
        <img
          loading="lazy"
          src={images['icon_permission.png']}
          className="icon_permission"
          alt="Permission Icon"
        />
        <div className="tab_permission"><a href="#">Permission</a></div>
      </div>
      <div className="div_logout">
        <img
          loading="lazy"
          src={images['icon_logout.png']}
          className="icon_logout"
          alt="Logout Icon"
        />
        <div className="logout"><a href="#">Logout</a></div>
      </div>
    </div>
  );
}

export default Navbar;
