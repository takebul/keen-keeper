import React from "react";
import useFriendsData from "../../hook/useFriendsData";

const Stat = () => {
  const { friends } = useFriendsData();

  const overdue = friends.filter((friend) => friend.status === "overdue");
  const onTrack = friends.filter((friend) => friend.status === "on-track");
  const almostDue = friends.filter((friend) => friend.status === "almost due");

  return (
    <div className="w-11/12 mx-auto pb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-white p-10 text-center space-y-2 rounded-md shadow">
        <h2 className="text-3xl font-semibold">{friends.length} </h2>
        <p className="text-gray-600">Total Friends</p>
      </div>
      <div className="bg-white p-10 text-center space-y-2 rounded-md shadow">
        <h2 className="text-3xl font-semibold">{onTrack.length}</h2>
        <p className="text-gray-600">On Track</p>
      </div>
      <div className="bg-white p-10 text-center space-y-2 rounded-md shadow">
        <h2 className="text-3xl font-semibold">{overdue.length}</h2>
        <p className="text-gray-600">Need Attention</p>
      </div>
      <div className="bg-white p-10 text-center space-y-2 rounded-md shadow">
        <h2 className="text-3xl font-semibold">{almostDue.length}</h2>
        <p className="text-gray-600">Interactions This Month</p>
      </div>
    </div>
  );
};

export default Stat;
