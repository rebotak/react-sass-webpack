import React from 'react';
import FooterTop from './FooterTop';
import FooterMiddle from './FooterMiddle';
import FooterBottom from './FooterBottom';

const Footer = React.createClass({
  render() {
    return (
      <footer>
        <div className="container">
          <FooterTop></FooterTop>
          <FooterMiddle></FooterMiddle>
          <FooterBottom></FooterBottom>
        </div>
      </footer>
      );
  }
});

export default Footer;