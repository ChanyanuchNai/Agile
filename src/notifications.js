import React from 'react';
import './style/App.css';

function Notifications() {
  return (
    <div className='body'>
      <details>
        <summary></summary>
        <nav className="menu">
          <div className="noti-head">Notifications (3)</div>
          <a href="#link">
            <div className="noti-box">
              <div className="noti-word">G</div>
              <div className="line"></div>
              <div className="noti-detail">
                <span>New submitted </span>
                <span className="noti-detail-colour">General form</span><br />
                <span>6487019 Jirapat Suwanlamai</span><br />
                <span className="time">5 minute ago</span>
              </div>
            </div>
          </a>
          <a href="#link">
            <div className="noti-box">
              <div className="noti-word">G</div>
              <div className="line"></div>
              <div className="noti-detail">
                <span>New submitted </span>
                <span className="noti-detail-colour">General form</span><br />
                <span>6487019 Jirapat Suwanlamai</span><br />
                <span className="time">5 minute ago</span>
              </div>
            </div>
          </a>
          <a href="#link">
            <div className="noti-box">
              <div className="noti-word">E</div>
              <div className="line"></div>
              <div className="noti-detail">
                <span>New submitted </span>
                <span className="noti-detail-colour">Examination Review form</span><br />
                <span>6487019 Jirapat Suwanlamai</span><br />
                <span className="time">5 minute ago</span>
              </div>
            </div>
          </a>
        </nav>
      </details>
    </div>
  );
}

export default Notifications;