import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import coding from "../../../assets/coding.json";
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";
const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const pdfURL = "resume.pdf"; 
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "Resume_Nikhil_Tikle.pdf"; 
    link.click();
  };

  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-neutral ml-2 text-xl font-medium translate-y-[-30%] sm:translate-y-[-0%]">Hello, I'm</h2>
        <h1 className="text-4xl ml-2 font-semibold mb-0 translate-y-[-10%] sm:translate-y-[-0%]">Nikhil Tikle</h1>
        <div className="my-4">
          <TypeAnimation
            className="text-2xl ml-2 text-primary font-bold translate-y-[-50%] sm:translate-y-[-0%]"
            cursor={true}
            sequence={[
              "A Front-end Developer",
              2000,
              "A Web Developer",
              2000,
              "A UI-UX Designer",
              2000,
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="text-neutral ml-2 max-w-xl mb-6 font-medium translate-y-[-10%] sm:translate-y-[-0%]">
        Front-end developer with 7+ years experience in crafting responsive web design. Proficient in Redux, HTML/CSS, ReactJS, NextJS, JavaScript, Figma-UI, AdobeXD UI/UX. Specializes in UI/UX-focused web development. <br />
          With a proven history of surpassing client expectations and a drive to continually enhance my skill set, I eagerly anticipate embracing new challenges and further elevating my proficiency in the field.
        </p>
        <div className="flex items-center justify-center translate-y-[-60%] sm:translate-y-[-0%]">
          <button className="primary-button" onClick={downloadPDF}>
            <span>My Resume</span>
            <span>
              <FaDownload />
            </span>
          </button>

          <Link to="/about" className="ml-4">
            <SecondaryBtn>
              <span>About Me</span>
              <span>
                <RiFolderInfoFill />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie options={defaultOptions} height="90%" width="90%" />
      </motion.div>
    </div>
  );
};
export default Banner;