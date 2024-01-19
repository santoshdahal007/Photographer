import React from 'react';
import WomanImg from '../img/home/woman.png';
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
    <div className='container mx-auto h-full relative'>
      <div className='
        flex flex-col lg:flex-row h-full
        items-center justify-center gap-x-24
        text-center lg:text-left lg:pt-16'>
          <div className='
            flex-1 max-h-96 lg:max-h-max
            order-2 lg:order-none overflow-hidden'>
              <img src={WomanImg} alt=''/>
          </div>
          <motion.div 
            initial={{opacity:0, y:'-90%'}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y: '-90%'}}
            transition={{transition1}}
            className='flex-1 pt-36 pb-14 lg:pt-0
            lg:w-auto z-10 flex flex-col justify-center
            items-center lg:items-start'>
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Eget magna fermentum iaculis eu 
              non diam phasellus vestibulum. Consectetur libero id faucibus nisl tincidunt eget.
              Magna fermentum iaculis eu non. Nisi lacus sed viverra tellus in hac.
            </p>
            <Link to={'/portfolio'} className='btn'>View my work</Link>
          </motion.div>
      </div>
    </div>
  </motion.section>;
};

export default About;
