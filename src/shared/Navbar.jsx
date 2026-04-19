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
      <div className="">
        <ul className="hidden sm:flex gap-1">
          <li>
            <MyNavLink className={"text-sm"} to={"/"}>
              <RiHome2Line size={22} /> Home
            </MyNavLink>
          </li>
          <li>
            <MyNavLink className={"text-sm"} to={"/timeline"}>
              <RiTimeLine size={22} /> Timeline
            </MyNavLink>
          </li>
          <li>
            <MyNavLink className={"text-sm"} to={"/stats"}>
              <TfiStatsUp size={22} /> Stats
            </MyNavLink>
          </li>
        </ul>
        <div className="dropdown flex flex-row-reverse sm:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 shadow"
          >
            <li>
              <MyNavLink className={"text-sm"} to={"/"}>
                <RiHome2Line size={22} /> Home
              </MyNavLink>
            </li>
            <li>
              <MyNavLink className={"text-sm"} to={"/timeline"}>
                <RiTimeLine size={22} /> Timeline
              </MyNavLink>
            </li>
            <li>
              <MyNavLink className={"text-sm"} to={"/stats"}>
                <TfiStatsUp size={22} /> Stats
              </MyNavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
