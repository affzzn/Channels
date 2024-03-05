import React from "react";
import "./Channels.css";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "../../store/slices/appSlice";

function Channels({ id, channel }) {
  const dispatch = useDispatch();

  const handleChannel = () => {
    dispatch(
      setChannelInfo({
        channelID: id,
        channelName: channel,
      })
    );
  };

  return (
    <div className="channels" onClick={handleChannel}>
      <h4>
        <span className="channel-hash">#</span>
        {channel}
      </h4>
    </div>
  );
}

export default Channels;
