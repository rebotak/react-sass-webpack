import React from 'react';

const Navbar = React.createClass({
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="logo">
              <img src="ppcom.svg" alt />
            </div>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><a href="#" className="has-submenu active" controls="submenu-buy">Beli</a>
                <div className="submenu-wrap">
                  <ul className="dropdown-menu">
                    <li><a href="#">Bayar di eBay</a></li>
                    <li><a href="#">Bayar di eBay</a></li>
                    <li><a href="#">Bayar di eBay</a></li>
                    <li><a href="#">Bayar di eBay</a></li>
                  </ul>
                </div>
              </li>
              <li><a href="#" className="has-submenu">Jual</a></li>
              <li><a href="#" className="has-submenu">Kirim</a></li>
              <li><a href="#">Bisnis</a></li>
            </ul>
            <div className="navbar-right">
              <a href="#" className="btn btn-small btn-info">Login</a>
              <a href="#" className="btn btn-small btn-primary">Daftar</a>
            </div>
          </div>
          { /*/.nav-collapse */ }
        </div>
      </nav>
      );
  }
});

export default Navbar;