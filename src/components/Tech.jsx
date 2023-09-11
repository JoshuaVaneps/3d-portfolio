import React from "react";

import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Skill = ({ name, x, y, link }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-tertiary text-light py-3 px-6 hover:bg-tertiary/80 shadow-superPrimaryDark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      onClick={() => window.open(link, "_blank")}
    >
      {name}
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <h2 className="font-Bold text-8xl w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularlight ">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-tertiary text-light p-8 shadow-superPrimaryDark cursor-pointer "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill
          name="HTML"
          x="-20vw"
          y="-2vw"
          link="https://joshuavaneps.github.io/fun-code-quiz/index.html"
        />
        <Skill
          name="ReactJS"
          x="23vw"
          y="6vw"
          link="https://github.com/JoshuaVaneps/3d-portfolio"
        />
        <Skill
          name="SQL"
          x="-5vw"
          y="-7vw"
          link="https://github.com/JoshuaVaneps/E-Commerce-Backend/"
        />
        <Skill
          name="NodeJS"
          x="-20vw"
          y="-15vw"
          link="https://mambrocio.github.io/group-COL/"
        />
        <Skill
          name="MongoDB"
          x="0vw"
          y="12vw"
          link="https://github.com/JoshuaVaneps/mongo-social-media"
        />
        <Skill name="Python" x="15vw" y="-12vw" link="" />
        <Skill
          name="Git"
          x="32vw"
          y="-5vw"
          link="https://github.com/JoshuaVaneps"
        />
        <Skill
          name="ThreeJS"
          x="0vw"
          y="-20vw"
          link="https://github.com/JoshuaVaneps/3d-portfolio"
        />
        <Skill
          name="Javascript"
          x="-25vw"
          y="18vw"
          link="https://joshuavaneps.github.io/weather-knight/"
        />
        <Skill
          name="Tailwind CSS"
          x="18vw"
          y="18vw"
          link="https://mezcal-book-580ae53d198b.herokuapp.com/"
        />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
