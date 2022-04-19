import React from 'react';
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer>
      <div className='icons'>
      <a href="https://github.com/adamabilal" target="_blank">
      <FontAwesomeIcon icon={faGithub} color="#0000FF" size='10x'/>
      </a>
      <a href="https://www.linkedin.com/in/adama-traor%C3%A9-90136b175/" target="_blank">
      <FontAwesomeIcon icon={faLinkedin} color="#0000FF" size='10x'/>
      </a>
      <a href="https://discord.com/channels/@me" target="_blank">
      <FontAwesomeIcon icon={faDiscord} color="#0000FF" size='10x'/>
      </a>
      </div>
    </footer>
  );
};

export default Footer;
