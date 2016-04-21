import React from 'react';

const RowBuild3 = React.createClass({
  render() {
    return (
      <section className="row-build-3 jumbotron">
        <div className="container">
          <div className="col-sm-6">
            <div className="editorial-cell">
              <h2 className="h3 large">Alihkan telepon Anda ke mode belanja.</h2>
              <p className="contentPara">Berbelanja penawaran-penawaran yang ada bahkan saat dalam perjalanan. Semua penawaran yang tersedia, tanpa perlu menunggu. Cara yang lebih mudah dan lebih aman untuk membayar saat Anda bepergian.</p>
              <a data-pa-click="editorial|Bayar di mana pun" className="contentLink reverseLink" href="https://www.paypal.com/id/webapps/mpp/pay-with-app">Bayar di mana pun</a>
            </div>
          </div>
        </div>
      </section>
      );
  }
});

export default RowBuild3;