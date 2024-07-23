import React, { useEffect, useState } from "react";
import "./footer.css";
const Footer = () => {
  const [showBtn, setShowBtn] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrl = scrollY;
      scrl >= 300 ? setShowBtn(true) : setShowBtn(false);
    });
  }, []);
  return (
    <>
      {/* footer section */}
      <footer className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between px-3 pb-4">
        <ul className="nav mb-3 mb-md-0 justify-content-center">
          <li className="nav-item">
            <a href="/#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/#projects" className="nav-link">
              Projects
            </a>
          </li>

          <li className="nav-item">
            <a href="/#contact" className="nav-link">
              Contact Us
            </a>
          </li>
        </ul>
        <p className="footer-text"> &copy; 2024, All rights are reversed</p>
      </footer>

      {/* scroll to top button */}
      <button
        style={{ opacity: showBtn ? 1 : 0 }}
        onClick={() => {
          scroll(0, 0);
        }}
        className="scroll-btn position-fixed bottom-0 mb-4 end-0 me-4 rounded-circle"
      >
        <i className="fa fa-arrow-up" />
      </button>
    </>
  );
};

export default Footer;
