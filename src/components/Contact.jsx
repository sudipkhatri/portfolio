import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMP_ID,
        e.target,
        import.meta.env.VITE_API_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            text: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex flex-col sm:flex-row sm:gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="sm:flex-[0.75] bg-white p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText} text-primary animate-bounce`}>
          06. Get in touch
        </p>
        <h3 className={`${styles.sectionHeadText} text-primary`}>Contact.</h3>
        <p className={`${styles.sectionSubText} text-primary `}>
          Or Send an{" "}
          <span
            onClick={() => (window.location = "mailto:pingtosudip@gmail.com")}
            className="text-teal-300 cursor-pointer underline "
          >
            Email
          </span>{" "}
          Instead.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="May I know who I am speaking with?"
              required
              className="bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border focus:border-teal-300 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              required
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border focus:border-teal-300 font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-black font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="text"
              value={form.text}
              required
              onChange={handleChange}
              placeholder="Could you share your viewpoint?"
              className="bg-black py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border focus:border-teal-300 font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-400 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto hidden sm:flex justify-center items-center md:h-[550px] h-[350px]"
      >
        <div className="w-full h-full flex justify-center items-center gap-10 pt-8">
          <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full border border-red-400 bg-transparent animate-ping">
            <div className="w-3/4 h-3/4 flex justify-center items-center rounded-full border border-red-400 bg-transparent animate-pulse">
              <div className="w-2/4 h-2/4 rounded-full flex justify-center items-center border border-red-400 bg-transparent animate-pulse">
                <div className="w-1/4 h-1/4 rounded-full border border-red-400 bg-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full border border-red-400 bg-transparent animate-ping">
            <div className="w-3/4 h-3/4 flex justify-center items-center rounded-full border border-red-400 bg-transparent animate-pulse">
              <div className="w-2/4 h-2/4 rounded-full flex justify-center items-center border border-red-400 bg-transparent animate-pulse">
                <div className="w-1/4 h-1/4 rounded-full border border-red-400 bg-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="w-[100px] h-[100px] hidden md:flex justify-center items-center rounded-full border border-red-400 bg-transparent animate-ping">
            <div className="w-3/4 h-3/4 flex justify-center items-center rounded-full border border-red-400 bg-transparent animate-pulse">
              <div className="w-2/4 h-2/4 rounded-full flex justify-center items-center border border-red-400 bg-transparent animate-pulse">
                <div className="w-1/4 h-1/4 rounded-full border border-red-400 bg-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full border border-red-400 bg-transparent animate-ping">
            <div className="w-3/4 h-3/4 flex justify-center items-center rounded-full border border-red-400 bg-transparent animate-pulse">
              <div className="w-2/4 h-2/4 rounded-full flex justify-center items-center border border-red-400 bg-transparent animate-pulse">
                <div className="w-1/4 h-1/4 rounded-full border border-red-400 bg-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
