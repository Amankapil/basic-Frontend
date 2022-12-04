import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";

import LinearScaleIcon from "@mui/icons-material/LinearScale";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PanoramaIcon from "@mui/icons-material/Panorama";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar_width">
          <div className="items">
            <span className="hamburger">
              <MenuIcon />
            </span>
            <ul>
              <li>Home</li>
              <li>
                Job Openings
                {/* <span> */}
                <ArrowDropDownIcon />
                {/* </span> */}
              </li>
              <li>
                Candidates
                {/* <span> */}
                <ArrowDropDownIcon />
                {/* </span> */}
              </li>
              <li>Ineterviews</li>
              <li>Clients</li>
              <li>Contacts</li>
              <li>Campaigns</li>
              <li>
                <MoreHorizIcon />
              </li>
            </ul>
          </div>
          <div className="left_icon">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <RocketLaunchIcon />
              </li>
              <li>
                <VolumeDownIcon />
              </li>
              <li>
                <NotificationsActiveIcon />
              </li>
              <li>
                <MarkUnreadChatAltIcon />
              </li>
              <li>
                <CalendarMonthIcon />
              </li>
              <li>
                <SettingsIcon />
              </li>
              <li>
                <PanoramaIcon />
              </li>
              {/* <li><img src="" alt="" /></li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
