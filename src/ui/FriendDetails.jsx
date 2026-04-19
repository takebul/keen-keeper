import { useParams } from "react-router";
import useFriendsData from "../hook/useFriendsData";
import { PiBellZBold } from "react-icons/pi";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbPhoneCall } from "react-icons/tb";

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = useFriendsData();
  const expectedFriend = friends.find((friend) => String(friend.id) === id);

  if (loading) {
    return (
      <div>
        <h2>Loading....</h2>
      </div>
    );
  }

  return (
    <div className="bg-base-200">
      <div className="w-10/12 mx-auto grid grid-cols-5 gap-4 py-10">
        <div className="col-span-2 space-y-2">
          <div
            to={"/details"}
            className="p-4 bg-white rounded-md justify-items-center space-y-2 shadow text-center"
          >
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
            <p className="bg-green-200 px-3 py-0.5 rounded-full uppercase text-sm">
              {expectedFriend.tags.find((tag) => {
                return <p>{tag}</p>;
              })}
            </p>
            <p>"{expectedFriend.bio}"</p>
            <p>Preferred: {expectedFriend.email}</p>
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
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2 bg-white p-6 rounded-md shadow text-center">
              <h2 className="font-semibold text-3xl text-green-900">62</h2>
              <p className="text-md font-medium text-gray-600">
                Days Since Contact
              </p>
            </div>
            <div className="space-y-2 bg-white p-6 rounded-md shadow text-center">
              <h2 className="font-semibold text-3xl text-green-900">62</h2>
              <p className="text-md font-medium text-gray-600">
                Days Since Contact
              </p>
            </div>
            <div className="space-y-2 bg-white p-6 rounded-md shadow text-center">
              <h2 className="font-semibold text-3xl text-green-900">62</h2>
              <p className="text-md font-medium text-gray-600">
                Days Since Contact
              </p>
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
              <span className="font-semibold text-gray-900"> 30 days</span>
            </p>
          </div>
          <div className="bg-white p-3 pb-4 px-5 rounded-md shadow space-y-3">
            <p>Quick Check-In</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2 bg-base-200 p-6 rounded-md shadow text-center">
                <h2 className="font-semibold text-3xl text-green-900 justify-items-center">
                  <TbPhoneCall />
                </h2>
                <p className="text-md font-medium text-gray-600">Call</p>
              </div>
              <div className="space-y-2 bg-base-200 p-6 rounded-md shadow text-center">
                <h2 className="font-semibold text-3xl text-green-900 justify-items-center">
                  <TbPhoneCall />
                </h2>
                <p className="text-md font-medium text-gray-600">Call</p>
              </div>
              <div className="space-y-2 bg-base-200 p-6 rounded-md shadow text-center">
                <h2 className="font-semibold text-3xl text-green-900 justify-items-center">
                  <TbPhoneCall />
                </h2>
                <p className="text-md font-medium text-gray-600">Call</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
