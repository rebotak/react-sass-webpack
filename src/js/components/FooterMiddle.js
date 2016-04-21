import React from 'react';

const FooterMiddle = React.createClass({
  render() {
    return (
      <div id="footer-middle">
        <ul className="pull-left">
          <li><a href="https://www.paypal.com/id/webapps/mpp/about?locale.x=id_ID">Tentang</a></li>
          <li><a href="https://www.paypal.com/stories/us">Blog</a></li>
          <li><a href="https://www.paypal.com/id/webapps/mpp/jobs?locale.x=id_ID">Lowongan kerja</a></li>
          <li><a href="https://www.paypal.com/id/webapps/mpp/full-sitemap?locale.x=id_ID">Peta situs</a></li>
          <li><a href="https://developer.paypal.com/">Pengembang</a></li>
          <li><a href="https://www.paypal-marketing.com/emarketing/partner/na/program/regional_programs.html">Mitra</a></li>
        </ul>
        <ul className="pull-right">
          <li id="footer-copyright" className="footer-copyright"><a>© 1999–2016</a></li>
          <li id="footer-privacy"><a href="#">Kebijakan Privasi</a></li>
          <li className="footer-legal"><a href="#">Kesepakatan Hukum</a></li>
          <li id="siteFeedback" className>
            <a href="#">Umpan Balik</a>
          </li>
        </ul>
      </div>
      );
  }
});

export default FooterMiddle;