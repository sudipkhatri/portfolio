import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='bg-black xl:mx-auto border border-teal-300 p-8 rounded-3xl md:w-[330px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='text-teal-400'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            {designation} at {company}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-[#f4f4f4] rounded-[20px]`}>
      <div
        className={`bg-black rounded-2xl ${styles.padding} min-h-[250px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-white animate-bounce`}> 05. What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`mt-10 pb-14 flex flex-wrap gap-5`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");