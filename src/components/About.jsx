import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        // giving it simple fade in animation direction, type, delay, and duration
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        // stylizing our card
        className="w-full super-gradient p-[1px] rounded-[20px] shadow-card"
      >
        {/* this specifically will control how our objects tilt around mouse */}
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary/80 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          ></img>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      {/* allows us to fade in text through 4 variables direction, type, delay, adn duration of animation */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Joshua Vaneps, a seasoned Full Stack Developer from Orlando, FL. My
        proficiency in the MERN stack has allowed me to craft innovative
        solutions, most notably an employee portal that revolutionized data
        access in the inventory domain. My emphasis on user-centric design led
        to a tangible increase in user engagement and streamlined business
        processes. Beyond development, my leadership roles at Reyes Mezcaleria
        underscore my commitment to both technical and service excellence. As a
        graduate of UCF's Full-Stack Web Development Boot Camp and Valencia
        College, I not only possess a diverse technical skill set spanning from
        Threejs to Python and many more, but I also have an unyielding
        commitment to expanding my education and honing my craft. Contact me, if
        you would collaborate to craft impactful tech solutions!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
