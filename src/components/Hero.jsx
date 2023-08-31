import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* the red dot */}
          <div className="w-5 h-5 rounded-full bg-[#D03D56] " />
          {/* the line coming down */}
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-r from-[#D03D56]" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className="text-[#D03D56]">Joshua</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A experienced Full Stack Developer specialized in MERN stack, with a
            Proven track record of optimizing workflows and delivering efficient
            web solutions.
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
