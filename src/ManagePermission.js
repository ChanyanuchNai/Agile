import "./style/ManagePermission.css";
import { useState } from "react";

// import AdminTable from './AdminTable';
import Navbar from "./Navbar";
import SearchBar from "./searchbar";

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

function ManagePermission() {
  return (
    <div className="container">
      <Navbar />

      <div class="div">
        <div class="div-2">Admin Permission</div>
        <br></br>
        <br></br>
        <div class="div3">
          <SearchBar />
        </div>

        <div class="div-6">
          <div class="div-7" style={{fontSize:'14px', paddingTop:'7px'}}>
            You can switch button bettwen Allow editing or Not allowing editing
          </div>
          <div class="div-8">
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
        </div>
        <br></br>

        <div className="table-container">
          <div className="table-header">
            <div>ID</div>
            <div>NAME-SURNAME</div>
            <div>Role</div>
            <div>Owner</div>
            <div>Form</div>
          </div>
          <div className="table">
            {data.map((item, index) => (
              <div key={index} className="table-row">
                <div>{item.id}</div>
                <div>{item.name}</div>
                <div>{item.role}</div>
                <div>
                  <input type="checkbox">{item.owner}</input>
                </div>
                <div>
                  <input type="checkbox">{item.form}</input>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <AdminTable/> */}
      </div>
    </div>
  );
}

const data = [
  {
    id: "001",
    name: "PIMNARA PANYALERDSATTHA",
    role: "General Form",
    date: "26/3/2024",
    status: "request",
  },
  {
    id: "002",
    name: "CHANYANUCH NUANGJUMNONG",
    role: "In-Class Absence",
    date: "26/3/2024",
    status: "request",
  },
  {
    id: "003",
    name: "KANCHANOK KAEWMOLA",
    role: "Group change Form",
    date: "26/3/2024",
    status: "approve",
  },
  {
    id: "004",
    name: "RAVIPITCH LAOSAENGCHAIYAWAT",
    role: "Examination Review Form",
    date: "26/3/2024",
    status: "history",
  },
  {
    id: "005",
    name: "JIRAPAT SUWANLAMAI",
    role: "Borrowing Equipment Form",
    date: "26/3/2024",
    status: "history",
  },
  {
    id: "006",
    name: "PONGSATORN ARUNRAT",
    role: "Make Up Examination Form",
    date: "26/3/2024",
    status: "history",
  },
];

export default ManagePermission;
