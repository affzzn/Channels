import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import Channels from "../Channels/Channels";

//
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AddIcon from "@mui/icons-material/Add";
import { Avatar } from "@mui/material";

//
import { useSelector } from "react-redux";

//
// import db, { auth, signOut } from "../../firebase/firebase";
import { auth, signOut } from "../../firebase/firebase";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

function Sidebar() {
  const user = useSelector((state) => state.user.user);
  console.log(user);

  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const db = getFirestore(); // Use getFirestore to get the Firestore instance
    const unsubscribe = onSnapshot(collection(db, "channels"), (snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      );
    });

    return () => {
      // Unsubscribe from the snapshot listener when the component unmounts
      unsubscribe();
    };
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");

    const db = getFirestore();
    const channelsCollection = collection(db, "channels");

    if (channelName) {
      // Add a new document with a generated id.
      addDoc(channelsCollection, {
        channelName: channelName,
      });
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h3>Channels</h3>
        <ArrowDropDownIcon />
      </div>
      <div className="sidebar-channels">
        <div className="sidebar-channels-header">
          <div className="sidebar-add-channel">
            <h4>Add Channel</h4>
            <AddIcon onClick={handleAddChannel} />
          </div>
        </div>
        <div className="sidebar-channels-list">
          {channels.map((channel) => (
            <Channels
              id={channel.id}
              channel={channel.channel.channelName}
              key={channel.id}
            />
          ))}
        </div>
      </div>
      <div className="sidebar-profile">
        <Avatar
          alt={user.displayName}
          src={user.photo}
          onClick={() => signOut(auth)}
        />
        <div className="sidebar-profile-info">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.slice(0, 5)}</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
