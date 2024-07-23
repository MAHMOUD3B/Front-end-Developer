import React, { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [popup, setPopup] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  return (
    <>
      {/* header of page */}
      <header className="d-flex align-items-center justify-content-lg-center justify-content-between gap-4 p-3">
        <div className="d-flex align-items-center gap-3">
          {/* menu button */}
          <button
            className="rounded-circle btn theme-btn d-lg-none"
            onClick={() => setPopup(true)}
          >
            <i className="fa fa-bars"></i>
          </button>
          {/* navbar links */}
          <nav className="rounded-pill d-none d-lg-block">
            <ul className="list-unstyled nav">
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
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* theme button */}
        <button
          className="rounded-circle btn theme-btn fs-5 d-flex align-items-center justify-content-center"
          onClick={() => {
            document.body.classList.remove("dark", "light");
            theme == "dark" ? setTheme("light") : setTheme("dark");
            localStorage.setItem("theme", theme == "dark" ? "light" : "dark");
          }}
        >
          {theme == "light" ? (
            <i className="fa fa-moon"></i>
          ) : (
            <i className="fa fa-sun"></i>
          )}
        </button>
      </header>

      {/* menu popup */}
      {popup && (
        <div className="popup">
          <ul className="p-3 list-unstyled menu mt-4 mx-auto rounded-4">
            {/* close button */}
            <li className="m-0">
              <div
                className="close-btn fs-3 ms-auto"
                onClick={() => setPopup(false)}
              >
                <i className="fa fa-close"></i>
              </div>
            </li>
            {/* navigation links */}
            <li className="menu-item">
              <a href="/#about" className="text-decoration-none">
                About
              </a>
            </li>
            <li className="menu-item">
              <a href="/#projects" className="text-decoration-none">
                Projects
              </a>
            </li>
            <li className="menu-item">
              <a href="/#contact" className="text-decoration-none">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
