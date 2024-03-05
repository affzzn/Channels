import React from "react";
import "./Sidebar.css";
import Channels from "../Channels/Channels";

//
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import { Avatar } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h3>Chatz</h3>
        <ArrowDropDownIcon />
      </div>
      <div className="sidebar-channels">
        <div className="sidebar-channels-header">
          <div className="sidebar-add-channel">
            <h4>Add Channel</h4>
            <AddIcon />
          </div>
        </div>
        <div className="sidebar-channels-list">
          <Channels />
          <Channels />
          <Channels />
          <Channels />
        </div>
      </div>
      <div className="sidebar-profile">
        <Avatar />
        <div className="sidebar-profile-info">
          <h3>@affzzn</h3>
          <p>#thisismyid</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
