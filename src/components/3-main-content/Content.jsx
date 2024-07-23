import React, { useState } from "react";
import projects from "./projects.json"; // improting projects form projects json file
import "./content.css";

const Content = () => {
  const [activeBtn, setActiveBtn] = useState("all");
  const handleActive = (category) => {
    return activeBtn == category
      ? `active projects-btn btn text-capitalize`
      : "projects-btn btn text-capitalize";
  };

  return (
    // projects section
    <main
      className="d-flex align-items-start row-gap-5 column-gap-3 flex-column flex-sm-row"
      id="projects"
    >
      {/* left side buttons menu */}
      <aside className="d-flex flex-wrap gap-3 flex-sm-column align-items-center justify-content-center">
        <button
          onClick={() => setActiveBtn("all")}
          className={handleActive("all")}
        >
          all projects
        </button>
        <button
          onClick={() => setActiveBtn("css")}
          className={handleActive("css")}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => setActiveBtn("js")}
          className={handleActive("js")}
        >
          JavaScript
        </button>
        <button
          onClick={() => setActiveBtn("bootstrap")}
          className={handleActive("bootstrap")}
        >
          Bootstrap
        </button>
      </aside>

      {/* the projects */}
      <section className="content d-flex flex-wrap row-gap-4 column-gap-3 justify-content-center align-items-center flex-grow-1">
        {/* maping on projects list to create each project */}
        {projects.map(
          ({ id, image, title, description, category, url, githubUrl }) => {
            if (activeBtn === "all") {
              return (
                <div className="card" key={id}>
                  <img src={image} alt="" className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <div className="social">
                      <div className="icons d-flex align-content-center justify-content-between">
                        <a href={url} target="blank" className="icon">
                          <i className="fa fa-link" />
                        </a>
                        <a href={githubUrl} target="blank" className="icon">
                          <i className="fa-brands fa-github" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else if (activeBtn === category) {
              return (
                <div className="card" key={id}>
                  <img src={image} alt="" className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
                    <div className="social">
                      <div className="icons d-flex align-content-center justify-content-between">
                        <a href={url} target="blank" className="icon">
                          <i className="fa fa-link"></i>
                        </a>
                        <a href={githubUrl} target="blank" className="icon">
                          <i className="fa-brands fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          }
        )}
      </section>
    </main>
  );
};

export default Content;
