import React from "react";
import "./Message.css";
import { Avatar } from "@mui/material";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message-info">
        <h4>
          affzzn
          <span className="message-timestamp">This is a timestamp</span>
        </h4>
        <p>This is a message</p>
      </div>
    </div>
  );
}

export default Message;
