import React from "react";
import "./Message.css";
import { Avatar } from "@mui/material";

function Message({ message, timestamp, user, userImage }) {
  return (
    <div className="message">
      <Avatar src={userImage} alt={user} />
      <div className="message-info">
        <h4>
          {user}
          <span className="message-timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
