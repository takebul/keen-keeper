import React, { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import useFriendsData from "../../hook/useFriendsData";
import { RingLoader } from "react-spinners";
import { RiFileList3Fill } from "react-icons/ri";

const Stats = () => {
  const { friendsTimeline } = useContext(FriendContext);

  const { loading } = useFriendsData();

  const call = friendsTimeline.filter((friend) => friend.type === "call");

  const text = friendsTimeline.filter((friend) => friend.type === "text");

  const video = friendsTimeline.filter((friend) => friend.type === "video");

  const data = [
    { name: "Text", value: text.length, fill: "#1F2937" },
    { name: "Call", value: call.length, fill: "#7E35E1" },
    { name: "Video", value: video.length, fill: "#1A8862" },
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <RingLoader />
      </div>
    );
  }

  return (
    <div className="bg-base-200">
      {friendsTimeline.length === 0 ? (
        <div className="justify-items-center text-center py-20">
          <RiFileList3Fill size={150} />
          <h2 className="text-4xl font-bold">Empty Stats</h2>
        </div>
      ) : (
        <div className="w-10/12 mx-auto pt-10">
          <div className="p-8">
            <h1 className="text-3xl font-semibold pb-6">
              Friendship Analytics
            </h1>
            <div className="bg-white rounded-md p-8 shadow">
              <p className="font-medium">By Interaction Type</p>
              <PieChart
                className="mx-auto py-10 justify-items-center"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  maxHeight: "70vh",
                  aspectRatio: 1,
                }}
                responsive
              >
                <Pie
                  data={data}
                  innerRadius="80%"
                  outerRadius="100%"
                  // Corner radius is the rounded edge of each pie slice
                  cornerRadius="50%"
                  fill="#8884d8"
                  // padding angle is the gap between each pie slice
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                />
                <Legend />
                <Tooltip />
              </PieChart>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;
