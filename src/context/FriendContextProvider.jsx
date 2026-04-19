import React, { useState } from "react";
import { FriendContext } from "./FriendContext";

const FriendContextProvider = ({ children }) => {
  const [friendsDetails, setFriendsDetails] = useState([]);

  const data = {
    friends: friendsDetails,
    setFriendsDetails,
  };

  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendContextProvider;
