import React from 'react'

function Slider() {
  return (
    <>
      <section className=" slider_section position-relative">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="detail-box">
                <h2>
                  best design
                </h2>
                <h1>
                  Mobile <br />
                  applications
                </h1>
                <div>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="img-box">
                      <img src="images/slider-img.png" alt="" />
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Slider;

