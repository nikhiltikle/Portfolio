import React, { useEffect, useState } from 'react';
import Items from '../../../src/constants/projects';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';
import './Project.css';
import {
  headingAnimation,
  sectionBodyAnimation,
} from '../../hooks/useAnimation';
import { BottomLine } from '../../components';
import { CgWebsite } from 'react-icons/cg';

const Project = () => {
  const location = useLocation();
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const [expandedText, setExpandedText] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation, location]);

  return (
    <div className="project my-16 parent mx-2"
    >
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
        style={{padding:"3rem"}}
      >
        <h3 className="text-center text-neutral">Some of my recent Projects</h3>
        <h1 className="text-4xl font-semibold text-center">
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
          <div
            key={project.id}
            className={`${project.id % 2 === 0
              ? "bg-accent shadow-lg"
              : "bg-[#313131] shadow-md"
              } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <img className="inline-block text-primary" src={project.imgurl} alt="project_screenshot"/>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {project.title}
            </h2>
            <p
          className={` card-text ${
            expandedText ? 'expanded-card-text' : ''
          } text-left`}
        >
          {project.description}
        </p>

        <button
          onClick={() => setExpandedText(!expandedText)}
          className="text-[#ff651c]"
        >
          {expandedText ? 'Hide' : 'Read more'}
        </button>

        <div className="flex justify-center py-6">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white rounded-md py-2 px-6 mt-8 flex items-center"
            >
              {project.icon || <CgWebsite />}
              <span className="ml-2">{project.customButton || 'Visit Website'}</span>
            </a>
          )}
        </div>
          </div>
        ))}
      </motion.div>
    </div>

  );
};

export default Project;
