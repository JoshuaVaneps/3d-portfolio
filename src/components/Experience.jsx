import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { download, joshResume } from "../assets";
import { technologies } from "../constants";

const techBalls = ({ technologies }) => {
  return (
    <div className="text-teal-500">
      {technologies.map((tech) => (
        <span
          key={tech.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-superSecondary 
        duration-300 "
        >
          <ion-tech name={tech.name}>
            {" "}
            <img
              src={tech.icon}
              alt="${tech.name}"
              className="w-1/2 h-1/2 object-contain"
            />
          </ion-tech>
        </span>
      ))}
    </div>
  );
};
const handleClick = () => {
  // Replace 'your-pdf-file.pdf' with the actual URL or path to your PDF file
  const pdfUrl = joshResume;

  // Open the PDF in a new tab or window
  window.open(pdfUrl, "_blank");
};

const ExperienceCard = ({ experience }) => (
  // creates the structure of the tree
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Resume / Experience</h2>
        <h3 className="text-white inline-flex items-center font-black md:text-[30px] sm:text-[25px] xs:text-[20px] text-[15px] mt-3 pl-5">
          My Resume
          <img
            src={download}
            alt="download button"
            className="scale-50 hover:bg-tertiary/40 cursor-pointer"
            onClick={handleClick}
          />
        </h3>
      </motion.div>
      <div className="mt-10 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "resume");
