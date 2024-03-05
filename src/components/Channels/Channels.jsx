import React from "react";
import "./Channels.css";

function Channels({ id, channel }) {
  return (
    <div className="channels">
      <h4>
        <span className="channel-hash">#</span>
        {channel}
      </h4>
    </div>
  );
}

export default Channels;
