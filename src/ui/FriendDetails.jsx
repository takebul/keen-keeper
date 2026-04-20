import { useParams } from "react-router";
import useFriendsData from "../hook/useFriendsData";
import { PiBellZBold } from "react-icons/pi";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineTextsms } from "react-icons/md";
import { LuVideo } from "react-icons/lu";
import { FriendContext } from "../context/FriendContext";
import { useContext } from "react";
import { RingLoader } from "react-spinners";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useFriendsData();
  const { friendsTimeline, setFriendsTimeline } = useContext(FriendContext);
  const expectedFriend = friends.find((friend) => String(friend.id) === id);

  const handleTimeline = (btn, date) => {
    const checkInBtn = { ...expectedFriend };
    checkInBtn.type = btn;
    checkInBtn.date = date;
    console.log(btn, "btn", date, "date");

    setFriendsTimeline([...friendsTimeline, checkInBtn]);
    console.log(`${Date()}`, friendsTimeline);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <RingLoader />
      </div>
    );
  }

  return (
    <div className="bg-base-200">
      <div className="w-10/12 mx-auto justify-items-center md:grid grid-cols-5 gap-4 py-10">
        <div className="col-span-2 space-y-2">
          <div className="p-4 bg-white rounded-md justify-items-center space-y-2 shadow text-center">
            <img
              className="w-20 h-20 rounded-full object-cover"
              src={expectedFriend.picture}
              alt={expectedFriend.name}
            />
            <h4 className="text-xl font-semibold">{expectedFriend.name}</h4>
            <p>{expectedFriend.days_since_contact}d ago </p>
            <p
              className={` text-white rounded-full px-2.5 py-1" ${expectedFriend.status === "overdue" ? "bg-red-500" : expectedFriend.status === "on-track" ? "bg-gray-600" : "bg-yellow-500"}`}
            >
              {expectedFriend.status}
            </p>
            <div className="flex gap-2">
              {expectedFriend.tags.map((tag, ind) => {
                return (
                  <div
                    key={ind}
                    className="bg-green-200 px-3 py-0.5 rounded-full uppercase text-sm font-medium"
                  >
                    {tag}
                  </div>
                );
              })}
            </div>
            <p className="text-neutral-500 font-medium">
              "{expectedFriend.bio}"
            </p>
            <p className="text-neutral-500 font-medium">
              Preferred: {expectedFriend.email}
            </p>
          </div>
          <div className="p-3 bg-white shadow rounded-md">
            <p className="flex items-center gap-1 font-semibold text-lg text-gray-600 justify-center cursor-pointer">
              <PiBellZBold /> Snooze 2 Weeks
            </p>
          </div>
          <div className="p-3 bg-white shadow rounded-md">
            <p className="flex items-center gap-1 font-semibold text-lg text-gray-600 justify-center cursor-pointer">
              <FiArchive /> Archive
            </p>
          </div>
          <div className="p-3 bg-white shadow rounded-md">
            <p className="flex items-center gap-1 font-semibold text-lg text-red-400 justify-center cursor-pointer">
              <RiDeleteBinLine />
              Delete
            </p>
          </div>
        </div>
        <div className="col-span-3 row-span-1 space-y-3">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="space-y-2 bg-white p-6 rounded-md shadow text-center">
              <h2 className="font-semibold text-3xl text-green-900">
                {expectedFriend.days_since_contact}
              </h2>
              <p className="text-md font-medium text-gray-600">
                Days Since Contact
              </p>
            </div>
            <div className="space-y-2 bg-white p-6 rounded-md shadow text-center">
              <h2 className="font-semibold text-3xl text-green-900">
                {expectedFriend.goal}
              </h2>
              <p className="text-md font-medium text-gray-600">Goal (Days)</p>
            </div>
            <div className="space-y-2 bg-white p-6 rounded-md shadow text-center">
              <h2 className="font-semibold text-2xl text-green-900">
                {expectedFriend.next_due_date}
              </h2>
              <p className="text-md font-medium text-gray-600">Next Due</p>
            </div>
          </div>
          <div className="bg-white rounded-md shadow p-1">
            <div className="flex justify-between items-center m-3">
              <p className="font-semibold text-lg text-green-900">
                Relationship Goal
              </p>
              <button className="btn">Edit</button>
            </div>
            <p className="mx-3 mb-3 font-medium text-gray-600">
              Contact every
              <span className="font-semibold text-gray-900">
                {" "}
                {expectedFriend.days_since_contact} days
              </span>
            </p>
          </div>
          <div className="bg-white p-3 pb-4 px-5 rounded-md shadow space-y-3">
            <p>Quick Check-In</p>
            <div className="grid grid-cols-3 gap-4">
              <button
                onClick={() => handleTimeline("call", `${Date()}`)}
                className="btn space-y-1 bg-base-200 p-13 flex flex-col rounded-md shadow text-center"
              >
                <h2 className="font-semibold text-3xl text-green-900 justify-items-center">
                  <TbPhoneCall />
                </h2>
                <p className="text-md font-medium text-gray-600">Call</p>
              </button>
              <button
                onClick={() => handleTimeline("text", `${Date()}`)}
                className="btn space-y-1 bg-base-200 p-13 flex flex-col rounded-md shadow text-center"
              >
                <h2 className="font-semibold text-3xl text-green-900 justify-items-center">
                  <MdOutlineTextsms />
                </h2>
                <p className="text-md font-medium text-gray-600">Text</p>
              </button>
              <button
                onClick={() => handleTimeline("video", `${Date()}`)}
                className="btn space-y-1 bg-base-200 p-13 flex flex-col rounded-md shadow text-center"
              >
                <h2 className="font-semibold text-3xl text-green-900 justify-items-center">
                  <LuVideo />
                </h2>
                <p className="text-md font-medium text-gray-600">Video</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
