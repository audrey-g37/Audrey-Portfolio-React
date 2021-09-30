import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../styles/project.css";

function Project() {
  return (
    <section>
      <h1>Projects</h1>
      <Container fluid id="work">
        <Row>
          <Col auto className="sample">
            <a
              href="https://github.com/audrey-g37/Team-Profile-Generator-HW"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-1">Team Profile Generator</h4>
              <img
                src="./images/team-generator-screenshot.png"
                alt="An example of the file created after using the application."
              />
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://audrey-g37.github.io/Password-Generator-HW/"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-4">Password Generator</h4>
              <img
                src="./images/password-generator-screenshot.png"
                alt="A newly generated password after a user answers the alerts"
              />
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://teacher-force.herokuapp.com/login"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-3">Teacher-Force</h4>
              <img
                src="./images/teacher-force-screenshot.png"
                alt="The teacher's homepage is shown after a successful login"
              />
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://havoxprime.github.io/cocktailAndFood/cocktail.html"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-2">Food and Cocktails</h4>
              <img
                src="./images/cocktail-recipes-screenshot.png"
                alt="The 'Long Island Iced Tea' is shown in a screenshot as well as the choices for alcohol selection."
              />
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/audrey-g37/Employee-Tracker-HW"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-5">Employee Tracker</h4>
              <img
                src="./images/Employee-Tracker-Demo.gif"
                alt="Process of adding/updating employees is shown"
              />
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/audrey-g37/Professional-README-Generator-HW"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-6">Readme Generator</h4>
              <img
                src="./images/README-Generator-Demo.gif"
                alt="Process of creating a new README"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Project;
