import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("left", "spring", index * 0.45, index * 0.75)}
      className="w-full border border-teal-300 p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-black cursor-pointer rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-application-development"
          className="w-[100px] h-[100px] object-contain rounded-full"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={` ${styles.sectionSubText} text-black animate-bounce`}>
          01. Introduction
        </p>
        <h2 className={`${styles.sectionHeadText} text-black`}>SnapShot.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("up", "", 0.1, 1)}
        className="mt-4 text-black text-[17px] max-w-3xl leading-[30px]"
      >
        As an experienced software engineer, my expertise lies in Tailwind and
        JavaScript, with a strong focus on frameworks such as React, Node.js,
        and Express.js. My ability to rapidly assimilate new knowledge, combined
        with a dedication to developing practical and scalable solutions,
        enables me to effectively address and solve real-world challenges. I am
        adept at collaborating closely with clients, ensuring that the solutions
        I provide are not only efficient but also intuitive and user-friendly. I
        am excited about the prospect of joining forces with you to turn your
        innovative ideas into effective, real-world applications.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
