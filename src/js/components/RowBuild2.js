import React from 'react';

const RowBuild2 = React.createClass({
  render() {
    return (
      <section className="row-build-2 jumbotron">
        <div className="container">
          <div className="col-sm-6">
            <div className="editorial-cell">
              <h2 className="h3 large">Secepat yang diinginkan.</h2>
              <p className="contentPara">Jutaan orang di seluruh dunia menggunakan PayPal karena satu alasan: PayPal mudah digunakan. Hanya dengan alamat email dan sandi, Anda akan melalui proses checkout dengan cepat.</p>
              <a data-pa-click="editorial|Bayar di eBay" className="contentLink" href="https://www.paypal.com/id/webapps/mpp/pay-on-ebay">Bayar di eBay</a>
              <a data-pa-click="editorial|Bayar di situs web" className="contentLink" href="https://www.paypal.com/id/webapps/mpp/pay-online">Bayar di situs web</a>
            </div>
          </div>
        </div>
      </section>
      );
  }
});

export default RowBuild2;