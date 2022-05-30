import React from 'react'

function AboutInfo() {
  return (
    <>
      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container d-flex justify-content-lg-start">
            <h2>
              About Us
            </h2>
          </div>
          <div className="layout_padding2-top">
            <div className="row">
              <div className="col-md-5">
                <div className="detail-box b-1">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                  <a href="">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-5">
                <div className="detail-box b-2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutInfo;

