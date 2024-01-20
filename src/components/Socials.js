import React from 'react';
import {
  ImFacebook,
  ImInstagram,
} from 'react-icons/im';

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li><ImFacebook/></li>
      <li><ImInstagram/></li>
    </ul>
  </div>;
};

export default Socials;
