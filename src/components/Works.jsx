import React from 'react';
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from '../styles';
import { projects } from '../constants';
import { Tilt } from "react-tilt";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} id='project'>
        <p className={`${styles.sectionSubText} animate-bounce text-white`}>
          04. My Crafts
        </p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("up", "", 0.1, 1)}
          className="text-white text-[17px] mt-3 max-w-3xl leading-[30px]"
        >
          As a web application developer, I've developed several projects
          utilizing cutting-edge technologies and adhering to the best industry
          practices. My efforts have been focused on creating solutions that
          elevate efficiency, enhance productivity, and offer exceptional user
          experiences. Continuously evolving in my profession, I embrace
          learning as an ongoing journey, advancing my expertise one step at a
          time.
        </motion.p>
      </div>
      <div className="mt-20 grid gap-5 gap-y-8
       grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </>
  );
}

const ProjectCard = ({index, name, image, source_code_link}) =>{
return (
  <Tilt className="w-[90%] cursor-pointer">
    <motion.div
      variants={fadeIn("left", "spring", index * 0.45, index * 0.75)}
      className="w-full border border-teal-300 p-[1px] rounded-[20px] bg-white shadow-card"
      onClick={() => window.open(source_code_link, "_blank")}
    >
      <div className=" w-full md:h-[220px]">
        <img
          className="w-full h-full object-cover border rounded-2xl"
          alt={name}
          src={image}
        />       
      </div>
    </motion.div>
  </Tilt>
);
}

export default SectionWrapper(Works, "works");