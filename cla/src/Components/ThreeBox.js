import React from 'react'

function ThreeBox() {
  return (
    <>
      <div className="three_box">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="box_text">
                <i><img src="images/thr.png" alt="#" /></i>
                <h3>Computer</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box_text">
                <i><img src="images/thr1.png" alt="#" /></i>
                <h3>Laptop</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box_text">
                <i><img src="images/thr2.png" alt="#" /></i>
                <h3>Tablet</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ThreeBox;

