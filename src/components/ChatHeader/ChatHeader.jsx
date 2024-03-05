import React from "react";
import "./ChatHeader.css";

function ChatHeader() {
  return (
    <div className="chat-header">
      <div className="chat-header-left">
        <h3>
          <span className="chat-header-hash">#</span>
          Xbox
        </h3>
      </div>
    </div>
  );
}

export default ChatHeader;
