import React from 'react';
import Project from '../Project';
import Contact from '../Contact';
import { Banner, Service } from '../../components';

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <div>
        <Service />
      </div>
      <div className='-mt-8'>
        <Project />
      </div>
      <div className='-mt-12'>
        <Contact />
      </div>
    </div>
  );
};

export default Home;