import React, { useContext, useEffect, useState } from "react";
import { FriendContext } from "../../context/FriendContext";
import call from "../../assets/call.png";
import video from "../../assets/video.png";
import text from "../../assets/text.png";

const Timeline = () => {
  const { friendsTimeline } = useContext(FriendContext);

  const [sort, setSort] = useState("");

  const [sortFilter, setSortFilter] = useState(friendsTimeline);

  useEffect(() => {
    if (sort) {
      if (sort === "goal") {
        const sortData = [...friendsTimeline].sort((a, b) => a.goal - b.goal);
        setSortFilter(sortData);
      } else if (sort === "id") {
        const sortData = [...friendsTimeline].sort((a, b) => a.id - b.id);
        setSortFilter(sortData);
      }
    }
  }, [sort, friendsTimeline]);

  // const handleCallFilterOption = friendsTimeline.filter(
  //   (friend) => friend.call === "call",
  // );

  // const handleTextFilterOption = friendsTimeline.filter(
  //   (friend) => friend.call === "text",
  // );

  // const handleVideoFilterOption = friendsTimeline.filter(
  //   (friend) => friend.call === "video",
  // );

  return (
    <div className="bg-base-200 py-10">
      <div className="w-10/12 mx-auto my-15">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-3xl">Timeline</h2>
            <div className="join">
              <div>
                <label className="input validator join-item">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input type="search" required placeholder="Search" />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>
              <button className="btn btn-neutral join-item">Search</button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <select defaultValue="Pick a color" className="select">
              <option disabled={true}>Filter timeline</option>
              <option>Call</option>
              <option>Text</option>
              <option>Video</option>
            </select>

            <select className="border rounded-md p-3 bg-white">
              <option disabled={false}>sort by</option>
              <option onClick={() => setSort("goal")}>goal</option>
              <option onClick={() => setSort("id")}>0-9</option>
            </select>
          </div>
          {sortFilter.map((friend, ind) => (
            <div key={ind} className="bg-white p-4 rounded-lg shadow">
              <div>
                <div className="flex items-center gap-6 mb-3">
                  <img
                    src={`${friend.call === "call" ? call : friend.call === "video" ? video : text}`}
                    alt={friend.name}
                  />

                  <div>
                    <span className="font-bold text-lg">{`${friend.call === "call" ? "Call" : friend.text === "text" ? "Text" : "Video"}`}</span>{" "}
                    <span className="text-gray-500 font-light">
                      {friend.name}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 font-light">{`${friend.call === "call" ? friend.date : friend.call === "video" ? friend.date : friend.date}`}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
