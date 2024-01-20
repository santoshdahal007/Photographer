import React from 'react';
import WomanImg from '../img/about/woman.jpg';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import {transition1} from '../transitions';

const About = () => {
  return <motion.section 
    initial={{opacity:0, y:'100%'}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y: '100%'}}
    transition={{transition1}}
    className='section'>
    <div className='container mx-auto h-full relative overflow-scroll'>
      <div className='
        flex flex-col lg:flex-row h-auto sm:h-full
        items-center justify-center gap-x-24
        text-center lg:text-left lg:pt-16'>
          <div className='
            flex-1 max-h-96 lg:max-h-max
            order-2 lg:order-none'>
              <img src={WomanImg} alt=''/>
          </div>
          <motion.div 
            initial={{opacity:0, y:'-90%'}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y: '-90%'}}
            transition={{transition1}}
            className='flex-1 pt-36 pb-14 px-[30px] lg:pt-0
            lg:w-auto z-10 flex flex-col justify-center
            items-center lg:items-start'>
            <h1 className='h1'>About me</h1>
            <p className='mb-2 max-w-sm'>
            Photography has been my passion since childhood, 
            but it wasn't until becoming a parent that I realized 
            it was my life's calling. After this revelation, I swiftly 
            bought my first camera and have been capturing moments, 
            learning, and evolving ever since. The opportunity to preserve 
            life, love, and memories for others is truly incredible.
            </p>
            <br/>
            <p className='mb-12 max-w-sm'>
            My greatest inspirations are my two beautiful children, 
            a daughter, and a son. They motivate me to grow as an individual 
            and a mother, driving me to become a better photographer every day. 
            I've been happily married since 2003 to the one person who's 
            been by my side through thick and thin, supporting me in every step 
            of my journey. His unwavering belief in me, even during moments
            of self-doubt, has been instrumental in my success.
            </p>
            <Link to={'/portfolio'} className='btn'>View my work</Link>
          </motion.div>
      </div>
    </div>
  </motion.section>;
};

export default About;
