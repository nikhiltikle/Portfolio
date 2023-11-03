import React from 'react';
import Project from '../Project';
import Contact from '../Contact';
import { Banner, Service } from '../../components';

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <div className='md:mt-12 lg:-mt-8'>
        <Service />
      </div>
      <div className='-mt-16 '>
        <Project />
      </div>
      <div className='-mt-8 '>
        <Contact />
      </div>
    </div>
  );
};

export default Home;
