import React from 'react';
import { Row, Col } from 'react-bootstrap';

// project imports
import Self from '../images/Self.png';
import '../styles/about.css';

const workSection = `Most recently, I worked for a consulting firm and engaged with clients to develop multiple
		web applications. I am most experienced with the MERN stack, and I am very self-driven to
		learn new technology when the need presents itself. While working for the consulting firm,
		having no prior-experience with AWS, I read documentation to implement Cognito, S3 Buckets,
		Lambda, and Amplify in a full stack application. I also ingegrated Twilio and SendGrid by
		communicating with the lead developer and applying practices shown in the documentation.`;

const futureGoalsSection = `I enjoy a challenge, and I strive to learn and apply new methods to increase the efficiency
		of my code. One of my goals includes becoming a lead developer as I gain more experience in
		the industry. As a former teacher, I have the skills necessary to excel in this role,
		including using patience to explain how and why certain methods would be preferred.`;

const motivationSection = `I enjoy communicating with clients to help them get the functionality they want, while
		keeping in mind the needs of the user(s). I like to consider the perspective of all
		potential users: from my not-so-tech-savvy grandparents to school-age children. I am always
		considering what adjustments could enhance and simply user experience.`;

const About = () => {
	return (
		<Row id='about-me'>
			<Col>
				<Row>
					<img alt='Audrey' src={Self} />
				</Row>
				<Row>{workSection}</Row>
				<hr />
				<Row>{futureGoalsSection}</Row>
				<hr />
				<Row>{motivationSection}</Row>
			</Col>
		</Row>
	);
};

export default About;
