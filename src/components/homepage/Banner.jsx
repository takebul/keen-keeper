import React from "react";

const Banner = () => {
  return (
    <div className="bg-base-200">
      <div className="w-11/12 mx-auto text-center py-10 space-y-3">
        <h1 className="font-bold text-[40px]">
          Friends to keep close in your life
        </h1>
        <p className="font-light text-gray-600 text-sm">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <button className="btn bg-green-800 text-white">+ Add a Friend</button>
      </div>
    </div>
  );
};

export default Banner;
