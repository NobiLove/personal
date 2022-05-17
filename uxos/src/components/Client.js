import React from 'react'

function Client() {
  return (
    <>
      <section className="client_section layout_margin">
        <div className="container">
          <div className="heading_container">
            <h2>
              Check what people say About us!
            </h2>
          </div>
          <div className="client_container layout_padding2-top">
            <div className="client-id">
              <div className="img-box">
                <img src="images/client.png" alt="" />
              </div>
              <div className="name">
                <img src="images/quote.png" alt="" />
                <h6>
                  Sandy Delex
                </h6>
                <p>
                  Reprehenderit
                </p>
              </div>
            </div>
            <div className="client-detail">
              <p>
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud esse cillum
              </p>
            </div>
            <div className="d-flex justify-content-end">
              <a href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Client;
