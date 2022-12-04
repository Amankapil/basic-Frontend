import React from "react";
import "./sidebar.scss";
import SearchIcon from "@mui/icons-material/Search";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_width">
          <div className="upper_head">
            <span>FILLTERED APPLICATIOSN BY</span>
            <span>
              <SearchIcon />
            </span>
          </div>
          <div className="category">
            <div className="upper_select">
              <ul>
                <li>
                  <input type="checkbox" />
                  <span>Posting Titel</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Application Status</span>
                </li>
              </ul>
            </div>
            <div className="bottum_select">
              <ul>
                <li>
                  <input type="checkbox" />
                  <span>TO Dos</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Notes </span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Attachments Category</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span> Rating </span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span> Last Name</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Hiring Pipeline</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Application Id</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Account Manager</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Application Owner</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Application Source</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Assingn Recruiter</span>
                </li>
                <li>
                  <input type="checkbox" />
                  <span>Associated Tags</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
