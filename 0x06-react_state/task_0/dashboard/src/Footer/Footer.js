import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

const Footer = () => {
  return (
    <footer>
      <p>
        Copyright {getFullYear()} - {getFooterCopy()}
      </p>
    </footer>
  );
};

export default Footer;