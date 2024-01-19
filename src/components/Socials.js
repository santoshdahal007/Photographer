import React from 'react';
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube
} from 'react-icons/im';

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li><ImFacebook/></li>
      <li><ImTwitter/></li>
      <li><ImPinterest/></li>
      <li><ImInstagram/></li>
      <li><ImYoutube/></li>
    </ul>
  </div>;
};

export default Socials;
