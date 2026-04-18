import React from "react";
import { NavLink } from "react-router";

const MyNavLink = ({ to, className, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `btn btn-ghost font-medium text-gray-700 ${className} ${isActive ? "btn text-white bg-green-800" : ""}`
        }
      >
        {children}{" "}
      </NavLink>
    </div>
  );
};

export default MyNavLink;
