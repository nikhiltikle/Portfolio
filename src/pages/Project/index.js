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
import { Container, Row, Col } from 'react-bootstrap';

const Project = () => {
  const [items, setItems] = useState(Items);
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
    if (location.pathname === '/' && items.length > 3) {
      setItems(items.slice(0, 3));
    }
  }, [inView, animation, location, items]);

  return (
    <div className={`${location.pathname !== '/' && 'pt-16'}`}>
      <div className='parent py-6'>
        <motion.div
          initial='hidden'
          animate={viewDiv && 'visible'}
          variants={headingAnimation}
        >
          <div className='mb-12'>
            <h3 className='text-neutral text-center'>
              Some of my recent Projects
            </h3>
            <h1 className='text-4xl font-semibold text-center px-4'>
              Featured <span className='text-primary'>Projects</span>
            </h1>
            <BottomLine />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial='hidden'
          animate={viewDiv && 'visible'}
          variants={sectionBodyAnimation}
        />
        <Container>
          <Row className=' flex justify-center	'>
            {Items.map((project) => (
              <Col
                md={4}
                className='project-card'
              >
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
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Project;
