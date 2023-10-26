import React from 'react';
import TypeAnimation from 'react-type-animation';
import { motion } from 'framer-motion';
import Lottie from "react-lottie";
import './About.css';
import '../../components/atoms/PrimaryBtn/PrimaryBtn.css';
import aboutphoto from "../../assets/animation_lo2tfpm5.json";
import '../shared/Shared.css';
import { BottomLine, MySkill, Education } from '../../components';
const About = () => {
  return (
    <div className='parent pt-16 my-16'>
      <div className=''>
        <motion.div
          className='mb-10'
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: 'spring' },
          }}
        >
          <h3 className='text-neutral text-center'>Something About Myself</h3>
          <h1 className='text-4xl font-semibold drop-shadow-md text-center'>
            About <span className='text-primary'>Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className='relative grid grid-cols-1 md:grid-cols-2 gap-20'>
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
          <Lottie
            options={{animationData:aboutphoto}}
            height="70%"
            width="90%"
            className="mx-auto lg:mr-auto"
          />
          </motion.div>
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className='text-4xl font-semibold mb-4 text-center translate-y-[-300%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left'>
              Nikhil Tikle
            </h1>
            <div className='my-8'>
              <TypeAnimation
                className='text-2xl text-primary font-bold text-left ml-2 translate-y-[-450%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left'
                cursor={true}
                sequence={[
                  'A Front-end Developer',
                  2000,
                  'A Web Developer',
                  2000,
                  'A UI-UX Designer',
                  2000,
                ]}
                wrapper='div'
                repeat={Infinity}
              />
            </div>
            <p className='text-neutral font-medium text-left ml-2 translate-y-[-40%] sm:translate-y-[-0%] sm:mb-2 md:text-left' id='about-para'>
            With over 7 years of experience as a Senior Frontend Developer, I bring extensive expertise in the JavaScript ecosystem, React.js, and modern UI/UX design. My skill set includes proficiency in frontend tools like Webpack, Babel, and more, as well as data visualization using D3.js and Chart.js. I'm committed to ensuring cross-browser compatibility, responsive web design, and top-tier frontend testing and performance optimization. I'm passionate about staying up-to-date with emerging technologies and frameworks to deliver cutting-edge solutions.
            </p>
            <br />
            <p className='text-neutral font-medium text-left ml-2 translate-y-[-130%] sm:translate-y-[-0%] sm:mb-2 md:text-left' id='about-para2'>
              My passion for solving complex problems and creating innovative
              solutions drives me to stay up-to-date with the latest
              technologies and trends in the industry.
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-2 text-left ml-2 translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left ' id='address'>
              <h2 className='font-medium'>
                <span className='mr-2 text-primary'>Email : </span>
                nikhiltikle31@gmail.com
              </h2>
              <h2 className='font-medium'>
                <span className='mr-2 text-primary'>Address : </span>Indore,India(452009)
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
      {/* My Skill */}
      <MySkill />
      {/* Education */}
      <Education />
    </div>
  );
};
export default About;