import React from "react";
import "./style/styles2.css";

import Navbar from "./Navbar";
import SearchBar from "./searchbar";

const Tracking = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <main>
          <div class="div2"> Tracking </div> 
          <br></br>
          <SearchBar />
          <br></br>
          <div className="table-container">
            <div className="table-header">
              <div>TYPE OF DOCUMENT</div>
              <div>NAME-SURNAME</div>
              <div>ID</div>
              <div>BRANCH</div>
              <div>DATE</div>
              <div>STATUS</div>
              <div>ACTION</div>
            </div>
            <div className="table">
              {data.map((item, index) => (
                <div key={index} className="table-row">
                  <div>{item.type}</div>
                  <div>{item.name}</div>
                  <div>{item.id}</div>
                  <div>{item.branch}</div>
                  <div>{item.date}</div>
                  <div>
                    {item.status === "request" ? (
                      <button type="button" className="request">
                        Request
                      </button>
                    ) : item.status === "approve" ? (
                      <button type="button" className="approve">
                        Approve
                      </button>
                    ) : (
                      <button type="button" className="history">
                        Success
                      </button>
                    )}
                  </div>
                  <div>
                    <button type="button" className="tracking">
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const data = [
  {
    type: "General Request",
    name: "Pimnara Panyalerdsattha",
    id: "6487085",
    branch: "DST",
    date: "26/3/2024",
    status: "request",
  },
  {
    type: "General Request",
    name: "Name Sumame",
    id: "6587001",
    branch: "DST",
    date: "26/3/2024",
    status: "request",
  },
  {
    type: "General Request",
    name: "Name Sumame",
    id: "6587001",
    branch: "DST",
    date: "26/3/2024",
    status: "approve",
  },
  {
    type: "General Request",
    name: "Name Sumame",
    id: "6587001",
    branch: "DST",
    date: "26/3/2024",
    status: "history",
  },
  {
    type: "General Request",
    name: "Name Sumame",
    id: "6587001",
    branch: "DST",
    date: "26/3/2024",
    status: "history",
  },
];

export default Tracking;
