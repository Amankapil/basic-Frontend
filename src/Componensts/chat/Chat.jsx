import React from "react";
import PhonelinkIcon from "@mui/icons-material/Phonelink";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import "./chat.scss";

import HelpIcon from "@mui/icons-material/Help";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

import SearchIcon from "@mui/icons-material/Search";

import ChatIcon from "@mui/icons-material/Chat";
import PeopleIcon from "@mui/icons-material/People";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Chat = () => {
  return (
    <>
      <div className="chat_container">
        <div className="chanel">
          <span>
            <ChatIcon />
            chat
          </span>
          <span>
            <PeopleIcon />
            channel
          </span>
          <span>
            <AccountBoxIcon />
            Contacts
          </span>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="Here is your Smart Chat (Ctrl + Space)"
          />
        </div>
        <div className="help_section">
          <ul>
            <li>
              <PhonelinkIcon />
            </li>
            <li>
              <AvTimerIcon />
            </li>
            <li>
              {" "}
              <HelpIcon />
              <span> Help</span>
            </li>
            <li>
              {" "}
              <TextSnippetIcon />
            </li>
            <li>
              <SearchIcon />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Chat;
