import React from "react";
import "./header.scss";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import PrintIcon from "@mui/icons-material/Print";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="right_app">
          <div className="applications">
            <span>
              <InsertDriveFileIcon />
            </span>
            APPLICATIOSN
          </div>
          <div className="all_application">
            All Applications
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className="right">
          <div className="options">
            <button className="btn">
              <AddIcon />
            </button>
            <button className="btn">
              <MoreHorizIcon />
            </button>
          </div>
          <div className="options">
            <button className="btn">
              <CalendarViewMonthIcon />
            </button>
            <button className="btn">
              <PrintIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
