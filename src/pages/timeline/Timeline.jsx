import React, { useContext, useState } from "react";
import { FriendContext } from "../../context/FriendContext";
import call from "../../assets/call.png";
import video from "../../assets/video.png";
import text from "../../assets/text.png";

const Timeline = () => {
  const { friendsTimeline } = useContext(FriendContext);

  const [filterTimeline, setFilterTimeline] = useState(friendsTimeline);

  // const [sortTimeline, setSortTimeline] = useState(friendsTimeline);

  const handleFilterType = (e) => {
    const filterType = e.target.value.toLowerCase();
    const filtered = friendsTimeline.filter(
      (friend) => friend.type === filterType,
    );
    setFilterTimeline(filtered);
  };

  // const handleSortType = (e) => {
  //   const sortType = e.target.value.toLowerCase();
  //   const sorted = friendsTimeline.filter((friend) => friend.goal === sortType);
  //   console.log(sorted);
  //   setSortTimeline(sorted);
  //   console.log(sorted);
  // };

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
            <select
              onChange={handleFilterType}
              defaultValue="Pick a color"
              className="select"
            >
              <option className="btn-disabled btn-ghost">
                Filter timeline
              </option>
              <option>Call</option>
              <option>Text</option>
              <option>Video</option>
            </select>

            <select
              // onChange={handleSortType}
              className="border rounded-md p-3 bg-white"
            >
              <option disabled={true}>sort by</option>
              <option>goal</option>
              <option>0-9</option>
            </select>
          </div>
          {filterTimeline.map((friend, ind) => (
            <div key={ind} className="bg-white p-4 rounded-lg shadow">
              <div>
                <div className="flex items-center gap-6 mb-3">
                  <img
                    src={`${friend.type === "call" ? call : friend.type === "video" ? video : text}`}
                    alt={friend.name}
                  />

                  <div>
                    <span className="font-bold text-lg">{`${friend.type === "call" ? "Call" : friend.type === "text" ? "Text" : "Video"}`}</span>{" "}
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
