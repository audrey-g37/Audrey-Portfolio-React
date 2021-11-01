import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/project.css";
import PasswordGenImg from "../images/password-generator-screenshot.png";
import TeamGenImg from "../images/team-generator-screenshot.png";
import EmployeeDemo from "../images/Employee-Tracker-Demo.gif";
import ReadmeDemo from "../images/README-Generator-Demo.gif";
import GripImg from "../images/grip-screenshot.png"
import TeacherForceImg from "../images/teacher-force-screenshot.png";

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
              href="https://github.com/Korbin-Sargent/vacation-planning-app"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={GripImg}
                alt="A screenshot of the current tasks for an already created trip."
              />
            </a>
            <a
              href="https://grip-your-trip.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-1">LIVE: GRIP Vacation Planner</h4>
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/matthewbush55/teacher-force"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={TeacherForceImg}
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
              href="https://github.com/audrey-g37/Password-Generator-HW/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={PasswordGenImg}
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
              href="https://github.com/audrey-g37/Employee-Tracker-HW"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={EmployeeDemo}
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
              href="https://github.com/audrey-g37/Team-Profile-Generator-HW"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={TeamGenImg}
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
              href="https://github.com/audrey-g37/Professional-README-Generator-HW"
              target="_blank"
              rel="noreferrer"
            >
              <img src={ReadmeDemo} alt="Process of creating a new README" />
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
