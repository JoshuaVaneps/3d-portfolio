import React from "react";
import SocialIcons from "./SocialIcons";
import { Icons } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-superPrimary text-white">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2022 Appy. All rights reserved.</span>
        <SocialIcons Icons={Icons} />
        <span>Terms · Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
