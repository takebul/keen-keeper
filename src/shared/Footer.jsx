import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#244D3F] pt-10 pb-7">
      <div className="w-10/12 mx-auto border-b border-neutral-600 pb-5">
        <div className="w-10/12 mx-auto text-center justify-items-center space-y-3">
          <h2 className="text-white text-5xl font-bold">KeenKeeper</h2>
          <p className="text-neutral-400 text-sm">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
          <p className="text-white text-lg font-medium">Social Links</p>
          <div className="flex gap-2">
            <AiFillInstagram size={35} className="bg-white rounded-full p-1" />
            <FaFacebookSquare size={35} className="bg-white rounded-full p-1" />
            <FaXTwitter size={35} className="bg-white rounded-full p-1" />
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto space-y-3 text-center md:flex justify-between mt-5 justify-items-center">
        <p className="text-neutral-400">
          &copy; 2026 KeenKeeper. All rights reserved.
        </p>
        <div className="text-neutral-400 flex gap-6">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p> Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
