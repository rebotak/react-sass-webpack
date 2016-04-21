import React from 'react';

const RowBuild4 = React.createClass({
  render() {
    return (
      <section className="row-build-4 jumbotron">
        <div className="container">
          <div className="containerCentered">
            <div className="col-sm-6 ">
              <h2 className="contentHead large h3">Bayar kepada siapa pun, di mana pun.</h2>
              <p className="contentPara">Bayar barang atau jasa dengan mudah dan lebih aman, cukup dengan alamat email atau nomor telepon. Di mana pun mereka berada, pembayaran Anda akan diterima dengan senang hati.</p>
              <a className="contentLink" href="https://www.paypal.com/id/webapps/mpp/send-payments-online">Kirim pembayaran</a>
            </div>
            <div className="col-sm-6 ">
              <h2 className="contentHead large h3">Minta pembayaran dengan mudah.</h2>
              <p className="contentPara">Meminta pembayaran adalah pengingat untuk pekerjaan yang telah diselesaikan. Mereka akan memperoleh undangan untuk membayar dengan cara yang diinginkan tanpa harus memikirkannya.</p>
              <a className="contentLink" href="https://www.paypal.com/id/webapps/mpp/requesting-payments">Meminta pembayaran</a>
            </div>
          </div>
        </div>
      </section>
      );
  }
});

export default RowBuild4;