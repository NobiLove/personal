import React from 'react'

function Products() {
  return (
    <>
      <div className="products">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Our Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="our_products">
                <div className="row">
                  <div className="col-md-4 margin_bottom1">
                    <div className="product_box">
                      <figure><img src="images/product1.png" alt="#" /></figure>
                      <h3>Computer</h3>
                    </div>
                  </div>
                  <div className="col-md-4 margin_bottom1">
                    <div className="product_box">
                      <figure><img src="images/product2.png" alt="#" /></figure>
                      <h3>Laptop</h3>
                    </div>
                  </div>
                  <div className="col-md-4 margin_bottom1">
                    <div className="product_box">
                      <figure><img src="images/product3.png" alt="#" /></figure>
                      <h3>Tablet</h3>
                    </div>
                  </div>
                  <div className="col-md-4 margin_bottom1">
                    <div className="product_box">
                      <figure><img src="images/product4.png" alt="#" /></figure>
                      <h3>Speakers</h3>
                    </div>
                  </div>
                  <div className="col-md-4 margin_bottom1">
                    <div className="product_box">
                      <figure><img src="images/product5.png" alt="#" /></figure>
                      <h3>Internet</h3>
                    </div>
                  </div>
                  <div className="col-md-4 margin_bottom1">
                    <div className="product_box">
                      <figure><img src="images/product6.png" alt="#" /></figure>
                      <h3>Hardisk</h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="product_box">
                      <figure><img src="images/product7.png" alt="#" /></figure>
                      <h3>Rams</h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="product_box">
                      <figure><img src="images/product8.png" alt="#" /></figure>
                      <h3>Battery</h3>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="product_box">
                      <figure><img src="images/product9.png" alt="#" /></figure>
                      <h3>Drive</h3>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <a className="read_more" href="#">See More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;

