import React from 'react';
import WomanImg from '../img/contact/woman.png';
import {motion} from 'framer-motion';
import {transition1} from '../transitions';

const Contact = () => {
  return <motion.section 
    initial={{opacity:0, y:'100%'}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y: '100%'}}
    transition={{transition1}} 
    className='section bg-white'>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row h-full
        items-center justify-start pt-36 gap-x-8 
        text-center lg:text-left'>
        <motion.div 
          initial={{opacity:0, y:'100%'}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y: '100%'}}
          transition={{transition1}} 
          className='hidden lg:flex bg-[#eef7f9]
          absolute bottom-0 left-0 right-0 top-72 -z-10'>
        </motion.div>
        <div>
          <h1 className='h1'>Contact me</h1>
          <form className='flex flex-col gap-y-4 px-[30px] sm:px-[0px]'>
            <div className='flex gap-x-10'>
              <input 
                className='outline-none border-b border-b-primary 
                h-[60px] bg-transparent font-secondary w-full pl-3 
                placeholder:text-[#757879]'
                type='text'
                placeholder='Full Name'/>
              <input 
                className='outline-none border-b border-b-primary 
                h-[60px] bg-transparent font-secondary w-full pl-3 
                placeholder:text-[#757879]'
                type='text'
                placeholder='E-mail'/>
            </div>
            <textarea 
              className='outline-none border-b border-b-primary 
              h-[70px] bg-transparent font-secondary w-full pl-3 
              placeholder:text-[#757879]'
              type='text'
              cols="40" 
              rows="5"
              placeholder='Message'/>
            <button className='btn mb-[30px] mx-auto lg:mx-0 self-start rounded-full'>Contact Us</button>
          </form>
        </div>
        <motion.div 
          initial={{opacity:0, y:'100%'}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y: '100%'}}
          transition={{transition:transition1,duration:1.5}} 
          className='lg:flex-1'>
          <img src={WomanImg} alt='photographer'/>
        </motion.div>
      </div>
    </div>
  </motion.section>;
};

export default Contact;
