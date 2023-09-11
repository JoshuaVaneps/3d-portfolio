import React from "react";
import { Icons } from "../constants";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-superSecondary 
        duration-300 "
        >
          <ion-icon name={icon.name}>
            {" "}
            <img
              src={icon.image}
              alt="${icon.name}"
              onClick={() => window.open(icon.link, "_blank")}
              className="w-4 h-4 object-contain"
            />
          </ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
