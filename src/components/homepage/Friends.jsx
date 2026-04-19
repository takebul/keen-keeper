import React from "react";
import useFriendsData from "../../hook/useFriendsData";
import { Link } from "react-router";

const Friends = () => {
  const { friends, loading } = useFriendsData();

  if (loading) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto pt-10 pb-7 border-t border-gray-300">
      <h2 className="text-2xl font-semibold pb-4">Your Friends</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map((friend) => {
          return (
            <Link
              to={"/details"}
              className="p-8 bg-white rounded-md justify-items-center space-y-2.5 shadow text-center"
            >
              <img
                className="w-20 h-20 rounded-full object-cover"
                src={friend.picture}
                alt={friend.name}
              />
              <h4 className="text-xl font-semibold">{friend.name}</h4>
              <p>{friend.days_since_contact}d ago </p>
              <p className="bg-green-200 px-3 py-1 rounded-full uppercase text-sm">
                {friend.tags.find((tag) => {
                  return <p>{tag}</p>;
                })}
              </p>
              <p
                className={` text-white rounded-full px-2.5 py-1" ${friend.status === "overdue" ? "bg-red-500" : friend.status === "on-track" ? "bg-gray-600" : "bg-yellow-500"}`}
              >
                {friend.status}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
