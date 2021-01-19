import React from 'react';
import './Footer.scss';
import Icons from '../Icons/Icons.js';


function Footer() {
  return (
    <div className="footer">

      <div className="footer_c">
        <div className="footer_space"></div>
        <h1 className="largetext">Aavar Khatiwoda</h1>
        <div className="smalltext">Let's Get in Touch</div>
        <div className="footer_space"></div>
        <Icons />
        <div className="footer_space"></div>
      </div>
    </div>
  );
}

export default Footer;
