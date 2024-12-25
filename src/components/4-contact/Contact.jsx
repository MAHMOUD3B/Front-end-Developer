// importing formspree-react library to handle emails
import { useForm, ValidationError } from "@formspree/react";
// importing the animated envelope image => [downloaded from lottie-react library]
import animatedContact from "../../../public/animated-images/contact.json";
import React from "react";
import Lottie from "lottie-react";
import "./contact.css";

const Contact = () => {
  // this state for handling form emails
  const [state, handleSubmit] = useForm("xjkbvjql");
  return (
    // contact us section
    <section className="contact px-3" id="contact">
      <div className="contact-head text-center text-sm-start mb-5">
        <h3 className="fs-2 fw-bold">
          <i className="fa fa-envelope me-3 icon"></i>
          Contact Us
        </h3>
        <p>Contact me via email and I will be happy to respond to you. 😊💖</p>
      </div>
      {/* contact form */}
      <div className="contact-content my-4 d-flex align-items-center">
        <form
          action=""
          className="contact-form d-flex flex-column flex-grow-1"
          onSubmit={handleSubmit}
        >
          <div className="form-group d-lg-flex align-items-center mb-3">
            <label htmlFor="email" className="d-block mb-2 w-25">
              Email Address:{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control shadow-none"
              placeholder="Your Email"
              required
              autoComplete="off"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-group d-lg-flex align-items-center">
            <label htmlFor="message" className="d-block mb-2 w-25">
              Your Message:{" "}
            </label>
            <textarea
              name="message"
              id="message"
              className="form-control shadow-none"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <input
            type="submit"
            disabled={state.submitting}
            className="mt-4 align-self-center align-self-sm-start btn px-4"
          />
          {/* show message on submitting the email and user message */}
          {state.succeeded && (
            <h4 className="text-center text-success mt-4">
              Thanks for joining!
            </h4>
          )}
        </form>
        <div className="contact-image d-none d-lg-flex flex-grow-1 justify-content-center">
          {/* this element is imported from lottie-react library */}
          <Lottie style={{ width: "300px" }} animationData={animatedContact} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
