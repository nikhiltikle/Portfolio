import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import '../../components/atoms/PrimaryBtn/PrimaryBtn.css';
import '../shared/Shared.css';
import { motion, useAnimation } from 'framer-motion';
import {
  FaUserAlt,
  FaLocationArrow,
  FaLinkedin,
  FaGithubSquare,
} from 'react-icons/fa';
import { MdEmail, MdSend } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { headingAnimation, contactAnimation } from '../../hooks/useAnimation';
import { BottomLine } from '../../components';

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_p4ki7od',
        'template_dkc6tfn',
        'service_6xnj05v',
        'template_exk29f8',
        form.current,
        'MaaA5dYfvKXck7gdm'
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Message has been sent',
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/');
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div className='parent pt-6 pb-24 mt-16'>
        <motion.div
          initial='hidden'
          animate={viewDiv && 'visible'}
          variants={headingAnimation}
        >
          <h3 className='text-neutral text-center'>Feel Free To Contact Me</h3>
          <h1 className='text-4xl font-semibold drop-shadow-md text-center'>
            Get In <span className='text-primary'>Touch</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
          <motion.div
            className=''
            ref={ref}
            initial='hidden'
            animate={viewDiv && 'visible'}
            variants={contactAnimation}
          >
            <h2 className='text-2xl ml-2 font-medium'>Contact Me</h2>
            <form ref={form} onSubmit={handleSend}>
              <div className='grid grid-cols-1 mx-2 lg:grid-cols-2 lg:gap-6'>
                <input
                  className='input-field'
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name'
                  required
                />
                <input
                  className='input-field'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='mx-2'>
                <input
                  className='input-field'
                  type='text'
                  name='subject'
                  id='subject'
                  placeholder='Subject'
                  required
                />
                <textarea
                  className='input-field ml-2'
                  name='message'
                  id='message'
                  cols='30'
                  rows='5'
                  placeholder='Message'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                value='Send Message'
                className='primary-button ml-2'
              >
                <span>Send</span>
                <span>
                  <MdSend />
                </span>
              </button>
            </form>
          </motion.div>
          <motion.div
            className=''
            initial={{ y: 50, opacity: 0 }}
            animate={viewDiv && 'visible'}
            variants={contactAnimation}
          >
            <h2 className='text-2xl font-medium ml-2'>Contact Info</h2>
            <div className='flex items-center my-6 ml-2'>
              <FaUserAlt className='text-2xl mr-8 hover:text-primary cursor-pointer duration-300'></FaUserAlt>
              <h3 className='font-medium text-primary'>Nikhil Tikle</h3>
            </div>
            <div className='flex items-center my-6 ml-2'>
              <MdEmail className='text-3xl mr-7 hover:text-primary cursor-pointer duration-300'></MdEmail>
              <h3 className='font-medium text-primary'>nikhiltikle31@gmail.com</h3>
            </div>
            <div className='flex items-center my-6 ml-2'>
              <FaLocationArrow className='text-2xl mr-8 hover:text-primary cursor-pointer duration-300'></FaLocationArrow>
              <h3 className='font-medium text-primary'>
                Indore, India (452009)
              </h3>
            </div>
            <div className='mt-8 flex items-center ml-2'>
              <h3 className='text-xl text-neutral'>Social</h3>
              <div className='bg-gray-400 w-10 h-[2px] mx-4'></div>
              <a
                href='https://www.linkedin.com/in/nikhiltikle/'
                target='blank'
                className='text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300'
              >
                <FaLinkedin></FaLinkedin>
              </a>
              <a
                href='https://github.com/nikhiltikle'
                target='blank'
                className='text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300'
              >
                <FaGithubSquare></FaGithubSquare>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
