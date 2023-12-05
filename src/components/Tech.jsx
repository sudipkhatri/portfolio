import React from "react";
//import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";



const Tech = () => {
  return (
    <div className="overflow-hidden">
      <motion.div variants={textVariant()}>
        <p className={` ${styles.sectionSubText} text-primary animate-bounce`}>
          03. What I know!
        </p>
        <h2 className={`${styles.sectionHeadText} text-primary`}>
          Look Below.
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-content-center mt-10 gap-10">
        {technologies.map((technology, index) => {
          return (
            <motion.div
              variants={fadeIn("left", "spring", index * 0.5, 0.75)}
              className="w-28 h-28 bg-black flex justify-center items-center rounded-full cursor-pointer"
              key={technology.name}
            >
              {/* <BallCanvas icon={technology.icon} /> */}
              <img
                className="rounded-full w-3/4 h-3/4 bg-teal-300"
                src={technology.icon}
                alt="technology"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default SectionWrapper(Tech, "");



