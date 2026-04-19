import React from "react";
import Banner from "../../components/homepage/Banner";
import Stat from "../../components/homepage/Stat";
import Friends from "../../components/homepage/Friends";

const Homepage = () => {
  return (
    <div className="bg-base-200">
      <Banner />
      <Stat />
      <Friends />
    </div>
  );
};

export default Homepage;
