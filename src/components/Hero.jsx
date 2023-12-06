import React from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] md:h-screen mx-auto bg-black">
      <div
        className={`${styles.paddingX} 
       container mx-auto h-full flex flex-row items-center justify-start gap-5`}
      >
        <div className="flex gap-5">
          <div className="flex flex-col justify-start items-center mt-5">
            {/* circle & line */}
            <div className="w-5 h-5 rounded-full bg-teal-400" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
            {/* circle and line ends */}
          </div>
          <motion.div
            variants={textVariant()}
            className={`${styles.heroHeadText}`}
          >
            <h1 className="text-white">
              Namaste I'm <span className="text-teal-600">Sudip</span>
              {/* [#915eff] */}
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white pr-2`}>
              I have a passion for web <br className="sm:block hidden" /> and I
              create web applications.
              <br className="sm:block hidden" /> #MERN Developer
              <br className="sm:block hidden" /> #CODING Life
            </p>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-10
      bottom-32 w-full flex justify-center items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl border-4  
          border-teal-400 flex justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="h-3 w-3 rounded-full bg-teal-400 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;