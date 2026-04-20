import React, { useEffect, useState } from "react";

const useFriendsData = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();

      // setTimeout(() => {
      //   setFriends(data);
      //   setLoading(false);
      // }, 3000);

      setFriends(data);
      setLoading(false);
    };
    fetchFriends();
  }, []);

  return { friends, loading };
};

export default useFriendsData;
