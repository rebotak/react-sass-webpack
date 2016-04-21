import React from 'react';

const FooterTop = React.createClass({
  render() {
    return (
      <div id="footer-top">
        <ul className="footer-main secondaryLink">
          <li><a href="#">Bantuan dan Kontak</a></li>
          <li><a href="#">Biaya</a></li>
          <li><a href="#">Keamanan</a></li>
          <li><a href="#">Aplikasi</a></li>
          <li><a href="#">Toko</a></li>
        </ul>
        <ul className="country-selector ">
          <li>
            <a className="language" href="#">English</a>
          </li>
          <li>
            <a href="#" className="country indonesia">Lihat semua negara</a>
          </li>
        </ul>
      </div>
      );
  }
});

export default FooterTop;