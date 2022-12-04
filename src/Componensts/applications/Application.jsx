import React from "react";
import "./application.scss";


import TableViewIcon from "@mui/icons-material/TableView";
const Application = () => {
  return (
    <>
      <div className="application_container">
        <div className="application_topbar">
          <div className="add">
            <span>
              <TableViewIcon />
            </span>
          </div>
          <div className="application_items">
            <ul>
              <li>RATING</li>
              <li>APPLICATION NAME</li>
              <li>HIRING PIPLINE</li>
              <li>APPLICATION STATUS</li>
              <li>APPLICATION ID</li>
              <li>POSTING TILE</li>
            </ul>
          </div>
          {/* <div className="border"></div> */}
        </div>
        <div className="border"></div>

        <div className="content">
          <span>No Application Found</span>

          <div className="button">
            <button> 10 Record per page</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
