import React from 'react';

const RowBuild1 = React.createClass({
  render() {
    return (
      <section className="row-build-1 jumbotron">
        <div className="container">
          <div className="col-sm-6">
            <div className="editorial-cell">
              <h1>Dengan perlindungan pembeli, Anda tidak perlu lagi khawatir ketika membeli.</h1>
              <p>Tanpa kekhawatiran ketika membeli, Anda dapat menikmati kemudahan berbelanja.</p>
              <div className="row">
                <p>
                  <a className="btn btn-lg btn-primary hero-btn col-xs-8" href="#">Daftar Sekarang</a>
                </p>
              </div>
              <div className="row">
                <a className="hatch" href="#">Pelajari lebih lanjut tentang Perlindungan Pembeli</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      );
  }
});

export default RowBuild1;