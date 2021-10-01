import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/project.css";

function Project() {
  return (
    <section>
      <h1 className="page-todo">Projects</h1>
      <li className="directions">
        Click an image to open the project repository.
      </li>
      <li className="directions">
        Click the box with the project title to see it in action!
      </li>
      <Container fluid id="work">
        <Row>
          <Col auto className="sample">
            <a
              href="https://github.com/audrey-g37/Team-Profile-Generator-HW"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./images/team-generator-screenshot.png"
                alt="An example of the file created after using the application."
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1Bd5n92cvEu-H3gyQSlRp_-Z1NQ3utA_p/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-1">VIDEO: Team Profile Generator</h4>
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/audrey-g37/Password-Generator-HW/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./images/password-generator-screenshot.png"
                alt="A newly generated password after a user answers the alerts"
              />
            </a>
            <a
              href="https://audrey-g37.github.io/Password-Generator-HW/"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-4">LIVE: Password Generator</h4>
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/matthewbush55/teacher-force"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./images/teacher-force-screenshot.png"
                alt="The teacher's homepage is shown after a successful login"
              />
            </a>
            <a
              href="https://teacher-force.herokuapp.com/login"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-3">LIVE: Teacher-Force</h4>
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/HavoxPrime/cocktailAndFood"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./images/cocktail-recipes-screenshot.png"
                alt="The 'Long Island Iced Tea' is shown in a screenshot as well as the choices for alcohol selection."
              />
            </a>
            <a
              href="https://havoxprime.github.io/cocktailAndFood/cocktail.html"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-2">LIVE: Food and Cocktails</h4>
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/audrey-g37/Employee-Tracker-HW"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./images/Employee-Tracker-Demo.gif"
                alt="Process of adding/updating employees is shown"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1ikTNi7w4STm0b088V5Ld3QYqatrizPhM/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-5"> VIDEO: Employee Tracker</h4>
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/audrey-g37/Professional-README-Generator-HW"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./images/README-Generator-Demo.gif"
                alt="Process of creating a new README"
              />
            </a>
            <a
              href="https://drive.google.com/file/d/1ZSukWy5O92JTKBdPCgh9LYSvK4j_KHk-/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-6">VIDEO: README Generator</h4>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Project;
