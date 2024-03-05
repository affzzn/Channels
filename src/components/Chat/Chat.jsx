import React from "react";
import "./Chat.css";
import ChatHeader from "../ChatHeader/ChatHeader";

//
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Message from "../Message/Message";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />

      <div className="chat-messages">
        <Message />
        <Message />
        <Message />
      </div>

      <div className="chat-input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input placeholder={`Message #TESTCHANNEL`} />
          <button className="chat-input-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
