import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// bringing in the resources and images well need
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState(""); // State to track active section
  const [toggle, setToggle] = useState(false); // State for mobile menu toggle

  return (
    <nav
      // the backticksa and temporal literal allows us to pass in our custom dynamic padding
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-superPrimary `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive(""); // Clear active section when clicking on logo/name
            window.scrollTo(0, 0); //scrolls to top of page
          }}
        >
          {/* bringig in image and text of our navbar */}
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Joshua Vaneps &nbsp;
            <span className="sm:block hidden">| Full Stack</span>
          </p>
        </Link>

        {/* Desktop navigation links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {/* were using map to make a linked dynamic nav list of our main sections */}
          {navLinks.map((Link) => (
            // were using a key and a if else statement to check if the section is active
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer text-center `}
              onClick={() => setActive(Link.title)} // Set active section on click
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        {/* Mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {/* Menu icon that toggles mobile menu */}
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="menu w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} // Toggle mobile menu
          />

          {/* Mobile menu content */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl bg-gradient-to-r from-superPrimaryDark to-superPrimaryLight`}
          >
            {/* Mobile navigation links */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {/* were using map to make a linked dynamic nav list of our main sections */}
              {navLinks.map((Link) => (
                // were using a key and a if else statement to check if the section is active
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-secondary"
                  }font-poppins font-medium cursor-pointer text-[16px] bg-gradient-to-r  from-superPrimaryDark to-superPrimaryLight hover:from-superSecondary hover:to-pink-500  `}
                  onClick={() => {
                    setToggle(!toggle); // Close mobile menu
                    setActive(Link.title); // Set active section
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
