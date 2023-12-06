import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-white flex justify-center items-center py-6">
      <div className="max-w-7xl mx-auto py-6 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/sudipkhatri"
            target="_blank"
            className="text-gray-500 hover:text-black"
          >
            <FaGithub size={"18px"} />
          </a>

          <button
            onClick={() => (window.location = "mailto:pingtosudip@gmail.com")}
            className="text-gray-500 hover:text-black"
          >
            <MdEmail size={"18px"} />
          </button>
          <a
            href="https://www.linkedin.com/in/sudip-khatri-353370148/"
            target="_blank"
            className="text-gray-500 hover:text-sky-400"
          >
            <FaLinkedin size={"18px"} />
          </a>
        </div>
        <p className="mt-4 text-center text-base text-gray-400">
          Powered by <span className="text-teal-500"> Sudip Khatri</span> &copy;{" "}
          {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  );
}
