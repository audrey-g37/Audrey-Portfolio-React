import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/project.css";
import PasswordGenImg from "../images/password-generator-screenshot.png";
import TeamGenImg from "../images/team-generator-screenshot.png";
import EmployeeDemo from "../images/Employee-Tracker-Demo.gif";
import ReadmeDemo from "../images/README-Generator-Demo.gif";
import GripImg from "../images/grip-screenshot.png";
import TeacherForceImg from "../images/teacher-force-screenshot.png";

function Project() {
  return (
    <section>
      <h1 className="page-todo">Projects</h1>
      <ul className="directions">
      <li>
        *Click an image to open the project repository.
      </li>
      <li>
        *Click the box with the project title to see it in action!
      </li>
      </ul>
      <Container fluid id="work">
        <Row id="project-body">
          <Col className="sample">
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
            <p className="project-description">
              A vacation planning app where users can create a group trip and keep track of tasks to complete as well as the current spending. 
              <p>Check it out with the test user account:
                <li>Username: testuser</li>
              <li>Password: testing123</li></p>
            </p>
            <a
              className="in-action-link"
              href="https://grip-your-trip.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-1">LIVE: Grip Vacation Planner</h4>
            </a>
          </Col>
          <Col auto className="sample">
            <a
              href="https://github.com/audrey-g37/teacher-verse"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={TeacherForceImg}
                alt="The teacher's homepage is shown after a successful login"
              />
            </a>
            <p className="project-description">
              An app for teachers where they can easily keep track of student
              information, such as attendance, communication records (like any
              contact with a guardian), behavior records, and grades.
              <p>Check it out with the test user account:
                <li>Email: testuser@gmail.com</li>
              <li>Password: testing123</li></p>
            </p>
            <a
              className="in-action-link"
              href="https://teacher-verse.herokuapp.com/login"
              target="_blank"
              rel="noreferrer"
            >
              <h4 className="samp-text-3">LIVE: Teacher-Verse</h4>
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
            <p className="project-description">
              Generate a random password after answering prompts about criteria,
              such as password length and types of characters to include.
            </p>
            <a
              className="in-action-link"
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
            <p className="project-description">
              A command-line application where a user can add and edit
              employees. The user can store their salaries, their 'manager,'
              their position title, etc.
            </p>
            <a
              className="in-action-link"
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
            <p className="project-description">
              A command-line application where the user can select the
              employee's position and then can type in characteristics, like an
              office number, email address, etc. The employee's characteristics
              are displayed on an employee card. Cards are rendered, for each
              employee created, to an html that loads in a browser.
            </p>
            <a
              className="in-action-link"
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
            <p className="project-description">
              A command-line application where the user can make choices or type
              words as input that will be generated into a README.md file.
            </p>
            <a
              className="in-action-link"
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
