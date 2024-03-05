import React, { useEffect, useState } from "react";
import "./Chat.css";
import ChatHeader from "../ChatHeader/ChatHeader";

//
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Message from "../Message/Message";

//
import { useSelector } from "react-redux";

// fire
import { auth, firestore as db, signOut } from "../../firebase/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  orderBy,
  addDoc,
  doc,
} from "firebase/firestore";
// import { serverTimestamp } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

function Chat() {
  const user = useSelector((state) => state.user.user);
  const channelName = useSelector((state) => state.app.channelName);
  const channelID = useSelector((state) => state.app.channelID);

  //
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelID) {
      const messagesCollection = collection(
        db,
        "channels",
        channelID,
        "messages"
      );
      const q = query(messagesCollection, orderBy("timestamp", "asc"));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      });

      return () => unsubscribe();
    }
  }, [channelID]);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (channelID && input.trim()) {
      const messagesCollection = collection(
        db,
        "channels",
        channelID,
        "messages"
      );
      await addDoc(messagesCollection, {
        timestamp: serverTimestamp(),
        message: input,
        user: user.displayName ?? "Anonymous", // Provide a default name if not found
        userImage: user.photo, // Provide a default URL if not found
      });

      setInput("");
    }
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chat-messages">
        {messages.map((m) => (
          <Message
            message={m.message}
            timestamp={m.timestamp}
            user={m.user}
            userImage={m.userImage}
            key={m.id}
          />
        ))}
      </div>

      <div className="chat-input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            placeholder={`Message #${channelName}`}
            value={input}
            disabled={!channelID}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            className="chat-input-btn"
            type="submit"
            onClick={sendMessage}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
