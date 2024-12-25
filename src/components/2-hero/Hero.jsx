import React, { useRef } from "react";
import Lottie from "lottie-react";
import animatedLaptop from "../../../public/animated-images/laptop.json";
import "./hero.css";

const Hero = () => {
  const lottieRef = useRef();
  return (
    // hero section
    <section
      className="hero d-flex align-items-center px-2 px-sm-5 mt-3"
      id="about"
    >
      <div className="info">
        <div className="profile d-flex align-items-end">
          <div className="profile-image overflow-hidden rounded-circle border">
            <img src="./images/My_Profile.jpg" alt="profile-img" />
          </div>
          <span className="icon ms-2 mb-2">
            <i className="fa fa-certificate"></i>
          </span>
        </div>
        <h1 className="title my-3">
          Software Engineer, Frontend Web Developer
        </h1>
        <p className="subtitle">
          A front-End developer, designing and developing an attractive,
          interactive and responsive user interface that provides top-notch UI.
          I look forward to working within an environment where I can learn,
          impact my team and help in achieving the company goals.
        </p>
        {/* social links */}
        <div className="icons fs-4 d-flex align-items-center gap-3">
          <a
            href="https://github.com/MAHMOUD3B"
            target="blank"
            className="icon"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/mahmoud-abbas-ph010"
            target="blank"
            className="icon"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="image d-none d-lg-flex align-items-center justify-content-end">
        {/* this element is imported from lottie-react library */}
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          style={{ width: "400px", marginRight: "-50px" }}
          animationData={animatedLaptop}
        />
      </div>
    </section>
  );
};

export default Hero;
