import React, { useEffect, useState } from "react";
import Items from "../../../src/constants/projects";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLocation } from "react-router-dom";
import "./Project.css";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../hooks/useAnimation";
import { BottomLine } from "../../components";
import { ProjectCard } from "./ProjectCard";

const Project = () => {
  const location = useLocation();
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation, location]);

  return (
    <div className="project my-16 parent mx-2">
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
        style={{ padding: "3rem" }}
      >
        <h3 className="text-center text-neutral">Some of my recent Projects</h3>
        <h1 className="text-4xl font-semibold text-center z-1">
          Featured <span className="text-primary">Projects</span>
        </h1>
        <BottomLine />
      </motion.div>
      <motion.div
        className="-mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {Items?.map((project) => (
          <ProjectCard project={project}/>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;