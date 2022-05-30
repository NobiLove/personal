import React from 'react'

function ContactForm() {
  return (
    <>
      <section className="contact_section layout_padding">
        <div className="container">
          <div className="d-flex ">
            <h2>
              Contact Us
            </h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <form action="">
                <div className="contact_form-container">
                  <div>
                    <div>
                      <input type="text" placeholder="Name"></input>
                    </div>
                    <div>
                      <input type="text" placeholder="Phone Number"></input>
                    </div>
                    <div>
                      <input type="email" placeholder="Email"></input>
                    </div>
                    <div className="mt-5">
                      <input type="text" placeholder="Message"></input>
                    </div>
                    <div className="mt-5">
                      <button type="submit">
                        send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="contact_img-box">
                <img src="images/contact-img.png" alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
