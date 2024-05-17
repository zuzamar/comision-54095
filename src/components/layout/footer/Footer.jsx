import React from 'react';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {

  return (
    <div className="footer">
      <div>© 2024 Mi Perfumería</div>
      <div>
        <Facebook />
        <Twitter />
        <Instagram />
        <LinkedIn />
      </div>
    </div>
  );
};

export default Footer;
