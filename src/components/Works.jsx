import { React, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  deployed_site_link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const openDeployedSite = () => {
    window.open(deployed_site_link, "_blank");
  };

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary/60 p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <div
            onClick={openDeployedSite} // Add the onClick handler to open deployed site link
            className="w-full h-full object-cover rounded-2xl cursor-pointer"
          >
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] mb-2">{name}</h3>
          <button
            style={
              isHovered ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle
            }
            onClick={openDeployedSite}
            onMouseEnter={() => setIsHovered(true)} // Track hover state
            onMouseLeave={() => setIsHovered(false)} // Track hover state
          >
            <span>Visit Site</span>
          </button>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const buttonStyle = {
  padding: "0.1em 0.25em",
  width: "13em",
  height: "4.2em",
  backgroundColor: "#212121",
  border: "0.08em solid #fff",
  borderRadius: "0.3em",
  fontSize: "12px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  bottom: "0.4em",
  boxShadow: "0 0.4em 0.1em 0.019em #fff",
  transition: "all 0.5s",
  color: "#fff",
};

const buttonHoverStyle = {
  transform: "translate(0, 0.4em)",
  boxShadow: "0 0 0 0 #fff",
  transition: "all 0.5s",
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Check Out My Work</p>
        <h2 className={styles.sectionHeadText}>Portfolio</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects serve as a testament to my skills and
          expertise, offering tangible demonstrations of my capabilities in
          real-world scenarios. Each project is thoughtfully outlined, complete
          with references to code repositories and live demonstrations. These
          examples aptly illustrate my adeptness in addressing intricate
          challenges, adeptly navigating diverse technologies, and efficiently
          overseeing project management.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
