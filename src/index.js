// index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import SearchBar from "./searchbar";
import Tracking from "./trackingAdmin";
import ManagePermission from "./ManagePermission";
import Navbar from "./Navbar";
import FormInterface from "./FormInterface";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <React.StrictMode>

        <App />
        {/* <Navbar/> */}
        {/* <SearchBar /> */}
        {/* <Tracking/> */}
        {/* <ManagePermission/> */}
        {/* <FormInterface/> */}

    </React.StrictMode>
);
