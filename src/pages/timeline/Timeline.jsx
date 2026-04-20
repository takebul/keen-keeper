import React, { useContext, useState } from "react";
import { FriendContext } from "../../context/FriendContext";
import call from "../../assets/call.png";
import video from "../../assets/video.png";
import text from "../../assets/text.png";
import useFriendsData from "../../hook/useFriendsData";
import { RingLoader } from "react-spinners";
import { RiFileList3Fill } from "react-icons/ri";
import { toast } from "react-toastify";

const Timeline = () => {
  const { friendsTimeline } = useContext(FriendContext);

  const { loading } = useFriendsData();

  const [filterTimeline, setFilterTimeline] = useState(friendsTimeline);

  const handleFilterType = (e) => {
    const filterType = e.target.value.toLowerCase();
    const filtered = friendsTimeline.filter(
      (friend) => friend.type === filterType,
      toast.success(`${filterType} filtered successful.`),
    );
    setFilterTimeline(filtered);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <RingLoader />
      </div>
    );
  }

  return (
    <div className="bg-base-200 py-10">
      {filterTimeline.length === 0 ? (
        <div className="justify-items-center text-center py-20">
          <RiFileList3Fill size={150} />
          <h2 className="text-4xl font-bold">Empty Timeline</h2>
        </div>
      ) : (
        <div className="w-10/12 mx-auto my-15">
          <div className="space-y-4">
            <div>
              <h2 className="font-bold text-3xl">Timeline</h2>
            </div>
            <div>
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
      )}
    </div>
  );
};

export default Timeline;
