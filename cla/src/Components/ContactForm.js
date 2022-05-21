import React from 'react'

function ContactForm() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Contact Now</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <form id="request" className="main_form">
                <div className="row">
                  <div className="col-md-12 ">
                    <input className="contactus" placeholder="Name" type="type" name="Name"></input>
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Email" type="type" name="Email"></input>
                  </div>
                  <div className="col-md-12">
                    <input className="contactus" placeholder="Phone Number" type="type" name="Phone Number"></input>
                  </div>
                  <div className="col-md-12">
                    <textarea className="textarea" placeholder="Message" type="type" message="Name" defaultValue={"Message "} />
                  </div>
                  <div className="col-md-12">
                    <button className="send_btn">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;

