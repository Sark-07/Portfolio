import React from 'react';
import { FaInstagram, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='copyright'>
        <p>
          copyright &#xa9; {new Date().getFullYear()} | All rights reserved{' '}
        </p>
      </div>
      <div className='social-icons'>
        <a href='https://www.instagram.com/pritam_07sarkar/'>
          <FaInstagram className='icons' />
        </a>
        <a href='https://discord.gg/VmuEuMsZ'>
          <FaDiscord className='icons' />
        </a>
        <a href='https://www.github.com/sark-07'>
          <FaGithub className='icons' />
        </a>
      </div>
    </section>
  );
};

export default Footer;
