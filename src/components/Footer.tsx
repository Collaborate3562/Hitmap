import React, { useContext, useState, useEffect } from "react";

import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoBehance,
  BiLogoLinkedin,
} from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className=" flex justify-center">
        <ul className="mt-12 flex justify-between px-10 py-5 border-b border-black">
          <li className="pr-8 text-xs-2">ABOUT</li>
          <li className="pr-8 text-xs-2">CONTACT</li>
          <li className="pr-8 text-xs-2">START</li>
          <li className="pr-8 text-xs-2">LATEST</li>
          <li className="text-xs-2">TRENDING</li>
        </ul>
      </div>
      <div className="flex justify-center">
        <ul className="flex justify-between px-10 py-5">
          <li className="pr-8">
            <BiLogoFacebook className="text-base" />
          </li>
          <li className="pr-8">
            <AiOutlineInstagram className="text-base" />
          </li>
          <li className="pr-8">
            <BiLogoTwitter className="text-base" />
          </li>
          <li className="pr-8">
            <BiLogoBehance className="text-base" />
          </li>
          <li>
            <BiLogoLinkedin className="text-base" />
          </li>
        </ul>
      </div>
      <div className="mt-5 flex justify-center">
        <ul className="flex justify-between px-10 py-5 border-b border-black">
          <li className="pr-3 text-[#808080] text-xs">@ COPYRIGHT</li>
          <li className="pr-3 text-xs">OLASW</li>
          <li className="pr-3 text-xs">/</li>
          <li className=" text-xs">VANESSA P.</li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
