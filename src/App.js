import React from 'react';
import './style/App.css';
import Navbar from "./Navbar";
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from "react-router-dom";


import StudentTracking from "./trackingStudent";
import AdminTracking from "./trackingAdmin";
// import SearchBar from "./searchbar";
// import Notifications from "./notifications";
import ManagePermission from './ManagePermission';
import FormInterface from './FormInterface';


function App() {
  return (
    <div className="app">
    <Router>
      <div className="content-wrapper" style={{display: 'flex', justifyContent: 'space-between'}}>
        {/* <Navbar /> */}
        <main className="main-content" style={{ flexGrow: '1' }}>
          <Routes>
            <Route path="/stuTrack" element={<FormInterface />} />
            <Route path="/adminTrack" element={<AdminTracking />} />
            <Route path="/ManagePermission" element={<ManagePermission />} />
            {/* Define other routes that you need*/}
          </Routes>
        </main>
      </div>
    </Router>
  </div>
  );
}

export default App;
