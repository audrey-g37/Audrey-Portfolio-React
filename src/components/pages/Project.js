import React from "react";
import Row from "react-bootstrap/Row";
import "../../styles/project.css";

function Project() {
  return (
    <section id="work">
      <h1>Projects</h1>
      <Row>
        <figure className="sample-main">
          <a
            href="https://github.com/audrey-g37/Team-Profile-Generator-HW"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Team Profile Generator</h4>
            <img
              className="img-fluid"
              src="./images/team-generator-screenshot.png"
              alt="An example of the file created after using the application."
            />
          </a>
        </figure>
        <figure className="sample-secondary">
          <a
            href="https://havoxprime.github.io/cocktailAndFood/cocktail.html"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Cocktails</h4>
            <img
              className="img-fluid"
              src="./images/cocktail-recipes-screenshot.png"
              alt="The 'Long Island Iced Tea' is shown in a screenshot as well as the choices for alcohol selection."
            />
          </a>
        </figure>
        <figure className="sample-secondary">
          <a
            href="https://teacher-force.herokuapp.com/login"
            target="_blank"
            rel="noreferrer"
          >
            <h4>Teacher-Force</h4>
            <img
              className="img-fluid"
              src="./images/teacher-force-screenshot.png"
              alt="The teacher's homepage is shown after a successful login"
            />
          </a>
        </figure>
      </Row>
    </section>
  );
}

export default Project;
