import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';
import {Link} from 'react-router-dom';

const Header = () => {
  return <header 
    className='
      fixed 
      w-full 
      px-[30px] 
      lg:px-[100px] 
      z-30 
      h-[100px] 
      lg:h-[140px] 
      flex 
      items-center
      bg-white'>
        <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
          <Link to={'/'} className='max-w-[200px]'>
            <img src={Logo} alt='company logo'/>
          </Link>
          <nav className='hidden xl:flex gap-x-12 font-semibold'>
            <Link to={'/'} className='text-lg hover:text-primray transition'>Home</Link>
            <Link to={'/about'} className='text-lg hover:text-primray transition'>About</Link>
            <Link to={'/portfolio'} className='text-lg hover:text-primray transition'>Portfolio</Link>
            <Link to={'/contact'} className='text-lg hover:text-primray transition'>Contact</Link>
          </nav>
        </div>
        <Socials/>
        <MobileNav/>
    </header>;
};

export default Header;
