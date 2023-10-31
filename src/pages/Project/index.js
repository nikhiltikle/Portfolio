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
import ProjectCard from './ProjectCard';

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
    <div className={`${location.pathname !== '/' && 'pt-16'} bg-gray-100`}>
      <div className="parent py-6 bg-[#212121]">
        <motion.div
          initial="hidden"
          animate={viewDiv && 'visible'}
          variants={headingAnimation}
        >
          <div className="mb-12">
            <h3 className="text-neutral text-center">
              Some of my recent Projects
            </h3>
            <h1 className="text-4xl font-semibold text-center px-4">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <BottomLine />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && 'visible'}
          variants={sectionBodyAnimation}
        />
        <div className="container mx-auto">
          <div className="flex justify-center">
            {Items.map((project) => (
              <div className="md:w-1/3 px-4 mb-8">
                <ProjectCard
                  imgPath={project.imgurl}
                  isBlog={false}
                  title={project.name}
                  description={project.description}
                  moreDescription={project.moreDescription}
                  ghLink={project.ghLink}
                  demoLink={project.demoLink}
                  customButton={project.buttonLabel}
                  icon={project.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
