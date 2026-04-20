import React, { useState } from "react";
import { FriendContext } from "./FriendContext";

const FriendContextProvider = ({ children }) => {
  const [friendsTimeline, setFriendsTimeline] = useState([]);

  const data = {
    friendsTimeline,
    setFriendsTimeline,
  };

  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendContextProvider;
