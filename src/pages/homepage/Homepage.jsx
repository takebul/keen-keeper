import React from "react";
import Banner from "../../components/homepage/Banner";
import Stats from "../../components/homepage/Stats";
import Friends from "../../components/homepage/Friends";

const Homepage = () => {
  return (
    <div className="bg-base-200">
      <Banner />
      <Stats />
      <Friends />
    </div>
  );
};

export default Homepage;
