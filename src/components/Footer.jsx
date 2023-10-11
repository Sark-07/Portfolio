import React from 'react';
import { FaInstagram, FaGithub, FaDiscord, FaReact } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='copyright'>
        <p>
          Made with <span>&#x2764;</span> & <FaReact style={{color: '#61DBFB'}}/>
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
