import {
  faClock,
  faMapMarker,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const successMessage = (
    <p className="text-success">Successful! Sent Message</p>
  );

  /* Handle Submit Message and reset input value */
  const handleSubmitMessage = (event) => {
    event.preventDefault();
    event.target.email.value = "";
    event.target.name.value = "";
    event.target.message.value = "";
    toast(successMessage);
  };

  return (
    <section className="contact spad" id="contract">
      <ToastContainer />
      <div className="container">
        <h1 className="text-center pb-md-5 fw-bold">Contract Me</h1>
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <div className="contact__address">
              <h4>Contact info</h4>
              <ul>
                <li>
                  <div className="icon">
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                  </div>
                  <p>
                    <span>azalamins@gmail.com</span>
                    <span>01628890779</span>
                  </p>
                </li>
                <li>
                  <div className="icon">
                    <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon>
                  </div>
                  <p>Rajbari sadar, Dhaka, Bangladesh</p>
                </li>
                <li>
                  <div className="icon">
                    <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                  </div>
                  <p>
                    <span>Sat - Thus : 9:00am - 5:00pm</span>
                    <span>Friday: Closed</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 mt-5 mt-md-0">
            <div className="contact__form">
              <h4>Leave a message</h4>
              <form onSubmit={handleSubmitMessage}>
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email"
                      name="email"
                      required
                    />
                  </div>
                </div>
                <textarea
                  className="form-control"
                  placeholder="Your message"
                  name="message"
                  required
                ></textarea>
                <button type="submit" className="btn btn-success btn-lg">
                  Send a Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
