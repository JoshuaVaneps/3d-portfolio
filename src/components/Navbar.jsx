import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// bringing in the resources and images well need
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      // the backticksa and temporal literal allows us to pass in our custom dynamic padding
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            // this is keeping track of where we are on the page
            setActive("");
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
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {/* were using map to make a linked dynamic nav list of our main sections */}
          {navLinks.map((Link) => (
            // were using a key and a if else statement to check if the section is active
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer text-center `}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="menu w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl bg-gradient-to-r from-green-400 to-blue-500`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {/* were using map to make a linked dynamic nav list of our main sections */}
              {navLinks.map((Link) => (
                // were using a key and a if else statement to check if the section is active
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-white" : "text-secondary"
                  }font-poppins font-medium cursor-pointer text-[16px] bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  `}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(Link.title);
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
