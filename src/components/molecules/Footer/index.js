import React from 'react';
import { FaLinkedin, FaGithub} from 'react-icons/fa';

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className='w-full text-center p-6 bg-accent'
        style={{ backgroundColor: '#313131' }}
      >
        <div className='flex items-center justify-center mb-6'>
          <a
            className='inline-block mx-4'
            href='https://www.linkedin.com/in/nikhiltikle/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin className='text-3xl text-blue-400' />
          </a>
          <a
            className='inline-block mx-4'
            href='https://github.com/nikhiltikle'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='text-3xl text-black' />
          </a>
        </div>

        <div className='w-full h-[2px] bg-gray-600'></div>
        <div className='flex flex-col md:flex-row items-center justify-between mt-4'>
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{' '}
            <a
              href='https://www.linkedin.com/in/nikhiltikle/'
              className='text-primary hover:underline'
              target='blank'
            >
              Nikhil Tikle
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
