import React from 'react'

function ComputerSection() {
  return (
    <>
      <div className="laptop">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="titlepage">
                <p>Every Computer and laptop</p>
                <h2>Up to 40% off !</h2>
                <a className="read_more" href="#">Shop Now</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="laptop_box">
                <figure><img src="images/pc.png" alt="#" /></figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComputerSection;

