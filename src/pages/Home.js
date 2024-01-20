import React from 'react';
import WomanImg from '../img/home/woman.png';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import {transition1} from '../transitions';

const Home = () => {
  return <motion.section 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{transition1}}
    className='section'>
    <div className='container mx-auto h-full relative'>
      <div className='flex flex-col justify-center'>
        <div className='flex justify-end max-h-96 lg:max-h-max'>
          <motion.div 
            initial={{scale:0}}
            animate={{scale:1}}
            exit={{scale:0}}
            transition={{transition1}}
            className='relative lg:-right-40'>
            <motion.img 
              whileHover={{scale:1.1}}
              transition={{transition1}}
              src={WomanImg} 
              alt='photograper'/>
          </motion.div>
        </div>
        <motion.div 
          initial={{opacity:0, y:'-50%'}}
          animate={{opacity:1, y:'0'}}
          exit={{opacity:0, y:'-50%'}}
          transition={{transition1}}
          className='w-full pt-36 pb-14 lg:pt-0 
          lg:pb-0 lg:w-auto z-10 lg:absolute
          flex flex-col justify-center items-center 
          lg:items-start max-w-[610px]'>
            <h1 className='h1 mb-[30px]'>Briggett Wills</h1>
            <p className='mb-12 dancing-script-20 sm:text-2xl'>
              Welcome to my world of visual storytelling! I'm a 
              passionate photographer dedicated to capturing
              moments that resonates.
            </p>
            <Link to={'/contact'} className='btn mb-[30px] rounded'>Hire me</Link>
        </motion.div>
      </div>
    </div>
  </motion.section>;
};

export default Home;
