import React from 'react'

function AboutText() {
  return (
    <>
      <div className="about">
        <div className="container">
          <div className="row d_flex">
            <div className="col-md-5">
              <div className="titlepage">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                <a className="read_more" href="#">Read More</a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="about_img">
                <figure><img src="images/about.jpg" alt="#" /></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutText;

