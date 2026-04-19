import React from "react";
import { Link, NavLink } from "react-router";
import MyNavLink from "./MyNavLink";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center gap-10 shadow py-4 px-9">
      <div>
        <span className="font-extrabold text-3xl text-green-950">Keen</span>
        <span className="font-semibold text-3xl text-green-900">Keeper</span>
      </div>
      <div className="flex gap-1">
        <MyNavLink className={"text-sm"} to={"/"}>
          <RiHome2Line size={22} /> Home
        </MyNavLink>
        <MyNavLink className={"text-sm"} to={"/timeline"}>
          <RiTimeLine size={22} /> Timeline
        </MyNavLink>
        <MyNavLink className={"text-sm"} to={"/stats"}>
          <TfiStatsUp size={22} /> Stats
        </MyNavLink>
      </div>
    </div>
  );
};

export default Navbar;
